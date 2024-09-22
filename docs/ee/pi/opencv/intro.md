# OpenCV 简介

OpenCV（ Open Source Computer Vision Library）是一个开源的机器视觉程序库，源自于 1999 年 Intel 的一个研究项目。 OpenCV 包含多种常见的机器视觉算法，目前仍然处于积极开发中，不断有新的功 能和算法被整合进来。 OpenCV 支持多用开发语言如 C++,Java,Python 等，本试验主要采用 Python 语 言。

OpenCV 具有模块化结构，包含不同层次的功能为用户使用。下面是常用的模块列表：

核心功能（ Core functionality）：定义了基本的数据结构，包括多维矩阵数组和被其他模块使用的基本

功能。

图像处理（ Image processing）：一个图像处理模块，它包括线性和非线性图像滤波，几何图形转化（重 置大小，放射和透视变形，通用基本表格重置映射），色彩空间转换，直方图等。

视频处理（ video）：一个视频处理模块，它包括动作判断，背景弱化和目标跟踪算法。

3D 校准（ calib3d）：基于多视图的几何算法，平面和立体摄像机校准，对象姿势判断，立体匹配算法，和

3D 元素的重建。

平面特征（ features2d）：突出的特征判断，特征描述和对特征描述的对比。

对象检测（ objdetect）：目标和预定义类别实例化的检测（例如：脸、眼睛、杯子、人、汽车等等）。

图形接口（ highgui）：一个容易使用的用户功能界面。

视频输入输出（ videoio）：一个容易使用的视频采集和视频解码器。

OpenCV 采用 C++ 语言开发，它还包含一个 Python 语言的绑定，在树莓派上可以直接使用 Python 代码使用 OpenCV 所提供的功能。

OpenCV 包含的功能模块非常多，这章主要介绍图片、物体检测与识别中常用的功能，其它的模块与 函数的用法请参考其它书籍或者在线文档。

1. 图片的存储

在计算机中，图片由二维的数据矩阵（高度，宽度）来表示及存储，如图 [4.1](#_page33_x72.00_y64.23) 所示。矩阵中的每个元素表 示一个像素点（ Pixel），在彩色图片中每个像素点由三种基本颜色组成。

OpenCV 中提供了图片的读、写函数 imread()、 imshow()、 imwrite()来读取、显示、保存图片， imread(filename,flags=None)函数能够读取大多数类型的图片并以 Numpy 数组的形式保存图片像素 点的信息，函数中的 flags 指示图片读取的模式，常用的读取灰度图片 flags=0，彩色图片 flags=1。例如下

27

28 第四章 OPENCV 基础

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.059.png)

<a name="_page33_x72.00_y64.23"></a>图 4.1: 图片及像素点示意图

面的代码就用来打开一副保存在电脑上的图像。需要注意的是为正常显示图片，调用 imshow()函数后需 要采用 waitKey()函数设定显示等待时间。

1  #!/ bin / python![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.060.png)
1  import cv2 as cv # 加 载 OpenCV 库
1  img = cv.imread(' test\_set/ lena\_color\_512. tif' ,1) # 打 开 图 像 文 件
1  cv.imshow(' Lena ' ,img) # 显 示 图 像
1  cv.waitKey(0) # 等 待 用 户 按 键
1  cv.destroyWindow(' Lena ' ) # 关 闭 显 示 窗 口
2. 图片的基本处理

对图片的基本处理即对二维图片数据的处理，主要包括对图片色彩的空间的处理以及对图片尺寸、滤 波等处理， OpenCV 中也提供了丰富的处理函数实现对图片的基本操作。

- 图片的颜色空间分解

  颜色空间是采用数学的方式表示颜色的方法，常见的有 RGB、HSV 等。 RGB 就是采用颜色的红色

- R）、绿色（ G）和蓝色（ B）分量来表示颜色； HSV 色调（ H）、饱和度（ S）和明度（ V）三个分量来表示颜 色，如图 [4.2](#_page34_x72.00_y315.45) 表示。由于 HSV 颜色空间更符合人的主观感受，因此在图像处理软件中有很多应用，在 机器视觉领域也经常用来对色彩进行分析。但 OpenCV 中缺省的颜色空间采用 BGR 表示，常常需 要进行图片的颜色空间转化。 OpenCV 中提供 cvtColor()函数来实现不同颜色空间的转化。

  在图片的颜色处理中常常需要对图片的进行颜色进行过滤，提取图片中感兴趣的颜色。 OpenCV 采 用 inRange()函数对图像中的色彩进行过滤。但是需要注意的是 inRange()函数中需要指定色彩的 范围，为更加方便的对设置范围进行调整可以使用 **createTrackbar()**、**getTrackbarPos()** 函数在 图形界面中增加滑动条 [1](#_page123_x72.00_y206.18)，参考代码如下（这里没有使用滑动条）：

1  import numpy as np![ref4]
1  import cv2 as cv
1  from picamera2 import Picamera2
1  import time
1  cam = Picamera2() # 初 始 化 摄 像 头
1  cam.still\_configuration.main.size = (640,480)
1  cam.still\_configuration.main.format = ' RGB888'

1. 图片形状检测 29

| cam.configure(" still")                                                  |
| ------------------------------------------------------------------------ |
| cam.start()                                                              |
| time.sleep(1)                                                            |
| while ( True ):                                                          |
| frame = cam.capture\_array(" main") # 读 取 摄 像 头 数 据               |
| hsv=cv.cvtColor(frame,cv.COLOR\_BGR2HSV) # 转 换 颜 色 空 间             |
| # 通 过 颜 色 设 计 模 板                                                |
| image\_mask=cv.inRange(hsv,np.array([40,50,50]), np.array([80,255,255])) |
| # 计 算 输 出 图 像                                                      |
| output=cv.bitwise\_and(frame,frame,mask=image\_mask)                     |
| cv.imshow(' Original ' ,frame) # 显 示 原 始 图 像                       |
| cv.imshow(' Output ' ,output) # 显 示 输 出 图 像                        |
| if cv.waitKey(1) == ord ( "q"): # 等 待 按 键                            |
| break                                                                    |
| cv.destroyAllWindows()                                                   |
| cam.release()                                                            |

8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.062.png)

<a name="_page34_x72.00_y315.45"></a>图 4.2: HSV 色彩空间

- 图片的基本处理

  图片的基本处理包括旋转、拉伸、透视、分割、混合等，其本质就是对图像的矩阵进行一些变换，例 如当对图片进行拉伸时通过插值函数来补全其中的像素点，将多幅图片合成在一起形成一幅图片。 OpenCV 提供了丰富的图片处理函数如 cv\_bitwise\_and(), cv\_add(), cv\_resize()，具体可以参 考 OpenCV 中提供的例子 [2](#_page123_x72.00_y241.56)。

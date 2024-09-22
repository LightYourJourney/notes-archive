1. 动手实验：图片处理及图形识别
2. <a name="_page37_x72.00_y115.69"></a>图片的简单的处理

可以使用树莓派自带的命令用摄像头拍摄一张自己校园卡或身份证的照片：

1  $ libcamera-jpeg -o pic.jpeg![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.065.png)

|
    | import cv2 as cv                                       |
    | ------------------------------------------------------ |
    |                                                        |
    | img = cv.imread(' opencv - logo - white . png' ,0)     |
    |                                                        |
    | img = cv.medianBlur(img,5)                             |
    |                                                        |
    | cimg = cv.cvtColor(img,cv.COLOR\_GRAY2BGR)             |
    |                                                        |
    | circles = cv.HoughCircles(img,cv.HOUGH\_GRADIENT,1,20, |
    |                                                        |
    | param1=50,param2=30,                                   |
    |                                                        |
    | minRadius=0,                                           |
    |                                                        |
    | maxRadius=0)                                           |
    |                                                        |
    | circles = np.uint16(np.around(circles))                |
    |                                                        |
    | for i in circles[0,:]:                                 |

   利用 OpenCV 对该照片进行一些简单的操作如颜色变换、矫正处理。 Perspective Transformation 是 OpenCV 中的一个功能，它允许你将图像从一个透视投影转换到另一个透视投影，常用于校正图像的透视 畸变或者提取特定区域的图像 [^3]）。

使用透视变化需要先定义原始图像中的四个顶点坐标以及目标图像中的对应顶点坐标：



| import numpy as np                                                                 |
| ---------------------------------------------------------------------------------- |
| original\_points = np.float32([[x1, y1], [x2, y2], [x3, y3], [x4, y4]])            |
| target\_points = np.float32([[x1\_prime, y1\_prime], [x2\_prime, y2\_prime],       |
| [x3\_prime, y3\_prime], [x4\_prime, y4\_prime]])                                   |
| # 计 算 透 视 变 换 矩 阵：                                                        |
| perspective\_matrix = cv.getPerspectiveTransform(original\_points, target\_points) |
| # 进 行 透 视 变 换：                                                              |
| output\_image = cv.warpPerspective(image, perspective\_matrix, (width, height))    |

1 2 3 4 5 6 7 8 9

这里的 width 和 height 是输出图像的尺寸。

2. 图片形状的识别
- 使用 Hough 变换来识别照片中的圆形使用 Hough 变换来识别圆形主要有以下几个步骤：
1. 图像滤波
1. 转化为灰度图片
1. 使用 HoughCircles() 来寻找圆形

1. 思考题 33

10 # draw the outer circle![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.066.png)

11 cv.circle(cimg,(i[0],i[1]),i[2],(0,255,0),2) 12 # draw the center of the circle

13 cv.circle(cimg,(i[0],i[1]),2,(0,0,255),3)

14  cv.imshow(' detected␣circles ' ,cimg)
14  cv.waitKey(0)
14  cv.destroyAllWindows()
- 使用 findContours()函数来识别轮廓

  使用 findContours()函数来识别图片中的轮廓，并在原图片中将识别出的结果标记出来，另外计算 轮廓的中心、周长、面积等参数。需要注意的是 findContours()需要对图片进行二值化处理。参考代 码如下所示：



| import cv2 as cv                                                 |
| ---------------------------------------------------------------- |
|                                                                  |
| # find the contours                                              |
| im = cv.imread(' test. jpg ' )                                   |
| imgray = cv.cvtColor(im, cv.COLOR\_BGR2GRAY)                     |
| ret, thresh = cv.threshold(imgray, 127, 255, 0)                  |
| contours, hierarchy = cv.findContours(thresh, cv.RETR\_TREE, cv. |
| CHAIN\_APPROX\_SIMPLE)                                           |
|                                                                  |
| # draw the contours , in green color                             |
| cnt = contours[4]                                                |
| cv.drawContours(img, [cnt], 0, (0,255,0), 3)                     |

1 2 3 4 5 6 7 8

9 10 11 12

3. 注意事项
1. Numpy 库的使用

   Numpy 库主要用于 Python 数组的运算，也是 OpenCV 关于图片处理的基础。 Numpy 数组的 主要属性有 ndim,shape,size,dtype,itemsize 等， Numpy 提供了丰富的处理函数及矩阵运算函数，

   如 arange(),zeros(),reval(),reshape(),sort()等。Numpy 库的使用可以参考 [5] 中获得帮助。

2. 数据位数扩展

   由于图片中各像素点采用 uint8 表示，但是当做滤波等运算的时候为保持计算精度，通常要对相应的 像素点进行数据位的扩展，如将其转化成 64 位的浮点数等，在计算完成后再转化为 uint8。

3. OpenCV 中性能的评估

   为评估算法的运算性能， OpenCV 中也提供了对于的函数如 getTickCount(),getTickFrequency()等 通过获取计算的时间来评估算法的性能。

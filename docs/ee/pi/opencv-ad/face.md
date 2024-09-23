# 人脸识别算法基本原理

<a name="_page66_x72.00_y427.67"></a>人脸识别是机器分类中的重要领域之一，对于给出的一张图片如何让机器识别出其中的人脸，许多研 究者发展了多种人脸识别的方法，如基于颜色的人脸识别、基于运动的人脸识别等 [8](#_page123_x72.00_y466.96)。这些识别方法或多或 少均有一些限制同时无法取得满意的识别效果。直至 2001 年 Viola 与 Jones 提出了基于图片特征的弱分 类器级联的人脸识别算法，人脸识别算法才取得了突破性进展。随着算力的不断增强，基于多种神经网络 复杂的人脸识别算法也被提出，进一步提升了识别成功率。

虽然 Viola 与 Jones 提出的人脸识别算法也存在一些限制，如需要正脸、固定尺寸的照片等，但是相 比于后来提出的基于神经网络的复杂算法，降低了运行平台的处理能力要求， OpenCV 中的人脸识别算法 也是基于该算法，因此，本章着重介绍该算法的基本原理。该算法主要有两个核心，主要是 Haar 图片的图 片特征的弱分类器的构建及多个弱分类器的级联。

- Haar 特征计算

  Haar-feature 思想源自匈牙利数学家 Alfréd Haar 于 1904 年提出的 Haar 序列，Haar 序列与 Fourier 序列类似构成了空间的一序列正交基，通过一系列的正交基将对象分解出来。 OpenCV 通过计算 Haar-feature 来实现对人脸的识别，论文 [[9](#_page123_x72.00_y502.59)] 给出了算法的基本原理。图片 I(x, y) 的特征定义式如

  式 [7.1](#_page66_x219.77_y704.96) 所示，其中 I 为图片， (x,y) 为像素点， w(x,y) ∈(− 1,0,1) 为权值。



<a name="_page66_x219.77_y704.96"></a> 1, if ∑ x,y w(x,y)I(x,y) > 0

f (I) =  0 else. (7.1)

如图 [7.2](#_page67_x72.00_y249.47) 所示，某一像素框中的特性定义为在矩形框内灰色部分的像素点的和与白色像素点和之差， 通过特性的计算来实现对特性检测。图 [7.2](#_page67_x72.00_y249.47)c 对应于人脸中眼睛的特征计算，眼睛在鼻子的两侧，眼

62 第七章 OPENCV 进阶

睛的颜色比鼻子的颜色暗。 需要注意的是，根据上述的定义图片的特征的计算量是非常巨大的，为实现对图像特征的快速计

算， OpenCV 通过对图像的积分运算快速实现了对图像特性的计算，像素点 (x,y) 积分的定义为 ii(x,y) = ∑ x′ ≤ x,y ′ ≤ y i(x′,y′)，图 [7.3](#_page67_x72.00_y529.46) 给出了面积 D 的图片积分的计算方式为 D = I(4) − I(2) −

I(3) + I(1)。

- 简单分类器级联

  在解决图片特征值快速计算后，如何从众多的特征值中选择相关的特征值进行来进行图片的分类，

  AdaBoost 方法被用来构建简单的分类器实现了分类速度的快速提升。更进一步的，如何众多简单分 类器的基础上进一步提升检测的性能，核心思想就是将简单的分类器级联，将上一级分类器的判决 的结果作为下一个分类器的输入，通过逐级检测以提升检测的概率。其基本原理如图 [7.4](#_page68_x72.00_y64.23) 所示。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.099.png)

<a name="_page67_x72.00_y249.47"></a>图 7.2: 图片的几种特征值示意

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.100.png)

<a name="_page67_x72.00_y529.46"></a>图 7.3: 图积分值快速计算示意图


3. 树莓派对摄像头的处理 63

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.101.png)

<a name="_page68_x72.00_y64.23"></a>图 7.4: 级联检测器

下面代码给出了 OpenCV 中对人脸识别的代码： import cv2 as cv

|                                                               |
| :------------------------------------------------------------ |
| filename = ' / path / to / my/ pic . jpg ' # 图 片 的 位 置   |
|                                                               |
| def detect(filename):                                         |
| face\_cascade = cv.CascadeClassifier(cv.data.haarcascades + ' |
| haarcascade\_frontalface\_default. xml' )                     |
| img = cv.imread(filename)                                     |
| gray = cv.cvtColor(img, cv.COLOR\_BGR2GRAY)                   |
| faces = face\_cascade.detectMultiScale(gray, 1.3, 5)          |
|                                                               |
| # 将 检 测 到 的 人 脸 标 记 出 来                            |
| for (x,y,w,h) in faces:                                       |
| img = cv.rectangle(img,(x,y),(x+w,y+h),(255,0,0),2)           |
|                                                               |
| cv.namedWindow( ' Face ␣Detected !! ' )                       |
| cv.imshow(' Face ␣Detected !! ' , img)                        |
| cv.waitKey(0)                                                 |
| cv.destroyAllWindows()                                        |

1 2 3 4 5 6

7 8

9 10 11 12 13

14 15 16 17

18

在完成对人脸的识别后，进一步完成眼睛的识别。眼睛识别的原理与人脸识别类似，其主要代码如下。

1 eye\_cascade = cv2.CascadeClassifier(cv.data.haarcascades + ' haarcascade\_eye![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.102.png)

- xml' )
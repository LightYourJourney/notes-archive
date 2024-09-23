# 图片的统计特性

<a name="_page65_x72.00_y266.14"></a>在 OpenCV 基础中介绍了图片基本概念及图片的基本操作，如图片的颜色尺寸、颜色空间等。本章新 一步介绍图片统计特性，如图片的直方图、反射投影直方图等基本概念，通过直方图均衡处理来实现对图 片的处理，并为后续运动图像的处理奠定基础。

- 图片直方图

  直方图是对图片强度分布的描述，从统计学的角度来分析图片。直方图由 XY 二维表示，其中 X 值为像素值、 Y 轴为落入对应 X 轴坐标区间内的图像中的对应像素数。 OpenCV 中提供了 直方图分析函数 calcHist()，典型的用法如下所示。图 7.1[ 给](#_page66_x72.00_y64.23)出了直方图的示意。通过对直方 图的均衡的处理，来实现对图片的处理，例如对图片的强度的均衡处理， OpenCV 提供了均衡函 数 cv.equalizeHist()。为进一步提升均衡性能，在全局均衡的基础上引入了局部自适应直方图均衡函数 cv.createCLAHE(),cv.clahe.apply()。

1  img = cv.imread(filename,0)![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.097.png)
1  hist = cv.calcHist([img],[0],None,[256],[0,256])
- 直方图反射投影

  Swain and Ballard 最早在论文 [[7](#_page123_x72.00_y416.63)] 中提出了反向投影的概念，图片的直方图反应了图片在强度的 概率分布。直方图反向投影用来实现图像分割，背景与对象分离，对已知对象位置进行定位。反向 投影在模式匹配、对象识别、视频跟踪中均有应用， OpenCV 中经典算法之一 CAMeanShift 就是 基于反向投影实现对已知对象的位置查找与标记、从而达到连续跟踪。 OpenCV 提供了一个内置函

  数 cv.calcBackProject()来实现反射投影，需要注意的是在传递给 calcBackProject()函数之前， 应该对象直方图采用函数 cv.normalize()进行规范化。反射投影的 python 例子如下所示：



| hsv = cv.cvtColor(roi,cv.COLOR\_BGR2HSV)                                 |
| ------------------------------------------------------------------------ |
| target = cv.imread(' pic . png' )                                        |
| hsvt = cv.cvtColor(target,cv.COLOR\_BGR2HSV)                             |
| # calculating object histogram                                           |
| roihist = cv.calcHist([hsv],[0, 1], None, [180, 256], [0, 180, 0, 256] ) |
| # normalize histogram and apply backprojection                           |
| cv.normalize(roihist,roihist,0,255,cv.NORM\_MINMAX)                      |
| dst = cv.calcBackProject([hsvt],[0,1],roihist,[0,180,0,256],1)           |

1 2 3 4 5 6 7 8 9

60

1. 人脸识别算法基本原理 61

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.098.png)

<a name="_page66_x72.00_y64.23"></a>图 7.1: 图片的几种特征值示意

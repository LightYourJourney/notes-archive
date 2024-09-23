# 运动物体的追踪

<a name="_page69_x72.00_y667.35"></a>运动物体的追踪主要有两种方式，分别为背景差分法（ Background subtractor）和均值平移（ Mean- shift and CAMShift）。

- 背景差分法

  背景差分法利用当前帧与背景帧的差别实现对运动物体的定位，如图 [7.5](#_page70_x72.00_y103.40) 。


4. 运动物体的追踪 65

   背景差分法将每个当前帧均与背景帧进行差分，从而获取运动到图像中的物体或图像中运动的物体。 因此，理论上背景帧不存在运动物体是最理想的状态。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.103.png)

<a name="_page70_x72.00_y103.40"></a>图 7.5: 背景差分法

- 均值平移法

  均值平移主要是根据概率密度的梯度爬升来寻找局部最优。通过直方图反投影将图像的像素值根据 所要追踪物体的归一化直方图反投影为概率值，并通过迭代逐步寻找到概率密度最大的区域，作为 该物体的最有可能出现的区域，从而追踪到物体，如图 [7.6](#_page70_x72.00_y501.07) 。

  CamShift 算法的全称是 ”Continuously Adaptive Mean-SHIFT”，即：连续自适应的 MeanShift 算 法。 CamShift 是对视频序列的所有图像帧都作 MeanShift 运算，并将上一帧的结果（即搜索窗口的 中心位置和窗口大小）作为下一帧 MeanShift 算法的搜索窗口的初始值，如此迭代下去。简单点说， meanShift 是针对单张图片寻找最优迭代结果，而 camShift 则是针对视频序列来处理，并对该序列 中的每一帧图片都调用 meanShift 来寻找最优迭代结果。需要注意的是，在使用均值便平移时，非常 依赖于参数设置（即初始位置、各个维度的带宽等），因此效果还需具体而定。 CAMShift 的例子如下 所示：

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.104.png)

<a name="_page70_x72.00_y501.07"></a>图 7.6: 均值平移法

1 #.....![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.105.png)



|                                                                  |
| :--------------------------------------------------------------- |
| while (1):                                                       |
| ret ,frame = cap.read()                                          |
| if ret == True:                                                  |
| hsv = cv.cvtColor(frame, cv.COLOR\_BGR2HSV)                      |
| dst = cv.calcBackProject([hsv],[0],roi\_hist,[0,180],1)          |
|                                                                  |
| # apply meanshift to get the new location                        |
| ret, track\_window = cv.CamShift(dst, track\_window, term\_crit) |
|                                                                  |
| # Draw it on image                                               |
| pts = cv.boxPoints(ret)                                          |
| pts = np.int0(pts)                                               |
| img2 = cv.polylines(frame,[pts],True, 255,2)                     |
| cv.imshow(' img2' ,img2)                                         |
| k = cv.waitKey(60) & 0xff                                        |
| if k == 27:                                                      |
| break                                                            |
| else:                                                            |
| cv.imwrite(chr (k)+ ". jpg ",img2)                               |
|                                                                  |
| else:                                                            |
| break                                                            |
|                                                                  |
| cv.destroyAllWindows()                                           |
| cap.release()                                                    |

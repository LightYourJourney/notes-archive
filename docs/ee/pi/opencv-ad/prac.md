# 动手实验：视频的处理及人脸识别
2. <a name="_page71_x72.00_y469.75"></a>人脸识别
3. 读取树莓派的摄像头，完成自己人脸、眼睛的识别

   采用摄像头对人脸的识别与在照片中完后人脸的识别类似，主要从摄像头的实时流中获取数据，对 每一帧图片完成人脸的识别并进行标记，主要核心代码参考实验原理部分。部分参考代码如下。

1 while (True):![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.106.png)

2 # 从 摄 像 头 中 读 取 数 据 并 转 化 成 灰 度

3 ret, frame = camera.read()

4 gray = cv.cvtColor(frame, cv2.COLOR\_BGR2GRAY)

2. 完成是否佩戴口罩的简单识别（选做）

   不依赖识别模型，主要原理可以根据眼睛的位置定位到口罩区域，并判别该区域是否存在口罩来确 定该人是否佩戴口罩。（完成摄像头中一人的口罩识别即可，多人识别可能存在运行速度的限制）

   其中在口罩区域中判别是否存在口罩的部分参考代码如下：



| hsv = cv2.cvtColor(frame, cv2.COLOR\_BGR2HSV) |
| --------------------------------------------- |
| # 提 取 皮 肤 区 域                           |

1 2 3


6. 思考题 67



| skin = cv2.inRange(hsv, np.array([0, 25, 0]), np.array([50, 255, 255]))                |
| -------------------------------------------------------------------------------------- |
| # 在 皮 肤 图 层 提 取 口 罩 区 域                                                     |
| skin\_mask = np.zeros((frame.shape[0], frame.shape[1]), dtype=np.uint8)                |
| skin\_mask[mask\_y\_begin:mask\_y\_end, mask\_x\_begin:mask\_x\_end] =                 |
| skin[mask\_y\_begin:mask\_y\_end, mask\_x\_begin:mask\_x\_end]                         |
| out = cv2.bitwise\_and(frame, frame, mask = skin\_mask)                                |
| # 计 算 非 皮 肤 的 占 比                                                              |
| mask = np.where((out == 0), 0, 1).astype(' uint8 ' )                                   |
| mask\_area = mask.sum()                                                                |
| if mask\_area / ((mask\_x\_end - mask\_x\_begin) \* (mask\_y\_end - mask\_y\_begin)) > |
| 0\.8:                                                                                  |
| ...                                                                                    |
| else:                                                                                  |
| ...                                                                                    |

4 5 6 7 8 9 10 11 12 13

14 15 16

3. 注意事项

(a) Haar 人脸识别的限制 Haar 算法对于人脸的识别有一些限制，如图片的大小、并需要正面的人

脸图片。

2. 物体跟踪
1. 跟踪移动的乒乓球

   使用 BackgroundSubtractor 识别移动的乒乓球，并用方框将其圈出来。需要注意的是，在处理的时 候可能出现噪声，并且处理不是完美的，因此在画出移动物体的边框时，可以使用 contourArea() 判 断边框的大小，从而确定是否为物体，并将物体标出。部分参考代码如下：



| bs = cv2.createBackgroundSubtractorKNN(detectShadows = True)                  |
| ----------------------------------------------------------------------------- |
| ...                                                                           |
| fgmask = bs.apply (frame)                                                     |
| th = cv2.threshold(fgmask.copy(), 244, 255,                                   |
| cv2.THRESH\_BINARY)[1]                                                        |
| dilated = cv2.dilate(th,                                                      |
| cv2.getStructuringElement(cv2.MORPH\_ELLIPSE, (3,3)),                         |
| iterations = 2)                                                               |
| contours, hier = cv2.findContours(dilated,                                    |
| cv2.RETR\_EXTERNAL, cv2.CHAIN\_APPROX\_SIMPLE)# 提 取 出 移 动 物 体 的 轮 廓 |

1 2 3 4 5 6 7 8

9 10 11

2. 利用 CAMShift 方法来跟踪乒乓球（选做）

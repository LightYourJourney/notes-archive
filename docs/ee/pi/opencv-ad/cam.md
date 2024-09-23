# 树莓派对摄像头的处理
- <a name="_page68_x72.00_y690.61"></a>OpenCV 中摄像头使用

  OpenCV 有直接对摄像头操作的库，例如下面的代码就可以将系统中的摄像头所拍摄的内容显示在 窗口中。



| import cv2 # 加 载 OpenCV 库                     |
| ------------------------------------------------ |
| cam = cv2.VideoCapture(0) # 打 开 摄 像 头       |
| cam. set(3, 1024) # 设 置 图 像 宽 度            |
| cam. set(4, 768) # 设 置 图 像 高 度             |
| while (True):                                    |
| ret, frame = cam.read() # 读 入 一 帧 图 像      |
| cv2.imshow(' Video ␣Test ' ,frame) # 显 示 图 像 |
| if cv2.waitKey(1) == ord ( "q") : # 等 待 按 键  |
| break                                            |
| cam.release() # 释 放 摄 像 头 硬 件             |
| cv2.destroyAllWindows() # 关 闭 全 部 窗 口      |

1 2 3 4 5 6 7 8 9 10 11 12

代码中 cv2.VideoCapture(0) 用来打开系统中的摄像头，一般具有设备文件 /dev/video0，如果系 统中有多个摄像头，可以改变该函数的参数来选择不同设备。

- 树莓派摄像头使用

  在树莓派中，上面的代码只适用于支持 v4l 驱动的摄像头，对于树莓派 CSI 接口的摄像头，还可以使 用不同的方法。树莓派系统包含一个 python-picamera2 的软件包用来简化 CSI 接口摄像头的使 用。下面是一个示例代码：



| import time                                             |
| ------------------------------------------------------- |
| import cv2 # 导 入 需 要 的 库                          |
|                                                         |
| cam = PiCamera2()                                       |
| cam.still\_configuration.main.size = (640,480)          |
| cam.still\_configuration.main.format = ' RGB888'        |
| cam.configure(" still")                                 |
| cam.start()                                             |
| time.sleep(1) # 等 待 摄 像 头 模 块 初 始 化           |
| while (True):                                           |
| image = cam.capture\_array(" main") # 读 入 一 帧 图 像 |
| cv2.imshow(" Frame", image) # 显 示 图 像               |
| key = cv2.waitKey(1) & 0xFF # 等 待 按 键               |
| if key == ord ( "q"):                                   |
| break                                                   |
| cam.stop() # 释 放 摄 像 头 硬 件                       |
| cv2.destroyAllWindows() # 关 闭 全 部 窗 口             |

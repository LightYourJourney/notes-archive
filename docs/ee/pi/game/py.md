# :simple-python: Python 语言控制硬件

3. **Python<a name="_page20_x72.00_y612.61"></a>** 语言控制硬件
1. **RPi.GPIO** 的基本使用

树莓派 RPi.GPIO Python 模块提供了 GPIO 相关的操作包括 GPIO 接口的配置、输入及输出等。 下面的语句实现 RPi.GPIO 模块的导入：

1 import RPi.GPIO as GPIO![ref2]

通过该操作完成了 RPi.GPIO 模块的导入，并为其定义了一个别名 GPIO，在之后的程序中可通过别名使 用 RPi.GPIO 模块。

16 第二章 简单游戏策略

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.038.jpeg)

<a name="_page21_x72.00_y64.23"></a>图 2.1: 树莓派 GPIO 引脚定义

目前有两种方式可以通过 RPi.GPIO 对树莓派上的 IO 引脚进行编号。第一种方式是使用 BOARD 编号系统。该方式参考树莓派主板上 P1 接线柱的引脚编号。使用该方式的优点是无需考虑主板的修订版 本，硬件始终都是可用的状态，无需从新连接线路和更改您的代码。

第二种方式是使用 BCM 编号。这是一种较低层的工作方式。该方式参考 Broadcom SOC 的通道编 号，具体的对应关系可参考图 [2.1](#_page21_x72.00_y64.23)，使用过程中，要保证主板上的引脚与图表上标注的通道编号相对应。在

使用 GPIO 时必须指定使用哪种编号方式，指定方式如下：

1 GPIO.setmode(GPIO.BOARD) # 采 用 BOARD编 号 ![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.039.png)2 # 或 者

3 GPIO.setmode(GPIO.BCM) # 采 用 BCM编 号

在使用 GPIO 输入输出前，需要对每个用于输入或输出的引脚配置通道。配置的方式如下：

1 # 配 置 channel 指 定 的 通 道 为 输 入 通 道![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.040.png)

2 #channel 与 使 用 的 编 号 方 式 对 应

3 GPIO.setup(channel, GPIO.IN, GPIO.PUD\_UP)

4 # 配 置 channel 指 定 的 通 道 为 输 出 通 道

5 GPIO.setup(channel, GPIO.OUT)

6 # 配 置 channel 指 定 的 通 道 为 输 出 通 道， 且 规 定 通 道 初 始 输 出 高 电 平 7 GPIO.setup(channel, GPIO.OUT, initial=GPIO.HIGH)

在设置为输入状态的时候，如果外部电路没有连接上拉电阻，可以通过 GPIO.PUD\_UP 参数设置


3. PYTHON 语言控制硬件 17

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.041.jpeg)

<a name="_page22_x72.00_y64.23"></a>图 2.2: PIONEER600 树莓派扩展板

GPIO 的内部上拉电阻有效，以保证输入端在没有接入信号的时候有确定的输入值（ 1）。完成通道的配置 后，就可以通过通道读取 GPIO 引脚的值或者设置 GPIO 引脚的输出状态。

1 GPIO.input(channel) # 读 取 GPIO 引 脚 的 值![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.042.png)

2 # 引 脚 的 值 : 0/ GPIO. LOW/ False 或 者 1/ GPIO. HIGH/ True .

3 GPIO.output(channel, state)

4 # 设 置 GPIO 引 脚 的 输 出 状 态 为 state

5 # State 的 值 : 0/ GPIO. LOW/ False 或 者 1/ GPIO. HIGH/ True .

脉宽调制 (PWM) 是指用微处理器的数字输出来对模拟电路进行控制，是一种对模拟信号电平进行 数字编码的方法。在树莓派上，可以通过对 GPIO 的编程来实现脉宽调制。 RPI.GPIO 模块的脉宽调制 (PWM) 功能的基本使用方式如下：

1 # 创 建 一 个 通 道 channel 的 PWM实 例![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.043.png)

2 pwm = GPIO.PWM(channel, frequency )

3 # 启 动 PWM， 并 指 定 占 空 比 dc ， dc 的 范 围 0.0~100.0 4 pwm.start(dc)

5 # 更 改 PWM脉 冲 重 复 的 频 率 为 frequency

6 pwm.ChangeFrequency(freq)

7 # 更 改 PWM的 占 空 比 为 dc

8 pwm.ChangeDutyCycle(dc)

9 # 停 止 PWM

10 pwm.stop()![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.044.png)

一般来说，程序到达最后都需要释放资源，这个好习惯可以避免偶然损坏树莓派。释放程序本中使用 的引脚如下：

1 GPIO.cleanup()![ref2]

注意，GPIO.cleanup() 只会释放掉脚本中使用的 GPIO 引脚，并会清除设置的引脚编号规则。

2. 按键检测

利用树莓派上 GPIO 接口实现按键的输入检测。 Pioneer600 扩展板上扩展了一个五向遥杆，遥杆可 上下左右拨动，也可以按下。遥杆按下的输入接到了树莓派 GPIO 的第 38 号引脚， BCM 编号为 20（即 图 [2.1](#_page21_x72.00_y64.23) 中 GPIO20）。可以利用树莓派 RPi.GPIO 模块实现对 Pioneer600 扩展板五向遥杆的按键输入检 测，按下一次按键就在屏幕上打印 ”KEY PRESS”。下面代码实现了对按键输入 GPIO 通道的初始化。

1 import RPi.GPIO as GPIO![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.045.png)

2

3 KEY = 20

4 GPIO.setmode(GPIO.BCM)

5 GPIO.setup(KEY, GPIO.IN,GPIO.PUD\_UP) # 上 拉 电 阻 6 print( " Key␣Test ␣Program ")

完成测试按键程序的过程中注意要保证每次按键只有一次输出信息（消抖），同时检测按键间隙要有

延时，免得占用过多 CPU 时间。

另外一种实现检测按键的方式是利用软件中断和回调函数， GPIO 模块包含 add\_event\_detect 函数， 用来设置发生指定事件时刻的回调函数：

1 from RPi.GPIO import add\_event\_detect![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.046.png)

2 def my\_callback(ch):

3 print( " KEY␣PRESS")

4 add\_event\_detect(channel, GPIO.RISING, callback=my\_callback, bouncetime=200)

当系统检测到指定 GPIO 的上升沿（还可以设置为 GPIO.FALLING 或 GPIO.BOTH）时，就会 自动调用指定的回调函数 my\_callback（函数的参数是按键的编号），用户程序无需再调用这个函数。 add\_event\_detect 函数的最后一个参数是软件消抖的延时毫秒数，用于防止由于按键的抖动引起的错

误调用。

3. **PWM<a name="_page23_x72.00_y589.05"></a>** 信号输出

数字端口的输出只能是高和低两种状态，如果用来控制 LED 就只有亮和灭两种状态。但如果这个连

接了 LED 的端口输出一个方波，则这个 LED 就有一半的时间处于亮的状态，另外一半时间处于灭的状 态。当方波的频率比较高的时候，人看起来这个 LED 就是一种半暗的状态。

更进一步，当控制输出的方波有不同的占空比的时候， LED 的亮度就会有不同的变化，从宏观上看就 是端口的输出功率在不停的变化。这种输出信号的形式就叫做 PWM（ Pulse Width Modulation，脉宽调 制）。下面的程序代码实现了控制 LED 灯产生呼吸灯效果，请在树莓派上编辑运行程序，并观察效果。



| import time            |
| ---------------------- |
| LED = 26               |
| GPIO.setmode(GPIO.BCM) |

1 2 3 4


4. 动手实验：猜拳游戏 19



| GPIO.setup(LED,GPIO.OUT)                                      |
| ------------------------------------------------------------- |
|                                                               |
| p = GPIO.PWM(LED,50)                                          |
| p.start(0)                                                    |
| try:                                                          |
| while True:                                                   |
| for dc in range (0,101,5):                                    |
| p.ChangeDutyCycle(dc)                                         |
| time.sleep(0.05)                                              |
| for dc in range (100,-1,-5):                                  |
| p.ChangeDutyCycle(dc)                                         |
| time.sleep(0.05)                                              |
| except KeyboardInterrupt:                                     |
| pass # 空 语 句 , 不 执 行 任 何 操 作 , 只 起 到 占 位 作 用 |
| p.stop()                                                      |
| GPIO.cleanup()                                                |

5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20

4. **Python** 的异常捕获机制

Python 的异常捕获机制可以让程序具有更好的容错性，当程序运行出现意外情况时，系统会自动生 成一个 Error 对象来通知程序，从而实现将“业务实现代码”和“错误处理代码”分离，提供更好的可读性。

异常捕获机制的代码结构如下：



| # 业 务 实 现 代 码                                 |
| --------------------------------------------------- |
| ...                                                 |
| except Error1:                                      |
| # 错 误 处 理 代 码                                 |
| ...                                                 |
| finally:                                            |
| # 不 管 是 否 发 生 异 常， 一 定 会 执 行 的 代 码 |
| ...                                                 |

1 2 3 4 5 6 7 8 9

try:

例如希望程序等待用户按下 Ctrl+C 组合键再退出，可以用下面的代码来实现。 1 try:![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.047.png)

2 while True: # 死 循 环

3 time.sleep(1) # 休 眠 1 秒 钟

4 except KeyboardInterrupt: # 键 盘 中 断 事 件

5 pass

6 GPIO.cleanup()


1. 实验内容
1. <a name="_page119_x72.00_y291.53"></a>实验题目要求

综合实验要求每位同学利用实验平台的现有资源，完成一款智能设备的原型设计。这款设备可以是任 何应用场景的一个功能组件，也可以是完整的解决方案。但必须充分考虑现有平台的计算能力，既不能仅 处理简单数据而浪费计算资源，也不要因为项目过于复杂而无法胜任。

这里所谓的 “智能 ”，指的是完成的项目原型具有如下一种或者多种功能：

- 具有一定的 “机器视觉 ”，可以利用摄像头进行数据输入
- 具有一定的 “机器听觉 ”，能根据环境中的声音或者语音命令完成任务
- 具有一定的 “机器智能 ”，可以在尽可能少的人工干预情况下完成工作
- 具有一定的学习能力，可以根据历史的经验改善处理问题的方式
- 具有一定的推理能力，可以在复杂输入条件中做出最正确的判断
2. 实验报告要求

实验报告要求完整、系统的对自己的作品进行介绍，主要内容包括：

- 作品简介，简要描述作品的功能和指标
- 系统方案，介绍作品的基本设计思路及软硬件结构
- 系统实现，包括完整的系统搭建流程、具体的实现细节，以便读者可以重复同一工作
- 系统测试，作品的展示内容和指标等数据
- 附录，包含的程序及参考的开源项目或网站
3. 参考实验题目
1. 对弈机器人

使用摄像头识别棋盘状态，控制机械臂移动棋子，完成对弈机器人的设计。对弈所使用的棋类可以是 围棋、五子棋、象棋、国际象棋等。棋盘面积不大于 15cm x 15cm；棋子采用塑料或者纸质，可以通过吸盘吸 取并移动。

114

2. 实验内容 115
2. 智能移动机器人

采用树莓派控制移动底盘，控制方式可以是基于视觉的自主控制，也可以通过声音命令等给与辅助控 制，还可以通过激光雷达进行环境及障碍物的识别。底盘可以使用实验室的 Turtlebot，也可以使用采用 Arduino 控制的智能小车。

Turtlebot 的串口通信协议可以参考官方的文档， Arduino 智能小车的通信协议如下：串口波特率 38400，控制命令如下：

A 前进

B 右转前进

C 仅右转

D 右转后退

E 后退

F 左转后退

G 仅左转

H 左转前进

Z 停止

I 关闭 /打开电机

还支持发送命令更新部分内部执行参数，格式为 {}中的命令：

- {P}，通过串口打印 PID 参数
- {0:xx}，更新基础运行速度
- {1:xx}，更新 PID 的 P 参数
- {2:xx}，更新 PID 的 I 参数

串口会即时反馈小车运行数据，格式为： {A:左轮数据 :右轮数据 :电池电压 :舵机角度 1} 和 {B:舵机角度 2:电池电压 :左轮数据 :右轮数据 }

3. 猜拳机器人

通过摄像头识别手势，并控制机械手掌与用户玩猜拳游戏。机械手掌通过 5 个舵机进行控制，可以实 现不同的手势动作。

4. 绘画机器人 通过控制机械臂在纸上书写或绘画，实现创意应用产品。例如给用户画像，解答数学题等。
4. **Atlas 200 DK** 简介

Atlas 200 DK，是华为研发的一款高性能 AI 应用开发板，它集成了华为自研的 GPU 型 AI 芯片—— 昇腾 310 AI 处理器。昇腾（ HUAWEI Ascend) 310 是一款高能效、灵活可编程的人工智能处理器，该处理 器采用了华为的达芬奇架构，集成了丰富的计算单元 , 能够大大提高 AI 计算的效率。该芯片的适用性广 泛，可以在 AI 全部的业务流程中起到提速的作用，不仅如此，该芯片还能够降低 AI 应用开发和部署的成 本，提高应用效能。在综合实验阶段，同学们也可以选用此平台。

昇腾 AI 处理器的架构组成如图 [13.1](#_page121_x72.00_y132.38) 所示，该芯片采用了经典的冯诺依曼式计算机架构，它的主要系

统控制是 CPU 模块，但为了提供人工智能所需的计算能力，芯片集成了两个 AI 计算引擎，主要包含 AI Core 和 AI CPU。同时，为了提高 AI 模块的效率，芯片为其单独配置了特殊的专用模块任务调度器，该任

务调度器 CPU 不处理其他事务，仅仅为 AI 模块服务调度。除此之外，芯片还加入了数字视觉预处理模块

- DVPP），该模块主要处理来自机器的图片和视频格式文件，对这些格式的文件进行前期预处理工作，例如


116 第十三章 综合实验

编码解码、裁剪等等。主存和 L2 缓冲区的设置也为 AI 计算提供了便利，使得算法能够高频、快速地访问 数据，尤其是缓冲区，大大提高了计算所需的复用数据的使用效率。同时，芯片也提供了常见的各种硬件接

口，如 USB、HBM、网卡、 GPIO 等，为芯片的搭配和扩展使用提供了基础。根据芯片架构可以看出，昇腾

AI 处理器主要应用在需要大量计算的 AI 算法应用场景，尤其是语音、图像处理之类的人工智能领域。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.175.png)

<a name="_page121_x72.00_y132.38"></a>图 13.1: 昇腾 AI 处理器架构

作为搭载昇腾 310 AI 处理器的高性能开发板， Atlas 200 DK 可以实现对图像、视频等多种数据的分 析和处理计算工作，与之相配套的开发者套件则必不可少。开发者套件是华为提供的一系列开发软件和硬 件工具，通过安装开发者套件，用户可以使用 Atlas 200 DK 对外开放的 AI 加速模块接口，方便快捷地研 发出适用于各种场景的产品，例如智能家电、机器人、无人机等。根据官网提供的数据， Atlas 200 DK 套件 可提供 22TOPS（ INT8）的峰值计算能力，即在 8 位运算下，最高可提供每秒二十二万亿次的操作。不仅 如此，开发板还支持两路摄像机输入和两路 ISP 图像处理，支持高动态范围 HDR10 技术标准 . 网络方面， 开发板提供对外 1000M 高速网络连接，匹配强劲计算能力，预留有通用的 40-pin 扩展接口，极大地方便用 户产品原型设计。图 [13.2](#_page121_x72.00_y446.99) 是 Atlas 200 DK 的外观。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.176.png)

<a name="_page121_x72.00_y446.99"></a>图 13.2: Atlas 200 DK 开发板

CANN（ Compute Architecture for Neural Networks）是华为公司针对人工智能应用场景推出的软件 架构，为用户提供了多种编程接口。通过使用底层软件包，用户可便捷迅速地进行基于昇腾设备的产品业 务开发。除此之外，用户还可以基于该软件包实现自定义算子、模型转换等功能。随着昇腾设备的更新迭

代，CANN 软件包也在不断进行版本升级，但包内的主要工具作用大同小异。在实际使用时要根据开发板 的型号选择合适的版本。

ACL（ Ascend Computing Language）是指 CANN 中提供的一系列设备管理、内存管理、模型加载与
执行、媒体数据处理等 C 语言的 API 库。pyACL（ Python Ascend Computing Language）就是在 ACL 的

2. 实验内容 117

基础上使用 CPython 封装得到的 python API 库，用户可以通过使用 python API 库对昇腾 AI 处理器进 行资源和设备管理工作，在这些封装好的接口库上开发深度神经网络应用，用于实现目标识别、图像分类

等功能。


参考文献

1. *OpenCV:<a name="_page123_x72.00_y206.18"></a> Trackbar as the Color Palette*. url: [https://docs.opencv.org/4.x/d9/dc8/tutorial_ py_trackbar.html ](https://docs.opencv.org/4.x/d9/dc8/tutorial_py_trackbar.html)(visited on 06/23/2022).
1. *OpenCV:<a name="_page123_x72.00_y241.56"></a> Arithmetic Operations on Images*. url: https[://docs.opencv.org/4.x/d0/d86/ tutorial_py_image_arithmetics.html.](https://docs.opencv.org/4.x/d0/d86/tutorial_py_image_arithmetics.html)
1. *Hough<a name="_page123_x72.00_y276.42"></a> Transform*. In: *Wikipedia*. Feb. 20, 2022. url: [https://en.wikipedia.org/w/index.php? title=Hough_transform&oldid=1073024927.](https://en.wikipedia.org/w/index.php?title=Hough_transform&oldid=1073024927)
1. *OpenCV:<a name="_page123_x72.00_y311.49"></a> Geometric Transformations of Images*. url: https[://docs.opencv.org/4.x/da/d6e/ tutorial_py_geometric_transformations.html.](https://docs.opencv.org/4.x/da/d6e/tutorial_py_geometric_transformations.html)
1. *NumPy<a name="_page123_x72.00_y346.56"></a> Quickstart* —*NumPy v1.24.Dev0 Manual*. url: [https://numpy.org/devdocs/user/ quickstart.html.](https://numpy.org/devdocs/user/quickstart.html)
1. *BCM2711<a name="_page123_x72.00_y381.56"></a> ARM Peripherals*. url: [https://datasheets.raspberrypi.com/bcm2711/bcm2711- peripherals.pdf.](https://datasheets.raspberrypi.com/bcm2711/bcm2711-peripherals.pdf)
1. M.J.<a name="_page123_x72.00_y416.63"></a> Swain and D.H. Ballard. “Indexing via Color Histograms”. In: *[1990] Proceedings Third In- ternational Conference on Computer Vision*. [1990] Proceedings Third International Conference on Computer Vision. 1990, pp. 390–393. doi: [10.1109/ICCV.1990.139558.](https://doi.org/10.1109/ICCV.1990.139558)
1. *Face<a name="_page123_x72.00_y466.96"></a> Detection: Facial Recognition and Finding Homepage*. Mar. 13, 2015. url: [https://facedetection. com/ ](https://facedetection.com/)(visited on 07/27/2022).
1. P.<a name="_page123_x72.00_y502.59"></a> Viola and M. Jones. “Rapid Object Detection Using a Boosted Cascade of Simple Features”.

   In: *Proceedings of the 2001 IEEE Computer Society Conference on Computer Vision and Pattern Recognition. CVPR 2001*. 2001 IEEE Computer Society Conference on Computer Vision and Pattern Recognition. CVPR 2001. Vol. 1. Kauai, HI, USA: IEEE Comput. Soc, 2001, pp. I-511-I–518. isbn: 978-0-7695-1272-3. doi: [10.1109/CVPR.2001.990517.](https://doi.org/10.1109/CVPR.2001.990517)

118

[^1]: <a name="_page35_x86.35_y732.98"></a>核函数：核函数是机器学习中将二维特征映射到高维空间中时采用的手段，使低维上不可分的特征在高维空间展开后可区分。可 以结合代数的知识以及 [4.2](#_page35_x277.16_y307.66)将其理解为一个映射或运算即可。具体的数学推导比较复杂，对于应用实践来说是不必要的，感兴趣的同 学可以了解支持向量机相关理论。
[^2]: 
    4 5 6 7 8 9 10 11 12 13 14 15 16

    在图像的轮廓被检测出来后，轮廓的面积、周长、中心点等是描述轮廓的重要参量，另外在轮廓的边
[^3]: . 在图片中将圆形标记出来 参考代码如下所示： import numpy as np

    1 2 3 4 5 6 7

    8 9
[^4]: <a name="_page117_x86.35_y757.59"></a>这里为了简化采用这种方法，如果模型返回的数据包含这个字符串就会造成混乱

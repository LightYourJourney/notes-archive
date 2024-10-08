# :simple-raspberrypi: 硬件平台

我们探讨的 AI 技术大部分只是一种算法，可以在通用计算机上进行研究和验证。如果要把相关技术实现为产品，就必须使用更加经济的硬件平台。这些硬件平台必须具有一定的运算能力，可以运行特定的算法，而实现算法最高效的平台就是微处理器。本书将使用树莓派（Raspbian Pi）作为主要的硬件，完成全部算法的实现。

## :material-raspberry-pi: 树莓派简介 {#raspberry-pi-intro}

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/pi-in-hand.png){ width="300" }
  <figcaption>图 1.1：树莓派</figcaption>
</figure>

树莓派（Raspberry Pi）是一款基于 ARM 的微型电脑主板，外观尺寸仅有信用卡大小，却具有电脑的所有基本功能，又称卡片式电脑。树莓派以 SD／MicroSD 卡为内存硬盘，卡片主板周围有 1/2/4 个 USB 接口和一个 10／100 以太网接口（A 型没有网口），可连接键盘、鼠标和网线，同时拥有视频模拟信号的电视输出接口和 HDMI 高清视频输出接口，以上部件全部整合在一张仅比信用卡稍大的主板上，具备所有 PC 的基本功能，只需接通显示器和键盘，就能执行如电子表格、文字处理、玩游戏、播放高清视频等诸多功能。树莓派与外设的接口和连接方式如图 1.2 所示。

树莓派问世于 2012 年，2019 年推出了树莓派 4。树莓派第 4 代 B 型搭载了 1.5GHz 的 64 位四核处理器（ARM Cortex-A72 1.5GHz 64-bit quad-core ARMv8 CPU），2GB 内存，支持 802.11b／g／n／ac 无线网卡，低功耗蓝牙 5.0，两个 USB 2.0 和两个 USB 3.0 接口，1 个千兆网接口，两个支持 4k 分辨率的 hdmi 显示接口。树莓派 4B 型外观如图 1.3 所示。它通过 USB Type-C 接口供电，至少可以提供 2A 的电流才可以保证正常的工作。

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/pi-struct.png){ width="300" }
  <figcaption>图 1.2：树莓派的连接与扩展方式</figcaption>
</figure>

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/pi-4b.png){ width="300" }
  <figcaption>图 1.3：树莓派 4 代 B 型外观及接口配置</figcaption>
</figure>

树莓派 4 代 B 型可直接外接显示器和键盘鼠标实现基本的输入输出。树莓派 4 代 B 型具有 HDMI 视频输出接口，可通过 HDMI 接口连接显示器输出树莓派的显示界面。键盘和鼠标可通过树莓派提供的 USB 接口连接到树莓派。

树莓派也可以通过网络连接进行访问，常用的方式是通过 SSH（Secure Shell）访问树莓派，SSH 是专为远程登录会话和其他网络服务提供安全性的协议。SSH 客户端适用于多种平台，Windows 操作系统下常用的 SSH 客户端软件包括 XShell、Putty 以及 SSH Secure Shell Client 等软件。

树莓派还可以通过远程登录的方式使用图形界面，所使用的协议为 VNC（Virtual Network Console）。使用前必须首先在树莓派的操作系统中安装 VNC 服务器，比如 tightvncserver，然后在其它计算机使用 VNC 客户端登录。Windows 操作系统下常见的客户端有 ReadVNC，VNC Viewer 等。

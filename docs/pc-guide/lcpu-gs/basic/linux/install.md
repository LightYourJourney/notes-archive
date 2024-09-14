### :material-linux: Linux 安装

我们以在 x86-64 架构的预装 Windows 11 的笔记本电脑上安装 Debian 双系统为例进行介绍。

#### :simple-linuxfoundation: 准备工作

需要的硬件：一个容量不小于 8 GB 的 U 盘（请提前备份好内部数据！）

##### :simple-qbittorrent: 镜像的下载

请前往你所选择的发行版的官网下载镜像，大部分发行版的官网国内都可以直连，也可以到各高校镜像站的“ISO 下载”一栏下载，速度往往更快。同一发行版的镜像会有不同版本，请根据需要选择适合的版本。以下笔者将简略说明各版本的区别。

- **64 位与 32 位**：指的是 CPU 通用寄存器的数据宽度，常见的 32 位架构为 `x86`，64 位架构为 `amd64`/`x64`/`x86_64`。32 位架构逐渐被淘汰，我们选择版本时应选择 64 位的操作系统（即带有后三者之一标识的镜像）。

- **正式版与测试版**：对于初学者来说应选择正式版（往往有 `stable` 字样），如果想为体验新功能并为其纠错等可以选择测试版系统（往往有 `test`/`unstable` 字样）。测试版系统的生命周期会远低于正式版系统，需要及时更新以获得软件支持，一般官方网站也会提供相应的测试版下载渠道。特别地，Ubuntu 系统还有着长期支持版（Long-term support, LTS），在每个偶数年的 4 月一更（例如最近发布的 LTS 版本是 `24.04 LTS`），相比其他版本生命周期更长。

<img src="/assets/basic/10-linux-basic-2/image-20240831200902600.png" alt="image-20240831200902600";" />

（如图，20 年发布的 Ubuntu 20.04 LTS 至今仍在提供更新，而非 LTS 版最早只支持到 23 年发布的 Ubuntu 23.10）

- **桌面版、服务器版与其他版本**：同一个发行版会根据用途来分为不同子版本，功能有所差异，如服务器版很多不带有图形界面。用于日常使用建议下载桌面版 (Desktop)，用于部署服务器则考虑服务器版 (Server)，其他情况应按需选择。

![image-20240831201200824](/assets/basic/10-linux-basic-2/image-20240831201200824.png)

- **镜像的种类（安装方式**）：以 `Debian 12.x` 为例，官方提供了两种安装方式：较小的网络安装包与完整的离线安装包，前者需要联网进行安装，后者安装过程无需联网。由于官网连接速度不稳定，所以我们一般选择下载完整的安装映像（这里的 `.iso` 文件的链接表示直接点击下载镜像文件，`.torrent` 种子文件需用第三方下载器来下载镜像文件）

<img src="/assets/basic/10-linux-basic-2/image-20240831201443388.png" alt="image-20240831201443388";" />

##### :material-usb-flash-drive: U 盘的刻录

加载映像文件并运行系统安装程序需要系统重新引导，一般的处理方式为使用第三方镜像刻录软件将系统映像刻录至 U 盘中，再让电脑启动这个 U 盘中的安装文件。这里笔者使用免费开源的 [Rufus^:material-microsoft-windows:^](https://rufus.ie/zh/) 来进行刻录。（当然还可以使用可以同时存放多个系统映像而不耽误 U 盘日常使用的 [Ventoy^:material-microsoft-windows::fontawesome-brands-linux:^](https://www.ventoy.net/cn/index.html) 或者跨平台，操作极其简单的 [Balena Etcher^:material-microsoft-windows::fontawesome-brands-linux::fontawesome-brands-apple:^](https://etcher.balena.io/) 制作启动 U 盘）

<img src="/assets/basic/10-linux-basic-2/image-20240831202651295.png" alt="image-20240831202651295";" />

如图，在第一栏“设备”处选择你的 U 盘，然后点击“选择”并选择指定安装镜像，然后点击下面的“开始”即可完成刻录。注意刻录会将 U 盘内原有数据清空，请注意备份数据。U 盘大小要足够装得下镜像文件。

##### :material-zip-disk: 磁盘分区

若机器原本没有预装系统或不想保留原有操作系统则跳过这一步骤（操作同后文虚拟机安装时的步骤）。

对初学者而言尽量在 Windows 下预留出空闲空间后再安装系统，以免在 Linux 下操作时误删分区，以下简述 Windows 下预留空间的具体方法 ~~（若能在 Linux 下完成这一步骤则可跳过）~~

右键桌面 Windows :fontawesome-brands-microsoft: 图标，点击“磁盘管理”进入 Windows 磁盘管理界面。在这里可以看到你的磁盘分区情况，若没有空闲空间则可在剩余容量较多的分区右键选择“压缩卷”以获得空闲空间，Linux 系统一般需要的磁盘空间不多。若剩余容量较多的分区在逻辑卷内或有其他复杂情况可以使用 [DiskGenius](https://www.diskgenius.cn/)，[傲梅分区助手](https://www.disktool.cn/download.html) 等分区软件（正版已经够用，也可使用 [图吧工具箱](https://www.tbtool.cn/) 内的版本）进行处理。

##### :material-harddisk-plus: 启动引导

由于需要从刻录好镜像文件的 U 盘启动，需要关闭 Windows 的快速启动功能。

依次打开 `控制面板 → 硬件和声音 → 电源选项`，找到左边的“选择电源按钮的功能”，进入这个界面。有的电脑在关机设置这里会有一个“启用快速启动”选项打勾，若有这个选项我们需要将其关闭，先点击“更改当前不可用的设置”来获取管理员权限，然后再将其取消勾选。有的机型的快速启动设置还会在 BIOS 中的 Boot 中，需要进入 BIOS 修改。

<img src="/assets/basic/10-linux-basic-2/image-20240831204242101.png" alt="image-20240831204242101";" />

BIOS 的进入：开启电脑时出现电脑品牌图标的时候按 F2 键或 Delete 键会进入 BIOS（部分电脑可能会是 F1、F12 或 Esc 键）。有的 BIOS 厂商做了图形界面，可以直接图形化显示引导项，将刻录好的 U 盘拖拽到第一项即可。若没有图形化界面，则在 Boot 栏中调整启动顺序，使 U 盘为第一引导项。

<!--这里插入一张各个品牌主板的 BIOS 按键图片（表格）-->

#### :simple-linuxcontainers: 安装系统

这里以 Debian 12.x 的安装为例进行说明，我们使用北京大学镜像站加速下载。在选择镜像时，请选择“指定镜像”并选择你所在地区的镜像站。

进入后会出现几个选项，这里是在选择安装类型，简单起见这里选择第一项，使用图形界面安装

<img src="/assets/basic/10-linux-basic-2/image-20240831205318293.png" alt="image-20240831205318293" style="zoom: 80%;" />

语言、键盘配置与地区选择、用户名的设置可按照自己的偏好来选，主机名、域名等也可自行设置。

<img src="/assets/basic/10-linux-basic-2/image-20240831205502046.png" alt="image-20240831205502046" style="zoom:80%;" />

在 Linux 系统中 `root` 账户拥有最高权限，你所选择的发行版在安装时可能会要求设置 `root` 账户密码。如果没有这一选项可以在安装系统后在终端使用 `passwd` 命令设置。

若使用虚拟机或想直接安装在整个磁盘（即覆盖磁盘上所有原有数据）可选择"使用整个磁盘"，否则需选择"手动"并找到空闲空间。

<img src="/assets/basic/10-linux-basic-2/image-20240831205556924.png" alt="image-20240831205556924" style="zoom:80%;" />

如图，这里的 `21.5GB` 即为空闲空间，我们就要在这块空间上安装系统。

<img src="/assets/basic/10-linux-basic-2/image-20240831205619702.png" alt="image-20240831205619702" style="zoom:80%;" />

若对分区操作不熟或者没有特殊需求的可以选择“对空闲区间进行自动分区”来自动完成操作。这里 Debian 系统预留了三种分区方案可供选择。

<img src="/assets/basic/10-linux-basic-2/image-20240831205713350.png" alt="image-20240831205713350" style="zoom:80%;" />

<img src="/assets/basic/10-linux-basic-2/image-20240831205748850.png" alt="image-20240831205748850" style="zoom:80%;" />

如果有着自己的需求也可以在上一项选择“创建新分区”手动在其上建立新分区。主分区需采用 Ext4 文件系统并挂载在”/”根目录下，还需要分配空间给交换空间 (swap) 等，如果还想建立其他分区来挂载到其余位置可以继续操作。

最后选择“完成分区操作并将修改写入磁盘”来结束操作并将改动写入磁盘，注意操作后会将所使用的磁盘空间格式化，装双系统时为避免 Linux 系统下操作出现失误，建议先在 Windows 下清理出空闲空间再进行操作。

<img src="/assets/basic/10-linux-basic-2/image-20240831205920758.png" alt="image-20240831205920758" style="zoom:80%;" />

若使用网络安装则可能会有选择镜像源的选项，举例所使用的 Debian 12 系统中自带了多个软件源来选择，一般换用国内源速度较快。如果某些发行版安装过程中没有选项则可以在安装完成后自行更换。

<img src="/assets/basic/10-linux-basic-2/image-20240831210031979.png" alt="image-20240831210031979" style="zoom:80%;" />

下一步选择的是安装的软件集。Debian 桌面环境与标准系统工具是需要安装的，Web Server、SSH Server 这些服务器组件按需安装。GNOME、Xfce、KDE、cinnamon、MATE、LXDE、LXQt 则分别是 Linux 的桌面环境（可以理解为图形界面），一般选择默认的 GNOME，剩余的按照喜好勾选。

<img src="/assets/basic/10-linux-basic-2/image-20240831210119209.png" alt="image-20240831210119209" style="zoom:80%;" />

接下来即可顺利完成安装。等到系统安装完成，重启过程中显示“请移除安装介质后 ENTER”或已经重启完毕后再拔掉 U 盘，然后即可进入系统。若是双系统则也可按照喜好更改 GRUB 引导方式。

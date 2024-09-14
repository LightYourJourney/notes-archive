## :simple-vmware: 虚拟机的配置及使用

### :simple-foundryvirtualtabletop: 虚拟机的介绍

虚拟机（Virtual Machine）指通过软件模拟的具有完整硬件系统功能的、运行在一个完全隔离环境中的完整计算机系统。在实体计算机中能够完成的工作在虚拟机中都能够实现。在计算机中创建虚拟机时，需要将实体机的部分硬盘和内存容量作为虚拟机的硬盘和内存容量。每个虚拟机都有独立的 CMOS、硬盘和操作系统，可以像使用实体机一样对虚拟机进行操作。

常用虚拟机软件：

- [**VMware Workstation Pro / VMware Fusion Pro**](https://blogs.vmware.com/workstation/2024/05/vmware-workstation-pro-now-available-free-for-personal-use.html) : 前者支持 Windows/Linux，后者支持 macOS，是最常用的虚拟机软件，各项功能齐全，性能强大。目前已经对个人用户免费。
- [**Oracle VM Virtualbox**](https://www.virtualbox.org/) : 支持 Windows/macOS/linux 系统，是一个免费开源的虚拟机软件 ~~（前最强免费虚拟机软件）~~
- [**Parallels Desktop**](https://www.parallels.cn/products/desktop/) : 仅支持 macOS 系统的收费虚拟机软件。
- [**Hyper-V**](https://learn.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/about/) : Windows 自带的虚拟机软件，性能一般。但是 Hyper-V 开启后会与很多其他虚拟化软件冲突（如各大安卓模拟器与 VMware，前期版本勾选 hyper-V 后就无法打开，即使后续版本不再完全冲突也会显著降低性能），开启方式是在“启用或关闭 Windows 功能”中勾选 Hyper-V 虚拟机平台。

Windows 下还有一些其他的软件或功能，它们并不算虚拟机但是可以完成虚拟化工作：`WSL 1`、`WSA`（已经宣布停止支持）、`Windows 沙盒`（基于 Hyper-V，可以在隔离状态下运行应用程序）。

<!--WSL 2 基于 Hyper-V ，算是虚拟机的一种？-->

### :simple-virtualbox: Linux,macOS 下的虚拟化解决方案

#### :material-view-parallel: macOS

- [**Parallels Desktop**](https://www.parallels.cn/products/desktop/): macOS 下的首选虚拟化软件，优点是安装虚拟机非常简便快捷，设计风格与操作流程非常符合 macOS 的设计习惯。由于它兼具性能强、价格贵的特点，是否使用需要你自己衡量。

- [**VMware Fusion Pro**](https://blogs.vmware.com/workstation/2024/05/vmware-workstation-pro-now-available-free-for-personal-use.html): 功能也十分全面，目前对个人用户免费，是不想购买 Parallels Desktop 的最优选择。

- [**Virtualbox**](https://www.virtualbox.org/): 老牌虚拟机软件，在 VMware 对个人免费之前是 macOS 下最好用的免费虚拟机软件，不过现在功能更强大的 VMware Fusion Pro 免费后不太推荐。

#### :simple-vmware: Linux

一般 Linux 下使用完整的虚拟机会在 [**VMware Workstaion Pro**](https://blogs.vmware.com/workstation/2024/05/vmware-workstation-pro-now-available-free-for-personal-use.html)/[**Virtualbox**](https://www.virtualbox.org/) 中选择其一，不过一般 Linux 下很少有需求需要用到完整独立的 Windows 环境，如果想要运行某些 Windows 应用或者使用一部分 Windows 环境可以使用下面的方法：

- [:material-glass-wine: Wine](https://www.winehq.org/) : 是一个 Windows 兼容层，允许你在类 Unix 操作系统（如 Linux）上运行 Windows 应用程序，而无需安装双系统或虚拟机。

- [:simple-qemu: QEMU](https://www.qemu.org/) : 是纯软件实现的虚拟化模拟器，几乎可以模拟任何硬件设备，也能够模拟一台能够独立运行操作系统的虚拟机。常与 [`KVM`](https://linux-kvm.org/page/Main_Page) 搭配使用，`KVM` 用于 CPU 和内存的虚拟化，`QEMU` 用于 I/O 的虚拟化，二者一同完成虚拟化操作。

### :material-microsoft: WSL 的使用

#### :fontawesome-brands-windows: WSL 的定义

WSL，全称为适用于 Linux 的 Windows 子系统 (Windows Subsystem on Linux) 是一个可以在 Windows 计算机上同时访问 Windows 和 Linux 的强大功能。可以安装 Linux 发行版并直接在 Windows 上使用 Linux 应用程序、实用程序和 Bash 命令行工具，不用进行任何修改，也无需承担传统虚拟机或双启动设置的费用。

#### :simple-linux: WSL 的安装

首先打开“启用或关闭 Windows 功能”（可以在开始菜单搜索到这个程序），勾选“`适用于 Linux 的 Windows 子系统`”与“`虚拟机平台`”这两项，然后重新启动。

<img src="https://i-blog.csdnimg.cn/blog_migrate/9adfae8d83fc709621871e08476e5651.png" alt="Windows 功能";" />

> 有的电脑没有“`虚拟机平台`”的选项，这时应勾选 `Virtual Machine Platform`

<img src="/assets/basic/10-linux-basic-2/image-20240901105227418.png" alt="image-20240901105227418";" />

注意“`虚拟机平台`”一项实际上就是 Hyper-V，勾选后会导致其余虚拟化软件性能下降。如果不勾选这一选项也可以安装 WSL，但是只能使用 WSL1，具体的区别会在后续说明。

其中一种安装方法是微软在 WSL 的官方说明中所写的，这种方法会默认安装 Ubuntu 发行版，可以自行阅读档案，这里讲解另一种方法：

去 [Microsoft Store](https://apps.microsoft.com/) 中搜索你想要的 Linux 发行版及其版本号，随后点击"安装"，安装后点击"打开"，会弹出一个命令行窗口，需要配置一段时间。接下老会让你设置初始账户的名称与密码，然后 WSL 就安装完成了。

<img src="/assets/basic/10-linux-basic-2/image-20240901110107708.png" alt="image-20240901110107708" style="zoom: 25%;" />

#### :octicons-versions-16: WSL 的版本与配置

与正常的 Linux 发行版相同，WSL 也需要设置 root 账户密码，更换源等操作，方法如上所述。

WSL 有两个版本：WSL1 与 WSL2，功能有着细微差别，各有优缺点：

##### :material-microsoft-windows-classic: WSL 1

WSL1 是一个轻量级的 Linux 兼容性层，它会将 Linux 系统调用转换为 Windows NT 内核调用来实现 Linux 应用程序的运行，但不支持完整的 Linux 内核功能。

相比 WSL2 也有着其优势：首先 WSL1 不需要开启 Hyper-V（即选项"`虚拟机平台`"或"`Virtual Machine Platform`"），可以与其他虚拟机软件一同使用。第二点在于 WSL1 由于实际上调用还是 Windows 的内核，所以资源的调用速度与 Windows 上的相差不大，不会因为文件存放的位置影响调用。

WSL1 在不使用远程桌面连接形成图形化界面的情况下相当于一个 Linux 命令行，如果运行的代码不需要 Linux 内核的情况下没有必要使用 WSL2，WSL1 就已经足够（大部分情况下没有使用 WSL2 的必要）。

##### :material-microsoft-windows: WSL 2

WSL2 使用真正的 Linux 内核，并且支持 Docker 等其他高级功能。

除去完整 Linux 内核的优势外，相比 WSL1，WSL2 有着完全的系统调用兼容性，一些 Linux 的软件在运行后可以直接在 Windows 中以图形化界面的形式打开，还能在安装后直接显示在 Windows 的开始菜单上，从开始菜单就可以直接启动 WSL 中的软件。

但是 WSL2 也有缺点，除去 Hyper-V 开启导致其他虚拟化软件的性能下降问题外，WSL2 虽然由于拥有完整 Linux 内核所以 Linux 文件系统性能得到了提升，但是 Linux 文件系统外的文件（即挂载到 `/mnt` 目录中的文件）需要将指令传给 Windows 系统再传回 Linux 系统，这一过程极为缓慢，同理 WSL2 中 Windows 系统读取 Linux 文件的速度也非常缓慢。如果文件必须存储在 Windows 系统中或文件需要在 Windows 与 Linux 系统间交叉编译等情况还是选择 WSL1 更优。

##### :octicons-terminal-16: WSL 的命令

（均为在 Windows 下的终端进行操作）

```shell linenums="1"
wsl -l -v
```

这个命令可以查看当前的 WSL 的状态

<img src="/assets/basic/10-linux-basic-2/image-20240901112412132.png" alt="image-20240901112412132";" />

如图，NAME 表示 Linux 系统名，VERSION 表示使用的是 WSL1 或 2，STATE 表示当前是否在运行

```shell linenums="1"
wsl --shutdown
```

这个命令会关闭所有正在运行的 WSL 发行版与 WSL2 虚拟机

```shell linenums="1"
wsl --set-version <Distribution Name> <VERSION>
```

这个命令可以转换指定 Linux 系统的 WSL 版本（需要关机状态下）

```shell linenums="1"
wsl --set-default <Distribution Name>
```

这个命令是设置默认启动的发行版，因为你可以选择安装多个 Linux 发行版（甚至可以 WSL1,2 各留一个应对不同情况）

后续的几个命令一般连用，可以将原本放在 C 盘指定位置的 WSL 文件导出到其他盘。

```shell linenums="1"
wsl --export <Distribution Name> <FileName>
```

将指定分发版的快照导出为新的分发文件，默认为 tar 格式。FileName 可以带有路径来以放在其他盘，如

```shell linenums="1"
wsl --export Ubuntu D:\WSL\Ubuntu.tar
```

```shell linenums="1"
wsl --unregister <Distribution Name>
```

从 WSL 取消注册该发行版（相当于卸载该发行版）。子系统内部的所有数据、设置和软件将永久丢失，从 Store 重新安装会安装分发版的干净副本。如果想要保留数据，未经过导出操作不要使用这个命令。

```shell linenums="1"
wsl --unregister Ubuntu
```

```shell linenums="1"
wsl --import <Distribution Name> <InstallLocation> <FileName>
```

导入指定的 tar 文件作为新的分发版（可在后面添加--version 1/2 表示 WSL 的版本号）。如果用于改变 WSL 的安装位置，则 FileName 与先前所填的相同，InstallLocation 填写新的 WSL 安装目录，如：

```shell linenums="1"
wsl --import Ubuntu D:\WSL\Ubuntu D:\WSL\Ubuntu.tar --version 2
```

### :simple-vmware: Windows 下虚拟机的安装

#### 准备工作

1. 下载对应发行版的镜像（ISO 文件）

2. VMware Workstation Pro 的安装：

最新版 Vmware Workstation 17 已对个人用户免费，有条件可直接前往 VMware 官网下载，或自行寻找可信的国内源下载。

在安装完成后激活时选择“将 VMware Workstation 17 用于个人用途”即可免费完成激活。

1. 需要进入 BIOS 开启虚拟化功能，有关该功能的选项一般在 BIOS 中的 `Configuration` 选项中。若是 Intel 的 CPU 则名为 `VT-x` （或写为 `Intel Virtualization Technology`)，若是 AMD 的 CPU 则是 `AMD-V` ，将其改为 `Enable` 即可开启。

#### :simple-processwire: 安装过程

注：VMware 的自动安装功能不够完善，安装某些特殊发行版时会出现问题，且可选项有限。接下来我将演示手动安装虚拟机的步骤（以使用 VMware 安装 Debian 虚拟机为例）

##### :material-slot-machine: 虚拟机的创建

首先，如图点击“创建新的虚拟机”

<img src="/assets/basic/10-linux-basic-2/image-20240901002126326.png" alt="image-20240901002126326";" />

然后在新建虚拟机向导中选择“自定义”。

<img src="/assets/basic/10-linux-basic-2/image-20240901002156060.png" alt="image-20240901002156060";" />

硬件兼容性可以不做更改直接采用默认选项。

<img src="/assets/basic/10-linux-basic-2/image-20240901002224900.png" alt="image-20240901002224900";" />

注意下一步的安装来源这里需要选择“稍后安装操作系统”，否则 VMware 会自动安装镜像文件中的系统。

<img src="/assets/basic/10-linux-basic-2/image-20240901002317606.png" alt="image-20240901002317606";" />

在下一步中选择你想要安装的系统的版本，以这个镜像为例需要选择 Debian 12.x 64 位，具体需要根据你下载的镜像决定（这个选项主要需要把 64 位或 32 位看清楚，其余的不是特别重要）

<img src="/assets/basic/10-linux-basic-2/image-20240901002358587.png" alt="image-20240901002358587" style="zoom: 67%;" />

<img src="/assets/basic/10-linux-basic-2/image-20240901002422584.png" alt="image-20240901002422584";" />

命名虚拟机中的虚拟机名称与位置可以自行修改。

因虚拟机占用空间较大，故建议放在空间较为充足的磁盘。

<img src="/assets/basic/10-linux-basic-2/image-20240901002516660.png" alt="image-20240901002516660";" />

处理器配置这里的"处理器数量"指分配的核心数量，"每个处理器的内核数量"指给每个核心分配的线程数，总共给虚拟机分配的线程数为二者乘积。

若安装的系统对性能要求不高且不运行大项目则无需太多核心，2x2 或 4x1 乃至 2x1 就已经很够了，不要分配太多以免主机卡顿，分配前请计算自己 CPU 的核心数量（如大小核需要~~鸡兔同笼~~特别计算）。

<img src="/assets/basic/10-linux-basic-2/image-20240901002603682.png" alt="image-20240901002603682";" />

给虚拟机分配内存也是同理，不要超过主机内存的一半，如果是 Linux 等对内存需求不高的 4GB 也够用，Windows 可能会需要 8GB 及以上，内存和核心分配的具体数值可以等安装虚拟机后使用软件查看利用情况后再另行调整。

<img src="/assets/basic/10-linux-basic-2/image-20240901002654446.png" alt="image-20240901002654446";" />

网络类型如无特殊需求可直接选用默认的网络地址转换（NAT）

<img src="/assets/basic/10-linux-basic-2/image-20240901002716229.png" alt="image-20240901002716229";" />

I/O 控制器类型与磁盘类型也可直接采用推荐选项。

<img src="/assets/basic/10-linux-basic-2/image-20240901002730501.png" alt="image-20240901002730501" style="zoom:25%;" />

<img src="/assets/basic/10-linux-basic-2/image-20240901002740664.png" alt="image-20240901002740664" style="zoom:25%;" />

选择磁盘时，如果有既有的虚拟机磁盘（如转移其他版本或其他软件上的虚拟机）则可选择"使用现有虚拟磁盘"一栏并直接导入。

否则选择"创建新虚拟磁盘"。具体的磁盘大小根据你的用途决定，正常情况下推荐的大小就够用了。

<img src="/assets/basic/10-linux-basic-2/image-20240901002844318.png" alt="image-20240901002844318";" />

如果不勾选"立即分配磁盘空间"则会根据该虚拟磁盘储存数据多少来动态占用磁盘空间（较为推荐）。

将虚拟磁盘存储为单个文件会导致转移时需要分卷转移或使用较大的移动硬盘，还对磁盘的格式有限制 ~~（如 U 盘常用的 FAT32 格式单个文件最大支持 4GB）~~

<img src="/assets/basic/10-linux-basic-2/image-20240901002910526.png" alt="image-20240901002910526";" />

##### :material-washing-machine: 虚拟机的安装

创建完虚拟机后可在虚拟机位置右键点击设置，可以修改先前所选的一部分内容

<img src="/assets/basic/10-linux-basic-2/image-20240901003303914.png" alt="image-20240901003303914";" />

选择设置里的硬件 -> CD/DVD -> 连接选项，改为"使用 ISO 映像文件"并选择你下载的发行版安装镜像。

<img src="/assets/basic/10-linux-basic-2/image-20240901003803015.png" alt="image-20240901003803015";" />

当 CD/DVD 一栏显示正在使用…（你的 ISO 文件路径）的时候即可启动虚拟机，然后与正常 Linux 系统的安装方法相同直到进入桌面。

原本的"移除安装介质"（即拔掉 U 盘）的环节，可以右键 VMware 窗口右下角的光驱图标并选择"断开连接"来达到相同效果，原本的断网操作也可以右键网络图标并断开连接，等到安装完成后再右键连接。

<img src="/assets/basic/10-linux-basic-2/image-20240901003954815.png" alt="image-20240901003954815";" />

##### :material-tools: VMware tools 的安装

如果刚装好虚拟机你可能会发现有几个问题：分辨率锁死无法调节、拖拽和共享文件夹无法使用、3D 加速无法开启等诸多问题，这是因为 VMware tools 没有安装（你可以将其理解需要在虚拟机内安装 VMware 的驱动）

首先需要加载 VMware tools 的镜像，在**系统安装完成后**如果出现了下面这个黄条就点击"安装 Tools"按钮。

![image-20240901102457715](/assets/basic/10-linux-basic-2/image-20240901102457715.png)

如果没有这个黄条也可以在 VMware 的菜单栏中选择虚拟机->安装 VMware Tools（第一次安装没有"重新"二字，如果你已经安装过 VMware Tools 了就会显示重新安装，可以根据上述功能是否正常工作判断是否需要重新安装）

<img src="/assets/basic/10-linux-basic-2/image-20240901102849649.png" alt="image-20240901102849649";" />

然后你的虚拟机系统内就会以光驱的形式挂载 VMware Tools 的安装镜像（如果安装的是非 Linux 虚拟机可以直接按步骤操作不在赘述，这里拿 Debian 演示 Linux 下的安装方式），打开这个光驱，找到 VMware tools 的压缩文件（即 `VMwareTools-版本号。tar.gz` 格式的文件）

<img src="/assets/basic/10-linux-basic-2/image-20240901103304129.png" alt="image-20240901103304129";" />

在空白位置右键选择在终端中打开（如无图形界面可用命令行打开目录 `/media/cdrom0`）。在下一步操作前要保证当前账户拥有 `sudo` 权限。

<img src="/assets/basic/10-linux-basic-2/image-20240901103513942.png" alt="image-20240901103513942";" />

然后将这个压缩文件拷贝到一个其他位置，如自己的主目录（因为原位置只读），然后再进入该目录并将其解压。

<img src="/assets/basic/10-linux-basic-2/image-20240901104405772.png" alt="image-20240901104405772";" />

然后进入解压出来的文件夹 (```./vmware-tools-distrib```)，用** sudo（管理员权限）**运行```vmware-install.pl```文件

<img src="/assets/basic/10-linux-basic-2/image-20240901104554049.png" alt="image-20240901104554049";" />

然后在如图所示第一个选项（默认选择为 no）输入 yes，其余的选项直接狂按 Enter 键走默认选项就可以，随后安装成功。

<img src="/assets/basic/10-linux-basic-2/image-20240901104740639.png" alt="image-20240901104740639";" />

##### :material-ship-wheel: 虚拟机的设置

虚拟机与主机的信息交换方式常用三种，最简单的是将下面的“拖放”与“复制粘贴”开启。

<img src="/assets/basic/10-linux-basic-2/image-20240901003411492.png" alt="image-20240901003411492";" />

或者也可以采取共享文件夹的方法，为保护主机数据建议将主机路径设置到一个独立的空文件夹内或开启只读。共享文件夹一般挂载到'`/mnt/hgfs/`'下。

<img src="/assets/basic/10-linux-basic-2/image-20240901003446957.png" alt="image-20240901003446957";" />

<img src="/assets/basic/10-linux-basic-2/image-20240901003459605.png" alt="image-20240901003459605";" />

快照功能是虚拟机相比直接装系统的一大优势，相当于将虚拟机存档。（WSL 也有快照功能，不过用起来没有虚拟机的方便）。VMware 菜单上三个时钟图样的表示的就是快照功能，使用"快照管理器"可以用时间轴的方式直观地展示各快照的关系并随时添加快照。

<img src="/assets/basic/10-linux-basic-2/image-20240901114423930.png" alt="image-20240901114423930";" />

还有 USB 的接入功能，这个功能允许直接将连在主机上的设备直接接入虚拟系统。如图，在虚拟机->可移动设备中可以找到能直接接入虚拟机的设备，若选择"连接"则会将该设备断开与主机的连接并直接接入虚拟机（比如正常模式下的键盘默认按 ++ctrl+alt++ 会将焦点移出虚拟机，无法按出 Linux 的终端快捷键 ++ctrl+alt+t++，而直接连接后则可以正常使用该快捷键），常用的直接连接的设备如键盘、鼠标、移动硬盘等。

<img src="/assets/basic/10-linux-basic-2/image-20240901114741910.png" alt="image-20240901114741910";" />

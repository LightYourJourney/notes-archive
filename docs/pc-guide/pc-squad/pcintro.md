# :beginner: 电脑知识入门（原理和构造）

!!! warning ":construction: 文档施工中"

!!! abstract "导言"

    由过去的经验当中，我们发现很多带着电脑进大学的朋友对于电脑软/硬件方面的概念并不熟悉 ~~（可能是因为移动设备的普及和中小学计算机教育的缺失？）~~ 。然而无论是从日常电脑使用，文件管理，还是各种电脑问题的维修来说，了解你手边的电脑无疑是必要的。因此，我们从电脑最基本的组件开始讲起，希望从原理和构造的角度帮助大家一步步认识自己的电脑。

## :simple-opensourcehardware: 初识硬件 {#hardware-intro}

> 硬件是电子计算机的物理设备。
>
> 硬件包括计算机的物理，有形部件或组件，例如机箱、中央处理器（CPU）、显示器、键盘、硬盘、图形卡（GPU）、声卡、网卡、扬声器和主板。

简而言之，硬件就是电脑中能看见的各种组件的总称。它被认为“硬”是因为它在变化或修改方面“硬”或严格，而软件是“软”的，因为它很容易更新或更改。

关于电脑的硬件组成部分，依功能来说主要可分为三部分，分别是：

- **输入单元**：包括键盘、鼠标、读卡机、触控板、触摸屏等等；
- **主机部分**：这个就是主机机箱里面的东西，后面会仔细讲；
- **输出单元**：显示器、打印机等等

我们通过输入设备如鼠标与键盘来将一些数据输入到主机里面，然后再由主机的功能处理成为其他信息后，将结果传输到输出设备，如屏幕或打印机上面。

那主机里面含有什么元件呢？你如果曾经拆开过电脑主机机箱 ~~/你的智能手机~~，就会发现其实主机里面最重要的就是 **主板**，上面安插了中央处理器（CPU）、内存、硬盘、还有一些适配卡设备（网卡，声卡等等）。而绝大部分智能手机是将这些元件直接焊接在主板上面，无法 DIY。

### :octicons-cpu-16: CPU {#cpu}

整部主机的重点在于**中央处理器**（Central Processing Unit, CPU），CPU 为一个具有特定功能的芯片，里头含有微指令集，如果你想要让主机进行什么特异的功能，就得要参考这颗 CPU 是否有相关内置的微指令集才可以。由于 CPU 的工作主要在于管理与运算，因此在 CPU 内又可分为两个主要的单元，分别是：**算数逻辑单元与控制单元。其中算数逻辑单元主要负责程序运算与逻辑判断，控制单元则主要在协调各周边元件与各单元间的工作。

既然 CPU 的重点是在进行运算与判断，那么要被运算与判断的数据是从哪里来的？CPU 读取的数据都是从内存来的！内存内的数据则是从输入单元所传输进来！而 CPU 处理完毕的数据也必须要先写回内存中，最后数据才从内存传输到输出单元。

#### CPU 的架构

### :simple-nvidia: GPU {#gpu}

### :fontawesome-solid-memory: 内存 {#memory}

### :material-harddisk: 硬盘 {#hard-disk}

### :material-connection: 硬件的分工及其间的连接 {#hardware-connection}

## :simple-esotericsoftware: 初识软件 {#software-intro}

### :simple-linux: 操作系统 {#os}

### :material-hammer-screwdriver: 驱动程序 {#driver}

### :material-application: 应用程序 {#applications}

### :material-microsoft-office: 常用软件 {#common-software}

## :octicons-cross-reference-16: 参考资料 {#reference}

1. 鸟哥的 Linux 私房菜：[https://linux.vbird.org/](https://linux.vbird.org/)
2. CPU - 维基百科：[https://zh.wikipedia.org/wiki/中央处理器](https://zh.wikipedia.org/wiki/%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98)
3. GPU - 维基百科：[https://zh.wikipedia.org/wiki/圖形處理器](https://zh.wikipedia.org/wiki/%E5%9C%96%E5%BD%A2%E8%99%95%E7%90%86%E5%99%A8)
4. ARM 架构 - 维基百科：[https://zh.wikipedia.org/wiki/ARM 架構](https://zh.wikipedia.org/wiki/ARM%E6%9E%B6%E6%A7%8B)
5. x86 架构 - 维基百科：[https://zh.wikipedia.org/w/index.php?title=X86&variant=zh-cn](https://zh.wikipedia.org/w/index.php?title=X86&variant=zh-cn)
6. 固态硬盘 - 维基百科：[https://zh.wikipedia.org/wiki/固态硬盘](https://zh.wikipedia.org/wiki/%E5%9B%BA%E6%80%81%E7%A1%AC%E7%9B%98)
7. DDR SDRAM - 维基百科：[https://zh.wikipedia.org/wiki/DDR_SDRAM](https://zh.wikipedia.org/wiki/DDR_SDRAM)
8. 固件 - 维基百科：[https://zh.wikipedia.org/wiki/韌體](https://zh.wikipedia.org/wiki/%E9%9F%8C%E9%AB%94)
9. BIOS - 维基百科：[https://zh.wikipedia.org/w/index.php?title=BIOS&variant=zh-cn](https://zh.wikipedia.org/w/index.php?title=BIOS&variant=zh-cn)
10. USB - 维基百科：[https://zh.wikipedia.org/wiki/USB](https://zh.wikipedia.org/wiki/USB)
11. 计算机速成课：[https://www.bilibili.com/video/av21376839/](https://www.bilibili.com/video/av21376839/)
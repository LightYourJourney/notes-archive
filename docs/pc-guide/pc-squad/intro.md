# :material-location-enter: 绪论

!!! warning ":construction: 文档施工中"

## :material-group: 信科青协与电脑小队 {#squad}

### :material-history: 动机、历史和理念 {#squad-history}

信科青协于 2008 年 3 月 26 日借奥运会志愿活动的契机成立。

电脑小队与之相伴而生，是青协延续至今的品牌志愿服务项目。

电脑小队的宗旨：为师生提供电脑技术支持，让大家足不出户解决电脑问题，学习电脑知识。

自成立以来，电脑小队的足迹遍布北京大学：

- 组织近百次活动，招募逾百名志愿者，提供数千人次的技术支持
- 目前每学期组织 2-3 次活动，每次解决数十个技术问题
- 最早的 [微信公众号推送](https://mp.weixin.qq.com/mp/appmsg/show?__biz=MzA3NzE0MjcyMQ==&appmsgid=10003150&itemidx=3&sign=c47acf20b8e86d5f6af81b17460d3399)（2013 年 12 月）

- 2012 年，电脑小队被评为北京大学“十佳志愿服务团队”和海淀区优秀志愿者团队
- 2022 年，电脑小队被北大官媒报道《在北大，同学帮你修电脑》
- 2023 年，电脑小队被评为 2022-2023 学年北京大学青年志愿服务优秀项目之一
- 有望继续争取 2023-2024 学年的青年志愿服务项目

### :material-form-textbox: 现状、定位和活动形式 {#squad-status}

现状：疫后恢复，推陈出新。

不过，同学们各自有自己的事要忙，能够拿出的时间有限。

定位：不但要解决电脑问题，还要普及电脑知识

活动形式：之前为电脑知识讲座 + 电脑维修，也在信科文化节等活动中出展

### :material-floor-plan: 本学年工作计划 {#squad-plan}

- 组织编写资料
- 进行例会培训
- 加强对外联络
- 更好地通过微信 / Q 群等方式为同学们提供服务
- 探索新的活动形式
- 解决小程序问题
- ……

## :simple-knowledgebase: 初识电脑 {#intro}

### :simple-instructure: 电脑结构简介 {#structure}

- 电脑的分类

    - 台式电脑（Desktop）
    - 笔记本电脑（Laptop）
    - 平板电脑（Tablet）
    - 服务器（Server）

==我们主要讲解如何拆解笔记本电脑，但培训中的计算机常识适用于各种电脑==

- 笔记本定位

    - 作为移动工作站：仅外出时使用，重视轻便性
    - 作为主力设备：也需要强调机器的性能

- 常见概念

    - 商务本、轻薄本、办公本、游戏本、设计本、全能本……
    - 新形态：触摸屏、二合一、多屏、超轻……

- 软件与硬件

硬件指计算机的物理组件，是可以看到和触摸的部分（e.g. 处理器、存储设备、监视器（屏幕）、打印机、键盘、鼠标等）

软件是在计算机处理器上执行的编程代码（e.g. 操作系统、应用程序等）

通俗地说，软件是摸不着的，硬件是摸得到的

维基百科：A computer is a **machine** that can be **programmed** to automatically carry out …

- 电脑的逻辑结构

电脑的实际结构是复杂的，不过按冯·诺伊曼架构，它可以抽象为

<div style="text-align: center;">
  <img src="assets/images/pc-squad/computer-structure.png" alt="Computer Structure">
</div>

- 电脑三大件

有人说 CPU、内存和硬盘是电脑的“三大件”。
    - CPU（Central Processing Unit / 中央处理器）执行计算
    - 内存暂存计算的结果，读写速度快但容量小，掉电后数据丢失
    - 硬盘用于长期存储数据，读写较慢但容量大，掉电后数据保留

- 其他重要部件

    - GPU（Graphics Processing Unit / 图形处理器）是专为渲染图形设计的处理器，常被称作“显卡”
        - 与电脑的游戏画面渲染能力挂钩
        - 有的 GPU 集成在 CPU 内部，称“核心显卡”或“核显”
        - 有的 GPU 为独立部件，称“独立显卡”或“独显”，性能往往更强
    - 主板（Motherboard / Mainboard）连接所有部件，提供其间的通信渠道
    - 外设（Peripheral Device / 外围设备）中的键盘、鼠标、显示器、传声器（麦克风）、扬声器等输入输出设备

- 三大件在哪里？

以下图片资料来自于 [BV1Wf4y1j7AX](https://www.bilibili.com/video/BV1Wf4y1j7AX/)，该视频也是一个不错的拆机教程。

### :simple-asus: 主流操作系统厂商及整机制造商简介 {#os}

- 主流操作系统

操作系统是应用程序与硬件间的中介。

- 个人电脑：
    - Microsoft Windows (68%)
    - macOS (Apple Inc.) (20%)
    - Linux （7%; 服务器中占主导）

- 移动设备：
    - Android (68.92%)
    - iOS / iPadOS (Apple Inc.) (30.42%)

- 主流指令集架构

指令集架构（ISA，Instruction Set Architecture）定义了软件控制 CPU 的方式，商业应用的主流是 x86-64 和 ARM 两种。
苹果电脑和多数智能手机是 ARM 架构；Windows 电脑多数是 x86-64 架构，少数是 ARM 架构。

其他 ISA：RISC-V，LoongArch 等。

- 主流电脑制造商

    - 主流笔记本电脑品牌

        - Lenovo：联想
        - Dell：戴尔
        - HP：惠普
        - Apple：苹果
        - ASUS：华硕
        - Acer：宏碁
        - Xiaomi：小米
        - Microsoft：微软
        - Huawei：华为

    - 主流 CPU / GPU 厂商

        - AMD（Advanced Micro Devices）：超威半导体
        - Intel：英特尔
        - NVIDIA：英伟达
        - QUalcomm：高通

### :material-usb: 外设接口简介 {#interfaces}

### :material-google-classroom: 互动：了解自己的设备（查看外壳标签、型号和参数，观察外设接口，查看系统信息） {#check}

- A/B/C/D 面

- 外设接口

- 用户手册

一般在制造商官网一般有“支持”（Support）一栏，用户可以在其中查询保修情况、驱动信息、用户手册等；

提供给用户的手册中往往有关于拆解和更换部件的，这是了解你的电脑以及对其进行拆解的最权威的参考资料；

联想电脑似乎访问英文版网站（https://support.lenovo.com/us/en/）方可下载全部资料。

- 查看电脑信息

Windows 基本信息：开始菜单 -> 搜索“设置”或“Settings” -> 设置菜单 -> “系统”栏 -> “关于”选项
W
indows 设备信息：开始菜单 -> 搜索“设备管理器”或“Device Manager” -> 设备管理器

macOS： -> “关于本机” --> "更多信息"

Linux：[参考链接](https://lijian.ac.cn/posts/2018/09/linux-information/)

## :material-help-box: 如何寻求帮助 {#help}

为什么这样早提及？

一些内向的新同学可能感到难以与其他人进行交流由于不擅长寻求帮助，一些同学可能在面对问题时无所适从

### :simple-wechat: 勇于交流 {#communication}

与人交流其实并不像一些同学想象得那样困难同时，它也是大学时的一门“必修课”

青协的大家向来十分热心，愿意为同学们答疑解惑，排忧解难

### :material-search-web: 善用搜索 {#search}

通用搜索引擎国内推荐使用微软的 [必应搜索](https:.cn.bing.com)，垃圾信息较少

国外推荐使用 [谷歌](https://google.com)，

对于专业知识，图书馆（lib.pku.edu.cn）有丰富的纸本藏书和线上资源库如果仅希望作基本了解，也可以先考虑知乎等平台，不过要注意甄别。

### :simple-askfm: 提问的智慧 {#asking}

这是一个有名的题目，也许可以参考这篇文章的内容

- 在提问前要尝试自己解决问题
- 要在合适的地方提问，问题要描述清楚
- 无论问问题还是回答问题都要讲礼貌，以善意待人

软件根据其功能不同也可以分为很多种，有一些软件是直接跟硬件打交道的，而另一些软件则直接跟用户打交道，中间还有连接两者的桥梁。他们分别是操作系统和硬件驱动程序，应用程序，和“库”。操作系统提供了对各种资源，比如处理器、内存、网络、各种外部设备如打印机等的统一抽象，使得大部分应用程序在大部分不同的硬件上都能正确运行，简化了应用程序员的工作，同时也将不同资源进行隔离，尽可能防止有缺陷或者恶意的程序影响其他程序运行。

这一节我们着重介绍 Windows 操作系统和 Linux 操作系统。

#### Windows

Windows 是微软公司开发的图形化操作系统，具有成熟的图形界面。同学们个人计算机日常使用的系统很可能就是 Windows（苹果用户除外）。Windows 系统较为庞大，里面很多组件在日常使用中完全用不到，甚至是以一种历史包袱的形式存在。不过正因为如此，很多老旧的将近 20 年前的 Windows 软件仍然能在最新的系统中正常运行。

#### Linux

从 1991 年 Linus 宣告 Linux 的存在，到 2024 年，Linux 已经走过 30 多个年头。下面是 Linus 向社区宣告 Linux 存在的邮件（尽管当时还没有名字）：
```
Hello everybody out there using minix -

I'm doing a (free) operating system (just a hobby, won't be big and
professional like gnu) for 386(486) AT clones. This has been brewing
since april, and is starting to get ready. I'd like any feedback on
things people like/dislike in minix, as my OS resembles it somewhat
(same physical layout of the file-system (due to practical reasons)
among other things).

I've currently ported bash(1.08) and gcc(1.40), and things seem to work.
This implies that I'll get something practical within a few months, and
I'd like to know what features most people would want. Any suggestions
are welcome, but I won't promise I'll implement them :-)

Linus (torv...@kruuna.helsinki.fi)

PS. Yes - it's free of any minix code, and it has a multi-threaded fs.
It is NOT protable (uses 386 task switching etc), and it probably never
will support anything other than AT-harddisks, as that's all I have :-(. 
```

严格来说，Linux 只是一个“操作系统内核”，并没有包含用户态的程序，而一般来说，一个完整的操作系统需要包含用户态的一些基础设施，比如供更上层应用程序使用的库函数，以及用于管理其他软件和硬件，但不必放进内核态的程序。目前说 Linux 操作系统，一般指的是基于 Linux 内核衍生的各大发行版。各种 Linux 发行版为 Linux 内核配置了一系列用户态程序，这样才能构成一个完整的操作系统。

与 Windows 内核（名字是 NT 内核）不同，Linux 内核并不直接提供图形界面，只提供了不同的视频模式，Linux 发行版的图形界面属于用户态程序，且是选配的，对于一个不需要图形界面的服务器，完全可以省下这一笔空间。与 Windows 不同，在 Linux 发行版中，Linux 内核和系统的其他组建完全都是由一个个软件包组成的，如果你不需要某个功能，完全可以将相应的软件包移除。也可以用其他功能类似的软件包替换某个软件包。系统具有高度可定制性。

Linux 是一种类 Unix 操作系统，API 符合 POSIX 标准。

还有一个更大的不同，就是 Linux 属于自由软件，和 Linux 内核一道组成发行版的程序绝大部分也是自由软件。自由软件的源代码不仅公开，还需要能够自由传播、修改、销售，只要你遵守许可证的条件。常见的许可证包括 GPL，这个许可证要求基于 GPL 软件的衍生作品如果发布，则也必须按照 GPL 发布，而 MIT，BSD，Apache 许可证协议则较为松散，不要求衍生作品同样按照自身许可证发布，只需要恰当署名即可。介于这两种许可之间的许可有 LGPL，MPL 等。Windows 版权则归微软所有，其源代码仅小范围知晓，即使旧版 Windows 源代码已经有所泄漏，由于无法取得授权，任何看到它的人也不能合法加以利用。

尽管 Linus 宣称 Linux 内核并不是一个 portable 的内核，显然，他是目前世界上最 portable 的内核。为什么会这样呢？这跟 Linux 是自由软件有很大关系。Linus 相信，他向别人提供代码，别人也将代码分享给他，就是一种很好的模式。正因为有这种宽松自由的许可，使得 Linux 可以被任意改造去适配不同的硬件，而不需要 Linus 自己一个人或者几个人去完成这件事。

> 历史的注记：微软在 21 世纪初将 Linux 称作“癌症”，认为 Linux 侵犯了知识产权，试图在客户中培育对 Linux 的恐慌，并以专利威胁起诉 Linux 开发者。然而十年后，微软表示“We love Linux”，可能是因为 Linux 在服务器市场占有率已经很高了。

> 历史的注记：Windows 有一个臭名昭著的“功能”————蓝屏死机。这是 NT 内核在遇到不可恢复的错误时产生的错误提示信息，由于蓝色色调本身较冷，以及早期 Windows 给人以不稳定的印象，这个界面因此变得声名狼藉。然而 Linux 内核并不会出现蓝屏，一方面是 Linux 在更大程度上允许内核“带病运行”（这不一定是好事），且 Linux 的内核错误信息只显示在非图形界面的终端上，如果用户处于图形界面，只能看到大写锁定键的灯光一直闪烁，看不到任何提示信息。最近 Linux 内核开发者试图在内核严重错误时绘制一个黑色界面，并展示一个二维码作为错误提示信息。

#### 其他操作系统

- MacOS: 苹果专用，符合 POSIX 标准的 Unix 系统，老版本可在 Intel 机器安装（需要魔法），内核叫 Darwin，修改自 BSD 系内核，部分开源
- FreeBSD: 符合 POSIX 标准的类 Unix 系统，和 Linux 只是内核不同，FreeBSD 有完整的用户态程序，同时其采用更宽松的许可协议，而不是 Linux 的 GPLv2。
- DOS: 古老的操作系统，无图形界面，已不使用，微软近期开源了几个版本的 DOS。

#### 移动操作系统

- Android: Google 开发的基于 Linux 内核的操作系统，Google 自己在上面开发了 AOSP 一套环境。
- iOS: 苹果公司的产品，2007 年随 iPhone 横空问世，基于 Darwin 内核开发，封闭性较强。

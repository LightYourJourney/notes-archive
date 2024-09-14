# 3. 软件的安装和卸载

安装卸载软件听起来是很简单的事——但其中其实有很多门道。有一则笑话：“我熟练掌握 PS、AE、Word、Excel、PowerPoint 等软件的安装和卸载“，听起来很好笑，但许多软件的安装和卸载本身也是有难度的。在这一部分中，我们来了解一下如何正确地安装、卸载软件，打造一个干净的电脑环境。

## 3.1 软件的安装

### 定位官网

常用的免费/付费软件都会有一个官网。然而，由于近年来搜索引擎广告严重，许多官网难以找到，甚至人们在寻找官网的时候被带到“xx 软件园”等流氓网站。因此，找到官网也成了一门技术活。

![steam](/assets/basic/04-drive-your-computer-1/steam.png)

如上图，在百度中搜索 steam，第一个结果就不是官网。一般来说，搜索引擎以蓝色小块标注官网的，就是官网。

![steam2](/assets/basic/04-drive-your-computer-1/steam2.png)

如上图，我们采用必应搜索引擎搜索 steam，此时第一个结果就是官网。选择一个好的搜索引擎对于找到软件官网很有帮助——我们推荐使用必应，有条件的可以使用谷歌，来寻找需要的软件。相信大家在第二讲中已经有所体会了。

### 下载软件

进入官网后，一般来说软件下载按钮会出现在主页。但有时候需要耐心寻找。例如 steam 的安装按钮就很小：

![steaminstall](/assets/basic/04-drive-your-computer-1/steaminstall.png)

找到按钮，进入下载网页后，网站一般会根据电脑类型自动判断需要的**安装包**。此时，我们只需点击下载按钮，等待下载完成后打开即可；在保护比较严格的电脑上，可能会弹出风险提示，**在确认确实是要下载的软件，且软件安全后**，选是即可。如果网站没有根据电脑自动选择安装包，如下图：

![qq](/assets/basic/04-drive-your-computer-1/qq.png)

请根据自己电脑的类型来选择。例如，电脑是 Windows，点进去后是如下的画面：

![qq2](/assets/basic/04-drive-your-computer-1/qq2.png)

这里要**尤为注意**自己电脑的情况。一般来说，64 位 Windows 就用默认下载按钮；而** Surface **这类** Arm **架构的 Windows 电脑要选择** Arm 版本下载**。如果是 MacBook，也要注意** Intel 和 Apple 芯片的区别**，否则无法正常安装。

### GitHub 上软件的下载

第一次在 GitHub 下载软件的时候，可能有许多人会被它的命名方式困扰。首先，我们需要进入一个项目的 Releases 界面：

（在搜索引擎上搜索你要的软件名，后面加上 GitHub，一般可以搜到它的 GitHub 主页）

![clv](/assets/basic/04-drive-your-computer-1/clv.png)

然后找到它的 Assets 部分：

![assets](/assets/basic/04-drive-your-computer-1/assets.png)

通常来讲，我们用的电脑是 Arm64/amd64（x64）架构。常见的轻薄本、游戏本、台式机都是 amd64（x64）架构，我们要找到对应的架构，以及后缀为`.exe`或者`.msi`的文件来安装。Linux 则要找到自己的架构，且后缀为`.deb`、`.tar.gz`等的文件；MacOS 用户，如果是 Apple 芯片，则要找到`aarch64`、`arm64`架构，`.dmg`后缀的文件来安装。如果是 Intel 芯片，则要找`x64`架构，`.dmg`后缀文件安装。

### 安装软件

打开安装包后，就可以开始安装了。

在 Windows 电脑上：请一定仔细检查所谓**极速安装/快速安装**这些按钮。出现这些按钮后，建议点击详情，它们一般会默认安装到 C 盘；这时，需要的话，可以点击浏览，安装到其他盘（尤其是对于**原神**这类大型游戏，几个就把 C 盘占满了）。不需要更改目录的话，也请查看是否有**捆绑软件**默认勾选。

安装完成后，强烈建议**查看整个界面**，是否有捆绑软件勾选，再点击完成。

对于 MacOS 电脑，情况有所不同。一般来说，下载到的是`.dmg`文件。双击运行，把软件图标拖到 Application 文件夹即可安装。安装完成后，会发现 Apps 中出现这个软件。但有时候，打开软件会提示 App 已损坏。这是 Apple 的过强的安全策略造成的。

由于篇幅限制，请针对每个软件出现的问题，搜索相应的解决办法（因为每个软件的包名不同）。下面给出两个网站，介绍了相关问题的通用解决办法：

[最新｜解决 Mac 安装软件的“已损坏，无法打开。 您应该将它移到废纸篓”问题 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/135948430)

[无法打开 App 的可能解决方法 - Mac 指北 (leavelet.io)](https://macguide.leavelet.io/Bike/appnotopen.html)

## 3.2 卸载软件

### Windows

一般来说，Windows 上的软件在安装后会提供卸载程序。

**注意**：直接把桌面上的软件图标移动到回收站是不可行的！！！

**注意**：直接把桌面上的软件图标移动到回收站是不可行的！！！

**注意**：直接把桌面上的软件图标移动到回收站是不可行的！！！

重要的事情说三遍。现在，请到设置的如图部分：

![uninstall](/assets/basic/04-drive-your-computer-1/uninstall.png)

点击后，搜索你要卸载的软件，然后点卸载。

### MacOS

在 MacBook 上删除软件比 Windows 复杂得多。虽然，在访达->Application 文件夹，把软件移到废纸篓，或者在启动台长按，点×删除，可以删除软件主体；**但是**，这样做并不能删除软件在系统各处创建的配置文件等等琐碎的小文件，也就是**软件残留**。

因此，可以选择用** brew **这样的工具来管理软件。或者，对于具体的软件，搜索其相应残留位置手动删除。

## 3.3 规避流氓、病毒软件

流氓软件多如牛毛，相应的规避方法也不完全相同。在安装软件时（尤其是 Windows），要注意：

- 不要去任何软件园下载软件。
- 不要去下载未经确认安全的盗版资源。这种时候，下载完了可以用 Windows Defender 之类的杀毒软件扫一扫。但也不一定安全。
- 与直觉相反，360 软件管家下载的软件一般是安全的，例如可以下载到正版 steam。（笔者最近在网上冲浪时发现了这一点，非常震惊）~~但这种方法有不菲的代价，比如电脑上留了个大流氓~~
- 安装的时候，安装程序的**每一个界面**都要留意，例如修改浏览器主页、勾选捆绑软件等行为。甚至有**不要取消勾选你不想要的软件**这种神奇操作。
- 可以多去 GitHub 下载开源软件。但要注意，开源软件也不一定安全。

总之，没有任何方法能彻底避免流氓、病毒软件。这是一个魔高一尺道高一丈的过程。我们能做的，也就是擦亮眼睛，开动脑筋，用我们的火眼金睛去发现问题、规避问题。

## 3.4 获取正版软件

北京大学为大家提供了许多正版软件，方便大家的学习、工作。首先，我们**登录门户**，找到**正版软件**并进入：

![software](/assets/basic/04-drive-your-computer-1/software.png)

然后在网站中找到想要的软件来下载。激活过程可能需要校园网环境。

- **Adobe**：现在，请前往 [Adobe Creative Cloud Download](https://creativecloud.adobe.com/zh-Hans/apps/download/creative-cloud) 直接下载 Creative Cloud，下载时输入学号邮箱（xxx@stu.pku.edu.cn)，会自动跳转到门户登录，登录后就会获得授权。
- **VMWare**：现在已经免费。请直接去官网下载。
- **Office**：可按照网站要求，申请学生订阅。或者直接下载软件包，用校园网环境激活。
- **MATLAB**：可直接下载离线包，用学校邮箱登录来安装。

# 4. 常用软件推荐

这一部分，我们来了解一下不同领域的常用软件，希望能对你有所帮助。我们尽量推荐免费、开源、功能强的软件，从而保持良好、干净的电脑环境。

## 4.1 压缩软件推荐

由于各类网络资源都会使用压缩文件的方式进行发布，寻找一款好用且**不流氓**的压缩软件很有必要。下面推荐一些常用的压缩软件：

- Windows：
  - `7-zip`或者其变种`7-zip-zstd`：老牌压缩软件，能满足大部分需求。官方网站：https://www.7-zip.org/download.html；`7-zip-zstd`官方网站：[GitHub - mcmilk/7-Zip-zstd: 7-Zip with support for Brotli, Fast-LZMA2, Lizard, LZ4, LZ5 and Zstandard](https://github.com/mcmilk/7-Zip-zstd)
  - 老版`Bandizip`：请不要升级。新版本有广告。[Bandizip - 下载 Bandizip 6.x (bandisoft.com)](https://www.bandisoft.com/bandizip/old/6/)
  - `WinRAR`：老牌压缩软件。优点是可以生成 RAR 文件，且功能较全、界面不错。**请注意**：若要使用此软件，有如下注意事项：
    - 必须从英文官网下载：[WinRAR download free and support: WinRAR (win-rar.com)](https://www.win-rar.com/start.html?&L=0) 中文版无论是否购买正版都有广告，而英文版无论是否购买正版都没有广告，也不会有弹窗。30 天试用期不会减少。
    - **版本号必须大于 7.0.0！！！**这是因为，以前的版本有一个重要**高危漏洞**，可以无需以`.exe`后缀存放文件，执行恶意代码。
    - 可以参考如下网站进行**个人学习**：[GitHub - bitcookies/winrar-keygen: Principle of WinRAR key generation.](https://github.com/bitcookies/winrar-keygen?tab=readme-ov-file) 请参考此网站的 README 的** 6.3 **节。
- MacOS：
  - `MacZip`：第三方压缩软件。官网：[MacZip - 专为 macOS 而设计的压缩软件！](https://maczip.cn/?locale=zh-CN) 安装后，请自行更改默认的压缩包打开方式。使用此软件，有如下优点：
    - 安装后，设置内默认勾选压缩、提取文件忽略`.DS_STORE`文件。如果需要多平台传输压缩文件，这一特性很不错。
    - 支持的压缩包种类全，且支持加密压缩。

## 4.2 播放器推荐

- 所有平台：
  - `VLC`：一款开源播放器。官网：[官方下载：VLC media player，最棒的开源播放器 - VideoLAN](https://www.videolan.org/vlc/index.zh_CN.html)
- Windows：
  - `Potplayer`：一款老牌的播放器，功能强大。官网：https://potplayer.tv/?lang=zh_CN
- MacOS：
  - `IINA`：VLC 的重新封装，界面美观

## 4.3 下载器推荐

- Windows：
  - `Internet Download Manager`：功能强大的一款下载器。同网络环境下，相比于浏览器自带下载功能，提速明显，且可以从网页中下载视频、图片。但是收费。
- MacOS：
  - `Free Download Manager`：官网 [Free Download Manager for Mac | Download](https://www.freedownloadmanager.org/zh/download-fdm-for-mac.htm)
`Aria2`是一款不错的下载器。多个平台都有，但是使用门槛较高。官网：[GitHub - aria2/aria2: aria2 is a lightweight multi-protocol & multi-source, cross platform download utility operated in command-line. It supports HTTP/HTTPS, FTP, SFTP, BitTorrent and Metalink.](https://github.com/aria2/aria2)

## 4.4 杀毒软件推荐

主要针对 Windows。

- `火绒`：轻量小巧，~~用于关闭 Windows Defender~~，且有许多实用功能。但杀毒能力不强。
- `Windows Defender`：杀毒能力强，默认自带。但是容易误杀，需要花点时间摸清楚配置。愿意挨个设置白名单的话，还是很好用的。

## 4.5 杂项

- 浏览器插件：
  - `Tampermonkey`：可以在网页上执行脚本。这里推荐一个脚本：[GitHub - zhuozhiyongde/PKU-Art: 一个北大教学网的美化样式](https://github.com/zhuozhiyongde/PKU-Art)。更多脚本可以在下面的网站找到：[Greasy Fork - 安全且实用的用户脚本站](https://greasyfork.org/zh-CN)
- `Localsend`：多平台局域网文件传输软件。实用，且界面美观。iOS 和 Mac 可以在 App Store 找到。Android 可以在 Google Play 找到。各平台的安装包也可以在下面的网站找到：[GitHub - localsend/localsend: An open-source cross-platform alternative to AirDrop](https://github.com/localsend/localsend)
- `Magpie`：一款可以使画面清晰度提高的软件。例如，它可以使陈年老游戏的清晰度提升很多。工作原理为重采样，对显卡性能需求较高。官网：[GitHub - Blinue/Magpie: An all-purpose window upscaler for Windows 10/11.](https://github.com/Blinue/Magpie)
- `Geek`：Windows 上的一款卸载软件，可以卸载各个软件的残留。官网：[Geek Uninstaller - the best FREE uninstaller](https://geekuninstaller.com/)
- `Snipaste`：多平台通用的截图软件。功能强大，非常推荐。免费版即可。官网：https://zh.snipaste.com/
- `Everything`：文件搜索工具，搜索速度快。官网：https://www.voidtools.com/zh-cn/support/everything/
- `FileConverter`：可以在很多文件格式间互转。官网：https://github.com/Tichau/FileConverter
- `Calibre`：电子书管理器，也可以支持电子书格式转换。官网：https://calibre-ebook.com/zh_CN
- `Croc`：也是一款文件互传软件。[官网](https://github.com/schollz/croc)。优点在于可以自动打洞，不局限于局域网。
- [convertio](https://convertio.co)：也用于文件转换，是一个网站。
- `wiztree`：磁盘空间分析工具。[官网](https://www.diskanalyzer.com)。
-  `WallpaperEngine`：可以找到 Steam 创意工坊上的很多壁纸。建议从 Steam 购买并下载。
-  `OBS`：一款免费录屏软件，适配多平台。有虚拟摄像头等功能。官网：[Open Broadcaster Software | OBS (obsproject.com)](https://obsproject.com/)
-  `Typora`：一款轻量的 Markdown 文件编辑器。支持部分 LaTeX 语法和全功能 Markdown 语法。收费。官网：[Typora 官方中文站 (typoraio.cn)](https://typoraio.cn/)。

欢迎补充更多好用的软件！
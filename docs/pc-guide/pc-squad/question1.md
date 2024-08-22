# :material-lock-question: 电脑小队常见问题一

!!! warning ":construction: 文档施工中"

## :material-web: 校园网服务 {#campus-network}

### :material-network-pos: 校园网概况 {#campus-network-overview}

北京大学的计算、信息管理和网络由计算中心统一负责，计算中心的网址是 its.pku.edu.cn（北京大学网络服务）。其上有许多有关上网的教程，建议阅读常见上网问题都可以查询到，本节绝大部分内容参考了其中的内容。

疑难杂症打电话、发邮件咨询或线下处理（[计算中心联系方式](https://its.pku.edu.cn/contact_us.z.jsp)），办公地点为理科一号楼南边门洞右手一侧

### :material-network: 校内连网 {#campus-network-connect}

- 无线网络

无线方式从 PKU Secure 或 PKU 接入无线网络（参考计算中心的教程）

在宿舍内安装路由器（待补充）

- 有线网络

有线方式宿舍内床下墙上有网口，插上网线连到电脑上即可上网（比无线更快）

### :material-vpn: 校外连内网/访问学校资源 {#off-campus-connect}

校外外校和研究所：从 eduroam 接入教育网

其他场所：使用 VPN 或 WPN，一些数据库可以直接通过 CARSI 登校园网账号

学校的有些网站在校外打不开，一般是因为它们只有在内网环境下才能访问

- VPN

连内网传统方式：VPN（virtual private network / 虚拟专用网）
参考计算中心教程（VPN 服务）

- WebVPN

轻量级的新方法：WPN（WebVPN / 网页端 VPN）
参考计算中心教程（WPN 服务）

- CARSI

CARSI（CERNET Authentication and Resource Sharing Infrastructure / 中国教育和科研计算机网联邦认证与资源共享基础设施）服务允许师生用校园网账号登陆数据库，直接访问资源而不必登入学校内网环境学校支持多数主流文献数据库，其首页一般提供“机构登录（Institutional Sign In）”选项，从中可选择使用学校账号访问腾讯会议等服务也支持 CARSI，教育账号拥有更好的服务访问文献数据库时，切忌批量下载文献，否则可能被版权方认定为侵权

- Eduroam

在国内外其他学校或研究所：很有可能支持 eduroam（education roaming / 教育漫游网）
参考计算中心教程（eduroam 全球无线免费上网）
连上后可以当作免费 WiFi 使用

### :service_dog: 常用服务 {#common-services}

- 北大邮箱

学校为新入学学生提供以 `stu.pku.edu.cn` 结尾的学生邮箱

在北京大学，邮箱和微信是两种主要的沟通手段。邮箱不需要像微信那样先添加好友，可以直接向陌生人发送，适于发送较正式的信息，而微信在即时沟通上更有优势。如果有社交恐惧症，很自然便能懂得邮箱的好；无论用哪种沟通手段，交流时都要讲礼貌，友善待人。邮箱用网页版最快捷，但也可以用专业的邮件工具网易（学校邮件服务供应商）的客户端（PC / 手机，可从邮箱网页版下载）Microsoft Outlook，Thunderbird 等工具

- 北大网盘

每个学生有 200GB 存储空间

登陆后，从“部门文档库”中的“北大网盘公共资源”中获取使用指引

使用场景示例：

文件备份与同步：可以设置将本地目录与云端同步

文件分享：上传下载速度远高于未开通额外服务的商业云盘

群组文档：多人共享文件夹，存放公共资源（如青协文档）

- 门户服务

系统处理各种线上业务包括但不限于查询成绩，预约访客，查看课表，预约场馆，充值校园卡等

电脑上直接从网页端访问，手机上推荐安装应用程序“北京大学”

- 教学网

查看课程回放，下载课程资料，提交课程作业

教学网 UI 美化项目：https://github.com/zhuozhiyongde/PKU-Art

- 校购正版软件

正版 Windows 系统（讲装系统时会用到）

生产力软件：Office 系列和 Adobe 系列

工业软件：Origin，MATLAB，ChemDraw 等

其他：福昕 PDF 阅览器 ESET Endpoint Antivirus（轻量级安全软件，取代 360）更多内容访问网站自行查阅

- PKU LaTeX

PKU LaTeX（latex.pku.edu.cn）

部署在校内的 Overleaf 版 LaTeX 在线编辑器

## :material-storage-tank: 存储空间整理 {#storage-management}

### :material-folder: 文件系统 {#file-system}

有关硬盘分区的内容，参看装系统一节

以下是文件在逻辑上的组织方式，而非文件系统的具体实现（比较复杂）文件存放于硬盘的一个个逻辑分区中

Windows 下，文件绝对路径的开头是代表逻辑分区的盘符（如 C:\）

Linux 和 macOS 系统下，文件不论存放何处，都组织在一棵抽象的文件树中文件绝对路径以 / 开头，代表根目录

Linux 下惯用斜杠 /，Windows 下惯用反斜杠 \两种习惯的不同常常引起混淆

### :material-delete: 删除无用文件（慎） {#delete-junk-files}

- 垃圾文件

这里说的垃圾文件指设备上没用且删掉能节省存储空间的文件垃圾文件之所以产生，很可能是因为它们本来是有用处的垃圾文件也许可以分为程序产生的和人为的两种程序产生的：采用系统自带的和第三方的垃圾清理工具，或者手动清理人为的：养成良好的文件存储习惯，定期断舍离不必要的文件虽然存储空间逐渐扩大，但程序及其数据也在变得庞杂不需要追求清理每一份垃圾文件，但是有清理设备空间的意识是有帮助的

### :simple-org: 文件整理和归档 {#file-organization}

## :octicons-cross-reference-16: 参考 {#reference}

- 北京大学计算中心：[https://its.pku.edu.cn](https://its.pku.edu.cn)
- 数院学生会公众号新生网络指导（[上篇](https://mp.weixin.qq.com/s/YMC6CkdhCM9stNa9qq3olQ)、[下篇](https://mp.weixin.qq.com/s/R_am1kivTVWwo96ua0ba8g)）

# :material-server: Linux：基本使用 II

## :simple-linuxserver: Linux 安装和使用

### :simple-linux: Linux 简介

Linux，一般指 [`GNU/Linux`](https://www.gnu.org/gnu/linux-and-gnu.html)，是一种自由和开放源码的类 UNIX 操作系统内核。其英文解释为 `Linux is not Unix`。Linux 的内核由林纳斯·托瓦兹（Linus Torvalds）于 1991 年 10 月 5 日首次发布。它主要受到 Minix 和 Unix 思想的启发，是一个 **基于 POSIX 的多用户、多任务、支持多线程和多 CPU 的操作系统内核**。它支持非常丰富的硬件，能运行主要的 Unix 工具软件、应用程序和网络协议。

Linux 遵循 [GNU 通用公共许可证](https://www.gnu.org/licenses/gpl-3.0.html)（GPL），任何个人和机构都可以自由地使用 Linux 的所有底层源代码，也可以自由地修改和再发布。因此 Linux 有上百种不同的发行版，目前主流的 Linux 版本有：**[:material-debian: Debian](https://www.debian.org/) 系**（包括 [:fontawesome-brands-ubuntu: Ubuntu](https://ubuntu.com/)、[:material-linux-mint: Linux Mint](https://linuxmint.com/)、[:simple-deepin: Deepin](https://www.deepin.org/index/zh)、[:simple-zorin: Zorin OS](https://zorin.com/os/)、[:simple-kalilinux: Kali Linux](https://www.kali.org/) 等）、**EL 系**（包括及 [:simple-redhat: Red Hat Enterprise Linux](https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux)、[:material-fedora: Fedora](https://fedoraproject.org/), [:material-centos: CentOS](https://www.centos.org/)）、**Arch 系**（包括及 [:material-arch: Arch Linux](https://archlinux.org/)、[:material-manjaro: Manjaro](https://manjaro.org/), [:simple-endeavouros: EndeavourOS](https://endeavouros.com/), [:material-steam: SteamOS 3.0](https://store.steampowered.com/steamos)）、[:simple-opensuse: openSUSE](https://www.opensuse.org/) 等。

## :material-remote: 远程连接与远程文件传输

### :material-ssh: SSH

#### :material-remote-desktop: SSH 的介绍

[`SSH`](https://en.wikipedia.org/wiki/Secure_Shell) 全称 `Secure Shell`，是一种网络协议，用于加密两台计算机之间的通信，并且支持各种身份验证机制。它主要用于保证远程登录和远程通信的安全，任何网络服务都可以用这个协议来加密。

SSH 的软件架构是服务器-客户端模式（Server-Client）。在这个架构中，SSH 软件分成两个部分：向服务器发出请求的部分，称为客户端（client），OpenSSH 的实现为 `ssh`；接收客户端发出的请求的部分，称为服务器（server），OpenSSH 的实现为 `sshd`。

#### :material-emoticon-devil: SSH 的安装

若你所使用的 Linux 发行版使用 `apt` 包管理器，可通过以下命令安装：

```bash linenums="1"
sudo apt install openssh-client openssh-server
```

若使用的是 `yum` 包管理器，则是

```bash linenums="1"
sudo yum -y install openssh-clients openssh-server
```

查看 SSH 服务是否正在运行：`systemctl status sshd`

#### :fontawesome-solid-address-book: 如何查看 IP

在 Windows 中只需要在命令提示符中输入 `ipconfig` 即可查看自己的 IP

在 Linux 系统中有多种方式查看 IP，除了使用图形化界面外还可使用 `ifconfig` 和 `ip` 等命令

ifconfig: 使用方式为在终端输入 `ifconfig` 或 `sudo ifconfig`。在某些 Linux 发行版中没有 `ifconfig` 命令，可以使用 `sudo apt install net-tools` 安装

ip: 使用方式为在终端输入 `ip addr`

<img src="/assets/basic/10-linux-basic-2/image-20240901190226341.png" alt="image-20240901190226341" style="zoom:25%;" />

如图的红框内即为 IPv4 地址（第一个的 127.0.0.1 为本机地址），同理 `inet6` 项对应的即为 IPv6 地址

#### :material-crosshairs-gps: SSH 的用法

查看 openSSH 安装版本：`ssh -V`

使用 ssh 登录服务器的命令：

```bash linenums="1"
ssh hostname
```

`hostname`: 主机名，可以是域名、IP 地址或局域网内部的主机名。不指定用户名的情况下，将使用客户端的当前用户名，作为远程服务器的登录用户名，也可以用以下两种方式指定用户名：

```bash linenums="1"
ssh username@hostname
ssh -l username hostname
```

ssh 除了使用 `-l` 参数指定用户名外还可以使用 `-p` 指定端口（默认连接 22 端口）

```bash linenums="1"
ssh username@hostname -p 22
```

以使用 ssh 从 Windows 系统（作为客户端）连接至刚安装好的 Debian 虚拟机（作为服务端）为例，主机名与用户名与安装过程中所设的相同（若忘记可查看 Linux 系统中终端）

第一次连接会出现这样的提示：

```txt
The authenticity of host 'hostname(server IP)' can't be established.
ECDSA key fingerprint is SHA256: ...
Are you sure you want to continue connecting (yes/no)?
```

这段文字告诉用户，这台服务器的指纹是陌生的，让用户选择是否要继续连接。选择 yes 即可与该服务器建立连接，输入需要登录的账户的密码后即可登录远程服务器的 shell。

使用这个语句可以在 SSH 登录成功后立刻执行接下来的命令。但是若该命令需要互动式的 shell 环境则会报错。可以加入 `-t` 参数来解决这个问题

```bash
ssh [-t] username@hostname COMMAND
```

若是用来连接主机，`hostname` 也可换为 IP 地址

### :material-emoticon-dead: scp/sftp

#### :material-emoticon-confused: scp

scp 是 SSH 提供的一个客户端程序，用来在两台主机之间加密传送文件（即复制文件）。它的底层是 SSH 协议且默认端口也为 22，相当于先使用 ssh 命令登录远程主机，然后再执行拷贝操作。

scp 的操作与 cp 类似，但是可以

```bash
scp source destination
```

其中 `source` 与 `destination` 都可以是本地目录或远程目录。本地目录与正常调用目录相同，绝对路径和相对路径都可以。而远程目录则类比 Linux 终端中的使用方式，为 `username@hostname:path` 的形式（可以打开终端看一眼显示的字符就理解了）。

<img src="/assets/basic/10-linux-basic-2/image-20240901194111878.png" alt="image-20240901194111878";" />

如图即为将 Windows 系统下的文件传送至虚拟机下的示例，同理也可将远程系统的文件传送至本机或是在多个远程系统间进行复制。

同理 ssh 操作，scp 也可以指定端口，但需要的参数是 `-P`（大写）。若是传送目录可以添加 `-r` 表示以递归方式复制目录。

#### :material-emoticon-tongue: sftp

sftp 是 SSH 提供的一个客户端应用程序，主要用来安全地访问 FTP。使用下面的命令连接 FTP 主机：

```bash linenums="1"
sftp username@hostname
```

<img src="/assets/basic/10-linux-basic-2/image-20240901194931485.png" alt="image-20240901194931485";" />

如图，出现 `sftp>` 这个提示符就表示连接成功了

用法同 FTP，支持的命令大致与 Linux 的终端操作相同，注意 `put` 与 `get` 的使用。

```bash linenums="1"
ls [directory]               : 列出一个远程目录的内容。如果没有指定目标目录，则默认列出当前目录。
cd directory                 : 从当前目录改到指定目录。
mkdir directory              : 创建一个远程目录。
rmdir path                   : 删除一个远程目录。
put localfile [remotefile]   : 本地文件传输到远程主机。
get remotefile [localfile]   : 远程文件传输到本地。
help                         : 显示帮助信息。
bye / quit / exit            : 退出 sftp。
```

sftp 内默认连接至远程主机主目录（即 `~`），且远程主机的路径无法识别 `~`

下图是一个使用 sftp 传送文件的示例

<img src="/assets/basic/10-linux-basic-2/image-20240901200012668.png" alt="image-20240901200012668";" />

### :material-key: SSH 的密钥登录

SSH 默认采用密码登录，有着不安全且麻烦的缺点。密钥登录是比密码登录更好的解决方案。

- 密钥（key）是一个非常大的数字，通过加密算法得到。对称加密只需要一个密钥，而 SSH 密钥采用的非对称加密需要两个密钥成对使用，分为公钥和私钥。每个用户通过自己私密保存的私钥登录。而公钥则是公开对外发送的。公钥和私钥是一一对应的，每一个私钥都有且仅有一个对应的公钥，反之亦然。
- 如果数据使用公钥加密，那么只有使用对应的私钥才能解密，其他密钥都不行；反过来，如果使用私钥加密（这个过程一般称为"签名"），也只有使用对应的公钥解密。

使用密钥登录有着如下流程：

1. 手动将客户端的公钥放入远程服务器的指定位置。
2. 客户端向服务器发起 SSH 登录的请求。
3. 服务器收到用户 SSH 登录的请求，发送一些随机数据给用户，要求用户证明自己的身份。
4. 客户端收到服务器发来的数据，使用私钥对数据进行签名，然后再发还给服务器。
5. 服务器收到客户端发来的加密签名后，使用对应的公钥解密，然后跟原始数据比较。如果一致，就允许用户登录。

#### :material-key-link: 生成密钥

使用 `ssh-keygen` 程序，直接在终端输入 `ssh-keygen` 即可生成密钥，如下是一次生成密钥的过程。

```
lsz@debian:~$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/home/lsz/.ssh/id_rsa):
Created directory '/home/lsz/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/lsz/.ssh/id_rsa
Your public key has been saved in /home/lsz/.ssh/id_rsa.pub
The key fingerprint is:
SHA256:pIgUUsvjS+NgxWpVDBILelQKOWp/jTzr1xEOVWxjN/c lsz@debian
```

第一个问题询问的是生成的密钥（私钥）保存的文件位置及文件名，linux 下默认是 `~/.ssh/id_rsa` 这个文件，对应的公钥文件为 `~/.ssh/id_rsa.pub` （若采取不同的加密算法则文件名会有所区别）

第二个问题询问的是是否为私钥设置密码保护 (passphrase)

生成密钥后为了安全可以修改权限

```bash
chmod 600 ~/.ssh/id_rsa
chmod 600 ~/.ssh/id_rsa.pub
```

`ssh-keygen` 还有着很多参数，如 `-t dsa` 表示以 dsa 算法进行加密。

#### :material-key-plus: 上传公钥

用户公钥保存在服务器 `~/.ssh/authorized_keys` 文件，将公钥手动添加进去即可完成上传服务器的过程。

若 SSH 服务器拒绝读取该文件可能是权限设置不对，可以使用 `chmod 644 ~/.ssh/authorized_keys` 将权限改为只有文件所有者可写。

可以使用如下格式上传（`user` 与 `host` 填写用户名与主机名，第一个文件位置对应着刚生成的公钥位置）

```bash linenums="1"
cat ~/.ssh/id_rsa.pub | ssh user@host "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

或使用 `ssh-copy-id` 命令自动上传公钥。

Windows 下可以使用 PuTTY，也可以使用后续介绍的 VSCode

### :material-microsoft-visual-studio-code: VSCode 的相关插件

#### :simple-linux: 使用 WSL 扩展连接到 WSL 子系统

首先使用 VSCode 下载并安装扩展"WSL"，然后选择左侧边栏的"远程资源管理器"，展开"WSL 目标"，找到你的 Linux 发行版并点击右边的右箭头"在当前窗口中连接"。

<img src="/assets/basic/10-linux-basic-2/image-20240901210637302.png" alt="image-20240901210637302";" />

然后即可连接至 WSL，VSCode 的打开文件夹将直接打开到 Linux 子系统对应的文件夹（若文件在 Windows 文件系统上则会被挂载至 `/mnt/盘符/...` 中调用），终端也会直接调用子系统的终端

#### :material-remote-desktop: 使用 Remote-SSH 扩展进行 SSH 连接

首先使用 VSCode 下载并安装扩展"Remote-SSH"

<img src="/assets/basic/10-linux-basic-2/image-20240901204654164.png" alt="image-20240901204654164";" />

然后选择左侧边栏的"远程资源管理器"，展开"远程（隧道/SSH）"，点击"SSH"右边的设置键

<img src="/assets/basic/10-linux-basic-2/image-20240901205237955.png" alt="image-20240901205237955";" />

然后选择第一项配置文件。

<img src="/assets/basic/10-linux-basic-2/image-20240901205346758.png" alt="image-20240901205346758";" />

然后写入如下内容（尖括号内为自己远程连接的设备信息，Port 为连接的端口号）：

```txt linenums="1"
Host <hostname>
  HostName <hostname/IP>
  Port 22
  User <username>
```

保存 config 文件后按"远程（隧道/SSH）"右边的刷新按钮。

然后按下 ++f1++ 或 ++ctrl+shift+p++ 键，输入 `ssh connect`，选择"将当前窗口连接到主机"。并选择刚创建好的配置并按照要求登录。初次登录可能会占用时间设置服务器，最后若左下角可以显示 SSH 的目标主机表示设置成功。

<img src="/assets/basic/10-linux-basic-2/image-20240901211038298.png" alt="image-20240901211038298";" />

如图，远程系统的文件与命令行可以正常地在 VSCode 中显示。

VSCode 也支持通过公钥私钥配对的方式免密登录，再次打开先前的 config 文件，加入新的一行：

```txt linenums="1"
Host ...
  HostName ...
  Port ...
  User ...
  IdentityFile <ssh key path>
```

其中 `<ssh key path>` 即为存放私钥的路径。

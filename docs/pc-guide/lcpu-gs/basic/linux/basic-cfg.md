### :fontawesome-solid-terminal: Linux 使用

#### :simple-editorconfig: 环境的配置

##### :simple-roots: root 权限的配置

`root` 用户是超级用户，拥有着 Linux 系统内最高的权限，在终端内使用 `su` 命令即可以超级用户开启终端，`root` 用户的权限最高，而其他账户则可能会有以能以超级用户身份执行命令的授权（可以类比 Windows 中的管理员权限），但即使是拥有授权的账户在终端输入的命令也不会以超级用户身份执行，如果需要以超级用户的身份运行则需要在此命令前加 `sudo`。

第一种情况，如果你所选择的发行版在安装过程中没有设置 `root` 密码的环节（如 :fontawesome-brands-ubuntu: Ubuntu），则新创建的用户会拥有管理员权限，一般不需要使用 root 账户，直接使用 `sudo` 命令即可。

第二种情况，如果你所选择的发行版在安装过程中已经设置了 `root` 密码，但是自己的账户并没有管理员权限（如 :fontawesome-brands-debian: Debian），为了用起来方便一般会用 `root` 账户给自己的账户添加管理员权限，具体操作如下（\$号后的为输入的命令）：

```bash linenums="1"
username@computer$ su
root@computer# /usr/sbin/usermod -aG sudo username
```

前者表示切换至 root 账户，后者表示为你指定的账户添加管理员权限

##### :material-web: 软件源的配置

如果你的系统在安装的时候已经选择过了国内源则忽略，否则默认源来自于国外。从国外的服务器更新软件包会很慢，可以根据自己系统的版本自行搜索匹配的源并更换。具体参考 [:material-mirror: 北京大学镜像站帮助](https://mirrors.pku.edu.cn/Help)

以采用 `apt` 包管理器为例，更新源后需要重新更新软件索引，请执行以下操作：

```bash linenums="1"
sudo apt-get update # 更新软件源
sudo apt-get upgrade # 升级软件包
```

#### :material-bash: 基本命令

在这之前，我们想先聊一聊 Linux 的中心 —— **文件**。从 Unix 时代，文件就是操作系统的核心抽象，甚至有 **“一切皆文件”** 的说法。在 Linux 中，文件是一切的基础，包括硬件设备、目录、文件、套接字、管道等等，都是文件。Linux 中的文件系统是一个树状结构，根目录为 /，所有文件都是从根目录开始的。对系统的使用其实是对文件的操作，所以我们先来看看 Linux 中的文件操作。

##### :simple-gnubash: 常用命令

```bash linenums="1"
cd [dirName]
```

> `dirName`：要切换的目标目录，可以是相对路径或绝对路径。

这个命令表示切换到目标路径。`dirName` 中如果是以 `/`, `~`开头则表示绝对路径，`/`表示的是根目录，如 `/etc/apt` 表示切换至根目录下 `etc` 文件夹内的 `apt` 文件夹内。`~`表示的是当前用户的 `home` 目录，即 `/home/yourusername`，如 `~/Desktop` 表示切换至当前用户的桌面文件夹内。

否则表示的是相对路径，会进入当前路径下名为 `dirName` 的文件夹。`..` 表示当前目录位置的上一层目录。

特殊地，`.` 表示当前目录，比如 `time.txt` 与 `./time.txt` 都可以表示当前目录下名为 `time.txt` 的文件。但如果文件名为 `time` 则会默认执行名为 `time` 的命令而不是文件本身，这时可以使用 `./` 来避免歧义。

```bash linenums="1"
dir [options] [Directory] [Files]
ls [options] [Directory]
```

二者都可以展示当前目录下的所有文件。`dir` 在 Windows 的 `cmd` 中也可用，不过在 Linux 中不常用。`ls`在 `PowerShell` 和 Linux 的终端中被广泛运用。在 Linux 中 `ls` 命令除可用颜色区分文件类型外还可加入其他参数（也可不加任何参数）。`ls` 命令还可使用通配符来显示所有满足要求的文件。

```bash linenums="1"
ls -l           # 以长格式显示当前目录中的文件和目录
ls -a           # 显示当前目录中的所有文件和目录，包括隐藏文件
ls -lh          # 以人类可读的方式显示当前目录中的文件和目录大小
ls -t           # 按照修改时间排序显示当前目录中的文件和目录
ls -R           # 递归显示当前目录中的所有文件和子目录
ls -l /etc/passwd     # 显示/etc/passwd 文件的详细信息
```

```bash linenums="1"
pwd [--help] [--version]
```

显示当前的目录，一般是在程序中用（实际上就是终端中光标左边的目录）

``` linenums="1"
mkdir [-p] dirName
```

- `-p` 确保目录名称存在，不存在的就建一个。

在当前目录下新建文件夹，后面的 `dirName` 可以是个目录下的文件夹（即 `dir1/dir2` 的形式表示在当前目录的 `dir1` 文件夹下建立它的子文件夹 `dir2`）。如果加入 `-p` 选项会一直沿着 `dirName` 指定的目录建立（即若不存在 `dir1` 则先建立 `dir1` 直到指定位置），不加入 `-p` 若目录不存在则会报错。

```bash linenums="1"
touch [-acfm][-d<日期时间>][-r<参考文件或目录>][-t<日期时间>][--help][--version] [文件或目录]
```

在当前目录下创建文件（实际使用时前面的参数经常不指定，可直接加文件名，如 `touch file.txt`）

```bash linenums="1"
cp [options] source dest
```

前者表示源文件，后者表示目标文件，表示将指定源文件复制到目标文件位置。若目标文件不存在则会新建一个（此时作用相当于备份），若目标文件存在则会替换（此时相当于替换）

``` bash linenums="1"
-a：此选项通常在复制目录时使用，它保留链接、文件属性，并复制目录下的所有内容。其作用等于 dpR 参数组合。
-d：复制时保留链接。这里所说的链接相当于 Windows 系统中的快捷方式。
-r 或 --recursive：用于复制目录及其所有的子目录和文件，如果要复制目录，需要使用该选项。
-i 或 --interactive：在复制前提示确认，如果目标文件已存在，则会询问是否覆盖，回答 y 时目标文件将被覆盖。
-u 或 --update：仅复制源文件中更新时间较新的文件。
-v 或 --verbose：显示详细的复制过程。
-p 或 --preserve：保留源文件的权限、所有者和时间戳信息。
-f 或 --force：强制复制，即使目标文件已存在也会覆盖，而且不给出提示。
-l：不复制文件，只是生成链接文件。
```

```bash linenums="1"
mv [options] source dest
```

前者表示源文件，后者表示目标文件，表示将指定源文件移动到目标文件位置。`cp` 与 `mv` 操作的文件路径都可以是相对路径或绝对路径

```bash linenums="1"
-b: 当目标文件或目录存在时，在执行覆盖前，会为其创建一个备份。
-i: 如果指定移动的源目录或文件与目标的目录或文件同名，则会先询问是否覆盖旧文件，输入 y 表示直接覆盖，输入 n 表示取消该操作。
-f: 如果指定移动的源目录或文件与目标的目录或文件同名，不会询问，直接覆盖旧文件。
-n: 不要覆盖任何已存在的文件或目录。
-u：当源文件比目标文件新或者目标文件不存在时，才执行移动操作。
```

```bash linenums="1"
ps [options] [--help]
```

用于显示当前进程的状态，类似于 Windows 的任务管理器。参数过多故不再一一列举，建议使用 `--help` 来查看具体用法。

```bash linenums="1"
--help 查看帮助
-A 列出所有的进程
-au 显示较详细的资讯
-aux 显示所有包含其他使用者的进程
```

查找指定进程的格式：

```bash linenums="1"
ps -ef | grep 进程关键字
```

##### :material-zip-box: 解压缩

.tar:

```bash linenums="1"
解包：tar -xvf FileName.tar
打包：tar -cvf FileName.tar DirName
```

.gz:

```bash linenums="1"
解压 1：gunzip FileName.gz
解压 2：gzip -d FileName.gz
压缩：gzip FileName
```

.tar.gz 和 .tgz

```bash linenums="1"
解压：tar -zxvf FileName.tar.gz
压缩：tar -zcvf FileName.tar.gz DirName
```

.bz2

```bash linenums="1"
解压 1：bzip2 -d FileName.bz2
解压 2：bunzip2 FileName.bz2
压缩：bzip2 -z FileName
```

.tar.bz2

```bash linenums="1"
解压：tar -jxvf FileName.tar.bz2
压缩：tar -jcvf FileName.tar.bz2 DirName
```

.zip

```bash linenums="1"
解压：unzip FileName.zip
压缩：zip FileName.zip DirName
```

.rar

```bash linenums="1"
解压：rar -x FileName.rar
压缩：rar -a FileName.rar DirName
```

##### :simple-fishshell: 其他常用命令

```bash linenums="1"
sudo COMMAND
```

用在其余命令前，表示用超级用户权限执行此命令

```bash linenums="1"
time COMMAND
```

用在其余命令前，完成后续的命令后会返回运行的时间

```bash linenums="1"
COMMAND < file 表示将指定文件作为执行命令中的输入
COMMAND > file 表示将命令输出至指定文件而非终端
```

表示将命令输出至指定文件而非终端，二者可以连用，比如：`./a.out < test.in > test.out` 表示将 `test.in` 作为程序的读入，`test.out` 作为程序的输出。

还有一些其他命令如 `rm`, `cat`, `systemctl`, `grep` 等也较为常用，因篇幅有限不再展开叙述。

#### :simple-debian: 软件的安装

下述以 Debian 系的软件安装为例：

1. 使用 `apt` 包管理器安装（推荐）安装简单，便于接收持续更新

```bash linenums="1"
sudo apt update 列出所有可更新的软件清单
sudo apt upgrade 升级软件包
sudo apt install <package_name> 安装指定的软件包
sudo apt remove <package_name> 删除指定软件包
sudo apt autoremove 清理不再使用的依赖和库文件
apt list --upgradeable 列出可更新的软件包及版本信息
```

部分软件可能会需要自行添加源，需要按照安装指示进行操作

2. (.deb 文件）直接使用 `dpkg` 安装

```bash linenums="1"
dpkg --help 显示帮助
sudo dpkg -i file.deb 安装指定的软件包
```

3. 软件带有安装程序

软件带有如 `.sh` 文件、`.pl` 文件这类的安装程序。一般可在终端加上 `sudo` 直接运行，若没有开始运行可能是未添加可执行权限，可通过这个命令手动添加：

```bash linenums="1"
sudo chmod +x file.txt 给指定文件添加可执行权限
```

#### :simple-vim: 文本编辑

这里简单介绍命令行模式下的常用文本编辑器：`vi`/`vim`

`vi`: 文书编辑器，所有的类 Unix 系统中都内建有 `vi`
`vim`: 由 `vi` 发展出来的文本编辑器。拥有代码补全、编译及错误跳转的功能。

`vi`/`vim` 分为三种模式：命令模式（普通模式）、输入模式、命令行模式（底线命令模式）

直接在命令行输入 `vi`/`vim` 则会进入命令模式，以下是几个常用命令：

```bash linenums="1"
i  -- 切换到输入模式，在光标当前位置开始输入文本。
x  -- 删除当前光标所在处的字符。
:  -- 切换到底线命令模式，以在最底一行输入命令。
dd -- 剪切当前行。
yy -- 复制当前行。
p  -- 粘贴剪贴板内容到光标下方。
P  -- 粘贴剪贴板内容到光标上方。
u  -- 撤销上一次操作。
Ctrl+r -- 重做上一次撤销的操作。
```

输入模式通过在命令模式按 ++i++ 进入，按 ++esc++ 则返回普通模式，输入模式下可以完成文本编辑工作，与日常使用的文本编辑器区别不大。

底线命令模式在命令模式下按 `:` 进入，最常用的是如下命令：

```bash linenums="1"
:w  -- 保存文件。
:q  -- 退出 Vim 编辑器。
:wq -- 保存修改并退出 Vim 编辑器。
:q! -- 不保存修改强制退出 Vim 编辑器。
```

除了直接按 vi/vim 以外还可以通过后接文件名的方式来直接打开指定文件，
如```sudo vi /etc/apt/sources.list```

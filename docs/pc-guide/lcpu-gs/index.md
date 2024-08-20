# 北京大学 LCPU Getting Started 大纲

!!! abstract "前言"

    内容分**入门、中级、进阶**三大类，入门面向全校同学，普及计算机基础，导论性质，为零基础的同学介绍整个计算机的概念、体系，以及一些常见的计算机理念。中级面向 Linux 社的成员，介绍 Linux 及软硬件知识。进阶的目标是拓宽技术视野，让同学们能完成 AP 的任务，包括带团队，参与俱乐部运维。

    主要使用问题和题目驱动的思路，通过实践任务让同学们加深理解。

## 入门

（Q：学完有什么用？能解决什么问题？需要一些例子来说明这个问题，但不急（×））

### 知识的获取 （hd）

参考：[https://pku-software.github.io/24spring/middle_homework/document.html](https://pku-software.github.io/24spring/middle_homework/document.html)

- STFW RTFM RTFSC
- Ask questions
- Try it by yourself
- Roles of LLM （copilot）

### 计算机基本知识概览 I （lbh）

- 基本软硬件的分类与发展历史
- 操作系统分类简介（Windows Linux MacOS …）

### Drive your computer I （ztq）

- 基本环境配置
- 文件和文本的本质
- 软件的安装与卸载
- 常用软件推荐
    - 压缩和解压

### Drive your computer II

- 版本控制概览
- Git 详解
- 文件备份和冗余：重要性和常见方法

### Drive your computer III （lyj）

- 小知识串讲，比如快捷键（Home End Shift 选择 复制粘贴）
- 常见故障自查
- 资源监控 （比如各种硬件的占用之类的…）
- 网络资源获取（服务器、以及各类公开的资源（如社团提供的服务）…） 

### Drive your computer III（sjx）

- 网络安全 
    -  常见的攻击手段、基本的安全上网习惯（比如不要弱密码）
    - 代理的基本原理和如何使用网络代理（？）
- 操作系统和编程语言

### 计算机基本知识概览 II （lbh）

- 计算机基本体系结构 （储存器山 and …）
- 计算机网络 （ip 地址/dns/协议 and …）

### Linux 与服务器介绍与基本使用 I （lsz）

- Linux 安装、使用、基本命令
- 虚拟机配置与使用
- 远程连接与远程文件传输（ssh vscode scp(sftp) and …）

### Linux 与服务器介绍与基本使用 II（syh）

- 包管理器，包的安装，Linux 环境配置

### 文本编辑（syh）

- markdown
- LaTeX
- beamer
- Typst

### 宿舍智能化特刊

**DDL: 2024.09.01 23:59 要求见到同行评议过的文档**

## 中级

### Debug

- gdb lldb
- 性能分析

### 4. 操作系统和编程语言

文件树，进程树，资源分配视图）和用户交互手段（重新理解 GUI、CLI）

编译与解释，（C++为例）头文件与库，编译与执行过程简介 (preprocessor, compiler, assembler, linker, dyn loader)，编程语言 IO（与 system 与 hardware 的交互，演示文件处理、图形界面的编写

### 5. 网络体系

计算机网络的基本构成（Wifi/Eth, IP4 网络，DNS，Web 协议）和基础网络安全技能

#### 网络体系

OS/I 7 层模型，常见应用层协议 HTTP(S, 加密的范围) DNS SMTP FTP，传输层了解 TCP UDP, 端口等概念，网络层了解 IP 基础知识（包括 v6），链路层 WiFi 以太网简介？其他不要求。

#### 网络安全

常见的攻击手段、基本的安全上网习惯（口令、运行程序、网络服务配置 sshd 等、内存安全？）、社会工程学简介等等

建议增加：代理的基本原理和如何使用网络代理

### 6. Linux 与服务器介绍与基本使用

<https://101.lug.ustc.edu.cn/> 可以有一些结构上的参考

AppArmor SELinux
<h1 align="center"><strong>LYJ 的笔记本</strong></h1>

<div align="center">

English | [简体中文](./README.zh-CN.md)

</div>

<div align="center">

[![Auth](https://img.shields.io/badge/Auth-LYJ-ff69b4)](https://github.com/LightYourJourney)
[![GitHub Issues](https://img.shields.io/github/issues/LightYourJourney/notes-archive.svg)](https://github.com/LightYourJourney/notes-archive/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/LightYourJourney/notes-archive)](https://github.com/LightYourJourney/notes-archive/pulls)
[![GitHub Pull Requests](https://img.shields.io/github/stars/LightYourJourney/notes-archive)](https://github.com/LightYourJourney/notes-archive/stargazers)
[![GitHub license](https://img.shields.io/github/license/LightYourJourney/notes-archive)](https://github.com/LightYourJourney/notes-archive/blob/main/LICENSE)
[![HitCount](https://views.whatilearened.today/views/github/LightYourJourney/notes-archive.svg)](https://github.com/LightYourJourney/notes-archive)

</div>

<div align="center">
<img src="https://cdn.jsdelivr.net/gh/eryajf/tu@main/img/image_20240420_214408.gif" width="800"  height="3">
</div><br>

这是一个**非常粗糙**的[在线公开笔记本 📝](https://lightyourjourney.github.io/notes-archive/)，主要用来记录和备份平日学到的东西。

本笔记本使用 [MkDocs](https://www.mkdocs.org/) 构建，采用 [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 主题。中文字体是[霞鹜文楷屏幕阅读版](https://github.com/lxgw/LxgwWenKai-Screen)，英文字体是 [JetBrains Mono](https://www.jetbrains.com/lp/mono/)。

欢迎 Fork 和 Star，也欢迎提出 Issue 和 PR！

## 在线阅读

本项目托管在 GitHub Pages 上，可以通过 [https://lightyourjourney.github.io/notes-archive/](https://lightyourjourney.github.io/notes-archive/) 在线阅读。

## 本地构建部署

如果你想在本地构建并部署这个项目，可以按照以下步骤操作：

首先请确保你已经安装了 [Python](https://www.python.org/) 和 [pip](https://pypi.org/project/pip/)。

1. 克隆项目到本地并切换到项目目录：

```bash
git clone https://github.com/LightYourJourney/notes-archive.git
cd notes-archive
```

2. 创建并激活虚拟环境：

```bash
python3 -m venv . # 在当前目录创建虚拟环境
source bin/activate # 激活虚拟环境（Linux，macOS）
# 或者
.\Scripts\activate # 激活虚拟环境（Windows）
```

3. 安装依赖：

```bash
pip install -r requirements.txt
```

4. 构建并启动项目：

```bash
mkdocs serve
```

5. 在浏览器中预览

打开浏览器，输入 `http://127.0.0.1:8000/notes-archive/` 即可预览。

## 笔记动态

![Repo Status](https://repobeats.axiom.co/api/embed/e8e3ef5e020b4705bb7d326cbe97114fad81d3db.svg)

## 声明

本笔记本的所有文章均遵循[中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)。

## 许可

本笔记本以 [:fontawesome-brands-creative-commons: Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 协议发布。详情请见 [LICENSE](./LICENSE)。
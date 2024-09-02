---
hide:
    - date
    - feedback
home: true
# template: home.html
statistics: true
---

<h1 align="center"><strong>o(〃'▽'〃)o Hi there!</strong></h1>

<h2 align="center">欢迎来到 LYJ 的个人笔记本！</h2>

??? info "站点统计"
    页面总数：{{pages}}
    
    总字数：{{words}}
    
    代码块行数：{{codes}}
    
    网站运行时间：<span id="web-time"></span>

### :material-briefcase-check: 简介 {#intro}

这是一个非常粗糙的[**在线公开笔记本**](https://notes.yanjinli.fun/)，主要用来记录和备份平日学到的东西。

Repo 地址在这里：[:material-github: **Notebook**](https://github.com/LightYourJourney/notes-archive)。

本笔记本使用 [**MkDocs**](https://www.mkdocs.org/) 构建，采用 [:simple-materialformkdocs: **Material for MkDocs**](https://squidfunk.github.io/mkdocs-material/) 主题。中文字体是 [:fontawesome-brands-github-alt: **霞鹜文楷屏幕阅读版**](https://github.com/lxgw/LxgwWenKai-Screen)，英文字体是 [:simple-jetbrains: **JetBrains Mono**](https://www.jetbrains.com/lp/mono/)（没想到 jbmono 的网页版本也支持连字 :smiling_face_with_3_hearts:）。

欢迎 :fontawesome-solid-code-fork: Fork 和 :material-star: Star，也欢迎各位大佬提出 [:octicons-issue-tracked-by-16: Issue](https://github.com/LightYourJourney/notes-archive/issues) 和 [:octicons-feed-pull-request-open-16: PR](https://github.com/LightYourJourney/notes-archive/pulls)！

### :simple-tryitonline: 在线阅读 {#read-online}

本项目托管在 [:material-github: GitHub Pages](https://pages.github.com/) 上，可以通过 [https://notes.yanjinli.fun/](https://notes.yanjinli.fun/) 在线阅读。

### :simple-local: 本地构建部署 {#local-deploy}

如果你想在本地构建并部署这个项目，可以按照以下步骤操作：

首先请确保你已经安装了 [:material-language-python: Python](https://www.python.org/) 和 [:material-package: pip](https://pypi.org/project/pip/)。

1. 克隆项目到本地并切换到项目目录：

```bash linenums="1"
git clone https://github.com/LightYourJourney/notes-archive.git
cd notes-archive
```

2. 创建并激活虚拟环境：

```bash linenums="1"
python3 -m venv . # 在当前目录创建虚拟环境
source bin/activate # 激活虚拟环境（Linux，macOS）
# 或者
.\Scripts\activate # 激活虚拟环境（Windows）
```

3. 安装依赖：

```bash linenums="1"
pip install -r requirements.txt
```

4. 构建并启动项目：

```bash linenums="1"
mkdocs serve
```

5. 在浏览器中预览

打开浏览器，输入 [`http://127.0.0.1:8000/notes-archive/`](http://127.0.0.1:8000/notes-archive/) 即可预览。

### :simple-statuspage: 笔记动态 {#repo-status}

![Repo Status](https://repobeats.axiom.co/api/embed/e8e3ef5e020b4705bb7d326cbe97114fad81d3db.svg)

### :material-license: 声明 {#statement}

本笔记本以 [:fontawesome-brands-creative-commons: Creative Commons BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) 协议发布。本笔记本的所有文章均遵循 [:material-ruler: 中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)

### :simple-readme: 个性化阅读体验 {#customize}

#### :material-palette: 调色板 {#palette}

你可以在这里更改网站主题的颜色。

##### :material-format-color-fill: 主色（Primary Colors） {#primary-colors}

> 默认是 `Indigo`

点按文字以更改主题的主色。

<button data-md-color-primary="red" style="background-color: #EF5652;">Red</button>
<button data-md-color-primary="pink" style="background-color: #E92064;">Pink</button>
<button data-md-color-primary="purple" style="background-color: #AB47BD;">Purple</button>
<button data-md-color-primary="deep-purple" style="background-color: #7E56C2;">Deep Purple</button>
<button data-md-color-primary="indigo" style="background-color: #4052B5;">Indigo</button>
<button data-md-color-primary="blue" style="background-color: #2094F3;">Blue</button>
<button data-md-color-primary="light-blue" style="background-color: #07A6F2;">Light Blue</button>
<button data-md-color-primary="cyan" style="background-color: #00BDD6;">Cyan</button>
<button data-md-color-primary="teal" style="background-color: #019485;">Teal</button>
<button data-md-color-primary="green" style="background-color: #4CAE50;">Green</button>
<button data-md-color-primary="light-green" style="background-color: #8CC34C;">Light Green</button>
<button data-md-color-primary="lime" style="background-color: #CBDC38;">Lime</button>
<button data-md-color-primary="yellow" style="background-color: #FFEC3E;">Yellow</button>
<button data-md-color-primary="amber" style="background-color: #FFC107;">Amber</button>
<button data-md-color-primary="orange" style="background-color: #FFA724;">Orange</button>
<button data-md-color-primary="deep-orange" style="background-color: #FF6E42;">Deep Orange</button>
<button data-md-color-primary="brown" style="background-color: #795649;">Brown</button>
<button data-md-color-primary="grey" style="background-color: #757575;">Grey</button>
<button data-md-color-primary="blue-grey" style="background-color: #546E78;">Blue Grey</button>
<button data-md-color-primary="white" style="background-color: #FFFFFF; color: black;">White</button>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-primary]");
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorPrimary = this.dataset.mdColorPrimary;
      localStorage.setItem("data-md-color-primary", document.body.dataset.mdColorPrimary);
    })
  })
</script>

##### :material-invert-colors: 辅助色（Accent Colors） {#accent-colors}

> 默认是 `Indigo`

点按色块以更改主题的辅助色。

<button data-md-color-accent="red" style="background-color: #EF5652;">Red</button>
<button data-md-color-accent="pink" style="background-color: #E92064;">Pink</button>
<button data-md-color-accent="purple" style="background-color: #AB47BD;">Purple</button>
<button data-md-color-accent="deep-purple" style="background-color: #7E56C2;">Deep Purple</button>
<button data-md-color-accent="indigo" style="background-color: #4052B5;">Indigo</button>
<button data-md-color-accent="blue" style="background-color: #2094F3;">Blue</button>
<button data-md-color-accent="light-blue" style="background-color: #07A6F2;">Light Blue</button>
<button data-md-color-accent="cyan" style="background-color: #00BDD6;">Cyan</button>
<button data-md-color-accent="teal" style="background-color: #019485;">Teal</button>
<button data-md-color-accent="green" style="background-color: #4CAE50;">Green</button>
<button data-md-color-accent="light-green" style="background-color: #8CC34C;">Light Green</button>
<button data-md-color-accent="lime" style="background-color: #CBDC38;">Lime</button>
<button data-md-color-accent="yellow" style="background-color: #FFEC3E;">Yellow</button>
<button data-md-color-accent="amber" style="background-color: #FFC107;">Amber</button>
<button data-md-color-accent="orange" style="background-color: #FFA724;">Orange</button>
<button data-md-color-accent="deep-orange" style="background-color: #FF6E42;">Deep Orange</button>

<script>
  var buttons = document.querySelectorAll("button[data-md-color-accent]");
  Array.prototype.forEach.call(buttons, function(button) {
    button.addEventListener("click", function() {
      document.body.dataset.mdColorAccent = this.dataset.mdColorAccent;
      localStorage.setItem("data-md-color-accent", document.body.dataset.mdColorAccent);
    })
  })
</script>



<!-- Tidio Chat -->
<script src="//code.tidio.co/xefr3grwhqwg4tvvgzltacejrdxonb5n.js" async></script>



<!-- JavaScript 脚本，用于计算站点运行时间 -->
<script>
function updateTime() {
    var date = new Date();
    var now = date.getTime();
    var startDate = new Date("2024/07/07 12:45:00");
    var start = startDate.getTime();
    var diff = now - start;
    var y, d, h, m;
    y = Math.floor(diff / (365 * 24 * 3600 * 1000));
    diff -= y * 365 * 24 * 3600 * 1000;
    d = Math.floor(diff / (24 * 3600 * 1000));
    h = Math.floor(diff / (3600 * 1000) % 24);
    m = Math.floor(diff / (60 * 1000) % 60);
    if (y == 0) {
        document.getElementById("web-time").innerHTML = d + "<span class=\"heti-spacing\"> </span>天<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
    } else {
        document.getElementById("web-time").innerHTML = y + "<span class=\"heti-spacing\"> </span>年<span class=\"heti-spacing\"> </span>" + d + "<span class=\"heti-spacing\"> </span>天<span class=\"heti-spacing\"> </span>" + h + "<span class=\"heti-spacing\"> </span>小时<span class=\"heti-spacing\"> </span>" + m + "<span class=\"heti-spacing\"> </span>分钟";
    }
    setTimeout(updateTime, 1000 * 60);
}
updateTime();
</script>
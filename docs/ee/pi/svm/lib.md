# 用到的 Python 库

## spidev

spidev 库利用 Linux 内核的 spidev 驱动来操作 SPI 总线。下面的示例通过 SPI 总线发送三个字节的数据。

```python linenums="1"
import spidev
spi = spidev.SpiDev() # 新 建 SPI 设 备 类
spi.open (bus, device) # 打 开 特 定 的 SPI 设 备
to_send = [0x01, 0x02, 0x03]
spi.writebytes(to_send) # 发 送 上 面 定 义 的 三 个 字 节
```

示例中的 bus 是总线号，对于树莓派就是 SPI 的编号，device 是设备号，对应总线上的片选号，因此 spi.open(0,0) 就代表 SPI0 的 CE0 片选对应的 SPI 设备。发送数据采用 writebytes 函数，而接收数据 采用 readbytes 函数（函数参数为读取的字节数）。由于 SPI 协议采用全双工方式通信，发送数据的同时也 可以进行接收数据，此时可以用 xfer 函数。 readbytes 函数和 xfer 函数的用法示例如下：

```python linenum="1"
1 ...![ref1]

2 dat = spi.readbytes(n)

3 buf = spi.xfer([0x06, 0x00, 0x03])
```

## scikit-learn 中的 SVM

scikit-learn 是一套包含许多机器学习算法的 Python 库，包括前面介绍 KMeans 还有这节课介绍的 SVM。这里先看它的一个 SVM 示例代码。

```py linenums="1"
from sklearn import datasets, svm, metrics

digits = datasets.load_digits() # 手 写 数 字 数 据 集 为 8x8 的 图 片， 16 级 灰 度

# digits. images 是 图 片 数 据， digits. target 是 标 签
images_and_labels = list( zip (digits.images, digits.target))
# 使 用 matplotlib 绘 制 前 4个 样 本
for index, (image, label) in enumerate(images_and_labels[:4]):
plt.subplot(2, 4, index + 1)
plt.axis(' off ' )
plt.imshow(image, cmap=plt.cm.gray_r, interpolation=' nearest ' )
plt.title(' Training: ␣%i ' % label)

n_samples = len (digits.images)
# 将 二 维 数 据 变 成 一 维
data = digits.images.reshape((n_samples, -1))

# 建 立 分 类 器
classifier = svm.SVC(gamma=0.001)

# 用 前 一 半 数 据 进 行 训 练
classifier.fit(data[:n_samples // 2], digits.target[:n_samples // 2])

expected = digits.target[n_samples // 2:]
# 预 测
predicted = classifier.predict(data[n_samples // 2:])

print( " Classification␣report␣for ␣classifier␣%s :\n%s \ n"
% (classifier, metrics.classification_report(expected, predicted)))
print( " Confusion␣matrix :\n%s " % metrics.confusion_matrix(expected, predicted))

# 使 用 matplotlib 绘 制 前 4个 预 测 样 本
images_and_predictions = list( zip (digits.images[n_samples // 2:], predicted))
for index, (image, prediction) in enumerate(images_and_predictions[:4]):
plt.subplot(2, 4, index + 5)
plt.axis(' off ' )
plt.imshow(image, cmap=plt.cm.gray_r, interpolation=' nearest ' )
plt.title(' Prediction: ␣%i ' % prediction)

41 plt.show()
```

这段代码的功能是将手写数字的图像进行识别。 dataset 类中包含手写数字的图像和标签，程序使用前一半数据进行训练，然后用后一半对训练结果进行验证，并使用 matplotlib 显示了部分训练数据和训练 数据。程序的功能可以通过所带的注释大致了解，部分函数的说明可以参考网上 scikit-learn 的文档。

## Python 图像支持库

Python 有很多可以进行图像处理的支持库，其中 PIL（Python Image Library）是历史比较悠久的一 个，使用的人很多。但 PIL 仅支持 Python2，一个它的分支 Pillow 完成了对 Python3 的支持。 PIL 中最 重要的类就是 Image，使用它可以打开已有的图片或创建新的图片进行后续处理。下面的代码可以获取已有图像的基本信息。

```python linenums="1"
1 from PIL import Image # 注 意 依 然 使 用 PIL
3 image = Image.open ( " example . jpg ")

4 print( ' width : ' , image.width)

5 print( ' height: ' , image.height)

6 print( ' size: ' , image.size)

7 print( ' mode: ' , image.mode)

8 print( ' format: ' , image.format)
```

width 表示图片的像素宽度， height 表示图片的像素高度， width 和 height 组成了 size 属性， size 是 包含两个元素的元组。 mode 属性表示图片的模式，表 5.4 是常见的几种图像模式。


| 模式 | 描述|
| ---- | --------------------------------- |
| 1    | 1 位像素，黑白图片 |
| L    | 8 位像素，灰度图片 |
| P    | 8 位像素，使用调色板定义颜色 |
| RGB  | 24 位像素，真彩色 |
| RGBA | 32 位像素，真彩色加透明度模板 |
| CMYK | 32 位像素，色彩分离（常用于印刷） |
| HSV  | 24 位像素，色相、饱和度、颜色空间 |

表 5.4: PIL 颜色模式

不同的模式之间可以用 convert 函数转换，例如下面的代码将图像转为灰度图片。

```py linenums="1"
1 from PIL import Image

2

3 image = Image.open ( " example . jpg ")

4 image1 = image.convert(' L' )
```

图片的裁剪和缩放可以用 crop 和 resize 函数，例如：

```py linenums="1"
1 from PIL import Image![ref6]

2

3 image = Image.open ( " example . jpg ")

44 第五章 支持向量机分类器

4 image_crop = image.crop(box=(100,100,800,600)) ![ref5]5 image_resize = image.resize((400, 300))
```

其中 crop 函数通过 box 参数表示裁剪的区域，元组的四个参数分别是左上和右下的像素坐标（图片的左上角坐标为 (0,0)）。

新建一个图片可以用 new 函数，利用 ImageDraw 类提供的函数可以进行简单图形的绘制。例如：

```py linenums="1"
from PIL import Image, ImageDraw
2

3 image = Image.new(' RGB' , (400, 300), ' black ' )

4 draw = ImageDraw.Draw(image)

5 draw.line((0, 0, 400, 300), fill=' red ' ) # 画 一 条 红 色 对 角 线

6 image.show() # 调 用 外 部 程 序 显 示 图 片
```

new 函数的三个参数分别是图像的模式、尺寸和颜色，上面程序的执行结果是在黑色的背景下绘制了一条红色直线。

如果要在图片上生成字符串，可以使用 ImageFont 类选择字体，使用 text 函数绘制，如下代码所示：

```py linenums="1"
from PIL import Image, ImageFont, ImageFont
image = Image.new(' RGB' , (400, 300), ' black ' )

4 font = ImageFont.load_default()

5 draw = ImageDraw.Draw(image)

6 draw.text((0,0), ' This ␣is ␣first␣line' , font=font, fill=255)
```

## SPI 与 OLED 的支持

树莓派与驱动芯片之间采用了 SPI 接口，同时需要对树莓派的相关管脚属性进行配置。下面给出了

访问 OLED 的 Python 示例，例子中对 SSD1306 做了类封装，其中定义了一些 OLED 基本屏幕操作，如 __init__（），command(self,cmd)，data(self,val) 等函数，实验中通过调用函数来实现 OLED 的显示。

例如 command命令用来向 SSD1306 发送命令，具体代码如下：

```py linenums="1"
1 def command(self,cmd):![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.085.png)

2 GPIO.output(self._dc,GPIO.LOW) # _dc 低 电 平 表 示 输 出 命 令

3 self._spi.writebytes([cmd]) # 通 过 spi 输 出 具 体 命 令 内 容
```

下面的示例代码使用 SSD1306 类显示了一个图片，可以作为实验的参考。

```py linenums="1"
import spidev as SPI
----------------------------------------------------------------
import SSD1306
from PIL import Image # 调 用 相 关 库 文 件

RST = 19
DC = 16
bus = 0
device = 0 # 树 莓 派 管 脚 配 置
disp = SSD1306.SSD1306(rst=RST,dc=DC,spi=SPI.SpiDev(bus,device))

disp.begin()
disp.clear()

1 2 3 4 5 6 7 8

import time

9 10 11 12

13

14 disp.display() # 初 始 化 屏 幕 相 关 参 数 及 清 屏![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.086.png)

15

16 image = Image.open ( ' pku. png' ).resize((disp.width, disp.height),

17 Image.ANTIALIAS).convert(' 1' )

18 disp.image(image)

19 disp.display() # 显 示 图 片
```
# 用到的 PYTHON 库

   VPU ![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.050.png)

MEMORY![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.051.png)

4\.7kΩ PARASITE POWER CIRCUIT CONTROL LOGIC **DS18B20**

DQ

TEMPERATURE SENSOR

GND INTERNAL VDD 64-BIT ROM ALARM HIGH TRIGGERREGISTER (EEPROM)H) AND 1-Wir 

CPP PORT ALARM LOW TRIGGER) SCRATCHPAD L

REGISTER (EEPROM) VDD POWER- CONFIGURATION

SUPPLY SENSE REGISTER (EEPROM)

8-BIT CRC GENERATOR

<a name="_page28_x72.00_y64.23"></a>图 3.3: DS18B20 内部结构

如果通过 lsmod 命令发现 w1-gpio 与 w1-therm 模块尚未加载，可以通过 modprobe 命令加载这 2 个模块。加载方式如下：

1  pi@raspberrypi:~$ sudo modprobe w1-gpio![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.052.png)
1  pi@raspberrypi:~$ sudo modprobe w1-therm

   其中， sudo 是 linux 系统管理指令，允许系统管理员让普通用户执行一些或者全部的 root 权限命令。 确认或完成 w1-gpio 与 w1-therm 模块的加载后，进入文件系统 /sys/bus/w1/devices 目录，并显示当前 目录，操作方式和输出结果如下 :

1  pi@raspberrypi:~$ cd /sys/bus/w1/devices![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.053.png)
1  pi@raspberrypi:~$ ls
1  28-00000674869d w1\_bus\_master1

   执行 ls 命令后在 /sys/bus/w1/devices 目录下会发现一个以 28-XXXX 开头的文件夹 (如果接多个 DS18B20，将会看到多个 28-xxxx 的文件，分别对应各个 DS18B20)。进入以 28-XXXX 开头的文件夹，显 示文件夹会发现一个名为 w1\_slave 的文件，利用 cat 命令读取文件 w1\_slave 的内容会返回温度传感器 当前的温度值。操作方式与输出结果如下 :

1  pi@raspberrypi:~$ cd 28-00000674869d![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.054.png)
1  pi@raspberrypi:~$ sudo cat w1\_slave
1  70 01 4b 46 7f ff 10 10 e1 : crc=e1 YES
1  70 01 4b 46 7f ff 10 10 e1 t=23000

   执行 cat w1\_slave 命令输出 2 行结果，第一行显示了 CRC 校验结果，最后的 YES 表示 CRC 校验 成功，数据有效；第二行输出结果中的 t=23000 就是当前的温度值，换算成摄氏度需要除以 1000，即当前 温度为 23000/1000=23 摄氏度。

3. 用到的<a name="_page28_x72.00_y667.29"></a> **Python** 库
1. **glob** 库

在不知道文件具体名称的时候如果要查看目录中的文件或者目录，可以使用 python 的标准库 glob， 它的参数是要查看的文件名，一般通过使用通配符来查找多个文件。例如下面代码列出 dir 目录下的全部 文件：

1  import glob![ref1]
1  for name in glob.glob(' dir/\* ' ): 3 print(name)

常用的通配符有：

- 星号（ \*）匹配 0 个或多个字符
- 问号（ ?）匹配 1 个字符
- 中括号（ []）表示范围，例如 [a-k] 表示匹配这个范围的全部字符 如果需要递归的查找可以使用 recursive=True 参数，例如：
1  import glob![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.055.png)
1  files = glob.glob(' \*\*/\*. txt' ):

   此时 files 是当前目录下全部扩展名为 txt 的文件列表。这里使用两个星号用来匹配 0 个或多个目录， 仅在递归模式下使用。

2. **NumPy** 库

NumPy 是 Python 中科学计算的基础软件包。它是一个提供多了维数组对象，多种派生对象（如：掩 码数组、矩阵）以及用于快速操作数组的函数及 API，它包括数学、逻辑、数组形状变换、排序、选择、 I/O 、 离散傅立叶变换、基本线性代数、基本统计运算、随机模拟等等。

我们这里可以用它生成特定分布的随机数。例如下面代码生成了 10 个方差为 sigma，均值为 mean 的正态分布随机数。



| mean = 5                          |
| --------------------------------- |
| sigma = 1.3                       |
| x=mean+sigma\*np.random.randn(10) |

1 2 3

4

NumPy 包的常用数据类型是 ndarray 对象。它与标准 Python Array（数组）之间有几个重要的区别：

1. NumPy 数组在创建时具有固定的大小，与 Python 的原生数组对象（可以动态增长）不同。更改 ndarray 的大小将创建一个新数组并删除原来的数组。
1. NumPy 数组中的元素都需要具有相同的数据类型，因此在内存中的大小相同。例外情况： Python 的 原生数组里包含了 NumPy 的对象的时候，这种情况下就允许不同大小元素的数组。
1. NumPy 数组有助于对大量数据进行高级数学和其他类型的操作。通常，这些操作的执行效率更高，

   比使用 Python 原生数组的代码更少。

3. **Matplotlib** 库

Matplotlib 是一个 Python 2D 绘图库，可以生成各种格式和跨平台交互式环境的出版物质量图片数 据。它的语法格式类似于 matlab，例如下面代码画出 x 数据的直方图。

1 import matplotlib.pyplot as plt![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.056.png)

2 plt.hist(x,80,histtype=' bar ' ,facecolor=' yellowgreen ' ,alpha=0.75) 3 plt.show()

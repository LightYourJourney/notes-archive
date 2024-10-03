# 用到的 Python 库

## glob 库

在不知道文件具体名称的时候如果要查看目录中的文件或者目录，可以使用 python 的标准库 glob，它的参数是要查看的文件名，一般通过使用通配符来查找多个文件。例如下面代码列出 dir 目录下的全部文件：

```python linenums="1"
import glob
for name in glob.glob('dir/*'):
    print(name)
```

常用的通配符有：

- 星号（*）匹配 0 个或多个字符
- 问号（?）匹配 1 个字符
- 中括号（[]）表示范围，例如 [a-k] 表示匹配这个范围的全部字符 如果需要递归的查找可以使用 `recursive=True` 参数，例如：

```python linenums="1"
import glob
files = glob.glob('**/*.txt'):
```

此时 files 是当前目录下全部扩展名为 txt 的文件列表。这里使用两个星号用来匹配 0 个或多个目录，仅在递归模式下使用。

## NumPy 库

NumPy 是 Python 中科学计算的基础软件包。它是一个提供多了维数组对象，多种派生对象（如：掩码数组、矩阵）以及用于快速操作数组的函数及 API，它包括数学、逻辑、数组形状变换、排序、选择、I/O、离散傅立叶变换、基本线性代数、基本统计运算、随机模拟等等。

我们这里可以用它生成特定分布的随机数。例如下面代码生成了 10 个方差为 sigma，均值为 mean 的正态分布随机数。

```python linenums="1"
import numpy as np
mean = 5
sigma = 1.3
x=mean+sigma*np.random.randn(10)
```

NumPy 包的常用数据类型是 ndarray 对象。它与标准 Python Array（数组）之间有几个重要的区别：

1. NumPy 数组在创建时具有固定的大小，与 Python 的原生数组对象（可以动态增长）不同。更改 ndarray 的大小将创建一个新数组并删除原来的数组。
2. NumPy 数组中的元素都需要具有相同的数据类型，因此在内存中的大小相同。例外情况：Python 的 原生数组里包含了 NumPy 的对象的时候，这种情况下就允许不同大小元素的数组。
3. NumPy 数组有助于对大量数据进行高级数学和其他类型的操作。通常，这些操作的执行效率更高，比使用 Python 原生数组的代码更少。

## Matplotlib 库

Matplotlib 是一个 Python 2D 绘图库，可以生成各种格式和跨平台交互式环境的出版物质量图片数 据。它的语法格式类似于 MATLAB，例如下面代码画出 $x$ 数据的直方图。

```python linenums="1"
import matplotlib.pyplot as plt
plt.hist(x,80,histtype='bar',facecolor='yellowgreen',alpha=0.75)
plt.show()
```

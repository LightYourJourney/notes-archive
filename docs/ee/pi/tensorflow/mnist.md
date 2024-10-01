# MNIST 入门

MNIST 是一个入门级的计算机视觉数据集，它包含各种手写数字图片，它也包含每一张图片对应的标签，告诉我们这个是数字几。比如，这四张图片的标签分别是 5，0，4，1。

从一个很简单的数学模型开始（Softmax Regression），了解如何使用 TensorFlow。

<figure markdown="span">
  ![](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 11.1: TensorFlow 计算图</figcaption>
</figure>

<figure markdown="span">
  ![](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 11.2: MNIST 手写数字图片</figcaption>
</figure>

<figure markdown="span">
  ![](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 11.3: TensorFlow 工作流程</figcaption>
</figure>

## Softmax 回归介绍

MNIST 的每一张图片都表示一个从 0 到 9 的数字，希望得到给定图片代表每个数字的概率。比如说，我们的模型可能推测一张包含 9 的图片代表数字 9 的概率是 80% 但是判断它是 8 的概率是 5%，然后给予它代表其他数字的概率更小的值。softmax 模型可以用来给不同的对象分配概率。

softmax 回归（softmax regression）分两步：

第一步：得到一张给定图片属于某个特定数字类的证据（evidence）

$evidencei = Wi,j xj + bi$

其中 $W_{i}$, $j$ 代表权重，$b_{i}$ 代表数字 $i$ 类的偏置量，$j$ 代表给定图片 x 的像素索引用于像素求和。

<figure markdown="span">
  ![](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 11.4: Softmax 回归</figcaption>
</figure>

第二步：用 softmax 函数可以把这些证据转换成概率 $y$

$y = softmax(evidence)$

其中：

$softmax (y) = normalize (exp(x)) = ~~∑~~exp(xi)$

## 实现回归模型

根据上述模型分析，使用 NumPy 实现回归模型。

```py linenums="1"
import tensorflow as tf
x = tf.placeholder(" float", [None, 784])
W = tf.Variable(tf.zeros([784,10]))
b = tf.Variable(tf.zeros([10]))
y = tf.nn.softmax(tf.matmul(x,W) + b)
```

## 训练回归模型

为了训练我们的模型，首先需要定义一个指标来评估这个模型的好坏。在机器学习，通常定义指标来表示一个模型是坏的，这个指标称为成本（cost）或损失（loss），然后尽量最小化这个指标。常用的成本函数是“交叉熵”（cross-entropy）。其定义如下：

$Hy′ (y) = − yi′log(yi)$

其中 $y$ 是我们预测的概率分布，$y′$ 是实际的分布。

```py linenums="1"
y_ = tf. placeholder (" float ", [None ,10])
cross_entropy = -tf. reduce_sum (y_*tf.log(y))
```

使用 TensorFlow 来训练建立的模型，TensorFlow 拥有一张描述你各个计算单元的图，它可以自动地使用反向传播算法 (Backpropagation algorithm) 来有效地确定你的变量是如何影响你想要最小化的那个成本值的。然后，TensorFlow 会用你选择的优化算法来不断地修改变量以降低成本。

```py linenums="1"
train_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross_entropy)
```

TensorFlow 在这里实际上所做的是，用梯度下降算法训练你的模型，微调你的变量，不断减少成本。目前已经完成了模型的所有设置，开始训练模型。该循环的每个步骤中，我们都会随机抓取训练数据中的 100 个批处理数据点，然后我们用这些数据点作为参数替换之前的占位符来运行 train_step。

1. 动手实验：物体识别 105

1 init = tf.initialize\_all\_variables()![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.170.png)

```py linenums="1"
sess = tf.Session()
sess.run(init)
for i in range (1000):
batch_xs, batch_ys = mnist.train.next_batch(100)
sess.run(train_step, feed_dict={x: batch_xs, y_: batch_ys})
```

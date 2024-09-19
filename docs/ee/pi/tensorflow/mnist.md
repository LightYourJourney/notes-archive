1. **MNIST<a name="_page107_x72.00_y690.58"></a>** 入门

MNIST 是一个入门级的计算机视觉数据集，它包含各种手写数字图片，它也包含每一张图片对应的 标签，告诉我们这个是数字几。比如，这四张图片的标签分别是 5，0，4，1。

从一个很简单的数学模型开始（ Softmax Regression），了解如何使用 TensorFlow。 102

2. MNIST 入门 103

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.163.png)

图 11.1: TensorFlow 计算图

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.164.png)

图 11.2: MNIST 手写数字图片

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.165.jpeg)

图 11.3: TensorFlow 工作流程

1. **Softmax** 回归介绍

MNIST 的每一张图片都表示一个从 0 到 9 的数字，希望得到给定图片代表每个数字的概率。比如说， 我们的模型可能推测一张包含 9 的图片代表数字 9 的概率是 80% 但是判断它是 8 的概率是 5%，然后给 予它代表其他数字的概率更小的值。 softmax 模型可以用来给不同的对象分配概率。

softmax 回归（ softmax regression）分两步：

第一步：得到一张给定图片属于某个特定数字类的证据（ evidence）

∑

evidencei = Wi,j xj + bi

j

其中 Wi,j 代表权重， bi 代表数字 i 类的偏置量， j 代表给定图片 x 的像素索引用于像素求和。

104 第十一章 TENSORFLOW 应用

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.166.png)

图 11.4: Softmax 回归

第二步：用 softmax 函数可以把这些证据转换成概率 y

y = softmax(evidence)

其中：

softmax (y) = normalize (exp(x)) = ~~∑~~exp(xi)

j exp(xj )

2. 实现回归模型

根据上述模型分析，使用 NumPy 实现回归模型。

1 import tensorflow as tf![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.167.png)

2 x = tf.placeholder(" float", [None, 784]) 3 W = tf.Variable(tf.zeros([784,10]))

4 b = tf.Variable(tf.zeros([10]))

5 y = tf.nn.softmax(tf.matmul(x,W) + b)

3. 训练回归模型

为了训练我们的模型，首先需要定义一个指标来评估这个模型的好坏。在机器学习，通常定义指标来 表示一个模型是坏的，这个指标称为成本（ cost）或损失（ loss），然后尽量最小化这个指标。常用的成本函数 是 “交叉熵 ”（ cross-entropy）。其定义如下：

∑

Hy′ (y) = − yi′log(yi)

i

其中 y 是我们预测的概率分布 , y′ 是实际的分布。

1 y\_ = tf.placeholder(" float", [None,10])![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.168.png)

2 cross\_entropy = -tf.reduce\_sum(y\_\*tf.log(y))

使用 TensorFlow 来训练建立的模型， TensorFlow 拥有一张描述你各个计算单元的图，它可以自动地 使用反向传播算法 (Backpropagation algorithm) 来有效地确定你的变量是如何影响你想要最小化的那个 成本值的。然后， TensorFlow 会用你选择的优化算法来不断地修改变量以降低成本。

1 train\_step = tf.train.GradientDescentOptimizer(0.01).minimize(cross\_entropy)![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.169.png)

TensorFlow 在这里实际上所做的是，用梯度下降算法训练你的模型，微调你的变量，不断减少成本。 目前已经完成了模型的所有设置，开始训练模型。该循环的每个步骤中，我们都会随机抓取训练数据

中的 100 个批处理数据点，然后我们用这些数据点作为参数替换之前的占位符来运行 train\_step。
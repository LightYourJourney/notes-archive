1. 动手实验：物体识别 105

1 init = tf.initialize\_all\_variables()![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.170.png)

2 sess = tf.Session()

3 sess.run(init)

4 for i in range (1000):

5 batch\_xs, batch\_ys = mnist.train.next\_batch(100)

6 sess.run(train\_step, feed\_dict={x: batch\_xs, y\_: batch\_ys})

<a name="_page110_x72.00_y195.22"></a>**11.3** 动手实验：物体识别

1. 实验目的
1. 了解 TensorFlow 的基本原理及用法；
1. 使用 TensorFlow 识别 MNIST 并识别自己手写数字；
1. 使用 TensorFlow 及摄像头对物体进行识别。
2. 实验内容
1. 搭建 softmax 回归模型，对 MNIST 数据集进行训练，保存训练模型，并对自己的手写图片进行识别。
1. 使用 google 已建好的模型，打开树莓派摄像头，完成物体的识别。

2. **python<a name="_page113_x72.00_y688.60"></a> API** 接口

虽然如同 ChatGLM-6B 这样的模型可以在本地运行，但对于大多数终端硬件来说，还是过于复杂了。 使用这些复杂模型往往通过一定的编程接口远程进行调用。在与远程服务器进行交换数据的过程中，经常 会使用一种被称为 JSON 的简单数据格式。

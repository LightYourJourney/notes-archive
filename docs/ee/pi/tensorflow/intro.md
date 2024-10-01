# :simple-tensorflow: TensorFlow 介绍

TensorFlow™ 是一个基于数据流编程（Dataflow Programming）的符号数学系统，被广泛应用于各类机器学习（Machine learning）算法的编程实现，其前身是谷歌的神经网络算法库 DistBelief。TensorFlow 的主要特点有：

- 使用图 (graph) 来表示计算任务。
- 在被称之为会话 (Session) 的上下文 (context) 中执行图。
- 使用 tensor 表示数据。
- 通过变量 (Variable) 维护状态。
- 使用 feed 和 fetch 可以为任意的操作 (Arbitrary Operation) 赋值或者从其中获取数据。

TensorFlow 代码结构如下：

```python linenums="1"
import tensorflow as tf
b = tf.Variable(tf.zeros([100])) # 100-d vector , init to zeroes
W = tf.Variable(tf.random_uniform([784,100],-1,1)) # 784 x100 matrix w/rnd vals
x = tf.placeholder(name="x") # Placeholder for input
relu = tf.nn.relu(tf.matmul(W, x) + b) # Placeholder for input
C = [...] # Cost computed as a function of Relu
s = tf.Session()
for step in xrange (0, 10):
input = ...construct 100-D input array ... # Create 100 -d vector for input
result = s.run(C, feed_dict={x: input }) # Fetch cost , feeding x=input
print step, result
```
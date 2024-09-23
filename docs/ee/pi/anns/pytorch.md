# PyTorch 简介

PyTorch 是由 Facebook 的人工智能研究小组在 2016 年开发的基于 Torch 的 Python 机器学习库。 Pytorch 是 torch 的 python 版本，是由 Facebook 开源的神经网络框架。

PyTorch 的程序可以立即执行计算，这正好符合 Python 的编程方法，不需要完成全部代码才能运行， 可以轻松的运行部分代码并实时检查。 PyTorch 支持互动式的调试，使得调试和可视化变得非常容易。与

Tensorflow 的静态计算图不同， pytorch 的计算图是动态的，以便可以在运行时构建计算图，甚至在运行时 更改它们，在不知道创建神经网络需要多少内存的情况下这非常有价值。 PyTorch 可以顺利地与 Python 数据科学栈集成。它非常类似于 numpy，甚至注意不到它们的差别。

对 PyTorch 的最基本理解包括如下三方面：

- Numpy 风格的 Tensor（张量）操作。 Tensor 是神经网络框架中重要的基础数据类型，可以简单理解

  为 N 维数组的容器对象。 tensor 之间通过运算进行连接，从而形成计算图。 PyTorch 中 tensor 提供

  的 API 参考了 Numpy 的设计，因此熟悉 Numpy 的用户基本上可以无缝理解并创建和操作 tensor，

  同时 torch 中的数组和 Numpy 数组对象可以无缝的对接。 Torch 定义了七种 CPU tensor 类型和

  八种 GPU tensor 类型， torch 模块内提供了操作 tensor 的接口，而 Tensor 类型的对象上也设计了 对应了接口，例如 torch.add() 与 tensor.add() 等价。

- 变量自动求导。 tensor 对象通过一系列的运算可以组成动态图，每个 tensor 对象可以方便的计算自 己对目标函数的梯度。这样就可以方便的实现神经网络的后向传播过程。
- 神经网络层与损失函数优化等高层封装。网络层的封装存在于 torch.nn 模块，损失函数由 torch.nn.functional 模块提供，优化函数由 torch.optim 模块提供。

torch.nn 模块提供了创建神经网络的基础构件，这些层都继承自 Module 类。在 nn.functional 模块中， 提供多种激活函数的实现。通常对于可训练参数的层使用 module，而对于不需要训练参数的层如 softmax 这些，可以使用 functional 中的函数。用 PyTorch 定义如图 [8.3](#_page74_x72.00_y604.23)所示 MLP 神经网络的代码如下：

import torch.nn as nn

import torch.nn.functional as F

class Net(nn.Module):

def \_\_init\_\_(self):


3. PYTORCH 简介 71

super(Net, self).\_\_init\_\_() self.hidden = nn.Linear(4, 5) self.out = nn.Linear(5, 3)

def forward(self, x):

x = F.relu(self.hidden(x)) x = self.out(x)

return x

net=Net() print(net)

神经网络实现的基本步骤：

- 准备数据：带标签的训练集和测试集
- 定义网络结构 model
- 定义损失函数
- 定义优化算法 optimizer
- 训练
- 前向传播计算网络输出 output 和计算损失函数 loss
- 反向传播更新参数：
- 将上次迭代计算的梯度值清 0：optimizer.zero\_grad()
- 反向传播，计算梯度值： loss.backward()
- 更新权值参数： optimizer.step()
- 保存训练集上的 loss 和验证集上的 loss 以及准确率以及打印训练信息（可选）
- 图示训练过程中 loss 和 accuracy 的变化情况（可选）
- 在测试集上测试

深度学习框架中涉及很多参数，下面介绍一下 batch、iterations 和 epochs 的概念： 深度学习的优化算法，即梯度下降，每次的参数更新有两种方式：

1. 遍历全部数据集算一次损失函数，然后算函数对各个参数的梯度，更新梯度。这种方法每更新一次参 数都要把数据集里的所有样本都看一遍，计算量开销大，计算速度慢，不支持在线学习，这称为 Batch gradient descent，批梯度下降。
1. 每看一个数据就算一下损失函数，然后求梯度更新参数，这个称为随机梯度下降， stochastic gradient descent。这个方法速度比较快，但是收敛性能不太好，可能在最优点附近晃来晃去，得不到最优点。 两次参数的更新也有可能互相抵消掉，造成目标函数震荡的比较剧烈。

为了克服两种方法的缺点，现在一般采用的是一种折中手段， mini-batch gradient decent，小批的梯度 下降，这种方法把数据分为若干个批，按批来更新参数，这样，一个批中的一组数据共同决定了本次梯度的 方向，下降起来就不容易跑偏，减少了随机性。另一方面因为批的样本数与整个数据集相比小了很多，计算 量也不是很大。基本上现在的梯度下降都是基于 mini-batch 的，所以深度学习框架的函数中经常会出现 batch\_size，就是指这个。

每一次迭代都是一次权重更新，每一次权重更新需要 batch\_size 个数据进行 Forward 运算得到损失 函数，再 BP 算法更新参数。 1 个 iteration 等于使用 batch\_size 个样本训练一次。

epochs 被定义为向前和向后传播中所有批次的单次训练迭代。这意味着 1 个周期是整个输入数据的 单次向前和向后传递。简单说， epochs 指的就是训练过程中数据将被“轮”多少次。

例如，训练集有 1000 个样本， batchsize=10，那么训练完整个样本集需要： 100 次 iteration，1 次 epoch。

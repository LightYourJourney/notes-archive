6. 动手实验：通过手势识别实时控制发光二极管亮度
1. <a name="_page82_x72.00_y679.07"></a>实验目的
1. 熟悉 AD/DA 原理，实现控制发光二极管开、关、调亮、调暗的功能。
1. 学习通过 PyTorch 搭建人工神经网络模型的方法。
1. 学习通过卷积神经网络（ CNN）实现简单手势识别的方法，掌握调整 CNN 网络参数的方法。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.124.jpeg)

图 8.16: PCF8591 A/D 接口时序

4. 实现通过手势识别实时控制发光二极管亮度的功能。
2. 实验内容
1. **AD/DA** 模块的检验及发光二极管的控制
1. 使用面包板，对电位器的电压信号进行采样并存储，输出信号的电压信息。参考电路如图 [8.17](#_page83_x72.00_y421.40)。
1. 调整 DA 输出，点亮发光二极管，设计二极管的发光模式，如开、关、调亮、调暗等功能。参考电路如图

   [8.17](#_page83_x72.00_y421.40)。

3. 用电位器的输出控制发光二极管的明暗。

<a name="_page83_x72.00_y421.40"></a>3.3V D/A ![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.125.png)![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.126.png)

1k A/D 10k

GND GND

图 8.17: 滑动变阻器电路和发光二极管电路

2. 通过 **OpenCV** 获取训练样本并建立训练集和测试集

这部分已提供相对完整的代码及已经建立的数据集，可以初步使用提供的训练集和测试集进行后续 实验，如效果不好，可尝试重新建立自己手势的数据集，需时 30-50 分钟。

1. 读取树莓派的摄像头，完成手势样本的捕捉

   利用摄像头每 0.5 秒捕捉一次图片，手在摄像头前做出一种手势，在摄像头捕捉期间不断改变手势的 角度方位，一共捕捉 4 类每类 500 张图片。将捕捉到的图片经过灰度化、调整大小、高斯模糊，用编 号命名保存到指定手势的文件夹下。

1  # 此 代 码 用 于 获 取 训 练 集 与 测 试 集 样 本![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.127.png)
1  # 使 用 摄 像 头 取 样， 按 颜 色 空 间 提 取 肤 色， 经 灰 度 化 调 整 大 小 模 糊 化 后 保 存
1  # 运 行 代 码， 将 出 现 两 个 cv2 输 出 窗 口， 分 别 显 示 摄 像 头 捕 捉 的 原 图 及 处 理 后 的 图 像 的 实 时 预 览

6. 动手实验：通过手势识别实时控制发光二极管亮度 79

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.128.png)

图 8.18: 捕获样本后进行的处理



| # 待 准 备 好 后 按 q键， 将 开 始 以 0.5 秒 为 间 隔 捕 捉 样 本， 进 度 将 在 终 端 显 示， 可 按 w键 停 止 |
| ------------------------------------------------------------------------------------------------------------- |
|                                                                                                               |
| # 设 置 样 本 保 存 的 地 址、 样 本 命 名 起 始 编 号、 需 要 获 得 的 样 本 数                              |
| # 可 以 提 前 建 好 相 关 文 件 夹                                                                            |
| FOLDER\_NAME= './ dataset/ train/ Five ' # train , test / Five , Palm, Left , Right                           |
| START\_INDEX = 1                                                                                              |
| CAPTURE\_CNT = 1000                                                                                           |
|                                                                                                               |
| import numpy as np                                                                                            |
| import cv2                                                                                                    |
| import time                                                                                                   |
|                                                                                                               |
| cam = cv2.VideoCapture(0)                                                                                     |
|                                                                                                               |
| # 开 始 捕 捉 前 对 效 果 进 行 预 览                                                                         |
| while True:                                                                                                   |
| ret, frame = cam.read()                                                                                       |
| HSV = cv2.cvtColor(frame, cv2.COLOR\_BGR2HSV) # HSV颜 色 空 间 的 图 像                                       |
| gray = cv2.cvtColor(frame, cv2.COLOR\_BGR2GRAY) # 灰 度 化 的 图 像                                           |
| image\_mask = cv2.inRange(HSV, np.array([0, 0, 0]), np.array([50, 200, 160])                                  |
| ) # 实 验 室 相 机 的 肤 色                                                                                   |
| output = cv2.bitwise\_and(gray, gray, mask=image\_mask) # 按 颜 色 空 间 提 取 手                             |

4 ![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.129.png)![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.130.png)5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 

24 

80 第八章 人工神经网络



| output = cv2.resize(output, (80, 60)) # 缩 小 图 片                                   |
| ------------------------------------------------------------------------------------- |
| output = cv2.blur(output, (2, 2)) # 模 糊 处 理                                       |
| cv2.imshow(' orig' , frame) # 显 示 预 览                                             |
| cv2.imshow(' gray ' , output)                                                         |
| if cv2.waitKey(1) == ord ( ' q' ): # 按 q退 出 预 览                                  |
| break                                                                                 |
|                                                                                       |
| # 开 始 捕 捉 样 本                                                                   |
| index = START\_INDEX # 样 本 命 名 的 编 号， 从 START\_INDEX以 1为 步 距 往 上 递 增 |
| while index < START\_INDEX + CAPTURE\_CNT:# 取 样 CAPTURE\_CNT个                      |
| print(f ' process: ␣{index }/{ CAPTURE\_CNT}' )                                       |
| ret, frame = cam.read()                                                               |
| HSV = cv2.cvtColor(frame, cv2.COLOR\_BGR2HSV)                                         |
| gray = cv2.cvtColor(frame, cv2.COLOR\_BGR2GRAY)                                       |
| # image\_mask = cv2 . inRange ( HSV, np. array ([0, 48, 80]) , np. array ([20, 255,   |
| 255])) # 自 己 电 脑 相 机                                                            |
| image\_mask = cv2.inRange(HSV, np.array([0, 0, 0]), np.array([50, 200, 160])          |
| ) # 实 验 室 相 机                                                                    |
| output = cv2.bitwise\_and(gray, gray, mask=image\_mask)                               |
| output = cv2.resize(output, (80, 60))                                                 |
| output = cv2.blur(output, (2, 2))                                                     |
| cv2.imshow(' orig' , frame)                                                           |
| cv2.imshow(' gray ' , output)                                                         |
| cv2.imwrite(f' {FOLDER\_NAME}/{ index }. png' , output) # 保 存 到 FOLDER\_NAME下     |
| index += 1                                                                            |
| time.sleep(0.5) # 取 样 间 隔                                                         |
| if cv2.waitKey(1) == ord ( ' w' ): # 可 按 w中 断                                     |
| break                                                                                 |
| cv2.destroyAllWindows()                                                               |
| cam.release()                                                                         |

25 26 27 28 29 30 31 32 33 34 35 36 37 38

39 40

41 42 43 44 45 46 47 48 49 50 51

52

2. 将捕捉到的样本平分为训练集与测试集

   建立文件夹“ dataset”，含子文件夹“ train”与“ test”，两个文件夹分别各含四个子文件夹“ Palm“”、 Five“”、 Left“”、 Righ 每个子文件夹下有 250 份样本。下图为部分样本的展示。

3. 搭建神经网络模型并调整网络参数
1. 搭建神经网络，采用“卷积 -池化 -卷积 -池化 -一维化 -全连接 -输出”的结构，训练采用小批梯度下降及

   Adam 优化器，损失函数使用交叉熵。

   这里给出一个示例代码，对应的网络结构是“卷积 1-池化 1-卷积 2-池化 2-一维化 -全连接 1-全连接 2：”

1  # 此 代 码 用 于 训 练 及 测 试 神 经 网 络![ref4]
1  # 需 要 在 此 代 码 所 在 的 目 录 下 存 放 一 个 数 据 集 文 件 夹
1  # 数 据 集 文 件 夹 包 含 “ train ”、“ test ” 两 个 子 文 件 夹
1  # 两 个 子 文 件 夹 下 均 有 四 个 以 手 势 类 型 命 名 的 文 件 夹， 存 放 着 样 本
1  # 训 练 部 分 使 用 小 批 量 梯 度 下 降、 Adam优 化 器
1  # 使 用 tensorboard 的 SummaryWriter 记 录 每 轮 训 练 后 在 训 练 集、 测 试 集 上 的 损 失、 准 确 率 等 情 况

6. 动手实验：通过手势识别实时控制发光二极管亮度 81

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.131.png)

图 8.19: 四种手势的样本示例



| # SummaryWriter 、 训 练 好 的 模 型 将 保 存 在 数 据 集 文 件 夹 下                                 |
| ----------------------------------------------------------------------------------------------------- |
| # 测 试 部 分 将 给 出 模 型 在 测 试 集 上 的 混 淆 矩 阵                                            |
| # 混 淆 矩 阵 图 片 将 保 存 在 数 据 集 文 件 夹 下                                                  |
|                                                                                                       |
| DATA\_FOLDER =' dataset ' # 数 据 集 文 件 夹 名                                                      |
| DO\_TRAIN = True # 是 否 进 行 训 练， True 需 要 有 数 据 集                                         |
| DO\_TEST = True # 是 否 进 行 测 试， True 需 要 DO\_TRAIN为 True 或 数 据 集 文 件 夹 下 已 存 在 一 |
| 个 网 络 模 型                                                                                        |
| SAVE\_MODEL = True# 是 否 保 存 训 练 好 的 模 型， True 需 要 DO\_TRAIN为 True                       |
| SAVE\_CMFIG = True # 是 否 保 存 混 淆 矩 阵， True 需 要 DO\_TEST为 True                             |
| LEARNING\_RATE = 0.01 # Adam优 化 器 学 习 率                                                         |
| MAX\_EPOCH = 10# 进 行 epoch 数                                                                       |
| BATCH\_SIZE = 10 # 每 批 含 样 本 数                                                                  |
|                                                                                                       |
| import numpy as np                                                                                    |
| import matplotlib.pyplot as plt                                                                       |
| import torch                                                                                          |
| import torchvision                                                                                    |
| import torchvision.transforms as transforms                                                           |
| import torch.nn as nn                                                                                 |
| import torch.optim as optim                                                                           |
| import torch.nn.functional as F                                                                       |
| import time                                                                                           |
| import itertools                                                                                      |
| from torch.utils.tensorboard import SummaryWriter                                                     |
|                                                                                                       |
| writer = SummaryWriter() # 用 于 记 录 训 练                                                          |
| torch.set\_grad\_enabled(True)                                                                        |
|                                                                                                       |
| train\_set = torchvision.datasets.ImageFolder(f' ./{ DATA\_FOLDER}/ train ' ,                         |
| transform=transforms.Compose(                                                                         |
| [transforms.Grayscale(1), transforms.ToTensor()])) # 从 数 据 集 文 件 夹 导 入 训                    |
| 练 样 本， 灰 度 化 并 转 为 张 量                                                                    |
| train\_loader = torch.utils.data.DataLoader(train\_set, batch\_size=BATCH\_SIZE,                      |

7 ![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.132.png)![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.133.png)8 9 10 11 12 13 

14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 

35 36 37 

82 第八章 人工神经网络

39 ![ref7]![ref8]
| shuffle=True) # 训 练 集 加 载 器， 随 机                                                                |
| -------------------------------------------------------------------------------------------------------- |
| 打 乱 训 练 集 并 以 BATCH\_SIZE个 为 一 批                                                              |
|                                                                                                          |
|                                                                                                          |
| # 神 经 网 络                                                                                            |
| # 采 用 “输 入 - 卷 积 - 池 化 - 卷 积 - 池 化 - 一 维 化 - 全 连 接 1- 全 连 接 2- 输 出” 的 结 构      |
| # 激 活 函 数 为 ReLu                                                                                    |
| # 图 片 原 始 大 小 为 80\*60                                                                            |
| class Network(nn.Module):                                                                                |
| def \_\_init\_\_(self):                                                                                  |
| super ().\_\_init\_\_()                                                                                  |
| self.conv1 = nn.Conv2d(in\_channels=1, out\_channels=6, kernel\_size=5,                                  |
| stride=1)                                                                                                |
| self.conv2 = nn.Conv2d(in\_channels=6, out\_channels=12, kernel\_size=5,                                 |
| stride=1)                                                                                                |
| self.fc1 = nn.Linear(in\_features=12 \* 3 \* 2, out\_features=60)                                        |
| self.fc2 = nn.Linear(in\_features=60, out\_features=30)                                                  |
| self.out = nn.Linear(in\_features=30, out\_features=4)                                                   |
|                                                                                                          |
| def forward(self, t):                                                                                    |
| t = F.relu(self.conv1(t)) # ->76\*56                                                                     |
| t = F.max\_pool2d(t, kernel\_size=4, stride=4) # ->19\*14                                                |
| t = F.relu(self.conv2(t)) # ->15\*10                                                                     |
| t = F.max\_pool2d(t, kernel\_size=4, stride=4) # ->3\*2                                                  |
| t = t.reshape(-1, 12 \* 3 \* 2)                                                                          |
| t = F.relu(self.fc1(t))                                                                                  |
| t = F.relu(self.fc2(t))                                                                                  |
| return self.out(t)                                                                                       |
|                                                                                                          |
|                                                                                                          |
| # 训 练 部 分                                                                                            |
| def train():                                                                                             |
| network = Network()                                                                                      |
| optimizer = optim.Adam(network.parameters(), lr=LEARNING\_RATE)                                          |
| images, labels = next ( iter(train\_loader)) # 从 前 面 的 加 载 器 中 按 批 获 得 样 本                 |
|                                                                                                          |
| # 在 tensorboard 中 记 录 一 批 样 本 的 图 像， 添 加 网 络， 以 监 视 样 本 或 网 络 可 能 的 异 常    |
| grid = torchvision.utils.make\_grid(images) # 将 一 批 样 本 做 成 网 格                                 |
| tb = SummaryWriter(f' ./{ DATA\_FOLDER}' ) # SummaryWriter 将 保 存 在 数 据 集 文 件 夹                 |
| 下                                                                                                       |
| tb.add\_image(' images ' , grid) # 添 加 样 本 网 格                                                     |
| tb.add\_graph(network, images) # 添 加 网 络                                                             |
|                                                                                                          |
| # 比 较 网 络 对 一 批 样 本 的 预 测 preds 与 样 本 的 真 实 标 签 labels ， 返 回 预 测 正 确 的 个 数 |
| def get\_num\_correct(preds, labels):                                                                    |
| return preds.argmax(dim=1).eq(labels).sum().item()                                                       |
|                                                                                                          |
| # 训 练 MAX\_EPOCH轮                                                                                     |
| for epoch in range (MAX\_EPOCH):                                                                         |

39 40 41 42 43 44 45 46 47 48 

49 

50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 

74 75 76 77 78 79 80 81 82 

6. 动手实验：通过手势识别实时控制发光二极管亮度 83

83 ![ref7]![ref8]
| t0 = time.time() # 记 录 用 时                                                              |
| ------------------------------------------------------------------------------------------- |
| total\_loss = 0 # 记 录 训 练 集 上 的 损 失                                                |
| total\_correct = 0 # 记 录 训 练 集 上 的 正 确 个 数                                       |
| for batch in train\_loader: # 按 批 进 行                                                   |
| images, labels = batch                                                                      |
| preds = network(images) # 获 得 目 前 网 络 对 这 一 批 的 预 测                            |
| loss = F.cross\_entropy(preds, labels) # 计 算 交 叉 熵                                     |
| optimizer.zero\_grad() # 梯 度 清 零， 避 免 循 环 时 backward () 累 加 梯 度               |
| loss.backward() # 反 向 传 播 求 解 梯 度                                                   |
| optimizer.step() # 更 新 参 数                                                              |
| total\_loss += loss.item() # 更 新 训 练 集 上 的 损 失                                     |
| total\_correct += get\_num\_correct(preds, labels) # 更 新 训 练 集 上 正 确                |
| 个 数                                                                                       |
| # 一 次 epoch 完 成， 开 始 在 测 试 集 上 看 效 果                                         |
| pred\_set = torchvision.datasets.ImageFolder(f' ./{ DATA\_FOLDER}/ test' ,                  |
| transform=transforms.Compose(                                                               |
| [transforms.Grayscale(1), transforms.ToTensor()])) # 按 和 前 面                            |
| train\_set 一 样 的 方 法 获 得 测 试 集 pred\_set                                          |
| prediction\_loader = torch.utils.data.DataLoader(pred\_set, batch\_size=                    |
| BATCH\_SIZE) # 以 及 对 应 加 载 器                                                         |
| p\_total\_loss = 0 # 记 录 在 训 练 集 上 的 损 失                                          |
| p\_total\_correct = 0 # 记 录 训 练 集 上 总 正 确 数                                       |
| for batch in prediction\_loader:                                                            |
| images, labels = batch                                                                      |
| preds = network(images)                                                                     |
| loss = F.cross\_entropy(preds, labels)                                                      |
| p\_total\_loss += loss.item()                                                               |
| p\_total\_correct += get\_num\_correct(preds, labels)                                       |
|                                                                                             |
| # 在 终 端 显 示 epoch 数、 准 确 率、 用 时， 监 视 训 练 进 程                            |
| print( ' epoch ' , epoch + 1, ' total\_correct: ' ,                                         |
| total\_correct, ' loss: ' , total\_loss)                                                    |
| print( ' train\_set␣accuracy: ' , total\_correct / len (train\_set))                        |
| print( ' test\_set␣accuracy: ' , p\_total\_correct / len (pred\_set))                       |
| print( ' time ␣spent: ' , time.time() - t0)                                                 |
|                                                                                             |
| # 在 SummaryWriter 中 分 别 记 录 训 练 集 和 测 试 集 的 损 失、 准 确 率、 正 确 数 信 息 |
| tb.add\_scalar(' Loss ' , total\_loss, epoch)                                               |
| tb.add\_scalar(' Prediction␣Loss ' , p\_total\_loss, epoch)                                 |
| tb.add\_scalar(' Number␣Correct ' , total\_correct, epoch)                                  |
| tb.add\_scalar(' Prediction␣Number␣Correct ' , p\_total\_correct, epoch)                    |
| tb.add\_scalar(' Accuracy ' , total\_correct / len (train\_set), epoch)                     |
| tb.add\_scalar(' Prediction␣Accuracy ' , p\_total\_correct / len (pred\_set),               |
| epoch)                                                                                      |
| tb.close()                                                                                  |
| if SAVE\_MODEL:# 保 存 模 型 在 数 据 集 文 件 夹 下                                        |
| torch.save(network, F' ./{ DATA\_FOLDER}/ network . pkl ' )                                 |
|                                                                                             |
|                                                                                             |
84 85 86 87 88 89 90 91 92 93 

94 

95 96 

97 98 

99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 

122 123 124 125 

126 

84 第八章 人工神经网络

127 ![ref7]![ref8]
| if DO\_TRAIN:                                                                                         |
| ----------------------------------------------------------------------------------------------------- |
| train()                                                                                               |
|                                                                                                       |
|                                                                                                       |
| # 测 试 模 型， 绘 制 混 淆 矩 阵                                                                     |
| def test(network):                                                                                    |
| def get\_all\_preds(model, loader):                                                                   |
| # 传 入 网 络 模 型 和 加 载 器， 获 得 模 型 对 加 载 器 中 样 本 的 全 部 预 测                     |
| all\_preds = torch.tensor([])                                                                         |
| for batch in loader:                                                                                  |
| images, labels = batch                                                                                |
| preds = model(images) # 按 批 获 得 预 测                                                             |
| all\_preds = torch.cat((all\_preds, preds), dim=0) # 再 拼 接 起 来                                   |
| return all\_preds                                                                                     |
|                                                                                                       |
| with torch.no\_grad(): # 测 试 时 不 需 要 计 算 梯 度 等 数 据， 节 省 资 源                         |
| pred\_set = torchvision.datasets.ImageFolder(f' ./{ DATA\_FOLDER}/ test' ,                            |
| transform=transforms.Compose(                                                                         |
| [transforms.Grayscale(1), transforms.ToTensor()])) # 导 入 测 试 集                                   |
| prediction\_loader = torch.utils.data.DataLoader(pred\_set, batch\_size=                              |
| BATCH\_SIZE) # 对 应 加 载 器， 由 于 是 测 试， 无 需 shuffle                                        |
| train\_preds = get\_all\_preds(network, prediction\_loader) # 获 取 网 络 对 测                       |
| 试 集 数 据 的 预 测                                                                                  |
| total\_types = len (pred\_set.classes) # 总 分 类 数                                                  |
| stacked = torch.stack((torch.tensor(pred\_set.targets), train\_preds.argmax(                          |
| dim=1)), dim=1) # 拼 接 测 试 样 本 的 真 实 类 型 与 预 测 类 型                                     |
| cmt = torch.zeros(total\_types, total\_types, dtype=torch.int32) # 初 始 化 混                        |
| 淆 矩 阵                                                                                              |
| for p in stacked: # 根 据 测 试 样 本 的 真 实 类 型 与 预 测 类 型， 在 混 淆 矩 阵 的 对 应 位 置   |
| 计 数 +1                                                                                              |
| train\_label, predicted\_label = p.tolist()                                                           |
| cmt[train\_label, predicted\_label] = cmt[train\_label, predicted\_label] +                           |
| 1                                                                                                     |
|                                                                                                       |
| def plot\_confusion\_matrix(cm, classes, title=' Confusion␣matrix ' , cmap=plt.                       |
| cm.Blues):                                                                                            |
| # 传 入 ndarray 型 的 混 淆 矩 阵， 分 类 名， 标 题， 配 色； 绘 制 上 文 得 到 的 混 淆 矩 阵       |
| plt.imshow(cm, interpolation=' nearest ' , cmap=cmap)                                                 |
| plt.title(title)                                                                                      |
| plt.colorbar() # 设 置 颜 色 渐 变 条                                                                 |
| tick\_marks = np.arange(len (classes)) # 图 像 有 分 类 数 个 刻 度                                   |
| plt.xticks(tick\_marks, classes, rotation=45) # 用 分 类 名 标 签 xy刻 度                             |
| plt.yticks(tick\_marks, classes)                                                                      |
| thresh = cm.max() / 2.                                                                                |
| # 在 表 格 上 对 应 位 置 显 示 数 字， 为 可 视 化 效 果， 以 其 中 最 大 数 据 的 一 半 为 界 确 定 |
| 文 字 颜 色 的 黑 白                                                                                  |
| for i, j in itertools.product(range (cm.shape[0]), range (cm.shape[1])):                              |
| plt.text(j, i, format(cm[i, j], ' d' ), horizontalalignment=" center",                                |
| color=" white " if cm[i, j] > thresh else " black")                                                   |

128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 

144 145 

146 

147 148 

149 150 

151 152 

153 154 

155 156 157 158 159 160 161 162 163 

164 165 166 

6. 动手实验：通过手势识别实时控制发光二极管亮度 85

167
|      |
| :--- |
|      |
|      |
|      |
|      |
|      |
|      |
|      |
|      |
|      |
|      |
|      |
|      |
| if   |
|      |
168 169 170 171 172 173 174 175 176 177 178 179 180

这个网络从第三轮开始在测试集上就出现了过拟合的情况：

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.136.png)

图 8.20: 过拟合情况示例，从第三轮开始

请根据示例代码，调整网络结构和参数，尝试删除一个全连接层，以实现“卷积 -池化 -卷积 -池化 -一维 化 -全连接 -输出”的结构。

2. 测试与调整网络

   如示例程序所示，在训练集上每训练一轮后用模型过一遍测试集，得到测试集的 loss 随 epoch 变化， 利用 tensorboard 记录相关数据。训练完成后计算准确率并绘制混淆矩阵（如图所示）。用这些记录 判断训练的效果，例如是否出现了过拟合，再依此调参或更改网络结构。

   在前边已搭建的神经网络结构上，尝试调小池化大小（ 4\*4->2\*2），调大卷积核步长（ 1->2），并可

   对 batch size、learning rate 还有每层网络神经元个数等相关参数进行一些调整，以取得正确率大于

   93% 的网络。

4. 通过手势识别实时控制发光二极管亮度

导入调至较好效果的神经网络。与通过 OpenCV 获取训练样本时类似，用摄像头捕捉图片，同样经过 灰度化、调整大小、高斯模糊处理，将实时样本送进神经网络，可得到神经网络对各类手势的评分及最后判 定结果，根据判定结果分别控制发光二极管的开、关、调亮、调暗。

86 第八章 人工神经网络

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.137.png)

图 8.21: 在测试集上实测的混淆矩阵示例

神经网络导入的部分参考代码如下：



| import cv2                                                                     |
| ------------------------------------------------------------------------------ |
| import numpy as np                                                             |
| import torch                                                                   |
| import torch.nn as nn                                                          |
| import torch.nn.functional as F                                                |
|                                                                                |
| # 神 经 网 络 同 训 练 时 的 网 络 结 构                                       |
| class Network(nn.Module):                                                      |
| def \_\_init\_\_(self):                                                        |
| super ().\_\_init\_\_()                                                        |
| self.conv1 = nn.Conv2d(in\_channels=1, out\_channels=6, kernel\_size=5, stride |
| =1)                                                                            |
| self.conv2 = nn.Conv2d(in\_channels=6, out\_channels=12, kernel\_size=5,       |
| stride=1)                                                                      |
| self.fc1 = nn.Linear(in\_features=12 \* 3 \* 2, out\_features=60)              |
| self.fc2 = nn.Linear(in\_features=60, out\_features=30)                        |
| self.out = nn.Linear(in\_features=30, out\_features=4)                         |
|                                                                                |
| def forward(self, t):                                                          |
| t = F.relu(self.conv1(t)) # ->76\*56                                           |
| t = F.max\_pool2d(t, kernel\_size=4, stride=4) # ->19\*14                      |
| t = F.relu(self.conv2(t)) # ->15\*10                                           |
| t = F.max\_pool2d(t, kernel\_size=4, stride=4) # ->3\*2                        |
| t = t.reshape(-1, 12 \* 3 \* 2)                                                |
| t = F.relu(self.fc1(t))                                                        |
| t = F.relu(self.fc2(t))                                                        |
| return self.out(t)                                                             |
|                                                                                |
| cam = cv2.VideoCapture(0)                                                      |
| network = torch.load(' network . pkl ' )                                       |

1 2 3 4 5 6 7 8 9 10 11 12

- 运 行 时 需 要 在 同 目 录 下 放 置 已 训 练 好 的 “ network . pkl ”

13

14 15 16 17 18

19 20 21 22

23 24 25 26 27 28 29

通过神经网络对实时样本进行分类和判定的部分参考代码如下：


7. 思考题 87
1  data = torch.tensor([[output]], dtype=torch.float) # 将 获 取 的 实 时 样 本 转 为 可 传 入 网 络![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.138.png) 的 tensor
1  pred\_scores = network(data) # 获 取 各 类 型 的 分 数
1  prediction = pred\_scores.argmax(dim=1).item() # 取 最 大 者 为 结 果
3. 注意事项
1. 图像色调与光照的影响

   因为是按照颜色空间提取手，所以具体的效果和相片的色调有很大关系。面向强光时由于是按颜色 空间提取肤色，可能出现较亮的部分无法提取到的情况，进而影响识别。

2. 针对性添加样本和构建数据集 如果能够用自己的手重新构建数据集，识别率可能会进一步提高，不过需要花更多的时间。

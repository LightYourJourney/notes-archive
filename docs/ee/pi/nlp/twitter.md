2. TWITTER 文本情感分析 97
2. **Twitter<a name="_page102_x72.00_y72.00"></a>** 文本情感分析
1. 情感分析介绍

情感分析是文本分类的一个分支，对带有情感色彩（正向 /中立 /负向）的主观性文本进行分析，以确定 该文本的观点、喜好和情感倾向。主流方法有基于情感词典的情感分析和基于机器学习的情感分析两种方

式。

基于情感词典的情感分析是指根据已构建的情感词典，对待分析文本进行文本处理，抽取情感词计算 文本的情感倾向，最终的分类效果主要取决于情感词典的完善性。

基于机器学习的情感分析需要对文本进行一系列预处理（去除停用词、 Stem、Tokenization 等），将文 本转化为词向量表示后，可以利用逻辑回归、朴素贝叶斯及支持向量机等方法进行分类。

SemEval 数据集完成基本任务是推特的情感分析（ Sentiment Analysis in Twitter）。对于推特的文本 情感分析基于 SemEval 数据集始于 2013 年，之后任务和数据都在不断发展为更复杂。在 13 年到 15 年， 任务是简单给一个推特文本，然后进行文本情感分类，分为 3 类（积极、消极、中立），称为任务 A；于 2015 年，在任务和任务中引入了 Topic 的概念，任务升级为给一个推特，并给一个 topic；推断推特内容关于这个

topic 的情感倾向，积极或消极（任务 B）；于 2016 年，引入了两个分支，一是加入了 tweet quantification， 也就是推特的量化分析；二是 five-point ordinal classification，也就是之前是推特的三分类， 16 年拓展为五 分类。

SemEval-2017 任务 4 由五个子任务组成，每个都提供阿拉伯语和英语：

1\.Subtask A: 分析一个推特的情感，可以分为积极、消极、中立

2\.Subtask B: 给一个推特，并给一个 topic；推断推特内容关于这个 topic 的情感倾向，积极或消极。 3.Subtask C: 在 B 任务的基础上，更加精细地分类，分为非常积极、弱倾向积极、中立、弱倾向于消极、

非常消极（五个程度）

4\.Subtask D: 关于一个 topic，给出一组的推特，估计这些推特在积极和消极的分布

5\.Subtask E: 关于一个 topic，给出一组的推特，估计这些推特在五个情感程度的分布。

本单元基于 SemEval2017 Task 4 Subtask A: Message Polarity Classification，对给定的英文 twitter 进行情感分析，将文本划分为 positive，neutral 和 negative 三种情感。

2. 双向 **LSTM** 介绍

LSTM 的全称是 Long Short-Term Memory，它是 RNN（ Recurrent Neural Network）的一种。由于 其设计的特点， LSTM 非常适合用于对时序数据（如文本数据）的建模。 BiLSTM 是 Bi-directional Long Short-Term Memory 的缩写，是由前向 LSTM 与后向 LSTM 组合而成。两者在自然语言处理任务中都常 被用来建模上下文信息。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.151.jpeg)

<a name="_page102_x72.00_y579.03"></a>图 10.6: LSTM 总体框架

LSTM 的总体框架如图 [10.6](#_page102_x72.00_y579.03) 所示，由 t 时刻的输入词 Xt ，细胞状态 Ct ，临时细胞状态 C˜t 隐层状态 hht ，遗忘门 ft ，记忆门 it 和输出门 ot 组成。其计算过程可以概括为，通过对细胞状态中信息遗忘和记忆 新的信息使得对后续时刻计算有用的信息得以传递，而无用信息被抛弃。

98 第十章 自然语言处理入门

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.152.jpeg)

<a name="_page103_x72.00_y64.23"></a>图 10.7: 遗忘门计算

首先计算遗忘门，选择要遗忘的信息，输入为前一层的隐层状态 ht− 1，当前时刻的输入词 Xt ，输出为 遗忘门的值 ft ，如图 [10.7](#_page103_x72.00_y64.23)所示。其中 Wf 为计算遗忘门对应的权重， bf 为偏置， σ 为激活函数。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.153.jpeg)

<a name="_page103_x72.00_y245.67"></a>图 10.8: 记忆门和临时细胞状态计算 计算记忆门，选择要记忆的信息，输入为前一层的隐层状态 ht− 1，当前时刻的输入词 Xt ，输出为记忆

门的值 it 和临时细胞状态 C˜t ，如图 [10.8](#_page103_x72.00_y245.67) 所示。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.154.jpeg)

<a name="_page103_x72.00_y421.18"></a>图 10.9: 当前时刻细胞状态计算

计算当前时刻细胞状态，输入为记忆门的值 it ，遗忘门的值 ft ，临时细胞状态 C˜t 和上一时刻细胞状态 Ct− 1，输出为当前时刻细胞状态 Ct ，如图 [10.9](#_page103_x72.00_y421.18) 所示。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.155.jpeg)

<a name="_page103_x72.00_y598.87"></a>图 10.10: 计算输出门和当前时刻隐层状态

计算输出门和当前时刻隐层状态，输入为前一时刻的隐层状态 ht− 1，当前时刻的输入词 Xt 和当前时 刻细胞状态 Ct ，输出为输出门的值 ot 和隐层状态 ht ，如图 [10.10](#_page103_x72.00_y598.87) 所示。

2. TWITTER 文本情感分析 99

最终可以获得与句子长度相同的隐层状态序列 h0,h1,...,h (n − 1)。

但是 LSTM 存在一个问题，即只能编码从前到后的信息，而无法编码从后到前的信息。双向 LSTM 由 一个前向 LSTM 和一个后向 LSTM 组成，因此具备了编码从后到前信息的能力。以编码“我爱中国”为例，

如图 [10.11](#_page104_x72.00_y165.35) 所示，分词操作将句子划分为 “我”[ , ”爱” , ”中国” ] 三个词，前向 LSTML 得到 hL 0,hL 1,hL 2， 后向 LSTMR 得到 hR 0,hR 1,hR 2，将前向和后向的隐向量拼接得到 [hL0,hR0], [hL1,hR1], [hL2,hR2]，即 h0,h1,h2。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.156.jpeg)

<a name="_page104_x72.00_y165.35"></a>图 10.11: 双向 LSTM 编码句子示意

1 # PyTorch 双 向 LSTM模 型 定 义![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.157.png)

2 # bidirectional 控 制 是 否 是 双 向 LSTM

3 self.lstm = nn.LSTM(embedding\_dim, hidden\_dim, layer\_num, dropout=drop\_prob, 4 batch\_first=True, bidirectional=self.bidirectional)

利用双向 LSTM 编码文本信息后，使用全连接层进行文本的情感分类。



| self.fc = nn.Linear(self.layer\_num \* hidden\_dim, output\_size) |
| ----------------------------------------------------------------- |

1 2

- 全 连 接 层 做 情 感 分 类![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.158.png)

PyTorch 提供的 LSTM 函数包括 7 个参数，含义如下：

- input\_size: 输入特征维数，与示例中 embedding\_dim 对应，代表每个单词用多少维向量表示，通常 选择数百量级的向量维度
- hidden\_size: 隐藏层的特征维度
- num\_layers: LSTM 隐层的层数，默认为 1
- bias: 偏移值，表示隐层状态是否带 bias，默认为 True
- batch\_first：为 True 时，表示输入输出的数据格式为 (batch, seq, feature)
- dropout：除最后一层，每一层以特定的概率进行 dropout，默认为 0
- bidirectional: 表示是否是双向 LSTM

其他参数：

- vocab\_size：表示根据当前语料构建的词典大小
- ouput\_size：分类判别的取值数量，此处为 positive/neutral/negative 三种
- epochs：表示模型训练迭代次数，需要根据数据集大小和模型拟合能力确定。设置太小会欠拟合，太 大会过拟合

100 第十章 自然语言处理入门

- clip：为梯度裁剪阈值，防止梯度爆炸 /梯度消失
- learning\_rate: 为模型学习率，设置过小容易使得训练速度过慢或陷入局部最优点，过大可能导致震 荡而无法收敛

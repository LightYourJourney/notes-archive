# **HMM-GMM<a name="_page94_x72.00_y293.82"></a>** 模型介绍

语音识别任务通常需要将一段音频转化成相应的文字，从数学角度上看，也就是求一段音频属于哪段 文字的概率最大。传统语音识别框架中，所谓声学模型就是把语音的声学特征分类对应到（解码）音素或 字词这样的单元；语言模型接着把字词解码成一个完整的句子。定义声学模型输入为 O = (o1,o2, …,oT ) ， 对应的句子 W = ( w1,w2, …,oN )，语音识别的任务就是求概率 P (W|O) 最大时对应的字序列 W∗。要计 算 P (W|O)，可以利用贝叶斯公式：

P (O|W)P (W)

P (W|O) =

P (O)

其中 P (O) 在计算时可以忽略，这样就得到了两部分 P (O|W)P (W)，分别对应于传统语音识别框架 中的声学模型和语言模型，前者的任务是计算给定文字之后发出这段语音的概率；后者表示某一字词序列

发生的概率。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.141.png)

图 9.1: HMM-GMM 模型语音识别示意图

在命令词识别任务中，只需要使用到声学模型，本实验采用传统的 HMM-GMM (hidden Markov model and Gauss mixture model 隐马尔可夫与高斯混合 ) 模型进行识别。一个 HMM-GMM 模型对应一 个孤立词，首先对输入的语音进行分帧，对每帧计算 MFCC (Mel Frequency Cepstral Coefficents 梅尔频 率倒谱系数 ) 特征，得到一组描述语言信号能量在不同频率范围的分布的特征向量，之后对 HMM-GMM 模型进行训练。解码过程一般采用 Viterbi 算法（用于解决多步骤每步多选择模型的最优选择问题或篱笆

90 第九章 语音识别和处理入门

型图的最短路径问题），输入一组特征向量，对每帧用 GMM 计算隐藏状态的概率值，结合 HMM 的转移 概率，用 Viterbi 算法进行路径搜索，得到最大概率值，这样就获得了最后的识别结果。

本实验只涉及最简单的案例—— 10 个独立词的识别。程序上，以测试集为例，音频的类别为文件名下 划线后面的数字，例如 1\_1.wav。

首先，进行数据预处理，输入为训练集路径或者测试集路径，预处理程序 gen\_wavlist 分别得到音频文 件字典 wavdict 及相应的标注字典 labeldict：



| {' 1\_1' : ' test\_data \\1\_1. wav' , ' 1\_10' : ' test\_data \\1 \_10. wav' , ' 1\_2' : ' test\_data \\1\_2        |
| -------------------------------------------------------------------------------------------------------------------- |
| . wav' ,                                                                                                             |
| ' 1\_3' : ' test\_data \\1\_3. wav' , ' 1\_4' : ' test\_data \\1\_4. wav' , ' 1\_5' : ' test\_data \\1\_5.           |
| wav' ,                                                                                                               |
| ' 1\_6' : ' test\_data \\1\_6. wav' , ' 1\_7' : ' test\_data \\1\_7. wav' , ' 1\_8' : ' test\_data \\1\_8.           |
| wav' ,                                                                                                               |
| ' 1\_9' : ' test\_data \\1\_9. wav' }                                                                                |
| labeldict:                                                                                                           |
| {' 1\_1' : ' 1' , ' 1\_10' : ' 10' , ' 1\_2' : ' 2' , ' 1\_3' : ' 3' , ' 1\_4' : ' 4' , ' 1\_5' : ' 5' , ' 1\_6' : ' |
| 6' ,                                                                                                                 |
| ' 1\_7' : ' 7' , ' 1\_8' : ' 8' , ' 1\_9' : ' 9' }                                                                   |

1 2

wavdict:

3 4

5 6 7

8

之后的特征提取直接调用 python\_speech\_features 实现 MFCC 算法： 1 from python\_speech\_features import mfcc![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.142.png)

2 from scipy.io import wavfile

3 # 特 征 提 取， feat = compute\_mfcc ( wadict[ wavid ])

4 def compute\_mfcc(file):

5 fs, audio = wavfile.read(file)

6 mfcc\_feat = mfcc(audio)

7 return mfcc\_feat

我们利用 hmmlearn 工具包搭建 HMM-GMM，因为需要识别 10 个独立词，需要初始化 10 个独立的 HMM-GMM 模型，即一个 HMM-GMM 模型的集合 self.models：



| class Model():                                                                    |
| --------------------------------------------------------------------------------- |
| def \_\_init\_\_(self, CATEGORY=None, n\_comp=3, n\_mix = 3, cov\_type=' diag ' , |
| n\_iter=1000):                                                                    |
| super(Model, self).\_\_init\_\_()                                                 |
| self.CATEGORY = CATEGORY                                                          |
| self.category = len (CATEGORY)                                                    |
| self.n\_comp = n\_comp                                                            |
| self.n\_mix = n\_mix                                                              |
| self.cov\_type = cov\_type                                                        |
| self.n\_iter = n\_iter                                                            |
| # 关 键 步 骤， 初 始 化 models ， 返 回 特 定 参 数 的 模 型 的 列 表            |
| self.models = []                                                                  |
| for k in range (self.category):                                                   |
| model = hmm.GMMHMM(n\_components=self.n\_comp, n\_mix = self.n\_mix,              |
| covariance\_type=self.cov\_type, n\_iter=self.n\_iter)                            |
| self.models.append(model)                                                         |

1 2 3

from hmmlearn import hmm

4 5 6 7 8 9 10 11 12 13 14 15 16

3. 动手实验：语音控制系统 91 各个参数的意义：
- CATEGORY: 所有标签的列表
- n\_comp: 每个孤立词中的状态数
- n\_mix: 每个状态包含的混合高斯数量
- cov\_type: 协方差矩阵的类型
- n\_iter: 训练迭代次数

在语音处理中，每个 HMM 对应于一个词 (word)，一个词由若干音素 (phoneme) 组成。一个词 (word) 表示成若干状态 (states)，每个状态 (state) 表示为一个音素；汉语的词一般由 5 个状态组成，英语的为 3 个。用混合高斯密度函数去表示每个状态的出现概率，只需要求出其均值和协方差就可以了。在 HMM- GMM 模型中，如果观测序列是一维的，则观测状态的概率密度函数是一维的普通高斯分布。如果观测序

列是 N 维的，则隐藏状态对应的观测状态的概率密度函数是 N 维高斯分布。高斯分布的概率密度函数参

数可以用 µ 表示高斯分布的期望向量， Σ 表示高斯分布的协方差矩阵。在 GaussianHMM 类中，“ means” 用来表示各个隐藏状态对应的高斯分布期望向量 ￿形成的矩阵，而“ covars”用来表示各个隐藏状态对应 的高斯分布协方差矩阵 Σ 形成的三维张量。参数 covariance\_type，取值为 ”full” 意味所有的 µ, Σ 都需要 指定。取值为“ spherical”则 Σ 的非对角线元素为 0，对角线元素相同。取值为“ diag”则 Σ 的非对角线元 素为 0，对角线元素可以不同， ”tied” 指所有的隐藏状态对应的观测状态分布使用相同的协方差矩阵 Σ。

然后，用同一种类的数据训练特定的模型：

1 # 提 取 声 学 特 征![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.143.png)

2 mfcc\_feat = compute\_mfcc(wavdict[x]) 3 # hmm- gmm 模 型 训 练

4 model.fit(mfcc\_feat)

模型训练完毕后，对待测试的数据分别用十个模型打分，选出得分最高的为识别结果。

1 # 提 取 声 学 特 征![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.144.png)

2 mfcc\_feat = compute\_mfcc(wavdict[x]) 3 # 用 模 型 打 分

4 re = model.score(mfcc\_feat)

为了让训练好的模型可以在后续的代码中使用，可以使用 joblib 模块对模型参数进行保存，例如保存 和加载的代码如下所示：

1 def save(self, path=" models . pkl "):![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.145.png)

2 # 利 用 joblib 保 存 生 成 的 hmm模 型 3 joblib.dump(self.models, path) 4

5 def load(self, path=" models . pkl "):

6 # 导 入 hmm模 型

7 self.models = joblib.load(path)

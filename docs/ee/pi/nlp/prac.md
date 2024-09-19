# 动手实验：文本的情感分析
2. <a name="_page105_x72.00_y656.84"></a>实验目的
3. 学习词向量的编码与处理方法
4. 初步了解自然语言处理的基本方法
5. 学习计算机集群的远程登陆与作业管理


10\.4 动手实验：文本的情感分析 101

2. 实验内容
1. 词汇相似度计算实验

基于 Mturk-771 数据集进行实验，计算英文词汇的相似度，对比 3 种不同的词汇相似度计算方法的效

果。 Mturk-771 数据集存放在 data 文件夹中，数据格式为（ word1, word2, sim），表示 word1 与 word2 的 相似度为 sim。

Word2Vec 模型基于 text8（ wikipedia）语料进行训练，该语料存放在 data 文件夹中。

utils.py 提供了读写 .xlsx 文件、计算 Spearman’s rank correlation coefficient 和绘图函数。 ContextBased.py 提供了基于 Word2Vec 模型的词汇相似度计算方法。

DictionaryBased.py 提供了基于语义词典的词汇相似度计算方法。

实验时，运行 main.py 即可。

1 # 返 回 基 于 语 义 词 典 的 相 似 度![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.162.png)

2 wupAns, linAns = DicSimilarity(rawData)

3 #返 回 基 于 Word2Vec 的 相 似 度

4 ConAns = ConSimilarity(rawData, vecLength=150, isTrain=True)

评估方法采用 Spearman’s rank correlation coefficient，理由是 Mturk-771 数据集提供了每对词语的 相似度向量，需要与我们得到的词语相似度向量进行比较，评估各种方法效果优劣。

1）在树莓派上运行已训练好的模型，运行 main.py 即可，比较不同方法的优劣，同学们也可以尝试其 它的基于语义词典的方法；

2）在未名二号教学集群上对 Word2Vec 模型进行重新训练，须调整 Word2Vec 模型的超参数，重新训 练后，将模型下载到树莓派观察效果。

2. **Twitter** 文本情感分析实验

数据集存放在 data 文件夹中， data\_processor.py 文件中提供了文本预处理相关的函数。 model.py 中 定义了模型结构。



| batch\_size = 25                       |
| -------------------------------------- |
| vocab\_size = len (vocab\_to\_int) + 1 |
| output\_size = 3                       |
| embedding\_dim = 400                   |
| hidden\_dim = 256                      |
| n\_layers = 2                          |
| epochs = 5                             |
| clip = 5                               |
| print\_every = 10                      |
| learning\_rate = 0.0005                |

1 2 3 4 5 6 7 8 9 10 11

1）在树莓派上运行已训练好的模型，运行 main.py 即可； 2）感兴趣的同学可以定义自己的网络结构， 或修改模型的超参数，在未名二号教学集群上进行重新训练，之后将模型下载到树莓派观察效果。

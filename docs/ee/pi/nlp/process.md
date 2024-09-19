# 词向量的编码与处理方法

1. **WordNet** 简介

WordNet 是由一个由普林斯顿大学认知科学实验室在心理学教授乔治· A·米勒的指导下建立和维护 的英语字典。 WordNet 根据词条的意义将它们分组，每一个具有相同意义的词条组称为一个 synset（同 义词集合）。 WordNet 为每个 synset 提供了简短，概要的定义，并记录不同 synset 之间的语义关系。在 WordNet 中，名词、动词、形容词和副词各自被组织成一个同义词网络，其中名词网络的主干是蕴含关

系的层次（上位 /下位关系），占据了关系中的将近 80%，层次中的最顶层是 11 个抽象概念，称为基本类 别始点（ unique beginners），例如实体（ entity）等，层次越深，对应的 synset 定义越具体。如图 [10.1上](#_page98_x72.00_y399.39)位 (Hypernym): 一个词比给定单词更具有一般意义；下位 (Hyponym): 一个词比给定单词有更具体的意义；

部分 (meronym): 一个词是给定单词的一部分；整体 (holonym): 一个词是给定单词的全部或整体。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.146.jpeg)

<a name="_page98_x72.00_y399.39"></a>图 10.1: A WordNet Snapshot

2. 基于语义词典的词汇相似度计算

词汇相似度（ word similarity）指的是词汇间基于词义的关系，两个词汇之间具有越多的共性越相似。 注意区分词汇相似度（ word similarity）与词汇相关性（ word relatedness），例如 car 与 bicycle 相似，而 car 与 gasoline 相关但不相似。使用语义词典计算词汇相似度时主要有两种方法，分别是 path based similarity 和 information content similarity，下面将会进行简单的介绍。

顾名思义， path based similarity 主要考虑两个词在词典层次结构中的相对位置，两个词在词典层次 结构中越相邻，这两个词越相似。

图 [10.2](#_page99_x72.00_y64.23) 为 path based similarity 的一个示意，词汇间虚线连线上的数字表示它们之间路径的长度，路 径越短代表相似度越高。在此基础上，有多种改进后的词汇相似度计算方法，例如 Wu-Palmer 相似度考虑

93

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.147.jpeg)

<a name="_page99_x72.00_y64.23"></a>图 10.2: Path Based Similarity 示意

两个词汇和最低公共祖先（ LCS，又称最近公共父节点）的路径深度，计算方法如下所示。

2 ∗depth(LCS )

Sim =

wup depth(concept1) + depth(concept2)

information content similarity 与上述方法稍有不同，首先定义 P(concept) 表示从一个语料库中随机选择 一个词，这个词属于概念 concept 的概率。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.148.jpeg)

图 10.3: P(concept) 含义

C(concept) = -log P(concept) 表示概念 concept 包含的信息内容。 Lin 相似度考虑词汇和它们的最 低公共祖先所包含的信息内容来计算词汇相似度。

2 ∗IC (LCS )

Simlin =

IC (concept1) + IC (concept2)

NLTK 包含众多一系列的语料库，这些语料库可以通过 nltk.package 导入使用。每一个语料库可以 通过一个叫做“语料库读取器”的工具读取语料库，例如： nltk.corpus。前述 WordNet 词典也是 NLTK 语 料库的一部分。

3. 基于语料统计的词汇相似度计算

Word2Vec 是 google 在 2013 年推出的一个 NLP 工具，它的特点是能够将单词转化为向量来表示， 这样词与词之间就可以定量的去度量他们之间的关系，挖掘词之间的联系。 Word2Vec 的思路是通过训练， 将原来 One-Hot 编码的每个词都映射到一个较短的词向量上来，而这个较短的词向量的维度可以在训练 时根据任务需要来指定，用 Distributed Representation 表示的较短的词向量，就可以较容易的分析词之


1. 词向量的编码与处理方法 95

间的关系。 (one-hot representation：用一个很长的向量来表示一个词，向量的长度为词典的大小，向量的

分量只有一个 1，其他全为 0，1 的位置对应该词在词典中的位置； distributed Representation：通过训练将

某种语言中的每一个词映射成一个固定长度的短向量，将所有这些向量放在一起形成一个词向量空间，而

每一向量则为该空间中的一个点，在这个空间上引入“距离”，则可以根据词之间的距离来判断它们之间的 （词法、语义上的）相似性。 )

Word2Vec 的训练模型本质上是只具有一个隐含层的神经元网络。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.149.png)

图 10.4: Word2Vec 模型结构

它的输入是采用 One-Hot 编码的词汇表向量，它的输出也是 One-Hot 编码的词汇表向量。使用所 有的样本，训练这个神经元网络，等到收敛之后，从输入层到隐含层的那些权重，便是每一个词的采用

Distributed Representation 的词向量。这样就把原本维数为 V 的词向量变成了维数为 N 的词向量（ N 远 小于 V），并且词向量间保留了一定的相关关系。

Mikolov 在关于 Word2Vec 的论文中提出了 CBOW 和 Skip-gram 两种模型， CBOW 适合于数据集 较小的情况，而 Skip-Gram 在大型语料中表现更好。其中 CBOW 如图 [10.5](#_page101_x72.00_y64.23)左部分所示，使用围绕目标 单词的其他单词（语境）作为输入，在映射层做加权处理后输出目标单词。与 CBOW 根据语境预测目标 单词不同， Skip-gram 根据当前单词预测语境，如图 [10.5](#_page101_x72.00_y64.23)右部分所示。假如我们有一个句子“ There is an apple on the table”作为训练数据， CBOW 的输入为（ is,an,on,the），输出为 apple。而 Skip-gram 的输入

为 apple，输出为（ is,an,on,the）。

利用 Word2Vec 模型，得到词语的词向量表示后，采用余弦相似度计算词语相似度。

∑ n × B

similarity = cos(θ) = A ·B = ~~√~~ ~~∑~~ n (A )2 A× i~~√~~ ~~∑~~ in

i=1

∥A∥∥B∥ i=1 i i=1 (Bi )2

ensim 是一款开源的第三方 Python NLP 工具包，用于从原始的非结构化的文本中，无监督地学习到 文本隐层的主题向量表达。它支持包括 TF-IDF，LSA，LDA，和 word2vec 在内的多种主题模型算法，支持 流式训练，并提供了诸如相似度计算，信息检索等一些常用任务的 API 接口。在 gensim 中，word2vec 相关 的 API 都在包 gensim.models.word2vec 中，和算法有关的参数都在类 gensim.models.word2vec.Word2Vec 中，需要注意的参数有：

1) sentences: 我们要分析的语料，可以是一个列表，或者从文件中遍历读出；
1) size: 词向量的维度，默认值是 100。这个维度的取值一般与我们的语料的大小相关，如果是不大的

语料，比如小于 100M 的文本语料，则使用默认值一般就可以了。如果是超大的语料，建议增大维度。

3) window：即词向量上下文最大距离，这个参数在我们的算法原理篇中标记为 c，window 越大，则和

某一词较远的词也会产生上下文关系。默认值为 5。在实际使用中，可以根据实际的需求来动态调整这个

window 的大小。如果是小语料则这个值可以设的更小。对于一般的语料这个值推荐在 [5,10] 之间。

96 第十章 自然语言处理入门

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.150.jpeg)

<a name="_page101_x72.00_y64.23"></a>图 10.5: CBOW 模型与 Skip-gram 模型

4) sg: 即 word2vec 两个模型的选择。如果是 0，则是 CBOW 模型，是 1 则是 Skip-Gram 模型，默认

是 0 即 CBOW 模型。

5) hs: 即 word2vec 两个解法的选择，如果是 0，则是 Negative Sampling，是 1 的话并且负采样个数

negative 大于 0，则是 Hierarchical Softmax。默认是 0 即 Negative Sampling。

6) negative: 即使用 Negative Sampling 时负采样的个数，默认是 5。推荐在 [3,10] 之间。
6) min\_count: 需要计算词向量的最小词频。这个值可以去掉一些很生僻的低频词，默认是 5。如果是

小语料，可以调低这个值。

4. 结果评估方法—— **Spearman**’**s rank correlation coefficient**

Mturk-771 数据集提供了每对词语的相似度向量，需要与我们得到的词语相似度向量进行比较，评估

各种方法效果优劣。 pandas 是基于 NumPy 的一种工具，该工具是为了解决数据分析任务而创建的，提 供了大量能使我们快速便捷地处理数据的函数和方法。 pandas 中 DataFrame 对象的 corr() 方法用来计 算 DataFrame 对象中所有列之间的相关系数（ df.corr()，包括’ pearson相’ 关系数、’ kendall相’ 关系数和’ spearman’秩相关）。相关性是两个变量之间关联的度量，用以检查两个变量之间变化趋势的方向以及程

度，值范围 -1 到 +1，0 表示两个变量不相关，正值表示正相关，负值表示负相关，值越大相关性越强。当两 个变量都有正态分布时，很容易计算和解释。而当我们不知道变量的分布时，我们必须使用非参数的秩相

关（ Rank Correlation，或称为等级相关）方法。秩相关是指使用变量之间序数的关联（而不是特定值）来量 化变量之间的关联的方法。有序数据是具有标签值并具有顺序或秩相关的数据，例如：‘低’‘中’，和‘高’。

Spearman 秩相关以 Charles Spearman 命名，这个统计方法量化了等级变量与单调函数相关联的程度，即 递增或递减的关系。在没有重复数据的情况下，如果一个变量是另外一个变量的严格单调函数，那么二者

之间的 spearman 秩相关系数就是 1 或 +1，称为完全 spearman 相关。如果 Y 随 X 的增加而增加，则 spearman 秩相关系数是正的，否则是负的。 spearman 秩相关系数为 0 表示随着 X 的增加 Y 没有增加或 减小的趋势，随着 X 和 Y 的越来越接近严格单调函数管系， spearman 秩相关系数在数值上越来越大。

由于基于词典和基于语料的方法中，都会有异常值的出现（信息内容文件没有条目，词典收入词条有 限，语料中词汇有限），会对 Pearson correlation coefficient 的结果造成较大干扰，而 Spearman’ s rank correlation coefficient 对异常值不敏感。

# 专家系统
1. <a name="_page52_x72.00_y267.55"></a>专家系统简介

所谓的专家系统（ Expert System）是一种利用知识进行推理的程序。专家系统具有某些领域的知识的 规则库（ rules），例如鸟类识别专家系统关于几种鸟类的规则库可能是

喜鹊是留鸟、颜色黑白、体型中等 白鹭是旅鸟、颜色白、体型大 翠鸟是留鸟、颜色蓝、体型小

当给出一些事实（ facts），专家系统可以利用它们进行推理，得到特定的结论。例如给出下面的查询条件：

居留类型：留鸟 颜色：蓝 体型：小

专家系统就可以得出查询的鸟是翠鸟的答案。

当然前面的示例过于简单，并不能体现专家系统的优势。一个复杂的规则库和完备的推理程序可以完 成只有人类专家才可以做到的任务，这类任务往往规则库非常复杂，人类需要多年的学习和积累经验才能 完成，这也是为什么这类软件被称为专家系统的原因。常用的应用方向有工程、医药、军事等。

编写专家系统一般需要特殊的编程语言，这类语言具有逻辑推理机制，可以提高编程的效率，减少程 序出错的概率。其中比较有代表性的就是 Prolog。

2. **Prolog** 编程语言

Prolog 是一种逻辑型程序设计语言，它的英文就是 Programming in Logic 的缩写。它具有自动搜索、 模式匹配、回溯等性能，主要特点是以谓词逻辑为理论基础。用 Prolog 编程时，人们注重和关心对问题的 描述，而不是问题的求解过程。例如前面小节中的规则库和事实库可以用 Prolog 描述如下：

bird(magpie) :- color(black\_white), season(all\_year), size(medium). bird(egret) :- color(white), season(spring\_autumn), size(large). bird(kingfisher) :- color(blue), season(all\_year), size(small). season(all\_year).

color(blue).

size(small).

Proglog 的这种编程设计思想被称为声明式编程语言（ Declarative language），其它如 C 语言是命令 式编程语言（ Imperative language）。命令式编程语言通过具体的流程控制来描述程序的执行过程，而声明

47

48 第六章 构建专家系统

式语言采用更高层的方式对问题进行描述，只表达出要达到的目标而由运行环境完成对目标问题的计算

过程。

在 Prolog 的程序中，首字母小写的单词表示函数或者常量（ Prolog 术语叫做 predicate，中文一般翻 译为 “谓词 ”，本文后续都用函数来指代），不用声明就可以直接使用。 Prolog 每行语句由句点结束，包含 :- 的表示规则，代表蕴含的关系，例如 bird(magpie) 为真的条件是 :- 后面的三个函数都为真。 :- 后面的 内容用逗号分隔表示逻辑的与关系；如果采用分号分隔则表示逻辑或的关系；逻辑或的关系也可以写成独

立的两个语句。不包含 :- 的语句为事实，例如 color(blue) 这个函数永远为真。

首字母大写的单词在 Prolog 中是变量，如果出现在程序中就组成了一个查询语句。例如对于上面的

程序，bird(X) 就是一条查询，而根据前面定义的规则和事实，唯一符合条件的查询就是 X = kingfisher。

下划线 \_ 是一个特殊的变量，被称为匿名变量，它的作用域仅限于当前语句，也就是说程序中不同语 句所使用的匿名变量没有关系。匿名变量在使用的时候往往只关注是否这个变量可以取到值，而不关心这 个值到底是什么。因此对于上面的程序， bird(\_) 给出的结果是 true，即表示这个变量可以取到值。

3. **Prolog** 的回溯算法

从算法的角度来看， Prolog 的解释器或编译器需要在设定的事实和规则的前提下，在定义域内搜索特 定问题全部的解。这是一个被广泛研究的计算问题，一般通过回溯算法（深度优先搜索）的算法来获得答 案。了解回溯的基本过程可以为编写高效率代码提供指导。 Prolog 也提供了一些语法来优化搜索的过程。

例如定义一个求最大值的函数 max(X,Y,Z)，其中 Z 是前两个变量的最大值。可以这样写这个程序：

max(X,Y,Y) :- X =< Y. max(X,Y,X) :- X > Y.

假定查询语句是 max(2,3,Y)，那么通过第一条规则就可以得出 Y=3，可 Prolog 还会去检查第二条规则试 图找到其它的答案，而这显然是徒劳的。因为程序设计者了解这个函数只能有一个答案，如果第一条规则 满足就不必检查第二条规则，此时可以使用 Prolog 的 cut 功能，用 ! 符号阻止后续的回溯搜索。具体写法 如下：

max(X,Y,Y) :- X =< Y,!. max(X,Y,X) :- X > Y.

Prolog 在遇到 ! 之后，前面搜索过程中的可回溯节点全部不再回溯，包括最开始检查第一条规则的节点， 不再会去检查之后的规则了。

对于 max函数，通过一次判断就应该可以得到结论，第二条规则的判断有些浪费。在 Prolog 中，可以 用一种特殊的语法表达 if-then-else 的结构： (A -> B ; C) 表示对 A进行检测，如果正确那么检测 B， 如果不正确则检测 C。此时 max函数可以写为：

max(X,Y,Z) :- (X =< Y -> Z = Y ; Z = X).

4. **Prolog** 内置函数

在程序中如果要在屏幕上输出内容，可以使用 Prolog 的 write()函数，例如可以用 write('Hello World!'). 打印一条信息。 nl 可以用来打印一个回车符， tab(X) 用来打印 X个制表符。 read(X) 用来从键盘输入，并 把输入的内容赋值给 X变量：

hello :-

write('What is your name?'), read(X), write('Hello'), tab(1), write(X), nl.

使用 read 输入时要以句点结束，并注意不要大写首字母（表示一个变量）。

在 Prolog 中，true 永远返回正确，而 fail 永远返回错误。

大部分的自定义函数具有确定的状态，要么返回真，要么返回假。有时候程序需要一些函数的返回值 可以改变，此时需要用 dynamic 函数来进行声明，声明的方式有两种：

1. 专家系统 49

:- dynamic my\_predicate/2. dynamic(my\_predicate/2).

上面的声明定义了 my\_predicate 函数为动态类型，并包含 2 个参数。 Prolog 中都在函数名后面加斜线 和数字的方式表明函数中的参数个数。

使用 assert(X) 或者 assertz(X) 函数可以在规则库的尾部中添加一条新的规则或者事实，而 asserta(X) 将新的规则添加到规则库的开头位置。 retract(X) 函数将 X从规则库中去除。但要注意，使用 assert 增 加新的规则只适合动态函数，而从文件中加载的规则缺省都是静态函数。对于之前示例中包含了 color(blue) 的规则，就无法用 assert(color(red)) 进行修改，但可以增加新定义的函数，例如 assert(bill(long))，

这个 bill 函数就是动态类型。

5. **swipl** 简介

swipl 是 Prolog 的一个实现，下面的交互示例假定前面的鸟类识别代码保存在 bird.pl 中。查询结束 后按 Ctrl+D 或者 halt. 命令退出程序。

$ swipl bird.pl

Welcome to SWI-Prolog (threaded, 32 bits, version 8.0.2)

SWI-Prolog comes with ABSOLUTELY NO WARRANTY. This is free software. Please run ?- license. for legal details.

For online help and background, visit http://www.swi-prolog.org For built-in help, use ?- help(Topic). or ?- apropos(Word).

?- bird(kingfisher). true.

?- bird(magpie). false.

?- bird(X).

X = kingfisher.

?- halt.

swipl 包含一个 trace 命令，可以对代码的每一步搜索进行跟踪，不但便于了解 Prolog 语句执行的 原理，也可以帮助分析程序中可能的错误。下面是 bird(X) 查询的跟踪结果。在跟踪结束后，可以使用 notrace 命令停止后续查询的跟踪。

?- trace. true.

[trace] ?- bird(X).

Call: (10) bird(\_7862) ? creep

Call: (11) color(black\_white) ? creep Fail: (11) color(black\_white) ? creep Redo: (10) bird(\_7862) ? creep

Call: (11) color(white) ? creep

Fail: (11) color(white) ? creep

Redo: (10) bird(\_7862) ? creep

Call: (11) color(blue) ? creep

Exit: (11) color(blue) ? creep

Call: (11) season(all\_year) ? creep Exit: (11) season(all\_year) ? creep Call: (11) size(small) ? creep

Exit: (11) size(small) ? creep

50 第六章 构建专家系统

Exit: (10) bird(kingfisher) ? creep X = kingfisher.

其中 Call 事件表示 Prolog 在试图满足一个条件的要求； Fail 事件表示条件不能满足； Redo 事件表 示回溯到前一个节点寻找下一个满足条件的值； EXIT 事件表示当前条件已经满足。上面示例的跟踪过程 可以描述为：首先试图为 bird(X) 找到一个答案，根据第一个规则，检查 X是不是 magpie；根据这条规则 还要检查 color 是否满足； color 条件无法通过；回溯到 bird(X) 寻找第二个答案，此时根据第二个规则， 选择答案为 egret；……；经过一系列的搜索过程，最终获得答案为 kingfisher。

6. **Prolog** 代码示例

/\* animal identification game.

start with ?- go. \*/

go :- hypothesize(Animal),

write('I guess that the animal is: '), write(Animal),

nl,

undo.

/\* hypotheses to be tested \*/

hypothesize(cheetah) :- cheetah, !. hypothesize(tiger) :- tiger, !. hypothesize(giraffe) :- giraffe, !. hypothesize(zebra) :- zebra, !. hypothesize(ostrich) :- ostrich, !. hypothesize(penguin) :- penguin, !. hypothesize(albatross) :- albatross, !. hypothesize(unknown). /\* no diagnosis \*/

/\* animal identification rules \*/ cheetah :- mammal,

carnivore,

verify(has\_tawny\_color),

verify(has\_dark\_spots). tiger :- mammal,

carnivore, verify(has\_tawny\_color), verify(has\_black\_stripes).

giraffe :- ungulate, verify(has\_long\_neck),

verify(has\_long\_legs). zebra :- ungulate,

verify(has\_black\_stripes). ostrich :- bird,

verify(does\_not\_fly), verify(has\_long\_neck).

penguin :- bird,

verify(does\_not\_fly), verify(swims), verify(is\_black\_and\_white).

albatross :- bird,

verify(appears\_in\_story\_Ancient\_Mariner), verify(flys\_well).

/\* classification rules \*/

1. 专家系统 51

mammal :- verify(has\_hair), !. mammal :- verify(gives\_milk).

bird :- verify(has\_feathers), !. bird :- verify(flys),

verify(lays\_eggs). carnivore :- verify(eats\_meat), !. carnivore :- verify(has\_pointed\_teeth),

verify(has\_claws),

verify(has\_forward\_eyes).

ungulate :- mammal,

verify(has\_hooves), !. ungulate :- mammal,

verify(chews\_cud).

/\* how to ask questions \*/

ask(Question) :-

write('Does the animal have the following attribute: '), write(Question),

write('? '),

read(Response),

( (Response == yes ; Response == y)

->

assert(yes(Question)) ;

assert(no(Question)), fail).

:- dynamic yes/1,no/1.

/\* How to verify something \*/ verify(S) :-

(yes(S)

->

true ;

(no(S)

->

fail ;

ask(S))).

/\* undo all yes/no assertions \*/ undo :- retract(yes(\_)),fail. undo :- retract(no(\_)),fail. undo.

这个程序就是本章开始提到的动物识别程序，在 swipl 下运行 go. 可以通过回答一系列问题来判断动物 的名称。下面是一个运行的例子：

?- go.

Does the animal have the following attribute: has\_hair? yes.

Does the animal have the following attribute: eats\_meat? |: no.

Does the animal have the following attribute: has\_pointed\_teeth? |: no. Does the animal have the following attribute: has\_hooves? |: y.

Does the animal have the following attribute: has\_long\_neck? |: n.

Does the animal have the following attribute: has\_black\_stripes? |: y. I guess that the animal is: zebra

true.

上面代码中的 verify 函数实现的功能就是对每个需要验证的事实进行判断，如果 yes(S) 成立，就 返回 true，如果 no(S) 成立，就返回 false，否则通过 ask(S) 函数询问用户，得到判断的答案，把这个答案

通过 yes() 和 no() 添加到知识库中。

52 第六章 构建专家系统

7. **Python** 语言的 **Prolog** 接口

pyswip 是 Python 语言与 swipl 的接口，通过这个接口可以实现与 Prolog 程序的联合编程。使用库 中的 consult 函数可以加载保存在文件中的规则，通过函数 assertz 可以添加需要查询的事实条件，通 过函数 query 可以运行 Prolog 的查询语句。现在将 bird.pl 中的事实部分删除，保存为 birdrule.pl 运行如下 Python 程序，可以获得对 bird(X) 的查询结果。

from pyswip import Prolog # 导入模块

prolog = Prolog()

prolog.consult('birdrule.pl') # 导入 Prolog 的代码（规则库） prolog.assertz("color(blue)") # 添加事实

prolog.assertz('season(all\_year)')

prolog.assertz('size(small)')

for result in prolog.query('bird(X)'): # query 代表查询

print(result["X"])

程序的查询结果是一个字典的列表，对于上面的示例则只有一个元素： {'X': 'kingfisher'}。

pyswip 还支持设计可以在 Prolog 中调用的外部函数，例如：

from pyswip import Prolog, registerForeign

def hello(t): # 包含一个参数，返回值为布尔类型

print("Hello,", t)

hello.arity = 1 # 这个属性是必须的 registerForeign(hello) # 注册函数，使 Prolog 代码可以使用

prolog = Prolog()

prolog.assertz("father(michael,john)") # 事实 1： michael 是 john 的父亲 prolog.assertz("father(michael,gina)") # 事实 2： michael 是 gina 的父亲 print(list(prolog.query("father(michael,X), hello(X)"))) # 查询

程序运行结果为：

Hello, john

Hello, gina

[{'X': 'john'}, {'X': 'gina'}]

对于前面的动物识别程序，可以将 Prolog 代码中的 verify 等函数去掉，而改为用 Python 代码实现。 也就是用 Python 编写 verify 函数，实现用户交互接口，显示需要验证的事实，输入用户的选择并将用户 的选择作为布尔类型返回。函数可以通过一个字典记录每个回答的结果（相当于 Prolog 代码中的 yes 和 no，这样面对重复的问题就可以不必每次都询问用户。 Python 代码的编写将在动手实验部分完成。

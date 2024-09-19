3. PYTHON API 接口 109
1. **JSON** 数据结构

JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它使用人性化的文本来存储和表 示数据对象。下面是一个简单的 JSON 数据包示例：

1  {![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.174.png)
1  " name": " John ",
1  " age ": 30,
1  " interests": [ " reading", " hiking", " coding "],
1  " address": {

6 " street": " 123␣Main␣St ",

7 " city": " Anytown",

8  }
8  }

从上面的例子可以看出， JSON 格式比较易于理解。与 XML 相比， JSON 格式更小、更快，更易解析。 JSON 使用 Javascript 语法来描述数据对象，但它仍可被其他编程语言读取和解析，几乎所有主流语言如 Python、Java、C# 等都有解析 JSON 的库。 JSON 对象是由键值对组成的。键必须是字符串，值可以是数 字、字符串、逻辑值、数组、对象等。 JSON 是理想的网络数据交换格式，在异步浏览器和服务器通信中广泛

使用。

2. **FastAPI** 简介

FastAPI 是一个现代化的 Python Web 框架，专门设计用于构建高性能、易于维护和快速开发的 Web 应用程序和 API。它在 Python 生态系统中备受欢迎，因为它具有以下特点和优势：

- 快速： FastAPI 非常快速，因为它借助 Python 3.6+ 中的异步特性，利用了异步编程的优势。这使得 它能够处理高并发请求，并且具有出色的性能。
- 简单易用： FastAPI 的 API 设计非常直观，使用 Python 类型提示（ Type Hints）来定义请求和响应 模型，这样可以自动生成文档和验证请求数据。这使得开发人员能够更轻松地编写和维护代码。
- 自动文档生成： FastAPI 通过使用 Swagger UI 和 ReDoc 自动生成 API 文档，包括请求参数、响应 模型、路由信息等。这样，开发人员和团队成员可以方便地查看和理解 API 的功能和用法。
- 强大的验证和序列化： FastAPI 支持请求参数验证、请求体验证、响应模型验证等，保证了数据的完 整性和安全性。它还内置了 Pydantic 库，用于处理数据的验证和序列化。
- 内置支持 CORS 和安全性： FastAPI 提供了内置的 CORS（跨源资源共享）支持和安全性特性，可以 帮助开发人员轻松地处理跨域请求和保障应用程序的安全性。
- 生态系统丰富： FastAPI 可以轻松与各种数据库、认证系统和第三方库集成，使开发更加灵活。它还 支持异步请求处理、 WebSockets 和后台任务等特性。
- 社区活跃： FastAPI 的社区非常活跃，有大量的文档、教程和第三方插件可供使用。这使得学习和使 用 FastAPI 变得更加容易。
3. **GET** 接口

FastAPI 的一个典型示例如下：

110 第十二章 大语言模型简介



|                                                               |
| :------------------------------------------------------------ |
| app = FastAPI()                                               |
|                                                               |
| @app.get("/ ")                                                |
| def read\_root():                                             |
| return {" message ": "Hello , ␣World"}                        |
|                                                               |
| @app.get("/ items /{ item\_id}")                              |
| def read\_item(item\_id: int , query\_param: str = None):     |
| return {" item\_id": item\_id, " query\_param": query\_param} |

1 2 3 4 5 6 7 8 9 10 11

from fastapi import FastAPI

上述示例是一个简单的 FastAPI 应用，其中包含两个调用接口，分别用于处理根路径和带有参数的路 径。 FastAPI 会自动生成文档和进行请求参数验证。

客户端程序可以使用 request 库来调用这个接口。以下是一个简单的示例，演示如何调用前面示例中 的 / 和 /items/{item\_id} 接口：



|                                                                                               |
| :-------------------------------------------------------------------------------------------- |
| # 定 义 FastAPI 服 务 器 的 地 址                                                             |
| server\_url = " http :// localhost :8000 " # 将 地 址 替 换 为 你 的 FastAPI 服 务 器 地 址   |
|                                                                                               |
| # 调 用 根 路 径                                                                              |
| response = requests.get(f"{server\_url }/ ")                                                  |
| if response.status\_code == 200:                                                              |
| data = response.json()                                                                        |
| print( " 根 路 径 响 应： ", data)                                                            |
| else:                                                                                         |
| print( " 根 路 径 请 求 失 败 ")                                                              |
|                                                                                               |
| # 调 用 带 有 参 数 的 路 径                                                                  |
| item\_id = 1 # 替 换 为 你 想 要 的 item\_id                                                  |
| query\_param = " example " # 替 换 为 你 想 要 的 查 询 参 数                                 |
| response = requests.get(f"{server\_url }/ items /{ item\_id }? query\_param ={query\_param}") |
| if response.status\_code == 200:                                                              |
| data = response.json()                                                                        |
| print( " 带 有 参 数 的 路 径 响 应： ", data)                                                |
| else:                                                                                         |
| print( " 带 有 参 数 的 路 径 请 求 失 败 ")                                                  |

1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19

import requests

20 21

22

4. **POST** 接口

在前面的示例中，接口调用的参数比较简单，可以直接编码到 URL 中进行调用，也就是所谓的 GET 方法。对于需要传递复杂参数的应用，就需要使用 POST 接口，此时往往会使用前面提到的 JSON 结构。

服务器端实现 POST 接口的代码示例如下：

1  # 创 建 接 收 POST 请 求 的 路 由 函 数![ref6]
1  @app.post("/ items/ ")
1  async def create\_item(item: Item):

3. PYTHON API 接口 111

4 # 在 这 里 可 以 将 接 收 到 的 item 数 据 保 存 到 数 据 库 或 进 行 其 他 操 作 ![ref5]5 return {" item ": item}

客户端代码的示例如下：



| data = {                                                        |
| --------------------------------------------------------------- |
| " name": " Example ␣Item ",                                     |
| " description": " This ␣is ␣an␣example ␣item . "                |
| }                                                               |
|                                                                 |
| # 发 送 POST 请 求                                              |
| response = requests.post(f"{server\_url }/ items/ ", json=data) |
|                                                                 |
| if response.status\_code == 200:                                |
| result = response.json()                                        |
| print( " POST␣请 求 成 功， 响 应 数 据： ", result)            |
| else:                                                           |
| print( " POST␣请 求 失 败 ")                                    |

1 2 3 4 5 6

- 定 义 要 发 送 的 JSON 数 据

7 8 9 10 11 12 13 14

5. 流式接口

大模型在生成文本数据的时候，并不是一次性把所有的文字内容都输出，而是随着模型的运算，不断 的输出当前已经生成的文本。这也可以看成是大模型的生成文本速度比较慢，如果等到所有文字都准备好 再一次性输出，会让用户等待过多的时间，用户体验较差。毕竟用户的阅读速度有限，尽快的把生成的文字 发送到用户端可以让用户尽早开始阅读。

为应对这一要求，很多大模型都提供流式的输出接口，保持服务器和客户端之间的链接，直到所有的

数据发送完毕。 FastAPI 可以使用下面的方式实现这个接口： async def process(prompt, history):

| try:                                                                     |
| ------------------------------------------------------------------------ |
| for response, history in model.stream\_chat(tokenizer, prompt, history,  |
| max\_length=max\_length if max\_length else 2048,                        |
| top\_p=top\_p if top\_p else 0.7,                                        |
| temperature=temperature if temperature else                              |
| 0\.95):                                                                  |
| await asyncio.sleep(0) # 这 里 必 须 加 上 这 句 才 能 捕 获 用 户 中 断 |
| yield " <^>" + response                                                  |
| except asyncio.CancelledError:                                           |
| # Force stop                                                             |
| pass                                                                     |
|                                                                          |
| @app.post("/ ")                                                          |
| async def create\_item(request: Request):                                |
| json\_post\_raw = await request.json() # 等 待 客 户 端 数 据            |
| json\_post = json.dumps(json\_post\_raw)                                 |
| json\_post\_list = json.loads(json\_post)                                |
| prompt = json\_post\_list.get(' prompt ' )                               |
| history = json\_post\_list.get(' history ' )                             |

1 2 3 4 5

6

7 8 9 10 11 12 13 14 15 16 17 18 19

112 第十二章 大语言模型简介

20 max\_length = json\_post\_list.get(' max\_length ' )![ref3]

21 top\_p = json\_post\_list.get(' top\_p ' )

22 temperature = json\_post\_list.get(' temperature ' )

23 return StreamingResponse(process(prompt, history))

这里使用了 ChatGLM 的 stream\_chat 接口，并在模型的返回数据上加入特殊字符串用于区分数据 的边界 [^4]。对于客户端，可以利用下面的参考代码调用服务器的 API。



| response = requests.post(api\_url, json=payload, headers=headers, stream=True) |
| ------------------------------------------------------------------------------ |
| # response. encoding = ' utf -8'                                               |
| # 检 查 响 应 状 态 码                                                         |
| last\_line = ' '                                                               |
| try:                                                                           |
| if response.status\_code == 200:                                               |
| # 逐 行 迭 代 接 收 数 据                                                      |
| for line in response.iter\_content(chunk\_size=None):                          |
| if line:                                                                       |
| # 找 到 回 答 的 起 始 标 记                                                   |
| idx = line.rfind(b' <^>' )                                                     |
| if (idx < 0):                                                                  |
| continue                                                                       |
| # 解 码 为 UTF-8 字 符 串                                                      |
| utf8\_line = line[idx+3:].decode(' utf -8 ' )                                  |
| # 在 这 里 处 理 每 行 接 收 到 的 数 据                                       |
| last\_line = utf8\_line                                                        |
| os.system(' clear ' )                                                          |
| print(last\_line, flush=True)                                                  |
| else:                                                                          |
| print( " 请 求 失 败 : ", response.status\_code)                               |
| except:                                                                        |
| err = traceback.format\_exc()                                                  |
| print(err)                                                                     |

1 2 3 4 5 6 7 8 9 10 11 12

13 14 15 16 17 18 19 20 21 22 23 24 25

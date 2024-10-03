# Python API 接口

虽然如同 ChatGLM-6B 这样的模型可以在本地运行，但对于大多数终端硬件来说，还是过于复杂了。使用这些复杂模型往往通过一定的编程接口远程进行调用。在与远程服务器进行交换数据的过程中，经常会使用一种被称为 JSON 的简单数据格式。

## JSON 数据结构

JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式。它使用人性化的文本来存储和表示数据对象。下面是一个简单的 JSON 数据包示例：

```json linenums="1"
{
  "name": "John",
  "age": 30,
  "interests": ["reading", "hiking", "coding"],
  "address": {
      " street": " 123␣Main␣St ",
      " city": " Anytown",
    }
}
```

从上面的例子可以看出，JSON 格式比较易于理解。与 XML 相比，JSON 格式更小、更快，更易解析。JSON 使用 Javascript 语法来描述数据对象，但它仍可被其他编程语言读取和解析，几乎所有主流语言如 Python、Java、C# 等都有解析 JSON 的库。JSON 对象是由键值对组成的。键必须是字符串，值可以是数 字、字符串、逻辑值、数组、对象等。JSON 是理想的网络数据交换格式，在异步浏览器和服务器通信中广泛使用。

## FastAPI 简介

FastAPI 是一个现代化的 Python Web 框架，专门设计用于构建高性能、易于维护和快速开发的 Web 应用程序和 API。它在 Python 生态系统中备受欢迎，因为它具有以下特点和优势：

- 快速： FastAPI 非常快速，因为它借助 Python 3.6+ 中的异步特性，利用了异步编程的优势。这使得 它能够处理高并发请求，并且具有出色的性能。
- 简单易用： FastAPI 的 API 设计非常直观，使用 Python 类型提示（Type Hints）来定义请求和响应 模型，这样可以自动生成文档和验证请求数据。这使得开发人员能够更轻松地编写和维护代码。
- 自动文档生成： FastAPI 通过使用 Swagger UI 和 ReDoc 自动生成 API 文档，包括请求参数、响应 模型、路由信息等。这样，开发人员和团队成员可以方便地查看和理解 API 的功能和用法。
- 强大的验证和序列化： FastAPI 支持请求参数验证、请求体验证、响应模型验证等，保证了数据的完 整性和安全性。它还内置了 Pydantic 库，用于处理数据的验证和序列化。
- 内置支持 CORS 和安全性： FastAPI 提供了内置的 CORS（跨源资源共享）支持和安全性特性，可以 帮助开发人员轻松地处理跨域请求和保障应用程序的安全性。
- 生态系统丰富： FastAPI 可以轻松与各种数据库、认证系统和第三方库集成，使开发更加灵活。它还 支持异步请求处理、 WebSockets 和后台任务等特性。
- 社区活跃： FastAPI 的社区非常活跃，有大量的文档、教程和第三方插件可供使用。这使得学习和使 用 FastAPI 变得更加容易。

## GET 接口

FastAPI 的一个典型示例如下：

```python linenums="1"
from fastapi import FastAPI

app = FastAPI()

@app.get("/ ")
def read_root():
    return {" message ": "Hello ,␣World"}

@app.get("/ items /{ item_id}")
def read_item(item_id: int , query_param: str = None):
    return {" item_id": item_id, " query_param": query_param}
```

上述示例是一个简单的 FastAPI 应用，其中包含两个调用接口，分别用于处理根路径和带有参数的路径。FastAPI 会自动生成文档和进行请求参数验证。

客户端程序可以使用 request 库来调用这个接口。以下是一个简单的示例，演示如何调用前面示例中的 / 和 /items/{item_id} 接口：

```python linenums="1"
import requests

# 定义 FastAPI 服务器的地址
server_url = "http://localhost:8000" # 将地址替换为你的 FastAPI 服务器地址

# 调用根路径
response = requests.get(f"{server_url}/")
if response.status_code == 200:
    data = response.json()
    print("根路径响应：", data)
else:
    print("根路径请求失败")

# 调用带有参数的路径
item_id = 1 # 替换为你想要的 item_id
query_param = "example" # 替换为你想要的查询参数
response = requests.get(f"{server_url}/items/{item_id}?query_param={query_param}")
if response.status_code == 200:
    data = response.json()
    print("带有参数的路径响应：", data)
else:
    print("带有参数的路径请求失败")
```

## POST 接口

在前面的示例中，接口调用的参数比较简单，可以直接编码到 URL 中进行调用，也就是所谓的 GET 方法。对于需要传递复杂参数的应用，就需要使用 POST 接口，此时往往会使用前面提到的 JSON 结构。

服务器端实现 POST 接口的代码示例如下：

```python linenums="1"
# 创建接收 POST 请求的路由函数!
@app.post("/items/")
async def create_item(item: Item):
    # 在这里可以将接收到的 item 数据保存到数据库或进行其他操作!
    return {"item": item}
```

客户端代码的示例如下：

```python linenums="1"
# 定义要发送的 JSON 数据
data = {
    "name": "Example␣Item ",
    "description": "This␣is␣an␣example␣item."
}

# 发送 POST 请求
response = requests.post(f"{server_url }/ items/ ", json=data)

if response.status_code == 200:
    result = response.json()
    print(" POST␣请求成功，响应数据：", result)
else:
    print("POST␣请求失败")
```

## 流式接口

大模型在生成文本数据的时候，并不是一次性把所有的文字内容都输出，而是随着模型的运算，不断的输出当前已经生成的文本。这也可以看成是大模型的生成文本速度比较慢，如果等到所有文字都准备好再一次性输出，会让用户等待过多的时间，用户体验较差。毕竟用户的阅读速度有限，尽快的把生成的文字 发送到用户端可以让用户尽早开始阅读。

为应对这一要求，很多大模型都提供流式的输出接口，保持服务器和客户端之间的链接，直到所有的数据发送完毕。FastAPI 可以使用下面的方式实现这个接口：

```python linenums="1"
async def process(prompt, history):
    try:
        for response, history in model.stream_chat(tokenizer, prompt, history,
                                    max_length=max_length if max_length else 2048,
                                    top_p=top_p if top_p else 0.7,
                                    temperature=temperature if temperature else
0.95):
            await asyncio.sleep(0) # 这里必须加上这句才能捕获用户中断
            yield " <^>" + response
    except asyncio.CancelledError:
        # Force stop
        pass

@app.post("/ ")
async def create_item(request: Request):
    json_post_raw = await request.json() # 等待客户端数据
    json_post = json.dumps(json_post_raw)
    json_post_list = json.loads(json_post)
    prompt = json_post_list.get(' prompt ' )
    history = json_post_list.get(' history ' )
    max_length = json_post_list.get(' max_length ' )![ref3]
    top_p = json_post_list.get(' top_p ' )
    temperature = json_post_list.get(' temperature ' )
    return StreamingResponse(process(prompt, history))
```

这里使用了 ChatGLM 的 stream_chat 接口，并在模型的返回数据上加入特殊字符串用于区分数据的边界。对于客户端，可以利用下面的参考代码调用服务器的 API。

```python linenums="1"
# 构造请求体并发送 POST 请求
response = requests.post(api_url, json=payload, headers=headers, stream=True)
# response.encoding = ' utf -8'
# 检查响应状态码
last_line = ' '
try:
    if response.status_code == 200:
    # 逐行迭代接收数据
    for line in response.iter_content(chunk_size=None):
        if line:
        # 找到回答的起始标记
        idx = line.rfind(b' <^>' )
        if (idx < 0):
            continue
        # 解码为 UTF-8 字符串
        utf8_line = line[idx+3:].decode('utf-8' )
        # 在这里处理每行接收到的数据
        last_line = utf8_line
        os.system('clear')
        print(last_line, flush=True)
    else:
        print( "请求失败:", response.status_code)
except:
    err = traceback.format_exc()
    print(err)
```
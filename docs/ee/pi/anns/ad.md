5. 模数转换（<a name="_page79_x72.00_y656.95"></a> **AD**）与数模转换（ **DA**）

把模拟量转换为数字量的设备称为模数（ A/D）转换器。在单端输入情况下， A/D 转化启动时，对 A/D 输入的模拟信号与地之间的差值与 A/D 的最小分辨率比较，根据比较的值量化输出得到最终的 AD 值

（如图 [8.11](#_page80_x72.00_y64.23)）。 A/D 的最小分辨率与 A/D 的位数有关。如在 8bit 条件下， A/D 的最小分辨电压为：

V = VREF − VAGND

lsb 256


5. 模数转换（ AD）与数模转换（ DA） 75

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.119.jpeg)

<a name="_page80_x72.00_y64.23"></a>图 8.11: 单端 A/D 原理

把数字量转换为模拟量的设备称为数模（ D/A）转换器。如图 [8.12，](#_page80_x72.00_y425.23)数模转换根据输入（ 8bit 数据）进 行 8bit->256 译码，将译码的输出值驱动分档开关，最后输出不同的电压值，完成 D/A 转换。

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.120.png)

<a name="_page80_x72.00_y425.23"></a>图 8.12: 数模转换原理

PCF8591 芯片也挂载在树莓派的 I2C 总线上，其内部框图如图 [8.13](#_page81_x72.00_y64.23)所示。

扩展板上 PCF8591 的 A0/A1/A2 均接低电平，根据 PCF8591 地址配置规则（表 [8.1](#_page81_x72.00_y338.63)），PCF8591 的 地址为 0x48。PCF8591 集成了多路 AD/DA 功能，在使用其功能时，需要对其控制寄存器进行控制，控制 寄存器的定义如图 [8.14](#_page82_x72.00_y64.23)所示：

76 第八章 人工神经网络

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.121.jpeg)

<a name="_page81_x72.00_y64.23"></a>图 8.13: PCF8591 内部框图 <a name="_page81_x72.00_y338.63"></a>表 8.1: PCF8591 地址配置



| 位   | 7   | 6   | 5   | 4   | 3   | 2   | 1   |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| 地址 | 1   | 0   | 0   | 1   | A2  | A1  | A0  |

控制寄存器共有 8bit，通过配置不同 bit，来实现 A/D 工作模式、通道选择及 D/A 输出功能的定义。 A/D 的参考代码如下：

import smbus

import time # 包含相关库文件

address = 0x48

A0 = 0x40

bus = smbus.SMBus(1) # 初始化 i2c Bus

while True:

bus.write\_byte(address,A0)

value = bus.read\_byte(address) # 循环读出 time.sleep(1)

D/A 的参考代码如下：

import smbus

import time # 包含相关库文件

address = 0x48

A0 = 0x40

bus = smbus.SMBus(1) # 初始化 i2c Bus

while True:

bus.write\_byte\_data(address, cmd, value) # 循环写入 .... # 省略其它代码

smbus 的使用可以使用 pydoc smbus 命令来查看。

6. 动手实验：通过手势识别实时控制发光二极管亮度 77

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.122.jpeg)

<a name="_page82_x72.00_y64.23"></a>图 8.14: PCF8591 控制寄存器定义

![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.123.png)

图 8.15: PCF8591 D/A 接口时序

# SPI OLED 显示模块

## SPI 总线传输原理

SPI（Serial Peripheral Interface）接口标准广泛用于微处理器与外部设备之间的数据交互，如一些传感器芯片、控制芯片、LCD 等。该标准最早由 Motorola 公司提出，目前由 NXP 公司进行标准的维护。

SPI 接口采用主从方式进行全双工的数据传输，其引脚包含四条信号线，具体定义如表 5.1 所示。

表 5.1: SPI 引脚定义

| 名称 | 位宽 | 功能描述       | 备注                    |
| ---- | ---- | -------------- | ----------------------- |
| SCLK | 1    | 串口时钟       | 由主设备（ Master）提供 |
| MOSI | 1    | 主设备数据输出 | Master Output Slave In  |
| MISO | 1    | 从设备数据输出 | Master In Slave Output  |
| SS   | 1    | 从设备片选信号 | Slave Select            |

## SPI 连接模式

典型主从设备连接如图 5.3 所示。

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.3: SPI 典型主从设备连接方式</figcaption>
</figure>

SPI 主设备支持多个 SPI 从设备连接，主要有两种方式：并行连接及链式连接。并行连接方式 SPI 需 要多个片选信号线区别多个从设备；链式链接仅需要一根片选线，从设备的输入连接到下一个从设备的输入。

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.4: SPI 主从设备并行连接方式</figcaption>
</figure>

## SPI 传输方式配置

如图 5.6 所示，当有数据传输时， SPI 主设备产生串行时钟，通过移位寄存器将数据逐 bit 进行传输，根 据所配置的传输模式，从设备进行数据采样，完成数据接收。

时钟极性（CPOL）和时钟相位（CPHA）用于设定从设备何时采样数据，图 5.7 和 5.8 给出了不同配置 下的数据采样位置。两种传输模式中， SCK 与数据的相对位置不同，因此，在两种模式下对于数据采样位 置有不同要求，CPHA=1 模式下，采样位置比 SCK 晚半个时钟周期。

SPI 波特率时钟由波特率控制寄存器决定，波特率由如下公式决定，具体算法需要参考处理器的芯片手册：

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.5: SPI 主从设备链式连接方式</figcaption>
</figure>

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.6: SPI 传输</figcaption>
</figure>

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.7: CPHA=0 SPI 传输时序图 BusClock</figcaption>
</figure>

$$
BaudRate = \frac{BusClock}{BaudRateDivisor}
$$

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.8: CPHA=1 SPI 传输时序图</figcaption>
</figure>

4. 树莓派的 SPI 接口

不同的树莓派版本可能包含不同数量的 SPI 接口，其中所有树莓派都支持 SPI0 接口，其具体定义如 表 5.2 所示，注意这里的 SS 官脚被称为 CE（ Chip Enable），因此 SPI0 接口包含两个片选信号，可以连接两个 SPI 从设备。

| 管脚定义 | 接口编号 | 管脚名称 | 管脚功能     |
| -------- | -------- | -------- | ------------ |
| MOSI     | 19       | GPIO10   | SPI0_MOSI   |
| MISO     | 21       | GPIO09   | SPI0_MISO   |
| SCLK     | 23       | GPIO11   | SPI0_SCLK   |
| CE0      | 24       | GPIO08   | SPI0_CE0_N |
| CE1      | 26       | GPIO07   | SPI0_CE1_N |

表 5.2: 树莓派 SPI0 管脚定义

除了第一代的树莓派，其它版本还支持 SPI1 接口，具体定义如表 5.3 所示，它支持三个片选信号。

| 管脚定义 | 接口编号 | 管脚名称 | 管脚功能     |
| -------- | -------- | -------- | ------------ |
| MOSI     | 38       | GPIO20   | SPI1_MOSI   |
| MISO     | 35       | GPIO19   | SPI1_MISO   |
| SCLK     | 40       | GPIO21   | SPI1_SCLK   |
| CE0      | 12       | GPIO18   | SPI1_CE0_N |
| CE1      | 11       | GPIO17   | SPI1_CE1_N |
| CE3      | 36       | GPIO16   | SPI1_CE2_N |


表 5.3: 树莓派 SPI1 管脚定义

而对于树莓派 4 来说，它还支持 SPI3、SPI4、SPI5 和 SPI6，具体的管脚定义不在这里列出，感兴趣的 读者可以参考数据手册。

## OLED 设备及访问

动手实验中采用 128 × 64 点阵的 OLED 显示屏，使用 SSD1306 驱动芯片驱动。 SSD1306 支持多种 数据接口类型如 8bit 68xx/80xx 并行数据接口， SPI 数据接口、 I2C 数据接口。具体支持接口类型由相关 寄存器配置确定，在实验中我们采用 SPI 数据接口类型。

SPI 支持 3 线、4 线接口，其主要区别在于 4 线接口中多余的一根线用来做数据及命令指示，本实验中

采用 4 线接口类型。 SSD1306 与树莓派的主要连接如图 5.9 所示，4 线接口的时序如图 5.10 所示。其中 CS# 为片选，低电平有效，D/C# 为数据命令指示信号，低电平表示当前传输的内容为命令，高电平表示当前传输的内容为数据。

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.9: 树莓派与驱动芯片的连接</figcaption>
</figure>

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.10: 4 线 SPI 传输时序</figcaption>
</figure>

显示屏由驱动芯片的列驱动（SEG0–SEG127）和行驱动（COM0–COM63）管脚进行控制，当行驱动有效时，128 个列驱动管脚用来决定当前行的显示，因此显示屏的显示内容会一行一行的依次更新，直到整个 屏幕内容更新完毕。控制器内部通过一个存储器保存当前的显示内容，由于 SSD1306 驱动的是单色显示 模块，因此每个点只需要一个比特信息进行保存，一共需要 128× 8 个字节的存储空间，这些存储空间分成了 8 个页（从 PAGE0 到 PAGE7），每页存储器保存 8 个行的显示内容。具体如图 5.11 所示。

<figure markdown="span">
  ![alt text](../../../assets/images/ee/pi/.png){ width="300" }
  <figcaption>图 5.11: SSD1306 的 PAGE2 内存布局</figcaption>
</figure>

图 5.11 展示的是显示模块第 16 到第 23 行的显示内容，其中每个小方格代表一个像素点。在 SSD1306 中有三种地址模式 : 页地址模式 , 水平地址模式和垂直地址模式 , 模块可以通过 SPI 接口写入控制命令， 其中控制地址模式的命令为 0x20，具体方式是通过 SPI 接口发送命令字 0x20，然后发送命令参数，0x00 代表水平地址模式， 0x01 代表垂直地址模式， 0x10 代表页地址模式（复位缺省值）。

- 在水平地址模式下，每次写入点阵数据后 “列地址 ” 自动加 1，准备好下一个存储地址，从而实现连续 更改显示内容的功能。在此模式下写完一个页会自动换到下一个页的首地址，写完全部的页会自动 换到第一页首地址。
- 在垂直地址模式下，每次写入点阵数据后 “页地址 ” 自动加 1，写完全部页后切换到第一页，同时 “列 地址 ” 自动加 1，写完最后一列会自动换到第一列地址。此模式下可以按列更新显示内容，而水平模 式是按行更新内容。
- 在页地址模式下，写入模式与水平地址模式类似，只是页地址不再更新。

完整的 SSD1306 命令列表可以参考其数据手册，这里不再举例。

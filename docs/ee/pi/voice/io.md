# 树莓派音频输入输出方法

树莓派提供了音频输入和输出接口，其中音频输出使用 3.5mm 耳机接口，音频输入可以使用 USB 2.0 接口接入 USB 麦克风。

实验采用免驱 USB 麦克风，直接插入树莓派上的 USB 2.0 即可，不需要再安装驱动，可以录制一段音 频，验证麦克风是否正常工作。首先，使用 arecord -l 可以列出所有录音设备，一般输出如下：

\*\*\*\* List of CAPTURE Hardware Devices \*\*\*\*

card 2: Device [USB PnP Sound Device], device 0: USB Audio [USB Audio]

Subdevices:1/1

Subdevice #0: subdevice #0

同样地， aplay -l 可以列出所有播放设备。

可执行 Linux 自带的录音 /播放命令，测试硬件是否正常： sudo arecord -D “ plughw:1,0” -d 5 test.wav

aplay -D hw:1,0 test.wav

arecord 是录音命令，其中 hw:2,0 表示 arecord -l 命令中列出的 card 2、device 0，如果你的 USB 声卡 录音设备与这里显示不同，还要进行相应修改， aplay 命令也是如此。

另外树莓派还带有一个具有硬件加速的视频播放程序 —omxplayer—这里也可以用它进行播放：

omxplayer -o local test.wav

如果播放音频没有声音，还可以通过 sudo raspi-config 设置当前音频播放设备为 Headphones 看 是否可以解决。具体设置路径在 Advanced Options 下面的 Audio 菜单中。

在 Python 中执行录音命令需要 pyaudio 模块，要使用 PyAudio，首先使用 pyaudio.PyAudio() 实例 化 PyAudio；要录制或播放音频，使用 pyaudio.PyAudio.open() 在设备上打开所需音频参数的流，即设置

了 pyaudio.Stream：

1 CHUNK = 1024![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.139.png)

2 FORMAT = pyaudio.paInt16

3 CHANNELS = 2

4 RATE = 44100

5 p = pyaudio.PyAudio()

6 stream = p.open ( format=FORMAT, 7 channels=CHANNELS,

8 rate=RATE,

88

1. HMM-GMM 模型介绍 89

9 input=True,![ref5]

10 frames\_per\_buffer=CHUNK)

使用 pyaudio.Stream.write() 或 pyaudio.Stream.read() 录制或播放音频。需要注意的是，在”阻塞模

式”，每个 pyaudio.Stream.write() 或 pyaudio.Stream.read() 阻塞直到操作完成；要动态生成音频数据或 立即处理正在录制的音频数据，需要使用“回调”模式。使用 pyaudio.Stream.stop\_stream() 暂停播放 /录 制，并 pyaudio.Stream.close() 终止流。最后，使用 pyaudio.PyAudio.terminate() 终止 portaudio 会话。录 制的数据以 .wav 格式保存，需要调用 wave 库：

1 wf = wave. open (filename, ' wb' )![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.140.png)

2 wf.setnchannels(CHANNELS)

3 wf.setsampwidth(p.get\_sample\_size(FORMAT)) 4 wf.setframerate(RATE)

5 wf.writeframes(data)
# 动手实验：手写数字识别

1. <a name="_page50_x72.00_y193.30"></a>实验目的
1. 了解 SPI 总线传输的原理。
1. 了解 OLED 设备基本原理。
1. 掌握支持向量机的基本原理
2. 实验步骤
1. **OLED** 设备测试
1. 通过 SPI 设备访问 OLED，在显示屏上显示 “hello world!”。
1. 使用 OLED 显示模块显示一幅图片
2. 验证支持向量机示例代码

将示例代码在树莓派上运行，查看运行结果，理解程序输出的评价指标。试着修改使用不同的核函数， 查看运行结果。

3. 使用 **OLED** 显示结果

将预测的图像和预测结果都显示在 OLED 上，每次显示一副图像，通过按键控制显示下一副图像。

由于 OLED 显示屏是单色显示，分辨率也比提供的图像高，因此需要利用 Image 库中的 resize 函数 转换一下，示例如下：

1 # kk 中 保 存 了 图 像 的 原 始 数 据![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.087.png)

2 digit = Image.fromarray((kk\*8).astype(np.uint8), mode=' L' ).resize((48,48)).

convert(' 1' )

3 img = Image.new(' 1' ,(disp.width,disp.height),' black ' )

4 img.paste(digit, (0, 16, digit.size[0], digit.size[1]+16))

5 disp.clear()

6 disp.image(img)

7 disp.display()

4. 使用摄像头读入手写数字 在白纸上写一位数字，通过摄像头读入，并处理成符合算法输入的格式，通过训练好的模型进行识别。
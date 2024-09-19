1. 未名教学二号集群使用说明

<a name="_page105_x72.00_y137.31"></a>请至少提前一周申请未名教学二号集群账号： http://hpc.pku.edu.cn/guide.html，申请成功后可以使 用 ssh 或 Putty 远程登陆集群。

集群使用教程参见： http://hpc.pku.edu.cn/\_book/guide/soft\_env/python.html，重点参考“ 5. 使用 软件“部分的” 5.5.python”中的内容。

在集群上运行 Python 程序时，每个人需要在 conda 里创建一个自己的虚拟环境，再在自己的虚拟环 境里运行，所用到的库都需要自己安装，但在集群上安装库比较方便。

1 module avial anaconda # 查 看 可 用 的 conda 环 境![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.159.png)

2 module load anaconda/3.7.1 # 载 入 可 用 的 conda 环 境

3 conda create -n myEnvPython python=<version> # 创 建 虚 拟 环 境 4 source activate myEnvPython # 进 入 已 创 建 的 虚 拟 环 境

进入虚拟环境后通过 pip install 或 conda install 安装需要的库

任务提交方式：参考上述链接中的“ 6. 作业调度系统”，注意：不能直接在集群上运行任务，需要按教程 中的方式编写脚本后，通过提交任务的方式执行。

1 sinfo 查看可用的分区和节点 ![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.160.png)2 sbatch 提交任务

3 squeue 查看任务运行状态

脚本 job.sh 的示例如下：

1  #!/ bin / bash![](Aspose.Words.b353301d-f3c7-44fc-a0ef-0183eb531768.161.png)
1  #SBATCH- o nohup . out
1  #SBATCH- p compute
1  #SBATCH- q normal
1  #SBATCH- J word2vec
1  #SBATCH-- time =24:00:00 7

8 python3 main.py

通过 sbatch job.sh 提交任务，通过 squeue 查看任务状态。

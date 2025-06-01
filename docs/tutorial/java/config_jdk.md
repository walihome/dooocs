---
title: 配置JDK
order: 0
head:
  - - meta
    - name: description
      content: 配置JDK
  - - meta
    - name: keywords
      content: JDK 配置JDK
---
# 配置JDK

## 1：下载安装
访问[下载链接](https://www.oracle.com/java/technologies/downloads/#java21)，下载JDK文件，推荐java21；

下载完成后，双击下载的 JDK 安装包（.dmg 文件），然后按照安装向导的指示进行安装。


## 2：配置环境变量
访问[查看mac终端类型](https://www.dooocs.com/doc/note/%E6%89%93%E9%80%A0%E9%AB%98%E6%95%88%E7%9A%84mac/shell_type.html)判断终端类型，为`zsh`or `bash`

打开终端应用程序，并输入以下命令：
::: code-group
```shell [zsh]
vim ~/.zshrc
```
```shell [bash]
vim ~/.bash_profile
```
:::
这将打开一个文本编辑器，在其中您可以编辑您的 bash 配置文件。

在打开的文本编辑器中，将以下行添加到文件的末尾：
```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/<jdk_version>/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```
请注意，将 `<jdk_version>` 替换为您下载的 JDK 版本号。例如，如果您下载的是 JDK 11，则路径应为 `/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home`。

保存文件并关闭文本编辑器。然后，在终端中运行以下命令以使更改生效：
::: code-group
```shell [zsh]
source ~/.zshrc
```
```shell [bash]
source ~/.bash_profile
```
:::

## 3：验证
重新打开终端应用程序，并输入以下命令：
```
java -version
```
如果您看到类似于以下内容的输出，说明 Java 安装成功：
```
java version "11.0.12" 2021-07-20 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.12+8-LTS-237)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.12+8-LTS-237, mixed mode)
```

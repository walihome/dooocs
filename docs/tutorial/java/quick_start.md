---
title: 快速开始
order: 0
head:
  - - meta
    - name: description
      content: 介绍Java基础的语法内容，对Java有一个基础的了解
  - - meta
    - name: keywords
      content: Java 基础语法 basic grammer 注释 变量
---
# 快速开始
## Java环境安装-mac os

### 1：检查是否已安装Java
打开终端应用程序（Terminal），输入以下命令并按下回车键：
```
java -version
```
如果您已经安装了 Java，终端将显示已安装的 Java 版本信息。如果没有安装，您将看到一条类似于“command not found”的错误消息。

### 2：下载 Java （JDK）
访问 Oracle 官方网站的 Java 下载页面：https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

在页面上找到适用于 macOS 的最新版本的 JDK 下载链接，并点击下载。请注意，您需要有 Oracle 账户才能下载 JDK。

### 3：安装 JDK
下载完成后，双击下载的 JDK 安装包（.dmg 文件），然后按照安装向导的指示进行安装。

### 4：配置环境变量
打开终端应用程序，并输入以下命令：
```
nano ~/.bash_profile
```
这将打开一个文本编辑器，在其中您可以编辑您的 bash 配置文件。

在打开的文本编辑器中，将以下行添加到文件的末尾：
```
export JAVA_HOME=/Library/Java/JavaVirtualMachines/<jdk_version>/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```
请注意，将 `<jdk_version>` 替换为您下载的 JDK 版本号。例如，如果您下载的是 JDK 11，则路径应为 `/Library/Java/JavaVirtualMachines/jdk-11.jdk/Contents/Home`。

保存文件并关闭文本编辑器。然后，在终端中运行以下命令以使更改生效：
```
source ~/.bash_profile
```

步骤 5：验证安装
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

恭喜！您已经成功配置了 Java 安装环境。

希望这个教程对您有所帮助！如果您有任何其他问题，请随时提问。

## 写一个hello world
当然可以！以下是一个简单的Java快速入门示例：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

这是一个经典的Hello World程序。它定义了一个名为HelloWorld的类，其中包含一个名为main的方法。在main方法中，我们使用System.out.println语句打印出"Hello, World!"。

要运行这个程序，您需要安装Java开发工具包（JDK）并配置好您的开发环境。然后，将上述代码保存为HelloWorld.java文件，并在命令行中使用以下命令进行编译和运行：

```
javac HelloWorld.java
java HelloWorld
```

编译命令javac将源代码编译为字节码文件，而java命令将运行字节码文件。

希望这可以帮助您入门Java编程！如果您有任何其他问题，请随时提问。

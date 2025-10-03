---
title: 开发环境搭建
category: Java
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 开发环境搭建

在开始编写 Java 程序之前,你需要先准备好两样东西:让计算机能够运行 Java 程序的**运行环境(JRE)**,以及帮助你编写代码的**开发工具包(JDK)**。

## 💡 为什么需要搭建环境?

你可以把这个过程想象成:
- **JDK(Java Development Kit)** = 一套完整的工具箱,包含编译器、运行环境等
- **编译器(Compiler)** = 把你写的代码翻译成计算机能理解的语言
- **运行环境(JRE)** = 让翻译后的程序在你的电脑上运行起来

## 📥 下载并安装 JDK

### Windows 系统

**步骤1: 下载 JDK**

访问 Oracle 官网下载页面:
```
https://www.oracle.com/java/technologies/downloads/
```

选择 **Java 17** 或更高版本,点击 **Windows** 标签,下载 `x64 Installer` 版本。

::: tip 提示
Java 17 是长期支持版本(LTS),适合初学者使用。
:::

**步骤2: 安装 JDK**

1. 双击下载的 `.exe` 文件
2. 一路点击 "Next",保持默认选项即可
3. 记住安装路径(通常是 `C:\Program Files\Java\jdk-17`)

**步骤3: 配置环境变量**

这一步是为了让你在任何位置都能使用 Java 命令。

1. 右键点击 "此电脑" → 选择 "属性"
2. 点击 "高级系统设置" → "环境变量"
3. 在 "系统变量" 区域点击 "新建":
   - 变量名: `JAVA_HOME`
   - 变量值: `C:\Program Files\Java\jdk-17` (你的实际安装路径)
4. 找到 "系统变量" 中的 `Path`,点击 "编辑" → "新建"
5. 添加: `%JAVA_HOME%\bin`
6. 一路点击 "确定" 保存

### macOS 系统

**步骤1: 下载 JDK**

同样访问 Oracle 官网:
```
https://www.oracle.com/java/technologies/downloads/
```

选择 **Java 17**,点击 **macOS** 标签:
- **Apple Silicon (M1/M2/M3 芯片)**: 下载 `ARM64 DMG Installer`
- **Intel 芯片**: 下载 `x64 DMG Installer`

::: warning 注意
不确定你的 Mac 是什么芯片?点击左上角苹果图标 → "关于本机" → 查看 "芯片" 信息。
:::

**步骤2: 安装 JDK**

1. 双击下载的 `.dmg` 文件
2. 双击 `.pkg` 安装包
3. 按照提示输入密码,完成安装

**步骤3: 配置环境变量**

macOS 的环境变量配置在终端(Terminal)中完成:

1. 打开 "终端" 应用(在 "启动台" → "其他" 中找到)
2. 输入以下命令查看使用的 Shell:

```bash
echo $SHELL
```

3. 根据结果编辑对应的配置文件:

如果显示 `/bin/zsh` (macOS 默认):
```bash
nano ~/.zshrc
```

如果显示 `/bin/bash`:
```bash
nano ~/.bash_profile
```

4. 在打开的编辑器中,添加以下内容:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```

5. 按 `Control + X`,然后按 `Y`,最后按 `Enter` 保存
6. 让配置生效:

```bash
source ~/.zshrc
```

## ✅ 验证安装

无论是 Windows 还是 macOS,都需要验证 JDK 是否安装成功。

**Windows**: 打开 "命令提示符"(搜索 `cmd`)  
**macOS**: 打开 "终端"

输入以下命令:

```bash
java -version
```

如果看到类似这样的输出,就说明安装成功了:

```
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

再输入:

```bash
javac -version
```

应该看到:

```
javac 17.0.9
```

::: danger 警告
如果提示 "不是内部或外部命令" 或 "command not found",说明环境变量配置有误,请重新检查上述步骤。
:::

## 🎉 编写第一个 Java 程序

现在环境已经准备好了,让我们写一个简单的程序来测试一下。

**步骤1: 创建项目文件夹**

在桌面或任意位置创建一个文件夹,命名为 `JavaLearning`。

**步骤2: 创建 Java 文件**

在 `JavaLearning` 文件夹中,创建一个文本文件,命名为 `HelloWorld.java`。

::: warning 注意
- 扩展名必须是 `.java`,不是 `.txt`
- Windows 用户需要在文件资源管理器中显示扩展名(查看 → 勾选 "文件扩展名")
:::

**步骤3: 编写代码**

用记事本(Windows)或文本编辑(macOS)打开 `HelloWorld.java`,输入以下代码:

```java{1,3}
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

保存文件。

**步骤4: 编译并运行**

打开命令行工具,进入 `JavaLearning` 文件夹:

**Windows**:
```bash
cd Desktop\JavaLearning
```

**macOS**:
```bash
cd ~/Desktop/JavaLearning
```

编译 Java 文件:

```bash
javac HelloWorld.java
```

如果没有任何错误提示,说明编译成功。此时文件夹中会生成一个 `HelloWorld.class` 文件。

运行程序:

```bash
java HelloWorld
```

你会看到:

```
Hello, Java!
```

## 💪 练习题

1. **修改输出内容**: 把程序中的 `"Hello, Java!"` 改成 `"我的第一个 Java 程序"`,重新编译运行
2. **验证环境**: 在不同的文件夹位置打开命令行,输入 `java -version`,确认无论在哪里都能看到版本信息

## 📌 小结

- **JDK** 包含了编写和运行 Java 程序的所有工具
- **环境变量** 让你可以在任何位置使用 Java 命令
- **编译(javac)** 把 `.java` 文件转换成 `.class` 文件
- **运行(java)** 执行编译后的 `.class` 文件
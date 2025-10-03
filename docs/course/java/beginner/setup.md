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

在开始写 Java 代码之前,你需要先准备好开发工具。就像做饭需要准备厨具一样,写代码也需要准备编程工具。

## 💡 需要安装什么?

我们需要安装两个东西:

1. **JDK(Java Development Kit)** - Java 开发工具包,让你的电脑能运行 Java 程序
2. **IDE(Integrated Development Environment)** - 集成开发环境,一个专门用来写代码的软件

::: tip 为什么需要 JDK?
你的电脑默认是"听不懂" Java 语言的,JDK 就像一个翻译官,把你写的 Java 代码翻译成电脑能理解的指令。
:::

## 安装 JDK

### Windows 系统安装

**步骤 1**: 下载 JDK

访问 Oracle 官网: https://www.oracle.com/java/technologies/downloads/

选择 **Java 17** 或 **Java 21** (推荐新手使用长期支持版本)

点击 **Windows** 标签,下载 **x64 Installer** (`.exe` 文件)

**步骤 2**: 安装 JDK

双击下载的 `.exe` 文件,按照安装向导点击"下一步"即可。

::: warning 注意安装路径
记住安装路径,例如: `C:\Program Files\Java\jdk-17`
后续配置会用到。
:::

**步骤 3**: 验证安装

按下 `Win + R`,输入 `cmd`,按回车打开命令提示符。

输入以下命令:

```bash
java -version
```

如果看到类似下面的信息,说明安装成功:

```bash
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
```

### macOS 系统安装

**步骤 1**: 下载 JDK

访问 Oracle 官网: https://www.oracle.com/java/technologies/downloads/

选择 **Java 17** 或 **Java 21**

点击 **macOS** 标签:
- **Apple Silicon (M1/M2/M3 芯片)**: 下载 **Arm 64 DMG Installer**
- **Intel 芯片**: 下载 **x64 DMG Installer**

::: tip 如何确认芯片类型?
点击屏幕左上角  图标 → **关于本机**,查看"芯片"或"处理器"信息。
:::

**步骤 2**: 安装 JDK

双击下载的 `.dmg` 文件,按照提示完成安装。

**步骤 3**: 验证安装

按下 `Command + 空格`,输入 `terminal`,打开终端。

输入以下命令:

```bash
java -version
```

看到版本信息即表示安装成功。

## 安装 IntelliJ IDEA

IntelliJ IDEA 是目前最流行的 Java IDE,它能帮你自动补全代码、发现错误、运行程序。

### 下载与安装

**步骤 1**: 访问官网

https://www.jetbrains.com/idea/download/

**步骤 2**: 选择版本

选择 **Community Edition (免费版)** - 对新手来说功能已经足够。

根据你的操作系统选择对应版本下载。

**步骤 3**: 安装

- **Windows**: 双击 `.exe` 文件,按提示安装即可
- **macOS**: 打开 `.dmg` 文件,将 IDEA 图标拖到"应用程序"文件夹

### 首次启动配置

**步骤 1**: 启动 IDEA

第一次打开会询问是否导入配置,选择 **Do not import settings**。

**步骤 2**: 选择主题

根据个人喜好选择 **Light (浅色)** 或 **Dark (深色)** 主题。

**步骤 3**: 创建第一个项目

点击 **New Project**

填写项目信息:
- **Name**: 输入 `HelloJava`
- **Location**: 选择保存位置(默认即可)
- **Language**: 选择 **Java**
- **Build System**: 选择 **IntelliJ**
- **JDK**: 如果显示已安装的 JDK 版本,直接选择;如果没有,点击 **Add JDK** 手动选择安装路径

点击 **Create** 创建项目。

## 💪 实践:运行第一个 Java 程序

让我们验证环境是否正常工作。

### 创建 Java 文件

在 IDEA 左侧项目树中:

1. 展开 `HelloJava` → `src` 文件夹
2. 右键点击 `src` → **New** → **Java Class**
3. 输入 `HelloWorld`,按回车

### 编写代码

在打开的文件中输入以下代码:

```java{5}
public class HelloWorld {
    public static void main(String[] args) {
        // 打印欢迎信息
        System.out.println("Hello, Java!");
        System.out.println("我的第一个 Java 程序!");
    }
}
```

::: tip 代码输入技巧
在 IDEA 中输入 `psvm` 然后按 `Tab` 键,会自动生成 `public static void main` 方法。
输入 `sout` 然后按 `Tab` 键,会自动生成 `System.out.println()` 语句。
:::

### 运行程序

点击代码编辑区左侧第 1 行旁边的绿色三角形 ▶️,选择 **Run 'HelloWorld.main()'**。

**运行结果**:

在 IDEA 底部的控制台窗口中,你会看到:

```
Hello, Java!
我的第一个 Java 程序!
```

::: warning 如果运行失败
检查以下几点:
- 文件名 `HelloWorld` 是否与代码中 `class HelloWorld` 一致
- 代码是否有拼写错误(注意大小写)
- JDK 是否正确配置
:::

## 💪 练习

尝试修改代码,让程序输出你自己的名字和今天的日期。

<details>
<summary>点击查看参考答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("我是张三");
        System.out.println("今天是 2025年10月3日");
    }
}
```

</details>

## 📌 小结

- **JDK** 是运行 Java 程序的必备工具,通过 `java -version` 验证安装
- **IntelliJ IDEA** 是写代码的工具,Community 版本免费且功能足够
- 创建项目 → 新建类 → 编写代码 → 运行,这是你今后的基本工作流程
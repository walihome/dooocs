---
title: hello world
category: Java
order: 2
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

 ## Hello World 程序

### 概念 Explanation

**Hello World 程序**是每个程序员学习新编程语言时编写的第一个程序。它的作用非常简单：在屏幕上显示 "Hello World" 这段文字。

::: tip 为什么要从 Hello World 开始？
1. **验证环境**：确认你的 Java 开发环境已经正确安装
2. **理解流程**：体验从编写代码到运行程序的完整过程
3. **建立信心**：成功运行第一个程序会给你巨大的成就感 🎉
:::

在 Java 中，一个程序从编写到运行需要经历两个关键步骤：

1. **编译（Compile）**：将人类可读的 `.java` 源代码文件翻译成计算机能理解的 `.class` 字节码文件
2. **运行（Run）**：Java 虚拟机（JVM）执行编译好的字节码文件

![Java 程序执行流程图](java-execution-flow-placeholder.png)

### 代码示例 Code Examples

#### 第一步：创建项目文件夹

首先，我们需要一个专门的文件夹来存放我们的 Java 代码。

::: tip 良好的习惯
给每个项目创建独立的文件夹，保持代码整洁有序
:::

**Windows 系统：**

```bash
# 打开命令提示符（Win + R，输入 cmd）
# 创建项目文件夹
mkdir C:\JavaProjects\HelloWorld
# 进入文件夹
cd C:\JavaProjects\HelloWorld
```

**macOS/Linux 系统：**

```bash
# 打开终端
# 创建项目文件夹
mkdir -p ~/JavaProjects/HelloWorld
# 进入文件夹
cd ~/JavaProjects/HelloWorld
```

![创建项目文件夹](create-folder-placeholder.png)

#### 第二步：编写 Java 代码

使用任何文本编辑器（推荐使用 **VS Code**、**Notepad++** 或 **记事本**）创建一个名为 `HelloWorld.java` 的文件。

::: warning 文件名必须匹配
Java 文件名必须与类名完全一致，包括大小写！`HelloWorld.java` 中的类名必须是 `HelloWorld`
:::

在文件中输入以下代码：

```java
// 这是我的第一个 Java 程序
public class HelloWorld {
    public static void main(String[] args) {
        // 在控制台输出 Hello World
        System.out.println("Hello World");
    }
}
```

![编写代码](write-code-placeholder.png)

**代码解释：**

让我们逐行理解这段代码：

- `// 这是我的第一个 Java 程序`：**注释（Comment）**，用来说明代码的作用，不会被执行
- `public class HelloWorld`：定义一个名为 `HelloWorld` 的**公共类（Public Class）**
- `{}`：**大括号（Curly Braces）**表示代码块的范围，类的内容写在这对大括号之间
- `public static void main(String[] args)`：**主方法（Main Method）**，是程序的入口点，程序从这里开始执行
- `System.out.println("Hello World")`：**输出语句（Print Statement）**，在控制台打印文字

::: tip 理解主方法
可以把 `main` 方法想象成一本书的第一页，程序运行时会自动从这里开始读取。每个 Java 程序必须有一个 `main` 方法
:::

#### 第三步：编译 Java 程序

现在我们要把人类可读的代码翻译成计算机能理解的语言。

在命令行中（确保你在 `HelloWorld` 文件夹内），输入以下命令：

```bash
javac HelloWorld.java
```

![编译程序](compile-placeholder.png)

**命令说明：**
- `javac`：**Java 编译器（Java Compiler）**的命令
- `HelloWorld.java`：要编译的源代码文件名

**验证编译是否成功：**

编译成功后，文件夹中会生成一个新文件 `HelloWorld.class`（字节码文件）。

**Windows 系统查看：**
```bash
dir
```

**macOS/Linux 系统查看：**
```bash
ls
```

你应该看到两个文件：
- `HelloWorld.java`（源代码文件）
- `HelloWorld.class`（编译后的字节码文件）

![查看编译结果](view-files-placeholder.png)

::: danger 常见编译错误
如果出现错误，检查以下几点：
1. 文件名是否为 `HelloWorld.java`（大小写必须一致）
2. 代码是否完全按照示例输入（包括标点符号）
3. 是否在正确的文件夹内执行命令
:::

#### 第四步：运行 Java 程序

编译成功后，就可以运行程序了！

```bash
java HelloWorld
```

![运行程序](run-program-placeholder.png)

**命令说明：**
- `java`：**Java 运行时环境（Java Runtime）**的命令
- `HelloWorld`：要运行的类名（注意：这里不需要 `.class` 后缀）

**预期输出：**

```
Hello World
```

::: tip 🎉 恭喜你！
如果你看到了 "Hello World" 输出，说明你已经成功运行了第一个 Java 程序！这是编程之旅的重要里程碑。
:::

#### 完整流程回顾

```bash
# 1. 创建并进入项目文件夹
mkdir HelloWorld
cd HelloWorld

# 2. 创建 HelloWorld.java 文件并编写代码

# 3. 编译程序
javac HelloWorld.java

# 4. 运行程序
java HelloWorld
```

### 练习 Exercises

#### 练习 1：修改输出内容 ✏️

修改 `HelloWorld.java` 文件，让程序输出你的名字。

**提示：**
```java
System.out.println("你的名字");
```

**步骤：**
1. 修改代码
2. 重新编译：`javac HelloWorld.java`
3. 运行程序：`java HelloWorld`

::: tip 编程小技巧
每次修改代码后，都需要重新编译才能看到效果
:::

#### 练习 2：输出多行文字 📝

让程序输出三行内容：
```
Hello World
Welcome to Java
Let's start coding
```

**提示：** 使用三个 `System.out.println()` 语句

<details>
<summary>点击查看答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 输出第一行
        System.out.println("Hello World");
        // 输出第二行
        System.out.println("Welcome to Java");
        // 输出第三行
        System.out.println("Let's start coding");
    }
}
```

</details>

#### 练习 3：探索 `print` 和 `println` 的区别 🔍

尝试将 `println` 改成 `print`，观察输出有什么不同。

```java
// 版本 1
System.out.println("Hello");
System.out.println("World");

// 版本 2
System.out.print("Hello");
System.out.print("World");
```

**思考：** 这两个版本的输出有什么区别？为什么？

::: tip 答案揭晓
- `println`：输出后会自动换行（**Print Line**）
- `print`：输出后不换行，下一个内容会接着输出
:::

### 常见问题排查 🔧

#### 问题 1：找不到 javac 命令

**错误提示：**
```
'javac' 不是内部或外部命令，也不是可运行的程序
```

**解决方法：**
说明 Java JDK 没有正确配置**环境变量（Environment Variables）**，请返回"开发环境搭建"章节检查配置。

**快速验证：**
```bash
java -version
javac -version
```

#### 问题 2：找不到或无法加载主类

**错误提示：**
```
Error: Could not find or load main class HelloWorld
```

**可能原因：**
1. 没有编译就直接运行（缺少 `.class` 文件）
2. 运行时使用了 `java HelloWorld.class`（不应该加 `.class`）
3. 不在正确的文件夹内

**解决步骤：**
```bash
# 确认当前目录有 HelloWorld.class 文件
dir  # Windows
ls   # macOS/Linux

# 正确的运行命令
java HelloWorld
```

#### 问题 3：编译时出现中文乱码

**原因：** 文件编码与系统编码不一致

**解决方法：**
```bash
# 使用 UTF-8 编码编译
javac -encoding UTF-8 HelloWorld.java
```

::: tip 建议
使用现代代码编辑器（如 VS Code）并设置默认编码为 UTF-8，可以避免这个问题
:::

### 总结 Summary

在本章中，我们完成了编程生涯的第一个重要里程碑：

**核心概念：**
- **Hello World 程序**：验证开发环境的第一个程序
- **编译（Compile）**：使用 `javac` 命令将 `.java` 转换为 `.class`
- **运行（Run）**：使用 `java` 命令执行编译后的程序
- **主方法（Main Method）**：`public static void main(String[] args)` 是程序的入口点
- **输出语句（Print Statement）**：`System.out.println()` 用于在控制台显示内容

**关键步骤：**
1. 创建 `.java` 源代码文件
2. 使用 `javac` 编译生成 `.class` 字节码文件
3. 使用 `java` 运行程序

**重要提醒：**
- 文件名必须与类名完全一致（包括大小写）
- 每次修改代码后必须重新编译
- `println` 会自动换行，`print` 不换行

::: tip 下一步
现在你已经能够编写和运行 Java 程序了！接下来我们将学习 Java 的基本语法，理解程序中每个符号和关键字的含义。
:::
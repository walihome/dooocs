---
title: hello world
category: Java
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # Hello World - 你的第一个 Java 程序

你有没有想过,程序员是如何让计算机"说话"的?今天,你将编写你的第一个 Java 程序,让计算机向世界打招呼。这个简单的程序是每个程序员的起点,就像学习一门新语言时先说"你好"一样。

---

## 💡 什么是 Hello World 程序?

**Hello World** 是编程世界的传统入门程序。它的作用很简单:在屏幕上显示一行文字 "Hello World"。

### 为什么要写这个程序?

想象一下,你刚买了一部新手机,第一件事是什么?打开它,确认能正常使用!Hello World 程序就是用来验证:
- ✅ 你的 Java 开发环境安装正确
- ✅ 你能成功编写并运行代码
- ✅ 你理解了 Java 程序的基本结构

这就像学骑自行车时先推着走几步,确认刹车和车铃能用一样重要。

---

## 🛠️ 准备工作:确认 Java 环境

在开始编写代码之前,我们需要确认电脑上已经安装了 **JDK(Java Development Kit,Java 开发工具包)**。

### Windows 系统验证

1. 按 `Win + R` 键,输入 `cmd`,按回车打开命令提示符
2. 输入以下命令:

```bash
java -version
```

3. 如果看到类似下面的输出,说明安装成功:

```
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
```

### macOS 系统验证

1. 按 `Command + 空格` 打开 Spotlight 搜索
2. 输入 `Terminal` 打开终端
3. 输入以下命令:

```bash
java -version
```

4. 应该看到与 Windows 类似的版本信息

::: warning 注意
如果看到 "java 不是内部或外部命令" 或 "command not found",说明 JDK 还没有安装或配置。你需要:
1. 下载 JDK:[Oracle 官网](https://www.oracle.com/java/technologies/downloads/) 或 [OpenJDK](https://jdk.java.net/)
2. 安装并配置环境变量
3. 重启命令行工具后再次验证
:::

---

## 📝 编写你的第一个程序

现在开始动手写代码!我们需要三个步骤:创建文件 → 编写代码 → 运行程序。

### 步骤 1:创建 Java 文件

首先,在你的电脑上创建一个专门存放 Java 代码的文件夹:

**Windows 系统:**
```bash
# 在命令提示符中输入
cd Desktop
mkdir JavaProjects
cd JavaProjects
```

**macOS 系统:**
```bash
# 在终端中输入
cd ~/Desktop
mkdir JavaProjects
cd JavaProjects
```

然后,用任何文本编辑器创建一个新文件:
- **Windows**: 可以使用记事本(Notepad)、Notepad++ 或 VS Code
- **macOS**: 可以使用 TextEdit、VS Code 或 Sublime Text

::: tip 提示
文件名必须是 `HelloWorld.java`,注意大小写!Java 对大小写非常敏感,`helloworld.java` 或 `HELLOWORLD.java` 都是错误的。
:::

### 步骤 2:输入代码

将下面的代码**完整**复制到 `HelloWorld.java` 文件中:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
```

::: warning 保存文件的重要提示
- **Windows 记事本用户**: 保存时,文件类型选择"所有文件(\*.\*)",文件名输入 `HelloWorld.java`
- **macOS TextEdit 用户**: 先按 `Command + Shift + T` 切换到纯文本模式,然后保存为 `HelloWorld.java`
- 确保文件扩展名是 `.java` 而不是 `.java.txt`!
:::

### 步骤 3:编译程序

**编译(Compile)** 是将人类能读懂的代码转换成计算机能理解的指令。就像把中文翻译成机器语言。

在命令行中,确认你在 `JavaProjects` 文件夹中,然后输入:

```bash
javac HelloWorld.java
```

::: tip 成功标志
如果没有任何错误信息,说明编译成功!你会在文件夹中看到一个新文件 `HelloWorld.class`,这就是编译后的程序。
:::

### 步骤 4:运行程序

现在让我们运行编译好的程序:

```bash
java HelloWorld
```

**注意**: 这里写的是 `HelloWorld`,不是 `HelloWorld.class` 或 `HelloWorld.java`!

你应该会在屏幕上看到:

```
Hello World!
```

🎉 恭喜!你刚刚完成了你的第一个 Java 程序!

---

## 🔍 代码详解:每一行都在做什么?

让我们逐行分析这个程序,就像拆解一台玩具看它是如何运作的:

```java
public class HelloWorld {
    // 第 1 行:定义一个名为 HelloWorld 的类 class
```

- **public**: 表示这个**类(Class)** 是公开的,任何人都可以使用
- **class**: 告诉 Java 我们要创建一个类,类是 Java 程序的基本构建单元
- **HelloWorld**: 这是类的名字,必须与文件名完全一致

::: tip 理解类(Class)
把类想象成一个蓝图或模板。就像房屋设计图一样,设计图本身不是房子,但它定义了房子的结构。在 Java 中,所有代码都必须写在类里面。
:::

```java
    public static void main(String[] args) {
    // 第 2 行:定义 main 方法 method,程序的入口点
```

- **public static void**: 这是固定写法,现在只需记住(后续章节会详细解释)
- **main**: 这是**方法(Method)** 的名字,Java 程序从这里开始执行
- **String[] args**: 用于接收命令行参数(现在可以忽略)

::: tip 理解 main 方法
main 方法就像程序的"大门"。不管你的程序有多复杂,Java 总是先找到 main 方法,然后从这里开始运行。没有 main 方法,程序就无法启动。
:::

```java
        System.out.println("Hello World!");
        // 第 3 行:在屏幕上打印文字 print a message
```

- **System.out.println**: 这是一个用于输出信息的命令
  - `System`: Java 的系统类
  - `out`: 标准输出(屏幕)
  - `println`: print line 的缩写,打印一行文字
- **"Hello World!"**: 双引号中的内容是要显示的文字,称为**字符串(String)**

```java
    }
}
// 第 4-5 行:大括号表示代码块的结束
```

- 每个 `{` 必须有对应的 `}`
- 第一个 `}` 关闭 main 方法
- 第二个 `}` 关闭 HelloWorld 类

---

## 💪 动手练习

现在轮到你独立操作了!通过这些练习,你会真正掌握 Hello World 程序。

### 练习 1:修改输出内容(⭐ 简单)

修改程序,让它输出你的名字。例如:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("My name is Zhang San");
    }
}
```

**验证步骤:**
1. 保存文件
2. 重新编译:`javac HelloWorld.java`
3. 运行:`java HelloWorld`
4. 检查屏幕上是否显示了你的名字

### 练习 2:输出多行文字(⭐⭐ 中等)

修改程序,让它输出三行不同的信息:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
        System.out.println("I am learning Java.");
        System.out.println("This is my first program!");
    }
}
```

你会看到输出变成:
```
Hello World!
I am learning Java.
This is my first program!
```

::: tip 提示
每次调用 `System.out.println()` 都会另起一行。如果你想在同一行输出,可以使用 `System.out.print()`(不带 ln)。
:::

### 练习 3:创建新的程序(⭐⭐⭐ 挑战)

创建一个全新的文件 `Welcome.java`,输出以下内容:

```
====================
  Welcome to Java!
====================
```

**关键步骤:**
1. 创建新文件 `Welcome.java`
2. 类名必须改为 `Welcome`(与文件名一致)
3. 使用三个 `println` 语句
4. 编译:`javac Welcome.java`
5. 运行:`java Welcome`

::: danger 常见错误
如果你看到 "错误: 找不到或无法加载主类 Welcome",检查:
- 文件名是否为 `Welcome.java`?
- 类名是否为 `public class Welcome`?
- 编译时是否在正确的文件夹中?
:::

---

## ❓ 常见问题解答

### Q1: 编译时出现 "javac 不是内部或外部命令"

**原因**: JDK 没有正确安装或环境变量未配置。

**解决方案**:
1. 确认 JDK 已安装
2. 配置 JAVA_HOME 环境变量
3. 将 `%JAVA_HOME%\bin`(Windows) 或 `$JAVA_HOME/bin`(macOS) 添加到 PATH

### Q2: 编译时出现 "错误: 编码 GBK 的不可映射字符"

**原因**: 代码中包含中文注释,但系统编码不匹配。

**解决方案**:
编译时指定编码:
```bash
javac -encoding UTF-8 HelloWorld.java
```

### Q3: 为什么类名必须和文件名一致?

这是 Java 的强制规定。当你声明 `public class HelloWorld` 时,Java 要求文件名必须是 `HelloWorld.java`。这样做是为了让 Java 能快速找到类定义。

### Q4: 可以在一个文件中写多个类吗?

可以,但只能有一个 `public` 类,并且该类名必须与文件名一致。例如:

```java
// 文件名: HelloWorld.java
public class HelloWorld {
    public static void main(String[] args) {
        Helper helper = new Helper();
        helper.sayHello();
    }
}

class Helper {
    void sayHello() {
        System.out.println("Hello from Helper!");
    }
}
```

不过对于初学者,建议先保持"一个文件一个类"的习惯。

---

## 📌 本章小结

通过这一章,你应该掌握了:

1. **编译(Compile)和运行(Run)的区别**
   - `javac` 命令用于编译,生成 `.class` 文件
   - `java` 命令用于运行编译后的程序

2. **Java 程序的基本结构**
   - 所有代码必须写在**类(Class)** 中
   - 程序从 **main 方法(Method)** 开始执行
   - 使用 `System.out.println()` 输出信息

3. **命名规则**
   - 文件名 = 公开类名 + `.java`
   - Java 严格区分大小写

4. **工作流程**
   ```
   编写代码(.java) → 编译(javac) → 生成字节码(.class) → 运行(java) → 看到结果
   ```

5. **关键术语**
   - **类(Class)**: Java 程序的基本单元
   - **方法(Method)**: 执行特定任务的代码块
   - **字符串(String)**: 用双引号括起来的文字

::: tip 下一步建议
现在你已经成功运行了第一个程序!建议你:
1. 多做几次练习,熟悉编译和运行的流程
2. 尝试修改输出内容,观察结果
3. 不要害怕报错,每个错误都是学习的机会
4. 考虑安装一个**集成开发环境(IDE)**,如 IntelliJ IDEA 或 Eclipse,它们能让编程更简单
:::

记住:每个程序员都是从 Hello World 开始的。你现在已经迈出了成为 Java 开发者的第一步! 🚀
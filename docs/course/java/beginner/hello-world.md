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

当你第一次打开一个新的编程语言时,写下第一个程序总是令人兴奋的。在编程世界里,有一个传统:第一个程序总是输出"Hello World"。这就像是你和计算机的第一次对话,你用代码告诉它:"嘿,我来了!"

## 💡 什么是 Hello World 程序?

想象一下,你刚学会一门外语,老师教你的第一句话通常是"你好"。在编程世界里,**Hello World** 就是这样一句"你好"——它是最简单但最重要的第一步。

这个程序只做一件事:**在屏幕上显示 "Hello World" 这几个字**。虽然看起来很简单,但它能帮助你:
- 验证 Java 环境是否安装正确
- 理解 Java 程序的基本结构
- 学会如何运行一个程序
- 建立"我能编程"的信心

::: tip 为什么叫 Hello World?
这个传统始于 1978 年的经典教材《C程序设计语言(The C Programming Language)》。从那以后,几乎所有编程教程都用它作为第一个示例。这就像是程序员之间的暗号!
:::

## 📝 创建你的第一个 Java 文件

在写代码之前,我们需要准备一个地方来保存代码。Java 程序都保存在以 `.java` 结尾的文件里。

### 步骤 1: 创建项目文件夹

首先,在你的电脑上创建一个专门存放 Java 练习的文件夹。你可以这样做:

**Windows 系统:**
1. 在桌面或任意位置新建文件夹
2. 命名为 `JavaLearning`(建议用英文,避免中文路径可能导致的问题)

**Mac/Linux 系统:**
打开终端(Terminal),输入:

```bash
mkdir ~/JavaLearning
cd ~/JavaLearning
```

::: warning 注意文件夹命名
建议文件夹名称使用英文,不要包含空格和特殊符号。比如用 `JavaLearning` 而不是 `Java 学习` 或 `Java-学习@2024`。
:::

### 步骤 2: 创建 Java 文件

在 `JavaLearning` 文件夹里,创建一个新的文本文件,命名为 `HelloWorld.java`。

::: danger 重要规则
文件名必须是 `HelloWorld.java`,注意:
- 首字母 `H` 和 `W` 都要大写
- 扩展名必须是 `.java` (不是 .txt)
- 文件名要和稍后代码中的类名完全一致

这是 Java 的硬性规定,写错了程序就运行不了!
:::

## 📝 编写 Hello World 代码

现在,用任意文本编辑器打开 `HelloWorld.java` 文件。如果你不知道用什么:
- Windows 可以用**记事本**(Notepad)
- Mac 可以用**文本编辑**(TextEdit)
- 更好的选择:**Visual Studio Code**(VS Code)、**IntelliJ IDEA** 等专业编辑器

在文件中输入以下代码:**每个字符都要完全一样**,包括大小写、标点符号!

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

### 代码逐行解释

让我们把这段代码拆开来看,理解每一行是什么意思:

```java
public class HelloWorld {
    // 这是类的开始 this is the beginning of a class
```

- **public**: 公共的(Public),表示这个类可以被任何地方访问
- **class**: 类(Class),Java 程序的基本组织单位,可以把它想象成一个"容器"
- **HelloWorld**: 类的名字(Class Name),必须和文件名完全一致
- **{ }**: 大括号表示这个类的"范围",所有属于这个类的代码都写在这对大括号里

```java
    public static void main(String[] args) {
        // 这是程序的入口 this is the entry point of program
```

这一行叫做**主方法(Main Method)**,是程序的"大门":
- **main**: 主方法的固定名称,Java 程序从这里开始运行
- **String[] args**: 参数(Parameters),暂时不用理解,照着写就行
- 整行可以理解为:"嘿,Java,当你运行这个程序时,从这里开始!"

```java
        System.out.println("Hello World");
        // 打印输出 print output
```

这是真正做事的那一行:
- **System.out.println**: 输出打印(Print Line),把内容显示在屏幕上
- **"Hello World"**: 双引号里的内容是**字符串(String)**,会原样显示
- **;**: 分号表示这条语句结束(就像中文的句号)

```java
    }
}
```

两个右大括号分别结束 `main` 方法和 `HelloWorld` 类。

::: tip 代码缩进的意义
你注意到代码有"阶梯状"的排列吗? 这叫**缩进(Indentation)**。虽然 Java 不强制要求,但良好的缩进能让代码更易读:
- 第一层(class 内部):缩进 4 个空格
- 第二层(main 方法内部):再缩进 4 个空格

专业程序员都会保持良好的缩进习惯!
:::

## 🚀 编译和运行程序

写完代码只是第一步,现在我们要让它"活"起来! Java 程序需要两个步骤才能运行:

### 步骤 1: 编译(Compile)

**编译(Compilation)** 就是把人类能读懂的代码(.java 文件)翻译成计算机能执行的代码(.class 文件)。

打开命令行工具:
- **Windows**: 按 `Win + R`,输入 `cmd`,回车
- **Mac/Linux**: 打开 Terminal

进入你保存 `HelloWorld.java` 的文件夹:

```bash
cd 路径/JavaLearning
# 例如: cd C:\Users\YourName\Desktop\JavaLearning
```

然后执行编译命令:

```bash
javac HelloWorld.java
```

**如果成功**,不会显示任何信息,但你会发现文件夹里多了一个 `HelloWorld.class` 文件。这就是编译好的字节码(Bytecode)文件。

::: warning 常见编译错误

**错误 1: 'javac' 不是内部或外部命令**
- **原因**: Java 没有正确安装或环境变量未配置
- **解决**: 需要先安装 JDK(Java Development Kit)并配置环境变量

**错误 2: HelloWorld.java:1: error: class HelloWorld is public, should be declared in a file named HelloWorld.java**
- **原因**: 文件名和类名不匹配
- **解决**: 确保文件名是 `HelloWorld.java`,类名是 `HelloWorld`

**错误 3: HelloWorld.java:3: error: ';' expected**
- **原因**: 代码中少了分号 `;`
- **解决**: 检查每条语句末尾是否有分号

**错误 4: HelloWorld.java:1: error: illegal character: '\uff1a'**
- **原因**: 使用了中文标点符号
- **解决**: 把所有中文冒号 `:`、分号 `;`、引号 `"` 改成英文的
:::

### 步骤 2: 运行(Run)

编译成功后,用以下命令运行程序:

```bash
java HelloWorld
```

::: tip 注意
运行时用 `java HelloWorld`,**不要** 加 `.class` 后缀!
:::

**如果一切正常**,你会在屏幕上看到:

```
Hello World
```

恭喜! 你刚刚运行了人生中第一个 Java 程序! 🎉

## ✅ 验证你的程序

让我们确认一下每个步骤都成功了:

### 检查清单

1. **文件创建**:
   - [ ] 有一个名为 `HelloWorld.java` 的文件
   - [ ] 文件名首字母大写,扩展名是 `.java`

2. **代码内容**:
   - [ ] 类名是 `HelloWorld`(和文件名一致)
   - [ ] 有 `public static void main(String[] args)` 这一行
   - [ ] 有 `System.out.println("Hello World");` 这一行
   - [ ] 所有标点符号都是英文(不是中文)
   - [ ] 所有大括号都成对出现

3. **编译成功**:
   - [ ] 执行 `javac HelloWorld.java` 没有报错
   - [ ] 文件夹里出现了 `HelloWorld.class` 文件

4. **运行成功**:
   - [ ] 执行 `java HelloWorld` 后屏幕显示 `Hello World`

如果以上所有项都打钩,说明你完全掌握了!

## 💪 动手练习

现在轮到你自己动手了! 通过这些练习,你会更深入理解 Hello World 程序。

### 练习 1: 修改输出内容(简单)

把 `"Hello World"` 改成你的名字,比如 `"Hello, I am Zhang San"`。

**提示**: 只需要修改双引号里的内容,其他代码不变。

**预期结果**: 运行后显示你写的内容。

### 练习 2: 输出多行(中等)

让程序输出三行内容:
```
Hello World
Welcome to Java
Let's start coding
```

**提示**: 
- 你需要写三行 `System.out.println()`
- 每行后面都要有分号 `;`
- 每一行都要写在 `main` 方法的大括号里

**参考代码**:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("Welcome to Java");
        System.out.println("Let's start coding");
    }
}
```

### 练习 3: 创建新程序(进阶)

创建一个全新的程序 `Welcome.java`,让它输出:
```
Welcome to Java Programming!
This is my second program.
```

**提示**:
1. 创建新文件 `Welcome.java`
2. 类名要改成 `Welcome`
3. 其他结构和 HelloWorld 一样
4. 记得编译后再运行

**完整步骤**:
```bash
# 编译 compile
javac Welcome.java

# 运行 run
java Welcome
```

::: warning 常见错误
如果你复制了 HelloWorld.java 的内容,别忘了把 `class HelloWorld` 改成 `class Welcome`,否则会报错!
:::

## 📌 本章小结

让我们回顾一下你学到的关键知识:

1. **Java 文件命名规则(File Naming Rule)**:
   - 文件名必须和类名完全一致
   - 扩展名必须是 `.java`
   - 建议使用大驼峰命名法(每个单词首字母大写)

2. **Java 程序的基本结构(Basic Structure)**:
   ```java
   public class 类名 {
       public static void main(String[] args) {
           // 你的代码 your code
       }
   }
   ```

3. **编译和运行流程(Compile and Run Process)**:
   - 编译: `javac 文件名.java` → 生成 `.class` 文件
   - 运行: `java 类名` → 看到输出结果

4. **输出语句(Print Statement)**:
   - `System.out.println("内容")` 用于在屏幕上显示内容
   - 双引号里的内容会原样显示
   - 每条语句必须以分号 `;` 结尾

5. **重要习惯(Best Practices)**:
   - 代码要有良好的缩进
   - 所有标点符号使用英文
   - 文件名和路径避免使用中文和空格

::: tip 下一步
现在你已经能写出第一个程序了! 但你可能会好奇:
- 为什么要写 `public class`?
- `main` 方法里的 `String[] args` 是什么?
- 除了输出文字,还能做什么?

不用着急,随着学习深入,这些疑问都会解开。现在最重要的是:多写几遍 Hello World,直到你能闭着眼睛也能写出来!
:::

## 🎯 学习检验

回答以下问题,检查你是否真正理解了本章内容:

1. 如果你的 Java 文件名是 `MyProgram.java`,那么里面的类名应该是什么?
2. `javac` 和 `java` 这两个命令分别是做什么的?
3. 如果想让程序输出 `Hello "Java"` (包含双引号),应该怎么写?

**参考答案**:
1. 类名必须是 `MyProgram`,和文件名一致
2. `javac` 用于编译(把 .java 编译成 .class),`java` 用于运行(执行编译好的程序)
3. `System.out.println("Hello \"Java\"");` (用 `\"` 转义双引号)

如果你能回答出这三个问题,说明你已经掌握了本章内容。如果有不确定的地方,建议重新阅读对应部分,或者亲自动手验证一下!

记住:**编程是实践的技能,看懂不等于会做,一定要自己敲一遍代码!** ⌨️
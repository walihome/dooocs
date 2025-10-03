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

## 💡 什么是 Hello World

**Hello World** 是编程界的传统——每个程序员学习新语言时写的第一个程序。它的作用是让计算机在屏幕上显示 "Hello World" 这几个字。

这个简单的程序能帮你验证：
- Java 开发环境是否正确安装
- 你是否理解了 Java 程序的基本结构
- 代码的编写-编译-运行流程

## 🛠️ 准备工作

在开始之前,你需要确认电脑上已经安装了 **JDK(Java Development Kit)**。

::: tip 快速检查
打开命令行工具(Windows 按 `Win + R` 输入 `cmd`,Mac 按 `Command + 空格` 输入 `终端`),输入:
```bash
java -version
```
如果看到类似 `java version "17.0.1"` 的信息,说明 JDK 已安装。
:::

::: warning 如果没有安装
如果显示 "命令不存在" 或 "不是内部命令",你需要先安装 JDK。可以从 Oracle 官网或使用 OpenJDK 进行安装。
:::

## 📝 编写你的第一个程序

### 步骤 1: 创建文件

1. 在电脑上创建一个新文件夹,比如命名为 `java-learning`
2. 在这个文件夹里创建一个文本文件,命名为 `HelloWorld.java`

::: danger 文件名必须精确匹配
文件名必须是 `HelloWorld.java`,大小写完全一致!这是 Java 的强制要求。
:::

### 步骤 2: 输入代码

用任何文本编辑器(记事本、VS Code、Notepad++ 等)打开 `HelloWorld.java`,输入以下代码:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

::: tip 推荐编辑器
虽然记事本可以用,但推荐使用 VS Code 或 IntelliJ IDEA Community Edition,它们会提供代码高亮和错误提示,让编程更轻松。
:::

### 步骤 3: 保存文件

- 确保文件保存为 `.java` 后缀
- 编码格式选择 **UTF-8**

## 🔧 编译和运行

### 什么是编译?

Java 代码不能直接运行,需要先**编译(Compile)**——把你写的代码翻译成计算机能理解的**字节码(Bytecode)**。

### 编译步骤

1. 打开命令行工具
2. 使用 `cd` 命令进入你创建的文件夹:

```bash
cd 你的文件夹路径
# 例如: cd C:\java-learning
# 或: cd ~/java-learning
```

3. 执行编译命令:

```bash
javac HelloWorld.java
```

::: tip 编译成功的标志
如果没有任何错误信息,并且文件夹里出现了 `HelloWorld.class` 文件,说明编译成功!
:::

### 运行程序

编译成功后,执行运行命令:

```bash
java HelloWorld
```

**注意**: 运行时写的是 `HelloWorld` (没有 `.java` 或 `.class` 后缀)

### ✅ 验证结果

如果你看到屏幕上显示:
```
Hello World
```

恭喜!你已经成功运行了第一个 Java 程序! 🎉

## 🔍 代码逐行解析

现在让我们理解每一行代码的含义:

```java
public class HelloWorld {
```

- **public**: 访问修饰符(Access Modifier),表示这个**类(Class)**可以被其他代码访问
- **class**: 关键字(Keyword),用于定义一个类
- **HelloWorld**: 类的名称,必须和文件名完全一致
- **{ }**: 大括号标记类的开始和结束,类的所有内容都写在大括号里

::: tip 什么是类?
**类(Class)**是 Java 程序的基本构建单元,你可以把它想象成一个"容器",用来组织代码。现在你只需要记住:每个 Java 程序都必须有至少一个类。
:::

---

```java
    public static void main(String[] args) {
```

这是**主方法(main Method)**,是程序的入口——程序从这里开始执行。

- **public**: 让 Java 虚拟机能够调用这个方法
- **static**: 表示这个方法属于类本身,不需要创建对象就能运行
- **void**: 表示这个方法不返回任何值
- **main**: 方法名,必须是 `main`,这是 Java 的规定
- **String[] args**: 参数列表,可以接收命令行参数(现在不用深究)

::: warning 固定格式
`public static void main(String[] args)` 是 Java 程序的固定入口,每个字都不能改,否则程序无法运行!
:::

---

```java
        System.out.println("Hello World");
```

这是真正执行任务的代码行:

- **System.out**: Java 提供的标准输出流,用于向屏幕输出信息
- **println**: 是 "print line" 的缩写,表示打印一行内容并换行
- **"Hello World"**: 双引号包裹的内容叫**字符串(String)**,会原样输出
- **;**: 分号表示语句结束,Java 中每条语句都必须以分号结尾

---

```java
    }
}
```

两个闭合的大括号,分别对应 `main` 方法和 `HelloWorld` 类的结束。

## ⚠️ 新手常见错误

### 错误 1: 文件名和类名不匹配

```java
// 文件名: hello.java
public class HelloWorld {  // ❌ 错误!
```

**解决方法**: 文件名必须是 `HelloWorld.java`,和类名完全一致。

---

### 错误 2: 忘记分号

```java
System.out.println("Hello World")  // ❌ 缺少分号
```

**错误信息**: `';' expected`

**解决方法**: 在语句末尾加上分号:
```java
System.out.println("Hello World");  // ✅ 正确
```

---

### 错误 3: 大小写错误

```java
public class helloworld {  // ❌ 小写
    public static void Main(String[] args) {  // ❌ Main 大写错误
        system.out.println("Hello World");  // ❌ system 小写错误
    }
}
```

::: danger Java 严格区分大小写
`HelloWorld` 和 `helloworld` 是完全不同的!`main` 和 `Main` 也不一样!
:::

**正确写法**:
```java
public class HelloWorld {  // ✅
    public static void main(String[] args) {  // ✅
        System.out.println("Hello World");  // ✅
    }
}
```

---

### 错误 4: 引号使用错误

```java
System.out.println('Hello World');  // ❌ 单引号错误
System.out.println("Hello World");  // ❌ 中文引号
```

**解决方法**: 必须使用英文双引号:
```java
System.out.println("Hello World");  // ✅
```

---

### 错误 5: 编译和运行混淆

```bash
java HelloWorld.java  # ❌ 运行时不加 .java
javac HelloWorld      # ❌ 编译时必须加 .java
```

**正确命令**:
```bash
javac HelloWorld.java  # ✅ 编译
java HelloWorld        # ✅ 运行
```

## 💪 练习题

### 练习 1: 修改输出内容

把 `"Hello World"` 改成你的名字,比如 `"Hello Zhang San"`,重新编译运行。

<details>
<summary>点击查看答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello Zhang San");
    }
}
```

记得重新编译:
```bash
javac HelloWorld.java
java HelloWorld
```
</details>

---

### 练习 2: 输出多行内容

让程序输出两行内容:
```
Hello World
Welcome to Java
```

::: tip 提示
你需要写两次 `System.out.println()`
:::

<details>
<summary>点击查看答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
        System.out.println("Welcome to Java");
    }
}
```
</details>

---

### 练习 3: 创建新的类文件

创建一个新文件 `Welcome.java`,让它输出 `"Welcome to Java Programming"`。

::: warning 注意
新文件的类名必须和文件名一致!
:::

<details>
<summary>点击查看答案</summary>

创建文件 `Welcome.java`:
```java
public class Welcome {
    public static void main(String[] args) {
        System.out.println("Welcome to Java Programming");
    }
}
```

编译和运行:
```bash
javac Welcome.java
java Welcome
```
</details>

## 🎯 拓展知识

### println 和 print 的区别

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.print("Hello ");    // 不换行
        System.out.print("World");      // 不换行
        System.out.println("!");        // 换行
        System.out.println("Next line");
    }
}
```

**输出结果**:
```
Hello World!
Next line
```

- **println**: print line,打印后自动换行
- **print**: 只打印,不换行

---

### 注释的使用

**注释(Comment)**是写给人看的说明文字,程序运行时会被忽略。

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 这是单行注释,会被编译器忽略
        System.out.println("Hello World");  // 也可以写在代码后面
        
        /*
         * 这是多行注释
         * 可以写很多行
         */
        System.out.println("Welcome");
    }
}
```

::: tip 为什么要写注释?
随着代码越来越复杂,注释能帮你(或其他人)理解代码的作用。养成写注释的好习惯!
:::

## 📌 本章小结

恭喜你完成了 Java 学习的第一步!让我们回顾一下关键知识点:

1. **Java 程序的基本结构**: 每个程序都需要一个 `class`,文件名必须和类名一致
2. **程序入口**: `public static void main(String[] args)` 是固定格式,程序从这里开始执行
3. **输出语句**: `System.out.println()` 用于在屏幕上显示内容
4. **编译和运行**: 先用 `javac` 编译生成 `.class` 文件,再用 `java` 运行
5. **严格的语法**: Java 区分大小写,每条语句必须以分号结尾,双引号必须是英文

::: tip 下一步
现在你已经能写出完整的 Java 程序了!接下来可以学习**变量(Variable)**和**数据类型(Data Type)**,让程序能处理不同的数据。
:::

记住:编程是一个熟能生巧的过程,多写多练才是进步的关键。如果遇到错误不要气馁,仔细阅读错误信息,它会告诉你问题出在哪里! 💪
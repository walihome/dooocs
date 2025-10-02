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

 ## Hello World 程序 🎉

### 概念 Explanation

**Hello World Program（Hello World 程序）**是编程学习的第一步，它是一个最简单的程序，用来验证开发环境是否配置正确，并让你体验从编写代码到看到运行结果的完整过程。

在 Java 中，每个程序都需要：
- **Class（类）**：Java 程序的基本组织单元
- **main Method（主方法）**：程序的入口点，程序从这里开始执行
- **Statement（语句）**：具体执行的指令

### 代码示例 Code Examples

#### 基础示例：输出 Hello World

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```

**代码解析：**

```java
// Class definition 类定义
public class HelloWorld {
    // Main method - program entry point 主方法 - 程序入口
    public static void main(String[] args) {
        // Print output to console 打印输出到控制台
        System.out.println("Hello World");
    }
}
```

**关键术语说明：**

- `public class HelloWorld`：定义一个**Public Class（公共类）**，类名必须与文件名相同
- `public static void main(String[] args)`：**Main Method（主方法）**，程序执行的起点
- `System.out.println()`：**Print Line Method（打印行方法）**，用于输出内容并换行
- `"Hello World"`：**String Literal（字符串字面量）**，要输出的文本内容

#### 扩展示例：多行输出

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Print multiple lines 打印多行
        System.out.println("Hello World");
        System.out.println("Welcome to Java Programming!");
        System.out.println("Let's start coding!");
    }
}
```

#### 对比：println vs print

```java
public class HelloWorld {
    public static void main(String[] args) {
        // println - print with new line 打印后换行
        System.out.println("Hello");
        System.out.println("World");
        
        // print - print without new line 打印不换行
        System.out.print("Hello ");
        System.out.print("Java");
    }
}
```

**输出结果：**
```
Hello
World
Hello Java
```

### 练习 Exercises

#### 练习 1：修改输出内容 ✍️

修改代码，让程序输出你的名字和问候语。

**期望输出：**
```
Hello, I am [Your Name]
Nice to meet you!
```

<details>
<summary>💡 参考答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Print greeting with name 打印带名字的问候语
        System.out.println("Hello, I am Zhang San");
        System.out.println("Nice to meet you!");
    }
}
```
</details>

#### 练习 2：创建简单的自我介绍 👤

编写一个程序，输出包含以下信息的自我介绍：
- 姓名
- 年龄
- 爱好

**期望输出格式：**
```
Name: [Your Name]
Age: [Your Age]
Hobby: [Your Hobby]
```

<details>
<summary>💡 参考答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Self introduction 自我介绍
        System.out.println("Name: Li Ming");
        System.out.println("Age: 25");
        System.out.println("Hobby: Programming");
    }
}
```
</details>

#### 练习 3：使用 print 和 println 组合 🎨

使用 `print()` 和 `println()` 的组合，让输出结果在一行内显示：`Hello Java Programming`

<details>
<summary>💡 参考答案</summary>

```java
public class HelloWorld {
    public static void main(String[] args) {
        // Combine print and println 组合使用 print 和 println
        System.out.print("Hello ");
        System.out.print("Java ");
        System.out.println("Programming");
    }
}
```
</details>

### 总结 Summary

通过本章节，你已经掌握了：

✅ **核心概念：**
- **Hello World Program（Hello World 程序）**：验证环境和学习编程的第一步
- **Class（类）**：Java 程序的基本组织单元
- **Main Method（主方法）**：`public static void main(String[] args)` 程序入口点
- **Statement（语句）**：程序中的执行指令

✅ **重要方法：**
- `System.out.println()`：**Print Line（打印行）** - 输出内容并换行
- `System.out.print()`：**Print（打印）** - 输出内容不换行

✅ **编程规范：**
- 类名必须与文件名相同
- Java 对大小写敏感（`HelloWorld` ≠ `helloworld`）
- 每条语句以分号 `;` 结尾

**💡 小贴士：** Hello World 程序虽然简单，但它包含了 Java 程序的基本结构。理解这个程序的每一部分，将为后续学习打下坚实基础！
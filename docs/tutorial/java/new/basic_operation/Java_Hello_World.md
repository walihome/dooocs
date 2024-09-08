---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java Hello World 程序

一个 "Hello, World!" 程序是一个简单的程序，在屏幕上输出 `Hello, World!`。由于它是一个非常简单的程序，通常用来向初学者介绍一门新的编程语言。

让我们来探索一下 Java "Hello, World!" 程序的工作原理。

> 注意：你可以使用我们的[在线 Java 编译器]来运行 Java 程序。

* * *

## Java "Hello, World!" 程序
    
```java
    // 你的第一个程序
    
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```
**输出**
    
```java   
    Hello, World!
```

* * *

## Java "Hello, World!" 程序如何工作?

  1. `// 你的第一个程序`  
  
在 Java 中，以 `//` 开头的任何行都是注释。注释用于帮助阅读代码的用户理解程序的意图和功能。Java 编译器（将 Java 程序转换为计算机可执行的 Java 字节码的应用程序）会完全忽略注释。要了解更多信息。[Java 注释]。
  2. `class HelloWorld { ... }`  
  
在 Java 中，每个应用程序都以类定义开始。在该程序中，HelloWorld 是类的名称，类的定义是：
```java
class HelloWorld {
  ... .. ...
}
```
  
暂时只需记住每个 Java 应用程序都有一个类定义，并且类的名称应与 Java 中的文件名相匹配。
  3. `public static void main(String[] args) { ... }`  
  
这是主方法。在 Java 中，每个应用程序都必须包含 main 方法。Java 编译器从 main 方法开始执行代码。
  
**它是如何工作的？**问得好。然而，在本文中我们不会讨论这个问题。毕竟，这是一个向初学者介绍 Java 编程语言的基本程序。我们将在以后的章节中学习 `public`、`static`、`void` 的含义以及[方法如何工作]。暂时只需记住，main 函数是您的 Java 应用程序的入口点，它在 Java 程序中是必需的。Java 中 main 方法的签名是：
```java
public static void main(String[] args) {
  ... .. ...
}
```
  4. `System.out.println("Hello, World!");`  


上述代码是一个打印语句。它将文本 `Hello, World!` 打印到标准输出（您的屏幕）。引号内的文本称为[Java 中的字符串]。

请注意，打印语句位于 main 方法内部，而 main 方法位于类定义内部。



* * *

### 要点总结

  * 每个有效的 Java 应用程序必须有一个与文件名相匹配的类定义（类名和文件名应该相同）。
  * main 方法必须在类定义内部。
  * 编译器从 main 函数开始执行代码。

这是一个有效的 Java 程序，它什么功能都没有。
    
```java
public class HelloWorld {
    public static void main(String[] args) {
        // 在这里编写你的代码
    }
}
```

如果你现在还不理解 `class`、`static`、方法等的含义，不要担心。我们将在以后的章节中详细讨论它们。
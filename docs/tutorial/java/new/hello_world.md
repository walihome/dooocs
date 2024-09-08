---
title: Hello world
head:
  - - meta
    - name: description
      content: java hello world 程序介绍
  - - meta
    - name: keywords
      content: Java Hello world 程序
---

# Java Hello World 程序

"Hello, World!" 是一个简单的程序，在屏幕上输出 `Hello, World!`。由于它是一个非常简单的程序，通常用来向新手介绍一门新的编程语言。

让我们来探索一下Java "Hello, World!"程序的工作原理。

> **注意：** 您可以使用我们的[在线Java编译器](https://www.dooocs.com/img/java-programming/online-compiler/)来运行Java程序。

---

## Java "Hello, World!" 程序
    
```java
// Your First Program

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
---

## Java "Hello, World!" 程序如何工作？

  1. `// Your First Program`  
  
在Java中，以`//`开头的任何行都是注释。注释是为了帮助阅读代码的用户理解程序的意图和功能而存在的。Java编译器（将Java程序翻译成计算机可以执行的Java字节码的应用程序）完全忽略它。要了解更多信息，请访问[Java注释](https://www.dooocs.com/img/java-programming/comments)。
  2. `class HelloWorld { ... }`  
  
在Java中，每个应用程序都以类定义开始。在程序中，HelloWorld是类的名称，类定义如下： 
```java 
    class HelloWorld {
    ... .. ...
    }
```
  
暂时只需要记住每个Java应用程序都有一个类定义，而且类的名称应该与Java文件名匹配。
  3. `public static void main(String[] args) { ... }`  
  
这是主方法。在Java中，每个应用程序都必须包含main方法。Java编译器从main方法开始执行代码。  
  
**它是如何工作的？** 这是个好问题。然而，在本文中我们不会讨论这个问题。毕竟，这是一个向新手介绍Java编程语言的基础程序。我们将在后面的章节中学习`public`、`static`、`void`以及[方法如何工作](https://www.dooocs.com/img/java-programming/methods)的含义。  
  
暂时只需记住主函数是Java应用程序的入口点，并且在Java程序中是强制性的。Java中main方法的签名如下： 
```java
public static void main(String[] args) {
  ... .. ...
}
```

  4. `System.out.println("Hello, World!");`  


上述代码是一个打印语句。它将文本`Hello, World!`打印到标准输出（您的屏幕）。引号内的文本被称为[Java中的字符串](https://www.dooocs.com/img/java-programming/string "Java String")。

请注意，打印语句位于主函数内部，而主函数位于类定义内部。



---

### 要点

  * 每个有效的Java应用程序必须有一个与文件名匹配的类定义（类名和文件名应该相同）。
  * 主方法必须位于类定义内部。
  * 编译器从主函数开始执行代码。



这是一个有效的Java程序，它什么也不做。
    
```java
public class HelloWorld {
    public static void main(String[] args) {
        // 在这里编写您的代码
    }
}
```

如果您现在还不理解`class`、`static`、方法等的含义，不要担心。我们将在后面的章节中详细讨论。

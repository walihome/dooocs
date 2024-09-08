---
title: Java 注释
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java注释

在计算机编程中，Java编译器会完全忽略注释部分的代码。它们主要用于帮助程序员理解代码。例如，

```java
// 声明和初始化两个变量
int a = 1;
int b = 3;

// 输出结果
System.out.println("This is output");
```

这里，我们使用了以下注释：

- 声明和初始化两个变量
- 输出结果

---

## Java中的注释类型

在Java中，有两种类型的注释：

- 单行注释
- 多行注释

---

### 单行注释

单行注释在同一行内开始和结束。我们可以使用`//`符号来编写单行注释。例如，

```java
// "Hello, World!" program example
     
class Main {
    public static void main(String[] args) {    	
        // 打印"Hello, World!"
        System.out.println("Hello, World!");
    }
}
```

**输出**：
```
Hello, World!
```

这里，我们使用了两个单行注释：

- "Hello, World!" program example
- 打印"Hello, World!"

Java编译器会忽略从`//`到行末的所有内容。因此，它也被称为**行尾注释**。

---

### 多行注释

当我们想要编写多行注释时，可以使用多行注释。我们可以使用`/*....*/`符号来编写多行注释。例如，

```java
/* This is an example of  multi-line comment.
 * The program prints "Hello, World!" to the standard output.
 */

class HelloWorld {
    public static void main(String[] args) {

        System.out.println("Hello, World!");
    }
}
```

**输出**：
```
Hello, World!
```

这里，我们使用了多行注释：

```java
/* This is an example of multi-line comment.
* The program prints "Hello, World!" to the standard output.
*/
```

这种类型的注释也被称为**传统注释**。在这种类型的注释中，Java编译器会忽略`/*`到`*/`之间的所有内容。

---

## 正确使用注释

你应该始终考虑一件事，那就是注释不应该成为解释糟糕的英文代码的替代方法。你应该始终编写结构良好且自我解释的代码，然后再使用注释。

有人认为代码应该具备自描述性，很少使用注释。然而，在我个人看来，使用注释并没有什么问题。我们可以使用注释来解释复杂的算法、正则表达式或者在不同技术之间选择一种技术来解决问题的场景。

> **注意**：在大多数情况下，始终使用注释来解释“ **为什么** ”而不是“ **如何** ”，这样你就没问题了。
```
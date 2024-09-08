---
title: Java 异常
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 异常

异常是在程序执行过程中发生的意外事件。它影响程序指令的流程，可能导致程序异常终止。

异常可能发生的原因有很多。其中一些包括：

  * 用户输入无效
  * 设备故障
  * 网络连接中断
  * 物理限制（磁盘内存不足）
  * 代码错误
  * 打开一个不可用文件



---

## Java 异常层次结构

下面是 Java 异常层次结构的简化示意图。

![Java 异常层次结构](https://cdn.programiz.com/sites/tutorial2program/files/ExceptionHierarchy.png)  


从上面的图片可以看出，`Throwable` 类是层次结构中的根类。

请注意，该层次结构分为两个分支：Error 和 Exception。

---

### 错误

**错误**表示无法恢复的条件，例如 Java 虚拟机（JVM）内存不足、内存泄漏、堆栈溢出错误、库不兼容、无限递归等。

错误通常超出程序员的控制范围，我们不应该尝试处理错误。

---

### 异常

**异常**可以被程序捕获和处理。

当一个方法内发生异常时，它会创建一个对象。这个对象称为异常对象。

它包含了关于异常的信息，例如异常的名称和描述以及异常发生时程序的状态。

在下一个教程中，我们将学习如何处理这些异常。在本教程中，我们将重点介绍 Java 中不同类型的异常。

---

## Java 异常类型

异常层次结构还有两个分支：`RuntimeException` 和 `IOException`。

---

### 1\. RuntimeException

**运行时异常**是由于编程错误而引起的。它们也被称为**未检查的异常**。

这些异常在编译时不会进行检查，而是在运行时检查。一些常见的运行时异常包括：

  * 不正确使用 API - `IllegalArgumentException `
  * 空指针访问（变量没有初始化） - `NullPointerException `
  * 超出数组范围的访问 - `ArrayIndexOutOfBoundsException `
  * 将数字除以 0 - `ArithmeticException `



你可以这样思考。"如果是运行时异常，那就是你的错"。

如果在使用变量之前检查了变量是否已经初始化，就不会发生 `NullPointerException`。

如果在使用数组索引之前测试了数组索引与数组边界之间的关系，就不会发生 `ArrayIndexOutOfBoundsException`。

---

### 2\. IOException

`IOException` 也被称为**已检查的异常**。编译器在编译时会对它们进行检查，并提示程序员处理这些异常。

一些已检查异常的例子包括：

  * 尝试打开不存在的文件会导致 `FileNotFoundException `
  * 尝试读取文件末尾之后的内容



现在我们了解了异常，接下来我们将在下一个教程中学习[处理异常](https://www.dooocs.com/img/java-programming/exception-handling "Java exception handling")。
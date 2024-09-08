---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java 异常处理

在上一个教程中，我们学习了关于 [Java 异常](https://www.dooocs.com/img/java-programming/exceptions) 的知识。我们知道异常会异常终止程序的执行。

因此，处理异常非常重要。下面是处理 Java 异常的不同方法：

  * try...catch 块
  * finally 块
  * throw 和 throws 关键字



* * *

## 1\. Java try...catch 块

[try-catch](https://www.dooocs.com/img/java-programming/try-catch) 块用于处理 Java 异常。`try...catch` 块的语法如下：
    
    
    try {
      // 代码
    }
    catch(Exception e) {
      // 代码
    }

在这里，我们把可能产生异常的代码放在 `try` 块中。每个 `try` 块后面都跟着一个 `catch` 块。

当出现异常时，它会被 `catch` 块捕获。`catch` 块不能单独使用，必须与 `try` 块一起使用。

### 示例：使用 try...catch 进行异常处理
    
    
    class Main {
      public static void main(String[] args) {
    
        try {
    
          // 会产生异常的代码
          int divideByZero = 5 / 0;
          System.out.println("try 块中剩余的代码");
        }
        
        catch (ArithmeticException e) {
          System.out.println("ArithmeticException => " + e.getMessage());
        }
      }
    }

**输出**
    
    
    ArithmeticException => / by zero

在这个示例中，我们试图将一个数除以 `0`。这段代码会产生一个异常。

为了处理这个异常，我们将代码 `5 / 0` 放在了 `try` 块中。现在当出现异常时，`try` 块内的剩余代码会被跳过。

`catch` 块捕获到异常并执行其中的语句。

如果 `try` 块中的语句没有产生异常，那么 `catch` 块就会被跳过。

* * *

## 2\. Java finally 块

在 Java 中，无论是否发生异常，`finally` 块始终会被执行。

`finally` 块是可选的，并且对于每个 `try` 块，只能有一个 `finally` 块。

`finally` 块的基本语法如下：
    
    
    try {
      // 代码
    }
    catch (ExceptionType1 e1) { 
      // catch 块
    }
    finally {
      // finally 块始终会执行
    }

如果发生异常，`finally` 块会在 `try...catch` 块之后执行。否则，在 try 块之后执行。对于每个 `try` 块，只能有一个 `finally` 块。

* * *

### 示例：使用 finally 块进行 Java 异常处理
    
    
    class Main {
      public static void main(String[] args) {
        try {
          // 会产生异常的代码
          int divideByZero = 5 / 0;
        }
    
        catch (ArithmeticException e) {
          System.out.println("ArithmeticException => " + e.getMessage());
        }
        
        finally {
          System.out.println("这是 finally 块");
        }
      }
    }

**输出**
    
    
    ArithmeticException => / by zero
    这是 finally 块

在上面的示例中，我们在 `try` 块内将一个数除以 `0`。这段代码会产生一个 `ArithmeticException` 异常。

异常被 `catch` 块捕获，然后 `finally` 块被执行。

**注意**：使用 `finally` 块是一种良好的编程习惯。因为它可以包含重要的清理代码，例如：

  * 可能会被 return、continue 或 break 跳过的代码
  * 关闭文件或连接



* * *

## 3\. Java throw 和 throws 关键字

Java 中的 `throw` 关键字用于显式地抛出单个异常。

当我们使用 `
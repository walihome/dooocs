---
title: try...catch
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
## Java try...catch

Java中的`try...catch`块用于处理异常并防止程序异常终止。

以下是Java中`try...catch`块的语法。

```java
try {
  // 代码
}
catch (异常类型) {
  // 代码
}
```

`try`块包含可能生成异常的代码。

`catch`块包含当`try`块中发生异常时执行的代码。

### 示例：Java try...catch块

```java
class Main {
  public static void main(String[] args) {

    try {
      int divideByZero = 5 / 0;
      System.out.println("Rest of code in try block");
    }

    catch (ArithmeticException e) {
      System.out.println("ArithmeticException => " + e.getMessage());
    }
  }
}
```

**输出**

```
ArithmeticException => / by zero
```

在上面的示例中，注意以下行：

```java
int divideByZero = 5 / 0;
```

在这里，我们试图将一个数字除以零。在这种情况下，会发生异常。因此，我们将此代码放在`try`块中。

当程序遇到此代码时，会发生`ArithmeticException`。然后，异常被`catch`块捕获并执行`catch`块内的代码。

只有在`try`块中出现异常时才会执行`catch`块。

> **注意**：在Java中，可以使用没有`catch`块的`try`块。但是，不能使用没有`try`块的`catch`块。

## Java try...finally块

我们还可以在`try`块中使用`finally`块。

在这种情况下，不管`try`块内是否有异常，`finally`块总是会被执行。

### 示例：Java try...finally块

```java
class Main {
  public static void main(String[] args) {
    try {
      int divideByZero = 5 / 0;
    }

    finally {
      System.out.println("Finally block is always executed");
    }
  }
}
```

**输出**

```
Finally block is always executed
Exception in thread "main" java.lang.ArithmeticException: / by zero
        at Main.main(Main.java:4)
```

在上面的示例中，我们使用了`try`块和`finally`块。我们可以看到`try`块内的代码导致了一个异常。

然而，无论异常如何，`finally`块内的代码都会被执行。

## Java try...catch...finally块

在Java中，我们可以在`try...catch`块后面使用`finally`块。例如：

```java
import java.io.*;

class ListOfNumbers {

  // 创建一个整数数组
  private int[] list = {5, 6, 8, 9, 2};

  // 将数据从数组写入文件的方法
  public void writeList() {
    PrintWriter out = null;

    try {
      System.out.println("Entering try statement");

      // 创建一个新文件OutputFile.txt
      out = new PrintWriter(new FileWriter("OutputFile.txt"));

      // 将list数组的值写入Output.txt
      for (int i = 0; i < 7; i++) {
        out.println("Value at: " + i + " = " + list[i]);
      }
    }

    catch (Exception e) {
      System.out.println("Exception => " + e.getMessage());
    }

    finally {
      // 检查PrintWriter是否已打开
      if (out != null) {
        System.out.println("Closing PrintWriter");
        // 关闭PrintWriter
        out.close();
      }

      else {
        System.out.println("PrintWriter not open");
      }
    }

  }
}

class Main {
  public static void main(String[] args) {
    ListOfNumbers list = new ListOfNumbers();
    list.writeList();
  }
}
```

**输出**

```
Entering try statement
Exception => Index 5 out of bounds for length 5
Closing PrintWriter
```

在上面的示例中，我们创建了一个名为`list`的数组和一个名为`Output.txt`的文件。这里，我们试图从数组中读取数据并将其存储到文件中。

注意以下代码：

```java
for (int i = 0; i < 7; i++) {
  out.println("
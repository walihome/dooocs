---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java try-with-resources

`try-with-resources`语句在语句结束时自动关闭所有资源。 资源是在程序结束时要关闭的对象。

它的语法是：

```java
try (resource declaration) {
  // 使用资源
} catch (ExceptionType e1) {
  // catch块
}
```

从上面的语法可以看出，我们通过以下方式声明`try-with-resources`语句：

1. 在`try`子句中声明和实例化资源。
2. 指定并处理关闭资源时可能引发的所有异常。

**注意：** `try-with-resources`语句会关闭所有实现[AutoCloseable接口](https://docs.oracle.com/javase/8/docs/api/java/lang/AutoCloseable.html)的资源。

* * *

让我们举一个实现`try-with-resources`语句的示例。

### 示例1：使用try-with-resources

```java
import java.io.*;

class Main {
  public static void main(String[] args) {
    String line;
    try(BufferedReader br = new BufferedReader(new FileReader("test.txt"))) {
      while ((line = br.readLine()) != null) {
        System.out.println("Line =>"+line);
      }
    } catch (IOException e) {
      System.out.println("IOException in try block =>" + e.getMessage());
    }
  }
}
```

**如果找不到test.txt文件，则输出如下：**

```
IOException in try-with-resources block =>test.txt（没有此类文件或目录）
```

**如果找到test.txt文件，则输出如下：**

```
进入try-with-resources块
行 =>测试行
```

在此示例中，我们使用BufferedReader的实例从test.txt文件中读取数据。

在`try-with-resources`语句中声明和实例化BufferedReader，确保其实例无论`try`语句是否正常完成或抛出异常都会被关闭。

如果发生异常，可以使用异常处理块或[throws关键字](https://www.programiz.com/java-programming/throw-throws)来处理它。

* * *

## 抑制的异常

在上面的示例中，当以下情况时，`try-with-resources`语句可能会引发异常：

- 未找到test.txt文件。
- 关闭BufferedReader对象。

同样，由于文件读取可能因为多种原因而随时失败，所以也可能从`try`块中抛出异常。

如果`try`块和`try-with-resources`语句都抛出异常，则会抛出`try`块中的异常，并抑制`try-with-resources`语句中的异常。

### 检索抑制的异常

在Java 7及更高版本中，可以通过调用异常抛出的`Throwable.getSuppressed()`方法来检索抑制的异常。

此方法返回所有抑制异常的数组。我们可以在`catch`块中获取抑制的异常。

```java
catch(IOException e) {
  System.out.println("Thrown exception=>" + e.getMessage());
  Throwable[] suppressedExceptions = e.getSuppressed();
  for (int i=0; i<suppressedExceptions.length; i++) {
    System.out.println("Suppressed exception=>" + suppressedExceptions[i]);
  }
}
```

* * *

## 使用try-with-resources的优点

以下是使用try-with-resources的优点：

### 1\. 不需要finally块来关闭资源

在Java 7引入此功能之前，我们必须使用`finally`块来确保关闭资源以避免资源泄漏。

下面是一个类似**示例1**的程序。但是，在此程序中，我们使用了finally块来关闭资源。

### 示例2：使用finally块关闭资源

```java
import java.io.*;

class Main {
  public static void main(String[] args) {
    BufferedReader br = null;
    String line;

    try {
      System.out.println("进入try块");
      br = new BufferedReader(new FileReader("test.txt"));
      while ((line = br.readLine()) != null) {
        System.out.println("行 =>"+line);
      }
    } catch (IOException e) {
      System.out.println("IOException in try block =>" + e.getMessage());
    } finally {
      System.out.println("进入finally块");
      try {
        if (br != null) {
          br.close();
        }
      } catch (IOException e) {
        System.out.println("
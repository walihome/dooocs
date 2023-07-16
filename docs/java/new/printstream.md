# Java PrintStream类

`java.io`包的`PrintStream`类可用于以通常可读形式（文本）而不是字节写入输出数据。

它继承自抽象类`OutputStream`。

![PrintStream类是Java OutputStream的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-printstream.png)


* * *

## PrintStream的工作原理

与其他输出流不同，`PrintStream`将原始数据（整数、字符）转换为文本格式而不是字节。然后将格式化的数据写入输出流。

另外，`PrintStream`类不会抛出任何输入/输出异常。相反，我们需要使用`checkError()`方法来查找其中的任何错误。

> **注意**：`PrintStream`类还具有自动刷新的功能。这意味着它强制输出流在以下情况下将所有数据写入目标：

  * 如果在打印流中写入换行符`\n`
  * 如果调用了`println()`方法
  * 如果在打印流中写入了字节数组



* * *

## 创建PrintStream

为了创建一个`PrintStream`，我们首先必须导入`java.io.PrintStream`包。一旦我们导入了该包，就可以创建打印流。

**1\. 使用其他输出流**
    
    
    // 创建一个FileOutputStream
    FileOutputStream file = new FileOutputStream(String file);
    
    // 创建一个PrintStream
    PrintStream output = new PrintStream(file, autoFlush);
    

这里，

  * 我们已经创建了一个打印流，它将格式化数据写入由`FileOutputStream`表示的文件中
  * autoFlush是一个可选的布尔参数，指定是否执行自动刷新



**2\. 使用文件名**
    
    
     // 创建一个PrintStream
    PrintStream output = new PrintStream(String file, boolean autoFlush);
    

这里，

  * 我们已经创建了一个打印流，它将格式化数据写入指定的文件中
  * autoFlush是一个可选的布尔参数，指定是否执行自动刷新



> **注意**：在这两种情况下，`PrintStream`使用一些默认字符编码将数据写入文件。然而，我们也可以指定字符编码（**UTF8**或**UTF16**）。

    
    // 使用某个字符编码创建PrintStream
    PrintStream output = new PrintStream(String file, boolean autoFlush, Charset cs);
    

这里，我们使用了`Charset`类来指定字符编码。要了解更多，请访问[Java Charset（官方Java文档）](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html)。

* * *

## PrintStream的方法

`PrintStream`类提供了各种方法，允许我们将数据打印到输出流中。

### print()方法

  * `print()` \- 将指定的数据打印到输出流中
  * `println()` \- 将数据以及换行字符一起打印到输出流中



* * *

### 示例：print()方法与System类结合使用
    
    
    class Main {
        public static void main(String[] args) {
    
            String data = "Hello World.";
            System.out.print(data);
        }
    }
    

**输出**
    
    
    Hello World.
    

在上面的示例中，我们没有创建一个打印流。然而，我们可以使用`PrintStream`类的`print()`方法。

您可能会想知道这是如何可能的。好吧，让我解释一下这里发生了什么。

注意以下行，
    
    
    System.out.print(data);
    

这里，

  * `System`是一个最终类，负责执行标准输入/输出操作
  * `out`是`System`类中声明的`PrintStream`类型的类变量



现在由于`out`是`PrintStream`类型的，我们可以使用它来调用`PrintStream`类的所有方法。

### 示例：print()方法与PrintStream类结合使用
    
    
    import java.io.PrintStream;
    
    class Main {
        public static void main(String[] args) {
    
            String data = "This is a text inside the file.";
    
            try
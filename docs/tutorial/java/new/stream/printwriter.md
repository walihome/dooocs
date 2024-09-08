---
title: PrintWriter类
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java PrintWriter类

`java.io`包中的`PrintWriter`类可用于以一种常见可读的形式（文本）写入输出数据。

它扩展了抽象类`Writer`。

![PrintWriter类是Java Writer的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-printwriter.png)  


* * *

## PrintWriter的工作原理

与其他编写器不同，`PrintWriter`将原始数据（`int`、`float`、`char`等）转换为文本格式，并将格式化的数据写入编写器。

此外，`PrintWriter`类不会抛出任何输入/输出异常。相反，我们需要使用`checkError()`方法来查找其中是否存在任何错误。

> **注意**：`PrintWriter`类还具有自动刷新的功能。这意味着如果调用`println()`或`printf()`方法之一，则它会强制编写器将所有数据写入目标。

* * *

## 创建PrintWriter

要创建一个打印写入程序，首先必须导入`java.io.PrintWriter`包。一旦我们导入了包，我们可以按照以下方式创建打印写入程序。

**1. 使用其他编写器**
    
    
    // 创建FileWriter
    FileWriter file = new FileWriter("output.txt");
    
    // 创建PrintWriter
    PrintWriter output = new PrintWriter(file, autoFlush);
    

在这里，

  * 我们创建了一个打印写入程序，它将数据写入由`FileWriter`表示的文件
  * autoFlush是一个可选参数，用于指定是否执行自动刷新



**2. 使用其他输出流**
    
    
    // 创建FileOutputStream
    FileOutputStream file = new FileOutputStream("output.txt");
    
    // 创建PrintWriter
    PrintWriter output = new PrintWriter(file, autoFlush);
    

在这里，

  * 我们创建了一个打印写入程序，它将数据写入由`FileOutputStream`表示的文件
  * autoFlush是一个可选参数，用于指定是否执行自动刷新



**3. 使用文件名**
    
    
    // 创建PrintWriter
    PrintWriter output = new PrintWriter(String file, boolean autoFlush);
    

在这里，

  * 我们创建了一个打印写入程序，它将数据写入指定的文件
  * autoFlush是一个可选的布尔参数，用于指定是否执行自动刷新



> **注意**：在上述所有情况下，`PrintWriter`使用一些默认字符编码将数据写入文件。但是，我们也可以指定字符编码（**UTF8**或**UTF16**）。
    
    
    // 使用某个字符编码创建PrintWriter
    PrintWriter output = new PrintWriter(String file, boolean autoFlush, Charset cs);
    

在这里，我们使用了Charset类来指定字符编码。要了解更多信息，请访问[Java Charset（官方Java文档）](https://docs.oracle.com/javase/7/docs/api/java/nio/charset/Charset.html "Java Charset \(official Java documentation\)")。

* * *

## PrintWriter的方法

`PrintWriter`类提供了各种方法，允许我们将数据打印到输出中。

### print()方法

  * `print()` \- 将指定的数据打印到编写器
  * `println()` \- 将数据打印到编写器，并在末尾添加换行符



例如，
    
    
    import java.io.PrintWriter;
    
    class Main {
      public static void main(String[] args) {
    
        String data = "This is a text inside the file.";
    
        try {
          PrintWriter output = new PrintWriter("output.txt");
    
          output.print(data);
          output.close();
        }
        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

在上面的示例中，我们创建了一个名为output的打印写入程序。此打印写入程序与文件**output.txt**相关联。
    
    
    PrintWriter output = new PrintWriter("output.txt");
    

要将数据打印到文件中，我们使用了`print()`方法。

当我们运行程序时，**output.txt**文件被填充了以下内容。
    
    
    This is a text inside the file.
    

* * *

### printf()方法

`printf()`方法可用于打印格式化的字符串。
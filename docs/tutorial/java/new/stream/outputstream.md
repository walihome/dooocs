---
title: OutputStream类
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java OutputStream类

`java.io`包中的`OutputStream`类是表示字节输出流的抽象超类。

由于`OutputStream`是一个抽象类，它本身并没有太多实用价值。然而，它的子类可以用于写入数据。

* * *

## OutputStream的子类

为了使用`OutputStream`的功能，我们可以使用它的子类。其中一些子类如下：

  * [FileOutputStream](https://www.dooocs.com/img/java-programming/fileoutputstream "Java FileOutputStream类")
  * [ByteArrayOutputStream](https://www.dooocs.com/img/java-programming/bytearrayoutputstream "Java ByteArrayOutputStream类")
  * [ObjectOutputStream](https://www.dooocs.com/img/java-programming/objectoutputstream "Java ObjectOutputStream类")

![OutputStreamWriter ](https://cdn.programiz.com/sites/tutorial2program/files/java-%20outputstreamwriter.png)  
OutputStreamWriter

在下一个教程中，我们将学习所有这些子类。

* * *

## 创建OutputStream

为了创建`OutputStream`，我们必须首先导入`java.io.OutputStream`包。一旦我们导入了该包，就可以按照以下方式创建输出流。
    
    
    // 创建OutputStream
    OutputStream object = new FileOutputStream();
    

在这里，我们使用`FileOutputStream`创建了一个输出流对象。这是因为`OutputStream`是一个抽象类，所以我们不能直接创建`OutputStream`的对象。

> **注意**：我们也可以从`OutputStream`类的其他子类创建输出流。

* * *

## OutputStream的方法

`OutputStream`类提供了由其子类实现的不同方法。以下是其中一些方法：

  * `write()` - 将指定的字节写入输出流
  * `write(byte[] array)` - 将指定数组中的字节写入输出流
  * `flush()` - 强制将输出流中的所有数据写入目标
  * `close()` - 关闭输出流



* * *

## 示例：使用FileOutputStream实现OutputStream

以下是如何使用`FileOutputStream`类实现`OutputStream`的示例。
    
    
    import java.io.FileOutputStream;
    import java.io.OutputStream;
    
    public class Main {
    
        public static void main(String args[]) {
            String data = "This is a line of text inside the file.";
    
            try {
                OutputStream out = new FileOutputStream("output.txt");
    
                // 将字符串转换为字节
                byte[] dataBytes = data.getBytes();
    
                // 将数据写入输出流
                out.write(dataBytes);
                System.out.println("Data is written to the file.");
    
                // 关闭输出流
                out.close();
            }
    
            catch (Exception e) {
                e.getStackTrace();
            }
        }
    }
    

在上面的示例中，我们使用了`FileOutputStream`类创建了一个输出流。输出流现在与名为 **output.txt** 的文件关联起来。
    
    
    OutputStream out = new FileOutputStream("output.txt");
    

为了将数据写入 **output.txt** 文件，我们实现了以下方法。
    
    
    output.write();      // 将数据写入文件
    output.close();      // 关闭输出流
    

当我们运行程序时，**output.txt** 文件中将填充以下内容。
    
    
    This is a line of text inside the file.
    

要了解更多信息，请访问[Java OutputStream（官方Java文档）](https://docs.oracle.com/javase/7/docs/api/java/io/OutputStream.html "Java OutputStream（官方Java文档）")。
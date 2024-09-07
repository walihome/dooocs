# Java Writer 类

`java.io` 包的 `Writer` 类是一个表示字符流的抽象超类。

由于 `Writer` 是一个抽象类，它本身并没有实际用途。但是，可以使用它的子类来写入数据。

* * *

## Writer 的子类

为了使用 `Writer` 的功能，我们可以使用它的子类。其中一些子类包括：

  * [BufferedWriter](https://www.programiz.com/java-programming/bufferedwriter)
  * [OutputStreamWriter](https://www.programiz.com/java-programming/outputstreamwriter)
  * [FileWriter](https://www.programiz.com/java-programming/filewriter)
  * [StringWriter](https://www.programiz.com/java-programming/stringwriter)

![BufferedWriter、InputStreamWriter 和 StringWriter 都是 Writer 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-writer-subclasses.png)  
Writer 的子类

我们将在下一个教程中学习所有这些子类。

* * *

## 创建一个 Writer

为了创建一个 `Writer`，我们必须首先导入 `java.io.Writer` 包。一旦导入了该包，在这里我们可以创建该 writer。
    
    
    // 创建一个 Writer
    Writer output = new FileWriter();
    

在这里，我们使用 `FileWriter` 类创建了一个名为 `output` 的 writer。这是因为 `Writer` 是一个抽象类。因此，我们无法创建 `Writer` 的对象。

> **注意**：我们也可以从 `Writer` 类的其他子类创建 writer。

* * *

## Writer 的方法

`Writer` 类提供了由其子类实现的不同方法。以下是其中一些方法：

  * `write(char[] array)` - 将指定数组中的字符写入输出流
  * `write(String data)` - 将指定字符串写入 writer
  * `append(char c)` - 在当前 writer 中插入指定的字符
  * `flush()` - 强制将 writer 中的所有数据写入相应的目标
  * `close()` - 关闭 writer

* * *

## 示例：使用 FileWriter 实现 Writer

下面是如何使用 `FileWriter` 类实现 `Writer` 的示例。
    
    
    import java.io.FileWriter;
    import java.io.Writer;
    
    public class Main {
    
        public static void main(String args[]) {
    
            String data = "This is the data in the output file";
    
            try {
                // 使用 FileWriter 创建一个 Writer
                Writer output = new FileWriter("output.txt");
    
    
                // 向文件写入字符串
                output.write(data);
    
                // 关闭 writer
                output.close();
            }
    
            catch (Exception e) {
                e.getStackTrace();
            }
        }
    }
    

在上面的示例中，我们使用 `FileWriter` 类创建了一个 writer。该 writer 与文件 **output.txt** 相关联。

```java
Writer output = new FileWriter("output.txt");
```

为了向 **output.txt** 文件中写入数据，我们实现了以下方法。

```java
output.write();      // 向文件写入数据
output.close();      // 关闭 writer
```

当我们运行程序时，**output.txt** 文件将被填充以下内容。

```
This is a line of text inside the file.
```

要了解更多信息，请访问 [Java Writer（官方 Java 文档）](https://docs.oracle.com/javase/7/docs/api/java/io/Writer.html "Java Writer \(official Java documentation\)")。
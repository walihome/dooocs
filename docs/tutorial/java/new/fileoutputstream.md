---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java FileOutputStream 类

`java.io` 包中的 `FileOutputStream` 类可用于将数据（以字节形式）写入文件。

它继承了 `OutputStream` 抽象类。

![FileOutputStream 类是 Java OutputStream 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-fileoutputstream.png)  

在学习 `FileOutputStream` 之前，请确保了解 [Java Files](https://www.dooocs.com/img/java-programming/file "Java Files") 相关知识。

* * *

## 创建 FileOutputStream

为了创建文件输出流，我们首先必须导入 `java.io.FileOutputStream` 包。一旦导入包，我们可以按照以下方式在 Java 中创建文件输出流。

**1\. 使用文件路径**
    
    
    // 包括布尔参数
    FileOutputStream output = new FileOutputStream(String path, boolean value);
    
    // 不包括布尔参数
    FileOutputStream output = new FileOutputStream(String path);
    

在这里，我们创建了一个将与指定路径下的文件关联的输出流。

此外，value 是一个可选的布尔参数。如果设置为 `true`，新数据将追加到文件中现有数据的末尾。否则，新数据将覆盖文件中的现有数据。

**2\. 使用文件对象**
    
    
    FileOutputStream output = new FileOutputStream(File fileObject);
    

在这里，我们创建了一个将与 `fileObject` 指定的文件关联的输出流。

* * *

## FileOutputStream 的方法

`FileOutputStream` 类提供了对 `OutputStream` 类中不同方法的实现。

### write() 方法

  * `write()` - 将单个字节写入文件输出流
  * `write(byte[] array)` - 将指定数组中的字节写入输出流
  * `write(byte[] array, int start, int length)` - 从指定数组的位置 start 开始，将与 length 相等的字节数写入输出流



### 示例：使用 FileOutputStream 向文件中写入数据
    
    
    import java.io.FileOutputStream;
    
    public class Main {
        public static void main(String[] args) {
            
            String data = "This is a line of text inside the file.";
    
            try {
                FileOutputStream output = new FileOutputStream("output.txt");
    
                byte[] array = data.getBytes();
    
                // 将字节写入文件
                output.write(array);
    
                output.close();
            }
    
            catch(Exception e) {
                e.getStackTrace();
            }
        }
    }
    

在上面的示例中，我们创建了一个名为 `output` 的文件输出流。文件输出流与文件 **output.txt** 关联。

```java
FileOutputStream output = new FileOutputStream("output.txt");
```

要将数据写入文件，我们使用了 `write()` 方法。

当我们运行程序时，**output.txt** 文件中填充了以下内容。

```
This is a line of text inside the file.
```

> **注意**：程序中使用的 `getBytes()` 方法将字符串转换为字节数组。

* * *

### flush() 方法

我们可以使用 `flush()` 方法来清除输出流。该方法强制将输出流中的所有数据写入目标。例如，
    
    
    import java.io.FileOutputStream;
    import java.io.IOException;
    
    public class Main {
        public static void main(String[] args) throws IOException {
    
            FileOutputStream out = null;
            String data = "This is demo of flush method";
    
            try {
                out = new FileOutputStream(" flush.txt");
    
                // 使用 write() 方法
                out.write(data.getBytes());
    
                // 使用 flush() 方法
                out.flush();
                out.close();
            }
            catch(Exception e) {
                e.getStackTrace();
            }
        }
    }
    

当我们运行程序时，文件 **flush.txt** 中填充了字符串 `data` 表示的文本。

* * *

### close() 方法

我们可以使用 `close()` 方法来关闭文件输出流。一旦调用该方法，就无法再使用 `FileOutputStream` 的其他方法。

* * *

## FileOutputStream 的其他方法

方法 | 描述  
---|---  
`finalize()` | 确保调用 `close()` 方法  
`getChannel()` | 返回与输出流关联的 `FileChannel` 对象  
`getFD()` | 返回与输出流关联的文件描述符  
  
要了解更多信息，请访问 [Java FileOutputStream（官方 Java 文档）](https://docs.oracle.com/javase/7/docs/api/java/io/FileOutputStream.html#
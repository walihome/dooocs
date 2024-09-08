---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java OutputStreamWriter 类

`java.io` 包中的 `OutputStreamWriter` 类可以用来将字符形式的数据转换为字节形式的数据。

它继承了抽象类 `Writer`。

![OutputStreamWriter](https://cdn.programiz.com/sites/tutorial2program/files/java-%20outputstreamwriter.png)
OutputStreamWriter

`OutputStreamWriter` 类与其他输出流协同工作。它也被称为字节流和字符流之间的桥梁。这是因为 `OutputStreamWriter` 将其字符转换为字节。

例如，某些字符需要两个字节才能存储在存储器中。要写入这样的数据，我们可以使用输出流编写器将字符转换为相应的字节，并将字节一起存储。

* * *

## 创建 OutputStreamWriter

为了创建一个 `OutputStreamWriter`，我们必须首先导入 `java.io.OutputStreamWriter` 包。一旦导入了该包，我们就可以创建输出流编写器。

```java
// 创建一个 OutputStream
FileOutputStream file = new FileOutputStream(String path);

// 创建一个 OutputStreamWriter
OutputStreamWriter output = new OutputStreamWriter(file);
```

在上面的示例中，我们创建了一个名为 `output` 的 `OutputStreamWriter`，以及一个名为 `file` 的 `FileOutputStream`。

在这里，我们使用默认的字符编码将字符写入输出流。

然而，我们可以指定要使用的字符编码类型（**UTF8** 或 **UTF16**）来写入数据。

```java
// 创建一个 OutputStreamWriter 并指定字符编码
OutputStreamWriter output = new OutputStreamWriter(file, Charset cs);
```

在这里，我们使用 `Charset` 类来指定字符编码类型。

* * *

## OutputStreamWriter 的方法

`OutputStreamWriter` 类提供了对 `Writer` 类中不同方法的实现。

### write() 方法

- `write()` - 向写入器中写入一个字符
- `write(char[] array)` - 将指定数组中的字符写入到写入器中
- `write(String data)` - 将指定字符串写入到写入器中

* * *

### 示例：使用 OutputStreamWriter 将数据写入文件

```java
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;

public class Main {

  public static void main(String args[]) {

    String data = "This is a line of text inside the file.";

    try {
      // 创建一个 FileOutputStream
      FileOutputStream file = new FileOutputStream("output.txt");

      // 创建一个 OutputStreamWriter
      OutputStreamWriter output = new OutputStreamWriter(file);

      // 将字符串写入文件
      output.write(data);

      // 关闭写入器
      output.close();
    }

    catch (Exception e) {
      e.getStackTrace();
    }
  }
}
```

在上面的示例中，我们使用文件输出流创建了一个输出流读取器。输出流读取器与名为 **output.txt** 的文件链接起来。

```java
FileOutputStream file = new FileOutputStream("output.txt");
OutputStreamWriter output = new OutputStreamWriter(file);
```

为了将数据写入文件，我们使用 `write()` 方法。

在运行程序时，**output.txt** 文件会被填充以下内容：

```
This is a line of text inside the file.
```

* * *

## getEncoding() 方法

`getEncoding()` 方法可以用来获取用于将数据写入输出流的编码类型。例如，

```java
import java.io.OutputStreamWriter;
import java.nio.charset.Charset;
import java.io.FileOutputStream;

class Main {
  public static void main(String[] args) {

    try {
      // 创建一个输出流
      FileOutputStream file = new FileOutputStream("output.txt");

      // 创建一个使用默认编码的输出流读取器
      OutputStreamWriter output1 = new OutputStreamWriter(file);

      // 创建一个指定编码的输出流读取器
      OutputStreamWriter output2 = new OutputStreamWriter(file, Charset.forName("UTF8"));

      // 返回输出流的字符编码
      System.out.println("output1 的字符编码：" + output1.getEncoding());
      System.out.println("output2 的字符编码：" + output2.getEncoding());

      // 关闭读取器
      output1.close();
      output2.close();
    }

    catch(Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**

```
output1 的字符编码：Cp1252
output2 的字符编码：UTF8
```

在上面的示例中
---
title: Java FileWriter
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java FileWriter 类

`java.io` 包中的 `FileWriter` 类可用于向文件中写入数据（字符）。

它继承了 `OutputStreamWriter` 类。

![FileWriter 是 OutputStreamWriter 类的子类，而 OutputStreamWriter 是 Java Writer 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-filewriter.png)

在学习更多关于 `FileWriter` 之前，请确保了解 [Java File](https://www.dooocs.com/img/java-programming/file "Java File")。

* * *

## 创建一个 FileWriter

为了创建一个文件写入器，我们必须首先导入 `Java.io.FileWriter` 包。一旦我们导入了该包，我们可以这样创建文件写入器。

**1\. 使用文件名**

```java
FileWriter output = new FileWriter(String name);
```

在这里，我们创建了一个文件写入器，它将链接到指定名称的文件。

**2\. 使用文件对象**

```java
FileWriter input = new FileWriter(File fileObj);
```

在这里，我们创建了一个文件写入器，它将链接到指定的文件对象。

在上面的示例中，数据使用默认的字符编码存储。

然而，自从 Java 11 开始，我们也可以指定字符编码类型（UTF8 或 UTF16）。

```java
FileWriter input = new FileWriter(String file, Charset cs);
```

在这里，我们使用 `Charset` 类来指定文件写入器的字符编码。

* * *

## FileWriter 的方法

`FileWriter` 类提供了对 `Writer` 类中不同方法的实现。

### write() 方法

  * `write()` - 向写入器中写入一个字符
  * `write(char[] array)` - 将指定数组中的字符写入到写入器中
  * `write(String data)` - 向写入器中写入指定的字符串

* * *

### 示例：使用 FileWriter 将数据写入文件

```java
import java.io.FileWriter;

public class Main {

  public static void main(String args[]) {

    String data = "This is the data in the output file";

    try {
      // 创建一个 FileWriter
      FileWriter output = new FileWriter("output.txt");

      // 向文件写入字符串
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

在上面的示例中，我们创建了一个名为 `output` 的文件写入器。该写入器与 **output.txt** 文件相关联。

```java
FileWriter output = new FileWriter("output.txt");
```

要向文件写入数据，我们使用了 `write()` 方法。

当我们运行程序时，**output.txt** 文件将被填充以下内容。

```
This is a line of text inside the file.
```

* * *

## getEncoding() 方法

`getEncoding()` 方法可用于获取用于写入数据的编码类型。例如，

```java
import java.io.FileWriter;
import java.nio.charset.Charset;

class Main {
  public static void main(String[] args) {

    String file = "output.txt";

    try {
      // 使用默认编码创建一个 FileReader
      FileWriter output1 = new FileWriter(file);

      // 使用指定编码创建一个 FileReader
      FileWriter output2 = new FileWriter(file, Charset.forName("UTF8"));

      // 返回读取器的字符编码
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

在上面的示例中，我们创建了两个名为 `output1` 和 `output2` 的文件写入器。

- `output1` 没有指定字符编码。因此，`getEncoding()` 方法返回默认的字符编码。
- `output2` 指定了字符编码 **UTF8**。因此，`getEncoding()` 方法返回指定的字符编码。

> **注意**：我们使用了 `Charset.forName()` 方法来指定字符编码的类型。要了解更多，请访问 [Java Charset（官方 Java 文档
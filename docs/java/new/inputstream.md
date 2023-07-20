# Java InputStream 类

`java.io` 包中的 `InputStream` 类是表示字节输入流的抽象超类。

由于 `InputStream` 是一个抽象类，本身并没有什么用处。但是，它的子类可以用来读取数据。

* * *

## InputStream 的子类

为了使用 `InputStream` 的功能，我们可以使用它的子类。其中一些包括：

  * [FileInputStream](https://www.dooocs.com/img/java-programming/fileinputstream "Java FileInputStream 类")
  * [ByteArrayInputStream](https://www.dooocs.com/img/java-programming/bytearrayinputstream "Java ByteArrayInputStream 类")
  * [ObjectInputStream](https://www.programiz.com/java-programming/objectinputstream)



![FileInputStream 类继承自 InputStream 类](https://cdn.programiz.com/sites/tutorial2program/files/java-fileinputstream.png)  
Java FileInputStream 类

我们将在下一个教程中学习所有这些子类。

* * *

## 创建 InputStream

为了创建一个 InputStream，我们首先需要导入 `java.io.InputStream` 包。一旦导入了该包，我们就可以创建输入流。

```java
// 创建一个 InputStream
InputStream object1 = new FileInputStream();
```

在这里，我们使用了 `FileInputStream` 来创建一个输入流。因为 `InputStream` 是一个抽象类，所以我们不能直接创建 `InputStream` 的对象。

**注意**：我们还可以使用 `InputStream` 的其他子类来创建输入流。

* * *

## InputStream 的方法

`InputStream` 类提供了不同的方法，这些方法由它的子类实现。以下是一些常用方法：

  * `read()` - 从输入流中读取一个字节的数据
  * `read(byte[] array)` - 从流中读取字节并存储在指定的数组中
  * `available()` - 返回输入流中可用的字节数
  * `mark()` - 标记已读取数据的位置
  * `reset()` - 将控制返回到设置标记的流位置
  * `markSupported()` - 检查流是否支持 `mark()` 和 `reset()` 方法
  * `skips()` - 跳过并丢弃输入流中指定数量的字节
  * `close()` - 关闭输入流



* * *

## 示例：使用 FileInputStream 实现 InputStream

以下是如何使用 `FileInputStream` 类来实现 `InputStream`。

假设我们有一个名为 **input.txt** 的文件，内容如下：

```
这是文件中的一行文本。
```

让我们尝试使用 `FileInputStream`（`InputStream` 的子类）来读取此文件。

```java
import java.io.FileInputStream;
import java.io.InputStream;

class Main {
  public static void main(String args[]) {

    byte[] array = new byte[100];

    try {
      InputStream input = new FileInputStream("input.txt");

      System.out.println("文件中的可用字节数：" + input.available());

      // 从输入流中读取字节
      input.read(array);
      System.out.println("从文件中读取的数据：");

      // 将字节数组转换为字符串
      String data = new String(array);
      System.out.println(data);

      // 关闭输入流
      input.close();
    } catch (Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**

```
文件中的可用字节数：39
从文件中读取的数据：
这是文件中的一行文本。
```

在上面的示例中，我们使用 `FileInputStream` 类创建了一个输入流。该输入流与文件 **input.txt** 相关联。

```java
InputStream input = new FileInputStream("input.txt");
```

为了从 **input.txt** 文件中读取数据，我们实现了以下两个方法。

```java
input.read(array);  // 从输入流中读取数据
input.close();            // 关闭输入流
```

要了解更多信息，请访问[Java InputStream（官方 Java 文档）](https://docs.oracle.com/javase/7/docs/api/java/io/InputStream.html "Java InputStream（官方 Java 文档）")。
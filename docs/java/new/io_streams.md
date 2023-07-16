# Java I/O 流

在Java中，流是从源读取数据并写入目标的数据序列。

**输入流**用于从源读取数据。而**输出流**则用于向目标写入数据。

```java
class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!"); 
    }
}
```

例如，在我们的第一个**Hello World**示例中，我们使用`System.out`来打印一个字符串。这里，`System.out`是一种输出流类型。

类似地，也有用于输入的输入流。

![输入流将数据从源读取到程序中，输出流将文件从程序写入目标中](https://cdn.programiz.com/sites/tutorial2program/files/java-io-stream.png)

我们将在后续教程中详细了解输入流和输出流。

---

## 流的类型

根据流所包含的数据类型，它可以分为以下两种类型：

  * 字节流（Byte Stream）
  * 字符流（Character Stream）

---

### 字节流

字节流用于读取和写入单个字节（8位）的数据。

所有字节流类都派生自名为`InputStream`和`OutputStream`的基础抽象类。

要了解更多信息，请访问以下链接：

  * [Java InputStream 类](/java-programming/inputstream "Java InputStream 类")
  * [Java OutputStream 类](/java-programming/outputstream "Java OutputStream 类")

---

### 字符流

字符流用于读取和写入单个字符的数据。

所有字符流类都派生自名为`Reader`和`Writer`的基础抽象类。

要了解更多信息，请访问以下链接：

  * [Java Reader 类](/java-programming/reader "Java Reader 类")
  * [Java Writer 类](/java-programming/writer "Java Writer 类")
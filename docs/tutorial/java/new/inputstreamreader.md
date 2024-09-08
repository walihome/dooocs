---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java InputStreamReader类

`java.io`包中的`InputStreamReader`类可用于将字节数据转换为字符数据。

它继承了抽象类`Reader`。

![InputStreamReader类是Java Reader的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-%20inputstreamreader.png)

`InputStreamReader`类与其他输入流一起使用。它也被称为字节流和字符流之间的桥梁。这是因为`InputStreamReader`从输入流中读取字节作为字符。

例如，某些字符需要2个字节才能在存储器中存储。为了读取这样的数据，我们可以使用输入流阅读器一次读取2个字节，并将其转换为相应的字符。

* * *

## 创建一个InputStreamReader

要创建`InputStreamReader`，我们首先必须导入`java.io.InputStreamReader`包。一旦我们导入了该包，就可以创建输入流阅读器，如下所示。
    
    
    // 创建一个InputStream
    FileInputStream file = new FileInputStream(String path);
    
    // 创建一个InputStreamReader
    InputStreamReader input = new InputStreamReader(file);
    

在上面的示例中，我们创建了一个名为`input`的`InputStreamReader`，以及一个名为`file`的`FileInputStream`。

在这里，文件中的数据使用一些默认字符编码进行存储。

然而，我们也可以在文件中指定字符编码类型（**UTF8**或**UTF16**）。
    
    
    // 创建一个指定字符编码的InputStreamReader
    InputStreamReader input = new InputStreamReader(file, Charset cs);
    

在这里，我们使用`Charset`类来指定文件中的字符编码。

* * *

## InputStreamReader的方法

`InputStreamReader`类提供了对`Reader`类中不同方法的实现。

### read() 方法

  * `read()` - 从阅读器中读取一个字符
  * `read(char[] array)` - 从阅读器中读取字符，并将其存储在指定的数组中
  * `read(char[] array, int start, int length)` - 从阅读器中读取长度等于length的字符，并将其存储在指定的数组中，起始位置为start



例如，假设我们有一个名为**input.txt**的文件，其中包含以下内容。
    
    
    这是文件内的一行文本。
    

让我们尝试使用`InputStreamReader`读取此文件。

    import java.io.InputStreamReader;
    import java.io.FileInputStream;

    class Main {
      public static void main(String[] args) {

        // 创建一个字符数组
        char[] array = new char[100];

        try {
          // 创建一个FileInputStream
          FileInputStream file = new FileInputStream("input.txt");

          // 创建一个InputStreamReader
          InputStreamReader input = new InputStreamReader(file);

          // 从文件中读取字符
          input.read(array);
          System.out.println("流中的数据：");
          System.out.println(array);

          // 关闭阅读器
          input.close();
        }

        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    流中的数据：
    这是文件内的一行文本。
    

在上面的示例中，我们使用文件输入流创建了一个输入流阅读器。输入流阅读器与文件**input.txt**相关联。

    FileInputStream file = new FileInputStream("input.txt");
    InputStreamReader input = new InputStreamReader(file);
    

为了从文件中读取字符，我们使用了`read()`方法。

* * *

## getEncoding() 方法

`getEncoding()`方法用于获取用于存储数据的输入流的编码类型。例如，
    
    import java.io.InputStreamReader;
    import java.nio.charset.Charset;
    import java.io.FileInputStream;

    class Main {
      public static void main(String[] args) {

        try {
          // 创建一个FileInputStream
          FileInputStream file = new FileInputStream("input.txt");

          // 创建一个默认编码的InputStreamReader
          InputStreamReader input1 = new InputStreamReader(file);

          // 创建一个指定编码的InputStreamReader
          InputStreamReader input2 = new InputStreamReader(file, Charset.forName("UTF8"));

          // 返回输入流的字符编码
          System.out.println("input1的字符编码：" + input1.getEncoding());
          System.out.println("input2的字符编码：" + input2.getEncoding());

          // 关闭
---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java FileReader 类

`java.io` 包中的 `FileReader` 类可用于从文件中读取数据（以字符形式）。

它继承自 `InputStreamReader` 类。

![FileReader 扩展了 InputStreamReader 和 Reader 类]()  
FileReader 扩展了 InputStreamReader 类

在学习有关 `FileReader` 的内容之前，请确保您了解 [Java 文件](https://www.dooocs.com/img/java-programming/file "Java 文件")。

* * *

## 创建一个 FileReader

为了创建一个文件读取器，我们首先必须导入 `java.io.FileReader` 包。一旦我们导入了包，下面是我们如何创建文件读取器。

**1\. 使用文件名**
    
    
    FileReader input = new FileReader(String name);
    

在这里，我们创建了一个文件读取器，它将连接到指定名称的文件。

**2\. 使用文件对象**
    
    
    FileReader input = new FileReader(File fileObj);
    

在这里，我们创建了一个文件读取器，它将连接到文件对象所指定的文件。

在上面的示例中，文件中的数据使用某个默认字符编码进行存储。

然而，从 Java 11 开始，我们也可以在文件中指定字符编码类型（ **UTF-8** 或 **UTF-16** ）。
    
    
    FileReader input = new FileReader(String file, Charset cs);
    

在这里，我们使用了 `Charset` 类来指定文件读取器的字符编码。

* * *

## FileReader 的方法

`FileReader` 类提供了对 `Reader` 类中不同方法的实现。

### read() 方法

  * `read()` \- 从读取器中读取单个字符
  * `read(char[] array)` \- 从读取器中读取字符并存储在指定的数组中
  * `read(char[] array, int start, int length)` \- 从读取器中读取与长度相等的字符数，并从起始位置开始存储在指定的数组中



例如，假设我们有一个名为 **input.txt** 的文件，其内容如下。
    
    
    这是文件中的一行文本。
    

让我们尝试使用 `FileReader` 来读取该文件。
    
    
    import java.io.FileReader;
    
    class Main {
      public static void main(String[] args) {
    
        // 创建一个字符数组
        char[] array = new char[100];
    
        try {
          // 使用 FileReader 创建一个读取器
          FileReader input = new FileReader("input.txt");
    
          // 读取字符
          input.read(array);
          System.out.println("文件中的数据：");
          System.out.println(array);
    
          // 关闭读取器
          input.close();
        }
    
        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    
    文件中的数据：
    这是文件中的一行文本。
    

在上面的示例中，我们创建了一个名为 input 的文件读取器。文件读取器与文件 **input.txt** 相连接。
    
    
    FileInputStream input = new FileInputStream("input.txt");
    

为了从文件中读取数据，我们使用了 `read()` 方法。

> **注意**：文件 **input.txt** 应该存在于当前工作目录中。

* * *

## getEncoding() 方法

`getEncoding()` 方法可用于获取在文件中存储数据时使用的编码类型。例如，
    
    
    import java.io.FileReader;
    import java.nio.charset.Charset;
    
    class Main {
      public static void main(String[] args) {
    
        try {
          // 创建一个使用默认编码的 FileReader
          FileReader input1 = new FileReader("input.txt");
    
          // 创建一个指定编码的 FileReader
          FileReader input2 = new FileReader("input.txt", Charset.forName("UTF8"));
    
          // 返回文件读取器的字符编码
          System.out.println("input1 的字符编码：" + input1.getEncoding());
          System.out.println("input2 的字符编码：" + input2.getEncoding());
    
          // 关闭读取器
          input1.close();
          input2.close();
        }
    
        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    
    input1 的字符编码：Cp1252
    input2 的字符编码：UTF8
    

在上面的示例中，我们创建
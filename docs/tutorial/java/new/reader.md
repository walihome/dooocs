---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java Reader 类

`java.io` 包中的 `Reader` 类是一个表示字符流的抽象超类。

由于 `Reader` 是一个抽象类，本身没有实际用处。但是，可以使用它的子类来读取数据。

---

## Reader 的子类

为了使用 `Reader` 的功能，我们可以使用它的子类。其中一些子类包括：

  * [BufferedReader](https://www.programiz.com/java-programming/bufferedreader "Java BufferedReader")
  * [InputStreamReader](https://www.programiz.com/java-programming/inputstreamreader "Java InputStreamReader")
  * [FileReader](https://www.programiz.com/java-programming/filereader "Java FileReader")
  * [StringReader](https://www.programiz.com/java-programming/stringreader "Java StringReader")

![BufferedReader、InputStreamReader 和 StringReader 是 Reader 的子类](https://cdn.programiz.com/sites/tutorial2program/files/java-reader-subclasses.png)  
Reader 的子类

在下一个教程中，我们将学习所有这些子类。

---

## 创建 Reader

为了创建一个 `Reader`，我们必须首先导入 `java.io.Reader` 包。一旦我们导入了该包，我们就可以创建读取器。

```java
// 创建一个 Reader
Reader input = new FileReader();
```

在这个例子中，我们使用 `FileReader` 类创建了一个读取器。这是因为 `Reader` 是一个抽象类。因此，我们无法创建 `Reader` 的对象。

> **注意**：我们也可以从 `Reader` 的其他子类创建读取器。

---

## Reader 的方法

`Reader` 类提供了由其子类实现的不同方法。以下是一些常用的方法：

  * `ready()` \- 检查读取器是否准备好被读取
  * `read(char[] array)` \- 从流中读取字符，并将其存储在指定的数组中
  * `read(char[] array, int start, int length)` \- 从流中读取与指定长度相等的字符，并将其存储在从 start 开始的指定数组中
  * `mark()` \- 标记数据已经读取到的位置
  * `reset()` \- 返回控制到标记所在的位置
  * `skip()` \- 丢弃流中指定数量的字符

---

## 示例: 使用 FileReader 实现 Reader

下面是如何使用 `FileReader` 类实现 `Reader` 的示例。

假设我们有一个名为 **input.txt** 的文件，其中包含以下内容。

```
This is a line of text inside the file.
```

让我们尝试使用 `FileReader`（`Reader` 的子类）读取这个文件。

```java
import java.io.Reader;
import java.io.FileReader;

class Main {
    public static void main(String[] args) {

        // 创建一个字符数组
        char[] array = new char[100];

        try {
            // 使用 FileReader 创建一个读取器
            Reader input = new FileReader("input.txt");

            // 检查读取器是否准备好
            System.out.println("流中是否有数据？ " + input.ready());

            // 读取字符
            input.read(array);
            System.out.println("流中的数据：");
            System.out.println(array);

            // 关闭读取器
            input.close();
        }

        catch(Exception e) {
            e.getStackTrace();
        }
    }
}
```

**输出结果**

```
流中是否有数据？ true
流中的数据：
This is a line of text inside the file.
```

在上面的示例中，我们使用 `FileReader` 类创建了一个读取器。该读取器与文件 **input.txt** 关联。

```java
Reader input = new FileReader("input.txt");
```

为了从 **input.txt** 文件中读取数据，我们实现了以下方法。

```java
input.read();       // 从读取器中读取数据
input.close();      // 关闭读取器
```

要了解更多信息，请访问 [Java Reader（官方 Java 文档）](https://docs.oracle.com/javase/7/docs/api/java/io/Reader.html "Java Reader（官方 Java 文档）")。
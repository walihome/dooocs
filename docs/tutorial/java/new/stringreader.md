# Java StringReader 类

`java.io` 包中的 `StringReader` 类可用于从字符串中读取数据（以字符为单位）。

它扩展了抽象类 `Reader`。

![StringReader 类是 Java Reader 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-stringreader.png)

> **注意**：在 `StringReader` 中，指定的字符串充当了单独读取字符的源。

* * *

## 创建 StringReader

要创建一个 `StringReader`，我们首先必须导入 `java.io.StringReader` 包。一旦我们导入了包，就可以按照以下方式创建字符串阅读器。

```java
// 创建 StringReader
StringReader input = new StringReader(String data);
```

在这里，我们创建了一个从名为 `data` 的指定字符串中读取字符的 `StringReader`。

* * *

## StringReader 的方法

`StringReader` 类提供了对 `Reader` 类中不同方法的实现。

### read() 方法

  * `read()` - 从字符串阅读器中读取一个字符
  * `read(char[] array)` - 从阅读器中读取字符并将其存储在指定数组中
  * `read(char[] array, int start, int length)` - 从阅读器中读取与长度相等的字符数，并从起始位置开始将其存储在指定数组中

* * *

### 示例：Java StringReader

```java
import java.io.StringReader;

public class Main {
  public static void main(String[] args) {

    String data = "This is the text read from StringReader.";

    // 创建字符数组
    char[] array = new char[100];

    try {
      // 创建 StringReader
      StringReader input = new StringReader(data);

      // 使用 read 方法
      input.read(array);
      System.out.println("从字符串中读取的数据：");
      System.out.println(array);

      input.close();
    }
    catch(Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**

```
从字符串中读取的数据：
This is the text read from StringReader.
```

在上面的示例中，我们创建了一个名为 `input` 的字符串阅读器。该字符串阅读器与字符串 `data` 关联。

```java
String data = "This is a text in the string.";
StringReader input = new StringReader(data);
```

为了从字符串中读取数据，我们使用了 `read()` 方法。

在这里，该方法从阅读器中读取字符数组，并将其存储在指定数组中。

* * *

### skip() 方法

要丢弃和跳过指定数目的字符，我们可以使用 `skip()` 方法。例如，

```java
import java.io.StringReader;

public class Main {
  public static void main(String[] args) {

    String data = "This is the text read from StringReader";
    System.out.println("原始数据：" + data);

    // 创建字符数组
    char[] array = new char[100];

    try {
      // 创建 StringReader
      StringReader input = new StringReader(data);

      // 使用 skip() 方法
      input.skip(5);

      // 使用 read 方法
      input.read(array);
      System.out.println("跳过 5 个字符后的数据：");
      System.out.println(array);

      input.close();
    }

    catch(Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**

```
原始数据：This is the text read from the StringReader
跳过 5 个字符后的数据：
is the text read from the StringReader
```

在上面的示例中，我们使用 `skip()` 方法跳过了字符串阅读器中的 5 个字符。因此，原始字符串阅读器中的字符 `'T'`、`'h'`、`'i'`、`'s'` 和 `' '` 被跳过。

* * *

### close() 方法

要关闭字符串阅读器，我们可以使用 `close()` 方法。一旦调用了 `close()` 方法，就不能再使用该阅读器从字符串中读取数据。

* * *

## StringReader 的其他方法

方法 | 描述  
---|---  
`ready()` | 检查字符串阅读器是否准备好被读取  
`mark()` | 在阅读器
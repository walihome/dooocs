# Java StringWriter 类

`java.io` 包中的 `StringWriter` 类可以用于将数据（以字符形式）写入字符串缓冲区。

它扩展了抽象类 `Writer`。

![StringWriter 类是 Java Writer 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-stringwriter.png)

> **注意**：在Java中，字符串缓冲区被认为是一个可变的字符串。也就是说，我们可以修改字符串缓冲区。要从字符串缓冲区转换为字符串，可以使用 `toString()` 方法。

* * *

## 创建 StringWriter

要创建 `StringWriter`，我们首先必须导入 `java.io.StringWriter` 包。一旦我们导入了该包，我们可以这样创建字符串写入器。

```java
// 创建一个 StringWriter
StringWriter output = new StringWriter();
```

在这里，我们使用默认的字符串缓冲区容量创建了字符串写入器。但是，我们也可以指定字符串缓冲区的容量。

```java
// 使用指定的字符串缓冲区容量创建一个 StringWriter
StringWriter output = new StringWriter(int size);
```

这里，`size` 指定了字符串缓冲区的容量。

* * *

## StringWriter 的方法

`StringWriter` 类提供了对 `Writer` 类中不同方法的实现。

### write() 方法

  * `write()` - 将单个字符写入字符串写入器
  * `write(char[] array)` - 将指定数组中的字符写入到写入器中
  * `write(String data)` - 将指定的字符串写入到写入器中

* * *

### 示例：Java StringWriter

```java
import java.io.StringWriter;

public class Main {
  public static void main(String[] args) {

    String data = "This is the text in the string.";

    try {
      // 使用默认的字符串缓冲区容量创建一个 StringWriter
      StringWriter output = new StringWriter();

      // 向字符串缓冲区写入数据
      output.write(data);

      // 打印字符串写入器
      System.out.println("StringWriter 中的数据：" + output);

      output.close();
    }

    catch (Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**

```
StringWriter 中的数据：This is the text in the string.
```

在上面的示例中，我们创建了一个名为 `output` 的字符串写入器。

```java
StringWriter output = new StringWriter();
```

然后我们使用 `write()` 方法将字符串数据写入到字符串缓冲区中。

> **注意**：我们使用了 `toString()` 方法来以字符串形式获取字符串缓冲区中的输出数据。

* * *

### 从 StringBuffer 获取数据

  * `getBuffer()` - 返回字符串缓冲区中的数据
  * `toString()` - 将字符串缓冲区中的数据作为字符串返回

例如，

```java
import java.io.StringWriter;

public class Main {
  public static void main(String[] args) {

    String data = "This is the original data";

    try {
      // 使用默认的字符串缓冲区容量创建一个 StringWriter
      StringWriter output = new StringWriter();

      // 向字符串缓冲区写入数据
      output.write(data);

      // 返回字符串缓冲区
      StringBuffer stringBuffer = output.getBuffer();
      System.out.println("StringBuffer: " + stringBuffer);

      // 以字符串形式返回字符串缓冲区
      String string = output.toString();
      System.out.println("String: " + string);

      output.close();
    }

    catch (Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**

```
StringBuffer: This is the original data
String: This is the original data
```

在这里，我们使用了 `getBuffer()` 方法来获取字符串缓冲区中的数据。同时，`toString()` 方法将以字符串形式返回字符串缓冲区中的数据。

* * *

### close() 方法

要关闭字符串写入器，我们可以使用 `close()` 方法。

然而，在 `StringWriter` 类中，`close()` 方法没有任何效果。即使调用了 `close()` 方法，我们仍然可以使用该类的其他方法。

* * *

## StringWriter 的其他方法

方法 | 描述  
---|---  
`flush
---
title: Java BufferedWriter
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java BufferedWriter 类

`java.io` 包的 `BufferedWriter` 类可以与其他字符写入器一起使用，以更高效地写入数据（以字符为单位）。

它继承了抽象类 `Writer`。

![BufferedWriter 类是 Java Writer 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-bufferedwriter.png)  


* * *

## BufferedWriter 的工作原理

`BufferedWriter` 维护一个内部缓冲区，大小为 **8192 个字符**。

在写操作期间，字符被写入内部缓冲区而不是磁盘。一旦缓冲区填满或写入器关闭，缓冲区中的所有字符将被写入磁盘。

因此，通向磁盘的传输次数减少了。这就是为什么使用 `BufferedWriter` 来写入字符更快的原因。

* * *

## 创建 BufferedWriter

要创建 `BufferedWriter`，我们必须首先导入 `java.io.BufferedWriter` 包。下面是创建缓冲写入器的方法。
    
    
    // 创建 FileWriter
    FileWriter file = new FileWriter(String name);
    
    // 创建 BufferedWriter
    BufferedWriter buffer = new BufferedWriter(file);
    

在上面的示例中，我们创建了一个名为 `buffer` 的 `BufferedWriter`，并与名为 `file` 的 `FileWriter` 关联。

在这里，`BufferedWriter` 的内部缓冲区具有默认大小为 8192 个字符。但是，我们也可以指定内部缓冲区的大小。
    
    
    // 创建具有指定大小的内部缓冲区的 BufferedWriter
    BufferedWriter buffer = new BufferedWriter(file, int size);
    

缓冲区将帮助更高效地向文件写入字符。

* * *

## BufferedWriter 的方法

`BufferedWriter` 类提供了对 `Writer` 中不同方法的实现。

### write() 方法

  * `write()` \- 向写入器的内部缓冲区写入单个字符
  * `write(char[] array)` \- 将指定数组中的字符写入写入器
  * `write(String data)` \- 将指定的字符串写入写入器



* * *

### 示例：使用 BufferedWriter 将数据写入文件

```java
import java.io.FileWriter;
import java.io.BufferedWriter;

public class Main {

  public static void main(String args[]) {

    String data = "这是输出文件中的数据";

    try {
      // 创建 FileWriter
      FileWriter file = new FileWriter("output.txt");

      // 创建 BufferedWriter
      BufferedWriter output = new BufferedWriter(file);

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

在上面的示例中，我们创建了一个名为 `output` 的缓冲写入器，并与 `FileWriter` 关联。缓冲写入器与 **output.txt** 文件相关联。

```java
FileWriter file = new FileWriter("output.txt");
BufferedWriter output = new BufferedWriter(file);
```

要向文件写入数据，我们使用了 `write()` 方法。

当运行该程序时，**output.txt** 文件将被填充以下内容。

```
这是文件中的一行文本。
```

* * *

### flush() 方法

要清除内部缓冲区，我们可以使用 `flush()` 方法。此方法强制写入器将缓冲区中的所有数据写入目标文件。

例如，假设我们有一个名为 **output.txt** 的空文件。

```java
import java.io.FileWriter;
import java.io.BufferedWriter;

public class Main {
  public static void main(String[] args) {

    String data = "这是 flush 方法的演示";

    try {
      // 创建 FileWriter
      FileWriter file = new FileWriter("flush.txt");

      // 创建 BufferedWriter
      BufferedWriter output = new BufferedWriter(file);

      // 向文件写入数据
      output.write(data);

      // 刷新数据到目标文件
      output.flush();
      System.out.println("数据已刷新到文件。");

      output.close();
    }

    catch(Exception e) {
      e.getStackTrace();
    }
  }
}
```

**输出**
# Java BufferedReader

`java.io`包中的`BufferedReader`类可以与其他读取器一起使用，以更高效地读取数据（字符）。

它继承了抽象类`Reader`。

![Java中BufferedReader类继承自Reader类]
Java BufferedReader

---

## BufferedReader的工作原理

`BufferedReader`维护一个内部缓冲区，大小为**8192个字符**。

在`BufferedReader`的读取操作期间，会从磁盘中读取一块字符，并将其存储在内部缓冲区中。然后从内部缓冲区逐个读取字符。

因此，减少了与磁盘的通信次数。这就是为什么使用`BufferedReader`读取字符更快的原因。

---

## 创建一个BufferedReader

为了创建一个`BufferedReader`，我们必须首先导入`java.io.BuferedReader`包。一旦我们导入了该包，就可以按照以下方式创建读取器。

```java
// 创建一个FileReader
FileReader file = new FileReader(String file);

// 创建一个BufferedReader
BufferedReader buffer = new BufferedReader(file);
```

在上面的示例中，我们创建了一个名为`buffer`的`BufferedReader`，并使用名为`file`的`FileReader`。

在这里，`BufferedReader`的内部缓冲区具有默认大小为8192个字符。但是，我们也可以指定内部缓冲区的大小。

```java
// 创建一个具有指定大小内部缓冲区的BufferdReader
BufferedReader buffer = new BufferedReader(file, int size);
```

缓冲区将有助于更快地从文件中读取字符。

---

## BufferedReader的方法

`BufferedReader`类提供了对`Reader`中不同方法的实现。

### read()方法

* `read()` \- 从读取器的内部缓冲区中读取一个字符
* `read(char[] array)` \- 从读取器中读取字符并存储在指定的数组中
* `read(char[] array, int start, int length)` \- 从读取器中读取与长度相等的字符数，并从起始位置开始将其存储在指定的数组中

例如，假设我们有一个名为**input.txt**的文件，其中包含以下内容。

```text
This is a line of text inside the file.
```

让我们尝试使用`BufferedReader`来读取该文件。

```java
import java.io.FileReader;
import java.io.BufferedReader;

class Main {
  public static void main(String[] args) {

    // 创建一个字符数组
    char[] array = new char[100];

    try {
      // 创建一个FileReader
      FileReader file = new FileReader("input.txt");

      // 创建一个BufferedReader
      BufferedReader input = new BufferedReader(file);

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
```

**输出**

```text
文件中的数据：
This is a line of text inside the file.
```

在上面的示例中，我们创建了一个名为input的缓冲读取器。缓冲读取器与**input.txt**文件相关联。

```java
FileReader file = new FileReader("input.txt");
BufferedReader input = new BufferedReader(file);
```

在这里，我们使用`read()`方法从缓冲读取器的内部缓冲区读取字符数组。

---

### skip()方法

要丢弃和跳过指定数量的字符，我们可以使用`skip()`方法。例如，

```java
import java.io.FileReader;
import java.io.BufferedReader;

public class Main {

  public static void main(String args[]) {

    // 创建一个字符数组
    char[] array = new char[100];

    try {
      // 假设input.txt文件包含以下文本
      // This is a line of text inside the file.
      FileReader file = new FileReader("input.txt");

      // 创建一个BufferedReader
      BufferedReader input = new BufferedReader(file);

      // 跳
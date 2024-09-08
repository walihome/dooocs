---
title: Java FileInputStream
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java FileInputStream 类

`java.io` 包中的 `FileInputStream` 类可用于从文件中读取数据（以字节为单位）。

它扩展了 `InputStream` 抽象类。

![Java FileInputStream 是 InputStream 类的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-fileinputstream.png)

在我们学习 `FileInputStream` 之前，请确保了解 [Java Files](https://www.dooocs.com/img/java-programming/file "Java Files")。

---

## 创建 FileInputStream

为了创建一个文件输入流，我们首先必须导入 `java.io.FileInputStream` 包。一旦我们导入了该包，在 Java 中可以这样创建文件输入流。

**1\. 使用文件路径**

```java
FileInputStream input = new FileInputStream(stringPath);
```

在这里，我们创建了一个与指定路径上的文件相关联的输入流。

**2\. 使用文件对象**

```java
FileInputStream input = new FileInputStream(File fileObject);
```

在这里，我们创建了一个与 `fileObject` 指定的文件相关联的输入流。

---

## FileInputStream 的方法

`FileInputStream` 类提供了对 `InputStream` 类中不同方法的实现。

### read() 方法

- `read()` - 从文件中读取一个字节
- `read(byte[] array)` - 从文件中读取字节数，并将其存储在指定的数组中
- `read(byte[] array, int start, int length)` - 从文件中读取长度等于 `length` 的字节数，并将其从位置 `start` 开始存储在指定的数组中

假设我们有一个名为 **input.txt** 的文件，其中包含以下内容。

```plaintext
This is a line of text inside the file.
```

让我们尝试使用 `FileInputStream` 读取此文件。

```java
import java.io.FileInputStream;

public class Main {

  public static void main(String args[]) {

     try {
        FileInputStream input = new FileInputStream("input.txt");

        System.out.println("文件中的数据: ");

        // 读取第一个字节
        int i = input.read();

       while(i != -1) {
           System.out.print((char)i);

           // 从文件中读取下一个字节
           i = input.read();
        }
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
文件中的数据:
This is a line of text inside the file.
```

在上面的示例中，我们创建了一个名为 `input` 的文件输入流。该输入流与 **input.txt** 文件相关联。

```java
FileInputStream input = new FileInputStream("input.txt");
```

为了从文件中读取数据，我们在 while 循环内部使用了 `read()` 方法。

---

### available() 方法

要获取可用字节数，我们可以使用 `available()` 方法。例如，

```java
import java.io.FileInputStream;

public class Main {

   public static void main(String args[]) {

      try {
         // 假设 input.txt 文件包含以下文本
         // This is a line of text inside the file.
         FileInputStream input = new FileInputStream("input.txt");

         // 返回可用字节数
         System.out.println("开始时可用字节数: " + input.available());

         // 从文件中读取 3 个字节
         input.read();
         input.read();
         input.read();

         // 返回可用字节数
         System.out.println("结束时可用字节数: " + input.available());

         input.close();
      }

      catch (Exception e) {
         e.getStackTrace();
      }
   }
}
```

**输出**

```
开始时可用字节数: 39
结束时可用字节数: 36
```

在上面的示例中，

1. 我们首先使用 `available()` 方法检查文件输入流中可用字节数。
2. 然后我们使用 `read()` 方法三次从文件输入流中读取了 3 个字节。
3. 现在，在读取这些字节之后，我们再次检查了可用字节数。此时，可用字节数减少了 3。

---

### skip() 方法

要丢弃并跳过指定数量的字节，我们可以使用 `skip()` 方法。例如，

```java
import java.io.FileInputStream;

public class Main {

   public static void main(String args[]) {

      try {
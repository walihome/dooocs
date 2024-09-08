---
title: Java 文件类
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java文件类

`java.io`包中的`File`类用于对文件和目录执行各种操作。

还有一个名为`java.nio`的包可以用来处理文件。但是，在本教程中，我们将专注于`java.io`包。

* * *

## 文件和目录

文件是用于存储相关信息的命名位置。例如，

**main.java**是一个包含有关Java程序的信息的Java文件。

目录是文件和子目录的集合。目录中的一个目录称为子目录。

* * *

## 创建Java文件对象

要创建`File`对象，我们需要首先导入`java.io.File`包。一旦我们导入了包，我们就可以创建文件对象。

```java
// 使用路径创建一个File对象
File file = new File(String pathName);
```

在这里，我们创建了一个名为file的文件对象。该对象可用于处理文件和目录。

> **注意**：在Java中，创建文件对象并不意味着创建文件。相反，文件对象是文件或目录路径名的抽象表示（在括号中指定）。

* * *

## Java文件操作方法

操作 | 方法 | 包  
---|---|---  
创建文件 | `createNewFile()` | `java.io.File`  
读取文件 | `read()` | `java.io.FileReader`  
写入文件 | `write()` | `java.io.FileWriter`  
删除文件 | `delete()` | `java.io.File`  

* * *

### Java创建文件

要创建一个新文件，我们可以使用`createNewFile()`方法。它返回：

  * `true`，如果创建了一个新文件。
  * `false`，如果文件已经存在于指定的位置。

### 示例：创建一个新文件

```java
// 导入File类
import java.io.File;

class Main {
  public static void main(String[] args) {

    // 为当前位置创建一个文件对象
    File file = new File("newFile.txt");

    try {

      // 尝试基于该对象创建一个文件
      boolean value = file.createNewFile();
      if (value) {
        System.out.println("新文件已创建。");
      }
      else {
        System.out.println("文件已经存在。");
      }
    }
    catch(Exception e) {
      e.getStackTrace();
    }
  }
}
```

在上面的示例中，我们创建了一个名为file的文件对象。文件对象与指定的文件路径相关联。

```java
File file = new File("newFile.txt");
```

在这里，我们使用文件对象来创建具有指定路径的新文件。

**如果newFile.txt在当前位置不存在**，则创建该文件并显示此消息。

```
新文件已创建。
```

**然而，如果newFile.txt已经存在**，我们将看到此消息。

```
文件已经存在。
```

* * *

### Java读取文件

要从文件中读取数据，我们可以使用[InputStream](https://www.dooocs.com/img/java-programming/inputstream "Java InputStream Class")或[Reader](https://www.dooocs.com/img/java-programming/reader "Java Reader Class")的子类。

### 示例：使用FileReader读取文件

假设我们有一个名为**input.txt**的文件，其内容如下：

```
这是文件中的一行文字。
```

现在让我们尝试使用Java的`FileReader`来读取该文件。

```java
// 导入FileReader类
import java.io.FileReader;

class Main {
  public static void main(String[] args) {

    char[] array = new char[100];
    try {
      // 使用FileReader创建一个读取器
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
```

**输出**

```
文件中的数据：
这是文件中的一行文字。
```

在上面的示例中，我们创建了一个名为input的FileReader对象。它现在与**input.txt**文件相关联。

```java
FileReader input = new FileReader("input.txt");
```

要从**input.txt**文件中读取数据，我们使用了`FileReader`的read()方法。

* * *

### Java写入文件

要向文件中写入数据，我们可以
---
title: ObjectOutputStream
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java ObjectOutputStream 类

`java.io` 包中的 `ObjectOutputStream` 类用于写入可以由 `ObjectInputStream` 读取的对象。

它扩展了 `OutputStream` 抽象类。

![ObjectOutputStream 类继承了 OutputStream 类](https://cdn.programiz.com/sites/tutorial2program/files/java-objectoutputstream-class.png)  
Java ObjectOutputStream 类

* * *

## ObjectOutputStream 的工作原理

基本上，`ObjectOutputStream` 使用类名和对象值对 Java 对象进行编码。因此生成相应的流。这个过程被称为序列化。

这些转换后的流可以存储在文件中，并且可以在网络之间传输。

> **注意**：`ObjectOutputStream` 类只写入实现了 `Serializable` 接口的对象。这是因为在写入流时需要对对象进行序列化。

* * *

## 创建 ObjectOutputStream

要创建一个对象输出流，我们必须首先导入 `java.io.ObjectOutputStream` 包。一旦我们导入包，以下是如何创建输出流的方法。

```java
// 创建一个 FileOutputStream，将 ObjectOutputStream 的对象写入其中
FileOutputStream fileStream = new FileOutputStream(String file);

// 创建 ObjectOutputStream
ObjectOutputStream objStream = new ObjectOutputStream(fileStream);
```

在上面的示例中，我们创建了一个名为 objStream 的对象输出流，该输出流与名为 fileStream 的文件输出流相关联。

* * *

## ObjectOutputStream 的方法

`ObjectOutputStream` 类提供了对 `OutputStream` 类中不同方法的实现。

## write() 方法

  * `write()` - 向输出流写入一个字节的数据
  * `writeBoolean()` - 以布尔形式写入数据
  * `writeChar()` - 以字符形式写入数据
  * `writeInt()` - 以整数形式写入数据
  * `writeObject()` - 将对象写入输出流

* * *

### 示例 1：Java ObjectOutputStream

让我们看看如何使用 `ObjectOutputStream` 将对象存储到文件中，然后使用 `ObjectInputStream` 从文件中读取这些对象。

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

class Main {
    public static void main(String[] args) {

        int data1 = 5;
        String data2 = "This is programiz";

        try {

            FileOutputStream file = new FileOutputStream("file.txt");

            // 创建一个 ObjectOutputStream
            ObjectOutputStream output = new ObjectOutputStream(file);

            // 向输出流写入对象
            output.writeInt(data1);
            output.writeObject(data2);

            // 使用 ObjectInputStream 读取数据
            FileInputStream fileStream = new FileInputStream("file.txt");
            ObjectInputStream objStream = new ObjectInputStream(fileStream);

            System.out.println("整数数据：" + objStream.readInt());
            System.out.println("字符串数据：" + objStream.readObject());

            output.close();
            objStream.close();
        }

        catch (Exception e) {
            e.getStackTrace();
        }
    }
}
```

**输出**
```
整数数据：5
字符串数据：This is programiz
```

在上面的示例中，我们使用了 `readInt()` 方法和 `readObject()` 方法从文件中读取整数数据和对象数据。

这里，我们使用 `ObjectOutputStream` 将数据写入文件。然后使用 `ObjectInputStream` 从文件中读取数据。

* * *

### 示例 2：Java ObjectOutputStream

让我们再看一个例子，

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Dog implements Serializable {

    String name;
    String breed;

    public Dog(String name, String breed) {
        this.name = name;
        this.breed = breed;
    }
}

class Main {
    public static void main(String[] args) {

        // 创建 Dog 类的对象
        Dog dog1 = new Dog("Tyson", "Labrador");

        try {
            FileOutputStream fileOut = new FileOutputStream("file.txt");

            // 创建 ObjectOutputStream
            ObjectOutputStream objOut = new ObjectOutputStream(fileOut);

            // 向输出流写入对象
            objOut.writeObject(dog1);

            // 读取对象
            FileInputStream fileIn = new FileInputStream("file.txt");
            ObjectInputStream objIn = new ObjectInputStream(fileIn);

            // 读取对象
            Dog newDog = (Dog) objIn.readObject();

            System.out.println("狗的名字：" + newDog.name);
            System.out.println("狗的
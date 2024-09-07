# Java ObjectInputStream 类

`java.io` 包中的 `ObjectInputStream` 类可用于读取先前由 `ObjectOutputStream` 写入的对象。

它扩展了 `InputStream` 抽象类。

![ObjectInputStream 类扩展了 InputStream 类。](https://cdn.programiz.com/sites/tutorial2program/files/java-objectinputstream-class.png) 

在学习 `ObjectInputStream` 类之前，请确保你了解 [ObjectOutputStream 类](https://www.dooocs.com/img/java-programming/objectoutputstream "Java ObjectOutputStream Class")。

* * *

## ObjectInputStream 的工作原理

`ObjectInputStream` 主要用于读取由 `ObjectOutputStream` 写入的数据。

基本上，`ObjectOutputStream` 将 Java 对象转换为相应的流。这称为序列化。这些转换后的流可以存储在文件中或通过网络传输。

现在，如果我们需要读取这些对象，我们将使用 `ObjectInputStream` 将流转换回相应的对象。这称为反序列化。

* * *

## 创建 ObjectInputStream

为了创建一个对象输入流，我们必须首先导入 `java.io.ObjectInputStream` 包。一旦我们导入了该包，我们就可以创建一个输入流。

```java
// 创建与指定文件关联的文件输入流
FileInputStream fileStream = new FileInputStream(String file);

// 使用文件输入流创建对象输入流
ObjectInputStream objStream = new ObjectInputStream(fileStream);
```

在上面的示例中，我们创建了一个名为 `objStream` 的对象输入流，它与名为 `fileStream` 的文件输入流相关联。

现在，`objStream` 可以用来从文件中读取对象。

* * *

## ObjectInputStream 的方法

`ObjectInputStream` 类提供了 `InputStream` 类中不同方法的实现。

## read() 方法

  * `read()` \- 从输入流中读取一个字节的数据
  * `readBoolean()` \- 以布尔形式读取数据
  * `readChar()` \- 以字符形式读取数据
  * `readInt()` \- 以整数形式读取数据
  * `readObject()` \- 从输入流中读取对象

* * *

### 示例 1: Java ObjectInputStream

让我们看一下如何使用 `ObjectInputStream` 类来读取由 `ObjectOutputStream` 类写入的对象。

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
            ObjectOutputStream output = new ObjectOutputStream(file);

            // 使用 ObjectOutputStream 将数据写入文件
            output.writeInt(data1);
            output.writeObject(data2);

            FileInputStream fileStream = new FileInputStream("file.txt");
            // 创建一个对象输入流
            ObjectInputStream objStream = new ObjectInputStream(fileStream);

            // 使用 readInt() 方法
            System.out.println("Integer data :" + objStream.readInt());

            // 使用 readObject() 方法
            System.out.println("String data: " + objStream.readObject());

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
```plaintext
Integer data: 5
String data: This is programiz
```

在上面的示例中，我们使用了 `readInt()` 和 `readObject()` 方法从文件中读取整数数据和对象数据。

在这里，我们使用 `ObjectOutputStream` 将数据写入文件。然后，我们使用 `ObjectInputStream` 从文件中读取数据。

* * *

### 示例 2: Java ObjectInputStream

让我们看一个实际的例子，

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

        // 创建一个 Dog 类的对象
        Dog dog = new Dog("Tyson", "Labrador");

        try {
            FileOutputStream file = new FileOutputStream("file.txt");

            // 创建一个 ObjectOutputStream
            ObjectOutputStream output = new ObjectOutputStream(file);

            // 向输出流写入对象
            output.writeObject(dog);

            FileInputStream file
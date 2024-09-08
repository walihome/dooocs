---
title: Java ByteArrayOutputStream
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java ByteArrayOutputStream 类

`java.io` 包中的 `ByteArrayOutputStream` 类可以用于写入一系列的输出数据（以字节为单位）。

它继承了 `OutputStream` 抽象类。

![ByteArrayOutputStream 是 Java OutputStream 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-bytearrayoutputstream.png)


> **注意**：`ByteArrayOutputStream` 内部维护了一个字节数组来存储数据。

* * *

## 创建 ByteArrayOutputStream

为了创建一个字节数组输出流，我们首先必须导入 `java.io.ByteArrayOutputStream` 包。一旦我们导入了这个包，我们就可以按照以下方式创建一个输出流。
    
    
    // 使用默认大小创建一个 ByteArrayOutputStream
    ByteArrayOutputStream out = new ByteArrayOutputStream();
    

在这里，我们创建了一个将数据写入具有默认大小 32 字节的字节数组的输出流。然而，我们可以更改数组的默认大小。
    
    
    // 使用指定大小创建一个 ByteArrayOutputStream
    ByteArrayOutputStream out = new ByteArrayOutputStream(int size);
    

这里的 `size` 参数指定了数组的长度。

* * *

## ByteArrayOutputStream 的方法

`ByteArrayOutputStream` 类实现了 `OutputStream` 类中的不同方法。

### write() 方法

  * `write(int byte)` - 将指定的字节写入输出流
  * `write(byte[] array)` - 将指定数组中的字节写入输出流
  * `write(byte[] arr, int start, int length)` - 从数组中的指定位置开始，写入与 `length` 相等的字节数到输出流中
  * `writeTo(ByteArrayOutputStream out1)` - 将当前输出流的所有数据写入到指定的输出流中



### 示例：使用 ByteArrayOutputStream 写入数据
    
    
    import java.io.ByteArrayOutputStream;
    
    class Main {
      public static void main(String[] args) {
    
        String data = "这是字符串内的一行文本。";
    
        try {
          // 创建一个输出流
          ByteArrayOutputStream out = new ByteArrayOutputStream();
          byte[] array = data.getBytes();
    
          // 向输出流写入数据
          out.write(array);
    
          // 以字符串形式检索输出流中的数据
          String streamData = out.toString();
          System.out.println("输出流: " + streamData);
    
          out.close();
        }
    
        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    
    输出流: 这是字符串内的一行文本。
    

在上面的示例中，我们创建了一个名为 `output` 的字节数组输出流。

要将数据写入输出流，我们使用了 `write()` 方法。

> **注意**：程序中使用的 `getBytes()` 方法将字符串转换为字节数组。

* * *

### 从 ByteArrayOutputStream 访问数据

  * `toByteArray()` - 返回输出流中存在的数组
  * `toString()` - 以字符串形式返回输出流的全部数据



例如，
    
    
    import java.io.ByteArrayOutputStream;
    
    class Main {
      public static void main(String[] args) {
        String data = "这是数据。";
    
        try {
          // 创建一个输出流
          ByteArrayOutputStream out = new ByteArrayOutputStream();
    
          // 向输出流写入数据
          out.write(data.getBytes());
    
          // 返回字节数组
          byte[] byteData = out.toByteArray();
          System.out.print("使用 toByteArray() 返回的数据：");
          for(int i=0; i<byteData.length; i++) {
            System.out.print((char)byteData[i]);
          }
    
          // 返回字符串
          String stringData = out.toString();
          System.out.println("\n使用 toString() 返回的数据：" + stringData);
    
          out.close();
        }
    
        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    
    使用 toByteArray() 返回的数据：这是数据。
    使用 toString() 返回的数据：这是数据。
    

在上面的示例中，我们创建了一个字节数组来存储 `toByteArray()` 方法返回的数据。

然后，我们使用循环访问数组中的每个字节。在这里，通过类型转换将每个字节转换为相应的字符。

* * *

### close() 方法

要关闭输出流，我们可以使用 `close()` 方法。

然而，在 `ByteArrayOutputStream` 类中调用 `close()` 方法没有任何效果。即使在
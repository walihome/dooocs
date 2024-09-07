# Java ByteArrayInputStream 类

`java.io` 包中的 `ByteArrayInputStream` 类可以用于读取一组输入数据（以字节为单位）。

它继承了 `InputStream` 抽象类。

![ByteArrayInputStream 类继承了 InputStream 类。]
Java ByteArrayInputStream

> **注意**：在 `ByteArrayInputStream` 中，使用字节数组来创建输入流。它包含一个内部数组来存储特定字节数组的数据。

* * *

## 创建 ByteArrayInputStream

为了创建一个字节数组输入流，我们首先必须导入 `java.io.ByteArrayInputStream` 包。一旦导入了该包，我们可以通过以下方式创建输入流。
    
    
    // 创建一个读取整个数组的 ByteArrayInputStream
    ByteArrayInputStream input = new ByteArrayInputStream(byte[] arr);
    

在这里，我们创建了一个从 `arr` 数组中读取整个数据的输入流。但是，我们也可以创建只从数组中读取一些数据的输入流。
    
    
    // 创建一个读取部分数组的 ByteArrayInputStream
    ByteArrayInputStream input = new ByteArrayInputStream(byte[] arr, int start, int length);
    

在这里，输入流从起始位置开始读取与长度相等的字节数。

* * *

## ByteArrayInputStream 的方法

`ByteArrayInputStream` 类提供了与 `InputStream` 类中不同方法的实现。

### read() 方法

  * `read()` - 从输入流中读取单个字节
  * `read(byte[] array)` - 从输入流中读取字节并存储到指定的数组中
  * `read(byte[] array, int start, int length)` - 从流中读取与长度相等的字节，并从指定位置开始存储到数组中



### 示例：ByteArrayInputStream 读取数据
    
    
    import java.io.ByteArrayInputStream;
    
    public class Main {
      public static void main(String[] args) {
    
        // 创建一个字节数组
        byte[] array = {1, 2, 3, 4};
    
        try {
          ByteArrayInputStream input = new ByteArrayInputStream(array);
    
          System.out.print("从输入流中读取的字节：");
    
          for(int i= 0; i < array.length; i++) {
    
            // 读取字节
            int data = input.read();
            System.out.print(data + ", ");
          }
          input.close();
        }
    
        catch(Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    
    从输入流中读取的字节：1, 2, 3, 4,
    

在上面的示例中，我们创建了一个名为 `input` 的字节数组输入流。
    
    
    ByteArrayInputStream input = new ByteArrayInputStream(array);
    

在这里，输入流包含来自指定数组的所有数据。为了从输入流中读取数据，我们使用了 `read()` 方法。

* * *

### available() 方法

要获取输入流中可用字节的数量，我们可以使用 `available()` 方法。例如，
    
    
    import java.io.ByteArrayInputStream;
    
    public class Main {
    
      public static void main(String args[]) {
    
        // 创建一个字节数组
        byte[] array = { 1, 2, 3, 4 };
    
        try {
          ByteArrayInputStream input = new ByteArrayInputStream(array);
    
          // 返回可用的字节数
          System.out.println("开始时可用的字节数：" + input.available());
    
          // 从输入流中读取 2 个字节
          input.read();
          input.read();
    
          // 返回可用的字节数
          System.out.println("结束时可用的字节数：" + input.available());
    
          input.close();
        }
    
        catch (Exception e) {
          e.getStackTrace();
        }
      }
    }
    

**输出**
    
    
    开始时可用的字节数：4
    结束时可用的字节数：2
    

在上面的示例中，

  1. 我们使用 `available()` 方法来检查输入流中可用的字节数。
  2. 然后，我们使用 `read()` 方法两次从输入流中读取 2 个字节。
  3. 现在，在读取了这两个字节之后，我们检查可用的字节数。这次可用的字节数减少了 2。



* * *

### skip() 方法
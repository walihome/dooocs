# Java BufferedInputStream 类

`java.io` 包中的 `BufferedInputStream` 类与其他输入流一起使用，以更高效地读取数据（以字节为单位）。

它继承了 `InputStream` 抽象类。

![BufferedInputStream 类是 Java InputStream 的子类。](https://cdn.programiz.com/sites/tutorial2program/files/java-bufferdinputstream.png)


* * *

## BufferedInputStream 的工作原理

`BufferedInputStream` 维护一个内部**缓冲区大小为 8192 字节**。

在 `BufferedInputStream` 的读操作中，从磁盘中读取一块字节并存储在内部缓冲区中。然后从内部缓冲区逐个字节地读取。

因此，通过使用 `BufferedInputStream`，减少了与磁盘之间的通信次数。这就是为什么使用 `BufferedInputStream` 读取字节更快的原因。

* * *

## 创建 BufferedInputStream

要创建 `BufferedInputStream`，我们必须首先导入 `java.io.BufferedInputStream` 包。一旦我们导入了这个包，下面是如何创建输入流的步骤。
    
    
    // 创建 FileInputStream
    FileInputStream file = new FileInputStream(String path);
    
    // 创建 BufferedInputStream
    BufferedInputStream buffer = new BufferInputStream(file);
    

在上面的示例中，我们创建了一个名为 buffer 的 `BufferdInputStream`，该输入流与名为 file 的 `FileInputStream` 关联。

在这里，内部缓冲区的默认大小为 8192 字节。但是，我们也可以指定内部缓冲区的大小。
    
    
    // 创建具有指定大小的 BufferedInputStream 的内部缓冲区
    BufferedInputStream buffer = new BufferInputStream(file, int size);
    

该缓冲区将帮助更快地从文件中读取字节。

* * *

## BufferedInputStream 的方法

`BufferedInputStream` 类提供了对 `InputStream` 类中不同方法的实现。

### read() 方法

  * `read()` \- 从输入流中读取一个字节
  * `read(byte[] arr)` \- 从流中读取字节并将其存储在指定数组中
  * `read(byte[] arr, int start, int length)` \- 从流中读取与长度相等的字节数，并从指定位置开始将其存储在指定数组中



假设我们有一个名为 **input.txt** 的文件，其中包含以下内容。
    
    
    这是文件内的一行文本。
    

让我们尝试使用 `BufferedInputStream` 来读取该文件。
    
    
    import java.io.BufferedInputStream;
    import java.io.FileInputStream;
    
    class Main {
        public static void main(String[] args) {
            try {
    
                // 创建 FileInputStream
                FileInputStream file = new FileInputStream("input.txt");
    
                // 创建 BufferedInputStream
                BufferedInputStream input = new BufferedInputStream(file);
    
                // 从文件中读取第一个字节
                int i = input .read();
    
                while (i != -1) {
                    System.out.print((char) i);
    
                    // 从文件中读取下一个字节
                    i = input.read();
                }
                input.close();
            }
    
            catch (Exception e) {
                e.getStackTrace();
            }
        }
    }
    

**输出**
    
    
    这是文件内的一行文本。
    

在上面的示例中，我们创建了一个名为 buffer 的缓冲输入流，并与 `FileInputStream` 关联。该输入流与文件 **input.txt** 相连。
    
    
    FileInputStream file = new FileInputStream("input.txt");
    BufferedInputStream buffer = new BufferedInputStream(file);
    

在这里，我们使用 `read()` 方法从缓冲读取器的内部缓冲区读取字节数组。

* * *

### available() 方法

要获取输入流中可用字节数，可以使用 `available()` 方法。例如，
    
    
    import java.io.FileInputStream;
    import java.io.BufferedInputStream;
    
    public class Main {
    
       public static void main(String args[]) {
    
          try {
    
             // 假设 input.txt 文件包含以下文本
             // 这是文件内的一行文本。
             FileInputStream file = new FileInputStream("input.txt");
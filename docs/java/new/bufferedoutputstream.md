# Java BufferedOutputStream 类

`java.io` 包中的 `BufferedOutputStream` 类用于与其他输出流一起更高效地写入数据（以字节为单位）。

它扩展了 `OutputStream` 抽象类。

![Java BufferedOutputStream 类继承了 OutputStream 类]()  
Java BufferedOutputStream

* * *

## BufferedOutputStream 的工作原理

`BufferedOutputStream` 维护一个内部**缓冲区，大小为 8192 字节**。

在写入操作期间，字节被写入内部缓冲区而不是磁盘。一旦缓冲区被填满或流关闭，整个缓冲区将被写入磁盘。

因此，通过使用 `BufferedOutputStream` 写入字节速度更快，减少了与磁盘的通信次数。

* * *

## 创建 BufferedOutputStream

为了创建 `BufferedOutputStream`，我们首先必须导入 `java.io.BufferedOutputStream` 包。一旦导入了包，我们可以创建输出流的方式如下：
    
    
    // 创建 FileOutputStream
    FileOutputStream file = new FileOutputStream(String path);
    
    // 创建 BufferedOutputStream
    BufferedOutputStream buffer = new BufferOutputStream(file);
    

在上面的示例中，我们创建了一个名为 buffer 的 `BufferdOutputStream`，并使用名为 file 的 `FileOutputStream`。

在这里，内部缓冲区的默认大小为 8192 字节。但是，我们也可以指定内部缓冲区的大小。
    
    
    // 创建具有指定大小内部缓冲区的 BufferedOutputStream
    BufferedOutputStream buffer = new BufferOutputStream(file, int size);
    

该缓冲区将有助于更快地将字节写入文件。

* * *

## BufferedOutputStream 的方法

`BufferedOutputStream` 类为 `OutputStream` 类中的不同方法提供了实现。

### write() 方法

  * `write()` - 向输出流的内部缓冲区写入单个字节
  * `write(byte[] array)` - 将指定数组中的字节写入输出流
  * `write(byte[] arr, int start, int length)` - 从位置 start 开始，向输出流写入等于 length 的字节数组中的字节个数



### 示例：使用 BufferedOutputStream 向文件写入数据
    
    
    import java.io.FileOutputStream;
    import java.io.BufferedOutputStream;
    
    public class Main {
        public static void main(String[] args) {
    
            String data = "This is a line of text inside the file";
    
            try {
                // 创建 FileOutputStream
                FileOutputStream file = new FileOutputStream("output.txt");
    
                // 创建 BufferedOutputStream
                BufferedOutputStream output = new BufferedOutputStream(file);
    
                byte[] array = data.getBytes();
    
                // 将数据写入输出流
                output.write(array);
                output.close();
            }
    
            catch (Exception e) {
                e.getStackTrace();
            }
        }
    }
    

在上面的示例中，我们创建了一个名为 output 的缓冲输出流以及 `FileOutputStream`。输出流与文件 **output.txt** 相关联。
    
    
    FileOutputStream file = new FileOutputStream("output.txt");
    BufferedOutputStream output = new BufferedOutputStream(file);
    

为了向文件中写入数据，我们使用了 `write()` 方法。

当运行该程序时，**output.txt** 文件中将填充以下内容。
    
    
    This is a line of text inside the file.
    

> **注意**：程序中使用的 `getBytes()` 方法将字符串转换为字节数组。

* * *

## flush() 方法

可以使用 `flush()` 方法来清除内部缓冲区。该方法会强制输出流将缓冲区中的所有数据写入目标文件。例如，
    
    
    import java.io.FileOutputStream;
    import java.io.BufferedOutputStream;
    
    public class Main {
        public static void main(String[] args) {
    
            String data = "This is a demo of the flush method";
    
            try {
                // 创建 FileOutputStream
                FileOutputStream file = new FileOutputStream("flush.txt");
    
                // 创建 BufferedOutputStream
                BufferedOutputStream buffer = new BufferedOutputStream(file);
    
                // 将数据写入输出流
                buffer.write(data.getBytes());
    
                // 刷新数据到目标
                buffer.flush();
                System.out.println("Data is flushed to the
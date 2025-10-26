---
title: 字节流
description: 了解 Java 中 InputStream 和 OutputStream 的基本原理与使用，掌握 FileInputStream、FileOutputStream 及缓冲流的核心概念与实战技巧。
order: 31
keywords: [Java, 字节流, InputStream, OutputStream, FileInputStream, 缓冲流]
---

# 字节流

## 前置知识
> 在阅读本章前,你需要了解:  
> - 基础的 Java 编程语法  
> - 文件读写的基本概念（文件是什么，文件操作的目的）  
> - 简单的异常处理机制（try-catch）

## 为什么需要字节流?

想象一下，你现在在写一个小程序，想从一个文件中读取数据，比如一张图片或者一个视频文件，或者是你想把数据写入一个文件。你该怎么做呢？这时候，你会用到 Java 的输入输出流（IO 流）系统。

Java IO 流大致分为两类：字节流和字符流。字节流专门用来处理二进制数据，比如图片、视频、音频、任何非文本文件。字符流更适合处理文本文件，比如 .txt 文件。但今天，我们先破解字节流的秘密。

字节流通过一系列抽象类和具体实现，让我们得以一边一字节地读写数据，一边保证代码的灵活性和可维护性。它们能应对各种文件类型和数据源的读写。

那么，接下来我们一步步走进 Java 字节流的世界，先了解核心类型，再轻松驾驭实际操作。

---

## InputStream 和 OutputStream：字节流的两个小伙伴

### 什么是 InputStream 和 OutputStream？

简单来说：

- **InputStream**：是所有字节输入流的父类，负责“读取”数据，就像你用吸管从杯子里吸饮料一样。
- **OutputStream**：是所有字节输出流的父类，负责“写出”数据，就像你用嘴把水吹出去一样。

它们都是抽象类，仅提供方法定义，不能直接使用。我们得用它们具体的子类。

### 为什么需要它们？

Java 设计了统一的输入流和输出流接口，让我们不管是读取文件、网络数据，还是从内存缓冲区拿数据，都用同一套操作方式，大大简化了编码复杂度和复用性。

### 基本用法示例

先来个最简单的案例：用 `FileInputStream` 和 `FileOutputStream` 读取和写入文件。

```java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class SimpleFileCopy {
    public static void main(String[] args) {
        String inputFile = "input.txt";
        String outputFile = "output.txt";

        try (FileInputStream inputStream = new FileInputStream(inputFile);
             FileOutputStream outputStream = new FileOutputStream(outputFile)) {

            int byteData;
            // 每次读取一个字节，直到文件末尾
            while ((byteData = inputStream.read()) != -1) {
                outputStream.write(byteData); // 写出该字节
            }
            System.out.println("文件复制完成。");
        } catch (IOException e) {
            System.err.println("文件操作异常: " + e.getMessage());
        }
    }
}
```

**这段代码做了什么：**

1. 用 `FileInputStream` 打开一个文件输入流，从 `input.txt` 读取数据。
2. 用 `FileOutputStream` 创建一个文件输出流，写入到 `output.txt`。
3. 不停读取输入流里的每个字节，直到读到 -1（表示文件末尾）。
4. 每读取一个字节，就写出到输出流。
5. 使用 try-with-resources 自动关闭流，避免资源泄露。

这样，“字节”一个个被复制过去，完成了基础的文件复制工作。

---

## 逐步深入：为什么单字节读写效率低？缓冲流帮你提速

上面例子没错，但实战中，一个字节一个字节地读写数据效率非常低，就像用小勺一滴滴喝汤，累死你。

如果一次性多读多写一点数据，就能大大提高性能。这就是缓冲流（Buffered Streams）登场的理由。

### 缓冲流是什么？

缓冲流是 InputStream 和 OutputStream 的装饰者，它们内部维护一个字节数组缓存区。流从文件读取大块数据到缓冲区，再逐字节交给程序，写数据时也是先写入缓冲区，缓冲区满了才统一写出底层资源。

这样能大量减少系统调用次数，性能提升明显。

### 代码示例：使用 BufferedInputStream 和 BufferedOutputStream 改进文件复制

```java
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class BufferedFileCopy {
    public static void main(String[] args) {
        String inputFile = "input.txt";
        String outputFile = "output_buffered.txt";

        try (BufferedInputStream bufferedInput = new BufferedInputStream(new FileInputStream(inputFile));
             BufferedOutputStream bufferedOutput = new BufferedOutputStream(new FileOutputStream(outputFile))) {

            byte[] buffer = new byte[8192]; // 缓冲区，8KB
            int bytesRead;

            // 批量读取，减少IO调用
            while ((bytesRead = bufferedInput.read(buffer)) != -1) {
                bufferedOutput.write(buffer, 0, bytesRead); // 写出缓冲区内容
            }
            System.out.println("使用缓冲流复制完成。");
        } catch (IOException e) {
            System.err.println("文件操作异常: " + e.getMessage());
        }
    }
}
```

**这段代码做了什么：**

1. 创建 `BufferedInputStream` 和 `BufferedOutputStream`，分别包装文件输入流和输出流。
2. 定义 8KB 的字节数组作为缓冲区。
3. 每次调用 `read(buffer)` 尝试从文件批量读取多个字节到缓冲区。
4. 再一次性将缓冲区的数据写出，提高了 IO 效率。
5. 也用了 try-with-resources 确保流关闭。

实测性能能提升数倍，这在大文件读写中特别明显。

---

## 深入理解字节流的读取方式：单字节 vs 批量读取

为什么我们强调“批量读取”？

让我们看两个差异简单对比：

- 单字节读取：`int b = inputStream.read();` 一次只能读取一个字节，方法调用多，系统开销大。
- 批量读取：`int count = inputStream.read(byte[] buffer);` 一次读取多个字节，减少调用，效率高。

缓冲流帮你自动处理这件事，但若不用缓冲流，你自己也可以手工实现批量读取。

---

## 常见陷阱：忘了关闭流或不正确关闭流会发生什么？

这里说一条实战中无数人踩过的坑：

你可能觉得，写完代码后输入输出流自动就关闭了，文件就写好了，但其实如果你忘了关闭或刷新缓冲流，数据没写完文件可能是空的或残缺的。

特别是缓冲输出流，它会先把数据在内存缓冲区积攒，只有调用 `flush()` 或关闭流，数据才被真正写入磁盘。

### 小坑示例

```java
BufferedOutputStream out = new BufferedOutputStream(new FileOutputStream("output.txt"));
out.write("Hello".getBytes());
// 忘了调用 out.close() 或 out.flush()
```

结果文件可能是空的，因为缓冲区数据没被写入。

**解决方法：**

- 始终使用 try-with-resources 自动关闭流。
- 如果没有自动关闭，记得调用 `flush()` 手动刷新缓冲区。

---

## 代码示例三：文件复制实战，整合错误处理和缓冲流

综合我们前面学到的内容，这里做个结合示例，更符合生产环境需求。

```java
import java.io.*;

public class FileCopyUtil {

    /**
     * 复制文件，支持大文件，使用缓冲流，提高效率
     * @param sourcePath 源文件路径
     * @param destPath 目标文件路径
     * @throws IOException 可能抛出的IO异常
     */
    public static void copyFile(String sourcePath, String destPath) throws IOException {
        // 创建输入输出流并用缓冲流包装
        try (BufferedInputStream inputStream = new BufferedInputStream(new FileInputStream(sourcePath));
             BufferedOutputStream outputStream = new BufferedOutputStream(new FileOutputStream(destPath))) {
             
            byte[] buffer = new byte[16 * 1024]; // 16KB缓冲区
            int bytesRead;
            
            while ((bytesRead = inputStream.read(buffer)) != -1) {
                outputStream.write(buffer, 0, bytesRead);
            }
            // 最后 flush 确保所有数据写出
            outputStream.flush();
        }
    }

    public static void main(String[] args) {
        String src = "largefile.bin";
        String dest = "largefile_copy.bin";
        
        try {
            copyFile(src, dest);
            System.out.println("文件成功复制！");
        } catch (IOException e) {
            System.err.println("复制失败: " + e.getMessage());
        }
    }
}
```

**这段代码做了什么：**

1. 定义了一个通用的复制方法，整合缓冲流，支持大文件高效读写。
2. 设计了合理的缓冲区大小，避免一次读写太小带来的性能浪费。
3. 用 try-with-resources 语法，保证流关闭，避免资源泄露。
4. 主函数演示调用复制操作，并做异常捕获。

---

## 对比总结

| 方式                     | 代码复杂度 | 性能       | 适用场景             |
|--------------------------|------------|------------|----------------------|
| 单字节读写               | 简单       | 低         | 小文件或简单练习     |
| 批量读取 Byte Array      | 中等       | 中         | 文件读写、网络传输   |
| 缓冲流（Buffered Streams）| 简单（包装）| 高         | 大文件、高性能需求场景|

缓冲流是对基础字节流的“升级利器”，实际项目中，除非非常简单任务，你几乎都会用它。

---

:::tip 💡 实战建议
- 读取文件时优先使用 `BufferedInputStream`，写文件时优先用 `BufferedOutputStream`，性能和代码简洁度兼顾。
- 缓冲区大小默认是 8KB，但如果文件特别大或系统资源足够，可以适当扩大缓冲区，比如 16KB 或 32KB，提升吞吐量。
- 始终使用 try-with-resources 关闭流，避免资源泄漏导致的系统错误。
- 操作完缓冲流后，最好调用 `flush()` 确保缓冲区数据写入底层设备。
:::

:::warning ⚠️ 常见陷阱
- 忘记关闭流导致文件句柄泄漏，长时间运行程序会让系统资源耗尽。
- 忘记调用 `flush()`（尤其是缓冲输出流），导致文件内容不完整或空文件。
- 错误捕获不充分，导致异常信息被吞掉，排查困难。
- 一次读写一个字节，对大文件会极端降低性能。
:::

---

## 小结

- **InputStream 和 OutputStream** 是 Java 字节流的核心抽象，分别负责读和写字节数据。
- **FileInputStream 和 FileOutputStream** 直接操作文件，是最基础的字节流实现。
- **缓冲流（BufferedInputStream 和 BufferedOutputStream）** 大幅提高了 IO 性能，是实际项目的首选。
- 一定要注重资源关闭和缓冲区刷新，避免“坑”。
- 实践时，从基础单字节读写到批量读取，再到使用缓冲流，循序渐进写出高效又健壮的代码。

---

## 延伸思考

- 除了缓冲流，Java IO 还有哪些流可以帮助处理不同的需求？比如数据过滤、对象序列化等。
- Buffer 和 Channel（NIO）在性能和使用上的区别，何时该选 NIO？
- 在多线程环境下，如何安全地使用流，避免数据竞争？

---

通过本章学习，希望你和我一样，能在理解字节流原理的基础上，写出简洁高效的文件读写代码，逐渐摆脱繁琐的低效操作，拥抱更专业的 Java IO 世界。下次遇到文件处理任务时，就有底气信手拈来了。
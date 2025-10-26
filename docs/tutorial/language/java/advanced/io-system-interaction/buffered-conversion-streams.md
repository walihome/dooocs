---
title: 缓冲流与转换流
description: 深入理解 Java 中 BufferedReader/Writer 和 InputStreamReader/OutputStreamWriter 的使用及原理
order: 33
keywords: [Java, 缓冲流, 转换流, BufferedReader, InputStreamReader, 字符编码]
---

# 缓冲流与转换流

## 前置知识
> 在阅读本章前,你需要了解:  
> - Java 基础的字节流和字符流（InputStream、OutputStream、Reader、Writer）的概念  
> - 基本的文件读写操作  
> - 字符编码的初步认识（如UTF-8、GBK等）

## 为什么需要缓冲流与转换流？

想象一下，你正在开发一个程序，需要从一个大型文本文件中读取数据。你直接用基本的 `FileReader` 或 `FileInputStream` 逐字节（或逐字符）读取文件内容时，程序会频繁访问硬盘，每次读取都很慢。如果文件很大，这种慢得让人抓狂的读文件方法显然不太行。

这时，“缓冲流”登场了。它相当于给程序加了一个“缓存”（Buffer），先从硬盘一次性读取一大块数据放到内存里，然后你的程序从这个内存缓存里快速拿数据，一次访问不用跑到硬盘，速度自然能快好多。

另外，还有一种“转换流”，它的作用是帮我们“翻译”字节流和字符流。为什么需要它呢？因为文件最终是字节存储的，而我们平时编程更习惯处理字符。如果直接用字节流处理文本，容易出错。转换流就是在字节和字符之间搭桥，让我们用字符流的方法，安全高效地处理各种编码的文本文件。

了解了这些，咱们接下来一步步拆解这两类流的用法，搞清楚它们是怎么帮我们提升读写效率和处理字符编码的。

---

## BufferedReader 与 BufferedWriter：给字符流装上“缓存”电池

### 简单定义

- **BufferedReader** 和 **BufferedWriter** 是字符流的缓冲流。它们包装一个已有的字符输入/输出流，添加一个内存缓冲区，减少直接磁盘I/O的次数。
- 读写字符时，先读入/写入一个较大的内存块，再逐字符、逐行提供给程序，大大提升速度。

### 为什么需要它？

一个不带缓冲的字符流，每次调用 `read()` 或 `write()` 方法，都会直接操作底层文件系统，频繁且慢。缓冲流的出现类似买了快递“顺丰快递包裹箱”，把多个包裹先集中装箱，然后快速运输，减少了单个包裹的多次往返，效率显著提高。

### 基础用法

用最简单的示例，读取一个文本文件内容并打印：

```java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample {
    public static void main(String[] args) {
        String filePath = "example.txt";

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(filePath))) {
            String line;
            // 逐行读取文件内容
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**  
1. 我们用 `FileReader` 打开了一个字符输入流，底层是文件。  
2. 用 `BufferedReader` 包装它，给它加了缓冲区。  
3. 调用 `readLine()` 方法，一次读取文件的一行。`BufferedReader` 从磁盘读入较大块数据缓冲到内存。  
4. 程序逐行打印，避免了频繁磁盘I/O，效率提升明显。

### 分步解析

- `new FileReader(filePath)`: 打开文件字符流（无缓冲）。  
- `new BufferedReader(...)`: 创建缓冲流包装。  
- `readLine()`: 利用缓冲区快速读取一行文本。

---

## InputStreamReader 与 OutputStreamWriter：字节流到字符流的“翻译官”

### 简单定义

- **InputStreamReader** 和 **OutputStreamWriter** 是“转换流”，负责将字节流转换成字符流，反之亦然。他们非常重要，因为底层文件是字节的，但大部分文本处理需要字符。
- 它们支持指定字符编码，例如从 UTF-8 字节流转换成字符流。

### 为什么需要转换流？

举个例子，你从网络、文件中拿到的都是字节（byte），但你想用字符串的方式处理这些数据。你不能直接用字节流处理带中文、日文、特殊符号的文本，处理过程很容易乱码。

转换流就是建桥者，把字节“翻译”为字符；或者把字符“翻译”为字节时指定编码去写文件，确保数据不丢失。

### 基础用法

把一个 UTF-8 编码的字节文件转成字符流读取：

```java
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.IOException;
import java.nio.charset.StandardCharsets;

public class InputStreamReaderExample {
    public static void main(String[] args) {
        String filePath = "utf8_text.txt";

        try (
            FileInputStream fis = new FileInputStream(filePath);
            InputStreamReader isr = new InputStreamReader(fis, StandardCharsets.UTF_8);
            BufferedReader bufferedReader = new BufferedReader(isr)
        ) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**  
1. 用 FileInputStream 读字节文件（底层字节流）。  
2. InputStreamReader 将字节流按照 UTF-8 解码成字符流。  
3. BufferedReader 作为缓冲区，提高读取效率。  
4. 程序逐行打印文本内容。

### 说明

- 指定编码很关键，如果编码指错，中文会变成乱码。  
- `InputStreamReader` 是“字节→字符”的桥梁。

---

## 综合示例——读取带特定编码的文件并写出到另一文件

假设我们要读取一个 GBK 编码的文本文件，然后转成 UTF-8 编码写到另一个文件中，这在多编码环境下非常实用。

```java
import java.io.*;

public class EncodingConversionExample {

    public static void main(String[] args) {
        String inputFilePath = "gbk_text.txt";
        String outputFilePath = "utf8_text_converted.txt";

        try (
            // 读取 GBK 编码文件的输入流
            InputStreamReader reader = new InputStreamReader(new FileInputStream(inputFilePath), "GBK");
            BufferedReader bufferedReader = new BufferedReader(reader);

            // 写入 UTF-8 编码文件的输出流
            OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(outputFilePath), "UTF-8");
            BufferedWriter bufferedWriter = new BufferedWriter(writer)
        ) {
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                bufferedWriter.write(line);
                bufferedWriter.newLine(); // 换行
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**  
1. 用 **InputStreamReader** 将 GBK 编码字节流转换成字符流。  
2. 包装缓冲流 `BufferedReader`，逐行读取文件。  
3. 用 **OutputStreamWriter** 指定 UTF-8 编码把字符流写出到文件。  
4. 用 `BufferedWriter` 增加写入效率。  
5. 程序实现了文件编码的转换。

### 分步解析：

1. 发生了两次编码转换：先“解码”GBK字节为字符；然后把字符“编码”为UTF-8字节写出。  
2. 缓冲流让读写都高效顺畅。

---

:::warning ⚠️ 常见陷阱
- **没有指定字符编码，导致乱码**  
  默认情况下可能使用平台默认编码，遇到跨平台或多语言文件时非常容易乱码。务必显式指定编码，尤其是处理中文、日文、韩文等多字节字符集时。  
- **BufferedReader 只适用于字符流，不适用于字节流**  
  不能直接用 BufferedReader 包装 InputStream，否则会编译失败。先转换成字符流再包装。  
- **关闭流时要注意顺序和资源释放**  
  使用 try-with-resources 确保输入输出流自动关闭，避免资源泄漏。  
:::

---

## 对比总结

| 流类型             | 作用                       | 适用场景                               | 注意点                                   |
|--------------------|----------------------------|--------------------------------------|------------------------------------------|
| BufferedReader/Writer | 字符流的高速缓存          | 读取或写入字符文件，避免频繁I/O       | 仅包装字符流，提升性能                     |
| InputStreamReader/OutputStreamWriter | 字节流和字符流之间转换  | 需要按指定编码处理字节文件或网络流    | 必须指定正确编码，避免乱码                 |

---

:::tip 💡 实战建议
- **代码中总是显式指定字符编码**，避免跨平台文件读取时产生乱码问题。  
- 在读写文本文件时，优先使用缓冲流包装字符流，提升效率同时简化代码。  
- 做编码转换时，先用 InputStreamReader 指定读入编码，写出时用 OutputStreamWriter 指定目标编码。  
- 用 try-with-resources 自动管理流关闭，避免资源泄漏。  
:::

---

## 延伸思考

- 如果文件特别大，缓冲流默认的缓冲区大小够用吗？如何调整缓冲区大小？会有多大影响？  
- OutputStreamWriter 和 BufferedWriter 谁先包装谁更合适？为什么？  
- 文件的编码自动探测是否可能？如果不指定编码，程序能否智能识别？  

欢迎尝试动手实践，然后观察不同编码和缓冲区设置对性能和正确性的影响。

---

## 小结

- **缓冲流提升字符流效率，减少磁盘访问次数。**  
- **转换流完成字节与字符之间的编码转换，避免乱码。**  
- **两者结合使用，是文本文件读写的最佳实践。**  
- **显式指定编码和合理管理流资源是生产中不可忽视的重要细节。**

希望你通过本章的学习，能够明白缓冲流和转换流的设计初衷与使用方法，写出更加健壮、高效的文本处理代码。加油，我们下章继续探索更多 Java 流的精彩内容！
```

---
title: 字符流
description: 深入理解 Java 字符流体系，包括 Reader/Writer 抽象类及其常用实现，掌握字符编码转换技术，避免常见误区。
order: 32
keywords: [字符流, Reader, Writer, FileReader, FileWriter, 字符编码转换, Java IO]
---

# 字符流

## 前置知识

> 在阅读本章前，你需要了解：Java 输入输出基础、字节流（InputStream/OutputStream）的基本使用，以及字符的概念。

## 为什么需要字符流？

想象你正在写一个程序，需要读取或写入文本文件，比如配置文件、日志文件或者简单的文本文档。你可能已经熟悉了字节流（InputStream 和 OutputStream），但是文字毕竟是字符组成的，要用字节流处理字符文件，必须自己去关注编码转换的问题，这很繁琐而且容易出错。 

这就好比你用电话线传递一封英文书信，如果对方没按正确的语言和符号来解读，那通信内容就乱了。字符流的出现，就是为了“自动翻译”这种语言与机器码之间的关系，让程序员更专注于文本内容本身，而不用担心底层的编码细节。

我们来一步步认识 Java 的字符流体系，看看它是如何帮助我们轻松读写文本的。

## 具体章节

### 字符流的核心体系：Reader 和 Writer

**简单定义**  
Reader 和 Writer 是 Java IO 中处理字符的抽象基类。它们的设计目标是专门处理字符数据，不像字节流那样只关注原始的字节。

**为什么需要它？**  
因为计算机存储的是字节，字符又会根据编码形式（如UTF-8、GBK等）被转换成字节。字符流就是帮我们处理这种编码转换的“中间人”，保证我们读写的是正确的字符。

#### Reader 和 Writer 的基本用法

```java
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class SimpleCharacterStreamExample {
    public static void main(String[] args) {
        String inputFile = "input.txt";
        String outputFile = "output.txt";

        try (FileReader fileReader = new FileReader(inputFile);
             FileWriter fileWriter = new FileWriter(outputFile)) {

            int c;
            while ((c = fileReader.read()) != -1) {  // 一次读一个字符
                fileWriter.write(c);                  // 写一个字符到输出文件
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么**  
1. 使用 `FileReader` 打开一个文本文件做读取。  
2. 使用 `FileWriter` 创建一个文本文件做写入。  
3. 通过循环，读取输入文件的每个字符，写入到输出文件中。  
4. 使用 try-with-resources 自动关闭流，有效防止资源泄露。

### FileReader 和 FileWriter 的浅讲

它们是字符流体系中最直接的实现，内置针对默认字符编码的转换。适合快速处理简单的文本文件，但不支持自定义编码。

> **这里你可能会疑惑**：为什么操作文本文件还要关心编码？  

这就像你和不同国家的人交流，如果双方不说同一种语言，信息就会断层。操作文本文件也是一样，读写时的编码必须匹配，否则就会出现乱码。

#### 字符编码转换：InputStreamReader 和 OutputStreamWriter

为了更灵活地操作指定编码的文本文件，Java 提供了两个“编码转换器”：

- `InputStreamReader`：将字节流转成字符流，同时指定字符编码
- `OutputStreamWriter`：将字符流转成字节流，同时指定字符编码

来看一个带编码转换的例子。

```java
import java.io.*;

public class EncodingConversionExample {
    public static void main(String[] args) {
        String inputFile = "utf8_input.txt";
        String outputFile = "gbk_output.txt";

        // 读取 UTF-8 编码的文件，写成 GBK 编码的文件
        try (InputStreamReader reader = new InputStreamReader(new FileInputStream(inputFile), "UTF-8");
             OutputStreamWriter writer = new OutputStreamWriter(new FileOutputStream(outputFile), "GBK")) {

            char[] buffer = new char[1024];
            int length;
            while ((length = reader.read(buffer)) != -1) {  // 批量读取字符
                writer.write(buffer, 0, length);            // 写入目标编码
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么**  
1. 用 `FileInputStream` 读取 UTF-8 编码的字节文件，配合 `InputStreamReader` 转成字符流。  
2. 用 `FileOutputStream` 创建 GBK 编码的目标文件，配合 `OutputStreamWriter` 转成字节流。  
3. 读写过程实现了字符编码从 UTF-8 到 GBK 的转换。  
4. 通过字符缓冲区提高效率，一次读多个字符。

### 复杂示例：读取文件内容，处理并写回

假设我们要读取一个文本文件，转换所有字母为大写后写回新文件，需要同时操作字符流和字符处理。

```java
import java.io.*;

public class UpperCaseFileConverter {
    public static void main(String[] args) {
        String sourceFile = "example.txt";
        String convertedFile = "example_uppercase.txt";

        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(sourceFile));
             BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(convertedFile))) {

            String line;
            while ((line = bufferedReader.readLine()) != null) {
                // 把每行文字转成大写
                String upperLine = line.toUpperCase();
                bufferedWriter.write(upperLine);
                bufferedWriter.newLine(); // 换行符
            }

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么**  
1. 使用 `BufferedReader` 和 `BufferedWriter` 对 `FileReader`/`FileWriter` 作了包装，提升读取写入效率。  
2. 逐行读取文本，不用手动处理字符数组，提高了代码可读性。  
3. 处理文本内容，将每行转换成大写。  
4. 将处理后的结果写入新文件，保持文件原有的多行结构。

---

## 对比总结

| 特性                 | FileReader/FileWriter               | InputStreamReader/OutputStreamWriter | BufferedReader/BufferedWriter            |
|----------------------|-----------------------------------|-------------------------------------|-----------------------------------------|
| 处理方式             | 直接操作文件字符流                 | 转换字节流为字符流，可指定编码       | 包装字符流，提高读写效率，支持按行操作  |
| 支持编码             | 使用平台默认编码                   | 任意字符编码                         | 支持所有字符流，方便高效读取文本行      |
| 适用场景             | 简单文本读写                     | 需要跨编码转换，例如 UTF-8 转 GBK    | 按行处理文本，做文本格式转换较方便       |

通过这个对比，可以看到，单纯用 FileReader/FileWriter 时，如果编码不匹配，文本就容易乱码。InputStreamReader/OutputStreamWriter 引入了编码的控制权。而 BufferedReader/BufferedWriter 让我们读写变得更加高效，尤其是处理文本行。

---

:::tip 💡 实战建议

- **尽量不要用 FileReader/FileWriter 处理跨编码文件**，容易出现乱码问题。推荐使用 InputStreamReader 和 OutputStreamWriter 明确指定编码。  
- 读取文本文件时，常用 BufferedReader 读取一行，提高可读性和性能。  
- 写文本时，使用 BufferedWriter 可以显著减少磁盘写入次数，提升性能。  
- 永远用 try-with-resources 管理 IO 资源，防止资源泄露。  
- 处理大文件时，避免一次读入全部内容，采用缓冲流和分块读写。  

:::

:::warning ⚠️ 常见陷阱

- 默认编码问题：FileReader/FileWriter 使用平台默认编码，如果环境不同，程序表现不同，造成不可预期的乱码。  
- 字节流和字符流混用：不要直接把字节流当成字符流处理，否则会导致内容错乱。  
- 没有关闭流：不关闭流会导致资源泄露，文件锁无法释放，影响后续操作。  
- 读取中文字符时用单字节编码会丢失信息，必须用支持多字节编码的字符流。  

:::

## 延伸思考

想想看，如果你在网络传输中处理文本数据，客户端和服务器可能运行在不同的系统，并且默认编码各不相同。你会如何设计文件的读写和传输，确保字符编码无误？如何优雅地应对多语言环境下的文件处理？

## 小结

- Reader 和 Writer 是字符流的核心抽象，帮助我们处理字符及其编码转换。  
- FileReader/FileWriter 适合简单场景，但编码不可控，容易产生乱码。  
- InputStreamReader/OutputStreamWriter 可指定编码，实现灵活的字符与字节转换。  
- BufferedReader/BufferedWriter 提供缓存及按行读写功能，大幅提升性能和易用性。  
- 养成良好资源管理和编码意识，是编写健壮文本IO程序的关键。

---

祝你在字符流的世界里越走越远！记得多写代码多实践，理解每次读写背后的数据流动。我们下节课再见！
```

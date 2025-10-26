---
title: 标准输入输出
description: 深入学习 Java 中的标准输入输出机制，包括 System.in/out/err、Scanner、PrintStream 及格式化输出的使用。
order: 36
keywords: [Java, 标准输入输出, System.in, Scanner, PrintStream, 格式化输出]
---

# 标准输入输出

## 前置知识
> 在阅读本章前, 你需要了解 Java 基础语法、基本数据类型与简单的控制流语句。

---

## 为什么需要标准输入输出？

你有没有遭遇过程序需要与用户“对话”的场景？比如一个命令行应用，需要实时从键盘读取数据，或者行云流水地把结果展示给用户——而不是死板地“写死”在代码里。Java 的标准输入输出，就是帮我们解决这类问题的利器。

想象一个咖啡店收银员操作台，键盘就是 System.in，客户的订单信息输入进来；店员的显示屏就是 System.out，把咖啡价格和找零金额展现给客户；还有扬声器（System.err），用来大声提醒“错单了，别慌”——也就是错误信息。

标准输入输出看起来简单，但细节很重要。搞懂它们，你能让程序变得既灵活又健壮。让我们一步步揭开它们神秘的面纱。

---

## System.in, System.out, System.err 概览

- `System.in` 是标准输入流，默认连接到键盘。它是一个字节输入流（InputStream），代表从外部输入的字节数据；

- `System.out` 是标准输出流，默认连接到控制台（命令行窗口）。它是一个字节输出流的包装（PrintStream），负责把程序内容“吐”出去；

- `System.err` 也是一个打印输出流（PrintStream），专门用来处理错误信息输出，帮助你快速定位问题。

---

## 输入输出为什么要区别对待？

输出，我们主要关心格式和可读性，给用户看的。所以 PrintStream 里提供了很多方便的方法，比如 `println()`，还能格式化文本。

输入，则没有那么“友好”，它给你的是字节流，你得自己解析它才能变成我们常用的东西，比如整数、字符串等。因此，Java 提供了 `Scanner`，帮我们把字节流或者字符流直接转化成整型、浮点型、字符串等。

---

# 标准输入输出的基础用法

---

## 简单示例 1：打印 hello 和读取一个字符

```java
import java.io.IOException;

public class BasicStdIO {
    public static void main(String[] args) throws IOException {
        System.out.println("请输入一个字符，然后按回车：");

        // System.in 是 InputStream，读取单个字节（字符）
        int inputChar = System.in.read();  // 读入一个字节（字符）
        
        // 输出读取的字符（使用强制类型转换）
        System.out.println("你输入的字符是：" + (char) inputChar);
    }
}
```

这段代码做了什么

1. `System.out.println` 向控制台打印提示。

2. `System.in.read()` 读取用户键入的第一个字符的 ASCII 码（记住，它返回的是 int，代表字节内容）。

3. 然后我们把这个 int 转成 char，打印出来。

---

这里确实有点反直觉：`System.in.read()` 是一个“低阶” API，只能帮我们读取一个字节（或者字符），不适合直接读取整行文本或数字。用它处理用户输入，稍显繁琐，但它很有用，适合简单快捷的字符读取。

---

## 进阶示例 2：使用 Scanner 从控制台读取多种类型数据

Scanner 是我们工作中调用频率极高的类，帮你轻松把用户输入文本切分成字符串、数字、甚至一行一行读。

```java
import java.util.Scanner;

public class ScannerExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("请输入你的名字：");
        String name = scanner.nextLine();  // 读取一整行字符串

        System.out.println("请输入你的年龄：");
        int age = scanner.nextInt();        // 读取整数

        System.out.printf("你好，%s！你今年%d岁。\n", name, age);

        scanner.close();  // 关闭 Scanner，释放资源
    }
}
```

这段代码做了什么

1. 创建 Scanner 对象，绑定到标准输入流`System.in`。

2. 对用户说“请输入名字”，使用 `scanner.nextLine()` 读取整行文本。

3. 接着提示输入年龄，读取整数 `scanner.nextInt()`。

4. 使用 `System.out.printf` 格式化输出。

5. 关闭 Scanner，避免资源泄露。

---

这里的 `Scanner` 将标准输入的字节流自动转换成字符流，并帮我们分词，极大方便了用户输入的处理。

---

## 深入示例 3：格式化输出与错误输出一起来

现实项目经验告诉我，正确的输出格式和合理的错误提示，能减少用户反复操作的次数，提升软件质量。

我们做个小程序，模拟订单总价计算，演示格式化输出与错误流输出。

```java
import java.util.Scanner;

public class OrderCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("请输入商品单价（元）：");
        if (!scanner.hasNextDouble()) {
            System.err.println("错误：请输入有效的数字！");
            scanner.close();
            return;  // 提前返回，防止后续出错
        }
        double price = scanner.nextDouble();

        System.out.println("请输入购买数量：");
        if (!scanner.hasNextInt()) {
            System.err.println("错误：请输入有效的整数数量！");
            scanner.close();
            return;
        }
        int quantity = scanner.nextInt();

        double total = price * quantity;

        // 格式化输出，总共保留两位小数
        System.out.printf("订单总价是：￥%.2f 元\n", total);

        scanner.close();
    }
}
```

这段代码做了什么

1. 先通过 `hasNextDouble()` 和 `hasNextInt()` 做输入验证，不让“非数字”蒙混通过。

2. 利用错误输出流 `System.err.println()` 打印错误消息，让问题突出显眼。

3. 利用 `printf` 格式化保留两位小数金额。

4. 关闭资源，正规规范。

---

## 对比总结

| 方法        | 适用场景                      | 优点                               | 缺点                            |
| ----------- | ----------------------------- | ---------------------------------- | ------------------------------- |
| System.in.read()  | 读取单字符或字节             | 简单、直接、无需导入其他类         | 只能读字节，处理不灵活           |
| Scanner      | 结构化文本输入                | 自动切词，直接读取多种数据类型     | 大量读取时性能稍逊，需关闭资源   |
| System.out.println() | 简单、快速打印              | 使用方便，自动换行                 | 格式化不够灵活                   |
| System.out.printf() | 需要格式化输出文本          | 支持格式占位符，灵活控制输出格式   | 语法略复杂，刚开始用不友好       |
| System.err   | 错误提示输出                  | 与标准输出流分开，方便识别错误警告 | 与 System.out 共用屏幕，有时混淆 |

---

:::tip 💡 实战建议

- 尽量用 Scanner 读取结构化输入，避免用 `System.in.read()` 逐字节处理，代码更加健壮和易读。

- 输入验证很重要，利用 `hasNextXXX()` 系列方法防止程序崩溃。

- 规范关闭 Scanner 释放资源，尽管 `System.in` 不一定需要关闭，养成好习惯总没错。

- 输出错误信息时，用 `System.err`，这样出问题时能快速定位。

- 对数值型货币金额，格式化输出时保留两位小数，避免误解。

:::

---

:::warning ⚠️ 常见陷阱

**Scanner 与 nextLine() 的坑**

如果你混用 `nextInt()` 和 `nextLine()`，很容易读到空字符串。原因是 `nextInt()` 读取数字后，光标停留在数字后面的换行符，接着 `nextLine()` 读取到的就是空行。

解决方案：

- 在调用 `nextInt()` 后，增加多调用一次 `nextLine()` 吸收换行符。

```java
int number = scanner.nextInt();
scanner.nextLine(); // 吸收换行符
String line = scanner.nextLine(); // 读取有效输入
```

---

**别急着关闭 System.in**

注意，关闭 Scanner 会关闭 `System.in`，如果程序后面还需要从控制台读取，会导致 `NoSuchElementException`。实际项目中，程序结束前关闭是合适的，但中间频繁关闭 Scanner ，则要慎重。

:::

---

## 延伸思考

你可能会想：为什么标准输出流是 PrintStream，里面好像自带很多打印方法，而输入流却相对“原始”，为何不也提供类似的高级 API？或者，现代 Java 还有没有更好的标准输入输出工具呢？未来如何用 Java 写出更加灵活优雅的交互式控制台程序？

---

## 小结

- 标准输入输出是 Java 程序与用户交互的基础，掌握 `System.in`, `System.out`, `System.err` 非常重要；

- `Scanner` 是处理输入的常用工具，帮助你分词、类型转换，减少代码复杂度；

- 规范使用格式化输出可以大幅提升程序的用户体验和专业感；

- 注意处理输入时常见的换行符问题，避免出现意外空字符串或异常；

- 错误信息用 `System.err` 输出，方便问题排查。

---

这样，我们从“一个字符的读取”，到“多类型输入”，再到“现实项目格式化与错误处理”，一步步走过了标准输入输出的实用之道。希望对你在日常开发中用 Java 快速搞定控制台应用有所帮助。

如果你有具体应用场景或更复杂的输入输出需求，也欢迎随时聊聊，我帮你拆解难点！
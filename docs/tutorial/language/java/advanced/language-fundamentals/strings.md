---
title: 字符串处理
description: 介绍 Java 中字符串的不可变性、常用方法、StringBuilder 和 StringBuffer 以及字符串池机制
order: 6
keywords: [Java, 字符串, String, StringBuilder, StringBuffer, 字符串池]
---

# 字符串处理

## 前置知识
> 在阅读本章前，你需要了解 Java 语言的基础语法和面向对象编程概念，如类、对象、方法调用等。

## 为什么需要掌握字符串处理？

想象一下，你在开发一个社交应用，需要让用户输入昵称、聊天消息，甚至进行复杂的文本处理。字符串处理看似简单，但如果不了解 Java 字符串的特性，代码可能既低效又容易出错。例如，错误地修改字符串带来的性能问题，或者对字符串池不了解导致意外的内存消耗。我们这一章就专注于拆解这些常见坑，同时掌握字符串处理的最佳实践。

---

## 字符串的不可变性

### 简单定义

在 Java 中，`String` 对象一旦创建，其内容无法更改。换句话说，`String` 是“不可变”的（immutable）。

### 为什么需要不可变性？

你可以把字符串想象成一张打印好的照片，我们拿到的“照片”是固定的，不能随意涂改。不可变性帮我们保证：

- 多线程环境下的安全性
- 方便使用字符串池进行重用，节省内存
- 避免修改字符串时引发的意料之外的错误

### 基础用法示例

```java
public class ImmutableStringDemo {
    public static void main(String[] args) {
        String greeting = "Hello";
        System.out.println("原始字符串: " + greeting);

        // 尝试修改字符串内容
        String newGreeting = greeting.concat(", world!");
        System.out.println("连接后的字符串: " + newGreeting);
        System.out.println("原始字符串是否变化? " + greeting);
    }
}
```

**这段代码做了什么？**

1. 创建了一个字符串变量 `greeting`，内容为 `"Hello"`；
2. 使用 `concat` 方法返回一个新的字符串 `newGreeting`，原来的 `greeting` 保持不变；
3. 输出显示字符串连接后，原始字符串依然是 `"Hello"`。

这就是不可变性在起作用——操作总是生成新字符串，而不会修改原对象。

---

## 常用字符串方法详解

我们先从几个日常遇到最多的方法讲起，大家都用过但可能不太注意它们的原理和用法差异：

- `length()` 返回字符串长度
- `charAt(int index)` 返回指定位置的字符
- `substring(int start, int end)` 截取子串
- `equals(Object obj)` 判断字符串内容是否相同
- `contains(CharSequence s)` 检查子串是否存在
- `trim()` 去除首尾空白
- `toLowerCase()` / `toUpperCase()` 改变大小写，但产生新字符串

### 示例：字符串操作集合

```java
public class StringMethodsDemo {
    public static void main(String[] args) {
        String phrase = "  Java String Tutorial  ";

        System.out.println("长度: " + phrase.length());     // 包含空格也算
        System.out.println("第5个字符: " + phrase.charAt(4)); // 字符索引从0开始
        System.out.println("去除空白: '" + phrase.trim() + "'");
        System.out.println("是否包含'String': " + phrase.contains("String"));
        System.out.println("子串 (5-11)): " + phrase.substring(5, 11));
        System.out.println("转小写: " + phrase.toLowerCase());
    }
}
```

**这段代码做了什么？**

1. 先创建了一个带首尾空格的字符串`phrase`；
2. 用 `length` 计算字符串长度（包括空格）；
3. 用 `charAt` 取出了一个具体字符；
4. 用 `trim` 去除首尾空白，演示一种常见清理操作；
5. 检查子串是否存在，展示内容比较；
6. 用 `substring` 截取字符串的部分内容；
7. 最后演示大小写变换。

这些方法大部分都会返回新的字符串，原字符串保持不变。

---

## StringBuilder 和 StringBuffer：改变字符串的武器

### 简单定义

`StringBuilder` 和 `StringBuffer` 是 Java 提供的可变字符串类，允许你在原有内容基础上追加、插入或修改字符，而不是每次都生成新字符串。

### 为什么需要它们？

由于 `String` 是不可变的，如果大量字符串拼接操作使用 `+` 或 `concat`，会频繁创建新对象，性能很差。`StringBuilder` 就像拿到一张可反复涂改的白板，拼接更加高效。

两者区别：

- `StringBuffer` 是线程安全的（方法都用 synchronized 修饰），性能较低；
- `StringBuilder` 不保证线程安全，但性能更好，单线程推荐使用。

### 简单使用示例

```java
public class StringBuilderDemo {
    public static void main(String[] args) {
        StringBuilder builder = new StringBuilder("Java");

        builder.append(" String");
        builder.append(" Builder");
        builder.insert(0, "Learn ");

        System.out.println(builder.toString());
    }
}
```

**这段代码做了什么？**

1. 用 `StringBuilder` 初始化字符串 `"Java"`；
2. 通过 `append` 持续拼接新的内容，所有操作都在同一个 `StringBuilder` 对象上完成；
3. 用 `insert` 在字符串开头插入内容；
4. 最后输出拼接结果。

如果用 `String` 做同样操作，每次追加都生成新字符串，效率极低。

---

## 字符串池机制：重用与节省内存

### 简单定义

字符串池是一块专门的内存区域，用来缓存字符串字面量，确保相同内容的字符串只存一份。它保证了字符串变量之间共享相同内容时，能节省空间。

### 直观理解

想象字符串池是一个“图书借阅室”，每本书（字符串对象）只有一份副本，反复借用。如果你想借已经有的书，就不会再买一本新书。

### 池化的表现

```java
public class StringPoolDemo {
    public static void main(String[] args) {
        String str1 = "hello";       // 在字符串池中创建
        String str2 = "hello";       // 引用指向相同的池中对象
        String str3 = new String("hello"); // 新建堆对象，不是池中对象

        System.out.println("str1 == str2 ? " + (str1 == str2)); // true
        System.out.println("str1 == str3 ? " + (str1 == str3)); // false
        System.out.println("str1.equals(str3) ? " + str1.equals(str3)); // true
    }
}
```

**这段代码做了什么？**

1. `str1` 和 `str2` 都引用池中同一字符串对象，所以 `==` 返回 `true`；
2. `str3` 虽然内容相同，但用 `new` 创建，位于堆中新的内存地址，`==` 返回 `false`；
3. 但调用 `equals` 比较内容是相等的。

### 如何强制使用池中的字符串？

```java
String str4 = new String("hello").intern();
```

调用 `intern()` 方法会把字符串放到字符串池中（如果还不存在），然后返回池中的引用。

---

:::warning ⚠️ 常见陷阱

### 错误使用字符串拼接的性能问题

很多人会用如下方式反复拼接字符串：

```java
String result = "";
for (int i = 0; i < 1000; i++) {
    result += i; // 每次都会创建新字符串，性能差
}
```

这样的写法在字符串长度变大时，性能下降非常明显。

**更好的做法是用 `StringBuilder`：**

```java
StringBuilder builder = new StringBuilder();
for (int i = 0; i < 1000; i++) {
    builder.append(i);
}
String result = builder.toString();
```

这样只创建一个可变对象，极大提高性能。

---

:::tip 💡 实战建议

- 频繁拼接字符串时，优先考虑使用 `StringBuilder`（单线程） 或 `StringBuffer`（多线程）；
- 了解 `String` 不可变性，避免无意间生成大量临时字符串对象；
- 理解字符串池的工作机制，可以通过`intern()`优化内存，但不要滥用，避免影响 GC；
- 使用字符串方法时，注意捕捉返回的新对象，避免误以为原字符串被修改。

---

:::details 🔍 深入理解

### 字符串不可变性背后的设计哲学

不可变性让字符串成为了线程安全的“神奇”对象。多线程条件下，不用加锁就能安全共享字符串，简化了开发复杂性。同时，Java 的编译和运行时优化能利用不可变带来的不变性写出更快的代码。

但缺点是修改字符串看似简单，却隐藏了性能陷阱，所以使用合适的工具 (`StringBuilder`) 变得非常重要。

---

## 小结

- `String` 是不可变对象，修改字符串都是生成新实例。
- 常用字符串方法多数返回新字符串，原字符串保持不变。
- `StringBuilder` 和 `StringBuffer` 提供了高效的字符串可变操作。
- 字符串池机制支持字面量复用，节省内存并加快比较速度。
- 牢记正确使用字符串拼接，从底层机制出发写出高性能代码。

---

通过本章的学习，你应该已经对 Java 字符串的本质和核心用法有了清晰认识。别忘了，多写代码才能把握细节。下节，我们将一起探索正则表达式与字符串的深度结合，敬请期待！
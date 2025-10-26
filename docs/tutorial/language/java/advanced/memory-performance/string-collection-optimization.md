---
title: 字符串与集合优化
description: 探索如何用 StringBuilder 优化字符串拼接，合理设置集合初始容量，以及避免自动装箱带来的性能隐患，提升 Java 程序性能。
order: 58
keywords: [StringBuilder, 集合优化, 初始容量, 自动装箱, 性能提升]
---

# 字符串与集合优化

## 前置知识
> 在阅读本章前，你需要了解Java中字符串的不可变性和常用集合类（如 ArrayList、HashMap）的基础用法。

## 为什么需要字符串与集合优化？

想象一下，你有一个程序需要处理大量文本拼接和大量数据存储。你可能直接用 `String + String` 来拼接，或者往 `ArrayList` 里不断添加元素，程序看似运行正常，却发现执行越来越慢，内存慢慢被吞噬——这该怎么办？

性能瓶颈大多出现在这些看似简单的细节上：

- 字符串的“+”操作每次都会创建新对象，浪费内存和CPU
- 集合没有合理预设容量，会频繁扩容，浪费资源
- 代码中频繁自动装箱拆箱，带来隐形的性能损失

这章我们就专门聊聊这几个隐藏的性能“坑”，从基础到深度，帮你写出既简单又高效的代码。

---

## 使用 StringBuilder 优化字符串拼接

### 什么是 StringBuilder？

简单来说，`StringBuilder` 就像一个灵活的字符串容器，专门为拼接设计。它内部维护一个可变的字符数组，避免了字符串的反复“开新家”的开销。

### 为什么要它？

你可能已经习惯写：

```java
String message = "Hello " + name + ", welcome!";
```

没错，这样写很方便，但如果你多次拼接，比如在循环里做拼接，这条表达式会不停产生冗余对象，影响性能。`StringBuilder` 能帮我们一次性搞定字符串拼接，特别是大批量数据。

### 最简单用法示范

```java
public class StringBuilderExample {
    public static void main(String[] args) {
        StringBuilder builder = new StringBuilder();
        builder.append("Hello");
        builder.append(", ");
        builder.append("world!");
        String result = builder.toString();
        System.out.println(result);
    }
}
```

这段代码做了什么？

1. 创建了一个空的 `StringBuilder` 容器
2. 分三步向它里头添加字符串片段
3. 最后一次性生成拼接结果字符串

相较于连续写 `"Hello" + ", " + "world!"`，这个方式避免了多个字符串中间对象。

### 进阶：在循环中拼接字符串

假设你要生成 1 到 5 的数字序列，拼接成一个字符串，如果你用传统的 `+`，问题就来了：

```java
public class LoopStringConcat {
    public static void main(String[] args) {
        String numbers = "";
        for (int i = 1; i <= 5; i++) {
            numbers += i + " ";
        }
        System.out.println(numbers);
    }
}
```

表面看，没错也能跑。但它实际上每次循环都创建了新的字符串和数组。性能非常差。

用 `StringBuilder` 改写：

```java
public class LoopStringBuilder {
    public static void main(String[] args) {
        StringBuilder numbersBuilder = new StringBuilder();
        for (int i = 1; i <= 5; i++) {
            numbersBuilder.append(i).append(" ");
        }
        System.out.println(numbersBuilder.toString());
    }
}
```

这样就不会在每次循环都创建新字符串，而是沿用同一个可变容器。对于大数据量拼接，性能差距非常明显。

---

## 合理设置集合初始容量

### 什么是集合初始容量？

`ArrayList`、`HashMap` 等集合类内部依赖数组存储数据。默认初始容量一般是 10 或 16。但如果你一开始声明的集合里，预计要存大量数据，没有提前指定初始容量，集合会不断扩容，创建新数组并复制数据，这过程很耗性能。

### 举个简单例子：

```java
import java.util.ArrayList;

public class DefaultCapacityExample {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(); // 默认容量是 10
        for (int i = 0; i < 100; i++) {
            list.add(i);
        }
        System.out.println("Size: " + list.size());
    }
}
```

你看，从10扩容到100，底层会执行多次扩容和数组拷贝。这个隐形浪费CPU和内存。

### 提前指定容量的优雅做法：

```java
import java.util.ArrayList;

public class InitialCapacityExample {
    public static void main(String[] args) {
        ArrayList<Integer> list = new ArrayList<>(100); // 一开始就给足容量
        for (int i = 0; i < 100; i++) {
            list.add(i);
        }
        System.out.println("Size: " + list.size());
    }
}
```

这段代码避免了扩容，执行效率更高。

### HashMap 也适用

比如你要放 1000 个键值对，使用默认容量会扩容多次，影响性能：

```java
import java.util.HashMap;

public class HashMapCapacityExample {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>(2000); // 预计容量*2保证负载因子
        for (int i = 0; i < 1000; i++) {
            scores.put("user" + i, i);
        }
        System.out.println("Entries: " + scores.size());
    }
}
```

建议容量 = 预估元素数目 / 负载因子（默认0.75），这能最大限度减少扩容。

---

## 避免自动装箱带来的性能损失

### 什么是自动装箱？

Java 会自动把基础类型 `int`、`long` 等转成它们的包装类 `Integer`、`Long`，方便在集合等只能存对象的地方使用。这叫自动装箱。

看下面代码：

```java
ArrayList<Integer> nums = new ArrayList<>();
for (int i = 0; i < 5; i++) {
    nums.add(i); // 自动装箱 int -> Integer
}
```

表面没问题，但自动装箱其实每次都会创建包装对象，增加GC压力。

### 避免装箱的技巧 — 使用原始类型集合（LongAdder、IntStream等）或者专门库

Java 8 以后增加了 `IntStream`，适 合做数字的高效处理：

```java
import java.util.stream.IntStream;

public class AvoidBoxingExample {
    public static void main(String[] args) {
        IntStream.range(0, 5)
                 .forEach(i -> System.out.println(i));
    }
}
```

如果你必须用集合，考虑用第三方高性能集合库，如 fastutil，它支持原生类型集合。

### 另外也要注意代码写法中隐形的装箱场景

下面例子看似简单但会装箱：

```java
Integer sum(Integer a, Integer b) {
    return a + b; // 自动拆箱、装箱混合发生
}
```

这里 `a + b` 实际是先拆箱，再重新装箱，影响性能。

---

## 常见陷阱 ⚠️ 

### 1. 错误地用 `String` 做频繁拼接

很多初学者会这样写：

```java
String s = "";
for (int i = 0; i < 10000; i++) {
    s += i; // 每次都会创建新的 String 对象
}
```

一脸“没事，我就习惯这样写”的样子，但这代码的性能比程序停止工作还快，因为每次拼接都在悄悄造新 String。

改成用 `StringBuilder`，性能能提升百倍甚至更多。

### 2. 没有合理预设集合容量，导致频繁扩容

虽说 `ArrayList` 扩容代码写好了，但代码越扩容越慢。

大数据项目里，尤其是热点处理，千万别忽视初始容量的设置。它能帮程序跑得通畅且“小跑步”不停下来喘气。

### 3. 不注意自动装箱的隐性开销

装箱拆箱看似无痛，但频繁调用时内存会涨得吓人，导致更多GC，影响吞吐量。

---

## 实战建议 💡 

- **字符串拼接时，推荐优先使用 `StringBuilder`（单线程）或 `StringBuffer`（多线程）**，尤其在循环内。  
- **为集合设置合理的初始容量，避免扩容带来的性能损失。** 预估元素量并按负载因子计算容量。  
- **避免在性能敏感场景频繁装箱拆箱。** 如果是数值密集型处理，考虑使用 Java 8 的原生流（如 `IntStream`），或借助第三方库。  
- **经常做性能分析和测试**，定位字符串以及集合操作的耗时，做到有的放矢的优化。

---

## 延伸思考 🔍

- 除了 `StringBuilder`，你还知道哪些方法能高效处理字符串拼接？比如 `StringJoiner`、`Collectors.joining()`，它们各自适合什么场景？  
- 对于集合初始化容量的设置，是简单按预估大小来定还是要结合业务复杂逻辑？如何做到既节约内存又避免扩容？  
- 装箱拆箱的性能损耗是不是总是显而易见？在现代 JVM 里，JIT 编译会做哪些优化？

---

## 小结

- 使用 `StringBuilder` 可以显著提升字符串拼接性能，尤其在循环中。  
- 合理设置集合初始容量是减少扩容开销的关键，在大数据量场景尤其重要。  
- 自动装箱拆箱虽然方便，但可能带来性能隐患，要用得巧。  

把这些技巧融会贯通，你的 Java 程序在性能上会更上一层楼！

```java
// 结合示例：综合字符串与集合优化示范
import java.util.ArrayList;

public class CombinedOptimizationExample {
    public static void main(String[] args) {
        // 预设能装下 1000 个元素的 ArrayList
        ArrayList<String> names = new ArrayList<>(1000);

        // 使用 StringBuilder 进行字符串拼接
        StringBuilder reportBuilder = new StringBuilder("Names list:\n");

        for (int i = 0; i < 1000; i++) {
            String name = "User" + i; // 这里避免了多余字符串拼接开销
            names.add(name);
            reportBuilder.append(name).append("\n");
        }

        System.out.println(reportBuilder.toString());
    }
}
```

这段代码从头到尾体现了我们这一章的核心思想：

- 使用预设容量避免扩容  
- 用 StringBuilder 一次拼接大量字符串  
- 变量名语义化，代码清晰易懂  

放开手脚写代码，让它跑得又快又稳吧！

---
```

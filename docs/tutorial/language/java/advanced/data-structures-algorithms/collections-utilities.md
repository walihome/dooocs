---
title: Collections工具类
description: 探索Java集合工具类的强大功能，包括排序、查找、同步包装、不可变集合及常用算法方法。通过实战示例帮助你轻松驾驭 Collections 工具类。
order: 25
keywords: [Java, Collections, 排序, 查找, 同步包装, 不可变集合, 算法方法]
---

# Collections工具类

## 前置知识
> 在阅读本章前,你需要了解: Java基本集合框架（List、Set、Map），以及Java泛型的基础知识。

## 为什么需要 Collections 工具类？

想象一下，你手上有一筐水果，需要把苹果挑出来，或者把水果从大到小排个序。是不是有点麻烦？在Java世界里，操作集合数据时，我们也经常需要做类似的事情——找、排序、同步访问，还有构造不能改的“只读”集合。

自己写循环、写排序算法，不仅麻烦，而且容易出错。Java的 `Collections` 类就像一把瑞士军刀，帮你轻松完成这些常见操作，省了许多麻烦。不仅如此，它还提供了线程安全的包装功能，以及丰富的算法接口，帮你写出高效又安全的代码。

这章我们就来“拆开”这把瑞士军刀，逐块认识它的强大功能，从最简单的排序和查找说起，直到不可变集合和同步包装，帮你全面掌握 `Collections` 类。

---

## 排序与查找：Collections.sort 和 Collections.binarySearch

排序和查找是最基础也是最常用的操作。自己实现排序算法是锻炼编程能力，不过在项目中，我们往往要用标准且高效的方案。

### 什么是排序？

排序就是把集合中的元素按一定规则排列，比如数字升序，或字符串按字母序排列。`Collections.sort()` 是工具类中最常用的方法，内部用的是归并排序，时间复杂度优良。

### 为什么需要排序？

很多场景都要求有序数据，比如排行榜、待办事项列表、配置项顺序等。排序之后，我们还能用二分查找超快找到目标元素。

### 基础用法示例

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortingExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Cherry");

        System.out.println("排序前: " + fruits);

        Collections.sort(fruits);  // 默认按字母顺序排序

        System.out.println("排序后: " + fruits);

        // 使用 Collections.binarySearch 查找元素位置
        int index = Collections.binarySearch(fruits, "Apple");
        System.out.println("Apple 的索引: " + index);
    }
}
```

**这段代码做了什么：**

1. 创建一个装水果名字的列表，依次加入香蕉、苹果、樱桃。
2. 打印排序前列表顺序。
3. 调用 `Collections.sort()` 按字典序排序。
4. 打印排序后的列表。
5. 使用二分查找查找“Apple”的位置，返回索引。

> 注意，使用 `Collections.binarySearch` 前一定要保证列表是有序的，否则结果会不可预测。

---

## 同步包装：Collections.synchronizedXXX

在多线程环境下，多个线程访问同一个集合容易引发竞争和数据不一致。最简单的保障方式是将集合包装成同步版本。

### 什么是同步包装？

同步包装就是让普通集合变成线程安全的集合。在Java中，`Collections`提供一系列 `synchronizedList()`, `synchronizedSet()` 等方法帮你“包裹”原集合，保证同步。

### 为什么需要同步包装？

假设你有一个共享的 `ArrayList`，两个线程同时对它添加元素，会导致程序崩溃甚至数据丢失。用同步包装的集合，则会自动加锁保证同步。

### 示例代码：同步包装

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SynchronizedCollectionExample {
    public static void main(String[] args) {
        List<String> unsafeList = new ArrayList<>();
        List<String> safeList = Collections.synchronizedList(unsafeList);

        // 线程1
        Thread t1 = new Thread(() -> {
            synchronized (safeList) {  // 在迭代时还需要显示加锁
                safeList.add("Apple");
                safeList.add("Banana");
                System.out.println("线程1添加完成");
            }
        });

        // 线程2
        Thread t2 = new Thread(() -> {
            synchronized (safeList) {
                safeList.add("Cherry");
                System.out.println("线程2添加完成");
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 迭代集合时，也需要加锁，避免并发修改异常
        synchronized (safeList) {
            System.out.println("集合内容: " + safeList);
        }
    }
}
```

**这段代码做了什么：**

1. 创建一个普通的 `ArrayList`，然后用 `Collections.synchronizedList` 包装成同步列表。
2. 创建两个线程分别往列表添加元素，每个线程的添加操作都用 `synchronized` 加锁。
3. 主线程等待两个子线程执行完毕。
4. 迭代打印列表时，也必须加锁保护。

> 注意，虽然包装后的集合是线程安全的，但迭代时**仍需**手动同步，否则可能出现并发修改异常。

---

## 不可变集合及算法方法

Java 还有一类非常实用的功能，就是不可变集合和丰富的算法。

### 什么是不可变集合？

不可变集合是指创建后不能修改的集合。它保证了数据安全性和线程安全，防止误操作导致数据变化。

Java 9+ 开始， `Collections` 提供了 `emptyList()`, `singletonList()`, 以及 `unmodifiableList()` 这类方法来创建只读集合。

### 为什么需要不可变集合？

不可变集合能防止别人意外改动你的集合，比如把配置或者缓存暴露给外部调用者，不希望他们随意改动。

### 实现不可变集合示例

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UnmodifiableCollectionExample {
    public static void main(String[] args) {
        List<String> modifiableList = new ArrayList<>();
        modifiableList.add("Apple");
        modifiableList.add("Banana");

        List<String> unmodifiableList = Collections.unmodifiableList(modifiableList);

        System.out.println("不可变集合内容: " + unmodifiableList);

        // 下面这行会抛异常，因为集合是不可变的
        // unmodifiableList.add("Cherry");
    }
}
```

**这段代码做了什么：**

1. 创建一个可变的列表，加入两个元素。
2. 通过 `Collections.unmodifiableList` 创建不可变视图。
3. 打印不可变集合内容。
4. 注释了一个会抛出 `UnsupportedOperationException` 的修改操作，提醒你不可修改。

---

## Collections 中的算法方法概览

除了排序和查找，`Collections` 还有其他算法方法，比如：

- `reverse(List<?>)`：反转列表
- `shuffle(List<?>)`：随机打乱列表顺序，适合做抽奖等
- `fill(List<?>, T)`：用同一个元素替换列表所有元素
- `copy(List<? super T>, List<? extends T>)`：复制一个列表到另一个已分配空间的列表中
- `max` 和 `min`：获取集合中的最大或最小元素

这些方法帮我们秒杀日常集合“搬砖”任务。

### 复杂示例：综合运用 Collections 算法

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ComplexAlgorithmExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        System.out.println("原始数字: " + numbers);

        // 反转
        Collections.reverse(numbers);
        System.out.println("反转后: " + numbers);

        // 打乱顺序
        Collections.shuffle(numbers);
        System.out.println("打乱后: " + numbers);

        // 填充所有元素为 0
        Collections.fill(numbers, 0);
        System.out.println("填充后: " + numbers);

        // 复制示例 - 准备目标列表
        List<Integer> destination = new ArrayList<>(Collections.nCopies(numbers.size(), -1));
        Collections.copy(destination, numbers);
        System.out.println("复制后的列表: " + destination);
    }
}
```

**这段代码做了什么：**

1. 创建并初始化包含1至10的数字列表。
2. 对列表进行反转操作。
3. 随机打乱列表顺序。
4. 将列表所有元素替换成0。
5. 创建目标列表（大小一致），使用 `Collections.copy` 复制内容。

---

:::warning ⚠️ 常见陷阱

- **binarySearch必须基于排序后的集合使用**，否则结果不准。
- 使用 `Collections.synchronizedXXX` 包装集合后，**迭代时必须手动加锁**，否则并发迭代会抛异常。
- `Collections.unmodifiableXXX` 返回的集合是“视图”，如果原集合被修改，不可变集合也会变化。
- `Collections.copy` 需要目标列表大小至少与源列表一样大，否则抛IndexOutOfBoundsException。

:::

:::tip 💡 实战建议

- 在多线程环境，如果需要频繁读写，考虑使用 `ConcurrentHashMap` 或 `CopyOnWriteArrayList` 替代同步包装集合。
- 优先使用 Java 9 及以上版本的 `List.of(...)`、`Set.of(...)` 来创建不可变集合，代码更简洁且性能更优。
- 对于大型集合排序，优先用 `Collections.sort`，底层进行了优化而且线程安全性依赖调用环境。
- 使用 `Collections.binarySearch` 之前，记得明确排序规则，要么是自然排序，要么传入自定义 `Comparator`。

:::

---

## 小结

- `Collections.sort` 和 `binarySearch` 是排序和查找的利器，前提是列表有序。
- 同步包装 `Collections.synchronizedList` 能快速解决简单多线程访问安全问题，但迭代时务必加锁。
- `Collections.unmodifiableList` 提供不可变集合视图，防止意外改动数据，适合暴露给外部调用。
- `Collections` 还内置了丰富的算法方法，帮你快速完成反转、打乱、填充、复制等多种操作。

---

## 延伸思考

如果有自己的排序规则（比如自定义对象），你会如何将 `Collections.sort` 与 `Comparator` 结合使用？多线程环境下，除了同步包装，还有哪些更优雅的线程安全集合方案？你如何设计一个不可变集合的深拷贝来保证完全不变性？

---

# 代码归档

示例1：排序与查找
```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SortingExample {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Banana");
        fruits.add("Apple");
        fruits.add("Cherry");

        System.out.println("排序前: " + fruits);

        Collections.sort(fruits);  // 默认按字母顺序排序

        System.out.println("排序后: " + fruits);

        // 使用 Collections.binarySearch 查找元素位置
        int index = Collections.binarySearch(fruits, "Apple");
        System.out.println("Apple 的索引: " + index);
    }
}
```

示例2：同步包装
```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class SynchronizedCollectionExample {
    public static void main(String[] args) {
        List<String> unsafeList = new ArrayList<>();
        List<String> safeList = Collections.synchronizedList(unsafeList);

        // 线程1
        Thread t1 = new Thread(() -> {
            synchronized (safeList) {  // 在迭代时还需要显示加锁
                safeList.add("Apple");
                safeList.add("Banana");
                System.out.println("线程1添加完成");
            }
        });

        // 线程2
        Thread t2 = new Thread(() -> {
            synchronized (safeList) {
                safeList.add("Cherry");
                System.out.println("线程2添加完成");
            }
        });

        t1.start();
        t2.start();

        try {
            t1.join();
            t2.join();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        synchronized (safeList) {
            System.out.println("集合内容: " + safeList);
        }
    }
}
```

示例3：不可变集合与算法综合应用
```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UnmodifiableCollectionExample {
    public static void main(String[] args) {
        List<String> modifiableList = new ArrayList<>();
        modifiableList.add("Apple");
        modifiableList.add("Banana");

        List<String> unmodifiableList = Collections.unmodifiableList(modifiableList);

        System.out.println("不可变集合内容: " + unmodifiableList);

        // 下面这行会抛异常，因为集合是不可变的
        // unmodifiableList.add("Cherry");
    }
}

class ComplexAlgorithmExample {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }

        System.out.println("原始数字: " + numbers);

        Collections.reverse(numbers);
        System.out.println("反转后: " + numbers);

        Collections.shuffle(numbers);
        System.out.println("打乱后: " + numbers);

        Collections.fill(numbers, 0);
        System.out.println("填充后: " + numbers);

        List<Integer> destination = new ArrayList<>(Collections.nCopies(numbers.size(), -1));
        Collections.copy(destination, numbers);
        System.out.println("复制后的列表: " + destination);
    }
}
```
```
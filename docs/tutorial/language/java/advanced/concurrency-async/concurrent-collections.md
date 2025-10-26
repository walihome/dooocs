---
title: 并发集合  
description: 深入理解 Java 并发集合类 ConcurrentHashMap、CopyOnWriteArrayList 和 BlockingQueue 的使用和内部机制  
order: 66  
keywords: [并发集合, ConcurrentHashMap, CopyOnWriteArrayList, BlockingQueue, Java 并发]  
---

# 并发集合

## 前置知识  
> 在阅读本章前,你需要了解:  
> - Java 基础集合框架，如 Map、List 和 Queue  
> - 基本的多线程编程概念与线程安全的需求  
> - synchronized 关键字和 volatile 变量的基本用法

## 为什么需要并发集合？

想象一下，你正在开发一个高并发的电商系统，多个线程同时处理用户请求，更新商品库存，记录用户行为。此时，如果你仅仅使用普通的 `HashMap` 或 `ArrayList`，很可能会导致数据不一致甚至程序崩溃。为什么？因为这些常规集合类没有考虑多线程环境下的数据竞争。

虽然我们可以通过加锁 (synchronized) 来保证安全，但粗暴的锁可能造成性能瓶颈，丧失并发优势。于是就出现了专门为并发环境设计的集合：它们不仅保证线程安全，还在性能和可扩展性上做了很多优化。这些集合就是 `ConcurrentHashMap`、`CopyOnWriteArrayList` 和 `BlockingQueue`。

本章我们把目光放在这三种常用但各具特色的并发集合上，带你逐步理解它们为什么设计成这个样子，该怎么用，哪里容易踩坑。

---

## ConcurrentHashMap：高效线程安全的散列表

### 什么是 ConcurrentHashMap？

简单来说，`ConcurrentHashMap` 是一种线程安全的哈希表。它允许多个线程并发读取，而且对写操作也进行了优化，可以尽量减少阻塞。

为什么要它？因为传统的 `Collections.synchronizedMap` 或在整个 Map 对象上加锁，写操作都被串行化处理，性能瓶颈明显。`ConcurrentHashMap` 则使用了分段锁（Java 8 后改为节点级别的 CAS 操作），让多个线程可以更自由地操作不同的桶，显著提升性能。

### 基础用法示例

下面，用一个简单的例子演示并发写入和读取：

```java
import java.util.concurrent.ConcurrentHashMap;

public class ConcurrentHashMapExample {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> userScores = new ConcurrentHashMap<>();

        // 线程1写入数据
        new Thread(() -> {
            userScores.put("Alice", 10);
            System.out.println("Thread1 put Alice");
        }).start();

        // 线程2写入数据
        new Thread(() -> {
            userScores.put("Bob", 20);
            System.out.println("Thread2 put Bob");
        }).start();

        // 主线程读取数据
        try {
            Thread.sleep(100); // 等待写入完成
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        System.out.println("Main thread reads: " + userScores);
    }
}
```

这段代码中，两个线程并发写入 Map，主线程稍作等待后输出所有数据。`ConcurrentHashMap` 保障了写入和读取过程的线程安全。

### 深入一点：计算映射（computeIfAbsent）

`ConcurrentHashMap` 还内置了一些方便的原子操作，比如 `computeIfAbsent`，能安全地“先查后写”，解决了传统 Map 可能出现的竞态条件。

```java
import java.util.concurrent.ConcurrentHashMap;

public class ComputeIfAbsentDemo {
    public static void main(String[] args) {
        ConcurrentHashMap<String, Integer> wordCounts = new ConcurrentHashMap<>();

        // 计算并添加新值，线程安全
        Integer count = wordCounts.computeIfAbsent("hello", k -> 1);
        System.out.println("Count for 'hello': " + count);

        // 再次计算，发现已有值就不会覆盖
        wordCounts.computeIfAbsent("hello", k -> 100);
        System.out.println("Count for 'hello' after second compute: " + wordCounts.get("hello"));
    }
}
```

这里，你看到对于 `"hello"` 这个键，`computeIfAbsent` 只会执行第一个函数，初始化值为 1，第二个调用不会修改已有值。这避免了竞争带来的覆盖错误。

### 这段代码做了什么？

1. 初始化了一个线程安全的 `ConcurrentHashMap` 实例。  
2. 演示了多线程同时对 Map 写入时，不会造成冲突。  
3. 使用 `computeIfAbsent` 演示了原子性的“先查后写”操作。

---

## CopyOnWriteArrayList：读多写少的线程安全列表

### CopyOnWriteArrayList 是什么？

想象一下你维护一份只读更多但偶尔写入的用户列表。例如配置数据，多个线程频繁读取，但写操作稀少——比如后台偶尔更新一次配置。

普通的 `ArrayList` 在多线程写入场景下不可用，且加锁会影响性能。`CopyOnWriteArrayList` 采用“写时复制”策略，实现线程安全：每次修改都会复制整个数组，再替换旧引用，这样读操作永远都是无锁、快速且一致的。

### 基础示例

下面展示如何使用 `CopyOnWriteArrayList`：

```java
import java.util.concurrent.CopyOnWriteArrayList;

public class CopyOnWriteArrayListDemo {
    public static void main(String[] args) {
        CopyOnWriteArrayList<String> configList = new CopyOnWriteArrayList<>();
        configList.add("version=1.0");
        configList.add("mode=production");

        // 线程读取配置
        new Thread(() -> {
            for (String config : configList) {
                System.out.println("Reader Thread reads: " + config);
            }
        }).start();

        // 线程写入新配置
        new Thread(() -> {
            configList.add("maxConnections=100");
            System.out.println("Writer Thread added new config");
        }).start();
    }
}
```

读线程可以无阻塞地迭代列表，因为底层数组不会在读时修改。写线程则复制了数组，写完替换引用。

### 深入理解：性能权衡

写时复制意味着写操作代价较高，如果写操作频繁，这种结构不合适。它适合读远多于写的场景。

### 这段代码做了什么？

- `CopyOnWriteArrayList` 保证多个线程读写时的安全和一致性。  
- 读操作不加锁，速度快，适合多线程读。  
- 写操作复制数组，代价较重，适合写少的场景。

---

## BlockingQueue：线程间安全通信的桥梁

### BlockingQueue 是什么？

`BlockingQueue` 就是一个线程安全的队列，特别适合生产者-消费者模型。生产者把任务放入队列，消费者从队列拿任务，两者逻辑分离且安全。

队列支持阻塞操作：当队列满时，生产者会等待；当队列空时，消费者会等待，这样可以有效协调线程动作。

### 简单示例： ArrayBlockingQueue

```java
import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.BlockingQueue;

public class BlockingQueueDemo {
    public static void main(String[] args) {
        BlockingQueue<String> queue = new ArrayBlockingQueue<>(2);

        // 生产者线程
        new Thread(() -> {
            try {
                queue.put("task1"); // 如果队列满，这里会阻塞等待
                System.out.println("Produced task1");
                queue.put("task2");
                System.out.println("Produced task2");
                queue.put("task3");
                System.out.println("Produced task3");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();

        // 消费者线程
        new Thread(() -> {
            try {
                Thread.sleep(1000); // 主动延迟，模拟处理时间
                System.out.println("Consumed " + queue.take());
                System.out.println("Consumed " + queue.take());
                System.out.println("Consumed " + queue.take());
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        }).start();
    }
}
```

这里，`ArrayBlockingQueue` 容量为 2，生产3个任务时第三个会阻塞，直到消费者消费任务腾出空间。

### 这段代码做了什么？

1. 定义了一个容量有限的阻塞队列。  
2. 生产者线程通过 `put` 插入任务，满时阻塞。  
3. 消费者线程通过 `take` 取任务，空时等待。  
4. 模拟了典型生产者-消费者模型的线程通信。

---

## 并发集合对比总结

| 集合类型              | 使用场景                        | 优势                                | 注意点                          |
|----------------------|-------------------------------|-----------------------------------|------------------------------|
| `ConcurrentHashMap`  | 高并发读写的 Map 场景          | 高效读写，分段锁，原子操作支持     | 复杂度较高，不支持 `null` 键和值 |
| `CopyOnWriteArrayList` | 读多写少的 List 场景           | 读无锁，写时复制保证一致性          | 写操作昂贵，频繁写会导致性能下降 |
| `BlockingQueue`       | 线程间安全传递任务            | 支持阻塞，适合协调生产者和消费者    | 队列满或空时操作阻塞，可能导致死锁 |

---

:::tip 💡 实战建议  
- 使用 `ConcurrentHashMap` 替代加锁的 `HashMap`，能显著提升并发性能，尤其是读远多于写。  
- `CopyOnWriteArrayList` 适合配置、监听器列表等读多写少，避免在写操作频繁场景使用。  
- `BlockingQueue` 是实现生产者-消费者模式的首选，建议选择合适容量，避免静默阻塞导致死锁。  
- 多线程环境下慎用 `null` 值，`ConcurrentHashMap` 不允许存储 `null` 键和值。  
:::

---

:::warning ⚠️ 常见陷阱  
- 使用 `CopyOnWriteArrayList` 误用在频繁写操作场景，导致内存和 CPU 消耗激增。  
- 在使用 `BlockingQueue` 时不合理设置队列容量，容易导致生产者或消费者无故阻塞。  
- 对 `ConcurrentHashMap` 迭代时，不能保证强一致性。迭代器是弱一致的，可能看到部分更新。  
- 不要在高性能要求场景中误用全局锁代替 `ConcurrentHashMap`，这样得不偿失。  
:::

---

## 延伸思考

- 什么情况下你会选择使用普通的同步集合而不是并发集合？为什么？  
- 如何结合并发集合和流水线（Pipeline）模式设计一个高效的多阶段任务处理系统？  
- 如果业务需要支持高频次写入，又保持读操作高效，你会如何设计集合的选择与优化？

---

## 小结

- 并发集合为多线程环境下提供了线程安全且高效的集合操作方案。  
- `ConcurrentHashMap` 以细粒度锁和原子操作实现高性能安全 Map。  
- `CopyOnWriteArrayList` 采用写时复制，读多写少场景下性能极佳。  
- `BlockingQueue` 通过阻塞机制实现线程间安全通信，适合生产者消费者模式。  
- 选择合适的并发集合，需要对业务场景的读写比例与性能要求有准确把握。

---

如果你在项目中遇到复杂的线程安全集合需求，别忘了回头看看这些工具，它们可能是既省心又高效的好帮手。下次我们可以聊聊 Java 的并发工具类，比如信号量、锁，以及线程池的深入应用。让我们继续在多线程的世界里探索吧！
---
title: 并发性能优化
description: 通过锁优化、无锁编程和减少锁竞争策略提升 Java 并发性能
order: 57
keywords: [并发, 性能优化, 锁优化, 无锁编程, 锁竞争]
---

# 并发性能优化

## 前置知识
> 在阅读本章前，你需要了解：  
> - Java 基础并发概念（线程、共享变量）  
> - synchronized 和 ReentrantLock 的简单使用  
> - 原子变量（AtomicInteger 等）基础  

## 为什么需要并发性能优化？

想象一下，你正在开发一个高并发的电商后台系统，其中多个线程频繁地访问和修改共享数据，比如用户库存信息。刚开始你可能用 synchronized 保护关键代码块保证线程安全，但随着用户量激增，系统响应开始变得缓慢，CPU 利用率飙升，吞吐量停滞不前。为什么发生了这种情况呢？

这就是锁竞争的现实表现。锁就像一个闸门，当多个线程争抢时，很多线程只能等待，CPU 时间被浪费在无谓的阻塞上。如何减少这种锁争抢，甚至用“无锁”技术替代传统锁，就成了提高并发性能的关键手段。在本章，我们将循序渐进从锁的基本优化讲起，逐步探索如何写出既安全又高性能的并发代码。

---

## 1. 锁优化基础：减少锁粒度和持有时间

### 简单定义

锁优化的第一步是缩小锁住的代码范围（锁粒度），以及尽可能减少线程持锁的时间。这样可以有效降低线程之间的竞争概率。

### 为什么需要它？

当一个锁包裹太多逻辑，或者锁持有时间过长时，其他线程无法访问被保护的数据，导致大量线程等待。减少锁保护的代码范围就像“缩小闸门”的占用面积，让更多线程能更快通过。

### 基础用法

来看一个典型例子：

```java
import java.util.ArrayList;
import java.util.List;

public class Inventory {
    private final List<String> items = new ArrayList<>();

    // 错误示范：锁住整个方法
    public synchronized void addItem(String item) {
        // 模拟耗时操作
        processItem(item);
        items.add(item);
    }

    private void processItem(String item) {
        try {
            Thread.sleep(50); // 模拟处理延时
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

这段代码中，`addItem` 是同步方法，线程会持有锁直到整个方法结束，包括了耗时的 `processItem` 调用。这样会导致其他线程在等待时浪费大量时间。

#### 优化后

```java
import java.util.ArrayList;
import java.util.List;

public class Inventory {
    private final List<String> items = new ArrayList<>();

    public void addItem(String item) {
        processItem(item); // 先在无锁状态下处理
        synchronized (this) {
            items.add(item); // 只锁住添加操作
        }
    }

    private void processItem(String item) {
        try {
            Thread.sleep(50); // 模拟耗时操作
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }
}
```

这次我们先执行耗时处理，处理完再进去同步块添加元素。这样，锁的持有时间缩短了，多个线程能更快地进来添加。

### 这段代码做了什么

1. 我们将非共享资源操作（`processItem`）移出了锁定区，避免无谓占用锁。  
2. 只对真正需要保护的共享变量操作加锁，缩小了锁粒度。  
3. 结果是锁竞争减少，应用的吞吐量得到提升。  

---

## 2. 无锁编程：使用原子变量和非阻塞算法

### 简单定义

“无锁编程”指的是避免使用传统的互斥锁，而采用原子操作或者CAS（Compare-And-Swap）等机制保证线程安全，从而减少阻塞和上下文切换开销。

### 为什么需要它？

传统锁有代价：阻塞会导致线程挂起、上下文切换，增加 CPU 负担和延迟。无锁编程通过乐观策略尝试直接更新共享状态，失败再重试，避免了线程被挂起。

### 基础用法

Java 的 `java.util.concurrent.atomic` 包提供了一系列原子类。这里用 `AtomicInteger` 举例：

```java
import java.util.concurrent.atomic.AtomicInteger;

public class Counter {
    private final AtomicInteger count = new AtomicInteger();

    public void increment() {
        count.incrementAndGet(); // 原子自增
    }

    public int getCount() {
        return count.get();
    }
}
```

这段代码里，`incrementAndGet()` 方法使用了底层的 CAS 操作，保证即使多个线程同时调用，也不会发生计数丢失。

### 进阶：自定义无锁数据结构

无锁编程可以用于更多复杂场景，比如实现无锁队列，但这就超出本章范围。我推荐感兴趣的读者之后了解 Michael-Scott 无锁队列算法。

### 这段代码做了什么

1. `AtomicInteger` 通过硬件原子操作保证计数递增的线程安全。  
2. 避免了 synchronized 锁的阻塞和上下文切换。  
3. 使 `increment` 方法非常轻量，适合高频调用场景使用。  

---

## 3. 减少锁竞争策略：分段锁与读写锁

### 简单定义

减少锁竞争的另一种思路是：将一个大锁拆分成多个小锁（分段锁），或者采用读写锁，将读操作并发执行，而只对写操作加锁。

### 为什么需要它？

当数据量大或读多写少时，单个锁会成为瓶颈。分段锁相当于给每个段配备独立“闸门”，线程只竞争对应段的锁。读写锁允许多个线程同时读取，只在写时独占。

### 基础用法

#### 分段锁示例

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class SegmentedCounter {
    // 将计数器分成 4 段
    private final int STRIPES = 4;
    private final int[] counts = new int[STRIPES];
    private final Lock[] locks = new Lock[STRIPES];

    public SegmentedCounter() {
        for (int i = 0; i < STRIPES; i++) {
            locks[i] = new ReentrantLock();
        }
    }

    public void increment(int key) {
        int index = key % STRIPES; // 通过 key 映射到段
        locks[index].lock();
        try {
            counts[index]++;
        } finally {
            locks[index].unlock();
        }
    }

    public int getTotal() {
        int total = 0;
        for (int i = 0; i < STRIPES; i++) {
            locks[i].lock();
            try {
                total += counts[i];
            } finally {
                locks[i].unlock();
            }
        }
        return total;
    }
}
```

这里将一个计数器拆成4部分，每一部分有自己的锁，减少了竞争。多个线程可以同时访问不同段。

#### 读写锁示例

```java
import java.util.concurrent.locks.ReadWriteLock;
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class CachedData {
    private String data;
    private final ReadWriteLock rwLock = new ReentrantReadWriteLock();

    public String readData() {
        rwLock.readLock().lock();
        try {
            return data;
        } finally {
            rwLock.readLock().unlock();
        }
    }

    public void writeData(String newData) {
        rwLock.writeLock().lock();
        try {
            data = newData;
        } finally {
            rwLock.writeLock().unlock();
        }
    }
}
```

读写锁允许多个线程同时读取数据，提高读操作性能。写操作需要独占锁，保证数据一致。

### 这段代码做了什么

1. 分段锁将整体锁划分为多个小锁，明显减少竞争，适合写操作均匀分布的场景。  
2. 读写锁区分读写操作，提升读多写少场景的效率。  
3. 这两种方式在实际项目中非常常见，是提升并发性能的利器。  

---

:::warning ⚠️ 常见陷阱  
- **锁持有时间过长**：锁内调用耗时或阻塞操作，会极大降低吞吐，必须避免。  
- **过度拆分锁**：过多锁会增加代码复杂度，容易死锁，要设计合理的锁策略。  
- **无锁编程复杂度高**：虽然性能好，但代码难理解，调试困难，不要盲目使用。  
- **读写锁写饥饿问题**：写锁可能因读锁不断出现而得不到机会，需结合具体场景权衡。  
:::

---

:::tip 💡 实战建议  
- 优先使用锁优化的简单方法，例如缩小锁粒度和持有时间。  
- 针对高频更新场景，优先考虑原子变量而非重型锁。  
- 分段锁适合数据结构或缓存类，读写锁适合读多写少情况。  
- 监控系统的锁竞争情况，使用 Java 自带的工具（如 `jstack` 和 `Java Flight Recorder`）定位热点。  
- 代码先做对，再做快。性能优化应基于实际性能瓶颈分析，而非盲目“提前优化”。  
:::

---

## 延伸思考 🔍

- 如何判断项目中到底是锁竞争导致的性能瓶颈，而不是别的原因？  
- 设计无锁数据结构时，如何平衡复杂性和性能收益？  
- 在微服务架构下，这些锁优化策略是否还适用？还是得从分布式角度考虑？  

---

## 小结

- 锁优化的关键是缩小锁粒度和持有时间，减少线程等待。  
- 无锁编程使用原子操作避免阻塞，适合高频的简单共享变量更新。  
- 分段锁和读写锁能有效降低锁竞争，分别适合写分散和读多写少场景。  
- 性能优化始终需要权衡复杂性，配合监控和实际场景定位。  

通过掌握这些并发性能优化策略，我们可以让程序在多核时代充分释放吞吐能力，而不会被锁竞争拖慢脚步。让我们带着这些思考，在项目中大胆尝试吧！
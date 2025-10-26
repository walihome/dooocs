---
title: 并发编程最佳实践
description: 深入理解线程安全策略，避免死锁，以及在性能与安全之间找到最佳平衡，助你写出高质量的并发 Java 程序。
order: 70
keywords: [java, 并发编程, 线程安全, 死锁, 性能优化]
---

# 并发编程最佳实践

## 前置知识
> 在阅读本章前，你需要了解：Java 基础语法、面向对象编程，以及基本的线程启动与执行（如 Thread 类和 Runnable 接口）。

---

## 为什么需要并发编程最佳实践？

你有没有碰到过这样的情况：程序跑着跑着突然卡住了，或者结果一会儿对一会儿错？这往往是因为并发编程中的“隐形炸弹”——线程安全问题、死锁或者性能瓶颈在背后捣乱。特别是在现代应用越来越依赖多核处理器和异步操作的今天，会写并发代码已经不够，更要写得*对*，写得*高效*，还得*易维护*。本章带你一步步拆解这些问题，教你如何优雅地驾驭并发，在性能和安全间找到最佳平衡。

---

## 线程安全策略：护城河如何筑起？

### 线程安全到底是什么？

简单来说，线程安全就是：无论多少线程同时访问，程序的行为都像是单线程那样确定且正确。举个生活中的类比：想象你和朋友同时操作一张共享的工作表，如果你们乱写乱改，信息肯定错乱。但如果你们约定谁写谁读，或者规定每次只能一个人操作，那这个工作表就能保持一致——这就是线程安全的核心思想。

### 为什么我们需要它？

没有线程安全，数据污染和状态错误就是你的“隐藏炸弹”。每一次多线程访问共享资源，如果不加防护，都会成为出错的机会，严重时导致应用崩溃。

### 基础锁机制：synchronized

最直接的线程安全保证，是给关键代码块上锁，标记这一段“这儿只有一个人能进来”。Java 提供了`synchronized`关键字，简洁又可靠。

```java
public class Counter {
    private int count = 0;

    // synchronized 确保同一时间只有一个线程执行此方法
    public synchronized void increment() {
        count++; // 增加计数
    }

    public synchronized int getCount() {
        return count; // 获取计数器的值
    }

    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("最终计数是: " + counter.getCount());
    }
}
```

这段代码做了什么？  
1. 维护一个计数器，`count`变量；  
2. 用`synchronized`修饰方法，保证即使两个线程并发调用，`count++`操作也不会被打断；  
3. 在`main`中开启两个线程，每个做1000次递增，最终输出2000。

为什么`synchronized`可行？因为它在背后维护了对象的监视器锁（Monitor），让代码块具备“排他性”访问能力。

---

## 高级策略：Lock 接口与条件控制

虽然`synchronized`写法简洁，但在复杂场景可控性有限。Java 的 `java.util.concurrent.locks`包下的`Lock`接口出现了，提供了更灵活的锁操作。

继续我们的计数器例子，这回用`ReentrantLock`：

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class LockCounter {
    private int count = 0;
    private final Lock lock = new ReentrantLock();

    public void increment() {
        lock.lock(); // 上锁
        try {
            count++;
        } finally {
            lock.unlock(); // 确保释放锁
        }
    }

    public int getCount() {
        lock.lock();
        try {
            return count;
        } finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) throws InterruptedException {
        LockCounter counter = new LockCounter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("最终计数是: " + counter.getCount());
    }
}
```

这段代码做了什么？  
1. 创建一个`ReentrantLock`实例，取代`synchronized`关键字；  
2. 调用`lock.lock()`上锁，保证互斥访问；  
3. 即使代码块里发生异常，也能通过`finally`块确保锁正确释放，避免死锁；  
4. `main`方法里开启两个线程，安全完成计数。

这就是`Lock`接口带来的好处：锁的获取和释放更灵活，比如可以尝试非阻塞锁（tryLock），可中断锁获取，甚至支持多个条件变量分离通知。

---

## 死锁：这才是真正的坑

最“吓人”的并发问题莫过于死锁——多个线程互相等锁，永远卡死不动。想象大家围着一张会议桌，A拿着叉子等B放筷子，B等A放叉子，谁都放不了，这就是死锁的场景。

### 如何产生死锁？

典型场景：两个线程分别持有两个资源的锁，然后互相等待对方释放。

来看个简单例子：

```java
public class DeadlockDemo {
    private final Object resourceA = new Object();
    private final Object resourceB = new Object();

    public void method1() {
        synchronized (resourceA) {
            System.out.println("线程1获取了resourceA");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }
            synchronized (resourceB) {
                System.out.println("线程1获取了resourceB");
            }
        }
    }

    public void method2() {
        synchronized (resourceB) {
            System.out.println("线程2获取了resourceB");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }
            synchronized (resourceA) {
                System.out.println("线程2获取了resourceA");
            }
        }
    }

    public static void main(String[] args) {
        DeadlockDemo demo = new DeadlockDemo();

        new Thread(demo::method1).start();
        new Thread(demo::method2).start();
    }
}
```

这段代码做了什么？  
1. 有两个资源，`resourceA`和`resourceB`；  
2. 线程1先锁住`resourceA`，稍候再试拿`resourceB`；线程2先锁住`resourceB`，再试拿`resourceA`；  
3. 两个线程互相等待对方释放锁，导致死锁。

---

## 如何避免死锁？

避免死锁可以从以下几方面入手：

1. **锁的顺序一致**：所有线程获得多个锁时，必须遵循相同顺序，比如先拿`resourceA`再拿`resourceB`。  
2. **使用尝试锁（tryLock）**：尝试获得锁，没有成功则释放已持有锁，避免死锁等待。  
3. **减少锁的持有时间**：尽量缩小锁的代码块，降低锁竞争。  
4. **避免嵌套锁**，或减少多锁同时持有。

以上 deadlock 示例改为统一加锁顺序，代码如下：

```java
public class DeadlockAvoidance {
    private final Object resourceA = new Object();
    private final Object resourceB = new Object();

    public void method1() {
        synchronized (resourceA) {
            System.out.println("线程1获取了resourceA");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }
            synchronized (resourceB) {
                System.out.println("线程1获取了resourceB");
            }
        }
    }

    public void method2() {
        synchronized (resourceA) { // 注意这里先拿 resourceA
            System.out.println("线程2获取了resourceA");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }
            synchronized (resourceB) {
                System.out.println("线程2获取了resourceB");
            }
        }
    }

    public static void main(String[] args) {
        DeadlockAvoidance demo = new DeadlockAvoidance();

        new Thread(demo::method1).start();
        new Thread(demo::method2).start();
    }
}
```

这段代码避免了死锁，因为两个线程锁的顺序一致，先拿`resourceA`再拿`resourceB`，不会相互持有对方的锁而等待。

---

## 性能与安全的平衡：不可盲目加锁

发现上面每次访问共享状态都加锁，确实保险，但有时会成为性能黑洞。加锁就像交通信号灯，保障安全但也限速。

### 在哪里加锁？锁多大范围？

- 不要“重度加锁”——如果代码中大量读取共享数据，最好用读写锁(`ReentrantReadWriteLock`)分离读写，有效提升并发性能。
- 确认锁的范围只包围必要临界区，避免无谓的锁持有时间。
- 优先选用无锁或局部锁策略，比如使用`AtomicInteger`原子类，实现高效线程安全的计数。

来看一个使用`AtomicInteger`的示例：

```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicCounter {
    private final AtomicInteger count = new AtomicInteger(0);

    public void increment() {
        count.incrementAndGet(); // 原子操作，自带线程安全
    }

    public int getCount() {
        return count.get();
    }

    public static void main(String[] args) throws InterruptedException {
        AtomicCounter counter = new AtomicCounter();

        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                counter.increment();
            }
        });

        t1.start();
        t2.start();

        t1.join();
        t2.join();

        System.out.println("最终计数是: " + counter.getCount());
    }
}
```

这段代码做了什么？  
1. 计数器用`AtomicInteger`替代普通`int`；  
2. 通过`incrementAndGet()`完成原子递增，避免显式加锁；  
3. 性能相比加锁更友好，适合高并发场景。

---

:::warning ⚠️ 常见陷阱
- **使用普通变量无锁操作**，容易导致数据错乱和意外行为，千万别心存侥幸。  
- **忽视锁的顺序**，死锁问题很难调试，提前规划锁获取顺序是关键。  
- **长时间持有锁**，会造成响应变慢甚至线程饥饿。  
- **锁机制滥用**，带来的性能损耗可能远超预期，充分权衡和测试非常必要。
:::

---

:::tip 💡 实战建议
- 设计时先避免共享可变状态——尽量使用不可变对象和线程局部变量。  
- 优先选用 Java 并发包的高级类（如 `ConcurrentHashMap`, `Atomic` 包等），无须自己手写复杂锁。  
- 清晰锁的粒度，控制锁范围，尽量缩小临界区。  
- 利用工具（如 JStack、VisualVM）监控线程状况，及时发现死锁和性能瓶颈。  
- 对代码多做多线程压力测试，提前暴露同步问题和性能瓶颈。
:::

---

## 小结

- 线程安全是并发编程的基石，选择合适的同步策略至关重要。  
- `synchronized`简单易用，`Lock`接口灵活强大，应根据场景合理选择。  
- 死锁是并发编程中最易踩的坑，统一锁顺序防止死锁是一大利器。  
- 各种锁带来性能损耗，要仔细权衡性能和安全。使用无锁原子变量往往有意想不到的提升。  
- 实际开发中，合理利用 Java 并发工具，配合性能监控和压力测试，可以大大降低并发风险。

---

如果你现在手边有个多线程的项目，试着找出关键共享状态，思考下如何用合适的锁保护它？有没有可能继续缩小锁粒度，或者用无锁数据结构代替呢？这会是你练习线程安全的绝佳机会。我们以后也会探究更多如线程池、并发数据结构及异步编程模型，期待和你一起探索！
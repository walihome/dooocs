---
title: Lock接口
description: 探索Java中的Lock接口，深入理解ReentrantLock、读写锁、Condition与tryLock的使用方式和注意事项。
order: 63
keywords: [Lock接口, ReentrantLock, 读写锁, Condition, tryLock, Java并发]
---

# Lock接口

## 前置知识
> 在阅读本章前，你需要了解:
>
> - Java中的基本线程概念（Thread）
> - synchronized 关键词的基础用法与局限
> - 并发编程的基本需求：互斥、同步、避免死锁

## 为什么需要 Lock 接口？

你可能有过这样的困扰：用`synchronized`控制并发时，代码写得复杂且灵活性不足。比如，无法中断等待锁的线程，也没法尝试非阻塞地请求锁。或者你需要更细粒度地控制锁的获取和释放，以及条件等待通知机制。

这时候，Java的`Lock`接口就像是给线程加锁升级了——它让我们像开车一样，掌控锁的“油门”、“刹车”和“方向盘”。`Lock`不仅支持独占锁，还有读写锁这样的高级锁模式，甚至可以精准控制等待和通知的时机。

本章让我们从“锁的智慧”这个问题切入：如何用`Lock`接口实现比`sychronized`更灵活、更高效的线程同步机制。

## 具体章节

### ReentrantLock——灵活的独占锁

**什么是 ReentrantLock？**

简单来说，它就是`synchronized`的“加强版”。它支持：

- 可重入性：同一个线程多次获取锁不会死锁。
- 灵活锁操作：可以尝试获取锁（非阻塞）、中断获取锁。
- 读写锁逻辑可以基于它来实现。

**为什么需要 ReentrantLock ？**

用`synchronized`你只能阻塞等待锁释放，若它等待时间过长，无法中断或者超时退出。ReentrantLock 允许你通过`tryLock()`尝试获取锁，避免线程因锁竞争饿死，还可以对等待线程进行中断，灵活度大大提升。

#### 基础用法示例

```java
import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockExample {
    private final ReentrantLock lock = new ReentrantLock();
    private int counter = 0;

    // 增加计数器
    public void increment() {
        lock.lock(); // 获取锁
        try {
            counter++;
            System.out.println(Thread.currentThread().getName() + " incremented counter to " + counter);
        } finally {
            lock.unlock(); // 确保释放锁
        }
    }

    public static void main(String[] args) throws InterruptedException {
        ReentrantLockExample example = new ReentrantLockExample();

        Runnable task = () -> {
            for (int i = 0; i < 5; i++) {
                example.increment();
                try {
                    Thread.sleep(100); // 模拟工作
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        };

        Thread t1 = new Thread(task, "Thread-A");
        Thread t2 = new Thread(task, "Thread-B");

        t1.start();
        t2.start();

        t1.join();
        t2.join();
    }
}
```

**这段代码做了什么：**

- `lock.lock()`：请求锁，如果锁被占用，当前线程会等待。
- 进入`try`块后安全地修改共享变量`counter`。
- `finally`块释放锁，哪怕代码抛异常也不漏锁。
- 两个线程交替增加计数，保证了线程安全。

这就是使用`ReentrantLock`的最基本套路，跟`synchronized`相比多了灵活性。

### 进阶：读写锁 ReadWriteLock —— 分离读写 更高效

```
*想象图书馆的阅览室，读者可以同时读（共享），但写者需要独占（互斥）——这就是读写锁的设计初衷。*
```

**什么是读写锁？**

Java的`ReadWriteLock`接口定义了两个锁：只读锁和写锁。多个线程可以同时持有读取锁，但写锁是独占的。通过分离“读”和“写”操作，读写锁在读多写少的场景下极大提升并发性能。

**为什么需要它？**

假设一个缓存系统，频繁查询（读），偶尔更新（写）。如果所有操作都用独占锁，查询速度慢成灾。用读写锁，多个查询并发执行，大幅提升吞吐。

#### 代码示例：使用 ReentrantReadWriteLock

```java
import java.util.concurrent.locks.ReentrantReadWriteLock;
import java.util.concurrent.locks.Lock;

public class ReadWriteLockExample {
    private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();
    private final Lock readLock = rwLock.readLock();
    private final Lock writeLock = rwLock.writeLock();

    private int sharedData = 0;

    // 读方法：加读锁，多个线程可同时读
    public int readData() {
        readLock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + " read sharedData: " + sharedData);
            return sharedData;
        } finally {
            readLock.unlock();
        }
    }

    // 写方法：加写锁，独占访问
    public void writeData(int newValue) {
        writeLock.lock();
        try {
            System.out.println(Thread.currentThread().getName() + " writing sharedData: " + newValue);
            sharedData = newValue;
            // 模拟写操作耗时
            Thread.sleep(100);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            writeLock.unlock();
        }
    }

    public static void main(String[] args) {
        ReadWriteLockExample example = new ReadWriteLockExample();

        // 测试读写并发
        Runnable reader = () -> {
            for (int i = 0; i < 5; i++) {
                example.readData();
                try {
                    Thread.sleep(50);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
        };

        Runnable writer = () -> {
            for (int i = 0; i < 5; i++) {
                example.writeData(i);
            }
        };

        Thread writerThread = new Thread(writer, "Writer");
        Thread readerThread1 = new Thread(reader, "Reader-1");
        Thread readerThread2 = new Thread(reader, "Reader-2");

        readerThread1.start();
        readerThread2.start();
        writerThread.start();
    }
}
```

**这段代码做了什么：**

- 写线程独占写锁修改数据。
- 多个读线程可以并发访问共享数据。
- 代码演示了读写锁如何在读写混合场景中协调。

这能帮你理解什么时候分离读写能带来性能红利。

### Condition接口——更精细的等待通知控制

是不是觉得`synchronized`的`wait/notify`有点生硬？`Condition`就像给`Lock`配了个更灵活的“红绿灯”。

**什么是 Condition？**

它是`Lock`接口里定义的“等待/通知”工具，可以创建多个条件队列，使用起来比`synchronized`的单一等待队列更灵活。

**为什么需要 Condition？**

你可以有选择地等待某个条件，并且多个线程可以各自等待不同条件，避免无谓的唤醒（降低虚假唤醒的风险）。

#### 代码示例：用 Condition 实现简单生产者消费者

```java
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class ConditionExample {
    private final Lock lock = new ReentrantLock();
    private final Condition notFull = lock.newCondition();   // 生产者等待条件
    private final Condition notEmpty = lock.newCondition();  // 消费者等待条件

    private final int[] buffer = new int[5];
    private int count = 0, putIndex = 0, takeIndex = 0;

    // 生产者放入元素
    public void put(int value) throws InterruptedException {
        lock.lock();
        try {
            while (count == buffer.length) {
                System.out.println("缓冲区满，生产者等待...");
                notFull.await();  // 等待缓冲区有空位
            }
            buffer[putIndex] = value;
            putIndex = (putIndex + 1) % buffer.length;
            count++;
            System.out.println("生产者放入: " + value);
            notEmpty.signal();  // 通知消费者有新元素
        } finally {
            lock.unlock();
        }
    }

    // 消费者取出元素
    public int take() throws InterruptedException {
        lock.lock();
        try {
            while (count == 0) {
                System.out.println("缓冲区空，消费者等待...");
                notEmpty.await(); // 等待缓冲区有元素
            }
            int value = buffer[takeIndex];
            takeIndex = (takeIndex + 1) % buffer.length;
            count--;
            System.out.println("消费者取出: " + value);
            notFull.signal();  // 通知生产者缓冲区有空位
            return value;
        } finally {
            lock.unlock();
        }
    }

    public static void main(String[] args) {
        ConditionExample buffer = new ConditionExample();

        Runnable producer = () -> {
            int i = 0;
            try {
                while (true) {
                    buffer.put(i++);
                    Thread.sleep(200);  // 模拟生产耗时
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        };

        Runnable consumer = () -> {
            try {
                while (true) {
                    buffer.take();
                    Thread.sleep(500);  // 模拟消费耗时
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
        };

        new Thread(producer, "Producer").start();
        new Thread(consumer, "Consumer").start();
    }
}
```

**这段代码做了什么：**

- 生产者在缓冲区满时等待`notFull`条件，缓冲区空时消费者等待`notEmpty`条件。
- 使用两个不同的条件队列分开控制生产者和消费者。
- 更细致的等待/通知控制避免了传统`wait()/notify()`的“通知全体”弊端。

### tryLock() — 试探式锁的妙用

**情况描述**

某些时候，你不想让线程永远阻塞在获取锁上，而是希望尝试获取锁，如果失败就做别的事情或者稍后重试。

`tryLock()`正好满足这点。

#### 代码示例：使用tryLock避免死锁

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.TimeUnit;

public class TryLockExample {
    private final Lock lock = new ReentrantLock();

    public void doWork() {
        // 试图获取锁，等待最多1秒
        try {
            if (lock.tryLock(1, TimeUnit.SECONDS)) {
                try {
                    System.out.println(Thread.currentThread().getName() + " 获得锁，开始工作");
                    Thread.sleep(2000); // 模拟工作
                } finally {
                    lock.unlock();
                    System.out.println(Thread.currentThread().getName() + " 释放锁");
                }
            } else {
                System.out.println(Thread.currentThread().getName() + " 未能获得锁，执行其他任务");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
    }

    public static void main(String[] args) {
        TryLockExample example = new TryLockExample();

        Runnable task = example::doWork;

        Thread t1 = new Thread(task, "线程1");
        Thread t2 = new Thread(task, "线程2");

        t1.start();
        t2.start();
    }
}
```

**这段代码做了什么：**

- 线程尝试获取锁，等待最多1秒。
- 成功后执行任务，失败则打印出放弃提示。
- 避免了无限制等待和死锁风险。

---

:::warning ⚠️ 常见陷阱

- **忘记释放锁**：`lock.lock()`后务必放在`finally`块中调用`unlock()`，否则会导致死锁。
- **使用错误的锁粒度**：锁范围过大影响性能，过小则无法保证数据一致。
- **Condition滥用**：在使用多条件时，唤醒和等待必须严格匹配，否则会造成线程永久等待。
- **读写锁不适合写多读少场景**：写频繁时会导致写锁阻塞，反而比简单锁性能差。
- **tryLock误用导致逻辑混乱**：因为是非阻塞，需准备好失败处理逻辑，否则可能引发数据不一致。

:::

:::tip 💡 实战建议

- 优先用`synchronized`实现简单互斥，明确性能瓶颈后再考虑`Lock`。
- 使用`ReentrantLock`时，牢记必须配对`lock()`和`unlock()`。
- 读多写少场景下，优先`ReentrantReadWriteLock`，合理划分读写操作。
- 用`Condition`实现精细等待通知时，更关注逻辑状态而非直接调用`signal()`，防止“虚假唤醒”。
- 采用`tryLock()`与超时接口，避免线程死锁和饥饿状态。
- 实际线上使用锁时，尽可能减少锁持有时间，释放资源要及时。

:::

:::details 🔍 深入理解

- `ReentrantLock`底层采用了AQS (AbstractQueuedSynchronizer) 实现，这就是它能支持阻塞队列和公平策略的秘密。
- 读写锁`ReentrantReadWriteLock`中读锁是共享锁，写锁是独占锁，底层通过计数器维护读写状态。
- Condition的细节包括单独的等待队列，线程在`await()`时会释放当前锁，放入等待队列，`signal()`才会唤醒一个等待线程重新竞争锁。
- `tryLock`的超时版本内部调用了线程park/unpark机制，配合FIFO同步队列实现等待队列管理。
:::

## 实战应用

想象你正在开发一个高性能缓存模块：

- 读写操作高度竞争，适合用`ReentrantReadWriteLock`分离读写。
- 缓存失效时写入数据时，可以用Condition实现等待策略，让缓存更新线程等待其他线程完成。
- 关键任务路径上，用`tryLock`避免因锁阻塞影响用户体验，失败后可启用降级方案。

以上Lock接口及其功能的组合，能帮助你写出既安全又高效的并发代码。

## 小结

- `ReentrantLock`提供比`synchronized`更灵活的锁操作，如中断响应、超时等待、非阻塞获取。
- 读写锁能显著提高读多写少场景的性能，分离读锁和写锁。
- `Condition`接口扩展了等待/通知机制，支持多条件同时等待和精细唤醒。
- `tryLock`让线程可以非阻塞尝试锁资源，减少死锁风险和性能瓶颈。
- 使用锁时，严格遵守加锁-释放锁的规范，合理设计锁粒度、使用合适的锁类型。

通过这些内容，锁的魔法在你手中更加灵活与强大。但记住，锁是个双刃剑，用好了是保护神，用不好可能成“死锁制造机”。愿你写出既稳定又高效的并发程序！

---

如果你对某个具体锁的性能细节或者内部原理好奇，我们可以再深入探讨。现在，就让我们把这把“锁”练得更熟练一些吧！
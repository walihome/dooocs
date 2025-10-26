---
title: 线程同步
description: 探索 Java 中线程同步的核心机制，包括 synchronized 关键字、对象锁与类锁的使用，以及死锁的概念与避免策略。
order: 60
keywords: [Java, 线程同步, synchronized, 对象锁, 类锁, 死锁]
---

# 线程同步

## 前置知识
> 在阅读本章前，你需要了解：  
> - Java 基础语法和面向对象编程  
> - 基础多线程概念：什么是线程，线程的创建和启动  

## 为什么需要线程同步？

想象一下，你和几个朋友共同写一篇文档。如果你们同时在同一个段落编辑，结果很可能是一团糟。这种冲突在程序里就叫做“线程安全”问题。多个线程同时访问同一个资源，如果没有合适的保护措施，数据就会乱套。

这正是线程同步要解决的问题。它保证了同一时间只有一个线程能访问关键代码部分或共享数据，避免数据被同时修改导致不可预测的错误。

在本章，我们将一步步探索 Java 中非常核心的线程同步机制——`synchronized` 关键字，理解它背后的对象锁和类锁，还有大家都害怕的死锁问题。别担心，我会带着你一起一步步拆解这些看似抽象的概念。

---

## 掌握 synchronized：最简单的线程同步方式

> 我们先从一个简单得让人安心的例子开始，理解 `synchronized` 是怎么帮线程“排队”的。

### 什么是 `synchronized`？

用简单的话说，`synchronized` 是 Java 提供的一种“排他锁”。它可以让某段代码在同一时刻只被一个线程执行，就像公共洗手间排队一样——进去了别人得等着。

你可以用它来修饰方法或者代码块，告诉 JVM 给这个操作上锁，别人如果想访问，只能排队等你执行完。

#### 为什么需要它？

想象两个线程同时给一个账户存钱，如果没有同步，余额可能会错算。`synchronized` 就是守门员，防止坏事发生。

---

### 基础用法示例1：对象锁（实例锁）

```java
public class Counter {
    private int count = 0;

    // 增加计数的方法，使用 synchronized 保证线程安全
    public synchronized void increment() {
        count++;  // 关键操作
    }

    public int getCount() {
        return count;
    }

    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();

        // 创建两个线程，分别调用 increment 方法
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

        System.out.println("最终计数值：" + counter.getCount());
    }
}
```

**这段代码做了什么？**  
1. 两个线程同时调用 `increment()` 方法，每个循环给 `count` 加 1。  
2. 因为 `increment` 是 `synchronized`，每次只有一个线程能进入该方法，保证 `count` 自增操作不会被多个线程打断。  
3. 最后打印出来的结果一定是 2000（1000 + 1000），不会出现小于 2000 的“丢失更新”问题。

---

### 代码解析：

1. **synchronized 方法**：相当于为当前对象实例 `counter` 加了一把锁，这把锁是“对象锁”。  
2. **线程竞争时**：如果一个线程持有锁，其他线程必须等待，直到锁释放。  
3. **代码块内执行顺序**：每次进来都会先拿锁，没有锁拿不到，代码不会并发执行。

---

## 对象锁和类锁的区别

那么，一把“锁”到底锁的是什么？在 Java 里，`synchronized` 可以锁对象，也可以锁类。这两者的区别挺重要，搞懂它们代码才能写得既安全又高效。

### 对象锁（实例锁）  
像我们刚才的例子，给实例方法加 `synchronized`，锁的是对象本身。一个对象有它自己的锁，多个线程访问同一个对象时才能体现锁的效果。

### 类锁（static synchronized）  
如果是给静态方法加 `synchronized`，锁的就是这个类的 `Class` 对象。无论多少实例，这把类锁是唯一的。

---

### 示例2：类锁

```java
public class ClassLevelLockDemo {
    private static int staticCount = 0;

    // 静态方法加锁，锁的是 Class 对象
    public static synchronized void incrementStatic() {
        staticCount++;
    }

    public static int getStaticCount() {
        return staticCount;
    }

    public static void main(String[] args) throws InterruptedException {
        Thread t1 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                incrementStatic();
            }
        });

        Thread t2 = new Thread(() -> {
            for (int i = 0; i < 1000; i++) {
                incrementStatic();
            }
        });

        t1.start();
        t2.start();
        t1.join();
        t2.join();

        System.out.println("最终静态计数值：" + getStaticCount());
    }
}
```

**这段代码做了什么？**  
- 这里我们用静态方法给 `staticCount` 自增，且加了类锁。  
- 多个线程同时执行时，同一时刻只有一个线程能进入 `incrementStatic()`，防止数据冲突。  
- 和对象锁不同，类锁是针对整个类的，不管多少实例，共享一把锁。

---

### 何时用类锁？

- 类锁适用于所有实例公用的数据（如静态变量）。  
- 对象锁更适合保护实例变量。

---

## 逐渐深入：代码块同步的细粒度控制

刚才的示例中，我们锁的是整个方法，有时开销比较大，特别是方法中只有部分代码需要同步时。幸好，`synchronized` 还可以修饰代码块，控制锁的范围更细，提升性能。

---

### 示例3：synchronized 代码块

```java
public class FineGrainedLock {
    private int count = 0;
    private final Object lock = new Object(); // 自定义锁对象

    public void increment() {
        // 只给关键代码加锁，避免锁住整个方法
        synchronized (lock) {
            count++;
        }
    }

    public int getCount() {
        return count;
    }

    public static void main(String[] args) throws InterruptedException {
        FineGrainedLock counter = new FineGrainedLock();

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

        System.out.println("最终计数值：" + counter.getCount());
    }
}
```

**这段代码做了什么？**  
- 用一个私有的 `lock` 对象作为锁，而非整个实例。  
- 只给 `count++` 这句关键代码加锁，缩小锁的颗粒度。  
- 这样，其他不需要同步的代码不会被阻塞，提高性能。

---

### 为什么自定义锁对象？

- 加锁时指定了锁对象，能灵活控制同步范围。  
- 避免把整个实例锁住，减少线程之间的等待。  
- 这是实际项目里常见的优化手段。

---

## 死锁：线程同步的“陷阱”之一

掌握了同步，接下来我们必须面对一个棘手问题——死锁。

死锁发生时，两个或以上的线程互相等待对方释放锁，结果都卡在那，程序无法继续。这就像两人面对一条狭窄的桥，互不退让，永远堵在那里。

---

### 死锁示例

```java
public class DeadlockDemo {
    private final Object lockA = new Object();
    private final Object lockB = new Object();

    public void method1() {
        synchronized (lockA) {
            System.out.println("线程1获得lockA");
            try {
                // 模拟操作耗时
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            synchronized (lockB) {
                System.out.println("线程1获得lockB");
            }
        }
    }

    public void method2() {
        synchronized (lockB) {
            System.out.println("线程2获得lockB");
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            synchronized (lockA) {
                System.out.println("线程2获得lockA");
            }
        }
    }

    public static void main(String[] args) {
        DeadlockDemo demo = new DeadlockDemo();

        Thread t1 = new Thread(demo::method1);
        Thread t2 = new Thread(demo::method2);

        t1.start();
        t2.start();
    }
}
```

**这段代码做了什么？**  
- 线程1先抢 `lockA`，再尝试拿 `lockB`。  
- 线程2先抢 `lockB`，再尝试拿 `lockA`。  
- 两个线程相互等待对方释放锁，造成死锁，程序挂在那里了。

---

### 死锁分析：

- 互相持有对方需要的资源且不释放。  
- 所有线程都在等待，不会继续执行。  
- 程序“瘫痪”，无法完成任务。

---

## 实战建议

:::tip 💡 实战建议
- **尽量避免嵌套锁**：特别是不同顺序获取多个锁，容易产生死锁。  
- **保证锁顺序一致**：如果必须同时拿多个锁，所有线程以统一顺序获取，降低死锁概率。  
- **锁的粒度要合适**：过大锁范围会影响性能，过小则无法保证安全。  
- **使用 Java 并发包中的工具**：如 `ReentrantLock`，支持尝试锁定，可以设置超时，减少死锁概率。  
- **及时释放锁**：尤其是不在同步块中使用阻塞操作，避免持有锁时间过长。  
:::

---

## 小结

- `synchronized` 是 Java 最直接的线程同步手段，保证了多个线程对共享资源的互斥访问。  
- 对象锁是实例级的，类锁是基于 `Class` 对象，锁的范围和作用对象不同。  
- 通过代码块同步，可以控制锁的细粒度，获得更好的性能。  
- 死锁是同步编程必需避免的坑，通过合理设计锁顺序和锁粒度可以降低风险。  

---

## 延伸思考

- 如果你设计一个高并发系统，如何权衡锁的粒度和系统性能？  
- `synchronized` 和 `ReentrantLock` 在实现和使用上有哪些差异？你更倾向用哪个？为什么？  
- 有没有可能在不使用 `synchronized` 的情况下保证线程安全？  

---

期待你动手试试上面的代码，感受同步带来的保障和挑战。线程同步不仅是技术问题，还是一门艺术，掌握它，能让你的多线程编程稳健且高效。祝你编码顺利！
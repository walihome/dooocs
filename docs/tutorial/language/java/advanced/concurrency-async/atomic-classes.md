---
title: 原子类
description: 理解 Java 中的原子类，包括 CAS 原理，AtomicInteger、AtomicLong 和原子更新器的用法。
order: 64
keywords: [Java, 原子类, CAS, AtomicInteger, AtomicLong, 原子更新器]
---

# 原子类

## 前置知识

> 在阅读本章前,你需要了解: 线程基本概念、共享变量、并发问题，以及 `synchronized` 和 `volatile` 的基本用法。

## 为什么需要原子类？

你是否遇到过这样的问题：多个线程同时操作一个变量，结果却出现了数据错乱？比如，多线程更新一个计数器时，计数结果偏小或者不稳定。这种“奇怪”的结果背后，其实是因为线程之间对共享变量的操作没有“同步”，导致了竞态条件（Race Condition）。

传统做法是使用 `synchronized` 来保证线程安全，但它的性能开销较大，而且写法比较繁琐。Java 从1.5 开始就引入了一套“原子类”，它们通过硬件级的比较并交换（CAS，Compare-And-Swap）操作保证变量的原子更新，性能更好，书写更简洁。理解这些原子类，你就能在多线程编程中做到既安全又高效。

让我们先从 CAS （比较并交换）原理说起，再进一步了解 `AtomicInteger` 等原子类，以及原子更新器。

---

## CAS（Compare-And-Swap）原理简介

CAS 是一种乐观锁策略。它保存变量的“期望值”，每次更新时比较当前值和期望值是否相等：

- 如果相等，说明变量没有被其它线程改动，可以安全更新。
- 如果不等，说明已经发生了竞争，需要重新尝试。

可以把 CAS 想象成：你向银行柜台请求“如果我的账户余额是 100 元，就扣 10 元”，柜台会先核对余额是否是 100，核对通过立刻扣钱，否则拒绝操作。柜台的核对加扣钱就是 CAS，保证到账户余额竞争的原子性。

Java 通过 CPU 的底层指令（如 x86 的 `CMPXCHG`）实现 CAS，非常高效。

不过 CAS 并非完美，它有“ABA 问题”——变量从 A 变成 B，又变回 A，CAS 检测不出变化。Java 的原子类和版本号机制共同处理了这个问题。

---

## 具体章节

### 1. AtomicInteger 的基础使用

最常见的原子类是 `AtomicInteger`，它封装了一个 `int` 类型的变量，提供线程安全的原子操作方法，比如 `incrementAndGet()`。

让我们写个例子：用 `AtomicInteger` 来实现线程安全的计数器，避免传统 `int` 在多线程竞争下的不正确。

```java
import java.util.concurrent.atomic.AtomicInteger;

public class AtomicCounterDemo {
    private AtomicInteger counter = new AtomicInteger(0);

    public void increment() {
        // 原子地将 counter 增加 1
        counter.incrementAndGet();
    }

    public int getCounter() {
        return counter.get();
    }

    public static void main(String[] args) throws InterruptedException {
        AtomicCounterDemo demo = new AtomicCounterDemo();

        // 创建1000个线程对counter进行递增
        Thread[] threads = new Thread[1000];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(demo::increment);
            threads[i].start();
        }

        // 等待所有线程执行完毕
        for (Thread thread : threads) {
            thread.join();
        }

        System.out.println("最终计数值: " + demo.getCounter());
    }
}
```

这段代码做了什么：
1. 使用 `AtomicInteger` 管理计数变量，保证所有增操作是原子性的。
2. 启动 1000 个线程并发调用 `increment()`。
3. 主线程等待所有子线程结束，最后打印计数器的准确值。

如果用普通 `int` 替代 `AtomicInteger` 并加 `counter++`，结果往往小于 1000。原因是不具备原子操作的 `++` 不是线程安全的，多个线程可能同时读到同一个值，再写回，导致丢失更新。

---

### 2. AtomicLong 与 AtomicReference

`AtomicLong` 和 `AtomicInteger` 类似，针对长整型。它们的用法差不多，`AtomicLong` 还经常用于需要计时或高精度计数的场景。

`AtomicReference<T>` 则适合需要原子更新对象引用的情况，而不是基本数据类型。譬如，在线程安全的单例模式或者缓存引用更新场景中，它非常有用。

```java
import java.util.concurrent.atomic.AtomicReference;

public class AtomicReferenceDemo {

    private static class User {
        String name;

        User(String name) {
            this.name = name;
        }

        @Override
        public String toString() {
            return "User{name='" + name + "'}";
        }
    }

    private AtomicReference<User> atomicUser = new AtomicReference<>(new User("Alice"));

    public void updateUserName(String newName) {
        User oldUser;
        User newUser;
        do {
            oldUser = atomicUser.get(); // 读取当前引用
            newUser = new User(newName); // 创建新对象
            // CAS 尝试更新引用，从 oldUser 换成 newUser
        } while (!atomicUser.compareAndSet(oldUser, newUser));
    }

    public User getUser() {
        return atomicUser.get();
    }

    public static void main(String[] args) {
        AtomicReferenceDemo demo = new AtomicReferenceDemo();
        System.out.println("更新前: " + demo.getUser());

        demo.updateUserName("Bob");

        System.out.println("更新后: " + demo.getUser());
    }
}
```

这段代码实现了一个线程安全的用户名称更新：

1. 用 `AtomicReference<User>` 存储 `User` 对象引用。
2. `updateUserName` 通过 CAS 重试机制保证多个线程不会出现交叉修改。
3. 打印更新前后用户对象。

注意这里，我们不能直接修改 User 对象的 `name` 字段（如果它是可变的），否则就不是线程安全的。原子引用保证的是引用的替换是原子操作，不是对象内部状态的原子性。

---

### 3. 原子更新器（AtomicFieldUpdater）

有时候你希望原子操作类对已有对象的某个字段进行更新，但又不想用整块 `AtomicInteger` 包装类。比如在大型对象里，频繁创建新的原子包装类开销较大，原子更新器（Atomic*FieldUpdater）提供了一种折中的办法。

假设有如下用户类，其中 `age` 是整型，我们希望线程安全地更新 `age`。

```java
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;

public class User {
    volatile int age; // 需要volatile修饰才能被Updater操作

    public User(int age) {
        this.age = age;
    }
}

public class AtomicUpdaterDemo {

    // 创建针对 User 对象中 age 字段的原子更新器
    private static AtomicIntegerFieldUpdater<User> ageUpdater =
            AtomicIntegerFieldUpdater.newUpdater(User.class, "age");

    public static void main(String[] args) {
        User user = new User(18);
        System.out.println("更新前年龄: " + user.age);

        // 原子地将年龄加1
        ageUpdater.incrementAndGet(user);

        System.out.println("更新后年龄: " + user.age);

        // 复杂一点: 尝试将年龄从19改成20
        boolean updated = ageUpdater.compareAndSet(user, 19, 20);
        System.out.println("compareAndSet成功? " + updated);
        System.out.println("最终年龄: " + user.age);
    }
}
```

这段代码做了什么：
1. `AtomicIntegerFieldUpdater` 创建时需传入目标类和目标字段的字符串名称。
2. 注意字段必须 `volatile`，保证可见性。
3. 使用 `incrementAndGet` 和 `compareAndSet` 修改 `user` 对象的 `age` 字段。
4. 这样你既不用为每个字段单独创建原子类包装对象，也可以实现原子字段的操作。

---

:::warning ⚠️ 常见陷阱

1. **不要把 `volatile` 替代 `Atomic` 类**：

   `volatile` 保证可见性，但不保证原子性。例如，`volatile int counter; counter++;` 依然不是线程安全的。自增要用 `AtomicInteger` 或同步保证。

2. **原子类操作的是单个变量**，无法保证多个变量之间的操作原子性，比如两个原子变量的联合更新仍需要外部同步。

3. **ABA问题考量**：

   CAS 操作可能出现 ABA 问题，即变量的值先从 A 变成 B 再变回 A，CAS 误判未变。原子类对此一般有处理，但自己用CAS时需注意。

4. **原子更新器的字段必须是 `volatile`**。否则不可保证内存可见性，导致不可预测错误。
:::
---

:::tip 💡 实战建议

- 在高性能场景下，优先使用原子类比 `synchronized` 更轻量级，但不要滥用。复杂的同步场景仍建议使用锁或并发框架。

- 使用原子更新器时，注意代码的可读性。如果字段复杂或频繁修改，创建单独的原子类包装可能更直观。

- 原子类方法如 `compareAndSet` 都是非阻塞的重试机制，但多线程激烈竞争时，CAS 自旋可能导致 CPU 资源浪费。必要时结合悲观锁策略。

- 关注 Java 9+ 新增的 `VarHandle`，它提供了更底层、灵活的原子操作，也可以用作原子更新器的替代方案。
:::
---

## 🔍 深入理解

### CAS 与锁的对比

- CAS 是无锁的，适用于短小的同步操作，性能优越。但对长时间持有或复杂条件不适用。

- 锁（如 `synchronized`）中的线程阻塞可以防止大量重试，适合复杂逻辑和跨多个变量的原子操作。

### ABA 问题

CAS 只比较值，不能检查“值变过几次”，解决方案包括增加版本号或使用 `AtomicStampedReference`。

---

## 小结

- **CAS 是 Java 原子类背后的核心原理，实现高效无锁原子操作。**
- **`AtomicInteger`, `AtomicLong`, `AtomicReference` 提供了针对基本类型和对象引用的原子操作接口。**
- **原子更新器允许你对已有对象的字段做“原子”更新，避免了额外包装开销。**
- **原子类适合简单的并发场景，避免了传统锁的性能损耗，但使用时仍需考虑ABA问题和多变量同步需求。**

---

## 实战应用

例如，在高并发的统计系统、计数器、线程安全缓存更新等场景，你完全可以通过原子类替代锁，写出简洁且性能优越的代码。

---

如果你对某个部分还想深入，或者希望看到结合实际业务的复杂示例，随时告诉我！我们可以一步步把这些看似抽象的原子操作变成你手中的利器。
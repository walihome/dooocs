---
title: 线程池
description: 深入理解 Java 中的线程池框架，包括 Executor、ThreadPoolExecutor 的使用及常见线程池类型和配置方法，帮助你写出高效稳定的多线程代码。
order: 65
keywords: [Java, 线程池, Executor, ThreadPoolExecutor, 并发编程]
---

# 线程池

## 前置知识
> 在阅读本章前，你需要了解：Java 基础语法、线程的基本概念、Runnable 和 Callable 接口。

## 为什么需要线程池？

想象一下，你正在开发一个高并发的服务器，每有一个请求就启动一个新线程。这种“每请求启动一线程”的做法，听起来简单直观，但在实际运行时，开销非常大。频繁创建和销毁线程不仅影响性能，还可能造成资源耗尽——操作系统需要时间分配线程资源，过多线程会导致CPU频繁切换，上下文切换成本飙升。

这就是为什么我们需要线程池。线程池的核心思想是：提前创建一定数量的线程，之后反复利用这些线程来处理多个任务，避免频繁建立/销毁线程的开销。你可以把线程池想象成“线程的工厂”，工厂不会为每一次订单临时招人，而是有几个熟练的工人常驻厂房，接到订单后立即开始工作，效率自然大大提升。

让我们一起从 Executor 框架开始，一步步揭开 Java 线程池的面纱。

## 1. Executor 框架简介

### 什么是 Executor 框架？

Executor 是 Java 5 引入的一个接口，用来替代直接管理线程的传统方式。它把“任务提交”和“任务执行”的细节分开管理，解耦了任务的产生和线程的生命周期。

简单说，Executor 就是“执行者”，你告诉它“请帮我执行这个任务”，具体用了哪个线程、什么时候执行它，它帮你安排好了。

### 为什么需要 Executor？

因为直接操作 Thread 在大多数场景下太低级，且容易出现资源管理难题。Executor 允许开发者专注于“写业务逻辑”，线程调度由框架统一管理。

### 使用 Executor 执行任务

我们从最基础的例子开始，看看如何使用 Executor 来执行一个简单的 Runnable 任务。

```java
import java.util.concurrent.Executor;

public class SimpleExecutorExample {
    public static void main(String[] args) {
        Executor executor = command -> {
            // 这里直接新建线程执行任务，实际不推荐，这样没起到线程重用效果
            new Thread(command).start();
        };

        executor.execute(() -> System.out.println("任务执行了，线程: " + Thread.currentThread().getName()));
    }
}
```

**这段代码做了什么？**

1. 创建了一个简单的 Executor 实现，重写 execute 方法，提交任务时直接开一个新线程执行。
2. 执行了一个打印语句的 Runnable。

乍看没啥问题，但你其实刚刚搭了一个“伪线程池”：每次执行都会新起线程。跟我们开始说的问题一样：线程没被复用，依然可能导致性能问题。

所以，好用的线程池还得去用 `ThreadPoolExecutor`。（别急，马上跟你详细说）

## 2. ThreadPoolExecutor - 线程池的核心实现

### ThreadPoolExecutor 是什么？

它是 Java 并发包里一个非常强大的类，真正实现了“线程复用”，并且提供了丰富的参数让你调优线程池行为。

简而言之，ThreadPoolExecutor 就是线程池的模子，你可以用它定制线程数量、任务队列大小、线程空闲时间、任务拒绝策略等。

### 为什么我们选 ThreadPoolExecutor？

它灵活，既可以做固定线程数的线程池（线程数固定），也能实现按需增长和收缩的弹性线程池，还支持队列和拒绝策略，能满足不同的业务需求。

### 基本构造参数介绍

- **corePoolSize**：核心线程数，核心线程在任务到来时会优先复用，不会被立即回收。
- **maximumPoolSize**：最大线程数，线程池里允许的最大线程数。
- **keepAliveTime**：非核心线程闲置多长时间后会被回收，腾出资源。
- **unit**：时间单位。
- **workQueue**：任务队列，用来缓存等待执行的任务。
- **threadFactory**：创建新线程的工厂，用于自定义线程属性。
- **handler**：拒绝策略，当线程池和任务队列都满了该如何处理新任务。

### 代码示例：创建一个固定线程数的线程池

```java
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadPoolExecutor;
import java.util.concurrent.TimeUnit;

public class FixedThreadPoolExample {
    public static void main(String[] args) {
        // 创建核心线程数和最大线程数都为3的线程池，任务队列默认使用LinkedBlockingQueue
        ThreadPoolExecutor threadPool = new ThreadPoolExecutor(
                3, // corePoolSize
                3, // maximumPoolSize
                0L, TimeUnit.MILLISECONDS, // keepAliveTime 对于固定线程池没影响
                new java.util.concurrent.LinkedBlockingQueue<Runnable>() // 任务队列
        );

        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            threadPool.execute(() -> {
                System.out.println("任务 " + taskId + " 执行，线程: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(1000); // 模拟任务执行时间
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        threadPool.shutdown();
    }
}
```

**这段代码做了什么？**

1. 创建了一个核心线程数和最大线程数均为3的线程池，表明最多同时跑3个线程。
2. 提交了5个任务，只能3个线程同时执行，其他任务排队等待。
3. 等待1秒模拟任务执行时间。
4. 最后关闭线程池。

从这里你可以看到，线程池帮我们控制了线程数量，避免任务一下子启动过多线程。

### 线程池中的线程是如何执行任务？

当一个新任务到来时：

- 如果当前运行线程数少于 corePoolSize，立刻创建新线程执行任务。
- 如果当前运行线程数 ≥ corePoolSize，放入任务队列中等待。
- 如果任务队列满了，且当前线程数 < maximumPoolSize，会扩大线程数来执行任务。
- 如果满负荷了，触发拒绝策略。

## 3. 常见线程池类型

Java 并发包还提供了 `Executors` 工具类，帮我们创建一些常见的线程池。

### 1) FixedThreadPool - 固定线程池

和上面例子类似，核心线程数等于最大线程数，线程池大小固定。

```java
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorsFixedThreadPoolDemo {
    public static void main(String[] args) {
        ExecutorService fixedThreadPool = Executors.newFixedThreadPool(3);

        for (int i = 1; i <= 6; i++) {
            int taskId = i;
            fixedThreadPool.execute(() -> {
                System.out.println("任务 " + taskId + " 执行，线程: " + Thread.currentThread().getName());
                try {
                    Thread.sleep(700);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        fixedThreadPool.shutdown();
    }
}
```

### 2) CachedThreadPool - 可缓存线程池

线程数不固定，任务来就新建线程，没有任务时，60秒后回收空闲线程。

适合执行大量短生命周期的异步任务。

### 3) SingleThreadExecutor - 单线程池

只有一个线程来执行任务，保证任务按顺序执行。

非常适合需要顺序执行任务的场景。

## 4. 线程池重要参数详解与调优建议

| 参数            | 含义                                       | 性能影响与建议                        |
|-----------------|------------------------------------------|-------------------------------------|
| corePoolSize    | 核心线程数，始终保持的线程数量               | 设置为CPU核心数或适合业务并发量       |
| maximumPoolSize | 最大线程数                                 | 控制最大并发线程数，防止线程爆炸       |
| keepAliveTime   | 非核心线程空闲后的存活时间                   | 任务不均匀时调节线程回收，节省资源     |
| workQueue       | 任务队列（有界或无界）                       | 有界队列防止内存溢出，无界队列风险大   |
| threadFactory   | 自定义线程创建                               | 方便设定线程名字、优先级等             |
| handler         | 拒绝策略                                   | 例如抛异常、中断或让调用者执行任务等   |

:::warning ⚠️ 常见陷阱

- **使用无界队列时**，maximumPoolSize 失效，线程数不会超过 corePoolSize，因为新任务都进入队列排队，可能导致堆积。
- 提交长时间阻塞任务时，线程池可能垮掉，应合理设置线程数和拒绝策略。
- 手动调用 `shutdown()` 后尝试提交任务，会导致 RejectedExecutionException。
- CachedThreadPool 默认线程不限制最大线程，产生大量线程容易OOM。
:::
## 5. 实战建议

- 线程池大小应结合 CPU 核心数和业务特点合理配置。
- 尽量避免使用 Executors.newFixedThreadPool 等工厂方法创建的无界队列线程池，推荐自定义 ThreadPoolExecutor 以便更灵活调整。
- 任务执行时间较长时要设置合理的超时机制及拒绝策略，避免线程池被占满。
- 监控线程池运行状态，及时调整配置参数。

:::tip 💡 实战建议

在实际项目中，我发现通过自定义 ThreadPoolExecutor 并结合业务负载动态调整参数，能显著提升系统稳定性和吞吐量。结合自定义线程工厂设置有意义的线程名，方便排查问题。此外，拒绝策略最好设为 CallerRunsPolicy，防止任务丢失同时反压调用者。
:::
:::details 🔍 深入理解 ThreadPoolExecutor 构造函数

构造方法签名如下，涵盖了所有自定义点：

```java
public ThreadPoolExecutor(int corePoolSize,
                          int maximumPoolSize,
                          long keepAliveTime,
                          TimeUnit unit,
                          BlockingQueue<Runnable> workQueue,
                          ThreadFactory threadFactory,
                          RejectedExecutionHandler handler)
```
:::
每个参数都有它存在的理由：

- **corePoolSize** 和 **maximumPoolSize** 联手控制线程数量弹性。
- **keepAliveTime** 控制线程回收，避免资源浪费。
- **workQueue** 影响任务排队、吞吐及内存开销。
- **threadFactory** 提升线程可管理性。
- **handler** 防止意外任务丢失或阻塞。

## 6. 进阶示例：自定义完整线程池

下面示范一个更复杂的线程池配置，包括自定义线程工厂和拒绝策略。

```java
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicInteger;

public class CustomThreadPoolExample {
    public static void main(String[] args) {
        ThreadFactory namedThreadFactory = new ThreadFactory() {
            private final AtomicInteger threadNumber = new AtomicInteger(1);
            public Thread newThread(Runnable r) {
                Thread t = new Thread(r, "worker-thread-" + threadNumber.getAndIncrement());
                return t;
            }
        };

        RejectedExecutionHandler rejectHandler = new ThreadPoolExecutor.CallerRunsPolicy();

        ThreadPoolExecutor customThreadPool = new ThreadPoolExecutor(
                2,                  // corePoolSize
                5,                  // maximumPoolSize
                30, TimeUnit.SECONDS, // keepAliveTime
                new ArrayBlockingQueue<>(3), // 有界阻塞队列，最多等待3个任务
                namedThreadFactory,
                rejectHandler
        );

        for (int i = 1; i <= 10; i++) {
            int taskId = i;
            customThreadPool.execute(() -> {
                System.out.println(Thread.currentThread().getName() + " 正在执行任务 " + taskId);
                try {
                    Thread.sleep(1500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            });
        }

        customThreadPool.shutdown();
    }
}
```

**这段代码做了什么？**

1. 创建了一个带有自定义线程名的工厂，方便排查线程。
2. 使用有界任务队列，防止任务无限积压。
3. 设定了 CallerRunsPolicy 拒绝策略，线程池满时由调用线程直接运行任务，起到反压效果。
4. 提交了 10 个任务，线程池大小和队列容量共同限制执行并发量。

---

# 小结

- 线程池通过复用线程减少高频创建销毁线程的性能开销，是 Java 并发必备技能。
- Executor 框架帮助你解耦任务提交和执行细节。
- ThreadPoolExecutor 是线程池的核心实现，灵活可调控。
- 常见线程池包括固定线程池、缓存线程池和单线程池，适用不同场景。
- 参数配置是关键，合理设置线程数、队列和拒绝策略能保证系统稳定。
- 线程池设计中，关注线程命名、监控和拒绝策略，避免资源耗尽和任务丢失。

线程池看似复杂，但掌握核心思想和参数，就能写出高效且健壮的并发应用。希望这章能帮你顺利把线程池“纳入囊中”，后续项目多开几个线程都不怕！如果你准备好了，我们下一章继续聊更多 Java 并发知识。

```
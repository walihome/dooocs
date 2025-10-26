---
title: CountDownLatch与CyclicBarrier
description: 深入理解 Java 中的线程协调工具 CountDownLatch、CyclicBarrier 及相关同步实用工具
order: 67
keywords: [Java, 线程协调, CountDownLatch, CyclicBarrier, Semaphore, Exchanger, 并发编程]
---

# CountDownLatch与CyclicBarrier

## 前置知识

> 在阅读本章前,你需要了解:  
> - Java 线程基本操作  
> - `synchronized`关键字和基础锁机制  
> - 线程的生命周期和简单的并发问题  

## 为什么需要线程协调工具？

你有没有遇到过这样的场景：需要多个线程并行执行任务后，等待所有线程都完成后再继续下一步操作？或者多个线程需要在某个“同步点”上集合，全部准备好后一同前进？这时候，单纯使用 `synchronized` 或 `wait/notify` 会显得笨拙且容易出错。

这正是 Java 并发包中线程协调工具闪亮登场的地方。它们帮我们解决“线程什么时候该等待”“什么时候该继续”这类协调难题，让代码更简洁、清晰，也更安全。

本章我们聚焦于两个经典工具：

- **CountDownLatch**，一个“倒计时门”，等待多个人（线程）陆续到齐，门才打开。  
- **CyclicBarrier**，一个“循环栅栏”，多个线程互相等待，待大家都到齐后，一起冲过这道栅栏。

除了这两个，还有相关的 `Semaphore` 和 `Exchanger` 也会简单介绍，它们各有趣味与适用场景。

---

## 线程协调工具的核心概念

### CountDownLatch 简单定义

`CountDownLatch` 是一个可以让一个或多个线程等待，直到其他线程完成一组操作的同步辅助类。它内部维护一个计数器，初始值由我们设定。每当一个线程完成任务，便调用`countDown()`使计数器减一。当计数器为0时，等待的线程们被唤醒，可以继续执行。

为什么需要它？想象你是活动策划师，要等所有工作人员完成布置，才能开场。`CountDownLatch`正是这个“等候信号”的传递门。

### CyclicBarrier 简单定义

`CyclicBarrier`让一组线程互相等待，直到全部到齐，然后一起释放。与 `CountDownLatch` 不同的是它可以“循环使用”，类似一个可以复位的屏障。

为什么需要它？比如一场团队比赛，大家必须在起点齐聚，等全员准备好才一起起跑。`CyclicBarrier`就是让线程们在同一节点会合的工具。

---

## 代码示例与详细讲解

### 示例1：CountDownLatch 基础用法

先尝试一个简洁示例，我们有3个工作线程要完成各自任务，主线程等待所有工作线程结束后再继续。

```java
import java.util.concurrent.CountDownLatch;

public class CountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int workerCount = 3;
        CountDownLatch latch = new CountDownLatch(workerCount);

        for (int i = 1; i <= workerCount; i++) {
            final int workerId = i;
            new Thread(() -> {
                try {
                    System.out.println("Worker " + workerId + " is working.");
                    Thread.sleep(1000 * workerId);  // 模拟工作耗时
                    System.out.println("Worker " + workerId + " finished.");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    latch.countDown();  // 减少计数器
                }
            }).start();
        }

        System.out.println("Main thread is waiting for workers to finish...");
        latch.await();  // 主线程等待计数器归零
        System.out.println("All workers finished. Main thread proceeds.");
    }
}
```

**这段代码做了什么？**  
1. 创建了一个计数器，初始为3，代表3个工作线程。  
2. 启动3个线程，每个线程工作一段时间后调用`countDown()`减少计数器。  
3. 主线程调用`await()`阻塞，直到计数器减为0，才继续执行。

这模拟了典型的“主线程等待多个子任务完成”的场景。

---

### 示例2：CyclicBarrier 基础使用

下面我们看看 `CyclicBarrier`，假设有4个跑步的同学，必须等大家都准备齐才能同时开始。

```java
import java.util.concurrent.BrokenBarrierException;
import java.util.concurrent.CyclicBarrier;

public class CyclicBarrierExample {
    public static void main(String[] args) {
        int runnerCount = 4;
        CyclicBarrier barrier = new CyclicBarrier(runnerCount, () -> {
            System.out.println("All runners ready, race starts!");
        });

        for (int i = 1; i <= runnerCount; i++) {
            final int runnerId = i;
            new Thread(() -> {
                try {
                    System.out.println("Runner " + runnerId + " is preparing.");
                    Thread.sleep(1000 * runnerId);  // 模拟准备时间
                    System.out.println("Runner " + runnerId + " ready and waiting at barrier.");
                    barrier.await();  // 等待所有线程到达
                    System.out.println("Runner " + runnerId + " started running!");
                } catch (InterruptedException | BrokenBarrierException e) {
                    Thread.currentThread().interrupt();
                }
            }).start();
        }
    }
}
```

**这段代码做了什么？**  
1. 初始化一个`CyclicBarrier`，等待4个线程同时调用`await()`，并指定了一个屏障动作（打印比赛开始）。  
2. 每位线程等待自己的准备时间，调用`await()`阻塞，直到所有线程到齐。  
3. 所有线程一同被唤醒，开始“奔跑”。

这个例子让你体会“集合一起再行动”的效果。

---

### 示例3：结合CountDownLatch和Semaphore的复杂场景

以上两个工具很有用，但现实中，有时线程不仅需要等待，还要控制并发度（限制同时运行的线程数）。这时 `Semaphore` 就来了。

假设你有10个任务，但一次只想允许3个任务并发执行，且必须等所有任务完成后，主线程才能继续。

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.Semaphore;

public class SemaphoreCountDownLatchExample {
    public static void main(String[] args) throws InterruptedException {
        int totalTasks = 10;
        int concurrentLimit = 3;

        Semaphore semaphore = new Semaphore(concurrentLimit);  // 控制并发数
        CountDownLatch latch = new CountDownLatch(totalTasks); // 等待所有任务完成

        for (int i = 1; i <= totalTasks; i++) {
            final int taskId = i;
            new Thread(() -> {
                try {
                    semaphore.acquire();  // 获取许可，限制同一时间并发任务数
                    System.out.println("Task " + taskId + " started.");
                    Thread.sleep(500); // 模拟任务执行
                    System.out.println("Task " + taskId + " completed.");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                } finally {
                    semaphore.release();  // 释放许可
                    latch.countDown();    // 减少倒计时计数器
                }
            }).start();
        }

        System.out.println("Main thread waiting for all tasks to finish...");
        latch.await();  // 主线程等待所有任务完成
        System.out.println("All tasks done, main thread continues.");
    }
}
```

**这段代码做了什么？**  
1. 使用`Semaphore`限制同时运行的线程数为3。  
2. 10个任务启动，每个任务先尝试获取许可，成功后开始执行，执行完释放许可。  
3. 使用`CountDownLatch`等待所有任务执行完成后，主线程继续。

这就是“限制并发+批量等待”的经典组合。

---

## 对比总结

| 工具            | 主要用途                       | 线程等待机制            | 是否复用 | 典型使用场景                         |
|-----------------|------------------------------|-------------------------|----------|------------------------------------|
| CountDownLatch  | 等待若干个事件完成             | 其他线程调用`countDown()`降低计数器，等待直到为0 | 不可复用 | 主线程等待所有子线程任务完成        |
| CyclicBarrier   | 多线程相互等待，集合后继续     | 所有线程调用`await()`，互相等待 | 可复用   | 多线程阶段任务分步同步，例如比赛起跑 |
| Semaphore       | 控制同时访问资源的线程数       | 线程通过`acquire()`/`release()`控制许可 | 可复用   | 限流、资源池访问控制                 |
| Exchanger       | 两个线程间交换数据             | 双方都调用`exchange()`等待对方传数据 | 可复用   | 线程间双向数据交换                   |

总的来说，`CountDownLatch`适合“一次性等完成”，`CyclicBarrier`适合“多次阶段同步”，`Semaphore`用来“限制数量”，`Exchanger`侧重“线程间交换”。

---

:::tip 💡 实战建议  
- 当你需要一组线程完成后再继续时，优先考虑**CountDownLatch**，它简单且语义明确。  
- 如果你的任务需要多次阶段性协调，用**CyclicBarrier**更合适，别忘了它可以复用。  
- 不要滥用`wait/notify`做线程协调，容易写出复杂且难维护的代码。  
- `Semaphore`除了限流，也常用作资源池的实现基础。  
- 使用这些工具时，异常处理中断要小心，避免死锁或永远等待的情况。  
:::

---

:::warning ⚠️ 常见陷阱  
- **CountDownLatch**计数一旦到0无法重置，如果需要重用请选用`CyclicBarrier`。  
- 忘记调用`countDown()`是最常见的错误，会导致等待线程永远阻塞。  
- `CyclicBarrier.await()`可能抛出`BrokenBarrierException`，务必捕获处理，否则线程意外终止会导致其他线程卡死。  
- 使用`Semaphore`时，`acquire()`和`release()`必须成对出现，否则许可泄露或线程阻塞。  
- 避免在持有锁时调用这些阻塞方法，否则可能导致死锁。  
:::

---

## 延伸思考

- 如果你要设计一个多阶段生产流水线，如何结合 `CountDownLatch` 和 `CyclicBarrier` 来让线程协同工作？  
- `CountDownLatch`内部的状态是如何管理的？它是如何保证线程安全的？  
- `Exchanger` 和 `SynchronousQueue` 在实现线程数据交换时有什么区别？  

这些问题值得你日后深入拓展。

---

## 小结

- 线程协调工具解决了复杂并发控制中的等待和同步问题，远胜手写锁等待。  
- `CountDownLatch` 适合一次性等待多个任务完成，计数不可复用。  
- `CyclicBarrier` 适合循环多次的线程同步，等待所有线程到达屏障。  
- `Semaphore` 限制同一时间内的线程访问数，适合限流与资源池。  
- 编写并发代码时务必注意异常处理，防止线程永远阻塞。

希望这章内容可以帮你理清线程协调的思路，从容应对多线程编程中的“等待”与“同步”难题。

---

如果你有具体业务场景，我们可以一起分析如何选用及设计这些工具的结合。欢迎随时来聊！
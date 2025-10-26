---
title: 线程基础
description: 理解 Java 线程的基本概念、Thread 类与 Runnable 接口，掌握线程状态及生命周期。
order: 59
keywords: [Java, 线程, Thread, Runnable, 线程状态, 生命周期]
---

# 线程基础

## 前置知识
> 在阅读本章前，你需要了解：Java 基础语法、类与对象的概念、基本的面向对象编程思想。

## 为什么需要线程？

你有没有遇到过这样的情况：你的程序需要同时做好几件事，比如下载文件的同时播放音乐，或者在界面上响应用户点击时不让整个程序卡死？单线程程序往往一次只能做一件事情，这样用户体验就会很糟糕。解决这个问题的利器就是“线程”。

线程就是程序中能够独立执行的一条“执行路径”。你可以把它想象成多个“工作人员”同时在办公室里各自分工合作，而不是只有一个人在做所有事情。理解线程，不仅让你写出响应迅速的程序，还能利用多核 CPU 提升性能。

本章我们将从最简单的线程概念入手，逐步了解 Java 中 `Thread` 类和 `Runnable` 接口的使用，观察线程的生命周期以及它们常见的状态变化。让我们一起揭开线程的神秘面纱，慢慢掌握多任务编程的基本技能。

## 线程是什么？

用人话说，线程就是程序里的“小跑腿”——它负责跑自己的代码路线，不会影响其他线程的进展。

> **为什么需要线程？**  
想象你在厨房做饭，单线程就像只有一个厨师，得按顺序完成切菜、炒菜、摆盘。而多线程就像有几个厨师同时操作，效率大大提升。

### 线程和进程的区别

- **进程**：程序运行时被操作系统分配的资源单位，可以理解为一个厨房。
- **线程**：进程内部真正执行代码的控制单元，也就是厨房里的厨师。

通常一个进程至少会有一个线程，Java 程序默认启动主线程来执行。

---

## Java 中如何创建线程？

Java 提供了两种主流方式：

1. 继承 `Thread` 类
2. 实现 `Runnable` 接口

这两种方式就像选择开车或者骑自行车，上路方式不同但最终目的地相同。

### 1. 继承 Thread 类

我们可以定义一个类继承 `Thread`，重写其中的 `run()` 方法，里面写线程要做的事。

```java
public class SimpleThread extends Thread {
    @Override
    public void run() {
        System.out.println("线程 " + Thread.currentThread().getName() + " 正在运行");
    }

    public static void main(String[] args) {
        SimpleThread thread1 = new SimpleThread(); // 创建线程对象
        thread1.start(); // 启动线程，执行 run 方法
    }
}
```

**这段代码做了什么：**  
1. 定义了一个 `SimpleThread` 类，继承 `Thread`。  
2. 重写 `run()` 方法，打印当前线程名称。  
3. 在 `main` 方法里，创建 `SimpleThread` 对象后调用 `start()`，这个方法负责真正启动线程，并在新线程中调用 `run()`。

**要注意：** 不能直接调用 `run()`，否则它就变成了普通方法调用，线程就不会并发执行了。

---

### 2. 实现 Runnable 接口

由于 Java 不支持多继承，为了扩展更多功能，推荐做法是实现 `Runnable` 接口。

```java
public class RunnableExample implements Runnable {
    @Override
    public void run() {
        System.out.println("Runnable 线程 " + Thread.currentThread().getName() + " 正在运行");
    }

    public static void main(String[] args) {
        RunnableExample runnableTask = new RunnableExample();
        Thread thread2 = new Thread(runnableTask); // 把任务包装成线程
        thread2.start(); // 启动线程
    }
}
```

**这段代码做了什么：**  
1.创建一个实现 `Runnable` 的类，写 `run()` 方法。  
2.新建线程时，把这个对象传给 `Thread` 构造器。  
3.通过 `start()` 启动线程。

这也是企业级项目中最常见的写法，因为它解耦了任务和线程，更灵活。

---

## 线程状态和生命周期

线程从出生到结束，会经历一系列状态转换，就像人生有“出生—成长—工作—退休”的阶段。

Java 线程的状态主要有六个：

| 状态        | 描述                               |
| ----------- | ---------------------------------- |
| NEW         | 新建，线程对象被创建，尚未启动    |
| RUNNABLE    | 可运行，等待 CPU 调度执行          |
| BLOCKED     | 阻塞，线程等待锁释放                |
| WAITING    | 等待，线程无限期等待某事件         |
| TIMED_WAITING | 限时等待，等待有超时限制的事件     |
| TERMINATED  | 终止，线程完成或异常结束            |

### 生命周期示意

当你调用 `start()`，线程从 `NEW` 进入 `RUNNABLE`。CPU 什么时候分配时间片给它，它才真正执行 `run()` 里的代码。

线程执行完毕或异常退出后，进入 `TERMINATED`。

---

### 代码示例：多个线程状态转换

```java
public class ThreadStateDemo {
    public static void main(String[] args) throws InterruptedException {
        Thread thread = new Thread(() -> {
            System.out.println("线程状态1: " + Thread.currentThread().getState()); // RUNNABLE
            try {
                Thread.sleep(2000); // TIMED_WAITING
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            System.out.println("线程即将结束");
        });

        System.out.println("线程状态0（NEW）: " + thread.getState());  // NEW

        thread.start();
        Thread.sleep(500);
        System.out.println("线程状态2（TIMED_WAITING）: " + thread.getState());  // TIMED_WAITING

        thread.join();
        System.out.println("线程状态3（TERMINATED）: " + thread.getState());  // TERMINATED
    }
}
```

**这段代码做了什么：**  
1.新建线程，还未启动，状态是 `NEW`。  
2.启动后打印线程状态，线程进入可运行状态。  
3.线程休眠 2 秒，进入 `TIMED_WAITING`。  
4.主线程等待子线程完成，再打印终止状态。

通过 `getState()` 方法我们能直接观察线程的状态，非常方便调试和学习。

---

## 常见陷阱：调用 `run()` vs `start()`

很多人第一次写线程时犯了个坑，直接调用了线程的 `run()` 方法。这里务必注意：

```java
public class ThreadPitfall {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> {
            System.out.println("线程运行中：" + Thread.currentThread().getName());
        });

        thread.run();   // 这里不会启动新线程，代码在主线程执行
        thread.start(); // 这里才是真正启动线程
    }
}
```

`run()` 是普通方法调用，不会启动新线程，也不会并发执行。`start()` 才会启动新线程，异步执行 `run()`。

如果你不清楚这一点，可能会导致程序不是并发执行，而是顺序执行，影响性能和UI响应。

---

:::tip 💡 实战建议
- 优先使用实现 `Runnable` 接口的方式创建线程，增强灵活性。  
- 避免重用 Thread 对象，一个线程对象启动一次后不能重新启动。  
- 使用线程池（后续章节介绍）管理线程生命周期，避免资源浪费和频繁创建销毁带来的开销。  
- 多线程调试很复杂，推荐使用 `getState()` 和日志打印观察线程状态。  
- 理解线程状态转变有助于定位死锁、阻塞等问题，提高代码健壮性。
:::

---

## 延伸思考

- 你能想到哪些现实生活中的多线程场景？例如银行柜台排队服务，如何对应线程的状态转换？  
- 如果两个线程都在等对方释放资源怎么办？这就是死锁，你能列举程序中可能发生死锁的例子吗？  
- 主线程和子线程如何协作完成一项复杂任务？有没有安全的通信和数据共享方法？

---

## 小结

- 线程是程序中独立执行的路径，Java 提供了 `Thread` 类和 `Runnable` 接口两种方式创建线程。  
- 线程状态包括新建、可运行、阻塞、等待、限时等待和终止，理解它们有助于调试。  
- 启动线程必须调用 `start()`，直接调用 `run()` 不会创建新线程。  
- 推荐实现 `Runnable` 接口，实现任务和线程分离，提升代码灵活性和可维护性。  
- 通过实践和观察线程状态，逐步掌握多线程编程的精髓。

---

希望这章内容帮你迈出了多线程世界的第一步。接下来，我们会继续探索线程安全与同步，帮助你写出更加稳定高效的并发程序。祝你学习愉快！
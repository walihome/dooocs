---
title: wait/notify机制  
description: 通过生产者消费者模式深入理解Java中的wait、notify和notifyAll机制及线程通信  
order: 61  
keywords: [Java, wait, notify, 线程通信, 生产者消费者模式, 线程同步]  
---

# wait/notify机制

## 前置知识  
> 在阅读本章前，你需要了解：  
> - Java中的线程基础知识（Thread类、同步锁synchronized）  
> - 基本的对象锁与监视器概念  
> - 线程安全与竞态条件的初步理解  

## 为什么需要 wait/notify 机制？

想象一个场景：你和我在排队买咖啡，店员做咖啡的速度比你点单的速度还快。我们两个必须协调：你得等咖啡准备好才能拿走，店员也不能随便空闲等待。  
在Java多线程程序中，线程间也有类似的“协作”，比如一个线程做数据生产，另一个线程消费数据。我们不能让消费者一直空跑等待，也不能让生产者盲目覆盖数据。  
这时候，线程通信机制——`wait`和`notify`就登场了。它们让线程像排队买咖啡的人一样，能够“等”和“叫醒”对方，从而高效协同工作。

## 具体章节

### 什么是 wait、notify 和 notifyAll？

- `wait()`：线程放弃当前对象锁，进入等待状态，直到被通知或中断。  
- `notify()`：随机唤醒一个在该对象监视器上等待的线程（如果有多个等待线程，挑一个唤醒）。  
- `notifyAll()`：唤醒所有等待线程，争抢对象锁。  

**为什么需要它们？**

单纯用`synchronized`锁只是保证了互斥访问，但无法让线程“停下来等待”条件满足时才继续执行。`wait`和`notify`机制能让线程“先歇着”，等消息来了再继续，大大提升效率，避免“忙等”。

### 基础示例：基本的wait/notify用法

我们先从简单的“线程等待通知”开始。下面代码演示一个线程等待，另一个线程一会通知它：

```java
import java.lang.Thread;

public class WaitNotifyExample {
    private final Object lock = new Object();
    private boolean ready = false;

    public void waitForReady() {
        synchronized (lock) {
            while (!ready) {   // 这里用while而不是if，等会解释原因
                try {
                    System.out.println(Thread.currentThread().getName() + ": 等待ready变为true");
                    lock.wait();  // 线程释放锁并进入等待状态
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt(); // 处理中断，良好习惯
                    System.out.println("线程被中断");
                }
            }
            System.out.println(Thread.currentThread().getName() + ": 准备就绪，继续执行");
        }
    }

    public void setReady() {
        synchronized (lock) {
            ready = true;
            System.out.println(Thread.currentThread().getName() + ": 设置ready为true，通知等待线程");
            lock.notify();  // 唤醒一个等待线程
        }
    }

    public static void main(String[] args) throws InterruptedException {
        WaitNotifyExample example = new WaitNotifyExample();

        Thread waiter = new Thread(example::waitForReady, "等待线程");
        waiter.start();

        Thread.sleep(1000); // 主线程暂停一秒，确保waiter先等待

        Thread notifier = new Thread(example::setReady, "通知线程");
        notifier.start();
    }
}
```

**这段代码做了什么？**

1. `等待线程`获得`lock`锁后，因为`ready`为`false`，调用`lock.wait()`，放弃锁并进入等待状态。  
2. `通知线程`稍后获得锁，把`ready`置为`true`，并调用`lock.notify()`唤醒等待线程。  
3. 被唤醒的等待线程重新竞争获得锁后，检查`ready`，条件满足后继续执行。  

这里的关键是`wait()`必须在`synchronized`块内调用，它会释放当前锁，让其他线程有机会修改条件然后通知。  

### 小结

- 通过`wait`让线程等待条件  
- 用`notify`唤醒等待线程  
- 条件判断用`while`循环，防止虚假唤醒（这里稍后深入解释）  

---

### 代码示例2：带条件判断的线程等待

你可能会觉得，我们刚才的`waitForReady()`里为什么用`while`而不是`if`判断`ready`？这确实是个容易绊脚的细节，关系到“虚假唤醒”问题。

虚假唤醒指的是：`wait()`线程有可能被“无缘无故”醒来，虽然没有收到真正的通知。这是JVM和底层操作系统的特性。为了避免错过条件，我们必须在被唤醒后重新检测条件。

下面利用之前例子稍作改进，展示这层保护：

```java
import java.lang.Thread;

public class WaitNotifyWithCondition {
    private final Object lock = new Object();
    private boolean conditionMet = false;

    public void waitUntilCondition() {
        synchronized (lock) {
            while (!conditionMet) {
                try {
                    System.out.println(Thread.currentThread().getName() + ": 条件不满足，等待");
                    lock.wait();
                    System.out.println(Thread.currentThread().getName() + ": 被唤醒，重新检查条件");
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
            }
            System.out.println(Thread.currentThread().getName() + ": 条件满足，继续执行");
        }
    }

    public void signalCondition() {
        synchronized (lock) {
            conditionMet = true;
            lock.notifyAll(); // 通知所有等待线程
            System.out.println(Thread.currentThread().getName() + ": 条件已满足，通知全部线程");
        }
    }

    public static void main(String[] args) throws InterruptedException {
        WaitNotifyWithCondition example = new WaitNotifyWithCondition();

        Runnable waiterTask = example::waitUntilCondition;
        Thread waiter1 = new Thread(waiterTask, "等待线程1");
        Thread waiter2 = new Thread(waiterTask, "等待线程2");

        waiter1.start();
        waiter2.start();

        Thread.sleep(1500);

        Thread notifier = new Thread(example::signalCondition, "通知线程");
        notifier.start();
    }
}
```

**这段代码做了什么？**

- 两个线程等待同一条件  
- 它们用`while`循环判断条件，一旦被唤醒马上重新确认条件是否满足  
- 通知线程用`notifyAll()`唤醒所有等待线程，因为可能有多个线程等待  

我们也演示了为什么要用`notifyAll()`而不是仅用`notify()`，防止某些线程永远没被唤醒，造成死锁。

---

### 深入：生产者消费者模式演示

好了，我们已经对`wait/notify`有了基础了解。现在用春秋战国时期的“厨师与服务员”做个比喻：

- 厨师（生产者）负责做菜  
- 服务员（消费者）负责端菜  
- 菜柜（共享资源缓冲区）只能放一份菜  
 
厨师做菜之前必须保证菜柜空着，否则得等；服务员取菜之前必须保证菜柜有菜，否则也得等。这个“等”和“通知”，就是`wait/notify`的最佳场景。

#### 代码示范

```java
import java.util.LinkedList;
import java.util.Queue;

public class ProducerConsumerExample {

    private final Queue<String> dishQueue = new LinkedList<>();
    private final int MAX_CAPACITY = 1;
    private final Object lock = new Object();

    // 生产者：厨师做菜
    class Producer implements Runnable {
        private int dishNumber = 1;

        @Override
        public void run() {
            try {
                while (true) {
                    produceDish();
                    Thread.sleep(500); // 模拟做菜时间
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.out.println("厨师线程被中断");
            }
        }

        private void produceDish() throws InterruptedException {
            synchronized (lock) {
                while (dishQueue.size() == MAX_CAPACITY) {
                    System.out.println("厨师等待，菜柜已满");
                    lock.wait();  // 等待消费者取走菜
                }
                String dish = "菜" + dishNumber++;
                dishQueue.offer(dish);
                System.out.println("厨师做了一份菜: " + dish);
                lock.notifyAll(); // 通知消费者有菜了
            }
        }
    }

    // 消费者：服务员端菜
    class Consumer implements Runnable {
        @Override
        public void run() {
            try {
                while (true) {
                    consumeDish();
                    Thread.sleep(800);  // 模拟端菜时间
                }
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                System.out.println("服务员线程被中断");
            }
        }

        private void consumeDish() throws InterruptedException {
            synchronized (lock) {
                while (dishQueue.isEmpty()) {
                    System.out.println("服务员等待，菜柜空着");
                    lock.wait();  // 等待厨师做菜
                }
                String dish = dishQueue.poll();
                System.out.println("服务员端走了菜: " + dish);
                lock.notifyAll(); // 通知厨师可以做菜了
            }
        }
    }

    public void startSimulation() {
        Thread chef = new Thread(new Producer(), "厨师");
        Thread waiter = new Thread(new Consumer(), "服务员");
        chef.start();
        waiter.start();
    }

    public static void main(String[] args) {
        ProducerConsumerExample example = new ProducerConsumerExample();
        example.startSimulation();
    }
}
```

**这段代码做了什么？**

1. 使用`dishQueue`作为共享缓冲区，最多放一份菜。  
2. 厨师线程如果缓冲区满，就`wait()`等待服务员取菜。  
3. 服务员线程如果缓冲区空，就`wait()`等待厨师做菜。  
4. 每次状态改变后通过`notifyAll()`唤醒对方继续工作。  

**模拟说明：**当你看输出时，会看到厨师和服务员交替等待和工作，认为它们在“对话”，协调完成工作。

---

:::tip 💡 实战建议  
- **总是用 `while` 而非 `if` 来检查条件**，防止虚假唤醒导致程序异常。  
- **`wait()`与`notify/notifyAll()`必须在持有锁的`synchronized`块内调用**，否则抛`IllegalMonitorStateException`。  
- **除非你确认只有一个等待线程，否则用`notifyAll()`更安全，**避免单独唤醒错误线程导致死锁。  
- **尽可能避免锁范围过大，减少锁竞争，保障程序效率。**  
- 在高并发场景考虑使用`java.util.concurrent`包下更现代的工具（如`BlockingQueue`）替代`wait/notify`，更易用且安全性更高。  
:::

:::warning ⚠️ 常见陷阱  
- **忘记将`wait()`写在循环中**，导致线程被唤醒后条件还不满足，代码仍错误继续执行。  
- **在锁外调用`wait()`或`notify()`，程序直接抛异常。**  
- **`notify()`随机唤醒线程，可能唤醒了不需要的线程，导致程序挂起。**  
- **`wait()`被中断后没有正确处理，造成线程未终止或状态未恢复。**  
:::

:::details 🔍 深入理解虚假唤醒  
虚假唤醒是指`wait()`线程可能无缘无故被唤醒，这是Java规范允许的行为，主要是为了防止线程永久阻塞。  
因此，等待条件的代码必须一定写成`while(!condition) wait()`形式。  
其他线程调用`notify()`或`notifyAll()`只是“唤醒”线程，但不代表条件已经满足，所以线程必须自己重新判断条件。  
这是`wait/notify`使用的黄金法则。  
:::

## 小结

- `wait()`让线程等待并释放锁，`notify()`和`notifyAll()`负责唤醒等待线程。  
- 线程必须持有对象锁才能调用`wait/notify`，否则抛异常。  
- 条件检查用`while`循环防止虚假唤醒。  
- `notifyAll()`更适合多个线程等待的场景，`notify()`适合单线程等待。  
- 通过生产者消费者模式，可以直观地理解`wait/notify`在线程通信中的作用。

---

## 延伸思考

你觉得，为什么现代Java并发库大多推荐使用`java.util.concurrent`包而非手动管理`wait/notify`？能否想象`wait/notify`有哪些场景会导致隐秘的死锁或线程饥饿？如果你设计一套线程通信机制，清单中还希望有哪些特性？

---

我希望这章内容帮你建立了对`wait/notify`的清晰认知。遇到多线程交互时，想象厨师和服务员的故事，思考等待与通知的“排队规则”，能大大降低理解难度。实践中碰到问题，随时来找我，一起排查！
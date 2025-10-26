---
title: Queue 与 Deque
description: 深入理解 Java 中的队列接口、PriorityQueue、ArrayDeque 和 LinkedList 作为队列的用法
order: 23
keywords: [Java, Queue, Deque, PriorityQueue, ArrayDeque, LinkedList]
---

# Queue 与 Deque

## 前置知识
> 在阅读本章前，你需要了解 Java 的集合框架基础，尤其是 List 和 Set 的基本用法，以及对接口和实现类的基本理解。

## 为什么需要队列和双端队列？

想象一下，你在超市结账，排在前面的人先被服务，这就是“先进先出”（FIFO）的经典例子。队列（Queue）就像这条排队队伍，每次从一端进队，从另一端出队。队列在程序中无处不在，比如任务调度、消息传递等。

但生活中有时候你可以从队列两端进出，比如你是双面等待的健身课，既可以从前面加入，也可以从后面退场，这样的场景由双端队列（Deque）来表示。Deque 不仅支持 FIFO 也可以实现 FILO（后进先出），非常灵活。

理解并掌握 Java 中队列接口及其实现，能帮你设计出既高效又符合业务需求的数据结构。那我们就从最基础的 Queue 接口开始，带着生活中的例子，逐步揭开它的神秘面纱。

---

## 1. Queue 接口基础

Java 中，`Queue` 是一个接口，继承自 `Collection`，抽象了“排队”的行为。主要支持两类操作：

- **入队 (offer / add)**：将元素加到队尾
- **出队 (poll / remove)**：从队头取出元素

和 List 比较，Queue 只允许你一端进队，一端出队，体现了先进先出(FIFO)的思想。

> 小贴士：`offer` 和 `poll` 会在失败时返回特殊值（false 或 null），而 `add` 和 `remove` 会抛异常，实际工作中建议用 `offer` 和 `poll` 更安全。

### 代码示例 1 — 基础 Queue 使用

```java
import java.util.LinkedList;
import java.util.Queue;

public class SimpleQueueExample {
    public static void main(String[] args) {
        Queue<String> supermarketQueue = new LinkedList<>();

        // 顾客依次排入队尾
        supermarketQueue.offer("Alice");
        supermarketQueue.offer("Bob");
        supermarketQueue.offer("Charlie");

        System.out.println("排队中的人: " + supermarketQueue);

        // 服务下一个顾客（队头）
        String servedCustomer = supermarketQueue.poll(); // Alice被服务
        System.out.println("正在服务: " + servedCustomer);

        System.out.println("剩余排队: " + supermarketQueue);
    }
}
```

**这段代码做了什么？**

1. 使用 `LinkedList` 实现了 `Queue` 接口。
2. `offer` 方法将顾客依次加入队尾。
3. `poll` 方法从队头取出被服务的顾客。
4. 打印当前排队情况，展示先进先出的特点。

---

## 2. PriorityQueue — 带优先级的队列

现实生活中有“优先级”规则，比如医院急诊，紧急患者插队。Java 提供了 `PriorityQueue`，它不是简单的先进先出，而是根据优先级（自然排序或者自定义比较器）决定谁先出队。

`PriorityQueue` 底层是二叉堆结构，能够快速找到“最重要”的元素。

### 代码示例 2 — PriorityQueue 基础用法

```java
import java.util.PriorityQueue;

public class PriorityQueueExample {
    public static void main(String[] args) {
        // 优先级高的数字优先出队（最小值优先）
        PriorityQueue<Integer> priorityQueue = new PriorityQueue<>();

        priorityQueue.add(30);
        priorityQueue.add(10);
        priorityQueue.add(20);

        System.out.println("队列内容: " + priorityQueue);

        // 出队顺序并非插入顺序，而是按优先级（数字大小）
        while (!priorityQueue.isEmpty()) {
            System.out.println("出队: " + priorityQueue.poll());
        }
    }
}
```

**这段代码做了什么？**

1. 创建一个存放整数的 `PriorityQueue`，默认排序为最小值优先。
2. 插入三个数字，打印队列时元素顺序并非插入顺序。
3. 通过循环，按数字从小到大取出队列元素，体现了优先出队。

:::tip 💡 实战建议
使用 `PriorityQueue` 时，确保元素实现了 `Comparable` 接口，或者在构造时提供了合适的 `Comparator`，否则会出现运行时异常。
:::

---

## 3. Deque 接口 — 双端队列的强大魅力

`Deque`（Double Ended Queue）接口继承自 `Queue`，允许我们从两端插入和删除元素。它像是一个可以同时双向排队的队伍，根据需要灵活从两端操作。

最常见的实现包括 `ArrayDeque` 和 `LinkedList`。其中 `ArrayDeque` 通常比 `LinkedList` 更快，因为它基于数组，内存利用和缓存局部性更好。

生活类比一下：想象我们有一个双向跑道，既可以从前门进入，也可以从后门出去，灵活多了。

### 代码示例 3 — ArrayDeque 的双端操作

```java
import java.util.ArrayDeque;
import java.util.Deque;

public class DequeExample {
    public static void main(String[] args) {
        Deque<String> taskDeque = new ArrayDeque<>();

        // 从队尾添加任务
        taskDeque.offerLast("Task1");
        taskDeque.offerLast("Task2");

        // 偶尔需要插入紧急任务到队头
        taskDeque.offerFirst("UrgentTask");

        System.out.println("任务队列: " + taskDeque);

        // 先处理紧急任务（队头）
        String firstTask = taskDeque.pollFirst();  // 取出队头任务
        System.out.println("处理任务: " + firstTask);

        // 处理普通任务（队尾）
        String lastTask = taskDeque.pollLast();
        System.out.println("处理任务: " + lastTask);

        System.out.println("剩余任务: " + taskDeque);
    }
}
```

**这段代码做了什么？**

1. 创建了一个 `ArrayDeque`，用作双端任务队列。
2. 使用 `offerLast` 从队尾添加常规任务，`offerFirst` 从队头插入紧急任务。
3. 处理任务时可以灵活选择从队头或队尾取出。
4. 展示了 `Deque` 提供的灵活双端操作。

:::warning ⚠️ 常见陷阱
不要用 `ArrayDeque` 作为线程共享容器，它不是线程安全的。如果需要并发访问，考虑 `ConcurrentLinkedDeque` 或其他并发容器。
:::

---

## 对比总结：LinkedList、ArrayDeque 和 PriorityQueue

| 实现类       | 特点                                             | 适合场景                                       |
|--------------|--------------------------------------------------|------------------------------------------------|
| LinkedList   | 作为 Queue 或 Deque 实现；实现简单，支持双端操作  | 任务流、链式操作，对内存敏感度较低             |
| ArrayDeque   | 双端队列高效实现，基于循环数组，速度快            | 需要双端操作，追求性能，非线程安全               |
| PriorityQueue| 优先级队列，元素基于优先级排序出队                | 需要按优先级调度的场景，如任务调度、事件处理     |

---

## 实战建议

在实际项目中，我发现：

- 如果只需要简单的 FIFO 队列，`LinkedList` 是快速启动的好选择，但性能不总是最优。
- 追求效率且不需要并发操作时，`ArrayDeque` 是更轻量且快速的替代品。
- 需要处理优先级业务时，`PriorityQueue` 提供天然支持，无需额外排序操作。
- 注意选择 `offer`/`poll` 对应的异常和返回值处理，避免因为使用 `add`/`remove` 导致程序因边界条件崩溃。
- 线程环境下，添加同步机制或选择并发队列实现。

---

## 延伸思考

当你需要设计一个高性能的消息队列时，会选择哪种队列实现？有没有可能结合多种数据结构，满足复杂的业务多元需求？探索`BlockingQueue`和`ConcurrentLinkedQueue`如何应对多线程挑战，能极大加深你对队列体系的理解。

---

## 小结

- `Queue` 接口模型了先进先出的排队行为。
- `PriorityQueue` 支持基于优先级的出队顺序，适合调度场景。
- `Deque` 允许双端操作，为任务插队和灵活处理提供便利。
- `ArrayDeque` 性能优于 `LinkedList`，优选高速双端队列。
- 理解各种队列实现的特点，有助于根据业务需求选型，避免性能坑。

---

通过亲手敲代码，理解队列的行为和内部机制，才能灵活运用这些数据结构，写出既简洁又高效的 Java 程序。下次遇到排队、调度这类场景，想想生活中的那些顺序和优先级，再结合队列的实现，你肯定能设计得游刃有余。
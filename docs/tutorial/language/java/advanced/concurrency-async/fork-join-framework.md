---
title: Fork/Join框架
description: 探索Java Fork/Join框架，掌握分治并行算法，实现高效的多线程任务拆分与合并。
order: 69
keywords: [ForkJoinPool, RecursiveTask, 并行计算, 分治算法, Java 并发]
---

# Fork/Join框架

## 前置知识
> 在阅读本章前,你需要了解: Java基础多线程、Runnable/Callable接口、线程池的基本概念。

## 为什么需要 Fork/Join框架？

你有没有遇到过这样的场景：一个非常大的计算任务，单线程执行慢得让人抓狂，但直接开很多线程又导致线程管理混乱，效率反而不升反降？这时候，就需要一种既能拆分计算又能高效合并结果的并行计算框架，正好，Java 7 引入的 Fork/Join 框架应运而生。

简单来说，Fork/Join 是为“分治算法”量身打造的。它依赖一个专门的线程池（`ForkJoinPool`），把大任务递归拆成小任务（fork），各个击破，最后把结果合并（join）。这样既避免了线程爆炸，也最大化利用多核优势。

让我们一起从最简单的例子开始亲自动手，感受Fork/Join的魅力。

## Fork/Join框架基础介绍

### 什么是Fork/Join？

通俗点说，Fork/Join 就像一个聪明的厨房帮手：当你需要做一大堆菜，他们不会一锅炖完，而是把任务拆分成炒菜、切菜、烤肉等小步骤（fork），各自完成后再组合成一顿丰盛的饭菜（join）。

Java通过下面两个核心抽象来实现这一模式：

- **ForkJoinPool**：专门的线程池，负责管理和调度任务，利用“工作窃取”算法优化线程使用。
- **RecursiveTask&lt;V&gt;** 与 **RecursiveAction**：分别代表有返回值和无返回值的递归任务，让你以分治法编写并行逻辑。

### 为什么需要它？

传统线程池适合独立、彼此不相关的任务，但对于可以递归拆分的复杂任务，线程池不擅长动态创建和管理大量的小任务。而Fork/Join框架能够智能拆分子任务，并且通过工作窃取机制保证线程不闲置。

### 基本用法

- 继承`RecursiveTask<V>`或者`RecursiveAction`，重写`compute()`方法。
- 在`compute()`中判断任务规模，超过阈值则拆分成子任务fork，否则直接计算。
- 调用`fork()`异步执行子任务，`join()`等待子任务完成并获取结果。
- 使用`ForkJoinPool`提交任务执行。

接下来用代码示例让你一步步理清这套思路。

---

## 基础示例：计算数组元素的累加和

假设你有一个很长的数组，要并行计算它的元素和。普通循环显然没充分利用多核，线程池写法也不够优雅。

```java
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.ForkJoinPool;

public class ArraySumTask extends RecursiveTask<Long> {
    private final long[] array;
    private final int start;
    private final int end;
    private static final int THRESHOLD = 10_000; // 阈值，任务拆分的界限

    public ArraySumTask(long[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    @Override
    protected Long compute() {
        int length = end - start;
        if (length <= THRESHOLD) {
            // 阈值以内，直接计算
            long sum = 0;
            for (int i = start; i < end; i++) {
                sum += array[i];
            }
            return sum;
        } else {
            // 拆分任务，二分法
            int mid = start + length / 2;
            ArraySumTask leftTask = new ArraySumTask(array, start, mid);
            ArraySumTask rightTask = new ArraySumTask(array, mid, end);
            leftTask.fork(); // 左侧子任务异步执行
            long rightResult = rightTask.compute(); // 右侧子任务直接计算（利用当前线程）
            long leftResult = leftTask.join();      // 等待左侧子任务完成
            
            return leftResult + rightResult; // 合并结果
        }
    }

    public static void main(String[] args) {
        // 创建大数组
        long[] numbers = new long[50_000_000];
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = 1; // 简单初始化，方便验证总和
        }

        ForkJoinPool forkJoinPool = new ForkJoinPool();

        // 提交任务
        long startTime = System.currentTimeMillis();
        long total = forkJoinPool.invoke(new ArraySumTask(numbers, 0, numbers.length));
        long endTime = System.currentTimeMillis();

        System.out.println("总和是: " + total);
        System.out.println("计算耗时(ms): " + (endTime - startTime));
    }
}
```

**这段代码做了什么？**

1. 定义了一个`ArraySumTask`，负责计算数组某一区间的元素和。
2. 在`compute()`方法中判断任务规模：
   - 如果小于等于阈值，直接遍历计算返回总和。
   - 否则，拆分为两个子任务分别负责左右区间。
3. 左子任务调用`fork()`提交异步执行，右子任务在当前线程执行，再用`join()`合并结果。
4. 主函数创建了一个`ForkJoinPool`，提交整个数组的求和任务。
5. 打印结果和耗时，验证并行效果。

这里用了很典型的**分治法模式**，每任务递归拆半直到足够小，分布到线程池的线程中并行执行。

---

## 进阶示例：无返回值的RecursiveAction演示

接下来，我们看看`RecursiveAction`的用法。当任务不需要返回结果，只执行操作时，这个抽象很合适。假设我们要对数组进行“元素加倍”的处理：

```java
import java.util.concurrent.RecursiveAction;
import java.util.concurrent.ForkJoinPool;

public class ArrayDoubleTask extends RecursiveAction {
    private final int[] array;
    private final int start, end;
    private static final int THRESHOLD = 10_000;

    public ArrayDoubleTask(int[] array, int start, int end) {
        this.array = array;
        this.start = start;
        this.end = end;
    }

    @Override
    protected void compute() {
        int length = end - start;
        if (length <= THRESHOLD) {
            for (int i = start; i < end; i++) {
                array[i] *= 2; // 元素加倍
            }
        } else {
            int mid = start + length / 2;
            ArrayDoubleTask leftTask = new ArrayDoubleTask(array, start, mid);
            ArrayDoubleTask rightTask = new ArrayDoubleTask(array, mid, end);
            invokeAll(leftTask, rightTask); // 同时fork两个子任务并等待它们完成
        }
    }

    public static void main(String[] args) {
        int[] data = new int[50_000_000];
        for (int i = 0; i < data.length; i++) {
            data[i] = 1;
        }

        ForkJoinPool pool = new ForkJoinPool();
        pool.invoke(new ArrayDoubleTask(data, 0, data.length));

        System.out.println("数组首元素: " + data[0]);
        System.out.println("数组末元素: " + data[data.length - 1]);
    }
}
```

**这段代码做了什么？**

- 继承`RecursiveAction`实现无返回值任务。
- 在任务规模足够小时直接修改数组元素。
- 否则拆分成两个子任务并用`invokeAll`简化调用。
- 结果在主线程打印，确认元素确实被加倍。

这个例子让你看到Fork/Join并非只能计算返回值，也能有效执行“改变状态”的操作。

---

## 复杂示例：分治求解斐波那契数（带缓存优化）

斐波那契数列是递归计算的经典例子，但普通递归非常低效。Fork/Join的分治思想可以加速，但纯递归大量重复计算又浪费资源。这里我们加入一个缓存优化示例：

```java
import java.util.concurrent.RecursiveTask;
import java.util.concurrent.ForkJoinPool;
import java.util.concurrent.ConcurrentHashMap;

public class FibonacciTask extends RecursiveTask<Long> {
    private final int n;
    private static final ConcurrentHashMap<Integer, Long> cache = new ConcurrentHashMap<>();

    public FibonacciTask(int n) {
        this.n = n;
    }

    @Override
    protected Long compute() {
        if (n <= 1) {
            return (long) n;
        }
        if (cache.containsKey(n)) {
            return cache.get(n);
        }

        FibonacciTask f1 = new FibonacciTask(n - 1);
        FibonacciTask f2 = new FibonacciTask(n - 2);

        f1.fork();              // 异步计算F(n-1)
        long f2Result = f2.compute(); // 直接计算F(n-2)
        long f1Result = f1.join();    // 等待F(n-1)结果

        long result = f1Result + f2Result;
        cache.put(n, result); // 缓存结果

        return result;
    }

    public static void main(String[] args) {
        int fibIndex = 40; // 斐波那契数索引

        ForkJoinPool pool = new ForkJoinPool();

        long startTime = System.currentTimeMillis();
        long fibValue = pool.invoke(new FibonacciTask(fibIndex));
        long endTime = System.currentTimeMillis();

        System.out.println("Fibonacci(" + fibIndex + ") = " + fibValue);
        System.out.println("计算耗时(ms): " + (endTime - startTime));
    }
}
```

**这段代码做了什么？**

1. 继承`RecursiveTask<Long>`实现带返回值的斐波那契计算。
2. 当`n`较小时直接返回结果，避免无限拆分。
3. 利用`ConcurrentHashMap`做计算缓存，避免重复递归。
4. 使用`fork()`和`join()`并行计算`F(n-1)`，`F(n-2)`。
5. 主函数打印指定位置的斐波那契数和耗时。

这是Fork/Join与经典动态规划思想结合的示范，体现了框架的灵活性。

---

## 对比总结

| 方案                   | 优点                                    | 缺点及适用场景                         |
|------------------------|-----------------------------------------|--------------------------------------|
| 单线程循环              | 简单，易实现                            | 不利用多核，性能瓶颈                 |
| 普通线程池+任务拆分     | 适合独立任务，线程复用                  | 不擅长递归拆分，任务管理复杂         |
| Fork/Join框架           | 专为递归分治设计，工作窃取提升利用率    | 不适合任务间紧密依赖，拆分门槛需控制 |
| Stream并行操作          | 简洁，API友好                          | 显示控制能力有限，复杂任务不易调优   |

通过对比，Fork/Join最适合那种“可拆又可合”的大计算任务，比如排序、矩阵计算、图形处理等。

---

:::tip 💡 实战建议
1. **合理设置阈值**：阈值太小导致任务过多开销大，太大又使得并行粒度粗影响性能，建议根据机器核数和任务特点调试。
2. **使用工作窃取池**：默认`ForkJoinPool.commonPool()`即可满足大多数需求，自定义池需谨慎。
3. **避免共享可变状态**：任务间独立计算，减少同步带来的开销和复杂度。
4. **注意异常处理**：ForkJoin框架通过任务传播异常，调用时要注意捕获，避免线程无声失败。
5. **适时切换到Sequential执行**：在任务非常小、递归深度大时，直接顺序执行可以避免额外的线程调度开销。
:::

:::warning ⚠️ 常见陷阱
- **忘记调用`join()`等待子任务结果**，导致主任务提前结束，返回错误。
- **滥用`fork()`导致任务过细，导致线程频繁切换反而变慢。**
- **递归不恰当导致死循环或栈溢出**，必须设计好基线条件。
- **使用共享变量未同步，出现线程安全问题**。
- **过度并行导致CPU过载，反而效能下降。**
:::

:::details 🔍 深入理解

### 工作窃取算法简介

ForkJoinPool采用“工作窃取”模式：每个线程维护自己的任务队列（双端队列），优先执行自己队列中的任务。当忙的线程处理完任务，且自己的队列空闲时，会从其他“忙”线程尾部窃取任务来执行，保证CPU利用率最大化，减少空闲状态。

### 递归与并行设计要点

- 设计任务拆分的基线条件非常关键，既要避免拆分过细，也要确保拆分后的任务能带来并行提升。
- 子任务的并行执行采用fork+join或invokeAll，合理使用fork和compute可以降低线程切换开销。

:::

## 小结

- Fork/Join框架利用分治算法，将大任务拆分成小任务并行处理。
- 核心类是`ForkJoinPool`、`RecursiveTask`（有返回值）、`RecursiveAction`（无返回值）。
- 合理设置阈值和拆分逻辑是性能关键。
- 工作窃取机制让多核资源得到高效利用。
- 实践时关注任务拆分粒度、异常处理和线程安全。

---

希望通过本章，不仅让你知道“Fork/Join是什么”，更能带着实战代码感受它的用法，理解实现原理。多写几次练习，慢慢你会发现，处理复杂多核并行任务不再让你头大。加油！

如果你愿意，可以尝试将自己正在做的项目中的大计算任务用Fork/Join框架改写一遍，看看效果如何？下次我们再聊聊Java并发中的CompletableFuture，揭开更加丰富的编程新世界。
---
title: 性能测试   
description: 深入理解 Java 性能测试方法，包括 JMH 基准测试、压力测试及性能瓶颈分析，帮助你编写高效稳定的代码。  
order: 86  
keywords: [Java, 性能测试, JMH, 压力测试, 性能分析]  
---

# 性能测试

## 前置知识
> 在阅读本章前,你需要了解: Java 基础语法、面向对象编程思想、简单的多线程知识。

## 为什么需要性能测试？

你有没有遇到过这样的尴尬：应用看起来没什么问题，但在用户暴增或者数据骤增的时候，突然卡住了，甚至崩溃了？多线程环境下偶发的延迟、内存溢出、CPU 飙升……这些都是性能问题在作怪。

性能测试就是帮我们“提前发现隐患”的利器。它不止是简单跑个时间，看下速度快不快，而是可以科学地定位瓶颈，量化性能影响，帮我们做出更合理的优化决策。

本章，我们将循序渐进探索：
- 用 JMH 进行微基准测试，精准测量代码片段性能
- 设置压力测试，模拟极端场景验证系统承载能力
- 结合性能分析，找出“卡脖子”的真凶

让我们带着“真刀真枪”的实战思维出发。

## JMH 基准测试

### 什么是 JMH？

简单来说，JMH（Java Microbenchmark Harness）是由 OpenJDK 团队提供的用于做微基准测试的框架。它帮我们搞定“测性能”的各种细节，比如 JVM 优化、代码预热、死代码消除等常见陷阱。

为什么不是直接用 System.currentTimeMillis()？因为 Java 虚拟机总是在背后偷偷优化代码，放大这些影响的数据会误导我们。JMH 就像是跑步测速度时的专业计时器，帮我们避开误差。

### 基础用法展示

先从一个非常简单的例子开始，我们对比两种字符串拼接的方式，看谁更快：

```java
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.Throughput) // 测量单位时间内执行次数
@OutputTimeUnit(TimeUnit.MILLISECONDS) // 输出结果的时间单位
@State(Scope.Thread) // 每个线程一个实例
public class StringConcatBenchmark {

    private String base = "Hello";

    @Benchmark
    public String concatWithPlus() {
        return base + " World";
    }

    @Benchmark
    public String concatWithStringBuilder() {
        return new StringBuilder(base).append(" World").toString();
    }
}
```

这段代码做了什么？  

1. 用了 `@Benchmark` 注解的方法就是我们想要测试性能的代码块。  
2. 两个方法分别使用 `+` 和 `StringBuilder` 拼接字符串。  
3. `@BenchmarkMode` 设置了测试模式为吞吐量（每毫秒能执行多少次）。  
4. `@State` 表示测试状态，这里每个线程有自己独立的变量。  

运行这个基准测试，你就能看到两种拼接方式的真实性能表现，避免误以为哪种更快。

### 运行说明

JMH 需要用 Maven 或 Gradle 构建，不能直接用普通 `java Main` 命令，运行时会自动执行多轮预热和多轮正式测试，确保数据精度。

你可以通过这样一条 Maven 命令运行测试：

```bash
mvn clean install
java -jar target/benchmarks.jar
```

---

## 逐步深入：复杂基准测试特性

真实项目中，我们常会遇到更复杂的需求：

- 参数化测试不同输入
- 多线程并发场景
- 结果进行多维度分析

```java
import org.openjdk.jmh.annotations.*;

import java.util.concurrent.TimeUnit;

@BenchmarkMode(Mode.AverageTime) // 测量平均耗时
@OutputTimeUnit(TimeUnit.MILLISECONDS)
@State(Scope.Thread)
public class ParameterizedBenchmark {

    @Param({"100", "1000", "10000"})
    private int size;

    private int[] numbers;

    @Setup(Level.Invocation) // 每次调用前重置
    public void setup() {
        numbers = new int[size];
        for (int i = 0; i < size; i++) {
            numbers[i] = i;
        }
    }

    @Benchmark
    public int sumLoop() {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }

    @Benchmark
    public int sumStream() {
        return java.util.Arrays.stream(numbers).sum();
    }
}
```

这段代码告诉我们：

- `@Param` 用来给测试传入不同的参数，测试规模为 100、1000、10000。
- `@Setup` 在每次测试方法调用前准备数据，确保测试环境一致。
- 测试两个求和函数：普通循环和 Stream API。
  
你会发现，随着数据量的增大，两种方案性能差异更明显，这就帮我们理解何时用哪种方法。

---

## 压力测试：如何模拟高并发场景？

基准测试帮我们看微观性能，压力测试则是宏观游戏，答案往往关系到整个系统的稳定性。

什么是压力测试？可以简单理解为“加压锻炼”。我们给系统设置极限负载，看它响应如何，能扛多久。

在 Java 领域，常用工具有 JMeter、Gatling 等，这里我们用简单的代码示范多线程压力：

```java
import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class SimpleStressTest {

    private static final int THREADS = 50; // 并发线程数
    private static final int TASKS_PER_THREAD = 1000; // 每个线程任务数

    public static void main(String[] args) throws InterruptedException {

        ExecutorService executor = Executors.newFixedThreadPool(THREADS);
        CountDownLatch latch = new CountDownLatch(THREADS);

        for (int i = 0; i < THREADS; i++) {
            executor.submit(() -> {
                for (int j = 0; j < TASKS_PER_THREAD; j++) {
                    // 模拟操作：计算平方根
                    Math.sqrt(j);
                }
                latch.countDown();
            });
        }

        long startTime = System.currentTimeMillis();
        latch.await(); // 等待所有线程完成
        long endTime = System.currentTimeMillis();

        System.out.println("总耗时(ms): " + (endTime - startTime));
        executor.shutdown();
    }
}
```

这段代码做了什么？

1. 创建固定线程池,50 个线程代表并发压力。  
2. 每个线程重复执行 1000 次简单计算。  
3. 用 CountDownLatch 保证主线程准确等待所有任务完成。  
4. 记录总耗时，反映压力下的执行表现。  

这个例子很基础，但它帮你搭建起“用代码自己做压力测试”的思路。

---

## 性能瓶颈分析

压力测试告诉我们可能“慢”，下一步就是搞明白“为什么慢”。这就需要性能分析工具。

### 常用工具：

- VisualVM：JDK 自带，支持 CPU 和内存采样  
- JProfiler、YourKit：商业方案，功能强大，UI 友好  
- async-profiler：开源，低开销，适合生产环境  

### 分析步骤示范

假设我们用 VisualVM 对运行中的应用做采样，重点看这几个点：

- CPU 占用高的代码路径（热点方法）  
- 内存占用、对象分配情况  
- 是否有线程阻塞或锁竞争  

实际项目中，我习惯先用采样模式快速抓取 “热点”，然后定位代码逻辑，挖掘潜在优化点，比如：

- 缓存重复运算结果  
- 减少不必要的对象创建  
- 优化锁粒度

---

:::warning ⚠️ 常见陷阱

- **基准测试数据不充分**：没准备好预热，导致数据失真。JMH 会自动预热，但自己写基准代码时要注意。  
- **忽略多线程影响**：把串行性能当作并发性能，现实往往更复杂。  
- **压力测试环境差异大**：在开发机器跑压力测试不能完全代表生产环境，需要尽量模拟真实条件。  
- **性能分析“盲目”优化**：没有数据支撑先优化，有时反而让问题更复杂。  
:::
---

:::tip 💡 实战建议

- 先用 JMH 精准测量关键业务代码的性能瓶颈，做到心中有数。  
- 压力测试不仅是“跑满CPU”，更是检测系统的稳定性和故障恢复能力，建议设计合理的负载渐增方案。  
- 合理结合性能分析工具，重点关注CPU热点和内存泄漏，避免盲目优化。  
- 将性能测试集成到持续集成流水线，避免新代码带来性能回退。  
- 对代码重构时，配合基准测试评估改动的性能影响。
:::
---

## 🔍 深入理解：JMH 的预热和死代码消除是如何保障测试准确性的？

JMH 的预热阶段让 JVM 执行多次你的测试代码，触发即时编译器（JIT）做优化，让热点代码达到优化后的状态；否则第一次测得的时间会很长，因为代码还没优化好。

死代码消除是 JVM 对结果不影响程序输出的代码做的优化，JMH 通过设计返回结果和黑洞机制避免测试代码被优化掉，保证你测的是实际执行的代码。

理解这一切，有助于你写出有效并准确反映性能的基准测试。

---

## 小结

- 性能测试是确保应用稳定高效的必要环节，分为微基准测试、压力测试和性能分析。  
- JMH 是测微性能的利器，能帮你避免 JVM 优化带来的测量误差。  
- 压力测试模拟系统极限环境，帮助发现稳定性缺陷。  
- 性能分析定位瓶颈，指导有效优化方案。  
- 切记实战中要结合业务场景，合理设计测试，避免“纸上谈兵”。

---

祝你写出又快又稳的 Java 程序，我们下章见！
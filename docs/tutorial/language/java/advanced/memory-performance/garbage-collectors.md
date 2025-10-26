---
title: 垃圾收集器
description: 了解Java中Serial、Parallel、CMS、G1、ZGC收集器的特点及应用
order: 51
keywords: [Java, 垃圾收集器, Serial GC, Parallel GC, CMS, G1, ZGC]
---

# 垃圾收集器

## 前置知识
> 在阅读本章前,你需要了解: Java内存模型中的堆内存结构（年轻代和老年代），以及基本的对象生命周期概念。

## 为什么需要垃圾收集器？

你是否曾遇到过内存泄漏或者应用响应缓慢的情况？在Java世界里，内存管理是大家绕不开的话题。每天我们的程序都在不停地创建和销毁对象，废弃的对象如果不及时清理，堆空间就会被占满，导致程序崩溃或者卡顿。

垃圾收集器（Garbage Collector，GC）就是帮我们自动管理堆内存的英雄。它负责识别和回收不再使用的对象内存，让我们可以专注于业务逻辑而不必手动释放内存。随着Java版本的演进，垃圾收集器的实现也越来越丰富和复杂，适用于不同场景的收集器层出不穷。

让我们一起逐个聊聊几种常见的垃圾收集器：Serial、Parallel、CMS、G1、和ZGC，帮你挑选适合自己项目的“垃圾清道夫”。

---

## 1. Serial 垃圾收集器

### 简单定义  
Serial GC 是最原始、最简单的垃圾收集器，使用单线程进行垃圾回收操作。

### 为什么需要它？  
Serial GC 使用单线程，简单粗暴但效率相对较低。它适合在单核机器或对延迟不敏感的小规模应用中使用。如果你的程序并发量不大，或者是命令行工具，Serial GC 是一个不错的选择。

### 基础用法  
启动 Serial GC，只需要加上JVM参数：

```shell
-XX:+UseSerialGC
```

### 代码示例1：配置Serial GC启动的简单Java程序

```java
public class SerialGCExample {
    public static void main(String[] args) {
        System.out.println("启动使用Serial GC运行的示例程序");
        // 创建一些对象，模拟内存分配
        for (int i = 0; i < 10000; i++) {
            byte[] data = new byte[1024]; // 1KB对象
        }
        System.out.println("对象创建完成，程序结束");
    }
}
```

**这段代码做了什么：**  
1. 创建大量小对象，触发GC  
2. 如果用 Serial GC 运行，回收过程会用单线程顺序执行  

---

## 2. Parallel 垃圾收集器

### 简单定义  
Parallel GC，也叫吞吐量优先收集器，使用多线程进行垃圾回收，以减少GC停顿时间。

### 为什么需要它？  
面对多核处理器时，Serial GC 太慢了。ParallelGC利用多线程并行回收年轻代对象，适合对响应时间有一定要求但更关注整体吞吐量的服务。

### 基础用法  
启动 Parallel GC：

```shell
-XX:+UseParallelGC
```

### 代码示例2：启动Parallel GC 收集器的Java示例

```java
public class ParallelGCExample {
    public static void main(String[] args) {
        System.out.println("使用Parallel GC收集器的示例");
        for (int i = 0; i < 1000000; i++) {
            byte[] buffer = new byte[512]; // 创建大量短生命周期的对象
        }
        System.out.println("对象分配完成，程序完成");
    }
}
```

**这段代码做了什么：**  
1. 快速分配许多小对象，激发年轻代频繁GC  
2. 在启动Parallel GC的JVM中，GC线程会并行工作，提高效率  

---

## 3. CMS（Concurrent Mark Sweep）垃圾收集器

### 简单定义  
CMS是一款低停顿的并发GC，主要特点是在垃圾回收时大部分工作与用户线程并发执行，减少停顿。

### 为什么需要它？  
当系统对响应延迟很敏感时，像在线交易系统，CMS能在堆空间满之前就开始回收，避免长时间“卡顿”。不过它有内存碎片问题，需要谨慎使用。

### 基础用法  
启动CMS GC：

```shell
-XX:+UseConcMarkSweepGC
```

### 代码示例3：CMS GC关联的内存管理示例

```java
import java.util.ArrayList;

public class CMSGCExample {
    public static void main(String[] args) throws InterruptedException {
        System.out.println("使用CMS GC的示例程序开始");
        ArrayList<byte[]> cache = new ArrayList<>();
        for (int i = 0; i < 100; i++) {
            cache.add(new byte[1024 * 1024]); // 1MB对象，模拟大对象长期存活
            Thread.sleep(100); // 模拟业务运行，给GC时间工作
        }
        System.out.println("内存分配完成，等待GC任务");
    }
}
```

**这段代码做了什么：**  
1. 持续分配大对象，保持堆老年代活跃  
2. CMS收集器会并发标记和清理，减少停顿  

---

## 4. G1（Garbage First）垃圾收集器

### 简单定义  
G1是面向大型堆设计的低停顿收集器，将堆划分成多个小区域，优先回收垃圾最多的区域。

### 为什么需要它？  
它结合了CMS和Parallel的优点，能预测停顿时间，适合响应要求高、堆大的现代服务。JDK 9默认就是G1。

### 基础用法  
启动G1 GC：

```shell
-XX:+UseG1GC
```

### G1 收集流程简介

- 堆被划分为独立块（Region）  
- 并发标记存活对象  
- 优先回收垃圾最多的Region  
- 根据用户期望停顿时间动态调整回收策略

---

## 5. ZGC（Z Garbage Collector）

### 简单定义  
ZGC是一款实验性的低延迟垃圾收集器，采用多线程和分代无关策略，实现几乎“毫秒级”停顿。

### 为什么需要它？  
面对超大堆（几十GB甚至TB），传统GC停顿高效难控制，ZGC以其惊人的“停顿时间可控性”赢得关注，但目前主要在较新版本的JDK中支持。

### 基础用法  
启动ZGC：

```shell
-XX:+UseZGC
```

---

## 对比总结

| GC 类型       | 停顿   | 并行/并发                   | 堆大小适用      | 适用场景                               |
|------------|------|-------------------------|------------|------------------------------------|
| Serial     | 较长   | 单线程                     | 小堆         | 命令行程序、小规模应用                     |
| Parallel   | 中等   | 多线程并行                   | 中小堆        | CPU密集型应用，吞吐量优先                      |
| CMS        | 低停顿  | 并发标记，部分STW               | 中堆         | 响应敏感型应用，如交易系统                     |
| G1         | 可控停顿 | 并发与并行结合                | 大中堆        | 大型服务，JDK默认选项                         |
| ZGC        | 极低停顿 | 多线程，分代无关               | 超大堆        | 极低时延需求，大数据、内存超大应用               |

---

:::tip 💡 实战建议

- 选择GC时，先明确应用的“停顿容忍度”和“堆大小”需求。  
- 小且简单的程序，Serial GC足够。服务端应用建议首选G1。  
- CMS适用于对停顿有要求的老项目，但需注意碎片和CPU消耗。  
- ZGC适合最新JDK和大堆应用，需深入测试稳定性。  
- 生产环境务必深入理解GC日志和监控工具，结合业务特征调优。

:::

:::warning ⚠️ 常见陷阱

- 不同GC的内存回收方式和参数差异巨大，盲目切换可能导致性能骤降。  
- CMS容易产生“浮动垃圾”导致Full GC，需配合参数细调。  
- G1在堆非常小的情况下可能表现不佳，反而增加开销。  
- ZGC目前对某些平台支持有限，在生产环境切换需保证兼容。  

:::

---

## 延伸思考

- 你遇到过因为GC导致的应用卡顿问题吗？当时是如何定位并解决的？  
- 如果你的应用同时对吞吐量和延迟都有较高要求，你认为哪个GC更适合？为什么？  
- 未来可能出现哪些垃圾收集技术，能够兼顾极低延迟和超大堆的需求？  

---

## 小结

- Serial GC适合简单环境，单线程执行，停顿较长。  
- Parallel GC利用多线程提高GC效率，吞吐量优先。  
- CMS通过并发标记减少停顿，适合响应敏感应用，但有碎片问题。  
- G1通过堆分区和优先回收减少停顿，适合大中堆应用。  
- ZGC面向超大堆，极低停顿，适合未来高性能需求。

---

非常感谢你跟我一起聊完这些GC的魔法！如果你想要更深入的调优技巧或者配合代码分析GC日志，随时告诉我，我们可以进一步拆解。下一次，我们可以动手看看如何用工具实时监控这些垃圾收集器的表现。你怎么看？
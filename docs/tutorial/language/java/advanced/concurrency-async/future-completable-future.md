---
title: Future与CompletableFuture
description: 深入理解Java中的异步编程模型，掌握Future接口和CompletableFuture的基本用法及链式调用技巧
order: 68
keywords: [Java, Future, CompletableFuture, 异步编程, Callable]
---

# Future与CompletableFuture

## 前置知识
> 在阅读本章前，你需要了解基本的Java线程和并发知识，例如Thread，Runnable接口，以及基础的同步概念。

## 为什么需要 Future 和 CompletableFuture？

在实际开发中，我们经常有一些任务需要执行，但它们可能比较耗时，比如远程服务调用、文件I/O或复杂计算。一直等着任务完成再做后续操作，会让程序卡住——用户就像站在红绿灯前一直等绿灯一样，效率非常低下。

这时，我们希望让程序**“继续干别的事”**，异步地执行这些任务，等它们完成后再获取结果甚至继续处理。 这就是 `Future` 和更强大的 `CompletableFuture` 的作用。

---

## 1. 认识 Future：异步任务的“占位符”

`Future`接口就像你去餐厅点了份饭，得到一个“叫号牌”。你可以拿着它去做别的事，饭做好了再来取。`Future`代表一个异步计算的结果，是一个“任务占位符”。

### 1.1 为什么需要它？

Java早期的线程库只支持启动线程，线程结束没法直接返回结果。`Future`模式解决了这个问题，让你能通过它去**获取异步任务的结果**。

### 1.2 简单用法

用`ExecutorService`提交一个`Callable`任务，返回`Future`，你可以调用`get()`方法获取结果（该方法会阻塞直到结果准备好）。

```java
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class FutureExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<String> task = () -> {
            Thread.sleep(2000); // 模拟耗时操作
            return "执行结果";
        };

        Future<String> futureResult = executor.submit(task);

        System.out.println("任务已提交，等待结果...");
        try {
            String result = futureResult.get(); // 阻塞等待结果
            System.out.println("任务完成，结果是：" + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        executor.shutdown();
    }
}
```

**这段代码做了什么？**

1. 创建单线程执行器（线程池）
2. 提交了一个模拟耗时的`Callable`任务，返回`Future`
3. 主线程继续执行，调用`futureResult.get()`等待结果
4. 任务完成后打印结果
5. 关闭执行器释放资源

### 1.3 小结

- `Future`允许你异步启动任务
- 通过`get()`阻塞等待任务完成
- 不能直接串联多个Future，处理流程不够灵活

---

## 2. CompletableFuture：更强大的异步处理王者

你可能发现，单纯的`Future`有点单调，只能调用`get()`，没法组成复杂的异步流水线。Java 8引入的`CompletableFuture`像给异步任务插上了智能的大脑——它不仅能完成`Future`的功能，还支持**链式调用、组合多任务和统一异常处理**。

### 2.1 为什么它更酷？

`CompletableFuture`内置了丰富的异步方法，例如：

- `thenApply`：任务完成后转换结果
- `thenCompose`：串行组合异步任务
- `thenCombine`：合并两个独立异步任务结果
- `exceptionally`：异常处理

让异步逻辑像流水线一样清晰可读，避免回调地狱（callback hell），写起代码像 “讲故事”。

### 2.2 基础示例：从0开始用CompletableFuture

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureSimple {
    public static void main(String[] args) {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1500); // 模拟耗时操作
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello CompletableFuture";
        });

        System.out.println("任务启动，要等结果...");

        try {
            String result = future.get(); // 阻塞等待结果
            System.out.println("任务结果：" + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**

1. 使用`supplyAsync`异步调用返回一个结果
2. 主线程继续执行
3. `future.get()`获取结果，等待任务完成
4. 输出异步任务的字符串结果

这段和第一个例子类似，不过使用了`CompletableFuture`，语义更现代化。

---

## 3. 链式调用与组合：异步任务编排的艺术

任务之间往往有关联，一旦一个任务完成，还得接着做转换或合并多个异步计算结果。`CompletableFuture`能让我们像流水线一样组织这些步骤，实现**异步编排**。

### 3.1 thenApply：结果转换

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureChain {
    public static void main(String[] args) {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "Java")
            .thenApply(result -> result + " CompletableFuture")  // 结果转换
            .thenApply(String::toUpperCase);                    // 再转大写

        try {
            System.out.println(future.get()); // 输出：JAVA COMPLETABLEFUTURE
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

**这段代码做了什么？**

1. 异步产生字符串`"Java"`
2. 通过`thenApply`给字符串添加文本
3. 再通过`thenApply`转成大写
4. 最终输出经过两次转换的字符串

### 3.2 thenCompose：串联异步任务

假设有两个任务，第二个任务依赖第一个的结果。

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureThenCompose {
    public static CompletableFuture<String> fetchUserName() {
        return CompletableFuture.supplyAsync(() -> "Tom");
    }

    public static CompletableFuture<Integer> fetchUserAge(String name) {
        return CompletableFuture.supplyAsync(() -> 20 + name.length());
    }

    public static void main(String[] args) {
        CompletableFuture<Integer> userAgeFuture = fetchUserName()
            .thenCompose(name -> fetchUserAge(name));

        try {
            System.out.println("用户年龄：" + userAgeFuture.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

**写代码的故事：**

- 第一个异步任务获取用户名
- 接着基于用户名启动第二个异步任务获取年龄
- `thenCompose`让我们“接力”下去，不用写嵌套回调

### 3.3 thenCombine：合并两个并行任务

如果有两个任务彼此独立，但结果要合并处理：

```java
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureThenCombine {
    public static CompletableFuture<Integer> fetchPrice() {
        return CompletableFuture.supplyAsync(() -> 100);
    }

    public static CompletableFuture<Integer> fetchTax() {
        return CompletableFuture.supplyAsync(() -> 20);
    }

    public static void main(String[] args) {
        CompletableFuture<Integer> totalPriceFuture = fetchPrice()
            .thenCombine(fetchTax(), (price, tax) -> price + tax);

        try {
            System.out.println("总价（含税）：" + totalPriceFuture.get()); // 输出120
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

这段代码展示了如何并行发起两个请求，等两个结果都准备好后合并计算。

---

:::warning ⚠️ 常见陷阱

- **阻塞调用陷阱**  
 尽量避免直接调用`get()`，虽然它能阻塞等待结果，但失去了异步的意义，容易造成线程阻塞甚至死锁。推荐结合链式操作处理结果。

- **异常处理遗漏**  
 `CompletableFuture`异步链中，如果不处理异常，后续链条将无法正常执行。一定要用`exceptionally`或`handle`捕获异常，保证流程健壮。

- **线程池资源用尽**  
默认的`ForkJoinPool.commonPool()`适合轻量任务，大任务或者阻塞调用应使用自定义线程池，避免线程饥饿。
:::
---

:::tip 💡 实战建议

1. **尽量避免阻塞调用，利用链式方法处理结果。** 这会让异步代码更流畅，更高效。

2. **结合业务需求选择合适的线程池执行异步任务。** 默认线程池适用于大多数场景，但长时间阻塞的任务，建议自定义线程池。

3. **善用异常处理接口，提高代码鲁棒性。** 异步编程难免遇到错误，记得给每个链条都赋予“保护伞”。

4. **合理拆分任务，组织清晰的异步流水线。** 分块、挂载回调，让复杂的业务逻辑有条理。
:::
---

## 🔍 深入理解：CompletableFuture的内部原理简要介绍

`CompletableFuture`底层基于`ForkJoinPool`的线程池实现异步任务调度，使用内部的“任务依赖图”来跟踪和执行各个阶段任务，支持任务间复杂的依赖关系。当一个任务完成时，它会激活下游依赖继续执行， 以实现高效的并发调度。

这种设计使它在性能和扩展性上相较传统线程模型有较大优势，也是Java异步编程的主流方案。

---

## 小结

- `Future`是异步任务的“占位符”，可以阻塞等待结果，但限制较多
- `CompletableFuture`功能丰富，支持链式调用、任务组合和异常处理
- 合理使用链式操作让异步任务代码简洁清晰，避免阻塞
- 结合线程池资源，注意异常安全和性能优化是关键

一次异步之旅从`Future`的“叫号牌”开始，到`CompletableFuture`的“智能流水线”成就你的高并发能力。祝你异步编程顺利，写出优雅干净又高效的代码！

---

# 完整代码示例合集

```java
// Future 基础示例
import java.util.concurrent.*;

public class FutureExample {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newSingleThreadExecutor();

        Callable<String> task = () -> {
            Thread.sleep(2000); // 模拟耗时操作
            return "执行结果";
        };

        Future<String> futureResult = executor.submit(task);

        System.out.println("任务已提交，等待结果...");
        try {
            String result = futureResult.get(); // 阻塞等待结果
            System.out.println("任务完成，结果是：" + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        executor.shutdown();
    }
}
```

```java
// CompletableFuture 基础示例
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureSimple {
    public static void main(String[] args) {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(1500);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            return "Hello CompletableFuture";
        });

        System.out.println("任务启动，要等结果...");

        try {
            String result = future.get();
            System.out.println("任务结果：" + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

```java
// CompletableFuture 链式调用示例
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureChain {
    public static CompletableFuture<String> fetchUserName() {
        return CompletableFuture.supplyAsync(() -> "Tom");
    }

    public static CompletableFuture<Integer> fetchUserAge(String name) {
        return CompletableFuture.supplyAsync(() -> 20 + name.length());
    }

    public static void main(String[] args) {
        CompletableFuture<Integer> userAgeFuture = fetchUserName()
            .thenCompose(name -> fetchUserAge(name));

        try {
            System.out.println("用户年龄：" + userAgeFuture.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

```java
// CompletableFuture 任务合并示例
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class CompletableFutureThenCombine {
    public static CompletableFuture<Integer> fetchPrice() {
        return CompletableFuture.supplyAsync(() -> 100);
    }

    public static CompletableFuture<Integer> fetchTax() {
        return CompletableFuture.supplyAsync(() -> 20);
    }

    public static void main(String[] args) {
        CompletableFuture<Integer> totalPriceFuture = fetchPrice()
            .thenCombine(fetchTax(), (price, tax) -> price + tax);

        try {
            System.out.println("总价（含税）：" + totalPriceFuture.get());
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
    }
}
```

---

欢迎继续探索Java异步编程的更多可能，下章我们可以一起聊聊`CompletionStage`中的更多高级用法，比如`allOf`、`anyOf`和自定义线程池哦！
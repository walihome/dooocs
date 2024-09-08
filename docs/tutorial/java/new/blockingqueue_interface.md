---
title: Java BlockingQueue
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java BlockingQueue

Java的`Collections`框架中的`BlockingQueue`接口扩展了`Queue`接口。它允许任何操作等待，直到可以成功执行为止。

例如，如果我们要从一个空队列中删除元素，那么阻塞队列允许删除操作等待，直到队列包含一些要删除的元素为止。

* * *

## 实现BlockingQueue的类

由于`BlockingQueue`是一个接口，因此我们无法直接提供其实现。

为了使用`BlockingQueue`的功能，我们需要使用实现它的类。

  * [ArrayBlockingQueue](https://www.dooocs.com/img/java-programming/arrayblockingqueue "Java ArrayBlockingQueue Class")
  * [LinkedBlockingQueue](https://www.dooocs.com/img/java-programming/linkedblockingqueue "Java LinkedBlockingQueue Class")



![ArrayBlockingQueue和LinkedBlockingQueue在Java中实现了BlockingQueue接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-blockingqueue.png)  


* * *

## 如何使用阻塞队列？

我们必须导入`java.util.concurrent.BlockingQueue`包才能使用`BlockingQueue`。

```java
// 使用数组实现的BlockingQueue
BlockingQueue<String> animal1 = new ArraryBlockingQueue<>();

// 使用链表实现的BlockingQueue
BlockingQueue<String> animal2 = new LinkedBlockingQueue<>();
```

在这里，我们分别创建了`ArrayBlockingQueue`和`LinkedBlockingQueue`类的对象`animal1`和`animal2`。这些对象可以使用`BlockingQueue`接口的功能。

* * *

## BlockingQueue的方法

根据队列是否满或为空，阻塞队列的方法可以分为3类：

### 抛出异常的方法

  * `add()` \- 将元素插入到阻塞队列的末尾。如果队列已满，则抛出异常。
  * `element()` \- 返回阻塞队列的头部。如果队列为空，则抛出异常。
  * `remove()` \- 从阻塞队列中删除元素。如果队列为空，则抛出异常。



* * *

### 返回某个值的方法

  * `offer()` \- 将指定的元素插入到阻塞队列的末尾。如果队列已满，则返回`false`。
  * `peek()` \- 返回阻塞队列的头部。如果队列为空，则返回`null`。
  * `poll()` \- 从阻塞队列中删除元素。如果队列为空，则返回`null`。



**关于offer()和poll()的更多信息**

可以使用超时来使用`offer()`和`poll()`方法。也就是说，我们可以将时间单位作为参数传递。例如，

```java
offer(value, 100, milliseconds)
```

这里，

  * value是要插入队列的元素
  * 我们设置了100毫秒的超时时间



这意味着`offer()`方法将尝试将一个元素插入到阻塞队列中，超过100毫秒后，该方法返回`false`。

> **注意：**在`offer()`和`poll()`方法中，我们还可以使用这些时间单位：`days`、`hours`、`minutes`、`seconds`、`microseconds`和`nanoseconds`。

* * *

### 阻塞操作的方法

`BlockingQueue`还提供了一些方法来阻塞操作并等待，如果队列已满或为空。

  * `put()` \- 将元素插入到阻塞队列中。如果队列已满，则等待直到队列有空间插入元素。
  * `take()` \- 从阻塞队列中删除并返回一个元素。如果队列为空，则等待直到队列中有要删除的元素。



假设我们想向队列中插入元素。如果队列已满，则`put()`方法将等待，直到队列有空间插入元素。

类似地，如果我们想从队列中删除元素。如果队列为空，`take()`方法将等待，直到队列中包含要删除
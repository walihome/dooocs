---
title: 队列接口
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java队列接口

Java集合框架的`Queue`接口提供了队列数据结构的功能，它是`Collection`接口的扩展。

* * *

## 实现Queue的类

由于`Queue`是一个接口，所以不能直接实现它。

为了使用`Queue`的功能，我们需要使用实现它的类:

  * [ArrayDeque](https://www.dooocs.com/img/java-programming/arraydeque "Java ArrayDeque类")
  * [LinkedList](https://www.dooocs.com/img/java-programming/linkedlist "Java LinkedList类")
  * [PriorityQueue](https://www.dooocs.com/img/java-programming/priorityqueue "Java PriorityQueue类")



![ArrayDeque, LinkedList和PriorityQueue在Java中实现了Queue接口。](https://cdn.programiz.com/sites/tutorial2program/files/queue-interface.png)  


* * *

## 扩展Queue的接口

`Queue`接口还被多个子接口扩展：

  * `Deque`
  * `BlockingQueue`
  * `BlockingDeque`



![Deque, BlockingQueue和BlockingDeque扩展了Queue接口。](https://cdn.programiz.com/sites/tutorial2program/files/queue-subinterfaces.png)  


* * *

## 队列数据结构的工作原理

在队列中，元素按照先进先出（FIFO）的方式存储和访问。也就是说，元素从后面添加，从前面移除。

![队列数据结构的工作原理：先进先出。](https://cdn.programiz.com/sites/tutorial2program/files/queue-implementation.png)  


* * *

## 如何使用Queue？

在Java中，我们必须导入`java.util.Queue`包才能使用`Queue`。

```java
// LinkedList实现的Queue
Queue<String> animal1 = new LinkedList<>();

// Array实现的Queue
Queue<String> animal2 = new ArrayDeque<>();

// PriorityQueue实现的Queue
Queue<String> animal 3 = new PriorityQueue<>();
```

在这里，我们创建了`LinkedList`、`ArrayDeque`和`PriorityQueue`类的对象animal1、animal2和animal3。这些对象可以使用`Queue`接口的功能。

* * *

## Queue的方法

`Queue`接口包括了`Collection`接口的所有方法。这是因为`Collection`是`Queue`的超级接口。

`Queue`接口的一些常用方法包括：

  * **add()** - 将指定元素插入队列。如果任务成功，`add()`返回`true`；否则，抛出异常。
  * **offer()** - 将指定元素插入队列。如果任务成功，`offer()`返回`true`；否则，返回`false`。
  * **element()** - 返回队列的头部。如果队列为空，抛出异常。
  * **peek()** - 返回队列的头部。如果队列为空，返回`null`。
  * **remove()** - 返回并移除队列的头部。如果队列为空，抛出异常。
  * **poll()** - 返回并移除队列的头部。如果队列为空，返回`null`。



## Queue接口的实现

**1. 实现LinkedList类**
    
```java
import java.util.Queue;
import java.util.LinkedList;

class Main {

    public static void main(String[] args) {
        // 使用LinkedList类创建Queue
        Queue<Integer> numbers = new LinkedList<>();

        // 向队列添加元素
        numbers.offer(1);
        numbers.offer(2);
        numbers.offer(3);
        System.out.println("Queue: " + numbers);

        // 访问队列的元素
        int accessedNumber = numbers.peek();
        System.out.println("Accessed Element: " + accessedNumber);

        // 从队列中移除元素
        int removedNumber = numbers.poll();
        System.out.println("Removed Element: " + removedNumber);

        System.out.println("Updated Queue: " + numbers);
    }
}
```

**输出**

```
Queue: [1, 2, 3]
Accessed Element: 1
Removed Element: 1
Updated Queue: [2, 3]
```

要了解更多，请访问[Java LinkedList](https://www.dooocs.com/img/java-programming/linkedlist "Java LinkedList")。

**2. 实现PriorityQueue类**
    
```java
import java.util.Queue;
import java.util.PriorityQueue;

class Main {

    public static void main(String[] args) {
        // 使用PriorityQueue
---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java LinkedBlockingQueue

Java的`Collections`框架中的`LinkedBlockingQueue`类提供了使用链表实现的阻塞队列。

它实现了[Java BlockingQueue接口](https://www.dooocs.com/img/java-programming/blockingqueue "Java BlockingQueue接口")。

![ArrayBlockingQueue实现了Java中的BlockingQueue接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-blockingqueue.png)  


* * *

## 创建LinkedBlockingQueue

为了创建一个链式阻塞队列，我们必须导入`java.util.concurrent.LinkedBlockingQueue`包。

以下是在Java中创建链式阻塞队列的方式：

**1\. 不带初始容量**
    
    
    LinkedBlockingQueue<Type> animal = new LinkedBlockingQueue<>();
    

这里默认的初始容量将是231-1。

**2\. 带有初始容量**
    
    
    LinkedBlockingQueue<Type> animal = new LinkedBlockingQueue<>(int 容量);
    

在这里，

  * Type - 链式阻塞队列的类型
  * 容量 - 链式阻塞队列的大小



例如，
    
    
    // 创建大小为5的String类型LinkedBlockingQueue
    LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);
    
    // 创建大小为5的Integer类型LinkedBlockingQueue
    LinkedBlockingQueue<Integer> age = new LinkedBlockingQueue<>(5);
    

**注意：**提供链表大小并不是强制性的。

* * *

## LinkedBlockingQueue的方法

`LinkedBlockingQueue`类提供了[BlockingQueue接口](https://www.dooocs.com/img/java-programming/blockingqueue "Java BlockingQueue接口")中所有方法的实现。

这些方法用于在链式阻塞队列中插入、访问和删除元素。

此外，我们还将学习两个支持链式阻塞队列中阻塞操作的方法`put()`和`take()`。

这两个方法使链式阻塞队列与其他典型队列区分开来。

* * *

### 插入元素

  * `add()` - 将指定元素插入链式阻塞队列。如果队列已满，则抛出异常。
  * `offer()` - 将指定元素插入链式阻塞队列。如果队列已满，则返回`false`。



例如，
    
    
    import java.util.concurrent.LinkedBlockingQueue;
    
    class Main {
        public static void main(String[] args) {
            LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);
    
            // 使用add()
            animals.add("Dog");
            animals.add("Cat");
    
            // 使用offer()
            animals.offer("Horse");
            System.out.println("LinkedBlockingQueue: " + animals);
        }
    }
    

**输出**
    
    
    LinkedBlockingQueue: [Dog, Cat, Horse]
    

* * *

### 访问元素

  * `peek()` - 返回链式阻塞队列前面的元素。如果队列为空，则返回`null`。
  * `iterator()` - 返回一个迭代器对象，用于顺序访问链式阻塞队列的元素。如果队列为空，则抛出异常。我们必须导入`java.util.Iterator`包来使用它。



例如，
    
    
    import java.util.concurrent.LinkedBlockingQueue;
    import java.util.Iterator;
    
    class Main {
        public static void main(String[] args) {
            LinkedBlockingQueue<String> animals = new LinkedBlockingQueue<>(5);
    
            // 添加元素
            animals.add("Dog");
            animals.add("Cat");
            animals.add("Horse");
            System.out.println("LinkedBlockingQueue: " + animals);
    
            // 使用peek()
            String element = animals.peek();
            System.out.println("访问的元素: " + element);
    
            // 使用iterator()
            Iterator<String> iterate = animals.iterator();
            System.out.print("LinkedBlockingQueue中的元素: ");
    
            while(iterate.hasNext()) {
                System.out.print(iterate.next());
                System.out.print(", ");
            }
        }
    }
    

**输出**
    
    
    LinkedBlockingQueue: [Dog, Cat, Horse]
    访问的元素: Dog
    LinkedBlockingQueue中的元素: Dog, Cat, Horse,
    

* * *

### 删除元素

  * `remove()` - 返回并删除链式阻塞队列中的指定元素。如果队列为空
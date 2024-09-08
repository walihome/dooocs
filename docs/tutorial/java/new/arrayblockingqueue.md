---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java ArrayBlockingQueue

Java集合框架中的`ArrayBlockingQueue`类使用数组提供了阻塞队列的实现。

它实现了[Java BlockingQueue接口](https://www.dooocs.com/img/java-programming/blockingqueue "Java BlockingQueue接口")。

![ArrayBlockingQueue在Java中实现了BlockingQueue接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-blockingqueue.png)


* * *

## 创建ArrayBlockingQueue

为了创建一个数组阻塞队列，我们必须导入`java.util.concurrent.ArrayBlockingQueue`包。

一旦我们导入了这个包，我们就可以在Java中创建一个数组阻塞队列：
    
    
    ArrayBlockingQueue<Type> animal = new ArrayBlockingQueue<>(int capacity);
    

这里，

  * Type - 数组阻塞队列的类型
  * capacity - 数组阻塞队列的大小



例如，
    
    
    // 创建大小为5的String类型的ArrayBlockingQueue
    ArrayBlockingQueue<String> animals = new ArrayBlockingQueue<>(5);
    
    // 创建大小为5的Integer类型的ArrayBlockingQueue
    ArrayBlockingQueue<Integer> age = new ArrayBlockingQueue<>(5);
    

> **注意：**提供数组大小是强制性的。

* * *

## ArrayBlockingQueue的方法

`ArrayBlockingQueue`类提供了`BlockingQueue`接口中所有方法的实现。

这些方法用于向数组阻塞队列中插入、访问和删除元素。

此外，我们将了解两个支持阻塞操作的方法`put()`和`take()`，它们使数组阻塞队列与其他典型队列不同。

* * *

### 插入元素

  * `add()` - 向数组阻塞队列中插入指定的元素。如果队列已满，则抛出异常。
  * `offer()` - 向数组阻塞队列中插入指定的元素。如果队列已满，则返回`false`。



例如，
    
    
    import java.util.concurrent.ArrayBlockingQueue;
    
    class Main {
        public static void main(String[] args) {
            ArrayBlockingQueue<String> animals = new ArrayBlockingQueue<>(5);
    
            // 使用add()
            animals.add("Dog");
            animals.add("Cat");
    
            // 使用offer()
            animals.offer("Horse");
            System.out.println("ArrayBlockingQueue: " + animals);
        }
    }
    

**输出**
    
    
    ArrayBlockingQueue: [Dog, Cat, Horse]
    

* * *

### 访问元素

  * `peek()` - 返回数组阻塞队列前面的元素。如果队列为空，则返回`null`。
  * `iterator()` - 返回一个迭代器对象，用于顺序访问数组阻塞队列中的元素。如果队列为空，则抛出异常。我们必须导入`java.util.Iterator`包才能使用它。



例如，
    
    
    import java.util.concurrent.ArrayBlockingQueue;
    import java.util.Iterator;
    
    class Main {
        public static void main(String[] args) {
            ArrayBlockingQueue<String> animals = new ArrayBlockingQueue<>(5);
    
            // 添加元素
            animals.add("Dog");
            animals.add("Cat");
            animals.add("Horse");
            System.out.println("ArrayBlockingQueue: " + animals);
    
            // 使用peek()
            String element = animals.peek();
            System.out.println("Accessed Element: " + element);
    
            // 使用iterator()
            Iterator<String> iterate = animals.iterator();
            System.out.print("ArrayBlockingQueue Elements: ");
    
            while(iterate.hasNext()) {
                System.out.print(iterate.next());
                System.out.print(", ");
            }
        }
    }
    

**输出**
    
    
    ArrayBlockingQueue: [Dog, Cat, Horse]
    Accessed Element: Dog
    ArrayBlockingQueue Elements: Dog, Cat, Horse,
    

* * *

### 删除元素

  * `remove()` - 从数组阻塞队列中返回并删除指定的元素。如果队列为空，则抛出异常。
  * `poll()` - 从数组阻塞队列中返回并删除指定的元素。如果队列为空，则返回`null`。
  * `clear()` - 从数组阻塞队列中删除所有元素。



例如，
    
    
    import java.util.concurrent.ArrayBlockingQueue;
    
    class Main {
        public static void main(String[] args) {
            ArrayBlockingQueue<String>
# Java PriorityQueue

`PriorityQueue`类提供了[堆数据结构](/dsa/heap-data-structure "堆数据结构")的功能。

它实现了[Queue接口](/java-programming/queue "Java Queue Interface")。

![Java PriorityQueue类实现了Queue接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-priorityqueue-implementation.png)  

与普通队列不同，优先级队列元素按照排序顺序检索。

假设我们希望按升序检索元素。在这种情况下，优先级队列的头部将是最小的元素。一旦检索到该元素，下一个最小的元素将成为队列的头部。

需要注意的是，优先级队列的元素可能未排序。但是，元素总是按照排序顺序检索。

* * *

## 创建PriorityQueue

为了创建一个优先级队列，我们必须导入`java.util.PriorityQueue`包。导入包后，我们可以按照以下方式在Java中创建一个优先级队列。
    
    
    PriorityQueue<Integer> numbers = new PriorityQueue<>();
    

在这里，我们创建了一个没有任何参数的优先级队列。在这种情况下，优先级队列的头部是队列中最小的元素。并且元素按照升序从队列中移除。

然而，我们可以借助`Comparator`接口来自定义元素的排序顺序。我们将在本教程的后面学习更多相关知识。

* * *

## PriorityQueue的方法

`PriorityQueue`类提供了`Queue`接口中所有方法的实现。

* * *

## 向PriorityQueue插入元素

  * `add()` \- 将指定的元素插入队列。如果队列已满，则抛出异常。
  * `offer()` \- 将指定的元素插入队列。如果队列已满，返回`false`。



例如，
    
    
    import java.util.PriorityQueue;
    
    class Main {
        public static void main(String[] args) {
    
            // 创建一个优先级队列
            PriorityQueue<Integer> numbers = new PriorityQueue<>();
    
            // 使用add()方法
            numbers.add(4);
            numbers.add(2);
            System.out.println("优先级队列: " + numbers);
    
            // 使用offer()方法
            numbers.offer(1);
            System.out.println("更新后的优先级队列: " + numbers);
        }
    }
    

**输出**
    
    
    优先级队列: [2, 4]
    更新后的优先级队列: [1, 4, 2]
    

在这里，我们创建了一个名为numbers的优先级队列。我们将4和2插入到队列中。

尽管4在2之前被插入，但是队列的头部是2。这是因为优先级队列的头部是队列中最小的元素。

然后，我们插入了1到队列中。队列现在重新排列以将最小的元素1存储到队列的头部。

* * *

## 访问PriorityQueue元素

要访问优先级队列中的元素，我们可以使用`peek()`方法。该方法返回队列的头部。例如，
    
    
    import java.util.PriorityQueue;
    
    class Main {
        public static void main(String[] args) {
    
            // 创建一个优先级队列
            PriorityQueue<Integer> numbers = new PriorityQueue<>();
            numbers.add(4);
            numbers.add(2);
            numbers.add(1);
            System.out.println("优先级队列: " + numbers);
    
            // 使用peek()方法
            int number = numbers.peek();
            System.out.println("访问的元素: " + number);
        }
    }
    

**输出**
    
    
    优先级队列: [1, 4, 2]
    访问的元素: 1
    

* * *

## 移除PriorityQueue元素

  * `remove()` \- 从队列中移除指定的元素
  * `poll()` \- 返回并移除队列的头部



例如，
    
    
    import java.util.PriorityQueue;
    
    class Main {
        public static
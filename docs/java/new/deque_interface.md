# Java Deque 接口

Java 集合框架中的 `Deque` 接口提供了双向队列的功能。它继承自 `Queue` 接口。

* * *

## Deque 的工作原理

在普通队列中，元素从后面添加并从前面移除。但是，在双向队列中，我们可以**从前面和后面插入和移除元素**。

![双向队列数据结构 Deque 的工作原理](https://cdn.programiz.com/sites/tutorial2program/files/working-of-deque.png)  


* * *

## 实现 Deque 功能的类

为了使用 `Deque` 接口的功能，我们需要使用实现它的类：

  * [ArrayDeque](/java-programming/arraydeque "Java ArrayDeque")
  * [LinkedList](/java-programming/linkedlist "Java LinkedList")



![ArrayDeque 和 LinkedList 实现了 Deque](https://cdn.programiz.com/sites/tutorial2program/files/deque-implemention-classes.png)  


* * *

## 如何使用 Deque?

在 Java 中，我们必须导入 `java.util.Deque` 包来使用 `Deque`。
    
    
    // Deque 的 Array 实现
    Deque<String> animal1 = new ArrayDeque<>();
    
    // Deque 的 LinkedList 实现
    Deque<String> animal2 = new LinkedList<>();
    

在这里，我们分别创建了 ArrayDeque 类和 LinkedList 类的对象 animal1 和 animal2。这些对象可以使用 `Deque` 接口的功能。

* * *

## Deque 的方法

由于 `Deque` 继承了 `Queue` 接口，它继承了 [the Queue interface](/java-programming/queue "Java Queue interface") 的所有方法。

除了 `Queue` 接口中的方法外，`Deque` 接口还包括以下方法：

  * **addFirst()** \- 在 deque 的开头添加指定元素。如果 deque 已满，则抛出异常。
  * **addLast()** \- 在 deque 的末尾添加指定元素。如果 deque 已满，则抛出异常。
  * **offerFirst()** \- 在 deque 的开头添加指定元素。如果 deque 已满，则返回 `false`。
  * **offerLast()** \- 在 deque 的末尾添加指定元素。如果 deque 已满，则返回 `false`。
  * **getFirst()** \- 返回 deque 的第一个元素。如果 deque 为空，则抛出异常。
  * **getLast()** \- 返回 deque 的最后一个元素。如果 deque 为空，则抛出异常。
  * **peekFirst()** \- 返回 deque 的第一个元素。如果 deque 为空，则返回 `null`。
  * **peekLast()** \- 返回 deque 的最后一个元素。如果 deque 为空，则返回 `null`。
  * **removeFirst()** \- 返回并移除 deque 的第一个元素。如果 deque 为空，则抛出异常。
  * **removeLast()** \- 返回并移除 deque 的最后一个元素。如果 deque 为空，则抛出异常。
  * **pollFirst()** \- 返回并移除 deque 的第一个元素。如果 deque 为空，则返回 `null`。
  * **pollLast()** \- 返回并移除 deque 的最后一个元素。如果 deque 为空，则返回 `null`。



* * *

## Deque 作为栈数据结构

Java `Collections` 框架的 `Stack` 类提供了栈的实现。

然而，建议使用 `Deque` 作为栈，而不是使用 [Stack 类](/java-programming/stack "Java Stack class")。这是因为 `Stack` 的方法是同步的。

以下是 `Deque` 接口提供的实现栈所需的方法：

  * `push()` \- 在 deque 的开头添加一个元素
  * `pop()` \- 从 deque 的开头移除一个元素
  * `peek()` \- 返回 deque 的开头元素



* * *

## ArrayDeque 类中 Deque 的实现
    
    
    import java.util.Deque;
    import java.util.ArrayDeque;
    
    class Main {
    
        public static void main(String[] args) {
            // 使用 ArrayDeque 类创建 Deque
            Deque<Integer> numbers
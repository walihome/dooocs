# Java集合接口

`Collection` 接口是Java集合框架的根接口。

这个接口没有直接的实现。但是，它通过其子接口如 `List`、 `Set` 和 `Queue` 进行实现。

例如，`ArrayList` 类实现了 `List` 接口，而 `List` 接口是 `Collection` 接口的子接口。

![Java集合接口及其子接口。](https://cdn.programiz.com/sites/tutorial2program/files/Java-collection-interface.png)  


* * *

## 集合的子接口

如上所述，`Collection` 接口包括一些由Java中各种类实现的子接口。

### 1\. 列表接口

`List` 接口是一个有序的集合，允许我们像数组一样添加和删除元素。要了解更多信息，请访问：[Java列表接口](https://www.programiz.com/java-programming/list)。

### 2\. 集合接口

`Set` 接口允许我们将元素存储在不同的集合中，类似于数学中的集合。它不能有重复的元素。要了解更多信息，请访问：[Java集合接口](https://www.programiz.com/java-programming/set)。

### 3\. 队列接口

当我们想以**先进先出（FIFO）**的方式存储和访问元素时，可以使用 `Queue` 接口。要了解更多信息，请访问：[Java队列接口](https://www.programiz.com/java-programming/queue)。

* * *

## 集合的方法

`Collection` 接口包含了可以用于对对象执行不同操作的各种方法。这些方法在其所有子接口中都可用。

  * `add()` \- 将指定的元素插入集合
  * `size()` \- 返回集合的大小
  * `remove()` \- 从集合中删除指定的元素
  * `iterator()` \- 返回用于访问集合元素的迭代器
  * `addAll()` \- 将指定集合的所有元素添加到集合中
  * `removeAll()` \- 从集合中移除指定集合的所有元素
  * `clear()` \- 清空集合中的所有元素
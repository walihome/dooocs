---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java NavigableSet 接口

Java Collections 框架中的 `NavigableSet` 接口提供了在集合元素之间进行导航的功能。

它被认为是 [SortedSet](https://www.dooocs.com/img/java-programming/sortedset "Java SortedSet 接口") 的一种类型。

* * *

## 实现 NavigableSet 的类

为了使用 `NavigableSet` 接口的功能，我们需要使用实现了 `NavigableSet` 的 `TreeSet` 类。

![TreeSet 类实现了 NavigableSet 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-navigableset.png)  


* * *

## 如何使用 NavigableSet?

在 Java 中，我们必须导入 `java.util.NavigableSet` 包来使用 `NavigableSet`。一旦导入了该包，我们就可以创建可导航的集合。
    
    
    // 使用 TreeSet 类实现的 SortedSet
    NavigableSet<String> numbers = new TreeSet<>();
    

这里，我们创建了一个名为 numbers 的 navigable set，它是 TreeSet 类的实例。

* * *

## NavigableSet 的方法

`NavigableSet` 被认为是 `SortedSet` 的一种类型。这是因为 `NavigableSet` 继承了 `SortedSet` 接口。

因此，所有 `SortedSet` 方法也适用于 `NavigableSet`。要了解这些方法的详情，请访问 [Java SortedSet](https://www.programiz.com/java-programming/sortedset)。

然而，`SortedSet` 的一些方法（`headSet()`、`tailSet()` 和 `subSet()`）在 `NavigableSet` 中的定义略有不同。

让我们看看这些方法在 `NavigableSet` 中的定义。

* * *

### headSet(element, booleanValue)

`headSet()` 方法返回指定元素（作为参数传递）之前的可导航集合中的所有元素。

booleanValue 参数是可选的，默认值为 `false`。

如果将 booleanValue 设置为 `true`，则该方法将返回指定元素之前的所有元素，包括指定元素。

* * *

### tailSet(element, booleanValue)

`tailSet()` 方法返回指定元素（作为参数传递）之后的可导航集合中的所有元素，包括指定元素。

booleanValue 参数是可选的，默认值为 `true`。

如果将 booleanValue 设置为 `false`，则该方法将返回指定元素之后的所有元素，但不包括指定元素。

* * *

### subSet(e1, bv1, e2, bv2)

`subSet()` 方法返回 e1 和 e2 之间的所有元素，包括 e1。

bv1 和 bv2 是可选参数。bv1 的默认值为 `true`，bv2 的默认值为 `false`。

如果将 bv1 设置为 `false`，则该方法将返回 e1 和 e2 之间的所有元素，但不包括 `e1`。

如果将 bv2 设置为 `true`，则该方法将返回 e1 和 e2 之间的所有元素，包括 e1。

* * *

## 导航方法

`NavigableSet` 提供了各种可以用于导航其元素的方法。

  * **descendingSet()** \- 反转集合中元素的顺序
  * **descendingIterator()** \- 返回可用于反向迭代集合的迭代器
  * **ceiling()** \- 返回大于或等于指定元素的最低元素
  * **floor()** \- 返回小于或等于指定元素的最大元素
  * **higher()** \- 返回大于指定元素的最低元素
  * **lower()** \- 返回小于指定元素的最大元素
  * **pollFirst()** \- 返回并移除集合中的第一个元素
  * **pollLast()** \- 返回并移除集合中的最后一个元素



要了解有关 `NavigableSet` 的更多信息，请访问 [Java NavigableSet（官方 Java 文档）](https://docs
# Java Set 接口

Java `Collections` 框架的 `Set` 接口提供了 Java 中数学集合的功能。它扩展了 `Collection` 接口。

与 `List` 接口不同，集合不能包含重复元素。

* * *

## 实现 Set 的类

由于 `Set` 是一个接口，我们不能直接从中创建对象。

为了使用 `Set` 接口的功能，我们可以使用以下类：

  * [HashSet](https://www.dooocs.com/img/java-programming/hashset "Java HashSet 类")
  * [LinkedHashSet](https://www.dooocs.com/img/java-programming/linkedhashset "Java LinkedHashSet 类")
  * [EnumSet](https://www.dooocs.com/img/java-programming/enumset "Java EnumSet 类")
  * [TreeSet](https://www.dooocs.com/img/java-programming/treeset "Java TreeSet 类")

这些类在 `Collections` 框架中定义，并实现了 `Set` 接口。

![接口 SortedSet 和 NavigableSet 扩展了 Set 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-set-implementation.png)  


* * *

## 扩展 Set 的接口

`Set` 接口还被以下子接口扩展：

  * [SortedSet](https://www.dooocs.com/img/java-programming/sortedset "Java SortedSet 接口")
  * [NavigableSet](https://www.dooocs.com/img/java-programming/navigableset "Java NavigableSet 接口")

![类 EnumSet、HashSet、LinkedHastSet 和 TreeSet 实现了 Set 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-set.png)  


* * *

## 如何使用 Set？

在 Java 中，我们必须导入 `java.util.Set` 包才能使用 `Set`。

```java
// 使用 HashSet 实现 Set
Set<String> animals = new HashSet<>();
```

在这里，我们创建了一个名为 `animals` 的 `Set`。我们使用 `HashSet` 类来实现 `Set` 接口。

* * *

## Set 的方法

`Set` 接口包括了 `Collection` 接口的所有方法。这是因为 `Collection` 是 `Set` 的超接口。

在 `Collection` 接口中常用的一些方法也可在 `Set` 接口中使用，如下所示：

  * **add()** \- 将指定元素添加到集合中
  * **addAll()** \- 将指定集合中的所有元素添加到集合中
  * **iterator()** \- 返回可用于按顺序访问集合元素的迭代器
  * **remove()** \- 从集合中移除指定元素
  * **removeAll()** \- 从集合中移除另一个指定集合中存在的所有元素
  * **retainAll()** \- 保留集合中同时也在另一个指定集合中存在的元素
  * **clear()** \- 从集合中移除所有元素
  * **size()** \- 返回集合的长度（元素个数）
  * **toArray()** \- 返回包含集合所有元素的数组
  * **contains()** \- 如果集合包含指定元素则返回 `true`
  * **containsAll()** \- 如果集合包含指定集合的所有元素则返回 `true`
  * **hashCode()** \- 返回集合中元素的哈希码值（元素在集合中的地址）

要了解更多 `Set` 接口的方法，请访问 [Java Set（官方 Java 文档）](https://docs.oracle.com/javase/7/docs/api/java/util/Set.html)。

* * *

## Set 操作

Java 的 `Set` 接口允许我们执行基本的数学集合操作，如并集、交集和子集。

  * **并集** \- 要获取两个集合 x 和 y 的并集，可以使用 `x.addAll(y)`
  * **交集** \- 要获取两个集合 x 和 y 的交集，可以使用 `x.retainAll(y)`
  * **子集** \- 要检查 x 是否为 y 的子集，可以使用 `y.containsAll(x)`

* * *

## Set 接口的实现

**1\. 实现 HashSet 类**

```java
import java
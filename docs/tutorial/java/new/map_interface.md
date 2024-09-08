---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java Map 接口

Java 的 `Map` 接口提供了 map 数据结构的功能。

* * *

## Map 的工作原理

在 Java 中，`Map` 的元素以 **键/值** 对的形式存储。**键** 是与各个 **值** 关联的唯一值。

一个 map 不能包含重复的键。而且，每个键只与一个值关联。

![Java 中 Map 接口的工作原理](https://cdn.programiz.com/sites/tutorial2program/files/Map.png)

我们可以使用与它们相关联的键来访问和修改值。

在上面的图中，我们有三个值：United States、Brazil 和 Spain。并且我们有相应的键：us、br 和 es。

现在，我们可以使用它们对应的键来访问这些值。

**注意：** `Map` 接口维护着 3 个不同的集合：

  * 键集
  * 值集
  * 键/值关联集（映射）。

因此，我们可以分别访问键、值和关联。

* * *

## 实现 Map 的类

由于 `Map` 是一个接口，所以我们无法从中创建对象。

为了使用 `Map` 接口的功能，我们可以使用以下这些类：

  * [HashMap](https://www.dooocs.com/img/java-programming/hashmap "Java HashMap 类")
  * [EnumMap](https://www.dooocs.com/img/java-programming/enummap "Java EnumMap 类")
  * [LinkedHashMap](https://www.dooocs.com/img/java-programming/linkedhashmap "Java LinkedHashMap 类")
  * [WeakHashMap](https://www.dooocs.com/img/java-programming/weakhashmap "Java WeakHashMap 类")
  * [TreeMap](https://www.dooocs.com/img/java-programming/treemap "Java TreeMap 类")

这些类定义在集合框架中，并实现了 `Map` 接口。

![HashMap、TreeMap、EnumMap、LinkedHashMap 和 WeakHashMap 类都实现了 Java 的 Map 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-map-subclasses.png)  
Java Map 子类

* * *

## 扩展 Map 的接口

`Map` 接口还被以下子接口扩展：

  * [SortedMap](https://www.dooocs.com/img/java-programming/sortedmap "Java SortedMap 接口")
  * [NavigableMap](https://www.dooocs.com/img/java-programming/navigablemap "Java NavigableMap 接口")
  * [ConcurrentMap](https://www.dooocs.com/img/java-programming/concurrentmap "Java ConcurrentMap 接口")

![SortedMap、NavigableMap 和 ConcurrentMap 扩展了 Java 的 Map 接口](https://cdn.programiz.com/sites/tutorial2program/files/java-map-subinterfaces.png)  
Java Map 子接口

* * *

## 如何使用 Map？

在 Java 中，我们必须导入 `java.util.Map` 包才能使用 `Map`。一旦我们导入了该包，我们就可以创建一个 map，具体如下所示：
    
    
    // 使用 HashMap 实现的 Map
    Map<Key, Value> numbers = new HashMap<>();
    

在上面的代码中，我们创建了一个名为 `numbers` 的 `Map`。我们使用了 `HashMap` 类来实现 `Map` 接口。

这里：

  * Key \- 在 map 中用于关联每个元素（值）的唯一标识符
  * Value \- 由键在 map 中关联的元素



* * *

## Map 的方法

`Map` 接口包含了 `Collection` 接口的所有方法。这是因为 `Collection` 是 `Map` 的超接口。

除了 `Collection` 接口中的可用方法外，`Map` 接口还包括以下方法：

  * **put(K, V)** \- 将键 K 和值 V 的关联插入到 map 中。如果键已经存在，则新值将替换旧值。
  * **putAll()** \- 将指定 map 中的所有条目插入到此 map 中。
  * **putIfAbsent(K, V)** \- 仅当键 K 尚未与值 V 关联时，才插入该关联。
  * **get(K)** \- 返回与指定键 K 关联的值。如果找不到键，则返回 `null`。
  * **getOrDefault(K, defaultValue)** \-
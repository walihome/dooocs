# Java NavigableMap 接口

Java 集合框架中的 `NavigableMap` 接口提供了在地图条目之间导航的功能。

它被视为 [SortedMap](https://www.dooocs.com/img/java-programming/sortedmap "Java SortedMap Interface") 的一种类型。

* * *

## 实现 NavigableMap 的类

由于 `NavigableMap` 是一个接口，我们无法从中创建对象。

为了使用 `NavigableMap` 接口的功能，我们需要使用实现 `NavigableMap` 的 `TreeMap` 类。

![Java TreeMap 类实现了 Java NavigableMap 接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-navigablemap-implementation.png)  


* * *

## 如何使用 NavigableMap？

在 Java 中，我们必须导入 `java.util.NavigableMap` 包来使用 `NavigableMap`。一旦导入了该包，我们就可以创建一个可导航的地图。
    
    
    // 使用 TreeMap 类实现 NavigableMap
    NavigableMap<Key, Value> numbers = new TreeMap<>();
    

在上面的代码中，我们创建了一个名为 numbers 的可导航映射，其底层实现是 `TreeMap` 类。

这里，

  * Key - 用于将每个元素（值）与地图中的键关联的唯一标识符
  * Value - 通过键在地图中关联的元素



* * *

## NavigableMap 的方法

`NavigableMap` 被认为是 `SortedMap` 的一种类型。这是因为 `NavigableMap` 扩展了 `SortedMap` 接口。

因此，所有的 `SortedMap` 方法在 `NavigableMap` 中也可用。要了解这些方法在 `SortedMap` 中如何定义，请访问 [Java SortedMap](https://www.dooocs.com/img/java-programming/sortedmap)。

然而，`SortedMap` 的一些方法（`headMap()`、`tailMap()` 和 `subMap()`）在 `NavigableMap` 中的定义不同。

我们来看看这些方法在 `NavigableMap` 中的定义。

* * *

### headMap(key, booleanValue)

`headMap()` 方法返回与指定键之前的所有键关联的可导航地图的所有条目（作为参数传递的键）。

booleanValue 是一个可选参数。它的默认值是 `false`。

如果将 `true` 作为 booleanValue 传递，则该方法返回与指定键之前的所有键关联的所有条目，包括与指定键关联的条目。

* * *

### tailMap(key, booleanValue)

`tailMap()` 方法返回与指定键之后的所有键关联的可导航地图的所有条目（作为参数传递的键），包括与指定键关联的条目。

booleanValue 是一个可选参数。它的默认值是 `true`。

如果将 `false` 作为 booleanValue 传递，则该方法返回与指定键之后的所有键关联的所有条目，不包括与指定键关联的条目。

* * *

### subMap(k1, bv1, k2, bv2)

`subMap()` 方法返回在 k1 和 k2 之间的键关联的所有条目，包括与 k1 关联的条目。

bv1 和 bv2 是可选参数。bv1 的默认值为 `true`，bv2 的默认值为 `false`。

如果将 bv1 设置为 `false`，则该方法返回在 k1 和 k2 之间的键关联的所有条目，不包括与 k1 关联的条目。

如果将 bv2 设置为 `true`，则该方法返回在 k1 和 k2 之间的键关联的所有条目，包括与 k1 关联的条目。

* * *

## 其他方法

`NavigableMap` 提供了各种方法，用于定位映射的条目。

  * **descendingMap()** - 反转映射中条目的顺序
  * **descendingKeyMap()** - 反转地图中键的顺序
  * **ceilingEntry()** - 返回所有键大
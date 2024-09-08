---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java SortedMap 接口

Java集合框架的`SortedMap`接口提供了对存储在映射中的键进行排序的功能。

它扩展了[Map接口](https://www.dooocs.com/img/java-programming/map "Java Map interface")。

![Java SortedMap接口扩展了Map接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-sortedmap-interface.png)  


* * *

## 实现SortedMap的类

由于`SortedMap`是一个接口，我们无法直接创建它的对象。

为了使用`SortedMap`接口的功能，我们需要使用实现它的类`TreeMap`。

![Java TreeMap类实现了SortedMap接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-sortedmap-implementation.png)  


* * *

## 如何使用SortedMap？

要使用`SortedMap`，我们首先必须导入`java.util.SortedMap`包。一旦我们导入了该包，下面是如何创建一个有序映射的示例。
    
    
    // 使用TreeMap类实现的SortedMap
    SortedMap<Key, Value> numbers = new TreeMap<>();
    

我们创建了一个名为numbers的有序映射，使用的是`TreeMap`类。

在这里：

  * Key - 在映射中关联每个元素（值）的唯一标识符
  * Value - 由映射中的键关联的元素



在这里，我们没有使用任何参数来创建有序映射。因此，映射会按自然顺序排序（升序）。

* * *

## SortedMap的方法

`SortedMap`接口包含了`Map`接口的所有方法。这是因为`Map`是`SortedMap`的超接口。

除了所有这些方法之外，下面是`SortedMap`接口特有的方法。

  * **comparator()** - 返回一个可以用于对映射中的键进行排序的比较器
  * **firstKey()** - 返回有序映射的第一个键
  * **lastKey()** - 返回有序映射的最后一个键
  * **headMap(key)** - 返回键小于指定键的映射的所有条目
  * **tailMap(key)** - 返回键大于或等于指定键的映射的所有条目
  * **subMap(key1, key2)** - 返回键位于key1和key2之间（包括key1）的映射的所有条目



要了解更多信息，请访问[Java SortedMap（官方Java文档）](https://docs.oracle.com/javase/7/docs/api/java/util/SortedMap.html)。

* * *

## TreeMap类中SortedMap的实现
    
    
    import java.util.SortedMap;
    import java.util.TreeMap;
    
    class Main {
    
        public static void main(String[] args) {
            // 使用TreeMap创建SortedMap
            SortedMap<String, Integer> numbers = new TreeMap<>();
    
            // 向映射插入元素
            numbers.put("Two", 2);
            numbers.put("One", 1);
            System.out.println("SortedMap: " + numbers);
    
    
            // 访问映射的第一个键
            System.out.println("First Key: " + numbers.firstKey());
    
            // 访问映射的最后一个键
            System.out.println("Last Key: " + numbers.lastKey());
    
            // 从映射中删除元素
            int value = numbers.remove("One");
            System.out.println("Removed Value: " + value);
        }
    }
    

**输出**
    
    
    SortedMap: {One=1, Two=2}
    First Key: One
    Last Key: Two
    Removed Value: 1
    

在这里，我们展示了`SortedMap`接口的工作原理。如果你想了解更多关于它的实现，请访问[Java TreeMap](https://www.dooocs.com/img/java-programming/treemap "Java TreeMap Class")。
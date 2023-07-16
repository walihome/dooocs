# Java ConcurrentMap接口

Java集合框架的`ConcurrentMap`接口提供了一个线程安全的映射。也就是说，多个线程可以同时访问映射而不会影响映射中条目的一致性。

`ConcurrentMap`被称为同步映射。

它扩展了[Map接口](/java-programming/map "Java Map接口")。

---

## 实现ConcurrentMap的类

由于`ConcurrentMap`是一个接口，所以我们不能从中创建对象。

为了使用`ConcurrentMap`接口的功能，我们需要使用实现了它的`ConcurrentHashMap`类。

![Java ConcurrentHashMap接口扩展了Java ConcurrentMap接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-concurrentmap-interface.png)

---

## 如何使用ConcurrentMap？

要使用`ConcurrentMap`，我们必须首先导入`java.util.concurrent.ConcurrentMap`包。一旦我们导入了这个包，下面是如何创建一个并发映射的方式。

```java
// 通过ConcurrentHashMap实现的ConcurrentMap
ConcurrentMap<Key, Value> numbers = new ConcurrentHashMap<>();
```

在上面的代码中，我们创建了一个名为numbers的并发映射。

这里：

- Key：用于将每个元素（值）与映射中的键关联的唯一标识符。
- Value：由键在映射中关联的元素。

---

## ConcurrentMap的方法

`ConcurrentMap`接口包括了`Map`接口的所有方法。这是因为`Map`是`ConcurrentMap`接口的超级接口。

除了所有这些方法之外，下面是`ConcurrentMap`接口特有的方法。

- **putIfAbsent()**：如果指定的键尚未与任何值关联，则将指定的键/值插入映射中。
- **compute()**：计算指定键和其先前映射值的条目（键/值映射）。
- **computeIfAbsent()**：对于尚未使用任何值映射的键，使用指定的函数计算一个值。
- **computeIfPresent()**：如果键已经与指定值进行了映射，则为指定键计算一个新的条目（键/值映射）。
- **forEach()**：访问映射的所有条目并执行指定的操作。
- **merge()**：如果键已经映射到某个值，则将新指定的值与指定键的旧值合并。如果键尚未映射，则该方法只是将指定值与键关联起来。

要了解更多信息，请访问[Java ConcurrentMap（官方Java文档）](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/ConcurrentMap.html#compute-K-java.util.function.BiFunction-)。

---

## 在ConcurrentHashMap中实现ConcurrentMap

```java
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.ConcurrentHashMap;

class Main {

    public static void main(String[] args) {
        // 使用ConcurrentHashMap创建ConcurrentMap
        ConcurrentMap<String, Integer> numbers = new ConcurrentHashMap<>();

        // 将元素插入映射
        numbers.put("Two", 2);
        numbers.put("One", 1);
        numbers.put("Three", 3);
        System.out.println("ConcurrentMap: " + numbers);

        // 访问指定键的值
        int value = numbers.get("One");
        System.out.println("Accessed Value: " + value);

        // 删除指定键的值
        int removedValue = numbers.remove("Two");
        System.out.println("Removed Value: " + removedValue);
    }
}
```

**输出**

```
ConcurrentMap: {One=1, Two=2, Three=3}
Accessed Value: 1
Removed Value: 2
```

要了解更多关于`ConcurrentHashMap`的信息，请访问[Java ConcurrentHashMap](/java-programming/concurrenthashmap "Java ConcurrentHashMap类")。
# Java LinkedHashMap

Java的`LinkedHashMap`类提供了哈希表和链表实现的[Map接口](https://www.dooocs.com/img/java-programming/map "Java Map interface")。它继承自`HashMap`类，将其条目存储在哈希表中，并在所有条目之间维护一个双向链表以排序条目。

![Java LinkedHashMap类继承了HashMap类](https://cdn.programiz.com/sites/tutorial2program/files/java-linkedhashmap.png)

---

## 创建LinkedHashMap

要创建一个LinkedHashMap，首先需要导入`java.util.LinkedHashMap`包。一旦导入了该包，我们就可以使用以下方式在Java中创建linked hashmap。

```java
// 初始容量为8，负载因子为0.6的LinkedHashMap
LinkedHashMap<Key, Value> numbers = new LinkedHashMap<>(8, 0.6f);
```
在上面的代码中，我们创建了一个名为numbers的linked hashmap。

其中，

- Key：用于在映射中关联每个元素（值）的唯一标识符。
- Value：由映射中的键关联的元素。

请注意部分`new LinkedHashMap<>(8, 0.6)`。这里，第一个参数是**capacity（容量）**，第二个参数是**loadFactor（负载因子）**。

- **capacity（容量）**：这个linked hashmap的容量是8，意味着它可以存储8个条目。
- **loadFactor（负载因子）**：这个linked hashmap的负载因子是0.6。这意味着，当哈希映射被填充到60%时，条目将移到原始哈希表大小的两倍的新哈希表中。

**默认容量和负载因子**

我们也可以在不定义linked hashmap容量和负载因子的情况下创建linked hashmap。例如，

```java
// 默认容量和负载因子的LinkedHashMap
LinkedHashMap<Key, Value> numbers1 = new LinkedHashMap<>();
```

默认情况下，

- linked hashmap的容量将为16。
- 负载因子将为0.75。

**注意**：`LinkedHashMap`类还允许我们定义其条目的顺序。例如，

```java
// 指定顺序的LinkedHashMap
LinkedHashMap<Key, Value> numbers2 = new LinkedHashMap<>(capacity, loadFactor, accessOrder);
```

这里，accessOrder是一个布尔值，默认值为`false`。在这种情况下，linked hashmap中的条目按照它们的插入顺序排序。

然而，如果传递`true`作为accessOrder，linked hashmap中的条目将按照最近访问的顺序排序。

---

## 从其他映射创建LinkedHashMap

以下是如何创建包含其他映射中所有元素的linked hashmap。

```java
import java.util.LinkedHashMap;

class Main {
    public static void main(String[] args) {
        // 创建一个包含偶数的LinkedHashMap
        LinkedHashMap<String, Integer> evenNumbers = new LinkedHashMap<>();
        evenNumbers.put("Two", 2);
        evenNumbers.put("Four", 4);
        System.out.println("LinkedHashMap1: " + evenNumbers);

        // 从另一个LinkedHashMap创建一个LinkedHashMap
        LinkedHashMap<String, Integer> numbers = new LinkedHashMap<>(evenNumbers);
        numbers.put("Three", 3);
        System.out.println("LinkedHashMap2: " + numbers);
    }
}
```

**输出**

```
LinkedHashMap1: {Two=2, Four=4}
LinkedHashMap2: {Two=2, Four=4, Three=3}
```

---

## LinkedHashMap的方法

`LinkedHashMap`类提供了一些方法，允许我们对映射执行各种操作。

---

## 向LinkedHashMap插入元素

- `put()`：将指定的键值映射插入到映射中。
- `putAll()`：将指定映射中的所有条目插入到此映射中。
- `putIfAbsent()`：仅在映射中不存在指定键时，将指定的键值映射插入到映射中。

例如，
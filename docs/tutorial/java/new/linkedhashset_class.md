# Java LinkedHashSet

Java的集合框架中，`LinkedHashSet`类提供了哈希表和链表数据结构的功能。

它实现了[Set接口](https://www.dooocs.com/img/java-programming/set "Java Set Interface")。

![Java LinkedHashSet类实现了Set接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-linkedhashset.png)

`LinkedHashSet`中的元素存储在哈希表中，类似于[HashSet](https://www.dooocs.com/img/java-programming/hashset "Java HashSet Class")。

然而，链式哈希集在内部为所有元素维护了一个双向链表。链表定义了元素在哈希表中插入的顺序。

* * *

## 创建LinkedHashSet

要创建一个链式哈希集，我们首先必须导入`java.util.LinkedHashSet`包。

一旦导入了包，就可以按照以下方式在Java中创建链式哈希集。

```java
// 带有8个容量和0.75负载因子的LinkedHashSet
LinkedHashSet<Integer> numbers = new LinkedHashSet<>(8, 0.75);
```

在这里，我们创建了一个名为numbers的链式哈希集。

注意，部分内容`new LinkedHashSet<>(8, 0.75)`。这里，第一个参数是**容量**，第二个参数是**负载因子**。

  * **容量**：哈希集的容量为8。意味着它可以存储8个元素。
  * **负载因子**：哈希集的负载因子为0.6。这意味着，当哈希表被60%填满时，元素会被移动到原始哈希表大小两倍的新哈希表中。

**默认容量和负载因子**

我们也可以创建一个链式哈希集而不指定其容量和负载因子。例如，

```java
// 默认容量和负载因子的LinkedHashSet
LinkedHashSet<Integer> numbers1 = new LinkedHashSet<>();
```

默认情况下，

  * 链式哈希集的容量将是16
  * 负载因子将是0.75

* * *

## 从其他集合创建LinkedHashSet

以下是如何创建包含其他集合所有元素的链式哈希集。

```java
import java.util.LinkedHashSet;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        // 创建一个包含偶数的ArrayList
        ArrayList<Integer> evenNumbers = new ArrayList<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("ArrayList: " + evenNumbers);

        // 从ArrayList创建一个LinkedHashSet
        LinkedHashSet<Integer> numbers = new LinkedHashSet<>(evenNumbers);
        System.out.println("LinkedHashSet: " + numbers);
    }
}
```

**输出**

```
ArrayList: [2, 4]
LinkedHashSet: [2, 4]
```

* * *

## LinkedHashSet的方法

`LinkedHashSet`类提供了一些方法，允许我们对链式哈希集执行各种操作。

* * *

## 向LinkedHashSet插入元素

  * `add()`：将指定的元素插入链式哈希集
  * `addAll()`：将指定集合的所有元素插入链式哈希集

例如，

```java
import java.util.LinkedHashSet;

class Main {
    public static void main(String[] args) {
        LinkedHashSet<Integer> evenNumber = new LinkedHashSet<>();

        // 使用add()方法
        evenNumber.add(2);
        evenNumber.add(4);
        evenNumber.add(6);
        System.out.println("LinkedHashSet: " + evenNumber);

        LinkedHashSet<Integer> numbers = new LinkedHashSet<>();

        // 使用addAll()方法
        numbers.addAll(evenNumber);
        numbers.add(5);
        System.out.println("New LinkedHashSet: " + numbers);
    }
}
```

**输出**

```
LinkedHashSet: [2, 4, 6]
New LinkedHashSet: [2, 4, 6, 5]
```

* * *

## 访问LinkedHashSet中的元素

要访问链式哈希集中的元素，我们可以使用`iterator()`方法。为了使用这个```
* * *

## LinkedHashSet方法

方法 | 描述  
---|---  
`clone()` | 创建`LinkedHashSet`的副本  
`contains()` | 在`LinkedHashSet`中搜索指定元素并返回布尔结果  
`isEmpty()` | 检查`LinkedHashSet`是否为空  
`size()` | 返回`LinkedHashSet`的大小  
`clear()` | 从`LinkedHashSet`中删除所有元素  
  
要了解更多关于`LinkedHashSet`方法的信息，请访问[Java LinkedHashSet（官方Java文档）](https://docs.oracle.com/javase/7/docs/api/java/util/LinkedHashSet.html)。

* * *

## LinkedHashSet Vs. HashSet

`LinkedHashSet`和`HashSet`都实现了`Set`接口，但它们之间存在一些区别。

* `LinkedHashSet`在内部维护了一个链表。因此，它保持了元素的插入顺序。
* `LinkedHashSet`类需要比`HashSet`更多的存储空间。这是因为`LinkedHashSet`在内部维护了链表。
* `LinkedHashSet`的性能比`HashSet`慢。这是因为`LinkedHashSet`中存在链表。

* * *

## LinkedHashSet Vs. TreeSet

`LinkedHashSet`和`TreeSet`之间的主要区别如下：

* `TreeSet`类实现了`SortedSet`接口，因此树集中的元素是有序的。然而，`LinkedHashSet`类只保持了元素的插入顺序。
* `TreeSet`通常比`LinkedHashSet`慢。这是因为每次向`TreeSet`中添加元素时，都需要执行排序操作。
* `LinkedHashSet`允许插入空值。然而，我们无法向`TreeSet`插入空值。

```
```
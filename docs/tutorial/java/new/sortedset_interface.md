---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java SortedSet 接口

Java集合框架的`SortedSet`接口用于在一个集合中按照一定顺序存储元素。

它继承了[Set接口](https://www.dooocs.com/img/java-programming/set "Java Set Interface")。

![Java SortedSet接口继承了Set接口](https://cdn.programiz.com/sites/tutorial2program/files/java-sortedset.png)

* * *

## 实现SortedSet的类

为了使用`SortedSet`接口的功能，我们需要使用实现它的`TreeSet`类。

![Java TreeSet类实现了SortedSet接口](https://cdn.programiz.com/sites/tutorial2program/files/java-sortedset-implementation.png)

* * *

## 如何使用SortedSet？

要使用`SortedSet`，我们必须先导入`java.util.SortedSet`包。

```java
// 通过TreeSet类实现SortedSet
SortedSet<String> animals = new TreeSet<>();
```

我们创建了一个名为animals的有序集合，使用的是`TreeSet`类。

这里我们没有传递任何参数来创建有序集合。因此，集合将按自然顺序排序。

* * *

## SortedSet的方法

`SortedSet`接口包含了[Set接口](https://www.dooocs.com/img/java-programming/set "Java Set Interface")的所有方法。这是因为`Set`是`SortedSet`的超级接口。

除了`Set`接口中包含的方法外，`SortedSet`接口还包括以下方法：

  * **comparator()** - 返回可用于对集合中的元素进行排序的比较器
  * **first()** - 返回集合中的第一个元素
  * **last()** - 返回集合中的最后一个元素
  * **headSet(element)** - 返回指定元素之前的所有元素
  * **tailSet(element)** - 返回指定元素之后的所有元素，包括指定元素
  * **subSet(element1, element2)** - 返回element1和element2之间的所有元素，包括element1

* * *

## TreeSet类中SortedSet的实现

```java
import java.util.SortedSet;
import java.util.TreeSet;

class Main {

    public static void main(String[] args) {
        // 使用TreeSet创建SortedSet
        SortedSet<Integer> numbers = new TreeSet<>();

        // 向集合中插入元素
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        System.out.println("SortedSet: " + numbers);

        // 访问元素
        int firstNumber = numbers.first();
        System.out.println("First Number: " + firstNumber);

        int lastNumber = numbers.last();
        System.out.println("Last Number: " + lastNumber);

        // 删除元素
        boolean result = numbers.remove(2);
        System.out.println("是否移除了数字2？ " + result);
    }
}
```

**输出**

```
SortedSet: [1, 2, 3, 4]
First Number: 1
Last Number: 4
是否移除了数字2？ true
```

要了解更多关于`TreeSet`的信息，请访问[Java TreeSet](https://www.dooocs.com/img/java-programming/treeset "Java TreeSet Class")。

* * *

现在我们了解了`SortedSet`接口，我们将学习如何使用`TreeSet`类来实现它。
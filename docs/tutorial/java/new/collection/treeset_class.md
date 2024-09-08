---
title: TreeSet
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java TreeSet

Java的`TreeSet`类是Java集合框架中提供树数据结构功能的类。

它扩展了[导航集接口](https://www.dooocs.com/img/java-programming/navigableset "Java NavigableSet Interface")。

![Java TreeSet类实现了NavigableSet接口。](https://cdn.programiz.com/sites/tutorial2program/files/java-treeset.png)

---

## 创建TreeSet

为了创建一个树集，我们必须首先导入`java.util.TreeSet`包。

一旦导入了包，我们可以使用以下代码在Java中创建一个`TreeSet`。
```java
TreeSet<Integer> numbers = new TreeSet<>();
```

在这里，我们创建了一个没有任何参数的`TreeSet`。在这种情况下，`TreeSet`中的元素按自然排序（升序）进行排序。

然而，我们可以通过使用`Comparator`接口来自定义元素的排序。我们将在本教程后面学习如何使用它。

---

## TreeSet的方法

`TreeSet`类提供了各种方法，允许我们对集合执行各种操作。

---

## 将元素插入到TreeSet中

  * `add()` - 将指定的元素插入到集合中
  * `addAll()` - 将指定集合的所有元素插入到集合中

例如，
```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {

        TreeSet<Integer> evenNumbers = new TreeSet<>();

        // 使用add()方法
        evenNumbers.add(2);
        evenNumbers.add(4);
        evenNumbers.add(6);
        System.out.println("TreeSet: " + evenNumbers);

        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(1);

        // 使用addAll()方法
        numbers.addAll(evenNumbers);
        System.out.println("New TreeSet: " + numbers);
    }
}
```

**输出**
```
TreeSet: [2, 4, 6]
New TreeSet: [1, 2, 4, 6]
```

---

## 访问TreeSet元素

要访问树集的元素，我们可以使用`iterator()`方法。为了使用这个方法，我们必须导入`java.util.Iterator`包。例如，
```java
import java.util.TreeSet;
import java.util.Iterator;

class Main {
    public static void main(String[] args) {
        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(6);
        System.out.println("TreeSet: " + numbers);

        // 调用iterator()方法
        Iterator<Integer> iterate = numbers.iterator();
        System.out.print("TreeSet using Iterator: ");
        // 访问元素
        while(iterate.hasNext()) {
            System.out.print(iterate.next());
            System.out.print(", ");
        }
    }
}
```

**输出**
```
TreeSet: [2, 5, 6]
TreeSet using Iterator: 2, 5, 6,
```

---

## 删除元素

  * `remove()` - 从集合中删除指定的元素
  * `removeAll()` - 从集合中删除所有元素

例如，
```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {
        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(6);
        System.out.println("TreeSet: " + numbers);

        // 使用remove()方法
        boolean value1 = numbers.remove(5);
        System.out.println("Is 5 removed? " + value1);

        // 使用removeAll()方法
        boolean value2 = numbers.removeAll(numbers);
        System.out.println("Are all elements removed? " + value2);
    }
}
```

**输出**
```
TreeSet: [2, 5, 6]
Is 5 removed? true
Are all elements removed? true
```

---

## 导航方法

由于`TreeSet`类实现了`NavigableSet`接口，它提供了各种方法来遍历树集的元素。

### 1. first()和last()方法

  * `first()` - 返回集合的第一个元素
  * `last()` - 返回集合的最后一个元素

例如，
```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args)```javascript
### 使用带有布尔值的tailSet：[5, 6]

* * *

### subSet(e1, bv1, e2, bv2)

`subSet()`方法返回e1和e2之间（包括e1）的所有元素。

bv1和bv2是可选参数。bv1的默认值为`true`，bv2的默认值为`false`。

如果将`false`作为bv1传入，该方法返回e1和e2之间不包括`e1`的所有元素。

如果将`true`作为bv2传入，该方法返回e1和e2之间包括`e1`的所有元素。

例如，

```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {
        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(2);
        numbers.add(5);
        numbers.add(4);
        numbers.add(6);
        System.out.println("TreeSet: " + numbers);

        // 使用没有布尔值的subSet()
        System.out.println("使用没有布尔值的subSet(): " + numbers.subSet(4, 6));

        // 使用带有布尔值的subSet()
        System.out.println("使用带有布尔值的subSet(): " + numbers.subSet(4, false, 6, true));
    }
}
```

**输出结果**

```shell
TreeSet: [2, 4, 5, 6]
使用没有布尔值的subSet(): [4, 5]
使用带有布尔值的subSet(): [5, 6]
```

* * *

## 集合操作

`TreeSet`类的方法还可以用于执行各种集合操作。

* * *

### 集合的并集

要执行两个集合之间的并集操作，我们使用`addAll()`方法。例如，

```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {
        TreeSet<Integer> evenNumbers = new TreeSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("TreeSet1: " + evenNumbers);

        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("TreeSet2: " + numbers);

        // 两个集合的并集
        numbers.addAll(evenNumbers);
        System.out.println("并集结果为: " + numbers);
    }
}
```

**输出结果**

```shell
TreeSet1: [2, 4]
TreeSet2: [1, 2, 3]
并集结果为: [1, 2, 3, 4]
```

* * *

### 集合的交集

要执行两个集合之间的交集操作，我们使用`retainAll()`方法。例如，

```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {
        TreeSet<Integer> evenNumbers = new TreeSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("TreeSet1: " + evenNumbers);

        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("TreeSet2: " + numbers);

        // 两个集合的交集
        numbers.retainAll(evenNumbers);
        System.out.println("交集结果为: " + numbers);
    }
}
```

**输出结果**

```shell
TreeSet1: [2, 4]
TreeSet2: [1, 2, 3]
交集结果为: [2]
```

* * *

### 集合的差集

要计算两个集合之间的差集，我们可以使用`removeAll()`方法。例如，

```java
import java.util.TreeSet;

class Main {
    public static void main(String[] args) {
        TreeSet<Integer> evenNumbers = new TreeSet<>();
        evenNumbers.add(2);
        evenNumbers.add(4);
        System.out.println("TreeSet1: " + evenNumbers);

        TreeSet<Integer> numbers = new TreeSet<>();
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        System.out.println("TreeSet2: " + numbers);

        // 两个集合的差集
        numbers.removeAll(evenNumbers);
        System.out.println("差集结果为: " + numbers);
    }
}
```

**输出结果**

```
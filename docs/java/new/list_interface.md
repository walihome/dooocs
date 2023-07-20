# Java List

在Java中，`List`接口是一个有序的集合，允许我们按顺序存储和访问元素。它扩展了`Collection`接口。

* * *

## 实现List的类

由于`List`是一个接口，所以我们无法直接创建它的对象。

为了使用`List`接口的功能，我们可以使用以下这些类：

- [ArrayList](https://www.dooocs.com/img/java-programming/arraylist "Java ArrayList类")
- [LinkedList](https://www.dooocs.com/img/java-programming/linkedlist "Java LinkedList类")
- [Vector](https://www.dooocs.com/img/java-programming/vector "Java Vector类")
- [Stack](https://www.dooocs.com/img/java-programming/stack "Java Stack类")

![在Java中实现List接口的类](https://cdn.programiz.com/sites/tutorial2program/files/Java-list-interface.png)

这些类都定义在Collections框架中，并且实现了`List`接口。

* * *

## 如何使用List？

在Java中，我们必须导入`java.util.List`包才能使用`List`。

```java
// 使用ArrayList实现的List
List<String> list1 = new ArrayList<>();

// 使用LinkedList实现的List
List<String> list2 = new LinkedList<>();
```

在这里，我们创建了名为list1和list2的`ArrayList`和`LinkedList`类的对象。这些对象可以使用`List`接口的功能。

* * *

## List的方法

`List`接口包含了`Collection`接口的所有方法，因为`Collection`是`List`的超接口。

一些常用的在`Collection`接口中，并且也在`List`接口中可用的方法有：

- `add()` - 向列表添加一个元素
- `addAll()` - 将一个列表的所有元素添加到另一个列表中
- `get()` - 从列表中随机访问元素
- `iterator()` - 返回可用于按顺序访问列表元素的迭代器对象
- `set()` - 更改列表的元素
- `remove()` - 从列表中移除一个元素
- `removeAll()` - 从列表中删除所有元素
- `clear()` - 从列表中删除所有元素（比`removeAll()`更高效）
- `size()` - 返回列表的长度
- `toArray()` - 将列表转换为数组
- `contains()` - 如果列表包含指定的元素，则返回`true`

* * *

## List接口的实现

**1. 实现ArrayList类**

```java
import java.util.List;
import java.util.ArrayList;

class Main {

    public static void main(String[] args) {
        // 使用ArrayList类创建列表
        List<Integer> numbers = new ArrayList<>();

        // 向列表中添加元素
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("List: " + numbers);

        // 从列表中访问元素
        int number = numbers.get(2);
        System.out.println("Accessed Element: " + number);

        // 从列表中移除元素
        int removedNumber = numbers.remove(1);
        System.out.println("Removed Element: " + removedNumber);
    }
}
```

**输出结果**

```
List: [1, 2, 3]
Accessed Element: 3
Removed Element: 2
```

要了解更多关于`ArrayList`的信息，请访问[Java ArrayList](https://www.programiz.com/java-programming/arraylist)。

**2. 实现LinkedList类**

```java
import java.util.List;
import java.util.LinkedList;

class Main {

    public static void main(String[] args) {
        // 使用LinkedList类创建列表
        List<Integer> numbers = new LinkedList<>();

        // 向列表中添加元素
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        System.out.println("List: " + numbers);

        // 从列表中访问元素
        int number = numbers.get(2);
        System.out.println("Accessed Element: " + number);

        // 使用indexOf()方法
        int index = numbers.indexOf(2);
        System.out.println("Position of 3 is " + index);

        // 从列表中移除元素
        int removedNumber = numbers.remove(1);
        System.out.println("Removed Element: " + removedNumber);
    }
}
```

**输出结果**

```
List: [1,
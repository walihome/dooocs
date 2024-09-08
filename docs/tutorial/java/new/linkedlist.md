---
title: 文档
colla: true
order: 50
head:
  - - meta
    - name: dooocs
      content: 最详细的文档库
---
# Java LinkedList

Java集合框架的`LinkedList`类提供了链表数据结构（双向链表）的功能。

![具有3个字段Prev，Data和Next的双向链表的单个节点。]（https://cdn.programiz.com/sites/tutorial2program/files/java-doubly-linkedlist.png）
Java双向链表

链表中的每个元素称为**节点**。它由3个字段组成：

* **Prev**-存储列表中前一个元素的地址。对于第一个元素，它是`null`
* **Next**-存储列表中下一个元素的地址。对于最后一个元素，它是`null`
* **Data**-存储实际数据



* * *

##创建Java LinkedList

以下是如何在Java中创建链表：

```
LinkedList <Type> linkedList = new LinkedList <>（）;
```

这里，Type表示链表的类型。例如，

``` java
//创建Integer类型的链表
LinkedList <Integer> linkedList = new LinkedList <>（）;

//创建String类型的链表
LinkedList <String> linkedList = new LinkedList <>（）;
```

* * *

### 示例：在Java中创建LinkedList

``` java
import java.util.LinkedList;

class Main {
  public static void main（String [] args）{

    //创建链接列表
    LinkedList <String> animals = new LinkedList <>（）;

    //将元素添加到LinkedList
    animals.add（"Dog"）;
    animals.add（" Cat"）;
    animals.add（" Cow"）;
    System.out.println（" LinkedList："+ animals）;
  }
}

**输出**
```

LinkedList：[Dog，Cat，Cow]

在上面的示例中，我们创建了一个名为animals的`LinkedList`。

在这里，我们使用`add（）`方法向LinkedList添加元素。我们将在本教程中进一步学习`add（）`方法。

* * *

## Java LinkedList的工作原理

链表中的元素不按顺序存储。相反，它们通过链接（**Prev**和**Next**）分散并连接在一起。

![3个链接列表节点，每个节点使用指针连接到彼此](https://cdn.programiz.com/sites/tutorial2program/files/java-linkedlist-implementation.png)
这里有3个链表中的元素:

* Dog-它是保持null作为前一个地址和以Cat为下一个地址的第一个元素
* Cat-它是保持Dog作为前一个地址和Cow作为下一个地址的第二个元素
* Cow-它是保持Cat作为前一个地址和null作为下一个元素的最后一个元素

要了解更多信息，请访问[LinkedList数据结构]（https://wwww.dooocs.com/img/dsa/linked-list“LinkedList数据结构"）。

* * *

## Java LinkedList的方法

`LinkedList`提供各种方法，允许我们在链表中执行不同的操作。在本教程中，我们将介绍四个常用的LinkedList运算符：

* 添加元素
* 访问元素
* 更改元素
* 删除元素



* * *

### 1.向LinkedList添加元素

我们可以使用`add（）`方法在LinkedList的末尾添加一个元素（节点）。例如，

```java 
import java.util.LinkedList;

class  Main {
  public static void main（String [] args）{
    //创建链接列表
    LinkedList <String> animals = new LinkedList <>（）;

    // add（）方法没有索引参数
    animals.add（"Dog"）;
    animals.add（"Cat"）;
    animals.add（"Cow"）;
    System.out.println（"LinkedList："+动物）;

    //具有索引参数的add（）方法
    animals.add（1，"Horse"）;
    System.out.println（"Updated LinkedList：“+动物）;
  }
}

**输出**
```

LinkedList：[Dog，Cat，Cow]
Updated LinkedList：[Dog，Horse，Cat，Cow]

在上面的示例中，我们创建了一个名为animals的LinkedList。这里，我们使用`add（）`方法向animals添加元素。

请注意语句，
```
animals.add（1，"Horse"）;
```

在这* * *

## 示例：作为Deque的LinkedList

```java
import java.util.LinkedList;
import java.util.Deque;

class Main {
  public static void main(String[] args){
    Deque<String> animals = new LinkedList<>();

    // 在开头添加元素
    animals.add("Cow");
    System.out.println("LinkedList: " + animals);

    animals.addFirst("Dog");
    System.out.println("LinkedList after addFirst(): " + animals);

    // 在末尾添加元素
    animals.addLast("Zebra");
    System.out.println("LinkedList after addLast(): " + animals);

    // 移除第一个元素
    animals.removeFirst();
    System.out.println("LinkedList after removeFirst(): " + animals);

    // 移除最后一个元素
    animals.removeLast();
    System.out.println("LinkedList after removeLast(): " + animals);
  }
}
```

**输出**

```
LinkedList: [Cow]
LinkedList after addFirst(): [Dog, Cow]
LinkedList after addLast(): [Dog, Cow, Zebra]
LinkedList after removeFirst(): [Cow, Zebra]
LinkedList after removeLast(): [Cow]
```

* * *

## 遍历LinkedList

我们可以使用[Java增强for循环](https://www.dooocs.com/img/java-programming/enhanced-for-loop)来遍历LinkedList。例如，

```java
import java.util.LinkedList;

class Main {
    public static void main(String[] args) {
        // 创建一个LinkedList
        LinkedList<String> animals = new LinkedList<>();
        animals.add("Cow");
        animals.add("Cat");
        animals.add("Dog");
        System.out.println("LinkedList: " + animals);

        // 使用forEach循环
        System.out.println("遍历linked list元素:");
        for(String animal: animals) {
            System.out.print(animal);
            System.out.print(", ");
        }
    }
}
```

**输出**

```
LinkedList: [Cow, Cat, Dog]
遍历linked list元素:
Cow, Cat, Dog,
```

* * *

## LinkedList与ArrayList比较

Java的ArrayList和LinkedList都实现了Collections框架中的List接口，但它们之间有一些区别。

LinkedList | ArrayList  
---|---  
实现了`List`、`Queue`和`Deque`接口。 | 实现了`List`接口。  
在单个位置上存储3个值（**前一个地址**，**数据**和**后一个地址**）。 | 在单个位置上存储单个值。  
提供了双向链表的实现。 | 提供了可调整大小的数组实现。  
当添加一个元素时，`prev`和`next`地址会改变。 | 当添加一个元素时，该位置之后的所有元素都会被移动。  
要访问一个元素，我们需要从开头迭代到该元素。 | 可以使用索引随机访问元素。  

* * *

**注意**：我们还可以使用Java中的接口创建LinkedList。例如，

```java
// 使用List创建LinkedList
List<String> animals1 = new LinkedList<>();

// 使用Queue创建LinkedList
Queue<String> animals2 = new LinkedList<>();

// 使用Deque创建LinkedList
Deque<String> animals3 = new LinkedList<>();
```

在这里，如果LinkedList是使用一个接口创建的，那么我们就不能使用其他接口提供的方法。也就是说，animals1不能使用`Queue`和`Deque`接口特定的方法。
```
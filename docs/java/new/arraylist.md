# Java ArrayList

在Java中，我们使用`ArrayList`类来实现**可调整大小的数组**的功能。

它实现了集合框架的`List`接口。

Java ArrayList 实现

* * *

## Java ArrayList Vs Array

在Java中，我们需要在使用数组之前声明数组的大小。一旦数组的大小被声明，很难改变。

为了解决这个问题，我们可以使用`ArrayList`类。它允许我们创建可调整大小的数组。

与数组不同，当我们向其中添加或删除元素时，数组列表可以自动调整其容量。因此，数组列表也被称为**动态数组**。

* * *

## 创建一个ArrayList

在使用`ArrayList`之前，我们首先需要导入`java.util.ArrayList`包。以下是我们在Java中创建数组列表的方法：
    
    
    ArrayList<Type> arrayList= new ArrayList<>();

这里，Type 表示数组列表的类型。例如，
    
    
    // 创建 Integer 类型的数组列表
    ArrayList<Integer> arrayList = new ArrayList<>();
    
    // 创建 String 类型的数组列表
    ArrayList<String> arrayList = new ArrayList<>();

在上面的程序中，我们使用的是 `Integer` 而不是 `int`。这是因为在创建数组列表时无法使用原始类型。相反，我们必须使用相应的包装类。

在这里，`Integer` 是 `int` 的对应包装类。要了解更多信息，请访问[Java包装类](/java-programming/wrapper)。

* * *

### 示例：在Java中创建ArrayList
    
    
```java 
import java.util.ArrayList;
    
    class Main {
      public static void main(String[] args){
        
        // 创建 ArrayList
        ArrayList<String> languages = new ArrayList<>();
        
        // 向 ArrayList 添加元素
        languages.add("Java");
        languages.add("Python");
        languages.add("Swift");
        System.out.println("ArrayList: " + languages);
      }
    }
```

**输出**
    
    
```java 
ArrayList: [Java, Python, Swift]
```

在上面的示例中，我们创建了一个名为 `languages` 的 `ArrayList`。

这里，我们使用了 `add()` 方法来向数组列表中添加元素。我们将在本教程的后面部分详细介绍 `add()` 方法。

* * *

## ArrayList 的基本操作

`ArrayList` 类提供了各种方法来执行数组列表的不同操作。在本教程中，我们将介绍一些常用的数组列表操作：

  * 添加元素
  * 访问元素
  * 更改元素
  * 删除元素



* * *

### 1\. 向 ArrayList 添加元素

要向数组列表添加单个元素，我们使用`ArrayList`类的`add()`方法。例如

```java 
import java.util.ArrayList;
class Main {
  public static void main(String[] args) {
    // 创建 ArrayList
    List languages = new ArrayList<>();
    // 不带索引参数的 add() 方法
    languages.add("Java");
    languages.add("C");
    languages.add("Python");
    System.out.println("ArrayList: " + languages);
  }
}
```
**输出**
    
    
    ArrayList: [Java, C, Python]

在上面的示例中，我们创建了一个名为 `languages` 的 `ArrayList`。这里，我们使用 `add()` 方法向 `languages` 添加元素。

要了解更多信息，请访问[Java ArrayList add()](/java-programming/library/arraylist/add)。

## 在ArrayList中添加元素的其他方法

如何在ArrayList的指定位置添加元素？

我们还可以将**索引号**作为附加参数传递给`add()`方法，以在指定位置添加元素。例如，
    
```java 
// 在索引号 1 处添加 JavaScript
languages.add(1, "JavaScript");

// 在索引号 3 处添加 C++
languages.add(3, "C++");
```
    


如何将集合（set，map）的所有元素添加到数组列表中？

我们还可以使用`addAll()`方法将集合（set，map）的所有元素添加到数组列表中。例如，
    
    
   
    
```java
import java.util.ArrayList;
import java.util.HashSet;

ArrayList<String> animals = new ArrayList<>();

animals.add("Cow");
animals.add("Cat");
animals.add("Dog");
System.out.println("ArrayList: " + animals);

// 使用for-each循环进行迭代
System.out.println("访问单个元素:  ");

for (String language : animals) {
    System.out.print(language);
    System.out.print(", ");
}
```

**输出**
```
ArrayList: [Cow, Cat, Dog]
访问单个元素:
Cow, Cat, Dog,
```

---

## 常见问题

Java中的ArrayList和LinkedList有什么区别？

Java中的`ArrayList`和`LinkedList`之间的主要区别如下：

**ArrayList** | **LinkedList**
---|---
实现了`List`接口 | 实现了`List`、`Queue`和`Deque`接口
只存储一个值 | 存储3个值：数据、前一个地址和后一个地址
提供了可调整大小的数组功能 | 提供了双向链表功能

如何将ArrayList转换为数组？

我们可以使用`toArray()`方法将`ArrayList`转换为数组。例如，

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages = new ArrayList<>();

    // 向ArrayList添加元素
    languages.add("Java");
    languages.add("Python");
    languages.add("C++");
    System.out.println("ArrayList: " + languages);

    // 创建一个新的String类型的数组
    String[] arr = new String[languages.size()];

    // 将ArrayList转换为数组
    languages.toArray(arr);

    System.out.print("Array: ");

    // 访问数组的元素
    for (String item : arr) {
      System.out.print(item + ", ");
    }
  }
}
```

**输出**
```
ArrayList: [Java, Python, C++]
Array: Java, Python, C++,
```

在上面的示例中，`toArray()`方法将`languages` ArrayList转换为数组，并将其存储在`arr`中。要了解更多，请访问[Java ArrayList toArray()](/java-programming/library/arraylist/toarray)。

如何将数组转换为ArrayList？

我们使用`Arrays`类的`asList()`方法。要使用`asList()`，我们必须首先导入`java.util.Arrays`包。例如，

```java
import java.util.ArrayList;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {

    // 创建一个String类型的数组
    String[] arr = { "Java", "Python", "C++" };
    System.out.print("Array: ");

    // 打印数组
    for (String str : arr) {
      System.out.print(str);
      System.out.print(" ");
    }

    // 从数组创建一个ArrayList
    ArrayList<String> languages = new ArrayList<>(Arrays.asList(arr));

    System.out.println("\nArrayList: " + languages);
  }
}
```

**输出**
```
Array: Java Python C++
ArrayList: [Java, Python, C++]
```

在上面的程序中，我们首先创建了一个`String`类型的数组`arr`。注意表达式

```java
Arrays.asList(arr)
```

这里，`asList()`方法将数组转换为ArrayList。

如何在一行中创建和初始化ArrayList？

我们使用`Arrays.asList()`方法在一行中创建和初始化数组列表。例如，

```java
import java.util.ArrayList;
import java.util.Arrays;

class Main {
  public static void main(String[] args) {

    // 创建并初始化ArrayList
    ArrayList<String> languages = new ArrayList<>(Arrays.asList("Java", "Python", "C"));

    System.out.println("ArrayList: " + languages);

  }
}
```

**输出**
```
ArrayList: [Java, Python, C]
```

如何将ArrayList转换为字符串？

我们使用`ArrayList`类的`toString()`方法将ArrayList转换为字符串。例如，

```java
import java.util.ArrayList;

class Main {
  public static void main(String[] args) {
    ArrayList<String> languages = new ArrayList<>();

    // 向ArrayList添加元素
    languages.add("Java");
    languages.add("Python");
    languages.add("Kotlin");
    System.out.println("ArrayList: " + languages);

    // 将ArrayList转换为字符串
    String str = languages.toString();

    System.out.println("String: " + str);
  }
}
```

**输出**
```
ArrayList: [Java, Python, Kotlin]
String: [Java, Python, Kotlin]
```

这里，
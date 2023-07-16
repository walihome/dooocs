# Java堆栈类

Java集合框架有一个名为`Stack`的类，提供了堆栈数据结构的功能。

`Stack`类扩展了`Vector`类。

![Java Stack类扩展Vector类](https://cdn.programiz.com/sites/tutorial2program/files/java-stack.png)


* * *

## 堆栈的实现

在堆栈中，元素按照**后进先出**的方式存储和访问。也就是说，元素被添加到堆栈的顶部，并从堆栈的顶部移除。

![堆栈数据结构的工作原理](https://cdn.programiz.com/sites/tutorial2program/files/stack-implementation.png)


* * *

## 创建堆栈

为了创建一个堆栈，我们首先必须导入`java.util.Stack`包。一旦我们导入了这个包，下面是如何在Java中创建一个堆栈的方法。

```java
Stack<Type> stacks = new Stack<>();
```

这里，`Type`表示堆栈的类型。例如，

```java
// 创建整数类型的堆栈
Stack<Integer> stacks = new Stack<>();

// 创建字符串类型的堆栈
Stack<String> stacks = new Stack<>();
```

* * *

## 堆栈方法

由于`Stack`类扩展了`Vector`类，它继承了所有的`Vector`方法。要了解不同的`Vector`方法，请访问[Java Vector Class](/java-programming/vector "Java Vector Class")。

除了这些方法之外，`Stack`类还包括5个与`Vector`不同的方法。

* * *

### push()方法

要将元素添加到堆栈的顶部，我们使用`push()`方法。例如，

```java
import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals= new Stack<>();

        // 向堆栈中添加元素
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");

        System.out.println("Stack: " + animals);
    }
}
```

**输出**

```
Stack: [Dog, Horse, Cat]
```

* * *

### pop()方法

要从堆栈的顶部移除一个元素，我们使用`pop()`方法。例如，

```java
import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals= new Stack<>();

        // 向堆栈中添加元素
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Initial Stack: " + animals);

        // 移除堆栈中的元素
        String element = animals.pop();
        System.out.println("Removed Element: " + element);
    }
}
```

**输出**

```
Initial Stack: [Dog, Horse, Cat]
Removed Element: Cat
```

* * *

### peek()方法

`peek()`方法返回堆栈顶部的对象。例如，

```java
import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals= new Stack<>();

        // 向堆栈中添加元素
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Stack: " + animals);

        // 从顶部访问元素
        String element = animals.peek();
        System.out.println("Element at top: " + element);
    }
}
```

**输出**

```
Stack: [Dog, Horse, Cat]
Element at top: Cat
```

* * *

### search()方法

要在堆栈中搜索一个元素，我们使用`search()`方法。它返回该元素距离堆栈顶部的位置。例如，

```java
import java.util.Stack;

class Main {
    public static void main(String[] args) {
        Stack<String> animals= new Stack<>();

        // 向堆栈中添加元素
        animals.push("Dog");
        animals.push("Horse");
        animals.push("Cat");
        System.out.println("Stack: " + animals);

        // 搜索一个元素
        int position = animals.search("Horse");
        System.out.println("Position of Horse: " + position);
    }
}
```

**输出**

```
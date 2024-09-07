# Java HashMap

Java集合框架的`HashMap`类提供了哈希表数据结构的功能。它以**键/值**对的形式存储元素。这里，**键**是用于在映射中关联每个**值**的唯一标识符。

`HashMap`类实现了[Map](https://www.dooocs.com/img/java-programming/map)接口。

![Java HashMap implements Map interface](https://cdn.programiz.com/sites/tutorial2program/files/java-hashmap-implementation.png)
Java HashMap 实现

---

## 创建一个HashMap

要创建一个哈希映射，我们首先必须导入`java.util.HashMap`包。一旦导入了该包，我们就可以在Java中创建哈希映射。
    

    // 带有8个容量和0.6负载因子的哈希映射
    HashMap<K, V> numbers = new HashMap<>();

在上面的代码中，我们创建了一个名为numbers的哈希映射。这里，**K**代表键的类型，**V**代表值的类型。例如，
    

    HashMap<String, Integer> numbers = new HashMap<>();

在这里，**键**的类型是`String`，**值**的类型是`Integer`。

---

### 示例1：在Java中创建HashMap
    

    import java.util.HashMap;
    
    class Main {
      public static void main(String[] args) {
    
        // 创建一个哈希映射
        HashMap<String, Integer> languages = new HashMap<>();
    
        // 向哈希映射中添加元素
        languages.put("Java", 8);
        languages.put("JavaScript", 1);
        languages.put("Python", 3);
        System.out.println("HashMap: " + languages);
      }
    }

**输出**
    

    HashMap: {Java=8, JavaScript=1, Python=3}

在上面的示例中，我们创建了一个名为languages的`HashMap`。

在这里，我们使用了`put()`方法将元素添加到该哈希映射中。我们将在本教程的后面部分更详细地学习`put()`方法。

---

## Java HashMap的基本操作

`HashMap`类提供了各种方法来执行哈希映射的不同操作。在本教程中，我们将介绍一些常用的数组列表操作：

  * 添加元素
  * 访问元素
  * 更改元素
  * 删除元素



---

### 1\. 向HashMap添加元素

要向哈希映射中添加单个元素，我们使用`HashMap`类的`put()`方法。例如，
    

    import java.util.HashMap;
    
    class Main {
      public static void main(String[] args) {
    
        // 创建一个哈希映射
        HashMap<String, Integer> numbers = new HashMap<>();
    
        System.out.println("初始 HashMap: " + numbers);
        // 使用 put() 方法添加元素
        numbers.put("One", 1);
        numbers.put("Two", 2);
        numbers.put("Three", 3);
        System.out.println("put() 方法之后的 HashMap: " + numbers);
      }
    }

**输出**
    

    初始 HashMap: {}
    put() 方法之后的 HashMap: {One=1, Two=2, Three=3}

在上面的示例中，我们创建了一个名为numbers的`HashMap`。在这里，我们使用了`put()`方法将元素添加到numbers中。

注意以下语句，
    

    numbers.put("One", 1);

在这里，我们将String值One作为键传递，并将Integer值1作为值传递给`put()`方法。

**推荐阅读**

  * [Java HashMap put()](https://www.dooocs.com/img/java-programming/library/hashmap/put)
  * [Java HashMap putAll()](https://www.dooocs.com/img/java-programming/library/hashmap/putall)
  * [Java HashMap putIfAbsent()](https://www.dooocs.com/img/java-programming/library/hashmap/putifabsent)

---

### 2\. 访问HashMap元素

我们可以使用`get()`方法从哈希映射中访问值。例如，
    

    import java.util.HashMap;
    
    class Main {
      public static void main(String[] args) {
    
        HashMap<Integer, String> languages = new HashMap<>();
        languages.put(1, "Java");
        languages.put(2```
创建HashMap from Other Maps

在Java中，我们还可以从其他map创建一个hashmap。例如，

```java
import java.util.HashMap;
import java.util.TreeMap;

class Main {
  public static void main(String[] args) {

    // create a treemap
    TreeMap<String, Integer> evenNumbers = new TreeMap<>();
    evenNumbers.put("Two", 2);
    evenNumbers.put("Four", 4);
    System.out.println("TreeMap: " + evenNumbers);

    // create hashmap from the treemap
    HashMap<String, Integer> numbers = new HashMap<>(evenNumbers);
    numbers.put("Three", 3);
    System.out.println("HashMap: " + numbers);
  }
}
```

输出结果：

```
TreeMap: {Four=4, Two=2}
HashMap: {Two=2, Three=3, Four=4}
```

在上面的例子中，我们创建了一个名为`evenNumbers`的TreeMap。注意下面这行代码：

```java
numbers = new HashMap<>(evenNumbers)
```

在这里，我们使用`TreeMap`创建了一个名为`numbers`的`HashMap`。要了解更多关于treemap的内容，请访问[Java TreeMap](https://www.dooocs.com/img/java-programming/treemap)。

**注意**：在创建hashmap时，我们可以包含可选参数：**capacity**和**load factor**。例如，

```java
HashMap<K, V> numbers = new HashMap<>(8, 0.6f);
```

这里，

- **8**（容量为8）- 这意味着它可以存储8个条目。
- **0.6f**（负载因子为0.6）- 这意味着当我们的哈希表填满60%时，条目将被移动到原始哈希表大小加倍的新哈希表中。

如果不使用可选参数，则默认**容量**为**16**，默认**负载因子**为**0.75**。
```
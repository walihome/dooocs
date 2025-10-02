---
title: 集合
category: Java
order: 6
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

 ## 📦 集合 Collections

在Java编程中，我们经常需要存储和管理多个数据。**Collection（集合）** 是Java提供的一套用于存储和操作数据组的框架。本章节将介绍三种最常用的集合类型：**Array（数组）**、**Set（集合）** 和 **Map（映射）**。

## 🎯 数组 Array

### 概念 Explanation

**Array（数组）** 是一种固定长度的数据结构，用于存储相同类型的多个元素。数组在创建时必须指定大小，且大小不可改变。数组中的每个元素都有一个**index（索引）**，从0开始计数。

### 代码示例 Code Examples

```java
public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array 声明并初始化数组
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Access array elements 访问数组元素
        System.out.println("First element: " + numbers[0]); // Output: 10
        System.out.println("Third element: " + numbers[2]); // Output: 30
        
        // Modify array element 修改数组元素
        numbers[1] = 25;
        System.out.println("Modified second element: " + numbers[1]); // Output: 25
        
        // Get array length 获取数组长度
        System.out.println("Array length: " + numbers.length); // Output: 5
        
        // Create an empty array 创建空数组
        String[] names = new String[3];
        names[0] = "Alice";
        names[1] = "Bob";
        names[2] = "Charlie";
        
        // Loop through array 遍历数组
        for (int i = 0; i < names.length; i++) {
            System.out.println("Name " + i + ": " + names[i]);
        }
        
        // Enhanced for loop 增强for循环
        for (String name : names) {
            System.out.println("Hello, " + name);
        }
    }
}
```

**二维数组 Two-dimensional Array** 示例：

```java
public class TwoDimensionalArray {
    public static void main(String[] args) {
        // Declare a 2D array 声明二维数组
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // Access elements 访问元素
        System.out.println("Element at [0][0]: " + matrix[0][0]); // Output: 1
        System.out.println("Element at [1][2]: " + matrix[1][2]); // Output: 6
        
        // Loop through 2D array 遍历二维数组
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println(); // New line 换行
        }
    }
}
```

### 练习 Exercises

1. 创建一个包含5个学生成绩的数组，计算并输出平均分
2. 创建一个字符串数组存储一周的星期名称（Monday到Sunday），使用循环输出所有星期
3. 创建一个3x3的二维数组表示井字棋盘，用字符'X'、'O'和空格表示

## 🔢 Set 集合

### 概念 Explanation

**Set（集合）** 是一种不允许重复元素的集合类型。Set会自动去除重复的元素，非常适合需要保证数据唯一性的场景。Java提供了两种常用的Set实现：**HashSet（哈希集合）** 和 **TreeSet（树集合）**。

- **HashSet**：无序存储，查找速度快
- **TreeSet**：自动排序，元素按自然顺序或指定规则排列

### 代码示例 Code Examples

```java
import java.util.HashSet;
import java.util.TreeSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        // Create a HashSet 创建哈希集合
        Set<String> fruits = new HashSet<>();
        
        // Add elements 添加元素
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");
        fruits.add("Apple"); // Duplicate will be ignored 重复元素会被忽略
        
        System.out.println("Fruits set: " + fruits);
        System.out.println("Size: " + fruits.size()); // Output: 3
        
        // Check if element exists 检查元素是否存在
        if (fruits.contains("Banana")) {
            System.out.println("Banana is in the set");
        }
        
        // Remove element 删除元素
        fruits.remove("Orange");
        System.out.println("After removing Orange: " + fruits);
        
        // Loop through Set 遍历集合
        for (String fruit : fruits) {
            System.out.println("Fruit: " + fruit);
        }
        
        // TreeSet example - sorted order 树集合示例 - 排序
        Set<Integer> numbers = new TreeSet<>();
        numbers.add(50);
        numbers.add(10);
        numbers.add(30);
        numbers.add(20);
        
        System.out.println("Sorted numbers: " + numbers); // Output: [10, 20, 30, 50]
    }
}
```

**实际应用场景 Practical Use Case**：

```java
import java.util.HashSet;
import java.util.Set;

public class UniqueVisitors {
    public static void main(String[] args) {
        // Track unique website visitors 追踪唯一网站访客
        Set<String> visitors = new HashSet<>();
        
        // Simulate visitor logs 模拟访客日志
        visitors.add("user123");
        visitors.add("user456");
        visitors.add("user123"); // Same user visits again 同一用户再次访问
        visitors.add("user789");
        visitors.add("user456"); // Duplicate 重复
        
        System.out.println("Total unique visitors: " + visitors.size()); // Output: 3
        System.out.println("Visitor list: " + visitors);
    }
}
```

### 练习 Exercises

1. 创建一个HashSet存储5个城市名称，尝试添加重复的城市，观察结果
2. 使用TreeSet存储一组整数：{15, 3, 9, 1, 12}，输出并观察排序效果
3. 编写程序，从一个包含重复元素的数组中提取所有唯一值并存入Set

## 🗺️ Map 映射

### 概念 Explanation

**Map（映射）** 是一种存储**key-value pair（键值对）** 的数据结构。每个key都是唯一的，并映射到一个value。Map非常适合需要通过某个标识来查找对应数据的场景，比如通过学号查找学生信息，通过用户名查找用户数据等。

常用的Map实现：
- **HashMap**：无序存储，查找速度快
- **TreeMap**：按key自动排序

### 代码示例 Code Examples

```java
import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        // Create a HashMap 创建哈希映射
        Map<String, Integer> studentScores = new HashMap<>();
        
        // Add key-value pairs 添加键值对
        studentScores.put("Alice", 95);
        studentScores.put("Bob", 87);
        studentScores.put("Charlie", 92);
        studentScores.put("Diana", 88);
        
        // Get value by key 通过键获取值
        int aliceScore = studentScores.get("Alice");
        System.out.println("Alice's score: " + aliceScore); // Output: 95
        
        // Update value 更新值
        studentScores.put("Bob", 90); // Bob's score updated to 90
        System.out.println("Bob's updated score: " + studentScores.get("Bob"));
        
        // Check if key exists 检查键是否存在
        if (studentScores.containsKey("Charlie")) {
            System.out.println("Charlie is in the map");
        }
        
        // Check if value exists 检查值是否存在
        if (studentScores.containsValue(88)) {
            System.out.println("Someone scored 88");
        }
        
        // Get map size 获取映射大小
        System.out.println("Total students: " + studentScores.size());
        
        // Remove entry 删除条目
        studentScores.remove("Diana");
        System.out.println("After removing Diana: " + studentScores);
        
        // Loop through Map 遍历映射
        System.out.println("\nAll student scores:");
        for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // Loop through keys only 仅遍历键
        System.out.println("\nStudent names:");
        for (String name : studentScores.keySet()) {
            System.out.println(name);
        }
        
        // Loop through values only 仅遍历值
        System.out.println("\nScores:");
        for (Integer score : studentScores.values()) {
            System.out.println(score);
        }
    }
}
```

**实际应用场景 Practical Use Case**：

```java
import java.util.HashMap;
import java.util.Map;

public class ShoppingCart {
    public static void main(String[] args) {
        // Create shopping cart: product name -> quantity 创建购物车：商品名称->数量
        Map<String, Integer> cart = new HashMap<>();
        
        // Add items to cart 添加商品到购物车
        cart.put("Laptop", 1);
        cart.put("Mouse", 2);
        cart.put("Keyboard", 1);
        
        // Update quantity 更新数量
        cart.put("Mouse", 3); // Change mouse quantity to 3
        
        // Display cart contents 显示购物车内容
        System.out.println("Shopping Cart:");
        double totalPrice = 0;
        
        // Product prices 商品价格
        Map<String, Double> prices = new HashMap<>();
        prices.put("Laptop", 999.99);
        prices.put("Mouse", 25.50);
        prices.put("Keyboard", 79.99);
        
        for (Map.Entry<String, Integer> item : cart.entrySet()) {
            String product = item.getKey();
            int quantity = item.getValue();
            double price = prices.get(product);
            double subtotal = price * quantity;
            
            System.out.println(product + " x" + quantity + " = $" + subtotal);
            totalPrice += subtotal;
        }
        
        System.out.println("Total: $" + totalPrice);
    }
}
```

**TreeMap 排序示例**：

```java
import java.util.Map;
import java.util.TreeMap;

public class TreeMapExample {
    public static void main(String[] args) {
        // TreeMap automatically sorts by key TreeMap自动按键排序
        Map<String, String> phoneBook = new TreeMap<>();
        
        phoneBook.put("Charlie", "555-0103");
        phoneBook.put("Alice", "555-0101");
        phoneBook.put("Bob", "555-0102");
        
        // Output will be sorted alphabetically by name 输出将按名称字母顺序排序
        System.out.println("Phone Book (sorted):");
        for (Map.Entry<String, String> entry : phoneBook.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
    }
}
```

### 练习 Exercises

1. 创建一个Map存储5个国家及其首都（例如：China -> Beijing），实现查询功能
2. 编写程序统计一段文本中每个单词出现的次数（提示：使用Map<String, Integer>）
3. 创建一个学生信息系统，使用Map存储学生ID和姓名，实现添加、查询、删除学生的功能

## 📊 集合类型对比 Collection Types Comparison

| 特性 Feature | Array 数组 | Set 集合 | Map 映射 |
|---|---|---|---|
| **大小 Size** | 固定 Fixed | 可变 Dynamic | 可变 Dynamic |
| **重复元素 Duplicates** | 允许 Allowed | 不允许 Not Allowed | Key不允许，Value允许 |
| **有序性 Order** | 有序 Ordered | 取决于实现 Depends | 取决于实现 Depends |
| **访问方式 Access** | 索引 Index | 遍历 Iteration | 键 Key |
| **适用场景 Use Case** | 固定数量数据 | 唯一元素集合 | 键值对数据 |

## 💡 总结 Summary

本章节学习了Java中三种核心的集合类型：

1. **Array（数组）**：固定大小的数据容器，通过**index（索引）** 快速访问元素，适合存储已知数量的相同类型数据

2. **Set（集合）**：自动去重的集合类型
   - **HashSet**：无序、高效查找
   - **TreeSet**：自动排序
   - 常用方法：`add()`、`remove()`、`contains()`、`size()`

3. **Map（映射）**：存储**key-value pair（键值对）** 的数据结构
   - **HashMap**：无序、快速查找
   - **TreeMap**：按key排序
   - 常用方法：`put()`、`get()`、`remove()`、`containsKey()`、`containsValue()`

**核心英文术语 Key English Terms**：
- **Collection（集合）**
- **Array（数组）**
- **Index（索引）**
- **Set（集合）**
- **Map（映射）**
- **Key-Value Pair（键值对）**
- **HashSet / HashMap（哈希集合/哈希映射）**
- **TreeSet / TreeMap（树集合/树映射）**
- **Duplicate（重复）**
- **Entry（条目）**

掌握这些集合类型是Java编程的基础，它们将在你今后的开发工作中频繁使用！💪
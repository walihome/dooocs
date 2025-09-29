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

# Java入门教程：集合

## 课程大纲 Course Outline

1. **开发环境搭建** Setting Up Development Environment
2. **Hello World**
3. **基本语法** Basic Syntax
4. **数据类型** Data Types
5. **基础运算** Basic Operations
6. **集合** Collections 🗂️
7. **控制流** Control Flow
8. **类、属性、方法** Classes, Attributes, Methods

---

## 集合 Collections

### 概念 Explanation

在Java中，**集合（Collections）** 是用来存储和操作一组对象的数据结构。它们就像现实生活中的容器 🎒，帮助你高效地组织数据。本章节将介绍三种基本集合类型：

- **数组（Array）**：一个固定大小的有序集合，所有元素类型相同。想象成一个有固定数量的抽屉的柜子 🗄️，每个抽屉放一个物品。
- **Set**：一个无序集合，不允许重复元素。就像一群人的唯一身份证集合 🆔，每个人只能出现一次。
- **Map**：一个键值对集合，每个键（Key）映射到一个值（Value）。类似于字典 📖，其中单词（键）对应定义（值）。

使用集合可以简化数据管理，提高代码可读性和效率。在Java中，集合框架位于`java.util`包中。

### 代码示例 Code Examples

以下示例展示如何声明、初始化和使用这些集合。所有代码使用英文变量名和注释，注释中包含中文翻译。

#### 数组 Array

```java
// Declare and initialize an integer array 声明并初始化一个整数数组
int[] numbers = {10, 20, 30, 40, 50};

// Access and modify an element 访问和修改元素
numbers[0] = 15; // Change first element to 15 将第一个元素改为15
int secondElement = numbers[1]; // Get the second element 获取第二个元素

// Print all elements using a loop 使用循环打印所有元素
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element at index " + i + ": " + numbers[i]);
}

// Alternative: enhanced for loop 替代方式：增强for循环
for (int num : numbers) {
    System.out.println("Number: " + num);
}
```

#### Set

Java中常用**HashSet**，它是一个基于哈希表的Set实现。

```java
import java.util.HashSet;
import java.util.Set;

// Create a Set of strings 创建一个字符串Set
Set<String> fruitSet = new HashSet<>();

// Add elements to the Set 向Set中添加元素
fruitSet.add("Apple");
fruitSet.add("Banana");
fruitSet.add("Apple"); // Duplicate, will not be added 重复元素，不会被添加

// Check size and contents 检查大小和内容
int setSize = fruitSet.size(); // Returns 2 返回2
boolean hasApple = fruitSet.contains("Apple"); // Returns true 返回true

// Remove an element 移除元素
fruitSet.remove("Banana");

// Iterate through the Set 遍历Set
for (String fruit : fruitSet) {
    System.out.println("Fruit: " + fruit);
}
```

#### Map

Java中常用**HashMap**，它存储键值对，并提供快速查找。

```java
import java.util.HashMap;
import java.util.Map;

// Create a Map with String keys and Integer values 创建一个键为字符串、值为整数的Map
Map<String, Integer> studentScores = new HashMap<>();

// Add key-value pairs 添加键值对
studentScores.put("Alice", 95);
studentScores.put("Bob", 88);
studentScores.put("Charlie", 92);

// Access a value by key 通过键访问值
int aliceScore = studentScores.get("Alice"); // Returns 95 返回95

// Update a value 更新值
studentScores.put("Bob", 90); // Updates Bob's score 更新Bob的分数

// Check if a key exists 检查键是否存在
boolean hasCharlie = studentScores.containsKey("Charlie"); // Returns true 返回true

// Remove a key-value pair 移除键值对
studentScores.remove("Charlie");

// Iterate through the Map 遍历Map
for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
    String studentName = entry.getKey();
    int score = entry.getValue();
    System.out.println(studentName + "'s score: " + score);
}
```

### 练习 Exercises

完成以下练习来巩固你的知识。尝试自己编写代码，并使用英文变量名和注释。

1. **数组练习**：
   - 创建一个字符串数组，存储5个你喜欢的颜色名称。
   - 打印数组的第三个元素。
   - 修改第一个元素为一个新颜色，并打印整个数组。

   *提示：使用循环来打印所有元素。*

2. **Set练习**：
   - 创建一个**HashSet**来存储整数。
   - 添加数字1, 2, 3, 2（注意重复）。
   - 检查集合是否包含数字3，并打印集合的大小和所有元素。

   *提示：使用增强for循环进行遍历。*

3. **Map练习**：
   - 创建一个**HashMap**，将城市名称（键）映射到人口数量（值）。
   - 添加至少3个城市及其人口。
   - 更新一个城市的人口，然后移除一个城市。
   - 打印剩余的所有城市和人口。

   *提示：使用`entrySet()`方法进行迭代。*

## 总结 Summary

在本章节中，我们探索了Java中的基本集合类型：
- **数组（Array）**：用于存储固定大小的有序数据。
- **Set**：确保元素唯一性，适合去重场景。
- **Map**：通过键快速访问值，适用于映射关系。

关键术语回顾：**Array（数组）**, **Set**, **Map**, **HashSet**, **HashMap**。

集合是Java编程的核心部分，掌握它们将帮助你构建更强大的应用程序。继续练习，你会越来越熟练！🚀 在下一章节中，我们将学习控制流，让程序做出决策。
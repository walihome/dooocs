---
title: 集合
category: $('Edit Fields').item.json.language
order: 6
tag:
  - $('Edit Fields').item.json.tag
head:
  - - meta
    - name: keywords
      content: $('Edit Fields').item.json['meta-content']
---

# 🎮 闯关7：征服Java集合世界！

**Welcome to the Collection Kingdom!** 准备好探索Java中最强大的数据组织工具了吗？根据**帕累托法则**，掌握这3种集合就能解决80%的数据存储问题！

## 🗺️ 课程地图 Course Outline

```java
// Our learning path 我们的学习路径
String[] learningPath = {"Arrays", "Sets", "Maps"};  // Three main collection types 三种主要集合类型
```

---

## 🎯 第一关：数组 Arrays - 你的数据战队

### 什么是数组 What is an Array?
**Array（数组）** 就像一排整齐的储物柜，每个格子都有编号，可以存放相同类型的数据！

```java
// Create an array 创建一个数组
String[] studentNames = {"Alice", "Bob", "Charlie"};  // Array of strings 字符串数组
int[] testScores = {95, 87, 92};                     // Array of integers 整数数组

// Access elements 访问元素
System.out.println(studentNames[0]);  // Output: Alice
System.out.println(testScores[1]);    // Output: 87
```

### 🛠️ 数组操作 Array Operations

```java
// Array length 数组长度
int arrayLength = studentNames.length;  // Get array size 获取数组大小
System.out.println("Array length: " + arrayLength);

// Loop through array 遍历数组
for (int i = 0; i < studentNames.length; i++) {
    System.out.println("Student " + i + ": " + studentNames[i]);
}

// Enhanced for loop 增强型for循环
for (String name : studentNames) {
    System.out.println("Student: " + name);
}
```

---

## 🎯 第二关：Set集合 - 独一无二的收藏家

### 什么是Set What is a Set?
**Set（集合）** 就像你的邮票收藏册 - 每个元素都是**unique（唯一）** 的，没有重复！

```java
import java.util.HashSet;   // Import HashSet 导入HashSet
import java.util.Set;       // Import Set interface 导入Set接口

// Create a Set 创建一个Set
Set<String> uniqueNames = new HashSet<>();  // HashSet implementation HashSet实现

// Add elements 添加元素
uniqueNames.add("Alice");
uniqueNames.add("Bob");
uniqueNames.add("Alice");  // This won't be added! 这个不会被添加！

System.out.println(uniqueNames);  // Output: [Alice, Bob]
```

### 🛠️ Set操作 Set Operations

```java
// Check if element exists 检查元素是否存在
boolean hasAlice = uniqueNames.contains("Alice");  // Returns true 返回true
boolean hasCharlie = uniqueNames.contains("Charlie");  // Returns false 返回false

// Remove element 移除元素
uniqueNames.remove("Bob");

// Set size 集合大小
int setSize = uniqueNames.size();
System.out.println("Set size: " + setSize);
```

---

## 🎯 第三关：Map映射 - 智能字典大师

### 什么是Map What is a Map?
**Map（映射）** 就像一本字典，每个**key（键）** 对应一个**value（值）**！

```java
import java.util.HashMap;  // Import HashMap 导入HashMap
import java.util.Map;      // Import Map interface 导入Map接口

// Create a Map 创建一个Map
Map<String, Integer> studentScores = new HashMap<>();  // Key: String, Value: Integer

// Put key-value pairs 放入键值对
studentScores.put("Alice", 95);
studentScores.put("Bob", 87);
studentScores.put("Charlie", 92);
```

### 🛠️ Map操作 Map Operations

```java
// Get value by key 通过键获取值
int aliceScore = studentScores.get("Alice");  // Returns 95 返回95
System.out.println("Alice's score: " + aliceScore);

// Check if key exists 检查键是否存在
boolean hasBob = studentScores.containsKey("Bob");  // Returns true 返回true

// Remove entry 移除条目
studentScores.remove("Charlie");

// Loop through Map 遍历Map
for (Map.Entry<String, Integer> entry : studentScores.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}
```

---

## 🎮 综合挑战：学生成绩管理系统

```java
import java.util.*;

public class StudentManager {
    public static void main(String[] args) {
        // Arrays for basic info 基础信息数组
        String[] studentNames = {"Alice", "Bob", "Charlie"};
        
        // Set for unique subjects 唯一科目集合
        Set<String> subjects = new HashSet<>();
        subjects.add("Math");
        subjects.add("Science");
        subjects.add("English");
        subjects.add("Math");  // Duplicate won't be added 重复不会被添加
        
        // Map for detailed scores 详细分数映射
        Map<String, Map<String, Integer>> studentRecords = new HashMap<>();
        
        // Initialize records 初始化记录
        for (String name : studentNames) {
            Map<String, Integer> scores = new HashMap<>();
            scores.put("Math", 85 + new Random().nextInt(15));    // Random score 随机分数
            scores.put("Science", 80 + new Random().nextInt(20));
            scores.put("English", 75 + new Random().nextInt(25));
            studentRecords.put(name, scores);
        }
        
        // Display all records 显示所有记录
        System.out.println("=== Student Records ===");
        for (Map.Entry<String, Map<String, Integer>> student : studentRecords.entrySet()) {
            System.out.println("Student: " + student.getKey());
            for (Map.Entry<String, Integer> subject : student.getValue().entrySet()) {
                System.out.println("  " + subject.getKey() + ": " + subject.getValue());
            }
            System.out.println();
        }
    }
}
```

---

## 🏆 学习检查点 Learning Checkpoint

### 费曼测试 Feynman Test
用你自己的话解释：
1. **Array（数组）** 和 **Set（集合）** 的主要区别是什么？
2. 什么时候应该使用 **Map（映射）** 而不是 **Array（数组）**？
3. 为什么 **Set（集合）** 中的元素是唯一的？

### 西蒙分块练习 Simon's Chunking Practice
```java
// 练习1：创建一个整数数组并计算平均值
int[] numbers = {10, 20, 30, 40, 50};
// 你的代码在这里 Your code here

// 练习2：创建一个Set来存储唯一的颜色名称
Set<String> colors = new HashSet<>();
// 你的代码在这里 Your code here

// 练习3：创建一个Map来存储商品价格
Map<String, Double> productPrices = new HashMap<>();
// 你的代码在这里 Your code here
```

---

## 🎉 恭喜通关！
你已经掌握了Java集合的三大核心工具！记住：
- **Array（数组）**：有序、可重复、快速访问
- **Set（集合）**：无序、唯一、快速查找
- **Map（映射）**：键值对、快速检索

**Next Level Preview**：准备好进入"控制流"的世界，学习如何让程序做出智能决策！

💡 **Pro Tip**：在实际编程中，你会经常组合使用这些集合类型来解决复杂问题。多练习，多思考，你就能成为集合大师！

---
*记住：每个Java大师都是从理解这些基础集合开始的。你已经走在正确的道路上了！* 🚀
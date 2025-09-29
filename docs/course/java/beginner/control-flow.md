---
title: 控制流
category: Java
order: 7
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# Java控制流 Control Flow 教程

## 课程大纲 Course Outline

1. 开发环境搭建 Development Environment Setup
2. Hello World 程序
3. 基本语法 Basic Syntax
4. 数据类型 Data Types
5. 基础运算 Basic Operations
6. 集合 Collections
7. **控制流 Control Flow** ← 当前章节
8. 类、属性、方法 Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**Control Flow（控制流）** 是程序执行的顺序和路径。在Java中，我们使用控制流语句来决定程序如何执行：
- **Loop（循环）**：重复执行代码块
- **Conditional Statement（条件语句）**：根据条件选择执行路径

控制流让程序变得智能和高效，能够处理重复任务和做出决策。

---

### 代码示例 Code Examples

#### 1. for循环 For Loop

**For Loop（for循环）** 用于已知循环次数的重复执行。

```java
public class ForLoopExample {
    public static void main(String[] args) {
        // Basic for loop 基本for循环
        System.out.println("Counting from 1 to 5: 从1数到5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Count: " + i + " 计数: " + i);
        }
        
        // Loop through array 遍历数组
        String[] fruits = {"apple", "banana", "orange"};
        System.out.println("\nFruits list 水果列表:");
        for (int i = 0; i < fruits.length; i++) {
            System.out.println("Fruit " + (i + 1) + 
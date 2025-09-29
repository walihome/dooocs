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

# Java集合入门教程 - Collections

## 课程大纲 Course Outline

1. 开发环境搭建 Development Environment Setup
2. Hello World程序 Hello World Program
3. 基本语法 Basic Syntax
4. 数据类型 Data Types
5. 基础运算 Basic Operations
6. **集合 Collections** ⭐ 当前章节
7. 控制流 Control Flow
8. 类、属性、方法 Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**Collections（集合）** 是Java中用于存储和操作多个数据元素的容器。与单个变量只能存储一个值不同，集合可以存储多个相关的数据。Java提供了三种主要的集合类型：

- **Array（数组）**：固定大小的有序集合，可以存储重复元素
- **Set（集合）**：不允许重复元素的集合
- **Map（映射）**：以键值对形式存储数据的集合

### 代码示例 Code Examples

#### 1. Array（数组）

```java
public class ArrayExample {
    public static void main(String[] args) {
        // Declare and initialize an array 声明并初始化数组
        int[] numbers = {10, 20, 30, 40, 50};
        
        // Alternative way to create array 另一种创建数组的方式
        String[] fruits = new String[3];
        fruits[0] = "apple";
        fruits[1] = "banana";
        fruits[2] = "orange";
        
        // Access array elements 访问数组元素
        System.out.println("First number: " + numbers[0]); // 输出：First number: 10
        System.out.println("Array length: " + numbers.length); // 输出：Array
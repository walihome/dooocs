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

# Java 集合 Collections 📚

## 课程大纲 Course Outline

1. **开发环境搭建** Development Environment Setup
2. **Hello World** 
3. **基本语法** Basic Syntax
4. **数据类型** Data Types
5. **基础运算** Basic Operations
6. **集合** Collections ⭐ *当前章节*
7. **控制流** Control Flow
8. **类、属性、方法** Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**Collection（集合）** 是Java中用来存储和管理多个数据的容器。想象一下：
- 📦 **Array（数组）** 就像一个固定大小的储物盒，每个格子都有编号
- 🎯 **Set（集合）** 就像一个不允许重复物品的收纳盒
- 📖 **Map（映射）** 就像一本字典，每个词都对应一个解释

### 代码示例 Code Examples

#### 1. Array（数组） 📦

数组是最基础的集合类型，大小固定，元素有序。

```java
public class ArrayExample {
    public static void main(String[] args) {
        // Declaration and initialization 声明和初始化
        int[] numbers = {10, 20, 30, 40, 50};
        String[] fruits = new String[3]; // Create array with size 3 创建大小为3的数组
        
        // Assign values 赋值
        fruits[0] = "Apple";   // 苹果
        fruits[1] = "Banana";  // 香蕉  
        fruits[2] = "Orange";  // 橙子
        
        // Access elements 访问元素
        System.out.println("First number: " + numbers[0]); // 
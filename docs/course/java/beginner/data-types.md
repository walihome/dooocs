---
title: 数据类型
category: Java
order: 4
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# Java数据类型入门教程 Data Types Tutorial

## 课程大纲 Course Outline

1. 开发环境搭建 Development Environment Setup
2. Hello World程序 Hello World Program
3. 基本语法 Basic Syntax
4. **数据类型 Data Types** ← 当前章节
5. 基础运算 Basic Operations
6. 集合 Collections
7. 控制流 Control Flow
8. 类、属性、方法 Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**Data Types（数据类型）** 是Java中用来定义**Variables（变量）** 可以存储什么类型数据的规范。Java是一种**Strongly Typed Language（强类型语言）**，这意味着每个变量都必须声明其数据类型。

Java中的**Primitive Data Types（基本数据类型）** 包括：
- **Integer Types（整数类型）**：存储整数值
- **Floating-Point Types（浮点数类型）**：存储小数值
- **Character Type（字符类型）**：存储单个字符
- **Boolean Type（布尔类型）**：存储true/false值

### 代码示例 Code Examples

#### 1. 整数 Integer Types

```java
public class IntegerExample {
    public static void main(String[] args) {
        // int - most commonly used integer type 最常用的整数类型
        int age = 25;
        int temperature = -10;
        
        // long - for larger numbers 用于更大的数字
        long population = 7800000000L; // Note the 'L' suffix 注意L后缀
        
        // short - for smaller numbers 用于较小的数字
        short score = 100;
        
        // byte - smallest integer type 最小的整数类型
        byte
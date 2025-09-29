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

# Java数据类型入门教程 📊

## 课程大纲 Course Outline

1. **开发环境搭建** Development Environment Setup
2. **Hello World** Hello World Program
3. **基本语法** Basic Syntax
4. **数据类型** Data Types ⭐ (当前章节)
5. **基础运算** Basic Operations
6. **集合** Collections
7. **控制流** Control Flow
8. **类、属性、方法** Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

在Java中，**Data Type（数据类型）** 是用来定义变量可以存储什么类型数据的规则。就像生活中的容器一样：
- 🥛 杯子装水
- 📦 盒子装物品
- 💰 钱包装钱

Java的数据类型告诉计算机：这个**Variable（变量）** 应该装什么类型的数据！

Java有两大类数据类型：
- **Primitive Types（基本数据类型）**：直接存储值
- **Reference Types（引用数据类型）**：存储对象的引用

### 代码示例 Code Examples

#### 1. 整数 Integer Types 🔢

Java提供了多种整数类型，用于存储不同范围的整数：

```java
public class IntegerExample {
    public static void main(String[] args) {
        // byte: -128 to 127 (8位)
        byte smallNumber = 100;
        System.out.println("Byte value: " + smallNumber); // 字节值
        
        // short: -32,768 to 32,767 (16位)
        short mediumNumber = 30000;
        System.out.println("Short value: " + mediumNumber); // 短整型值
        
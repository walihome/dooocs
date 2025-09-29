---
title: 基础运算
category: Java
order: 5
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# Java基础运算教程 📊

## 课程大纲 Course Outline

1. ✅ 开发环境搭建
2. ✅ Hello World
3. ✅ 基本语法
4. ✅ 数据类型
5. 🎯 **基础运算** ← 当前章节
6. 🔜 集合
7. 🔜 控制流
8. 🔜 类、属性、方法

---

## 章节内容 Chapter Content

### 概念 Explanation

**Operators（运算符）** 是Java中用来执行各种计算和操作的符号。就像数学中的加减乘除符号一样，Java提供了丰富的运算符来处理数据。

::: tip 💡 学习提示
运算符就像是数据之间的"桥梁"，它们帮助我们对数据进行各种操作和比较！
:::

### 1. 赋值运算 Assignment Operations

**Assignment Operator（赋值运算符）** 用于将值分配给变量。

```java
public class AssignmentExample {
    public static void main(String[] args) {
        // Basic assignment 基本赋值
        int number = 10;
        String name = "Java";
        
        // Compound assignment operators 复合赋值运算符
        int value = 5;
        value += 3;  // value = value + 3, result: 8
        value -= 2;  // value = value - 2, result: 6
        value *= 4;  // value = value * 4, result: 24
        value /= 3;  // value = value / 3, result: 8
        value %= 3;  // value = value % 3, result: 2
        
        System.out.println("Final value: " + value); // 输
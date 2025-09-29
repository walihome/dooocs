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

# Java基础运算教程 Basic Operations in Java

## 课程大纲 Course Outline

1. 开发环境搭建 Development Environment Setup
2. Hello World
3. 基本语法 Basic Syntax
4. 数据类型 Data Types
5. **基础运算 Basic Operations** ← 当前章节
6. 集合 Collections
7. 控制流 Control Flow
8. 类、属性、方法 Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**基础运算 Basic Operations** 是编程中处理数据的基本方式。Java提供了四种主要的运算类型：

- **Assignment Operator（赋值运算符）**：用于给变量赋值
- **Arithmetic Operators（算术运算符）**：执行数学计算
- **Comparison Operators（比较运算符）**：比较两个值的关系
- **Logical Operators（逻辑运算符）**：处理布尔逻辑

### 代码示例 Code Examples

#### 1. 赋值运算 Assignment Operations

```java
public class AssignmentExample {
    public static void main(String[] args) {
        // Basic assignment 基本赋值
        int number = 10;
        String name = "Java";
        
        // Compound assignment operators 复合赋值运算符
        int score = 100;
        score += 20;    // score = score + 20, result: 120
        score -= 15;    // score = score - 15, result: 105
        score *= 2;     // score = score * 2, result: 210
        score /= 3;     // score = score / 3, result: 70
        score %= 8;     // score = score % 8, result: 6
        
        System.out.println("Final score: " + score); // 输
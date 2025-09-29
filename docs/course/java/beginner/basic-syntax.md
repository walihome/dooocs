---
title: 基本语法
category: Java
order: 3
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# Java基本语法 Basic Syntax 📝

## 课程大纲 Course Outline

1. 开发环境搭建 Development Environment Setup
2. Hello World
3. **基本语法 Basic Syntax** ⭐ *当前章节*
4. 数据类型 Data Types
5. 基础运算 Basic Operations
6. 集合 Collections
7. 控制流 Control Flow
8. 类、属性、方法 Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

在这个章节中，我们将学习Java的基础语法规则。就像学习任何语言一样，我们需要先掌握基本的语法结构，包括如何定义**Variables（变量）**、如何输出信息、进行基本计算，以及如何添加**Comments（注释）**和**Log（日志）**。

想象一下，Java语法就像是建房子的基础框架 🏗️ - 只有掌握了这些基本规则，我们才能构建更复杂的程序！

### 代码示例 Code Examples

#### 1. 定义变量 Variable Definition

在Java中，我们需要先声明**Variable Type（变量类型）**，然后给**Variable（变量）**命名：

```java
public class BasicSyntax {
    public static void main(String[] args) {
        // Define variables 定义变量
        int age = 25;                    // Integer variable 整数变量
        double price = 99.99;            // Double variable 双精度浮点变量
        String name = "Alice";           // String variable 字符串变量
        boolean isStudent = true;        // Boolean variable 布尔变量
        
        // Variables without initial values 未初始化的变量
        int count;                       // Declaration only 仅声
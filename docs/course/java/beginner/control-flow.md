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

# 控制流 Control Flow 🚦

## 课程大纲 Course Outline

1. **开发环境搭建** Development Environment Setup
2. **Hello World** Hello World Program
3. **基本语法** Basic Syntax
4. **数据类型** Data Types
5. **基础运算** Basic Operations
6. **集合** Collections
7. **控制流** Control Flow ⭐ *当前章节*
8. **类、属性、方法** Classes, Properties, Methods

---

## 章节内容 Chapter Content

### 概念 Explanation

**Control Flow（控制流）** 是程序执行的顺序和路径。就像交通信号灯🚦控制车辆行驶方向一样，控制流语句决定了代码的执行顺序。

Java中的三种主要控制流：
- **Conditional Statements（条件语句）**：根据条件决定是否执行代码
- **Loop Statements（循环语句）**：重复执行代码块
- **Jump Statements（跳转语句）**：改变程序执行流程

### 代码示例 Code Examples

#### 1. if语法 - Conditional Statements 🤔

**if statement（if语句）** 用于根据条件执行不同的代码块。

```java
public class ConditionalExample {
    public static void main(String[] args) {
        int age = 18;
        int score = 85;
        
        // Basic if statement 基本if语句
        if (age >= 18) {
            System.out.println("You are an adult!"); // 你是成年人！
        }
        
        // if-else statement if-else语句
        if (score >= 90) {
            System.out.println("Excellent!"); // 优秀！
        } else {
            System.out.println("Good job!"); // 
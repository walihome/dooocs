---
title: 类、属性、方法
category: Java
order: 8
tag: Java教程
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

# Java入门教程：类、属性、方法 Chapter: Classes, Fields, and Methods

## 课程大纲 Course Outline

1. 开发环境搭建 Development Environment Setup
2. Hello World
3. 基本语法 Basic Syntax
4. 数据类型 Data Types
5. 基础运算 Basic Operations
6. 集合 Collections
7. 控制流 Control Flow
8. **类、属性、方法 Classes, Fields, and Methods** ← 当前章节

---

## 章节内容 Chapter Content

### 概念 Explanation

**Class（类）** 是Java中最基本的构建块，它是创建对象的模板或蓝图。一个类可以包含：
- **Fields（字段/属性）**：存储对象的状态信息
- **Methods（方法）**：定义对象可以执行的行为
- **Access Modifiers（访问修饰符）**：控制类成员的可见性和访问权限

### 代码示例 Code Examples

#### 1. 定义一个类 Defining a Class

```java
// Define a basic Student class 定义一个基本的学生类
public class Student {
    // Class body will be filled with fields and methods
    // 类体将填充字段和方法
}
```

#### 2. 定义类字段 Defining Class Fields

```java
public class Student {
    // Instance fields 实例字段
    private String name;           // Student name 学生姓名
    private int age;              // Student age 学生年龄
    private String studentId;     // Student ID 学生学号
    private double gpa;           // Grade Point Average 平均绩点
    
    // Static field 静态字段
    private static int totalStudents = 0;  // Total number of students 学生总数
}
```

#### 3. 定义类的
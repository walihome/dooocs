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

# Java入门教程：类、属性、方法

## 课程大纲 Course Outline
- 开发环境搭建 Development Environment Setup
- Hello World 程序 Hello World Program
- 基本语法 Basic Syntax
- 数据类型 Data Types
- 基础运算 Basic Operations
- 集合 Collections
- 控制流 Control Flow
- **类、属性、方法 Classes, Attributes, Methods** 🧱 *（当前章节）*

---

## 章节内容：类、属性、方法 Chapter Content: Classes, Attributes, Methods

### 概念 Explanation
在Java中，**Class（类）** 是面向对象编程的基本构建块，就像一个蓝图 🏗️，用于创建对象。**Attribute（属性）** 是类中的变量，存储对象的状态；**Method（方法）** 是类中的函数，定义对象的行为。**Access Level（访问等级）** 控制这些属性和方法的可见性，确保代码的封装性和安全性。

想象一下，类就像一辆汽车的蓝图，属性是颜色和速度，方法是启动和停止引擎。访问等级决定了谁可以“看到”和“修改”这些部分。

### 代码示例 Code Examples
以下是一个简单的Java类示例，展示如何定义类、属性、方法，以及设置访问等级。所有代码使用英文命名和双语注释。

```java
// Define a class named 'Car' 定义一个名为'Car'的类
public class Car {
    // Define class fields (attributes) with different access levels 定义类字段（属性）并设置不同访问等级
    public String color;        // Public field: accessible from anywhere 公共字段：任何地方都可访问
    private int speed;          // Private field: only accessible within this class 私有字段：仅本类内可访问
    protected String brand;     // Protected field: accessible within package and subclasses 受保护字段：包内和子类可访问

    // Define a method to set the speed 定义一个设置速度的方法
    public void setSpeed(int newSpeed) {
        // Use 'this' keyword to refer to the current object's field 使用'this'关键字引用当前对象的字段
        this.speed = newSpeed;
        System.out.println("Speed set to: " + newSpeed + " km/h 速度设置为：" + newSpeed + " 公里/小时");
    }

    // Define a method to get the speed (with private access) 定义一个获取速度的方法（使用私有访问）
    private int getSpeed() {
        return speed;
    }

    // Define a public method to display car info 定义一个公共方法来显示汽车信息
    public void displayInfo() {
        System.out.println("Car Brand: " + brand + " 汽车品牌：" + brand);
        System.out.println("Car Color: " + color + " 汽车颜色：" + color);
        // Call private method within the class 在类内调用私有方法
        System.out.println("Current Speed: " + getSpeed() + " km/h 当前速度：" + getSpeed() + " 公里/小时");
    }
}

// Main class to test the Car class 主类用于测试Car类
public class Main {
    public static void main(String[] args) {
        // Create an object of Car class 创建Car类的对象
        Car myCar = new Car();
        
        // Set fields (attributes) 设置字段（属性）
        myCar.color = "Red";        // Public field: directly accessible 公共字段：可直接访问
        myCar.brand = "Toyota";     // Protected field: accessible here if in same package 受保护字段：同包内可访问
        
        // Call methods 调用方法
        myCar.setSpeed(60);         // Public method: accessible 公共方法：可访问
        myCar.displayInfo();        // Public method: accessible 公共方法：可访问
        
        // Note: myCar.speed is private, so this would cause an error if uncommented:
        // System.out.println(myCar.speed); // Error: speed has private access 错误：speed为私有访问
    }
}
```

**输出示例 Output Example:**
```
Speed set to: 60 km/h 速度设置为：60 公里/小时
Car Brand: Toyota 汽车品牌：Toyota
Car Color: Red 汽车颜色：Red
Current Speed: 60 km/h 当前速度：60 公里/小时
```

### 练习 Exercises
完成以下练习来巩固知识。使用英文变量名和方法名，并在代码中添加双语注释。

1. **基础练习**：定义一个名为 `Student` 的类，包含以下内容：
   - 公共属性：**name**（姓名）
   - 私有属性：**grade**（成绩）
   - 一个公共方法 `setGrade` 来设置成绩，并打印一条消息
   - 一个公共方法 `displayStudentInfo` 来显示学生信息
   - 在主类中创建对象并测试方法

2. **访问等级挑战**：修改 `Student` 类，添加一个受保护属性 **studentId**（学号）。在另一个类（如同包下的 `School` 类）中尝试访问它，观察访问限制。

3. **综合应用**：创建一个 `BankAccount` 类，包含私有属性 **balance**（余额），以及公共方法 `deposit`（存款）和 `withdraw`（取款）。确保取款方法检查余额是否充足。

**示例代码框架 Example Code Framework for Exercise 1:**
```java
public class Student {
    // Add fields and methods here 在此添加字段和方法
}

public class Main {
    public static void main(String[] args) {
        // Test your code here 在此测试代码
    }
}
```

## 总结 Summary
在本章节中，我们学习了Java中面向对象编程的核心概念：
- **Class（类）**：作为对象的蓝图，使用 `class` 关键字定义。
- **Attribute（属性）**：类中的变量，用于存储数据，可以设置不同访问等级。
- **Method（方法）**：类中的函数，定义行为，使用访问修饰符控制可见性。
- **Access Level（访问等级）**：包括 **public**（公共）、**private**（私有）、**protected**（受保护），用于实现封装。

关键术语回顾：
- **Class（类）** 🏗️
- **Attribute / Field（属性 / 字段）** 📊
- **Method（方法）** ⚙️
- **Access Modifier（访问修饰符）** 🔒
- **Object（对象）** 🎯

通过实践这些概念，您已经迈出了构建复杂Java应用的第一步！继续练习以加深理解。🚀
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

# Java入门教程：基础运算

## 课程大纲 Course Outline
- 开发环境搭建 Development Environment Setup
- Hello World
- 基本语法 Basic Syntax
- 数据类型 Data Types
- **基础运算 Basic Operations**（当前章节）
- 集合 Collections
- 控制流 Control Flow
- 类、属性、方法 Classes, Attributes, Methods

---

## 章节内容 Chapter Content: 基础运算

### 概念 Explanation
在本章节中，我们将学习Java中的基础运算，这些是编程的核心构建块，就像数学中的加减乘除一样简单但重要！✨ 我们将覆盖：
- **Assignment（赋值）**：将值存储到变量中
- **Arithmetic Operations（数学操作）**：进行加减乘除等计算
- **Comparison Operations（比较运算）**：比较值的大小或相等性
- **Logical Operations（逻辑运算）**：组合多个条件，用于决策

想象一下，这些运算就像厨房里的工具：赋值是往碗里放食材，数学操作是搅拌混合，比较是尝味道判断咸淡，逻辑运算是决定是否加盐！🍳

### 代码示例 Code Examples
所有代码示例都使用英文变量名和注释，注释格式为 `// English comment 中文翻译`，以帮助您同时学习编程和计算机英语。

#### 1. 赋值 Assignment
赋值是将一个值存储到变量中的过程。在Java中，我们使用 `=` 运算符。
```java
public class BasicOperations {
    public static void main(String[] args) {
        // Assignment examples 赋值示例
        int number = 5; // Assign 5 to variable 'number' 将5赋给变量number
        double price = 10.99; // Assign a decimal value 赋值一个小数值
        String message = "Hello"; // Assign a text string 赋值一个文本字符串
        
        System.out.println("Number: " + number); // Output: Number: 5
        System.out.println("Price: " + price); // Output: Price: 10.99
        System.out.println("Message: " + message); // Output: Message: Hello
    }
}
```

#### 2. 数学操作 Arithmetic Operations
数学操作包括加法、减法、乘法、除法和求余（模运算）。这些操作使用标准运算符。
```java
public class ArithmeticExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        // Addition 加法
        int sum = a + b; // Calculate sum 计算和
        System.out.println("Sum: " + sum); // Output: Sum: 13
        
        // Subtraction 减法
        int difference = a - b; // Calculate difference 计算差
        System.out.println("Difference: " + difference); // Output: Difference: 7
        
        // Multiplication 乘法
        int product = a * b; // Calculate product 计算乘积
        System.out.println("Product: " + product); // Output: Product: 30
        
        // Division 除法
        int quotient = a / b; // Calculate quotient (integer division) 计算商（整数除法）
        System.out.println("Quotient: " + quotient); // Output: Quotient: 3
        
        // Modulus 求余
        int remainder = a % b; // Calculate remainder 计算余数
        System.out.println("Remainder: " + remainder); // Output: Remainder: 1
        
        // Note: For decimal division, use double or float 注意：对于小数除法，使用double或float类型
        double decimalQuotient = (double) a / b; // Cast to double for precise result 转换为double以获取精确结果
        System.out.println("Decimal Quotient: " + decimalQuotient); // Output: Decimal Quotient: 3.333...
    }
}
```

#### 3. 比较运算 Comparison Operations
比较运算用于比较两个值，返回布尔值（true或false）。常用运算符包括等于、大于、小于等。
```java
public class ComparisonExample {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        
        // Equal to 等于
        boolean isEqual = (x == y); // Check if x equals y 检查x是否等于y
        System.out.println("Is x equal to y? " + isEqual); // Output: Is x equal to y? false
        
        // Not equal to 不等于
        boolean notEqual = (x != y); // Check if x is not equal to y 检查x是否不等于y
        System.out.println("Is x not equal to y? " + notEqual); // Output: Is x not equal to y? true
        
        // Greater than 大于
        boolean greater = (x > y); // Check if x is greater than y 检查x是否大于y
        System.out.println("Is x greater than y? " + greater); // Output: Is x greater than y? false
        
        // Less than 小于
        boolean less = (x < y); // Check if x is less than y 检查x是否小于y
        System.out.println("Is x less than y? " + less); // Output: Is x less than y? true
        
        // Greater than or equal to 大于等于
        boolean greaterOrEqual = (x >= y); // Check if x is greater than or equal to y 检查x是否大于或等于y
        System.out.println("Is x greater or equal to y? " + greaterOrEqual); // Output: Is x greater or equal to y? false
        
        // Less than or equal to 小于等于
        boolean lessOrEqual = (x <= y); // Check if x is less than or equal to y 检查x是否小于或等于y
        System.out.println("Is x less or equal to y? " + lessOrEqual); // Output: Is x less or equal to y? true
    }
}
```

#### 4. 逻辑运算 Logical Operations
逻辑运算用于组合多个布尔条件，常用运算符包括AND（&&）和OR（||）。这些在控制流中非常有用，比如在if语句中。
```java
public class LogicalExample {
    public static void main(String[] args) {
        boolean condition1 = true;
        boolean condition2 = false;
        
        // Logical AND 逻辑与
        boolean andResult = condition1 && condition2; // True only if both are true 仅当两者都为真时结果为真
        System.out.println("AND Result: " + andResult); // Output: AND Result: false
        
        // Logical OR 逻辑或
        boolean orResult = condition1 || condition2; // True if at least one is true 如果至少一个为真则结果为真
        System.out.println("OR Result: " + orResult); // Output: OR Result: true
        
        // Practical example with comparisons 结合比较运算的实用示例
        int age = 20;
        boolean hasLicense = true;
        
        // Check if age is over 18 AND has license 检查年龄是否超过18岁并且有驾照
        boolean canDrive = (age >= 18) && hasLicense; // Combine conditions 组合条件
        System.out.println("Can drive? " + canDrive); // Output: Can drive? true
        
        // Check if age is under 16 OR over 65 检查年龄是否小于16岁或超过65岁
        boolean isEligibleForDiscount = (age < 16) || (age > 65); // Use OR for multiple conditions 使用OR处理多个条件
        System.out.println("Eligible for discount? " + isEligibleForDiscount); // Output: Eligible for discount? false
    }
}
```

### 练习 Exercises
通过以下练习题巩固所学知识。尝试自己编写代码并运行！💻 每个练习都包含提示，使用英文变量名和注释。

#### 练习 1: 基础数学运算
写一个Java程序，计算两个整数的和、差、积、商和余数，并输出结果。
- 提示：定义两个变量，例如 `int num1 = 15;` 和 `int num2 = 4;`，然后使用数学运算符。
- 示例代码框架：
```java
public class Exercise1 {
    public static void main(String[] args) {
        // Define two integers 定义两个整数
        int num1 = 15;
        int num2 = 4;
        
        // Calculate and print results 计算并打印结果
        // Your code here 你的代码在这里
    }
}
```

#### 练习 2: 比较和逻辑运算
写一个程序，检查一个数字是否在1到100之间（包括1和100），并使用逻辑运算符组合条件。
- 提示：使用比较运算符（如 `>=` 和 `<=`）和逻辑AND（`&&`）。
- 示例代码框架：
```java
public class Exercise2 {
    public static void main(String[] args) {
        int number = 50; // Change this value to test 更改此值进行测试
        
        // Check if number is between 1 and 100 inclusive 检查数字是否在1到100之间（包括）
        // Your code here 你的代码在这里
        // Expected output for number=50: "Is number between 1 and 100? true"
    }
}
```

#### 练习 3: 综合应用
创建一个程序，模拟简单登录检查：如果用户名是 "admin" 且密码是 "1234"，则输出 "Login successful"；否则输出 "Login failed"。
- 提示：使用字符串比较（`equals` 方法，例如 `username.equals("admin")`）和逻辑AND。
- 示例代码框架：
```java
public class Exercise3 {
    public static void main(String[] args) {
        String username = "admin";
        String password = "1234";
        
        // Check login credentials 检查登录凭据
        // Your code here 你的代码在这里
    }
}
```

---

## 总结 Summary
在本章节中，我们学习了Java基础运算的核心概念，这些是编程的基石！🎯 让我们回顾关键点：

- **Assignment（赋值）**：使用 `=` 将值存储到变量中，例如 `int x = 5;`。
- **Arithmetic Operations（数学操作）**：包括加法（`+`）、减法（`-`）、乘法（`*`）、除法（`/`）和求余（`%`）。注意整数除法会截断小数部分。
- **Comparison Operations（比较运算）**：返回布尔值，包括等于（`==`）、不等于（`!=`）、大于（`>`）、小于（`<`）等。
- **Logical Operations（逻辑运算）**：用于组合条件，AND（`&&`）要求所有条件为真，OR（`||`）要求至少一个条件为真。

重要专业术语强调：
- **Variable（变量）**：存储数据的容器。
- **Operator（运算符）**：用于执行操作的符号，如 `+` 或 `==`。
- **Boolean（布尔）**：一种数据类型，只有 `true` 或 `false` 两个值。

通过练习，您已经应用了这些概念来解决实际问题。继续练习以加深理解！在下一章中，我们将探索集合，学习如何管理一组数据。🚀
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

 ## **For 循环 For Loop**

### **概念 Explanation**

**For Loop（for 循环）** 是一种用于重复执行代码块的控制结构。当你知道需要执行多少次循环时，for 循环是最佳选择。它就像告诉程序："请帮我重复做这件事 N 次" 🔄

For 循环由三个部分组成：
- **Initialization（初始化）**：设置循环起点
- **Condition（条件）**：判断是否继续循环
- **Update（更新）**：每次循环后的变化

### **代码示例 Code Examples**

**基础 for 循环**

```java
// Print numbers from 1 to 5 打印 1 到 5 的数字
for (int i = 1; i <= 5; i++) {
    System.out.println("Current number: " + i);
}

// Output 输出:
// Current number: 1
// Current number: 2
// Current number: 3
// Current number: 4
// Current number: 5
```

**遍历数组 Traversing Array**

```java
// Create an array 创建数组
String[] fruits = {"Apple", "Banana", "Orange", "Grape"};

// Loop through array 遍历数组
for (int i = 0; i < fruits.length; i++) {
    System.out.println("Fruit " + (i + 1) + ": " + fruits[i]);
}
```

**增强型 for 循环 Enhanced For Loop（For-Each）**

```java
// Enhanced for loop - easier way to traverse 增强型 for 循环 - 更简单的遍历方式
String[] colors = {"Red", "Green", "Blue"};

for (String color : colors) {
    System.out.println("Color: " + color);
}
```

**嵌套 for 循环 Nested For Loop**

```java
// Print a multiplication table 打印乘法表
for (int i = 1; i <= 3; i++) {
    for (int j = 1; j <= 3; j++) {
        System.out.print(i + " x " + j + " = " + (i * j) + "  ");
    }
    System.out.println(); // New line 换行
}
```

### **练习 Exercises**

**练习 1：数字求和**
编写一个 for 循环，计算 1 到 100 之间所有数字的总和。

```java
// Your code here 你的代码
int sum = 0;
// TODO: Write for loop to calculate sum
```

**练习 2：倒序打印**
使用 for 循环打印 10 到 1 的数字（倒序）。

**练习 3：数组查找**
创建一个整数数组 `{10, 20, 30, 40, 50}`，使用 for 循环查找数字 30，并打印它的索引位置。

---

## **While 循环 While Loop**

### **概念 Explanation**

**While Loop（while 循环）** 是另一种重复执行代码的方式。与 for 循环不同，while 循环适合在"不确定需要循环多少次"的情况下使用。它会持续执行，直到条件变为 false 🔁

语法结构：
```
while (condition) {
    // code block 代码块
}
```

**Do-While Loop（do-while 循环）** 是 while 的变体，它保证代码块至少执行一次，因为条件判断在代码块执行之后。

### **代码示例 Code Examples**

**基础 while 循环**

```java
// Count from 1 to 5 using while loop 使用 while 循环从 1 数到 5
int counter = 1;

while (counter <= 5) {
    System.out.println("Counter: " + counter);
    counter++; // Increment counter 增加计数器
}
```

**用户输入验证 User Input Validation**

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);
int number = 0;

// Keep asking until user enters a positive number 持续询问直到用户输入正数
while (number <= 0) {
    System.out.print("Enter a positive number: ");
    number = scanner.nextInt();
    
    if (number <= 0) {
        System.out.println("Invalid! Please try again.");
    }
}

System.out.println("You entered: " + number);
```

**Do-While 循环示例**

```java
// Do-while ensures code runs at least once do-while 确保代码至少执行一次
int count = 0;

do {
    System.out.println("This will print at least once!");
    count++;
} while (count < 0); // Condition is false, but code already ran 条件为假，但代码已经运行了
```

**无限循环与 break Infinite Loop with Break**

```java
int attempts = 0;

while (true) { // Infinite loop 无限循环
    attempts++;
    System.out.println("Attempt: " + attempts);
    
    if (attempts >= 3) {
        System.out.println("Max attempts reached! 达到最大尝试次数！");
        break; // Exit loop 退出循环
    }
}
```

### **练习 Exercises**

**练习 1：猜数字游戏**
使用 while 循环创建一个简单的猜数字游戏。程序随机生成 1-10 之间的数字，用户持续猜测直到猜对为止。

```java
import java.util.Random;
import java.util.Scanner;

Random random = new Random();
int secretNumber = random.nextInt(10) + 1; // Generate 1-10
// TODO: Write while loop for guessing game
```

**练习 2：倒计时**
使用 while 循环创建一个从 10 倒数到 1 的倒计时，最后打印 "Blast off! 发射！"。

**练习 3：Do-While 实践**
使用 do-while 循环创建一个菜单系统，至少显示一次菜单选项。

---

## **If 语句 If Statement**

### **概念 Explanation**

**If Statement（if 语句）** 是程序做决策的方式。它根据条件判断来选择执行哪段代码，就像现实生活中的"如果...那么..."逻辑 🤔

If 语句的三种形式：
- **If**：单一条件判断
- **If-Else**：二选一
- **If-Else If-Else**：多条件判断

### **代码示例 Code Examples**

**基础 if 语句**

```java
int age = 18;

// Simple if statement 简单 if 语句
if (age >= 18) {
    System.out.println("You are an adult. 你是成年人。");
}
```

**If-Else 语句**

```java
int temperature = 25;

// If-else statement if-else 语句
if (temperature > 30) {
    System.out.println("It's hot! Drink water! 天气很热！多喝水！");
} else {
    System.out.println("Weather is comfortable. 天气舒适。");
}
```

**If-Else If-Else 多条件判断**

```java
int score = 85;

// Multiple conditions 多重条件
if (score >= 90) {
    System.out.println("Grade: A - Excellent! 等级：A - 优秀！");
} else if (score >= 80) {
    System.out.println("Grade: B - Good! 等级：B - 良好！");
} else if (score >= 70) {
    System.out.println("Grade: C - Pass 等级：C - 及格");
} else {
    System.out.println("Grade: F - Need improvement 等级：F - 需要改进");
}
```

**逻辑运算符 Logical Operators**

```java
int age = 25;
boolean hasLicense = true;

// AND operator (&&) - both conditions must be true 与运算符 - 两个条件都必须为真
if (age >= 18 && hasLicense) {
    System.out.println("You can drive! 你可以开车！");
}

// OR operator (||) - at least one condition must be true 或运算符 - 至少一个条件为真
boolean isWeekend = false;
boolean isHoliday = true;

if (isWeekend || isHoliday) {
    System.out.println("No work today! 今天不用上班！");
}

// NOT operator (!) - reverses the condition 非运算符 - 反转条件
boolean isRaining = false;

if (!isRaining) {
    System.out.println("Let's go outside! 我们出去吧！");
}
```

**嵌套 if 语句 Nested If Statement**

```java
int money = 50;
boolean hasCard = true;

// Nested if statements 嵌套 if 语句
if (money >= 30) {
    if (hasCard) {
        System.out.println("Purchase with card 用卡支付");
    } else {
        System.out.println("Purchase with cash 用现金支付");
    }
} else {
    System.out.println("Not enough money 钱不够");
}
```

**三元运算符 Ternary Operator**

```java
// Shorthand for simple if-else 简单 if-else 的简写形式
int number = 15;
String result = (number % 2 == 0) ? "Even 偶数" : "Odd 奇数";
System.out.println("The number is: " + result);

// Equivalent to 等同于:
// if (number % 2 == 0) {
//     result = "Even";
// } else {
//     result = "Odd";
// }
```

### **练习 Exercises**

**练习 1：年龄分类**
编写程序，根据年龄输出不同的分类：
- 0-12：儿童 Child
- 13-17：青少年 Teenager
- 18-59：成年人 Adult
- 60+：老年人 Senior

**练习 2：登录验证**
创建一个简单的登录系统，检查用户名和密码是否正确。使用逻辑运算符 `&&`。

```java
String username = "admin";
String password = "12345";

// TODO: Write if statement to check login credentials
```

**练习 3：BMI 计算器**
编写程序计算 BMI（Body Mass Index 身体质量指数）并给出健康建议：
- BMI < 18.5：体重过轻 Underweight
- 18.5 <= BMI < 24.9：正常 Normal
- 25 <= BMI < 29.9：超重 Overweight
- BMI >= 30：肥胖 Obese

公式：BMI = weight(kg) / (height(m) * height(m))

---

## **综合练习 Comprehensive Exercises**

**练习 1：打印图案**
结合 for 循环和 if 语句，打印以下图案：
```
*
**
***
****
*****
```

**练习 2：质数判断**
编写程序判断一个数字是否为质数（Prime Number）。使用 for 循环和 if 语句。

```java
int number = 29;
boolean isPrime = true;

// TODO: Write logic to check if number is prime
```

**练习 3：成绩管理系统**
创建一个简单的成绩管理系统：
- 使用数组存储 5 个学生的成绩
- 用 for 循环遍历所有成绩
- 用 if 语句为每个成绩分配等级（A/B/C/D/F）
- 计算平均分
- 找出最高分和最低分

---

## **总结 Summary**

本章节学习了 Java 中三种重要的 **Control Flow（控制流）** 结构：

### **For 循环关键点**
- **For Loop（for 循环）**：适用于已知循环次数的情况
- **Enhanced For Loop（增强型 for 循环）**：简化数组和集合的遍历
- **Nested Loop（嵌套循环）**：循环内部再嵌套循环

### **While 循环关键点**
- **While Loop（while 循环）**：适用于未知循环次数的情况
- **Do-While Loop（do-while 循环）**：至少执行一次的循环
- **Break Statement（break 语句）**：跳出循环
- **Continue Statement（continue 语句）**：跳过本次循环

### **If 语句关键点**
- **If Statement（if 语句）**：条件判断
- **Logical Operators（逻辑运算符）**：`&&`（AND 与）、`||`（OR 或）、`!`（NOT 非）
- **Ternary Operator（三元运算符）**：`condition ? value1 : value2`
- **Nested If（嵌套 if）**：if 语句内部再使用 if 语句

掌握这些控制流结构，你就能让程序根据不同条件做出决策，并重复执行任务，这是编程的核心能力！💪
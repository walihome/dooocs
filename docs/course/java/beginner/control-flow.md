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

# 🎮 Java控制流 Control Flow

## 课程大纲 Course Outline
- 开发环境搭建 Environment Setup
- Hello World 程序 Hello World Program
- 基本语法 Basic Syntax
- 数据类型 Data Types
- 基础运算 Basic Operations
- 集合 Collections
- **控制流 Control Flow** ← 当前章节
- 类、属性、方法 Classes, Properties, Methods

## 🚦 控制流 Control Flow

### 概念解释 Explanation

**控制流 Control Flow** 是编程中控制代码执行顺序的结构。就像交通信号灯 🚦 控制车辆行驶一样，控制流决定程序执行的路径。

### 1. if 条件语句 If Conditional Statement

```java
public class ControlFlowDemo {
    public static void main(String[] args) {
        int score = 85;
        
        // Basic if statement 基础if语句
        if (score >= 60) {
            System.out.println("🎉 Passed! 及格了！");
        }
        
        // if-else statement if-else语句
        if (score >= 90) {
            System.out.println("🏆 Excellent! 优秀！");
        } else if (score >= 80) {
            System.out.println("👍 Good! 良好！");
        } else if (score >= 70) {
            System.out.println("✅ Average! 中等！");
        } else if (score >= 60) {
            System.out.println("😊 Pass! 及格！");
        } else {
            System.out.println("❌ Failed! 不及格！");
        }
        
        // Nested if statements 嵌套if语句
        int age = 20;
        boolean hasID = true;
        
        if (age >= 18) {
            if (hasID) {
                System.out.println("🎬 Welcome to the movie! 欢迎看电影！");
            } else {
                System.out.println("📝 Please show your ID. 请出示身份证。");
            }
        } else {
            System.out.println("🚫 Underage, cannot enter. 未成年，不能进入。");
        }
    }
}
```

### 2. for 循环 For Loop

```java
public class LoopExamples {
    public static void main(String[] args) {
        
        // Basic for loop 基础for循环
        System.out.println("🔢 Counting from 1 to 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.println("Number: " + i);
        }
        
        // Loop through an array 遍历数组
        String[] fruits = {"🍎 Apple", "🍌 Banana", "🍊 Orange", "🍓 Strawberry"};
        System.out.println("\n🍓 My favorite fruits:");
        for (int i = 0; i < fruits.length; i++) {
            System.out.println(fruits[i]);
        }
        
        // Enhanced for loop (for-each) 增强for循环
        System.out.println("\n🔄 Using enhanced for loop:");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // Nested for loop 嵌套for循环
        System.out.println("\n🔢 Multiplication table:");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i + "×" + j + "=" + (i * j) + "\t");
            }
            System.out.println(); // New line 换行
        }
    }
}
```

### 3. while 循环 While Loop

```java
public class WhileLoopDemo {
    public static void main(String[] args) {
        
        // Basic while loop 基础while循环
        int count = 1;
        System.out.println("🔄 While loop example:");
        while (count <= 5) {
            System.out.println("Count: " + count);
            count++; // Don't forget this! 不要忘记这个！
        }
        
        // do-while loop do-while循环
        int number;
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        
        do {
            System.out.print("🔢 Enter a positive number: 请输入一个正数: ");
            number = scanner.nextInt();
        } while (number <= 0);
        
        System.out.println("✅ Thank you! You entered: " + number);
        
        // While loop with break 带break的while循环
        int secretNumber = 42;
        int guess;
        int attempts = 0;
        
        System.out.println("\n🎯 Guess the number game:");
        while (true) {
            System.out.print("Enter your guess: 输入你的猜测: ");
            guess = scanner.nextInt();
            attempts++;
            
            if (guess == secretNumber) {
                System.out.println("🎉 Correct! You guessed it in " + attempts + " attempts.");
                break; // Exit loop 退出循环
            } else if (guess < secretNumber) {
                System.out.println("📈 Too low! Try higher. 太低了！试试更高的数字。");
            } else {
                System.out.println("📉 Too high! Try lower. 太高了！试试更低的数字。");
            }
        }
        
        scanner.close();
    }
}
```

### 4. 综合示例 Comprehensive Example

```java
public class GradeCalculator {
    public static void main(String[] args) {
        // Array of student scores 学生分数数组
        int[] scores = {85, 92, 78, 45, 67, 95, 88, 72};
        
        System.out.println("📊 Student Grade Report:");
        System.out.println("========================");
        
        // Process each student's score 处理每个学生的分数
        for (int i = 0; i < scores.length; i++) {
            int score = scores[i];
            String grade;
            
            // Determine grade using if-else 使用if-else确定等级
            if (score >= 90) {
                grade = "A 🏆";
            } else if (score >= 80) {
                grade = "B 👍";
            } else if (score >= 70) {
                grade = "C ✅";
            } else if (score >= 60) {
                grade = "D 😊";
            } else {
                grade = "F ❌";
            }
            
            System.out.println("Student " + (i + 1) + ": Score = " + score + ", Grade = " + grade);
        }
        
        // Calculate statistics using while loop 使用while循环计算统计信息
        int total = 0;
        int index = 0;
        
        while (index < scores.length) {
            total += scores[index];
            index++;
        }
        
        double average = (double) total / scores.length;
        System.out.println("\n📈 Class Average: " + average);
        
        // Count students in each grade category 统计每个等级的学生人数
        int aCount = 0, bCount = 0, cCount = 0, dCount = 0, fCount = 0;
        
        for (int score : scores) {
            if (score >= 90) aCount++;
            else if (score >= 80) bCount++;
            else if (score >= 70) cCount++;
            else if (score >= 60) dCount++;
            else fCount++;
        }
        
        System.out.println("\n📋 Grade Distribution:");
        System.out.println("A: " + aCount + " students");
        System.out.println("B: " + bCount + " students");
        System.out.println("C: " + cCount + " students");
        System.out.println("D: " + dCount + " students");
        System.out.println("F: " + fCount + " students");
    }
}
```

## 💪 练习 Exercises

### 练习 1：数字金字塔
```java
// 使用嵌套循环打印以下图案：
// 1
// 22
// 333
// 4444
// 55555
```

### 练习 2：质数检查器
```java
// 编写程序检查输入的数字是否为质数
// 提示：使用for循环和if语句
```

### 练习 3：猜数字游戏增强版
```java
// 改进猜数字游戏：
// 1. 限制最多尝试5次
// 2. 每次提示剩余尝试次数
// 3. 游戏结束后询问是否再玩一次
```

### 练习 4：购物车计算器
```java
// 创建购物车程序：
// 1. 使用数组存储商品价格
// 2. 计算总价
// 3. 如果总价超过100元，打9折
// 4. 显示最终价格
```

## 📚 总结 Summary

### 关键概念 Key Concepts
- **if语句 if Statement**：条件执行代码
- **for循环 For Loop**：已知次数的循环
- **while循环 While Loop**：条件满足时的循环
- **do-while循环 Do-While Loop**：至少执行一次的循环

### 重要术语 Important Terms
- **条件 Condition**：决定代码是否执行的条件
- **循环变量 Loop Variable**：控制循环次数的变量
- **迭代 Iteration**：循环的每一次执行
- **无限循环 Infinite Loop**：永远不会结束的循环
- **break语句 Break Statement**：立即退出循环
- **continue语句 Continue Statement**：跳过当前迭代

### 🎯 学习要点 Learning Points
1. 控制流让程序变得"智能" 🧠
2. 循环避免重复代码 🔄
3. 条件语句实现决策能力 ⚖️
4. 合理使用break和continue提高效率 🚀

记住：编程就像给计算机下达指令，控制流就是告诉计算机"什么时候"和"多少次"执行这些指令！ 💻✨
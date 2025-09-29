---
title: 控制流
category: $('Edit Fields').item.json.language
order: 7
tag:
  - $('Edit Fields').item.json.tag
head:
  - - meta
    - name: keywords
      content: $('Edit Fields').item.json['meta-content']
---

# 🎮 闯关开始！掌握Java控制流 Control Flow

**欢迎来到编程冒险的第七关！** 这一关我们将征服**控制流 Control Flow**——这是让你的程序"活起来"的关键！就像游戏中的角色需要根据情况做出不同动作一样，程序也需要根据条件执行不同代码。

## 🗺️ 本章地图 Chapter Map

我们将按照**西蒙分块 Simon's Chunking**原则，将控制流分解为三个核心模块：

1. **`for`循环** - 重复执行任务的利器
2. **`while`语法** - 条件满足时持续执行
3. **`if`语法** - 让程序学会做决策

---

## 🎯 第一关：`for`循环 - 重复执行的大师

### **核心概念 Core Concept**
`for`循环让你能够**重复执行**一段代码特定次数，就像游戏中的连击技能！

```java
// Basic for loop structure 基础for循环结构
for (int i = 0; i < 5; i++) {
    System.out.println("Attack number: " + i);
}
```

### 🛠️ **代码解析 Code Breakdown**

```java
public class ForLoopAdventure {
    public static void main(String[] args) {
        // Print numbers 1 to 5 打印1到5的数字
        for (int counter = 1; counter <= 5; counter++) {
            System.out.println("Current number: " + counter);
        }
        
        // Calculate sum 计算总和
        int total = 0;  // Initialize total 初始化总和
        for (int number = 1; number <= 10; number++) {
            total = total + number;  // Accumulate sum 累加求和
        }
        System.out.println("Sum from 1 to 10: " + total);
    }
}
```

### 🎮 **实战练习 Practice Mission**

```java
// Mission: Print multiplication table 任务：打印乘法表
for (int multiplier = 1; multiplier <= 3; multiplier++) {
    for (int number = 1; number <= 3; number++) {
        int result = multiplier * number;
        System.out.println(multiplier + " × " + number + " = " + result);
    }
}
```

---

## 🎯 第二关：`while`循环 - 条件驱动的持久战

### **核心概念 Core Concept**
`while`循环在**条件为真时持续执行**，就像游戏中的持续施法！

```java
// Basic while loop structure 基础while循环结构
while (condition) {
    // Code to execute 要执行的代码
}
```

### 🛠️ **代码解析 Code Breakdown**

```java
public class WhileLoopChallenge {
    public static void main(String[] args) {
        // Countdown from 5 从5开始倒计时
        int timer = 5;
        while (timer > 0) {
            System.out.println("Countdown: " + timer);
            timer--;  // Decrease timer 减少计时器
        }
        System.out.println("Blast off! 发射！");
        
        // User input validation 用户输入验证
        java.util.Scanner scanner = new java.util.Scanner(System.in);
        int userGuess;
        
        System.out.print("Guess the secret number (1-10): ");
        userGuess = scanner.nextInt();
        
        while (userGuess != 7) {  // Secret number is 7 秘密数字是7
            System.out.println("Wrong guess! Try again: ");
            userGuess = scanner.nextInt();
        }
        System.out.println("Congratulations! You found the secret!");
    }
}
```

### ⚠️ **重要提醒 Important Note**
```java
// Danger: Infinite loop 危险：无限循环
// int x = 1;
// while (x > 0) {  // This condition is always true 这个条件永远为真
//     System.out.println("This will run forever!");
// }
```

---

## 🎯 第三关：`if`语句 - 程序决策的大脑

### **核心概念 Core Concept**
`if`语句让程序能够**根据条件做出决策**，就像游戏中的分支剧情！

```java
// Basic if structure 基础if结构
if (condition) {
    // Execute if condition is true 条件为真时执行
}
```

### 🛠️ **代码解析 Code Breakdown**

```java
public class DecisionMaker {
    public static void main(String[] args) {
        int playerScore = 85;
        
        // Simple if statement 简单if语句
        if (playerScore >= 60) {
            System.out.println("You passed the level! 你通过了关卡！");
        }
        
        // if-else structure if-else结构
        if (playerScore >= 90) {
            System.out.println("Grade: A - Excellent! 优秀！");
        } else if (playerScore >= 80) {
            System.out.println("Grade: B - Good job! 良好！");
        } else if (playerScore >= 70) {
            System.out.println("Grade: C - Not bad! 还行！");
        } else {
            System.out.println("Grade: F - Try again! 再试一次！");
        }
        
        // Multiple conditions 多重条件
        boolean hasWeapon = true;
        boolean hasAmmo = true;
        
        if (hasWeapon && hasAmmo) {  // AND operator 与运算符
            System.out.println("Ready for battle! 准备战斗！");
        }
        
        if (!hasWeapon || !hasAmmo) {  // OR operator 或运算符
            System.out.println("Need supplies! 需要补给！");
        }
    }
}
```

---

## 🏆 终极挑战：综合应用 Final Boss Battle

```java
public class ControlFlowMaster {
    public static void main(String[] args) {
        // Mission: Find even numbers and calculate average
        // 任务：找出偶数并计算平均值
        
        int[] numbers = {12, 7, 24, 15, 8, 31, 42, 19};
        int evenCount = 0;
        int evenSum = 0;
        
        System.out.println("Even numbers found: 找到的偶数：");
        
        // Use for loop to iterate through array 使用for循环遍历数组
        for (int i = 0; i < numbers.length; i++) {
            // Use if to check if number is even 使用if检查是否为偶数
            if (numbers[i] % 2 == 0) {
                System.out.println(numbers[i]);
                evenCount++;
                evenSum += numbers[i];
            }
        }
        
        // Use while to validate result 使用while验证结果
        if (evenCount > 0) {
            double average = (double) evenSum / evenCount;
            System.out.println("Average of even numbers: " + average);
        } else {
            System.out.println("No even numbers found! 没有找到偶数！");
        }
    }
}
```

## 📚 **费曼检验 Feynman Check**
用你自己的话解释：
- `for`循环和`while`循环有什么区别？
- 什么时候应该使用`if-else`而不是多个`if`语句？
- 如何避免无限循环？

## 🎉 **闯关成功！Level Complete!**

**恭喜！** 你已经掌握了Java控制流的三大核心技能！这些工具将让你的程序从简单的指令执行者变成智能的决策者。

**下一关预告：** 准备好迎接**类、属性、方法**的挑战，我们将进入面向对象编程的精彩世界！

---
**记住：** 编程就像玩游戏，多练习才能成为高手！每个伟大的程序员都是从这些基础控制流开始的！ 💪
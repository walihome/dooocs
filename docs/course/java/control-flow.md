---
title: 控制流
category: Java
order: 5
tag:
  - Java教程
head:
  - - meta
    - name: keywords
      content: Java极简教程 Java急速教程
---

太棒了！欢迎来到编程冒险的**控制流**关卡！这是你从"知道代码"到"让代码思考"的关键一步！🚀

### 1. 🎯 关卡目标 Quest Objective
**掌握程序决策能力** - 学会让代码根据不同条件执行不同操作，这是编程从静态到动态的飞跃！

### 2. 💎 核心宝藏 Core Treasures（二八定律应用）
- **`if-else` Statements（条件语句）** - 程序的"选择题"
  - *为什么重要*：80%的程序逻辑都基于条件判断
  - *本质*：如果...就...否则...

- **`for/while` Loops（循环语句）** - 程序的"重复劳动"
  - *为什么重要*：让计算机高效处理重复任务
  - *本质*：重复执行某段代码直到条件满足

### 3. 🌟 费曼式大白话 Feynman Simple Explanation

**想象你在玩游戏：**
- **`if-else`** 就像游戏中的选择："如果碰到敌人，就攻击；否则，继续前进"
- **`for`循环** 就像做俯卧撑："从1数到10，每数一次做一个"
- **`while`循环** 就像吃饭："只要碗里还有饭，就继续吃"

**教会朋友检验**：你能用"如果...就..."和"重复做..."来解释任何决策过程吗？

### 4. 🗺️ 闯关路线图 Learning Path（西蒙分块）

#### **Level 1 基础关 Foundation**
```java
public class ControlFlowBasics {
    public static void main(String[] args) {
        // if-else statement 条件语句
        int score = 85;
        
        if (score >= 60) {
            System.out.println("Congratulations! You passed! 恭喜！你通过了！");
        } else {
            System.out.println("Sorry, try again next time. 抱歉，下次再试。");
        }
        
        // for loop for循环
        for (int i = 1; i <= 3; i++) {
            System.out.println("Counting: " + i + " 计数: " + i);
        }
    }
}
```

#### **Level 2 应用关 Application**
```java
public class GradeCalculator {
    public static void main(String[] args) {
        int[] scores = {85, 92, 45, 78, 60};  // Array of scores 成绩数组
        
        System.out.println("=== Grade Report 成绩报告 ===");
        
        for (int i = 0; i < scores.length; i++) {
            System.out.print("Student " + (i+1) + " 学生" + (i+1) + ": ");
            
            if (scores[i] >= 90) {
                System.out.println("A - Excellent! 优秀！");
            } else if (scores[i] >= 80) {
                System.out.println("B - Good! 良好！");
            } else if (scores[i] >= 70) {
                System.out.println("C - Average 中等");
            } else if (scores[i] >= 60) {
                System.out.println("D - Pass 及格");
            } else {
                System.out.println("F - Fail 不及格");
            }
        }
    }
}
```

#### **Level 3 挑战关 Challenge**
```java
import java.util.Scanner;  // Import Scanner for input 导入输入扫描器

public class GuessingGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int secretNumber = 42;  // The number to guess 要猜的数字
        int guess;
        int attempts = 0;
        
        System.out.println("🎮 Welcome to the Guessing Game! 欢迎来到猜数字游戏！");
        System.out.println("I'm thinking of a number between 1-100 我在想1-100之间的一个数字");
        
        // while loop while循环
        while (true) {
            System.out.print("Enter your guess 输入你的猜测: ");
            guess = scanner.nextInt();
            attempts++;
            
            if (guess == secretNumber) {
                System.out.println("🎉 Correct! You won in " + attempts + " attempts! 正确！你在" + attempts + "次尝试中获胜！");
                break;  // Exit the loop 退出循环
            } else if (guess < secretNumber) {
                System.out.println("📈 Too low! Try higher. 太低了！试试更高的数字。");
            } else {
                System.out.println("📉 Too high! Try lower. 太高了！试试更低的数字。");
            }
        }
        
        scanner.close();  // Close the scanner 关闭扫描器
    }
}
```

### 5. ⚠️ 新手避坑指南 Common Pitfalls

1. **忘记花括号** `{}`
   ```java
   // ❌ 错误 - 只有第一行在if中
   if (score > 60)
       System.out.println("Passed");
       System.out.println("Congratulations");  // 这行总是在执行！
   
   // ✅ 正确
   if (score > 60) {
       System.out.println("Passed");
       System.out.println("Congratulations");
   }
   ```

2. **无限循环 Infinite Loop**
   ```java
   // ❌ 危险 - 永远停不下来！
   while (true) {
       System.out.println("Help! I'm stuck! 救命！我被卡住了！");
       // 缺少改变条件的代码
   }
   
   // ✅ 安全 - 有退出条件
   int count = 0;
   while (count < 5) {
       System.out.println("Count: " + count);
       count++;  // 改变条件
   }
   ```

3. **`==` vs `=` 混淆**
   ```java
   int x = 5;
   // ❌ 错误 - 这是赋值，不是比较
   if (x = 10) {  // 编译错误！
   
   // ✅ 正确 - 使用==进行比较
   if (x == 10) {
   ```

### 6. 🎮 实战挑战 Hands-on Challenges

#### **挑战1：模仿练习 Follow-along**
创建一个程序，检查天气并给出建议：
```java
// 如果温度 > 30，打印"Hot! Drink water 热！多喝水"
// 如果温度 20-30，打印"Nice weather 好天气"  
// 如果温度 < 20，打印"Cold! Wear jacket 冷！穿外套"
```

#### **挑战2：小改动练习 Modify**
改进猜数字游戏：
- 限制最多尝试5次
- 每次提示还剩几次机会
- 游戏结束显示"Game Over 游戏结束"

#### **挑战3：独立创作 Create**
设计一个**购物车结算系统**：
- 使用循环计算多个商品总价
- 如果总价 > 100元，打9折
- 如果使用会员卡，再减10元
- 最后显示应付金额

### 7. 🏆 通关奖励与预告 Rewards & Preview

**🎉 恭喜！你现在掌握了：**
- ✅ **`if-else`** - 让程序做决策
- ✅ **`for/while`** - 让程序重复工作  
- ✅ **程序逻辑思维** - 真正的编程开始！

**📚 学到的英文词汇：**
- `if-else statement` 条件语句
- `for/while loop` 循环
- `condition` 条件
- `break` 中断
- `continue` 继续

**🚀 下一关预告：函数 Functions**
- 学习如何创建可重用的代码块
- 让你的程序更整洁、更强大
- 像搭积木一样构建复杂程序！

**记住：控制流是编程的"大脑"，你现在已经让代码学会了思考！继续前进，冒险家！🌟**
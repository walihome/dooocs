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

# 🎮 第5关：基础运算 Basic Operations

**欢迎来到编程世界的"数学魔法课"！** 在这一关，你将学会如何让计算机进行各种运算 - 就像给你的代码装上"计算大脑"！💡

## 🎯 学习目标 Learning Objectives
- 掌握Java中的**赋值运算 Assignment Operations**
- 学会**数学运算 Arithmetic Operations**：加减乘除求余
- 理解**比较运算 Comparison Operations**：相等、大于、小于
- 运用**逻辑运算 Logical Operations**：AND、OR

---

## 1. 🎁 赋值运算 Assignment Operations

```java
public class BasicOperations {
    public static void main(String[] args) {
        // Assignment operation 赋值运算
        int score = 100;           // Assign value 100 to score 给score赋值100
        String playerName = "Alice"; // Assign name 分配姓名
        
        System.out.println("Player: " + playerName);
        System.out.println("Score: " + score);
    }
}
```

**💡 费曼解释 Feynman Explanation**：想象赋值就像给盒子贴标签并放东西 - `score = 100` 就是给名为"score"的盒子放入数字100！

---

## 2. ➕➖ 数学运算 Arithmetic Operations

```java
public class MathMagic {
    public static void main(String[] args) {
        // Initialize variables 初始化变量
        int a = 15;
        int b = 4;
        
        // Addition 加法
        int sum = a + b;           // 15 + 4 = 19
        System.out.println("Sum: " + sum);
        
        // Subtraction 减法  
        int difference = a - b;    // 15 - 4 = 11
        System.out.println("Difference: " + difference);
        
        // Multiplication 乘法
        int product = a * b;       // 15 × 4 = 60
        System.out.println("Product: " + product);
        
        // Division 除法
        int quotient = a / b;      // 15 ÷ 4 = 3 (integer division 整数除法)
        System.out.println("Quotient: " + quotient);
        
        // Modulus 求余
        int remainder = a % b;     // 15 % 4 = 3 (15除以4余3)
        System.out.println("Remainder: " + remainder);
    }
}
```

**🎮 游戏挑战 Game Challenge**：计算游戏金币！
```java
int goldCoins = 50;
int foundCoins = 25;
int spentCoins = 15;

int totalGold = goldCoins + foundCoins - spentCoins;
System.out.println("Total gold coins: " + totalGold); // 60
```

---

## 3. ⚖️ 比较运算 Comparison Operations

```java
public class ComparisonGame {
    public static void main(String[] args) {
        int playerLevel = 10;
        int enemyLevel = 8;
        
        // Equal to 等于
        boolean isSameLevel = (playerLevel == enemyLevel); // false
        System.out.println("Same level? " + isSameLevel);
        
        // Greater than 大于
        boolean isStronger = (playerLevel > enemyLevel);   // true
        System.out.println("Player stronger? " + isStronger);
        
        // Less than 小于
        boolean isWeaker = (playerLevel < enemyLevel);     // false
        System.out.println("Player weaker? " + isWeaker);
        
        // Greater than or equal to 大于等于
        boolean canFight = (playerLevel >= 5);            // true
        System.out.println("Can fight? " + canFight);
    }
}
```

**💡 西蒙分块 Simon's Chunking**：比较运算总是返回**boolean（布尔值）** - 只有`true`或`false`两种结果！

---

## 4. 🔗 逻辑运算 Logical Operations

```java
public class LogicPuzzle {
    public static void main(String[] args) {
        boolean hasSword = true;
        boolean hasShield = false;
        int playerLevel = 8;
        
        // AND operation (&&) AND运算
        boolean canEnterDungeon = hasSword && (playerLevel >= 5); 
        // true AND true = true
        System.out.println("Can enter dungeon? " + canEnterDungeon);
        
        // OR operation (||) OR运算  
        boolean canDefend = hasShield || (playerLevel >= 10);
        // false OR false = false
        System.out.println("Can defend? " + canDefend);
        
        // Complex condition 复杂条件
        boolean canFightBoss = (hasSword && hasShield) || playerLevel >= 15;
        System.out.println("Can fight boss? " + canFightBoss);
    }
}
```

---

## 🎯 综合实战 Comprehensive Practice

```java
public class GameCalculator {
    public static void main(String[] args) {
        // Game scenario 游戏场景
        int health = 100;
        int damage = 25;
        int healing = 15;
        int playerLevel = 12;
        boolean hasPotion = true;
        
        // Calculate new health 计算新生命值
        int newHealth = health - damage + healing;
        System.out.println("New health: " + newHealth); // 90
        
        // Check conditions 检查条件
        boolean canLevelUp = (playerLevel >= 10) && (newHealth > 50);
        boolean needsHealing = (newHealth < 30) || !hasPotion;
        
        System.out.println("Can level up? " + canLevelUp);     // true
        System.out.println("Needs healing? " + needsHealing);  // false
    }
}
```

---

## 📊 二八定律总结 Pareto Principle Summary

**掌握这20%的核心运算，解决80%的编程问题：**
- `=` **赋值 Assignment**
- `+ - * / %` **数学运算 Arithmetic**
- `== > <` **比较 Comparison**  
- `&& ||` **逻辑运算 Logical**

---

## 🏆 闯关任务 Challenge Quest

**任务：创建角色状态检查器**
```java
// Your mission 你的任务：
// 1. 创建角色属性（生命值、等级、金币）
// 2. 进行数学运算计算总资产
// 3. 使用比较运算检查角色状态
// 4. 使用逻辑运算判断是否可以进入高级区域

// 开始编码吧！Start coding!
```

**🎉 恭喜！你已掌握Java基础运算的魔法！** 这些运算就像编程世界的"加减乘除"，是构建复杂程序的基石。下一关我们将探索更强大的**集合 Collections**！🚀

**记住：Practice makes perfect! 熟能生巧！** 💪
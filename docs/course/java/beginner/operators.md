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

 ## **Assignment Operator（赋值运算符）**

### **概念 Explanation**

**Assignment（赋值）** 是编程中最基础的操作，使用 **`=`** 符号将右边的值存储到左边的变量中。📦 就像把东西装进盒子里，盒子就是变量，东西就是值。

```java
// Basic assignment 基本赋值
int age = 25;  // Assign value 25 to variable age 将值25赋给变量age

// Reassignment 重新赋值
age = 30;  // Update the value 更新值

// Multiple assignments 多重赋值
int a, b, c;
a = b = c = 10;  // All variables get value 10 所有变量都得到值10
```

### **代码示例 Code Examples**

```java
public class AssignmentExample {
    public static void main(String[] args) {
        // Simple assignment 简单赋值
        String name = "Alice";  // Assign string to variable 将字符串赋给变量
        int score = 95;  // Assign integer to variable 将整数赋给变量
        
        // Assignment with expressions 表达式赋值
        int total = 100 + 50;  // Calculate then assign 先计算再赋值
        System.out.println("Total: " + total);  // Output: Total: 150
        
        // Copy value from one variable to another 从一个变量复制值到另一个变量
        int original = 42;
        int copy = original;  // copy gets value 42 copy获得值42
        System.out.println("Original: " + original + ", Copy: " + copy);
    }
}
```

### **练习 Exercises**

1. 创建一个变量 `temperature`，赋值为 `25`，然后将其更新为 `30`
2. 创建两个变量 `width` 和 `height`，分别赋值为 `10` 和 `20`，然后创建第三个变量 `area` 存储它们的乘积

---

## **Arithmetic Operators（算术运算符）**

### **概念 Explanation**

**Arithmetic Operators（算术运算符）** 用于执行数学计算。Java 提供五个基本算术运算符：

- **`+`** Addition（加法）
- **`-`** Subtraction（减法）
- **`*`** Multiplication（乘法）
- **`/`** Division（除法）
- **`%`** Modulus（取余/求模）- 返回除法的余数

### **代码示例 Code Examples**

```java
public class ArithmeticExample {
    public static void main(String[] args) {
        // Basic arithmetic operations 基本算术操作
        int a = 10;
        int b = 3;
        
        // Addition 加法
        int sum = a + b;  // Result: 13 结果：13
        System.out.println("Sum: " + sum);
        
        // Subtraction 减法
        int difference = a - b;  // Result: 7 结果：7
        System.out.println("Difference: " + difference);
        
        // Multiplication 乘法
        int product = a * b;  // Result: 30 结果：30
        System.out.println("Product: " + product);
        
        // Division 除法
        int quotient = a / b;  // Result: 3 (integer division) 结果：3（整数除法）
        System.out.println("Quotient: " + quotient);
        
        // Modulus (remainder) 取余（余数）
        int remainder = a % b;  // Result: 1 (10 ÷ 3 = 3 remainder 1) 结果：1
        System.out.println("Remainder: " + remainder);
        
        // Floating-point division 浮点数除法
        double preciseResult = 10.0 / 3.0;  // Result: 3.333... 结果：3.333...
        System.out.println("Precise division: " + preciseResult);
    }
}
```

**⚠️ 注意事项：**
- 整数除法会丢弃小数部分：`10 / 3 = 3`（不是 3.33）
- 取余运算符 `%` 常用于判断奇偶数：`number % 2 == 0` 表示偶数

### **练习 Exercises**

1. 计算一个矩形的周长，已知 `length = 15` 和 `width = 8`（公式：`perimeter = 2 * (length + width)`）
2. 判断数字 `17` 除以 `5` 的余数是多少
3. 计算 `25.5 / 4.0` 的结果

---

## **Comparison Operators（比较运算符）**

### **概念 Explanation**

**Comparison Operators（比较运算符）** 用于比较两个值，返回 **boolean（布尔值）**：`true` 或 `false`。🔍 就像裁判判断输赢。

| **Operator 运算符** | **Meaning 含义** | **Example 示例** |
|---------------------|------------------|------------------|
| `==` | Equal to（等于） | `5 == 5` → `true` |
| `!=` | Not equal to（不等于） | `5 != 3` → `true` |
| `>` | Greater than（大于） | `5 > 3` → `true` |
| `<` | Less than（小于） | `5 < 3` → `false` |
| `>=` | Greater than or equal to（大于等于） | `5 >= 5` → `true` |
| `<=` | Less than or equal to（小于等于） | `3 <= 5` → `true` |

### **代码示例 Code Examples**

```java
public class ComparisonExample {
    public static void main(String[] args) {
        int x = 10;
        int y = 20;
        
        // Equal to 等于
        boolean isEqual = (x == y);  // false
        System.out.println("x == y: " + isEqual);
        
        // Not equal to 不等于
        boolean isNotEqual = (x != y);  // true
        System.out.println("x != y: " + isNotEqual);
        
        // Greater than 大于
        boolean isGreater = (x > y);  // false
        System.out.println("x > y: " + isGreater);
        
        // Less than 小于
        boolean isLess = (x < y);  // true
        System.out.println("x < y: " + isLess);
        
        // Greater than or equal to 大于等于
        boolean isGreaterOrEqual = (x >= 10);  // true
        System.out.println("x >= 10: " + isGreaterOrEqual);
        
        // Less than or equal to 小于等于
        boolean isLessOrEqual = (y <= 20);  // true
        System.out.println("y <= 20: " + isLessOrEqual);
        
        // Practical example 实际例子
        int age = 18;
        boolean isAdult = (age >= 18);  // Check if adult 检查是否成年
        System.out.println("Is adult: " + isAdult);
    }
}
```

**⚠️ 重要提醒：**
- 比较相等用 `==`，不是 `=`（`=` 是赋值）
- 字符串比较要用 `.equals()` 方法，不能用 `==`

### **练习 Exercises**

1. 比较两个数字 `score1 = 85` 和 `score2 = 90`，判断 `score1` 是否大于等于 `score2`
2. 创建变量 `temperature = 25`，判断温度是否在舒适范围内（`>= 20` 且 `<= 26`）

---

## **Logical Operators（逻辑运算符）**

### **概念 Explanation**

**Logical Operators（逻辑运算符）** 用于组合多个布尔表达式，返回 `true` 或 `false`。🧩 就像拼图，组合多个条件。

| **Operator 运算符** | **Name 名称** | **Description 描述** | **Example 示例** |
|---------------------|---------------|----------------------|------------------|
| `&&` | AND（与） | 所有条件都为 true 时返回 true | `true && true` → `true` |
| `\|\|` | OR（或） | 至少一个条件为 true 时返回 true | `true \|\| false` → `true` |
| `!` | NOT（非） | 反转布尔值 | `!true` → `false` |

### **代码示例 Code Examples**

```java
public class LogicalExample {
    public static void main(String[] args) {
        int age = 25;
        boolean hasLicense = true;
        int score = 85;
        
        // AND operator (&&) 与运算符
        // Both conditions must be true 两个条件都必须为真
        boolean canDrive = (age >= 18) && hasLicense;
        System.out.println("Can drive: " + canDrive);  // true
        
        boolean validAge = (age >= 18) && (age <= 65);
        System.out.println("Valid age: " + validAge);  // true
        
        // OR operator (||) 或运算符
        // At least one condition must be true 至少一个条件为真
        boolean isWeekend = false;
        boolean isHoliday = true;
        boolean canRest = isWeekend || isHoliday;
        System.out.println("Can rest: " + canRest);  // true
        
        // NOT operator (!) 非运算符
        // Inverts the boolean value 反转布尔值
        boolean isBusy = false;
        boolean isFree = !isBusy;
        System.out.println("Is free: " + isFree);  // true
        
        // Complex conditions 复杂条件
        boolean passExam = (score >= 60) && (score <= 100);
        boolean isExcellent = (score >= 90) || (score == 100);
        System.out.println("Pass exam: " + passExam);  // true
        System.out.println("Excellent: " + isExcellent);  // false
        
        // Combining multiple operators 组合多个运算符
        int temperature = 25;
        boolean isComfortable = (temperature >= 20) && (temperature <= 26) && !isWeekend;
        System.out.println("Comfortable working conditions: " + isComfortable);
    }
}
```

**💡 逻辑运算真值表：**

**AND (`&&`) 真值表：**
```
true  && true  = true
true  && false = false
false && true  = false
false && false = false
```

**OR (`||`) 真值表：**
```
true  || true  = true
true  || false = true
false || true  = true
false || false = false
```

### **练习 Exercises**

1. 创建一个检查器，判断一个人是否可以投票：年龄 `>= 18` 并且是公民（`isCitizen = true`）
2. 判断一个学生是否获得奖学金：成绩 `>= 90` 或者 在体育比赛中获奖（`hasAward = true`）
3. 创建一个变量 `isRaining = true`，使用 NOT 运算符判断是否不下雨

---

## **总结 Summary**

本章节学习了 Java 中的 **四大基础运算符 Four Basic Operators**：

1. **Assignment Operator（赋值运算符）**：
   - 使用 `=` 将值存储到变量中
   - 关键词：**assign（赋值）**、**variable（变量）**

2. **Arithmetic Operators（算术运算符）**：
   - `+` Addition（加法）、`-` Subtraction（减法）、`*` Multiplication（乘法）
   - `/` Division（除法）、`%` Modulus（取余）
   - 注意整数除法会丢弃小数部分

3. **Comparison Operators（比较运算符）**：
   - `==` Equal（等于）、`!=` Not equal（不等于）
   - `>` Greater than（大于）、`<` Less than（小于）
   - `>=` Greater or equal（大于等于）、`<=` Less or equal（小于等于）
   - 返回 **boolean（布尔值）**：`true` 或 `false`

4. **Logical Operators（逻辑运算符）**：
   - `&&` AND（与）：所有条件为真
   - `||` OR（或）：至少一个条件为真
   - `!` NOT（非）：反转布尔值
   - 用于组合多个条件判断

🎯 **核心英文术语 Key Terms**：
- **operator（运算符）**
- **expression（表达式）**
- **boolean（布尔值）**
- **true / false（真 / 假）**
- **condition（条件）**

掌握这些运算符是编写程序逻辑的基础！下一章节将学习如何使用这些运算符控制程序流程。💪
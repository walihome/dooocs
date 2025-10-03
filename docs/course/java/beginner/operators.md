---
title: 基础运算
category: Java
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 基础运算

在 Java 中,计算机就像一个超级计算器,可以帮你完成各种运算。这一章,你将学会如何让计算机进行加减乘除、比较数字大小,以及做出逻辑判断。

## 赋值运算(Assignment)

### 💡 概念讲解

**赋值(Assignment)** 就是把一个值存储到变量中。想象变量是一个盒子,赋值就是把东西放进盒子里。

使用 `=` 符号进行赋值,格式是:`变量名 = 值;`

::: warning 注意
`=` 在 Java 中不是"等于"的意思,而是"赋值"!
:::

### 📝 代码示例

```java
public class Assignment {
    public static void main(String[] args) {
        // 创建变量并赋值
        int age = 18;  // 把 18 存入 age 变量
        
        // 修改变量的值
        age = 20;  // 现在 age 变成了 20
        
        // 一个变量可以赋值给另一个变量
        int myAge = age;  // 把 age 的值复制给 myAge
        
        System.out.println("age = " + age);      // 输出: age = 20
        System.out.println("myAge = " + myAge);  // 输出: myAge = 20
    }
}
```

### ✅ 验证方法

保存文件并运行:
```bash
javac Assignment.java
java Assignment
```

你会看到:
```
age = 20
myAge = 20
```

### 💪 练习题

1. 创建一个变量 `score`,先赋值 85,然后改成 90,最后打印出来
2. 创建两个变量 `a = 10` 和 `b = 20`,然后交换它们的值

## 数学运算(Arithmetic Operations)

### 💡 概念讲解

Java 提供了 5 种基本的数学运算符:

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `+` | 加法(Addition) | `5 + 3` 结果是 8 |
| `-` | 减法(Subtraction) | `5 - 3` 结果是 2 |
| `*` | 乘法(Multiplication) | `5 * 3` 结果是 15 |
| `/` | 除法(Division) | `6 / 3` 结果是 2 |
| `%` | 求余(Modulus) | `5 % 3` 结果是 2 |

::: tip 提示
`%` 求余运算返回除法的余数。比如 5 除以 3,商是 1,余数是 2。
:::

### 📝 代码示例

```java
public class MathOperations {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        // 加法
        int sum = a + b;
        System.out.println("10 + 3 = " + sum);  // 输出: 10 + 3 = 13
        
        // 减法
        int difference = a - b;
        System.out.println("10 - 3 = " + difference);  // 输出: 10 - 3 = 7
        
        // 乘法
        int product = a * b;
        System.out.println("10 * 3 = " + product);  // 输出: 10 * 3 = 30
        
        // 除法
        int quotient = a / b;
        System.out.println("10 / 3 = " + quotient);  // 输出: 10 / 3 = 3
        
        // 求余
        int remainder = a % b;
        System.out.println("10 % 3 = " + remainder);  // 输出: 10 % 3 = 1
        
        // 组合运算
        int result = (a + b) * 2;  // 先算括号内的
        System.out.println("(10 + 3) * 2 = " + result);  // 输出: (10 + 3) * 2 = 26
    }
}
```

::: danger 警告
整数除以整数,结果只保留整数部分! `10 / 3` 的结果是 `3` 而不是 `3.333...`
:::

### 📝 小数运算示例

```java
public class DecimalMath {
    public static void main(String[] args) {
        double x = 10.0;  // 使用 double 类型存储小数
        double y = 3.0;
        
        double result = x / y;
        System.out.println("10.0 / 3.0 = " + result);  // 输出: 10.0 / 3.0 = 3.3333333333333335
    }
}
```

### ✅ 验证方法

运行代码后,观察 `10 / 3` 的结果:
- 如果两边都是整数,结果是 `3`
- 如果至少有一边是小数,结果是 `3.333...`

### 💪 练习题

1. 计算一个长方形的面积(长=8,宽=5)
2. 计算 17 除以 5 的余数
3. 计算表达式 `(20 + 10) / 3 * 2` 的结果

### 📌 小结

- `=` 是赋值,不是等于
- 整数除法会丢弃小数部分
- `%` 求余运算常用于判断奇偶数
- 使用括号可以改变运算顺序

## 比较运算(Comparison Operations)

### 💡 概念讲解

**比较运算(Comparison)** 用于比较两个值的大小关系,结果是 `true`(真) 或 `false`(假)。

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `==` | 等于(Equal) | `5 == 5` 结果是 true |
| `!=` | 不等于(Not Equal) | `5 != 3` 结果是 true |
| `>` | 大于(Greater Than) | `5 > 3` 结果是 true |
| `<` | 小于(Less Than) | `5 < 3` 结果是 false |
| `>=` | 大于等于(Greater or Equal) | `5 >= 5` 结果是 true |
| `<=` | 小于等于(Less or Equal) | `5 <= 3` 结果是 false |

::: warning 注意
判断相等用 `==` (两个等号),不是 `=` (一个等号)! 一个等号是赋值!
:::

### 📝 代码示例

```java
public class Comparison {
    public static void main(String[] args) {
        int age = 18;
        int limit = 18;
        
        // 等于
        boolean isEqual = (age == limit);
        System.out.println("age == limit: " + isEqual);  // 输出: true
        
        // 不等于
        boolean isNotEqual = (age != limit);
        System.out.println("age != limit: " + isNotEqual);  // 输出: false
        
        // 大于
        boolean isGreater = (age > 16);
        System.out.println("age > 16: " + isGreater);  // 输出: true
        
        // 小于
        boolean isLess = (age < 20);
        System.out.println("age < 20: " + isLess);  // 输出: true
        
        // 大于等于
        boolean isGreaterOrEqual = (age >= 18);
        System.out.println("age >= 18: " + isGreaterOrEqual);  // 输出: true
        
        // 小于等于
        boolean isLessOrEqual = (age <= 15);
        System.out.println("age <= 15: " + isLessOrEqual);  // 输出: false
    }
}
```

### 📝 实用示例

```java
public class AgeCheck {
    public static void main(String[] args) {
        int userAge = 20;
        
        // 检查是否成年
        boolean isAdult = (userAge >= 18);
        System.out.println("是否成年: " + isAdult);  // 输出: 是否成年: true
        
        // 检查是否在 18-60 岁之间
        boolean isWorkingAge = (userAge >= 18) && (userAge <= 60);
        System.out.println("是否在工作年龄: " + isWorkingAge);  // 输出: 是否在工作年龄: true
    }
}
```

::: tip 提示
比较运算的结果是 `boolean` 类型,只有 `true` 或 `false` 两个值。
:::

### ✅ 验证方法

运行代码,观察不同比较的结果:
```bash
javac Comparison.java
java Comparison
```

你会看到每个比较的结果是 `true` 还是 `false`。

### 💪 练习题

1. 创建一个变量 `score = 85`,判断是否及格(>=60)
2. 判断 `score` 是否是满分(==100)
3. 判断 `score` 是否在 80-90 分之间

### 📌 小结

- 比较运算的结果是 `boolean` 类型
- `==` 判断相等,`=` 是赋值
- `>=` 和 `<=` 包含等于的情况
- 比较运算常用于条件判断

## 逻辑运算(Logical Operations)

### 💡 概念讲解

**逻辑运算(Logical Operations)** 用于组合多个条件,做出复杂的判断。

| 运算符 | 含义 | 说明 |
|--------|------|------|
| `&&` | 并且(AND) | 两个条件都是 true,结果才是 true |
| `\|\|` | 或者(OR) | 任意一个条件是 true,结果就是 true |
| `!` | 非(NOT) | 反转结果,true 变 false,false 变 true |

### 📝 AND 运算示例

```java
public class LogicalAnd {
    public static void main(String[] args) {
        int age = 25;
        boolean hasLicense = true;
        
        // 可以开车的条件: 年满18岁 并且 有驾照
        boolean canDrive = (age >= 18) && hasLicense;
        System.out.println("可以开车: " + canDrive);  // 输出: 可以开车: true
        
        // 真值表演示
        System.out.println("true && true = " + (true && true));    // 输出: true
        System.out.println("true && false = " + (true && false));  // 输出: false
        System.out.println("false && true = " + (false && true));  // 输出: false
        System.out.println("false && false = " + (false && false)); // 输出: false
    }
}
```

::: tip 提示
`&&` 要求所有条件都满足。就像你既要带钥匙又要记得密码才能开门。
:::

### 📝 OR 运算示例

```java
public class LogicalOr {
    public static void main(String[] args) {
        boolean isWeekend = false;
        boolean isHoliday = true;
        
        // 可以休息的条件: 是周末 或者 是节假日
        boolean canRest = isWeekend || isHoliday;
        System.out.println("可以休息: " + canRest);  // 输出: 可以休息: true
        
        // 真值表演示
        System.out.println("true || true = " + (true || true));    // 输出: true
        System.out.println("true || false = " + (true || false));  // 输出: true
        System.out.println("false || true = " + (false || true));  // 输出: true
        System.out.println("false || false = " + (false || false)); // 输出: false
    }
}
```

::: tip 提示
`||` 只要有一个条件满足就行。就像付款可以用现金或者微信。
:::

### 📝 NOT 运算示例

```java
public class LogicalNot {
    public static void main(String[] args) {
        boolean isRaining = false;
        
        // 不下雨
        boolean isSunny = !isRaining;
        System.out.println("是晴天: " + isSunny);  // 输出: 是晴天: true
        
        // 真值表演示
        System.out.println("!true = " + !true);   // 输出: false
        System.out.println("!false = " + !false); // 输出: true
    }
}
```

### 📝 综合示例

```java
public class LogicalCombined {
    public static void main(String[] args) {
        int score = 85;
        int attendance = 95;
        
        // 优秀学生的条件: (成绩>=80 并且 出勤率>=90) 或者 成绩==100
        boolean isExcellent = ((score >= 80) && (attendance >= 90)) || (score == 100);
        System.out.println("是否优秀学生: " + isExcellent);  // 输出: 是否优秀学生: true
        
        // 不及格的条件
        boolean isFailed = score < 60;
        boolean isPassed = !isFailed;  // 及格就是"不"不及格
        System.out.println("是否及格: " + isPassed);  // 输出: 是否及格: true
    }
}
```

### ✅ 验证方法

运行上面的示例,观察不同逻辑运算的结果:
```bash
javac LogicalAnd.java
java LogicalAnd
```

尝试修改变量的值,看看结果如何变化。

### 💪 练习题

1. 判断一个数是否在 10-20 之间(包含 10 和 20)
2. 判断一个数是否是偶数(提示: 用 `%` 求余)
3. 判断一个年份是否是闰年(能被4整除但不能被100整除,或者能被400整除)

::: tip 练习题3提示
闰年的条件可以写成: `(year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)`
:::

### 📌 小结

- `&&` (AND): 所有条件都要满足
- `||` (OR): 至少一个条件满足
- `!` (NOT): 反转结果
- 使用括号明确运算顺序
- 逻辑运算可以组合多个比较条件

## 综合练习

现在你已经学会了赋值、数学运算、比较运算和逻辑运算,来做一个综合练习吧!

### 💪 综合题目

编写一个程序,计算购物车的总价并判断是否享受折扣:

```java
public class ShoppingCart {
    public static void main(String[] args) {
        // 商品价格
        double price1 = 99.5;
        double price2 = 150.0;
        double price3 = 80.0;
        
        // 计算总价
        double total = price1 + price2 + price3;
        System.out.println("总价: " + total);
        
        // 判断是否满足折扣条件
        boolean isVip = true;
        boolean isOver200 = total >= 200;
        
        // VIP 或者 满200 可以打折
        boolean canDiscount = isVip || isOver200;
        System.out.println("可以享受折扣: " + canDiscount);
        
        // 如果可以打折,打9折
        // (这里暂时不用 if 语句,只是计算)
        double finalPrice = canDiscount ? total * 0.9 : total;
        System.out.println("最终价格: " + finalPrice);
    }
}
```

::: tip 提示
`? :` 是三元运算符,格式是 `条件 ? 值1 : 值2`,如果条件为 true 返回值1,否则返回值2。
:::

### 自己尝试

修改上面的代码:
1. 改变商品价格
2. 修改折扣条件(比如改成必须是VIP并且满200)
3. 计算打8折后的价格

## 常见错误和解决方法

### 错误 1: 使用 `=` 判断相等

```java
// ❌ 错误
if (age = 18) {  // 这是赋值,不是判断!
    System.out.println("成年了");
}

// ✅ 正确
if (age == 18) {  // 使用 == 判断相等
    System.out.println("成年了");
}
```

### 错误 2: 整数除法丢失小数

```java
// ❌ 结果是 3,不是 3.333...
int result = 10 / 3;

// ✅ 至少一边用小数
double result = 10.0 / 3;  // 或者 10 / 3.0 或者 10.0 / 3.0
```

### 错误 3: 逻辑运算符顺序混乱

```java
// ❌ 难以阅读
boolean result = age >= 18 && age <= 60 || isVip && score > 80;

// ✅ 使用括号明确顺序
boolean result = ((age >= 18) && (age <= 60)) || (isVip && (score > 80));
```

::: warning 注意
遇到复杂条件时,多用括号!括号不会影响性能,但能让代码更清晰。
:::

## 最后的话

恭喜你完成了基础运算的学习! 现在你已经掌握了:

- ✅ 使用 `=` 给变量赋值
- ✅ 使用 `+ - * / %` 进行数学计算
- ✅ 使用 `== != > < >= <=` 比较数值
- ✅ 使用 `&& || !` 组合多个条件

这些运算是编程的基础,你会在几乎每个程序中用到它们。多写代码,多练习,你会越来越熟练!
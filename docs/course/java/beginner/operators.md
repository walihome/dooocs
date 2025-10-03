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

编程的核心就是处理数据,而运算是处理数据的基本方式。这一章你会学到如何让计算机进行计算、比较和逻辑判断。

## 赋值运算(Assignment)

### 💡 概念说明

**赋值(Assignment)** 就是把一个值存储到变量里。使用 `=` 符号,把右边的值放到左边的变量中。

::: tip 提示
`=` 在编程中不是"等于",而是"赋值"的意思。
:::

### 📝 代码示例

```java{5,8,11}
public class AssignmentDemo {
    public static void main(String[] args) {
        
        // 把数字 100 赋值给变量 score
        int score = 100;
        System.out.println(score);  // 输出: 100
        
        // 可以重新赋值
        score = 85;
        System.out.println(score);  // 输出: 85
        
        // 把一个变量的值赋给另一个变量
        int newScore = score;
        System.out.println(newScore);  // 输出: 85
    }
}
```

**运行结果**:
```
100
85
85
```

## 数学运算(Arithmetic Operations)

### 💡 概念说明

Java 支持基本的数学运算:
- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `%` 求余(取模)

### 📝 代码示例

```java{5-9}
public class MathDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println(a + b);  // 加法: 13
        System.out.println(a - b);  // 减法: 7
        System.out.println(a * b);  // 乘法: 30
        System.out.println(a / b);  // 除法: 3
        System.out.println(a % b);  // 求余: 1
    }
}
```

**运行结果**:
```
13
7
30
3
1
```

::: warning 注意
整数除法会舍弃小数部分,`10 / 3` 结果是 `3` 而不是 `3.33`。如果需要小数结果,至少有一个数要是 `double` 类型。
:::

```java{4}
public class DivisionDemo {
    public static void main(String[] args) {
        System.out.println(10 / 3);      // 输出: 3
        System.out.println(10.0 / 3);    // 输出: 3.3333333333333335
    }
}
```

### 💪 练习题

**练习 1**: 计算商品总价

有 5 件商品,每件 19 元,打 8 折后需要支付多少钱?

<details>
<summary>点击查看答案</summary>

```java
public class PriceCalculator {
    public static void main(String[] args) {
        int quantity = 5;
        int price = 19;
        double discount = 0.8;
        
        double total = quantity * price * discount;
        System.out.println("总价: " + total);  // 输出: 总价: 76.0
    }
}
```

</details>

**练习 2**: 求余的应用

判断一个数字 17 是奇数还是偶数(提示: 偶数除以 2 余数为 0)

<details>
<summary>点击查看答案</summary>

```java
public class OddEvenCheck {
    public static void main(String[] args) {
        int number = 17;
        int remainder = number % 2;
        
        System.out.println("余数: " + remainder);  // 输出: 余数: 1
        // 余数为 1,说明是奇数
    }
}
```

</details>

## 比较运算(Comparison Operations)

### 💡 概念说明

**比较运算(Comparison)** 用于比较两个值,结果是 `true`(真) 或 `false`(假):
- `==` 相等
- `!=` 不相等
- `>` 大于
- `<` 小于
- `>=` 大于或等于
- `<=` 小于或等于

::: danger 警告
判断相等用 `==`,不是 `=`。`=` 是赋值,`==` 是比较!
:::

### 📝 代码示例

```java{6-11}
public class ComparisonDemo {
    public static void main(String[] args) {
        int age = 18;
        int adultAge = 18;
        
        System.out.println(age == adultAge);  // 相等: true
        System.out.println(age != 15);        // 不相等: true
        System.out.println(age > 15);         // 大于: true
        System.out.println(age < 20);         // 小于: true
        System.out.println(age >= 18);        // 大于或等于: true
        System.out.println(age <= 17);        // 小于或等于: false
    }
}
```

**运行结果**:
```
true
true
true
true
true
false
```

## 逻辑运算(Logical Operations)

### 💡 概念说明

**逻辑运算(Logical Operations)** 用于组合多个条件:
- `&&` 与(AND) - 两个条件都为真,结果才为真
- `||` 或(OR) - 至少一个条件为真,结果就为真
- `!` 非(NOT) - 取反,真变假,假变真

### 📝 代码示例

```java{7-9}
public class LogicalDemo {
    public static void main(String[] args) {
        int age = 20;
        int score = 85;
        
        // 年龄大于18 并且 分数大于80
        System.out.println(age > 18 && score > 80);  // true
        // 年龄小于18 或者 分数大于90
        System.out.println(age < 18 || score > 90);  // false
        // 年龄不等于20
        System.out.println(!(age == 20));  // false
    }
}
```

**运行结果**:
```
true
false
false
```

::: tip 理解 && 和 ||
- `&&` 像"并且":两个条件都满足才算满足
- `||` 像"或者":满足任何一个条件就算满足
:::

### 💪 练习题

**练习**: 会员折扣判断

一个商城规则:年龄在 18-60 岁之间,或者是会员,就可以享受折扣。写代码判断年龄 25 岁的非会员用户能否享受折扣。

<details>
<summary>点击查看答案</summary>

```java
public class MemberDiscount {
    public static void main(String[] args) {
        int age = 25;
        boolean isMember = false;
        
        // 年龄在18-60之间,或者是会员
        boolean canDiscount = (age >= 18 && age <= 60) || isMember;
        
        System.out.println("可以享受折扣: " + canDiscount);  // 输出: 可以享受折扣: true
    }
}
```

</details>

## 📌 小结

- **赋值运算** 用 `=` 把值存入变量
- **数学运算** 包括 `+` `-` `*` `/` `%`,整数除法会舍弃小数
- **比较运算** 返回 `true` 或 `false`,注意 `==` 是判断相等,`=` 是赋值
- **逻辑运算** 用 `&&` `||` `!` 组合条件,实现复杂的判断逻辑
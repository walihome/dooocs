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

编写程序时,我们经常需要对数据进行各种运算。Java 提供了丰富的**运算符(Operator)**来完成这些任务。

## 赋值运算

### 💡 概念说明

**赋值(Assignment)**就是把一个值存储到变量中。使用 `=` 符号,将右边的值赋给左边的变量。

### 📝 代码示例

```java{5,8,11}
public class AssignmentDemo {
    public static void main(String[] args) {
        
        // 声明变量并赋值
        int score = 85;
        
        // 先声明,后赋值
        int age;
        age = 18;
        
        // 将一个变量的值赋给另一个变量
        int myAge = age;
        
        System.out.println("分数: " + score);
        System.out.println("年龄: " + age);
        System.out.println("我的年龄: " + myAge);
    }
}
```

**运行结果:**
```
分数: 85
年龄: 18
我的年龄: 18
```

### 💪 练习题

1. 创建一个变量 `price`,赋值为 99,然后打印输出
2. 创建两个变量 `a` 和 `b`,将 `a` 的值赋给 `b`,打印两个变量
3. 声明一个变量但不赋值,然后在下一行赋值为 100

## 数学运算

### 💡 概念说明

Java 提供了五种基本的**算术运算符(Arithmetic Operator)**:
- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `%` 求余(取模)

### 📝 代码示例

```java{5-9,12}
public class MathDemo {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println("加法: " + (a + b));    // 13
        System.out.println("减法: " + (a - b));    // 7
        System.out.println("乘法: " + (a * b));    // 30
        System.out.println("除法: " + (a / b));    // 3
        System.out.println("求余: " + (a % b));    // 1
        
        // 计算总价格
        int unitPrice = 25;
        int quantity = 4;
        int totalPrice = unitPrice * quantity;
        System.out.println("总价: " + totalPrice);  // 100
    }
}
```

::: warning 注意
整数除法会舍弃小数部分! `10 / 3` 结果是 `3` 而不是 `3.333...`
:::

### 💪 练习题

1. 计算 `50 + 30`,并将结果存入变量 `sum`
2. 有 17 个苹果,平均分给 5 个人,每人几个? 还剩几个?
3. 计算长方形面积: 长 12,宽 8

## 比较运算

### 💡 概念说明

**比较运算符(Comparison Operator)**用于比较两个值,结果是 `true`(真)或 `false`(假):
- `==` 相等
- `!=` 不相等
- `>` 大于
- `<` 小于
- `>=` 大于或等于
- `<=` 小于或等于

### 📝 代码示例

```java{5-10}
public class ComparisonDemo {
    public static void main(String[] args) {
        int score = 85;
        
        System.out.println("分数等于85? " + (score == 85));    // true
        System.out.println("分数不等于85? " + (score != 85));  // false
        System.out.println("分数大于60? " + (score > 60));     // true
        System.out.println("分数小于90? " + (score < 90));     // true
        System.out.println("分数大于等于85? " + (score >= 85));// true
        System.out.println("分数小于等于80? " + (score <= 80));// false
    }
}
```

**运行结果:**
```
分数等于85? true
分数不等于85? false
分数大于60? true
分数小于90? true
分数大于等于85? true
分数小于等于80? false
```

::: danger 警告
判断相等用 `==` (两个等号),不是 `=` (一个等号)! `=` 是赋值运算符。
:::

### 💪 练习题

1. 判断变量 `age = 20` 是否大于 18
2. 判断 `10 * 5` 是否等于 50
3. 比较两个变量 `x = 7` 和 `y = 8`,谁更小?

## 逻辑运算

### 💡 概念说明

**逻辑运算符(Logical Operator)**用于组合多个条件:
- `&&` 逻辑与(AND) - 两个条件都为真时,结果才为真
- `||` 逻辑或(OR) - 只要有一个条件为真,结果就为真
- `!` 逻辑非(NOT) - 对结果取反

### 📝 代码示例

```java{5-6,9-10,13}
public class LogicalDemo {
    public static void main(String[] args) {
        int age = 20;
        int score = 85;
        
        // AND运算:两个条件都满足
        boolean result1 = (age >= 18) && (score >= 60);
        System.out.println("成年且及格? " + result1);  // true
        
        // OR运算:至少一个条件满足
        boolean result2 = (age < 18) || (score >= 90);
        System.out.println("未成年或优秀? " + result2);  // false
        
        // NOT运算:取反
        boolean result3 = !(score < 60);
        System.out.println("没有不及格? " + result3);  // true
        
        // 组合使用
        boolean canEnter = (age >= 18) && (age <= 65);
        System.out.println("可以进入? " + canEnter);  // true
    }
}
```

**运行结果:**
```
成年且及格? true
未成年或优秀? false
没有不及格? true
可以进入? true
```

::: tip 提示
`&&` 要求所有条件都成立,`||` 只需要一个条件成立。
:::

### 💪 练习题

1. 判断一个数 `num = 15` 是否在 10 到 20 之间(包含10和20)
2. 判断 `x = 5` 是否小于 3 或者大于 10
3. 判断 `score = 75` 是否不小于 60

## 📌 小结

- **赋值运算符** `=` 将值存入变量
- **算术运算符** `+ - * / %` 用于数学计算,整数除法会舍弃小数
- **比较运算符** `== != > < >= <=` 比较两个值,结果是 `true` 或 `false`
- **逻辑运算符** `&&` (与) `||` (或) `!` (非) 用于组合多个条件
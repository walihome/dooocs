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

## 赋值操作(Assignment)

💡 **概念说明**

赋值就是把一个值存储到变量中，使用 `=` 符号。

📝 **代码示例**

```java
public class BasicOperation {
    public static void main(String[] args) {
        int age = 25;  // 把25存储到age变量中
        int score = 90;
        
        System.out.println(age);    // 输出: 25
        System.out.println(score);  // 输出: 90
        
        // 可以重新赋值
        age = 30;
        System.out.println(age);    // 输出: 30
    }
}
```

✅ **验证方法**

运行代码后，你会看到三行输出：`25`、`90`、`30`。

💪 **练习题**

1. 创建一个变量 `price`，赋值为 100，然后改为 150，最后输出
2. 创建两个变量 `a` 和 `b`，分别赋值，然后交换它们的值（提示：需要第三个临时变量）

---

## 数学运算(Arithmetic Operations)

💡 **概念说明**

Java 支持基本数学运算：加(`+`)、减(`-`)、乘(`*`)、除(`/`)、求余(`%`)。

📝 **代码示例**

```java
public class MathOperation {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;
        
        System.out.println(a + b);  // 加法: 13
        System.out.println(a - b);  // 减法: 7
        System.out.println(a * b);  // 乘法: 30
        System.out.println(a / b);  // 除法: 3 (整数相除只保留整数部分)
        System.out.println(a % b);  // 求余: 1 (10除以3余1)
        
        // 小数运算
        double x = 10.0;
        double y = 3.0;
        System.out.println(x / y);  // 输出: 3.3333333333333335
    }
}
```

::: warning 注意
整数相除结果也是整数，`10 / 3` 等于 `3` 而不是 `3.33`。如果需要小数结果，至少有一个数要是小数类型。
:::

✅ **验证方法**

运行代码，观察输出结果。特别注意整数除法 `10 / 3 = 3`，以及求余运算 `10 % 3 = 1`。

💪 **练习题**

1. 计算 `17 % 5` 的结果
2. 计算总价：单价 `15.5`，数量 `4`
3. 判断一个数 `n` 是否是偶数（提示：`n % 2` 的结果是什么？）

---

## 比较运算(Comparison Operations)

💡 **概念说明**

比较运算用于比较两个值的大小关系，结果是 `true`(真) 或 `false`(假)。

📝 **代码示例**

```java
public class Comparison {
    public static void main(String[] args) {
        int a = 10;
        int b = 20;
        
        System.out.println(a == b);  // 相等: false
        System.out.println(a != b);  // 不相等: true
        System.out.println(a > b);   // 大于: false
        System.out.println(a < b);   // 小于: true
        System.out.println(a >= 10); // 大于等于: true
        System.out.println(b <= 15); // 小于等于: false
    }
}
```

::: tip 提示
- 判断相等用 `==` (两个等号)，不是 `=` (一个等号)
- `=` 是赋值，`==` 是比较
:::

✅ **验证方法**

运行代码，观察每个比较的结果是 `true` 还是 `false`。

💪 **练习题**

1. 比较 `15` 和 `15` 是否相等
2. 判断年龄 `18` 是否大于等于成年标准 `18`
3. 判断分数 `85` 是否在 `60` 到 `100` 之间（提示：需要两个比较）

---

## 逻辑运算(Logical Operations)

💡 **概念说明**

逻辑运算用于组合多个条件：
- `&&` (and)：两个条件都为真，结果才为真
- `||` (or)：任意一个条件为真，结果就为真
- `!` (not)：取反，真变假，假变真

📝 **代码示例**

```java
public class LogicalOperation {
    public static void main(String[] args) {
        int age = 25;
        int score = 85;
        
        // and运算: 年龄大于18且分数大于80
        System.out.println(age > 18 && score > 80);  // true (两个都满足)
        
        // or运算: 年龄小于18或分数大于90
        System.out.println(age < 18 || score > 90);  // false (两个都不满足)
        
        // not运算: 分数不大于90
        System.out.println(!(score > 90));  // true
        
        // 组合运算
        boolean isAdult = age >= 18;
        boolean hasHighScore = score >= 80;
        System.out.println(isAdult && hasHighScore);  // true
    }
}
```

::: tip 提示
你可以把比较结果存储到 `boolean` 类型变量中，让代码更易读。
:::

✅ **验证方法**

运行代码，理解每个逻辑运算的结果。试着修改 `age` 和 `score` 的值，观察结果变化。

💪 **练习题**

1. 判断一个数 `n` 是否在 `10` 到 `20` 之间（包含边界）
2. 判断用户是否符合优惠条件：年龄小于 `12` 或大于 `65`
3. 判断密码是否有效：长度大于 `6` 且不等于 `"123456"`

---

## 📌 小结

1. **赋值**使用 `=`，可以随时改变变量的值
2. **数学运算**注意整数相除结果仍是整数，求余(`%`)常用于判断整除
3. **比较运算**结果是 `boolean` 类型，相等判断用 `==` 而非 `=`
4. **逻辑运算**中 `&&` 要求全部为真，`||` 只需一个为真
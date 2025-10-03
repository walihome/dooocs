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

## 💡 赋值(Assignment)

赋值就是把一个值存到变量里,就像给盒子贴标签并放入东西。

```java
int age = 18;  // 把数字 18 存到名为 age 的变量里
```

运算符是 `=`,读作"赋值给",不是"等于"。

::: warning 注意
`=` 不是数学里的"等于",而是"把右边的值放进左边的变量"
:::

---

## 💡 数学运算(Arithmetic Operations)

Java 提供 5 种基本数学运算:

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `+` | 加法 | `5 + 3` 结果是 8 |
| `-` | 减法 | `5 - 3` 结果是 2 |
| `*` | 乘法 | `5 * 3` 结果是 15 |
| `/` | 除法 | `10 / 3` 结果是 3(整数相除) |
| `%` | 求余 | `10 % 3` 结果是 1(余数) |

### 📝 代码示例

```java{3-7}
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

**运行结果:**
```
13
7
30
3
1
```

::: tip 提示
`%` 求余运算常用于判断奇偶数:任何数 `% 2` 结果是 0 就是偶数,是 1 就是奇数
:::

---

## 💡 比较运算(Comparison Operations)

比较运算用于比较两个值的大小关系,结果是 `true`(真)或 `false`(假)。

| 运算符 | 含义 | 示例 |
|--------|------|------|
| `==` | 相等 | `5 == 5` 结果是 true |
| `!=` | 不相等 | `5 != 3` 结果是 true |
| `>` | 大于 | `5 > 3` 结果是 true |
| `<` | 小于 | `5 < 3` 结果是 false |
| `>=` | 大于等于 | `5 >= 5` 结果是 true |
| `<=` | 小于等于 | `3 <= 5` 结果是 true |

### 📝 代码示例

```java{3-5,7-9}
public class CompareDemo {
    public static void main(String[] args) {
        int score = 85;
        
        System.out.println(score == 100);  // false
        System.out.println(score > 60);    // true
        System.out.println(score < 90);    // true
    }
}
```

**运行结果:**
```
false
true
true
```

::: warning 注意
判断相等用 `==`(两个等号),不是 `=`(一个等号)
:::

---

## 💡 逻辑运算(Logical Operations)

逻辑运算用于组合多个条件,结果也是 `true` 或 `false`。

| 运算符 | 含义 | 说明 |
|--------|------|------|
| `&&` | 并且(and) | 两边都是 true 才是 true |
| `\|\|` | 或者(or) | 有一边是 true 就是 true |
| `!` | 取反(not) | true 变 false,false 变 true |

### 📝 代码示例

```java{3-5,7-11}
public class LogicDemo {
    public static void main(String[] args) {
        int age = 20;
        boolean hasTicket = true;
        
        // 年龄大于18 并且 有票
        System.out.println(age > 18 && hasTicket);  // true
        
        // 年龄小于12 或者 年龄大于60
        System.out.println(age < 12 || age > 60);   // false
        
        // 没有票
        System.out.println(!hasTicket);  // false
    }
}
```

**运行结果:**
```
true
false
false
```

::: tip 提示
`&&` 要求两个条件同时满足,`||` 只需满足一个条件即可
:::

---

## 💪 练习题

### 练习 1: 计算找零

你买了一件 68 元的商品,付了 100 元,请计算找零金额。

<details>
<summary>查看答案</summary>

```java
public class ChangeDemo {
    public static void main(String[] args) {
        int price = 68;
        int paid = 100;
        int change = paid - price;
        
        System.out.println(change);  // 32
    }
}
```

</details>

### 练习 2: 判断能否进入游乐园

游乐园规则:年龄必须大于等于 12 岁,并且身高必须大于 140 厘米才能进入。请判断一个 10 岁、身高 145 厘米的孩子能否进入。

<details>
<summary>查看答案</summary>

```java
public class ParkDemo {
    public static void main(String[] args) {
        int age = 10;
        int height = 145;
        
        boolean canEnter = age >= 12 && height > 140;
        System.out.println(canEnter);  // false
    }
}
```

</details>

---

## 📌 小结

- **赋值运算符** `=` 用于把值存入变量
- **数学运算符** `+ - * / %` 用于数值计算,其中 `%` 是求余数
- **比较运算符** `== != > < >= <=` 用于比较大小,结果是 true 或 false
- **逻辑运算符** `&& || !` 用于组合多个条件
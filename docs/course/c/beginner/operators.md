---
title: 基础运算
category: c
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 基础运算

在C语言中,运算符(Operator)可以让你对数据进行各种操作。这一章我们会学习4类最常用的运算。

## 赋值运算(Assignment)

### 💡 概念说明

赋值就是把一个值存储到变量里,使用 `=` 符号。

### 📝 代码示例

```c{5-7}
#include <stdio.h>

int main() {
    // 赋值操作
    int age = 25;           // 把25存储到age变量
    int score = age;        // 把age的值复制给score
    age = 30;               // 重新赋值,age现在是30
    
    printf("age = %d\n", age);       // 输出: age = 30
    printf("score = %d\n", score);   // 输出: score = 25
    
    return 0;
}
```

**运行结果**:
```
age = 30
score = 25
```

::: tip 提示
赋值是从右往左的:`age = 30` 表示把30存入age,而不是age等于30。
:::

## 数学运算(Arithmetic)

### 💡 概念说明

5种基本数学运算:
- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `%` 求余(Modulo)

### 📝 代码示例

```c{5-9}
#include <stdio.h>

int main() {
    // 数学运算
    int a = 10, b = 3;
    int sum = a + b;        // 加法: 13
    int diff = a - b;       // 减法: 7
    int prod = a * b;       // 乘法: 30
    int quot = a / b;       // 除法: 3 (整数除法)
    int rem = a % b;        // 求余: 1 (10除以3余1)
    
    printf("10 + 3 = %d\n", sum);
    printf("10 - 3 = %d\n", diff);
    printf("10 * 3 = %d\n", prod);
    printf("10 / 3 = %d\n", quot);
    printf("10 %% 3 = %d\n", rem);
    
    return 0;
}
```

**运行结果**:
```
10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
10 / 3 = 3
10 % 3 = 1
```

::: warning 注意
整数除法会丢弃小数部分,`10 / 3` 结果是3而不是3.333。
:::

## 比较运算(Comparison)

### 💡 概念说明

比较两个值的大小关系,结果是真(1)或假(0):
- `==` 相等
- `!=` 不相等
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于

### 📝 代码示例

```c{5-10}
#include <stdio.h>

int main() {
    // 比较运算
    int x = 5, y = 8;
    int result1 = (x == y);    // 相等吗? 0(假)
    int result2 = (x != y);    // 不相等吗? 1(真)
    int result3 = (x > y);     // x大于y吗? 0(假)
    int result4 = (x < y);     // x小于y吗? 1(真)
    int result5 = (x >= 5);    // x大于等于5吗? 1(真)
    int result6 = (y <= 10);   // y小于等于10吗? 1(真)
    
    printf("5 == 8: %d\n", result1);
    printf("5 != 8: %d\n", result2);
    printf("5 > 8: %d\n", result3);
    printf("5 < 8: %d\n", result4);
    printf("5 >= 5: %d\n", result5);
    printf("8 <= 10: %d\n", result6);
    
    return 0;
}
```

**运行结果**:
```
5 == 8: 0
5 != 8: 1
5 > 8: 0
5 < 8: 1
5 >= 5: 1
8 <= 10: 1
```

::: danger 警告
判断相等用 `==`,不是 `=`。`=` 是赋值操作。
:::

## 逻辑运算(Logical)

### 💡 概念说明

组合多个条件判断:
- `&&` 与(AND) - 两个都为真时结果才为真
- `||` 或(OR) - 至少一个为真时结果就为真
- `!` 非(NOT) - 取反

### 📝 代码示例

```c{5-8}
#include <stdio.h>

int main() {
    // 逻辑运算
    int age = 20;
    int has_ticket = 1;     // 1表示有票
    int result1 = (age >= 18) && (has_ticket == 1);  // 与运算
    int result2 = (age < 18) || (has_ticket == 1);   // 或运算
    int result3 = !(age < 18);                        // 非运算
    
    printf("年龄>=18 且 有票: %d\n", result1);
    printf("年龄<18 或 有票: %d\n", result2);
    printf("不是 年龄<18: %d\n", result3);
    
    return 0;
}
```

**运行结果**:
```
年龄>=18 且 有票: 1
年龄<18 或 有票: 1
不是 年龄<18: 1
```

::: tip 提示
`&&` 要求两边都为真,`||` 只要一边为真就可以。
:::

## 💪 练习题

### 练习1: 计算器

编写程序,输入两个数字,计算并输出它们的和、差、积、商。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    int num1 = 20, num2 = 4;
    
    printf("和: %d\n", num1 + num2);
    printf("差: %d\n", num1 - num2);
    printf("积: %d\n", num1 * num2);
    printf("商: %d\n", num1 / num2);
    
    return 0;
}
```
</details>

### 练习2: 判断成绩

编写程序,判断分数是否及格(>=60)且小于100。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    int score = 75;
    int pass = (score >= 60) && (score < 100);
    
    printf("成绩是否合格: %d\n", pass);
    
    return 0;
}
```
</details>

## 📌 小结

- 赋值用 `=`,把右边的值存入左边的变量
- 数学运算有 `+ - * / %`,整数除法会丢弃小数
- 比较运算返回1(真)或0(假),注意 `==` 不是 `=`
- 逻辑运算 `&&` 要求都为真,`||` 只要一个为真
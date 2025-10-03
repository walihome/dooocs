---
title: 控制流
category: Java
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 控制流

在编程中，程序不总是从上到下一行行执行的。有时候我们需要让程序重复执行某些代码，或者根据不同情况执行不同的代码。这就是**控制流(Control Flow)**要解决的问题。

## for 循环

### 💡 概念说明

当你需要重复执行某段代码时，就需要用到**循环(Loop)**。`for` 循环是最常用的循环方式，它的结构包含三个部分：
- 初始化：从哪里开始
- 条件判断：什么时候停止
- 更新：每次循环后如何变化

### 📝 代码示例

```java{1,3}
public class ForLoopExample {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println("这是第 " + i + " 次循环");
        }
    }
}
```

**运行结果：**
```
这是第 0 次循环
这是第 1 次循环
这是第 2 次循环
这是第 3 次循环
这是第 4 次循环
```

第 1 行中的 `for` 循环包含：
- `int i = 0` - 从 0 开始计数
- `i < 5` - 当 i 小于 5 时继续循环
- `i++` - 每次循环后 i 增加 1

::: tip 提示
`i++` 是 `i = i + 1` 的简写，表示让 i 的值增加 1。
:::

### 💪 练习题

1. 修改代码，让它打印 1 到 10 的数字
2. 打印 0 到 100 之间所有的偶数（提示：可以用 `i += 2` 让 i 每次增加 2）

## while 循环

### 💡 概念说明

`while` 循环比 `for` 循环更简单，它只需要一个条件：只要条件为真，就一直执行循环体内的代码。

### 📝 代码示例

```java{3,5}
public class WhileExample {
    public static void main(String[] args) {
        int count = 0;
        
        while (count < 3) {
            System.out.println("计数: " + count);
            count++;
        }
    }
}
```

**运行结果：**
```
计数: 0
计数: 1
计数: 2
```

第 3 行定义了一个变量 `count`，第 5 行检查 `count < 3` 是否成立。如果成立，就执行大括号内的代码，然后再次检查条件。

::: warning 注意
如果忘记写 `count++`，`count` 永远小于 3，程序会无限循环下去！这叫做**死循环(Infinite Loop)**。
:::

### 💪 练习题

1. 使用 `while` 循环打印 5 到 1 的倒计时（提示：用 `count--` 让数字递减）
2. 计算 1 + 2 + 3 + ... + 100 的总和

## if 条件判断

### 💡 概念说明

有时候我们需要根据不同情况执行不同的代码。**条件判断(Conditional Statement)** 让程序可以"做决定"。`if` 语句包含：
- `if` - 如果条件成立，执行这段代码
- `else if` - 否则，如果另一个条件成立，执行这段代码
- `else` - 否则，执行这段代码

### 📝 代码示例

```java{3-9}
public class IfExample {
    public static void main(String[] args) {
        int score = 85;
        
        if (score >= 90) {
            System.out.println("优秀");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}
```

**运行结果：**
```
及格
```

第 3 行定义了分数，第 5-11 行根据不同的分数段打印不同的评价。程序会从上到下检查条件，一旦某个条件成立，就执行对应的代码块，然后跳过剩余的条件。

::: tip 提示
条件判断中常用的**比较运算符(Comparison Operator)**：
- `==` 等于
- `!=` 不等于
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
:::

**结合循环使用：**

```java{3-7}
public class CombinedExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            if (i % 2 == 0) {
                System.out.println(i + " 是偶数");
            }
        }
    }
}
```

**运行结果：**
```
2 是偶数
4 是偶数
6 是偶数
8 是偶数
10 是偶数
```

第 4 行中的 `%` 是**取余运算符(Modulo Operator)**，`i % 2` 表示 i 除以 2 的余数。如果余数为 0，说明 i 是偶数。

### 💪 练习题

1. 打印 1 到 20 的数字，但只打印能被 3 整除的数字
2. 使用 `for` 循环和 `if` 判断，找出 1 到 100 之间所有能同时被 3 和 5 整除的数字
3. 写一个程序判断一个数字是正数、负数还是零

## 📌 小结

- `for` 循环适合知道循环次数的情况，格式为 `for(初始化; 条件; 更新)`
- `while` 循环适合不确定循环次数，只知道停止条件的情况
- `if` 语句让程序根据条件执行不同的代码，可以配合 `else if` 和 `else` 使用
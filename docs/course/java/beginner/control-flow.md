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

程序就像一个自动执行的流程，控制流决定了程序按什么顺序、什么条件、重复多少次来执行代码。

## if 语句 - 做判断

**💡 概念说明**

**条件判断(if Statement)** 让程序根据不同情况执行不同的代码。就像你出门前看天气：下雨就带伞，不下雨就不带。

基本结构：
- `if` - 如果条件成立，执行这段代码
- `else if` - 否则如果另一个条件成立
- `else` - 以上都不成立时执行

### 📝 代码示例

```java{5-11}
public class IfDemo {
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

**运行结果**：
```
及格
```

因为 85 不满足 `>= 90`，但满足 `>= 60`，所以执行第二个分支。

::: tip 提示
`else if` 和 `else` 都是可选的，最简单的 if 语句只需要 `if` 部分。
:::

### 💪 练习题

**练习 1**：判断一个数字是正数、负数还是零

<details>
<summary>点击查看答案</summary>

```java
public class NumberCheck {
    public static void main(String[] args) {
        int num = -5;
        
        if (num > 0) {
            System.out.println("正数");
        } else if (num < 0) {
            System.out.println("负数");
        } else {
            System.out.println("零");
        }
    }
}
```
</details>

**练习 2**：根据年龄判断票价（12岁以下半价，60岁以上免费，其他全价30元）

<details>
<summary>点击查看答案</summary>

```java
public class TicketPrice {
    public static void main(String[] args) {
        int age = 10;
        
        if (age < 12) {
            System.out.println("票价：15元");
        } else if (age >= 60) {
            System.out.println("票价：免费");
        } else {
            System.out.println("票价：30元");
        }
    }
}
```
</details>

## for 循环 - 重复固定次数

**💡 概念说明**

**循环(Loop)** 让程序重复执行相同的代码。`for` 循环适合知道要重复多少次的情况，比如打印 1 到 10 的数字。

结构：`for (初始化; 条件; 更新) { 代码 }`

### 📝 代码示例

```java{4}
public class ForDemo {
    public static void main(String[] args) {
        // 打印 1 到 5
        for (int i = 1; i <= 5; i++) {
            System.out.println("第 " + i + " 次");
        }
    }
}
```

**运行结果**：
```
第 1 次
第 2 次
第 3 次
第 4 次
第 5 次
```

这段代码的执行过程：
1. `int i = 1` - 从 1 开始
2. 检查 `i <= 5` - 满足就执行代码
3. `i++` - 执行完后 i 加 1
4. 重复步骤 2-3，直到 `i > 5`

::: warning 注意
`i++` 表示 `i = i + 1`，是让变量加 1 的简写方式。
:::

### 📝 求和示例

```java{5,6}
public class SumDemo {
    public static void main(String[] args) {
        int sum = 0;
        
        for (int i = 1; i <= 10; i++) {
            sum = sum + i;  // 累加
        }
        
        System.out.println("1到10的和是：" + sum);
    }
}
```

**运行结果**：
```
1到10的和是：55
```

### 💪 练习题

**练习 1**：打印 1 到 20 之间的所有偶数

<details>
<summary>点击查看答案</summary>

```java
public class EvenNumbers {
    public static void main(String[] args) {
        for (int i = 2; i <= 20; i = i + 2) {
            System.out.println(i);
        }
    }
}
```
</details>

**练习 2**：计算 1 到 100 之间所有能被 3 整除的数的和

<details>
<summary>点击查看答案</summary>

```java
public class DivisibleBy3 {
    public static void main(String[] args) {
        int sum = 0;
        
        for (int i = 3; i <= 100; i = i + 3) {
            sum = sum + i;
        }
        
        System.out.println("总和：" + sum);
    }
}
```
</details>

## while 循环 - 条件满足就继续

**💡 概念说明**

**while 循环** 适合不知道要重复多少次，只知道什么时候停止的情况。比如一直读取用户输入，直到输入"退出"。

结构：`while (条件) { 代码 }`

### 📝 代码示例

```java{4-7}
public class WhileDemo {
    public static void main(String[] args) {
        int count = 1;
        
        while (count <= 5) {
            System.out.println("计数：" + count);
            count++;  // 别忘了更新条件
        }
    }
}
```

**运行结果**：
```
计数：1
计数：2
计数：3
计数：4
计数：5
```

::: danger 警告
如果忘记在循环内更新条件（比如忘记 `count++`），程序会无限循环，一直运行下去！
:::

### 📝 实用示例

```java{4,5,9}
public class GuessNumber {
    public static void main(String[] args) {
        int secret = 42;
        int guess = 30;
        
        while (guess != secret) {
            System.out.println("猜错了，当前猜测：" + guess);
            guess++;  // 继续猜下一个数字
        }
        
        System.out.println("猜对了！答案是：" + secret);
    }
}
```

**运行结果**：
```
猜错了，当前猜测：30
猜错了,当前猜测：31
...（中间省略）
猜错了，当前猜测：41
猜对了！答案是：42
```

### 💪 练习题

**练习 1**：计算一个数字的各位数字之和（例如 123 的结果是 6）

<details>
<summary>点击查看答案</summary>

```java
public class DigitSum {
    public static void main(String[] args) {
        int num = 123;
        int sum = 0;
        
        while (num > 0) {
            sum = sum + num % 10;  // 取最后一位
            num = num / 10;        // 去掉最后一位
        }
        
        System.out.println("各位数字之和：" + sum);
    }
}
```
</details>

**练习 2**：打印 1 到 100，但遇到能被 7 整除的数就停止

<details>
<summary>点击查看答案</summary>

```java
public class StopAt7 {
    public static void main(String[] args) {
        int i = 1;
        
        while (i <= 100) {
            if (i % 7 == 0) {
                break;  // 跳出循环
            }
            System.out.println(i);
            i++;
        }
    }
}
```
</details>

## 📌 小结

- **if** 用于根据条件执行不同代码
- **for** 用于重复固定次数
- **while** 用于条件满足时持续重复
- 循环一定要记得更新条件，否则会无限循环
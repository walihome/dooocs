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

程序的执行顺序被称为**控制流(Control Flow)**。默认情况下，程序从上到下逐行执行，但我们经常需要改变这个顺序——比如重复执行某段代码，或者根据条件选择执行哪段代码。

## if 语法

### 💡 概念说明

**条件语句(if Statement)** 用于根据条件决定是否执行某段代码。就像生活中的决策："如果下雨，就带伞"。

基本语法：
```java
if (条件) {
    // 条件为真时执行的代码
}
```

### 📝 代码示例

```java{4-6}
public class IfExample {
    public static void main(String[] args) {
        int age = 18;
        if (age >= 18) {
            System.out.println("你已成年");
        }
        System.out.println("程序结束");
    }
}
```

**运行结果**：
```
你已成年
程序结束
```

如果把 `age` 改为 `16`，则只会输出：
```
程序结束
```

### if-else 语法

当条件不满足时，执行另一段代码：

```java{4-8}
public class IfElseExample {
    public static void main(String[] args) {
        int score = 75;
        if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}
```

### else if 多条件判断

```java{4-10}
public class GradeExample {
    public static void main(String[] args) {
        int score = 85;
        if (score >= 90) {
            System.out.println("优秀");
        } else if (score >= 80) {
            System.out.println("良好");
        } else if (score >= 60) {
            System.out.println("及格");
        } else {
            System.out.println("不及格");
        }
    }
}
```

::: tip 提示
条件判断从上到下进行，一旦某个条件满足就执行对应代码块，后面的条件不再检查。
:::

### 💪 练习题

**练习 1**：判断一个数字是正数、负数还是零

<details>
<summary>点击查看答案</summary>

```java
public class NumberCheck {
    public static void main(String[] args) {
        int number = -5;
        if (number > 0) {
            System.out.println("正数");
        } else if (number < 0) {
            System.out.println("负数");
        } else {
            System.out.println("零");
        }
    }
}
```

</details>

**练习 2**：判断一个数字是奇数还是偶数（提示：使用 `%` 运算符）

<details>
<summary>点击查看答案</summary>

```java
public class OddEven {
    public static void main(String[] args) {
        int number = 7;
        if (number % 2 == 0) {
            System.out.println("偶数");
        } else {
            System.out.println("奇数");
        }
    }
}
```

</details>

## for 循环

### 💡 概念说明

**循环(Loop)** 用于重复执行某段代码。**for 循环**适合已知重复次数的场景。

基本语法：
```java
for (初始化; 条件; 更新) {
    // 循环体
}
```

- **初始化**：设置循环变量的初始值（只执行一次）
- **条件**：每次循环前检查，为真则继续，为假则结束
- **更新**：每次循环后执行

### 📝 代码示例

```java{3-5}
public class ForExample {
    public static void main(String[] args) {
        for (int i = 1; i <= 5; i++) {
            System.out.println("这是第 " + i + " 次循环");
        }
    }
}
```

**运行结果**：
```
这是第 1 次循环
这是第 2 次循环
这是第 3 次循环
这是第 4 次循环
这是第 5 次循环
```

**执行过程**：
1. `int i = 1`：创建变量 i，初始值为 1
2. 检查 `i <= 5`：1 <= 5 为真，执行循环体
3. `i++`：i 变为 2
4. 检查 `i <= 5`：2 <= 5 为真，继续循环
5. 重复直到 i 为 6 时，6 <= 5 为假，循环结束

### 累加求和

```java{4,5-7}
public class SumExample {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum = sum + i;  // 累加
        }
        System.out.println("1 到 10 的和是: " + sum);
    }
}
```

**运行结果**：
```
1 到 10 的和是: 55
```

### 💪 练习题

**练习 1**：打印 1 到 10 的所有偶数

<details>
<summary>点击查看答案</summary>

```java
public class EvenNumbers {
    public static void main(String[] args) {
        for (int i = 2; i <= 10; i = i + 2) {
            System.out.println(i);
        }
    }
}
```

</details>

**练习 2**：计算 1 × 2 × 3 × 4 × 5 的结果

<details>
<summary>点击查看答案</summary>

```java
public class Factorial {
    public static void main(String[] args) {
        int result = 1;
        for (int i = 1; i <= 5; i++) {
            result = result * i;
        }
        System.out.println("结果是: " + result);
    }
}
```

</details>

## while 循环

### 💡 概念说明

**while 循环**适合不确定重复次数的场景，只要条件为真就一直执行。

基本语法：
```java
while (条件) {
    // 循环体
}
```

### 📝 代码示例

```java{4-7}
public class WhileExample {
    public static void main(String[] args) {
        int count = 1;
        while (count <= 5) {
            System.out.println("count 的值是: " + count);
            count++;  // 每次加 1
        }
    }
}
```

**运行结果**：
```
count 的值是: 1
count 的值是: 2
count 的值是: 3
count 的值是: 4
count 的值是: 5
```

::: warning 注意
while 循环中必须有改变条件的语句（如 `count++`），否则会形成**无限循环(Infinite Loop)**，程序无法停止。
:::

### 实际应用场景

```java{4,5-8}
public class GuessNumber {
    public static void main(String[] args) {
        int target = 42;
        int guess = 10;
        while (guess != target) {
            System.out.println("猜测: " + guess);
            guess = guess + 10;  // 每次增加 10
        }
        System.out.println("猜对了！答案是: " + target);
    }
}
```

### for 和 while 的区别

- **for 循环**：知道要循环多少次时使用
- **while 循环**：不确定循环次数，根据条件判断时使用

下面两段代码效果相同：

```java
// 使用 for
for (int i = 0; i < 3; i++) {
    System.out.println(i);
}

// 使用 while
int i = 0;
while (i < 3) {
    System.out.println(i);
    i++;
}
```

### 💪 练习题

**练习 1**：使用 while 循环计算 2 的多少次方大于 1000

<details>
<summary>点击查看答案</summary>

```java
public class PowerOfTwo {
    public static void main(String[] args) {
        int result = 1;
        int count = 0;
        while (result <= 1000) {
            result = result * 2;
            count++;
        }
        System.out.println("2 的 " + count + " 次方 = " + result);
    }
}
```

</details>

**练习 2**：倒计时程序（从 10 倒数到 1）

<details>
<summary>点击查看答案</summary>

```java
public class Countdown {
    public static void main(String[] args) {
        int number = 10;
        while (number >= 1) {
            System.out.println(number);
            number--;
        }
        System.out.println("发射！");
    }
}
```

</details>

## 📌 小结

- **if 语句**：根据条件决定是否执行代码，可以使用 else 和 else if 处理多种情况
- **for 循环**：适合已知次数的重复操作，语法包含初始化、条件和更新三部分
- **while 循环**：适合根据条件判断的重复操作，要注意避免无限循环
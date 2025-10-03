---
title: 控制流
category: c
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 控制流

在编程中，程序默认是从上到下一行行执行的。但有时候我们需要：
- 重复做某件事（比如打印10次"Hello"）
- 根据条件决定做不做某件事（比如只有成绩及格才打印"通过"）

这就是**控制流(Control Flow)**要解决的问题。

## for循环

### 💡 概念说明

`for`循环用于**重复执行某段代码指定的次数**。它的结构是：

```c
for (初始化; 条件; 更新) {
    // 要重复执行的代码
}
```

- **初始化**：设置起始值（只执行一次）
- **条件**：每次循环前检查，为真就继续，为假就停止
- **更新**：每次循环后执行（通常是计数器加1）

### 📝 代码示例

```c{6-8}
#include <stdio.h>

int main() {
    printf("开始倒计时:\n");
    
    for (int i = 5; i >= 1; i--) {
        printf("%d\n", i);
    }
    
    printf("发射!\n");
    return 0;
}
```

**运行结果**：
```
开始倒计时:
5
4
3
2
1
发射!
```

**这段代码做了什么？**
- `int i = 5`：从5开始
- `i >= 1`：只要i大于等于1就继续循环
- `i--`：每次循环后i减1
- 总共循环5次，打印5、4、3、2、1

### 💪 练习题

**练习1**：打印1到10的所有数字

::: details 点击查看答案
```c
#include <stdio.h>

int main() {
    for (int i = 1; i <= 10; i++) {
        printf("%d\n", i);
    }
    return 0;
}
```
:::

**练习2**：计算1到100的总和

::: details 点击查看答案
```c
#include <stdio.h>

int main() {
    int sum = 0;  // 用于存储总和
    
    for (int i = 1; i <= 100; i++) {
        sum = sum + i;  // 每次把i加到sum上
    }
    
    printf("1到100的总和是: %d\n", sum);
    return 0;
}
```
输出：`1到100的总和是: 5050`
:::

## while循环

### 💡 概念说明

`while`循环用于**在条件为真时持续执行代码**。它比`for`循环更灵活，适合不知道要循环多少次的情况。

```c
while (条件) {
    // 要重复执行的代码
}
```

只要条件为真，就一直执行大括号里的代码。

### 📝 代码示例

```c{6-9}
#include <stdio.h>

int main() {
    int number = 1;
    
    while (number <= 5) {
        printf("第%d次循环\n", number);
        number++;  // 每次加1
    }
    
    printf("循环结束\n");
    return 0;
}
```

**运行结果**：
```
第1次循环
第2次循环
第3次循环
第4次循环
第5次循环
循环结束
```

::: warning 注意
如果忘记写`number++`，`number`永远是1，条件永远为真，程序会无限循环下去！
:::

### 📝 实用示例：猜数字游戏

```c{7-17}
#include <stdio.h>

int main() {
    int secret = 42;  // 秘密数字
    int guess = 0;    // 用户猜的数字
    
    while (guess != secret) {
        printf("请猜一个数字: ");
        scanf("%d", &guess);
        
        if (guess > secret) {
            printf("太大了!\n");
        } else if (guess < secret) {
            printf("太小了!\n");
        }
    }
    
    printf("恭喜你猜对了!\n");
    return 0;
}
```

这个程序会一直让你猜数字，直到猜对为止。

### 💪 练习题

**练习**：写一个程序，输入正整数，计算它有多少位数字（比如123是3位数）

::: details 点击查看答案
```c
#include <stdio.h>

int main() {
    int number, count = 0;
    
    printf("请输入一个正整数: ");
    scanf("%d", &number);
    
    while (number > 0) {
        number = number / 10;  // 去掉最后一位
        count++;               // 计数加1
    }
    
    printf("这个数字有%d位\n", count);
    return 0;
}
```
:::

## if条件判断

### 💡 概念说明

`if`语句用于**根据条件决定是否执行某段代码**。有三种形式：

1. **单独的if**：条件为真才执行
```c
if (条件) {
    // 代码
}
```

2. **if-else**：二选一
```c
if (条件) {
    // 条件为真时执行
} else {
    // 条件为假时执行
}
```

3. **if-else if-else**：多选一
```c
if (条件1) {
    // 条件1为真
} else if (条件2) {
    // 条件2为真
} else {
    // 以上都不满足
}
```

### 📝 代码示例

```c{6-12}
#include <stdio.h>

int main() {
    int score;
    
    printf("请输入考试分数: ");
    scanf("%d", &score);
    
    if (score >= 90) {
        printf("优秀!\n");
    } else if (score >= 60) {
        printf("及格\n");
    } else {
        printf("不及格\n");
    }
    
    return 0;
}
```

**运行示例**：
- 输入95，输出：`优秀!`
- 输入75，输出：`及格`
- 输入45，输出：`不及格`

### 📝 常用比较运算符

```c
==  // 等于
!=  // 不等于
>   // 大于
<   // 小于
>=  // 大于等于
<=  // 小于等于
```

::: tip 提示
`=`是赋值，`==`是比较。写条件判断时要用`==`：
```c
if (x == 5)  // 正确：判断x是否等于5
if (x = 5)   // 错误：这是把5赋值给x
```
:::

### 📝 组合条件示例

```c{6-10}
#include <stdio.h>

int main() {
    int age, has_ticket;
    
    printf("请输入年龄: ");
    scanf("%d", &age);
    printf("有票吗? (1=有, 0=没有): ");
    scanf("%d", &has_ticket);
    
    if (age >= 18 && has_ticket == 1) {
        printf("可以入场\n");
    } else {
        printf("不能入场\n");
    }
    
    return 0;
}
```

- `&&`表示"并且"（两个条件都要满足）
- `||`表示"或者"（满足其中一个即可）

### 💪 练习题

**练习1**：判断一个数是奇数还是偶数

::: details 点击查看答案
```c
#include <stdio.h>

int main() {
    int number;
    
    printf("请输入一个整数: ");
    scanf("%d", &number);
    
    if (number % 2 == 0) {
        printf("%d是偶数\n", number);
    } else {
        printf("%d是奇数\n", number);
    }
    
    return 0;
}
```
提示：`%`是取余运算符，偶数除以2余数为0
:::

**练习2**：输入三个数，找出最大的那个

::: details 点击查看答案
```c
#include <stdio.h>

int main() {
    int a, b, c, max;
    
    printf("请输入三个整数: ");
    scanf("%d %d %d", &a, &b, &c);
    
    max = a;  // 假设a最大
    
    if (b > max) {
        max = b;
    }
    
    if (c > max) {
        max = c;
    }
    
    printf("最大的数是: %d\n", max);
    return 0;
}
```
:::

## 📌 小结

- **for循环**：知道要重复多少次时使用，适合计数场景
- **while循环**：不确定重复次数，只要条件满足就继续，记得更新条件避免死循环
- **if条件判断**：根据条件执行不同代码，注意`==`和`=`的区别
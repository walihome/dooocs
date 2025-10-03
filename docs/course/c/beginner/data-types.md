---
title: 数据类型
category: c
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 数据类型

在C语言中,数据类型(Data Type)告诉计算机你想存储什么样的信息。就像生活中我们用不同的容器装不同的东西:瓶子装水、盒子装书、钱包装钱。

## 整数类型(Integer)

### 💡 概念说明

整数类型用来存储没有小数点的数字,比如年龄、人数、分数等。在C语言中用 `int` 表示。

### 📝 代码示例

```c{5,6,9}
#include <stdio.h>

int main() {
    // 声明并赋值整数变量
    int age = 18;
    int score = 95;
    
    // 打印结果
    printf("Age: %d\n", age);
    printf("Score: %d\n", score);
    
    return 0;
}
```

**运行结果:**
```
Age: 18
Score: 95
```

::: tip 提示
`%d` 是整数的占位符,告诉 `printf` 这里要打印一个整数。
:::

### 💪 练习题

**练习1:** 创建两个整数变量 `apples` 和 `oranges`,分别赋值为5和3,然后计算总共有多少水果。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    int apples = 5;
    int oranges = 3;
    int total = apples + oranges;
    
    printf("Total fruits: %d\n", total);
    
    return 0;
}
```

</details>

## 浮点数类型(Float/Double)

### 💡 概念说明

浮点数用来存储带小数点的数字,比如价格、身高、温度等。C语言提供两种精度:
- `float` - 单精度(6-7位有效数字)
- `double` - 双精度(15-16位有效数字)

### 📝 代码示例

```c{5,6,9,10}
#include <stdio.h>

int main() {
    // 声明浮点数变量
    float price = 19.99;
    double pi = 3.14159265359;
    
    // 打印结果
    printf("Price: %.2f\n", price);
    printf("Pi: %.10f\n", pi);
    
    return 0;
}
```

**运行结果:**
```
Price: 19.99
Pi: 3.1415926536
```

::: tip 提示
- `%.2f` 表示保留2位小数
- `%.10f` 表示保留10位小数
- 日常计算推荐使用 `double`,精度更高
:::

### 💪 练习题

**练习1:** 计算一个矩形的面积,长为5.5,宽为3.2。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    double length = 5.5;
    double width = 3.2;
    double area = length * width;
    
    printf("Area: %.2f\n", area);
    
    return 0;
}
```

</details>

## 字符类型(Character)

### 💡 概念说明

字符类型用 `char` 表示,存储单个字符,比如字母、数字符号、标点符号。字符必须用单引号 `' '` 包裹。

### 📝 代码示例

```c{5,6,7,10,11,12}
#include <stdio.h>

int main() {
    // 声明字符变量
    char grade = 'A';
    char symbol = '+';
    char digit = '9';
    
    // 打印结果
    printf("Grade: %c\n", grade);
    printf("Symbol: %c\n", symbol);
    printf("Digit: %c\n", digit);
    
    return 0;
}
```

**运行结果:**
```
Grade: A
Symbol: +
Digit: 9
```

::: warning 注意
- 字符用单引号 `'A'`
- 字符串用双引号 `"Hello"`(字符串会在后面章节学习)
- `%c` 是字符的占位符
:::

### 💪 练习题

**练习1:** 创建三个字符变量,分别存储你名字的首字母、你喜欢的一个符号、一个数字字符。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    char initial = 'Z';
    char favorite = '@';
    char lucky = '7';
    
    printf("Initial: %c\n", initial);
    printf("Favorite: %c\n", favorite);
    printf("Lucky: %c\n", lucky);
    
    return 0;
}
```

</details>

## 布尔类型(Boolean)

### 💡 概念说明

布尔类型只有两个值:真或假。C语言中需要引入 `<stdbool.h>` 头文件才能使用 `bool` 类型,值为 `true` 或 `false`。

### 📝 代码示例

```c{2,6,7,10,11}
#include <stdio.h>
#include <stdbool.h>

int main() {
    // 声明布尔变量
    bool is_student = true;
    bool is_adult = false;
    
    // 打印结果
    printf("Is student: %d\n", is_student);
    printf("Is adult: %d\n", is_adult);
    
    return 0;
}
```

**运行结果:**
```
Is student: 1
Is adult: 0
```

::: tip 提示
- `true` 在打印时显示为 `1`
- `false` 在打印时显示为 `0`
- 布尔类型常用于条件判断(在后面的章节会学习)
:::

### 💪 练习题

**练习1:** 创建一个布尔变量表示"今天下雨了吗",并打印结果。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool is_raining = true;
    
    printf("Is raining: %d\n", is_raining);
    
    return 0;
}
```

</details>

## 📌 小结

- **整数(int)** - 存储没有小数的数字,使用 `%d` 打印
- **浮点数(float/double)** - 存储带小数的数字,使用 `%f` 打印,推荐用 `double`
- **字符(char)** - 存储单个字符,用单引号包裹,使用 `%c` 打印
---
title: 函数与方法
category: c
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 函数与方法

## 💡 什么是函数(Function)

函数就像一个"任务执行器"——你把需要重复做的事情装进一个盒子里,需要的时候喊一声名字,它就会帮你执行。

比如:计算两个数的和这件事,如果程序里要做10次,你可以写10遍计算代码,也可以写1个函数,调用10次。

## 📝 定义你的第一个函数

### 基本语法结构

```c
返回类型 函数名(参数类型 参数名) {
    // 函数体:要执行的代码
    return 返回值;
}
```

### 完整示例

```c{1-4}
#include <stdio.h>

// 定义一个打招呼的函数
void sayHello() {
    printf("Hello, World!\n");
}

int main() {
    sayHello();  // 调用函数
    return 0;
}
```

**运行结果:**
```
Hello, World!
```

::: tip 提示
`void` 表示这个函数不需要返回任何值,就像一个只负责做事不需要回报的助手。
:::

## 📝 带参数(Parameter)的函数

参数就是你传递给函数的"原材料"。

```c{4-7,11}
#include <stdio.h>

// 定义一个计算两数之和的函数
int add(int a, int b) {
    int sum = a + b;
    return sum;  // 返回计算结果
}

int main() {
    int result = add(5, 3);  // 调用函数,传入5和3
    printf("5 + 3 = %d\n", result);
    return 0;
}
```

**运行结果:**
```
5 + 3 = 8
```

### 参数的作用

- `int a, int b` - 告诉函数需要两个整数
- `5, 3` - 调用时传入的具体数值
- `return sum` - 把计算结果返回给调用者

## 📝 实用示例:计算矩形面积

```c{4-7,11-13}
#include <stdio.h>

// 计算矩形面积
int calculateArea(int width, int height) {
    int area = width * height;
    return area;
}

int main() {
    // 计算第一个矩形
    int area1 = calculateArea(5, 10);
    printf("矩形1面积: %d\n", area1);
    
    // 计算第二个矩形
    int area2 = calculateArea(8, 6);
    printf("矩形2面积: %d\n", area2);
    
    return 0;
}
```

**运行结果:**
```
矩形1面积: 50
矩形2面积: 48
```

::: tip 提示
同一个函数可以被多次调用,每次传入不同的参数,得到不同的结果。
:::

## 💪 练习题

### 练习1:温度转换
编写一个函数,将摄氏温度转换为华氏温度。公式: `华氏度 = 摄氏度 × 1.8 + 32`

::: details 查看答案
```c
#include <stdio.h>

float celsiusToFahrenheit(float celsius) {
    float fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

int main() {
    float temp = celsiusToFahrenheit(25);
    printf("25°C = %.1f°F\n", temp);
    return 0;
}
```
:::

### 练习2:判断奇偶数
编写一个函数,判断一个数是奇数还是偶数,是偶数返回1,是奇数返回0。

::: details 查看答案
```c
#include <stdio.h>

int isEven(int num) {
    if (num % 2 == 0) {
        return 1;  // 偶数
    } else {
        return 0;  // 奇数
    }
}

int main() {
    int number = 7;
    if (isEven(number)) {
        printf("%d 是偶数\n", number);
    } else {
        printf("%d 是奇数\n", number);
    }
    return 0;
}
```
:::

## 📌 小结

- **定义函数**: `返回类型 函数名(参数) { 函数体 }`
- **调用函数**: 直接写函数名和参数 `functionName(value)`
- **函数的好处**: 避免重复代码,让程序结构更清晰
---
title: 基本语法
category: c
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 基本语法

## 定义变量(Variable)

💡 **概念说明**

变量就像一个带标签的盒子,用来存储数据。在 C 语言中,你需要先告诉计算机"这个盒子装什么类型的东西",然后才能使用它。

基本格式:`类型 名称 = 值;`

常用类型:
- `int` - 整数(Integer),例如 1, 100, -50
- `float` - 小数(Floating-point),例如 3.14, -0.5
- `char` - 单个字符(Character),例如 'A', 'x'

### 📝 代码示例

```c{4-6}
#include <stdio.h>

int main() {
    int age = 18;           // 存储年龄
    float price = 99.99;    // 存储价格
    char grade = 'A';       // 存储等级
    
    return 0;
}
```

::: tip 命名规则
- 只能用英文字母、数字、下划线
- 不能以数字开头
- 建议用有意义的名字:用 `age` 而不是 `a`
:::

## 输出变量(Print Variable)

💡 **概念说明**

使用 `printf()` 函数把变量的值显示到屏幕上。不同类型的变量需要用不同的占位符(Format Specifier):
- `%d` - 整数
- `%f` - 小数
- `%c` - 字符

### 📝 代码示例

```c{8-10}
#include <stdio.h>

int main() {
    int age = 18;
    float price = 99.99;
    char grade = 'A';
    
    printf("Age: %d\n", age);
    printf("Price: %f\n", price);
    printf("Grade: %c\n", grade);
    
    return 0;
}
```

**运行结果:**
```
Age: 18
Price: 99.990000
Grade: A
```

::: tip 关于 \n
`\n` 表示换行,让下一次输出从新的一行开始
:::

### 📝 一次输出多个变量

```c{5}
#include <stdio.h>

int main() {
    int hour = 2, minute = 30;
    printf("Time: %d hour %d minutes\n", hour, minute);
    
    return 0;
}
```

**运行结果:**
```
Time: 2 hour 30 minutes
```

## 注释(Comment)

💡 **概念说明**

注释是写给人看的说明文字,计算机会忽略它。有两种写法:
- `//` - 单行注释
- `/* */` - 多行注释

### 📝 代码示例

```c{4,7-10}
#include <stdio.h>

int main() {
    int score = 95;  // 这是单行注释
    
    /*
       这是多行注释
       可以写很多行
       用来解释复杂的逻辑
    */
    printf("Score: %d\n", score);
    
    return 0;
}
```

::: warning 注意
注释只是说明,删除注释不影响程序运行
:::

## 日志打印(Logging)

💡 **概念说明**

日志打印就是在程序运行时输出信息,帮助你了解程序在做什么。在 C 语言中,主要使用 `printf()` 函数。

实用技巧:
- 调试时查看变量的值
- 追踪程序执行到哪一步
- 显示计算结果

### 📝 代码示例

```c{5,8,11}
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    printf("Program start\n");
    
    int sum = a + b;
    printf("Calculating: %d + %d\n", a, b);
    
    printf("Result: %d\n", sum);
    printf("Program end\n");
    
    return 0;
}
```

**运行结果:**
```
Program start
Calculating: 10 + 20
Result: 30
Program end
```

### 📝 格式化输出

```c{5-7}
#include <stdio.h>

int main() {
    float pi = 3.14159;
    printf("Default: %f\n", pi);      // 默认6位小数
    printf("2 decimals: %.2f\n", pi); // 保留2位小数
    printf("4 decimals: %.4f\n", pi); // 保留4位小数
    
    return 0;
}
```

**运行结果:**
```
Default: 3.141590
2 decimals: 3.14
4 decimals: 3.1416
```

## 💪 练习题

**练习 1:** 创建一个程序,定义你的姓名首字母、年龄和身高,然后输出它们。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    char initial = 'Z';      // 姓名首字母
    int age = 20;            // 年龄
    float height = 1.75;     // 身高(米)
    
    printf("Initial: %c\n", initial);
    printf("Age: %d\n", age);
    printf("Height: %.2f meters\n", height);
    
    return 0;
}
```

</details>

**练习 2:** 写一个程序计算矩形面积,定义长和宽两个变量,输出计算过程和结果。

<details>
<summary>点击查看答案</summary>

```c
#include <stdio.h>

int main() {
    int length = 8;    // 长
    int width = 5;     // 宽
    
    printf("Rectangle calculation\n");
    printf("Length: %d, Width: %d\n", length, width);
    
    int area = length * width;
    printf("Area = %d x %d = %d\n", length, width, area);
    
    return 0;
}
```

</details>

## 📌 小结

- 定义变量时要指定类型:`int age = 18;`
- 使用 `printf()` 和占位符输出变量:`%d` `%f` `%c`
- 用 `//` 添加单行注释,用 `/* */` 添加多行注释
- 通过 `printf()` 输出日志信息来追踪程序运行状态
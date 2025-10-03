---
title: 数组
category: c
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 数组

## 什么是数组(Array)

数组是一个容器,可以存储**多个相同类型**的数据。

想象一下:
- 你要记录班级里 5 个同学的成绩
- 如果没有数组,你需要创建 5 个变量:`score1`, `score2`, `score3`, `score4`, `score5`
- 有了数组,只需要一个变量:`scores[5]`

## 如何创建数组

### 基本语法

```c
数据类型 数组名[元素个数];
```

### 实际例子

```c{3}
#include <stdio.h>

int main() {
    int scores[5];  // 创建一个可以存储5个整数的数组
    return 0;
}
```

::: tip 提示
`scores[5]` 表示这个数组有 5 个位置,可以存储 5 个整数
:::

### 创建时直接赋值

```c{3-4}
#include <stdio.h>

int main() {
    int scores[5] = {85, 92, 78, 95, 88};  // 创建并初始化
    return 0;
}
```

## 数组的编号规则

数组的编号(索引,Index)从 **0** 开始:

```
数组: [85, 92, 78, 95, 88]
索引:  0   1   2   3   4
```

::: warning 注意
5 个元素的数组,索引是 0-4,**不是** 1-5
:::

## 读取数组中的值

使用 `数组名[索引]` 来读取:

```c{5-7}
#include <stdio.h>

int main() {
    int scores[5] = {85, 92, 78, 95, 88};
    
    printf("第1个学生的成绩: %d\n", scores[0]);  // 输出: 85
    printf("第3个学生的成绩: %d\n", scores[2]);  // 输出: 78
    
    return 0;
}
```

**运行结果:**
```
第1个学生的成绩: 85
第3个学生的成绩: 78
```

## 修改数组中的值

使用 `数组名[索引] = 新值` 来修改:

```c{5-7}
#include <stdio.h>

int main() {
    int scores[5] = {85, 92, 78, 95, 88};
    
    printf("修改前: %d\n", scores[0]);  // 输出: 85
    scores[0] = 90;                     // 修改第1个元素
    printf("修改后: %d\n", scores[0]);  // 输出: 90
    
    return 0;
}
```

**运行结果:**
```
修改前: 85
修改后: 90
```

## 完整示例:管理学生成绩

```c{4,7-8,11-12}
#include <stdio.h>

int main() {
    int scores[3] = {75, 82, 90};
    
    // 读取并显示所有成绩
    printf("学生1: %d分\n", scores[0]);
    printf("学生2: %d分\n", scores[1]);
    printf("学生3: %d分\n", scores[2]);
    
    // 修改第2个学生的成绩
    scores[1] = 88;
    printf("修改后,学生2: %d分\n", scores[1]);
    
    return 0;
}
```

**运行结果:**
```
学生1: 75分
学生2: 82分
学生3: 90分
修改后,学生2: 88分
```

## 💪 练习题

### 练习1:创建并输出数组

创建一个数组存储 4 个整数:`10, 20, 30, 40`,然后输出第 2 个和第 4 个数字。

::: details 查看答案
```c
#include <stdio.h>

int main() {
    int numbers[4] = {10, 20, 30, 40};
    
    printf("第2个数字: %d\n", numbers[1]);  // 输出: 20
    printf("第4个数字: %d\n", numbers[3]);  // 输出: 40
    
    return 0;
}
```
:::

### 练习2:修改数组元素

创建数组 `{5, 10, 15}`,将第 1 个元素改为 `8`,第 3 个元素改为 `20`,然后输出所有元素。

::: details 查看答案
```c
#include <stdio.h>

int main() {
    int data[3] = {5, 10, 15};
    
    data[0] = 8;   // 修改第1个
    data[2] = 20;  // 修改第3个
    
    printf("%d, %d, %d\n", data[0], data[1], data[2]);
    // 输出: 8, 10, 20
    
    return 0;
}
```
:::

## 📌 小结

- 数组用于存储多个相同类型的数据:`int scores[5];`
- 数组索引从 0 开始,5 个元素的索引是 0-4
- 读取:`scores[0]` 获取第 1 个元素
- 修改:`scores[0] = 90;` 改变第 1 个元素的值
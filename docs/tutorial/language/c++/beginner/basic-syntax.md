---
title: 基本语法
category: c++
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 基本语法

## 变量定义(Variable Definition)

💡 **什么是变量?**

变量就像一个带标签的盒子,用来存储数据。在C++中,你需要先告诉计算机"这个盒子装什么类型的东西",再给它取个名字。

### 📝 代码示例

```cpp{4-7}
#include <iostream>
using namespace std;

int main() {
    int age = 25;           // 定义整数变量
    double price = 19.99;   // 定义小数变量
    string name = "Zhang";  // 定义文本变量
    
    return 0;
}
```

::: tip 变量命名规则
- 只能包含字母、数字、下划线
- 必须以字母或下划线开头
- 推荐使用有意义的英文单词:如 `studentAge` 而不是 `a`
:::

### 💪 练习题

**练习1**: 定义三个变量,分别存储你的年龄、身高(米)、姓名

<details>
<summary>点击查看答案</summary>

```cpp
int myAge = 20;
double myHeight = 1.75;
string myName = "Li";
```

</details>

## 输出变量(Output Variables)

💡 **如何显示变量的内容?**

使用 `cout` 命令将变量的值输出到屏幕上。

### 📝 代码示例

```cpp{9-11}
#include <iostream>
using namespace std;

int main() {
    int score = 95;
    string subject = "Math";
    
    // 输出变量
    cout << "Subject: " << subject << endl;
    cout << "Score: " << score << endl;
    cout << "Pass!" << endl;
    
    return 0;
}
```

**运行结果**:
```
Subject: Math
Score: 95
Pass!
```

::: tip endl 的作用
`endl` 表示换行,让下一次输出从新的一行开始
:::

### 💪 练习题

**练习1**: 定义商品名称和价格两个变量,然后输出"商品: 苹果,价格: 5.5元"的格式

<details>
<summary>点击查看答案</summary>

```cpp
string product = "Apple";
double price = 5.5;
cout << "Product: " << product << ", Price: " << price << " yuan" << endl;
```

</details>

## 注释(Comments)

💡 **为什么需要注释?**

注释是给人看的说明文字,计算机会忽略它。帮助你记住代码的作用。

### 📝 代码示例

```cpp{5,8,11-13}
#include <iostream>
using namespace std;

int main() {
    // 这是单行注释:计算学生总分
    int mathScore = 90;
    int englishScore = 85;
    int total = mathScore + englishScore;  // 也可以写在代码后面
    
    /*
       这是多行注释
       用于较长的说明文字
    */
    cout << "Total: " << total << endl;
    
    return 0;
}
```

::: warning 注意
- 单行注释: `//` 后面的内容
- 多行注释: `/*` 和 `*/` 之间的内容
- 注释过多会影响代码阅读,适度使用
:::

### 💪 练习题

**练习1**: 为下面的代码添加注释

```cpp
int radius = 5;
double pi = 3.14;
double area = pi * radius * radius;
cout << area << endl;
```

<details>
<summary>点击查看答案</summary>

```cpp
// 定义圆的半径
int radius = 5;
// 定义圆周率
double pi = 3.14;
// 计算圆的面积
double area = pi * radius * radius;
// 输出面积
cout << area << endl;
```

</details>

## 日志打印(Log Printing)

💡 **调试程序的好帮手**

日志打印就是在程序运行过程中输出关键信息,帮助你了解程序执行到哪一步了。

### 📝 代码示例

```cpp{6,9,12}
#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 20;
    cout << "[DEBUG] Start calculation" << endl;
    
    int sum = a + b;
    cout << "[DEBUG] a=" << a << ", b=" << b << endl;
    
    int result = sum * 2;
    cout << "[DEBUG] Final result=" << result << endl;
    
    return 0;
}
```

**运行结果**:
```
[DEBUG] Start calculation
[DEBUG] a=10, b=20
[DEBUG] Final result=60
```

::: tip 日志标签
使用 `[DEBUG]`、`[INFO]`、`[ERROR]` 等标签,方便识别不同类型的信息
:::

### 💪 练习题

**练习1**: 编写程序计算矩形面积,在计算前后分别打印日志

<details>
<summary>点击查看答案</summary>

```cpp
int length = 10;
int width = 5;
cout << "[INFO] Start area calculation" << endl;
cout << "[DEBUG] length=" << length << ", width=" << width << endl;

int area = length * width;
cout << "[INFO] Area calculated: " << area << endl;
```

</details>

## 📌 小结

- **变量定义**: `类型 名称 = 值;` 格式,如 `int age = 18;`
- **输出变量**: 使用 `cout <<` 输出内容, `endl` 换行
- **注释**: 单行用 `//`,多行用 `/* */`,帮助理解代码
- **日志打印**: 通过输出关键信息追踪程序执行过程
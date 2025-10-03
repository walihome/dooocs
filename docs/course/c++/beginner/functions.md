---
title: 函数与方法
category: c++
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 函数与方法

## 什么是函数(Function)

💡 函数就像一台自动售货机:你投入硬币(输入参数),它给你饮料(返回结果)。

在C++中,函数帮助我们:
- 把重复的代码打包起来,需要时直接调用
- 让代码更容易理解和维护

## 定义一个基础函数

### 最简单的函数

```cpp{1-3}
void sayHello() {
    cout << "Hello, World!" << endl;
}

int main() {
    sayHello();  // 调用函数
    return 0;
}
```

**函数的组成部分:**
- `void` - 返回类型(Return Type),`void`表示不返回任何值
- `sayHello` - 函数名(Function Name)
- `()` - 参数列表(Parameters),空括号表示不需要输入
- `{}` - 函数体(Function Body),实际执行的代码

::: tip 提示
函数必须先定义,再调用。建议把函数写在`main()`函数前面。
:::

### 完整可运行示例

```cpp{1-3,7}
#include <iostream>
using namespace std;

void sayHello() {
    cout << "Hello, World!" << endl;
}

int main() {
    sayHello();
    return 0;
}
```

**运行结果:**
```
Hello, World!
```

## 带参数的函数(Parameters)

### 传递一个参数

```cpp{1-3,7}
#include <iostream>
using namespace std;

void greet(string name) {  // name是参数
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    greet("Alice");  // 传入"Alice"作为参数
    greet("Bob");    // 传入"Bob"作为参数
    return 0;
}
```

**运行结果:**
```
Hello, Alice!
Hello, Bob!
```

### 传递多个参数

```cpp{4-6,11}
#include <iostream>
using namespace std;

void introduce(string name, int age) {
    cout << "我叫" << name << ",今年" << age << "岁" << endl;
}

int main() {
    introduce("小明", 18);
    introduce("小红", 20);
    return 0;
}
```

**运行结果:**
```
我叫小明,今年18岁
我叫小红,今年20岁
```

::: warning 注意
参数的顺序很重要!调用时必须按定义的顺序传入。
:::

## 有返回值的函数(Return Value)

### 返回计算结果

```cpp{4-7,11-12}
#include <iostream>
using namespace std;

int add(int a, int b) {
    int sum = a + b;
    return sum;  // 返回计算结果
}

int main() {
    int result = add(5, 3);  // 接收返回值
    cout << "5 + 3 = " << result << endl;
    return 0;
}
```

**运行结果:**
```
5 + 3 = 8
```

**关键点:**
- `int add(...)` - `int`表示函数返回一个整数
- `return sum` - 把结果返回给调用者
- `int result = add(5, 3)` - 用变量接收返回值

### 直接使用返回值

```cpp{4-6,10}
#include <iostream>
using namespace std;

double multiply(double x, double y) {
    return x * y;  // 直接返回计算结果
}

int main() {
    cout << "3.5 * 2 = " << multiply(3.5, 2) << endl;
    return 0;
}
```

**运行结果:**
```
3.5 * 2 = 7
```

## 💪 练习题

### 练习1:计算面积

编写一个函数`calculateArea`,计算矩形面积(长 × 宽)。

<details>
<summary>点击查看答案</summary>

```cpp
#include <iostream>
using namespace std;

double calculateArea(double length, double width) {
    return length * width;
}

int main() {
    double area = calculateArea(5.0, 3.0);
    cout << "面积是: " << area << endl;
    return 0;
}
```

</details>

### 练习2:判断奇偶

编写一个函数`isEven`,判断一个数字是否为偶数,返回`true`或`false`。

<details>
<summary>点击查看答案</summary>

```cpp
#include <iostream>
using namespace std;

bool isEven(int number) {
    return number % 2 == 0;
}

int main() {
    cout << "4是偶数吗? " << (isEven(4) ? "是" : "否") << endl;
    cout << "7是偶数吗? " << (isEven(7) ? "是" : "否") << endl;
    return 0;
}
```

</details>

## 📌 小结

- **定义函数**: `返回类型 函数名(参数类型 参数名) { 函数体 }`
- **调用函数**: 直接写`函数名(参数值)`
- **返回值**: 使用`return`语句把结果返回给调用者
- 函数让代码可以重复使用,避免重复编写相同逻辑
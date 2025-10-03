---
title: 数据类型
category: c++
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 数据类型

在编程中，你需要告诉计算机你要处理什么样的数据。就像现实生活中,我们会区分"数字"和"文字"一样,C++也需要知道数据的类型。

## 整数(Integer)

### 💡 概念说明

整数类型用关键字 `int` 表示,可以存储正整数、负整数和零。

### 📝 代码示例

```cpp{5-7}
#include <iostream>
using namespace std;

int main() {
    int age = 25;           // 年龄
    int temperature = -5;   // 温度(可以是负数)
    int score = 0;          // 分数
    
    cout << "年龄: " << age << endl;
    cout << "温度: " << temperature << endl;
    cout << "分数: " << score << endl;
    
    return 0;
}
```

**运行结果**：
```
年龄: 25
温度: -5
分数: 0
```

::: tip 提示
整数不能有小数部分,如果你写 `int price = 19.99;` 会被截断成 `19`
:::

### 💪 练习题

1. 创建一个整数变量存储你的出生年份,并输出它
2. 创建两个整数变量,分别存储 100 和 -50,然后输出它们的和

<details>
<summary>查看答案</summary>

**练习1答案**：
```cpp
#include <iostream>
using namespace std;

int main() {
    int birthYear = 2000;
    cout << "出生年份: " << birthYear << endl;
    return 0;
}
```

**练习2答案**：
```cpp
#include <iostream>
using namespace std;

int main() {
    int num1 = 100;
    int num2 = -50;
    int sum = num1 + num2;
    cout << "和: " << sum << endl;
    return 0;
}
```

</details>

## 浮点数(Float/Double)

### 💡 概念说明

浮点数用于存储带小数点的数字,C++有两种:
- `float` - 单精度浮点数(精度较低)
- `double` - 双精度浮点数(精度更高,推荐使用)

### 📝 代码示例

```cpp{5-6}
#include <iostream>
using namespace std;

int main() {
    double price = 19.99;      // 价格
    double pi = 3.14159;       // 圆周率
    
    cout << "价格: " << price << endl;
    cout << "圆周率: " << pi << endl;
    
    return 0;
}
```

**运行结果**：
```
价格: 19.99
圆周率: 3.14159
```

::: warning 注意
浮点数计算可能有微小误差,这是计算机的特性,不是bug
:::

### 💪 练习题

1. 创建一个 `double` 变量存储你的身高(单位:米),并输出
2. 创建两个 `double` 变量分别存储 10.5 和 3.2,计算并输出它们的乘积

<details>
<summary>查看答案</summary>

**练习1答案**：
```cpp
#include <iostream>
using namespace std;

int main() {
    double height = 1.75;
    cout << "身高: " << height << "米" << endl;
    return 0;
}
```

**练习2答案**：
```cpp
#include <iostream>
using namespace std;

int main() {
    double num1 = 10.5;
    double num2 = 3.2;
    double product = num1 * num2;
    cout << "乘积: " << product << endl;
    return 0;
}
```

</details>

## 字符串(String)

### 💡 概念说明

字符串用于存储文本,使用 `string` 类型。字符串内容需要用双引号 `""` 包裹。

::: tip 提示
使用 `string` 需要添加头文件 `#include <string>`
:::

### 📝 代码示例

```cpp{2,6-7}
#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "张三";           // 姓名
    string greeting = "Hello!";    // 问候语
    
    cout << "姓名: " << name << endl;
    cout << "问候: " << greeting << endl;
    
    return 0;
}
```

**运行结果**：
```
姓名: 张三
问候: Hello!
```

### 📝 字符串拼接

```cpp{8}
#include <iostream>
#include <string>
using namespace std;

int main() {
    string firstName = "三";
    string lastName = "张";
    string fullName = lastName + firstName;  // 拼接字符串
    
    cout << "全名: " << fullName << endl;
    
    return 0;
}
```

**运行结果**：
```
全名: 张三
```

### 💪 练习题

1. 创建一个字符串变量存储你喜欢的一本书的名字,并输出
2. 创建两个字符串变量分别存储"我喜欢"和"编程",将它们拼接后输出

<details>
<summary>查看答案</summary>

**练习1答案**：
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string bookName = "三体";
    cout << "我喜欢的书: " << bookName << endl;
    return 0;
}
```

**练习2答案**：
```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string part1 = "我喜欢";
    string part2 = "编程";
    string sentence = part1 + part2;
    cout << sentence << endl;
    return 0;
}
```

</details>

## 布尔值(Boolean)

### 💡 概念说明

布尔类型用 `bool` 表示,只有两个值:
- `true` - 真(表示"是")
- `false` - 假(表示"否")

布尔值常用于判断和条件语句。

### 📝 代码示例

```cpp{5-6}
#include <iostream>
using namespace std;

int main() {
    bool isRaining = true;     // 是否下雨
    bool isWeekend = false;    // 是否周末
    
    cout << "下雨了吗? " << isRaining << endl;
    cout << "是周末吗? " << isWeekend << endl;
    
    return 0;
}
```

**运行结果**：
```
下雨了吗? 1
是周末吗? 0
```

::: tip 提示
C++输出布尔值时,`true` 显示为 `1`,`false` 显示为 `0`
:::

### 📝 比较运算产生布尔值

```cpp{5-6}
#include <iostream>
using namespace std;

int main() {
    bool result1 = (10 > 5);   // 10大于5吗? true
    bool result2 = (3 == 8);   // 3等于8吗? false
    
    cout << "10 > 5: " << result1 << endl;
    cout << "3 == 8: " << result2 << endl;
    
    return 0;
}
```

**运行结果**：
```
10 > 5: 1
3 == 8: 0
```

### 💪 练习题

1. 创建一个布尔变量表示"你是否是学生",设置为 `true`,并输出
2. 创建一个布尔变量存储 `5 < 3` 的比较结果,并输出

<details>
<summary>查看答案</summary>

**练习1答案**：
```cpp
#include <iostream>
using namespace std;

int main() {
    bool isStudent = true;
    cout << "是学生吗? " << isStudent << endl;
    return 0;
}
```

**练习2答案**：
```cpp
#include <iostream>
using namespace std;

int main() {
    bool result = (5 < 3);
    cout << "5 < 3: " << result << endl;
    return 0;
}
```

</details>

## 📌 小结

- `int` 用于存储整数(无小数点的数字)
- `double` 用于存储浮点数(带小数点的数字)
- `string` 用于存储文本,需要添加头文件 `#include <string>`
- `bool` 只有 `true` 和 `false` 两个值,常用于判断
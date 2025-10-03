---
title: 基础运算
category: c++
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 基础运算

计算机的本质就是计算,就像你用计算器一样。在C++中,你可以让计算机帮你做各种运算。

## 赋值(Assignment)

### 💡 概念说明

赋值就是把一个值存到变量里,使用 `=` 符号。

::: warning 注意
`=` 不是"相等"的意思,而是"把右边的值放到左边的变量里"。
:::

### 📝 代码示例

```cpp{5,8,11}
#include <iostream>
using namespace std;

int main() {
    int age = 18;  // 把18存入age变量
    cout << "年龄: " << age << endl;
    
    age = 20;  // 把age的值改为20
    cout << "新年龄: " << age << endl;
    
    int score = age;  // 把age的值复制给score
    cout << "分数: " << score << endl;
    
    return 0;
}
```

**运行结果**:
```
年龄: 18
新年龄: 20
分数: 20
```

## 数学运算(Arithmetic Operations)

### 💡 概念说明

C++支持五种基本数学运算:
- `+` 加法(Addition)
- `-` 减法(Subtraction)
- `*` 乘法(Multiplication)
- `/` 除法(Division)
- `%` 求余(Modulo,取余数)

### 📝 代码示例

```cpp{5-9}
#include <iostream>
using namespace std;

int main() {
    cout << "10 + 3 = " << 10 + 3 << endl;
    cout << "10 - 3 = " << 10 - 3 << endl;
    cout << "10 * 3 = " << 10 * 3 << endl;
    cout << "10 / 3 = " << 10 / 3 << endl;  // 整数除法
    cout << "10 % 3 = " << 10 % 3 << endl;  // 余数是1
    
    return 0;
}
```

**运行结果**:
```
10 + 3 = 13
10 - 3 = 7
10 * 3 = 30
10 / 3 = 3
10 % 3 = 1
```

::: tip 提示
两个整数相除,结果也是整数,小数部分会被丢弃。10/3结果是3而不是3.333...
:::

### 💪 练习题

**练习1**: 计算你的出生年份。假设今年是2025年,你18岁,编写代码计算出生年。

::: details 查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int current_year = 2025;
    int age = 18;
    int birth_year = current_year - age;
    
    cout << "出生年份: " << birth_year << endl;
    
    return 0;
}
```
:::

**练习2**: 判断一个数是奇数还是偶数。提示:偶数除以2余数为0。

::: details 查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int number = 17;
    int remainder = number % 2;
    
    cout << number << " 除以 2 的余数是: " << remainder << endl;
    // 余数为0就是偶数,余数为1就是奇数
    
    return 0;
}
```
:::

## 比较运算(Comparison Operations)

### 💡 概念说明

比较运算用来判断两个值的关系,结果是 `true`(真) 或 `false`(假):
- `==` 相等(Equal)
- `!=` 不相等(Not equal)
- `>` 大于(Greater than)
- `<` 小于(Less than)
- `>=` 大于等于(Greater than or equal)
- `<=` 小于等于(Less than or equal)

::: warning 注意
判断相等用 `==` (两个等号),不是 `=` (一个等号)!
:::

### 📝 代码示例

```cpp{5-10}
#include <iostream>
using namespace std;

int main() {
    cout << (10 == 10) << endl;  // 1表示true
    cout << (10 != 5) << endl;   // 1表示true
    cout << (10 > 5) << endl;    // 1表示true
    cout << (10 < 5) << endl;    // 0表示false
    cout << (10 >= 10) << endl;  // 1表示true
    cout << (10 <= 9) << endl;   // 0表示false
    
    return 0;
}
```

**运行结果**:
```
1
1
1
0
1
0
```

::: tip 提示
在C++中,`true`显示为1,`false`显示为0。
:::

## 逻辑运算(Logical Operations)

### 💡 概念说明

逻辑运算用来组合多个条件:
- `&&` 且(AND) - 两个条件都为真时结果才为真
- `||` 或(OR) - 至少一个条件为真时结果就为真
- `!` 非(NOT) - 把真变假,把假变真

### 📝 代码示例

```cpp{5-13}
#include <iostream>
using namespace std;

int main() {
    int age = 20;
    int score = 85;
    
    // AND: 年龄大于18 且 分数大于80
    cout << (age > 18 && score > 80) << endl;  // 1
    
    // OR: 年龄小于18 或 分数大于90
    cout << (age < 18 || score > 90) << endl;  // 0
    
    // NOT: 年龄不等于20
    cout << !(age == 20) << endl;  // 0
    
    return 0;
}
```

**运行结果**:
```
1
0
0
```

### 💪 练习题

**练习**: 判断一个人是否可以看PG-13电影(年龄13岁以上)且有家长陪同。

::: details 查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int age = 15;
    bool has_parent = true;  // true表示有家长陪同
    
    bool can_watch = age >= 13 && has_parent;
    cout << "可以观看: " << can_watch << endl;
    
    return 0;
}
```
:::

## 📌 小结

- 赋值使用 `=`,把右边的值存到左边的变量
- 数学运算有五种: `+` `-` `*` `/` `%`
- 比较运算返回true/false,判断相等用 `==` 不是 `=`
- 逻辑运算用 `&&` `||` `!` 组合多个条件
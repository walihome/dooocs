---
title: 控制流
category: c++
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 控制流

程序不仅仅是从上到下执行的。有时候你需要让程序重复做某件事，或者根据不同情况做出不同的选择。这就是控制流(Control Flow)的作用。

## for 循环

### 💡 概念说明

当你需要重复执行某段代码时,就用 `for` 循环(for loop)。比如:打印 1 到 10、计算数组中所有数字的和。

基本结构:
```cpp
for (初始化; 条件; 更新) {
    // 重复执行的代码
}
```

### 📝 代码示例

```cpp{6-8}
#include <iostream>
using namespace std;

int main() {
    // 打印 1 到 5
    for (int i = 1; i <= 5; i++) {
        cout << i << endl;
    }
    
    return 0;
}
```

**运行结果:**
```
1
2
3
4
5
```

::: tip 理解 for 循环
- `int i = 1` - 从 1 开始
- `i <= 5` - 只要 i 不超过 5 就继续
- `i++` - 每次循环后 i 加 1
:::

再看一个计算总和的例子:

```cpp{6-9}
#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    for (int i = 1; i <= 10; i++) {
        sum = sum + i;  // 累加每个数字
    }
    cout << "1到10的和是: " << sum << endl;
    
    return 0;
}
```

**运行结果:**
```
1到10的和是: 55
```

### 💪 练习题

**练习 1:** 打印 2 的前 5 个倍数(2, 4, 6, 8, 10)

::: details 点击查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 5; i++) {
        cout << i * 2 << endl;
    }
    return 0;
}
```
:::

**练习 2:** 计算 1 到 100 中所有偶数的和

::: details 点击查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int sum = 0;
    for (int i = 2; i <= 100; i = i + 2) {
        sum = sum + i;
    }
    cout << "偶数和: " << sum << endl;
    return 0;
}
```
:::

## while 循环

### 💡 概念说明

`while` 循环(while loop)在条件为真时持续执行。当你不知道要循环多少次,只知道什么时候停止时,用 `while` 更合适。

基本结构:
```cpp
while (条件) {
    // 条件为真时执行
}
```

### 📝 代码示例

```cpp{6-9}
#include <iostream>
using namespace std;

int main() {
    int count = 1;
    while (count <= 5) {
        cout << count << endl;
        count++;  // 别忘了更新
    }
    
    return 0;
}
```

**运行结果:**
```
1
2
3
4
5
```

::: warning 注意
如果忘记在循环内更新变量(比如 `count++`),程序会无限循环,永远停不下来!
:::

实际应用:猜数字游戏

```cpp{7-13}
#include <iostream>
using namespace std;

int main() {
    int secret = 7;
    int guess;
    
    while (true) {
        cout << "猜一个数字: ";
        cin >> guess;
        if (guess == secret) {
            break;  // 猜对了,退出循环
        }
        cout << "猜错了,再试试!" << endl;
    }
    
    cout << "恭喜你猜对了!" << endl;
    return 0;
}
```

### 💪 练习题

**练习:** 写一个程序,从 10 倒数到 1,然后打印 "发射!"

::: details 点击查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int count = 10;
    while (count >= 1) {
        cout << count << endl;
        count--;
    }
    cout << "发射!" << endl;
    return 0;
}
```
:::

## if 条件判断

### 💡 概念说明

`if` 语句(if statement)让程序根据条件做出选择。

基本结构:
- `if` - 如果条件为真,执行
- `else if` - 否则如果另一个条件为真
- `else` - 以上都不满足时执行

### 📝 代码示例

```cpp{6-12}
#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "请输入你的年龄: ";
    cin >> age;
    
    if (age < 18) {
        cout << "你是未成年人" << endl;
    } else {
        cout << "你是成年人" << endl;
    }
    
    return 0;
}
```

多重条件判断:

```cpp{8-14}
#include <iostream>
using namespace std;

int main() {
    int score;
    cout << "请输入成绩: ";
    cin >> score;
    
    if (score >= 90) {
        cout << "优秀!" << endl;
    } else if (score >= 60) {
        cout << "及格" << endl;
    } else {
        cout << "不及格" << endl;
    }
    
    return 0;
}
```

::: tip 比较运算符
- `==` 等于
- `!=` 不等于
- `>` 大于
- `<` 小于
- `>=` 大于等于
- `<=` 小于等于
:::

结合多个条件:

```cpp{6-10}
#include <iostream>
using namespace std;

int main() {
    int age = 20;
    bool hasTicket = true;
    
    if (age >= 18 && hasTicket) {
        cout << "可以入场" << endl;
    } else {
        cout << "不能入场" << endl;
    }
    
    return 0;
}
```

### 💪 练习题

**练习:** 写一个程序判断一个数是正数、负数还是零

::: details 点击查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int num;
    cout << "请输入一个数字: ";
    cin >> num;
    
    if (num > 0) {
        cout << "正数" << endl;
    } else if (num < 0) {
        cout << "负数" << endl;
    } else {
        cout << "零" << endl;
    }
    
    return 0;
}
```
:::

## 📌 小结

- **for 循环** - 知道循环次数时使用,常用于遍历固定范围
- **while 循环** - 根据条件决定是否继续,适合次数不确定的情况
- **if 语句** - 让程序根据条件做出不同的选择
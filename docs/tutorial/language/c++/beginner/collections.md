---
title: 数组
category: c++
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 数组(Array)

## 💡 什么是数组

数组就像一排带编号的盒子,可以存储多个相同类型的数据。比如你要存储班级里5个同学的成绩,不需要创建5个变量,用1个数组就够了。

**关键特点:**
- 编号从0开始(不是1!)
- 大小固定,创建后不能改变
- 所有元素类型必须相同

## 数组的定义

### 📝 基本语法

```cpp
// 语法格式
数据类型 数组名[元素个数];

// 示例
int scores[5];  // 创建能存储5个整数的数组
```

### 📝 定义时赋初值

```cpp{4,7,10}
#include <iostream>
using namespace std;

int main() {
    // 方式1: 完整赋值
    int scores[5] = {85, 92, 78, 90, 88};
    
    // 方式2: 部分赋值(剩余自动为0)
    int ages[5] = {18, 19};  // 结果: 18, 19, 0, 0, 0
    
    // 方式3: 自动推断大小
    int nums[] = {10, 20, 30};  // 自动创建3个元素的数组
    
    return 0;
}
```

::: tip 提示
如果用 `[]` 中不写数字,编译器会根据 `{}` 中的元素个数自动确定数组大小。
:::

## 数组的读取和修改

### 📝 通过下标(Index)访问

```cpp{7-8,11-12}
#include <iostream>
using namespace std;

int main() {
    int scores[3] = {85, 92, 78};
    
    // 读取: 数组名[下标]
    cout << "第1个成绩: " << scores[0] << endl;  // 输出: 85
    cout << "第3个成绩: " << scores[2] << endl;  // 输出: 78
    
    // 修改: 数组名[下标] = 新值
    scores[1] = 95;  // 把第2个成绩改为95
    cout << "修改后: " << scores[1] << endl;  // 输出: 95
    
    return 0;
}
```

**运行结果:**
```
第1个成绩: 85
第3个成绩: 78
修改后: 95
```

::: warning 注意
下标从0开始!如果数组有5个元素,有效下标是0-4,使用 `scores[5]` 会出错。
:::

### 📝 循环遍历数组

```cpp{7-9}
#include <iostream>
using namespace std;

int main() {
    int nums[4] = {10, 20, 30, 40};
    
    // 用for循环输出所有元素
    for (int i = 0; i < 4; i++) {
        cout << "nums[" << i << "] = " << nums[i] << endl;
    }
    
    return 0;
}
```

**运行结果:**
```
nums[0] = 10
nums[1] = 20
nums[2] = 30
nums[3] = 40
```

## 💪 练习题

### 练习1: 计算平均分

创建一个包含5个学生成绩的数组,计算并输出平均分。

::: details 查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int scores[5] = {85, 92, 78, 90, 88};
    int sum = 0;
    
    // 累加所有成绩
    for (int i = 0; i < 5; i++) {
        sum = sum + scores[i];
    }
    
    // 计算平均分
    double average = sum / 5.0;
    cout << "平均分: " << average << endl;
    
    return 0;
}
```
**输出:** `平均分: 86.6`
:::

### 练习2: 找出最大值

从数组中找出最大的数字并输出。

::: details 查看答案
```cpp
#include <iostream>
using namespace std;

int main() {
    int nums[6] = {45, 23, 89, 12, 67, 34};
    int max = nums[0];  // 假设第1个数最大
    
    // 遍历比较
    for (int i = 1; i < 6; i++) {
        if (nums[i] > max) {
            max = nums[i];  // 发现更大的就更新
        }
    }
    
    cout << "最大值: " << max << endl;
    
    return 0;
}
```
**输出:** `最大值: 89`
:::

## 📌 小结

- **定义数组**: `int arr[5];` 创建5个元素的整数数组
- **下标规则**: 第1个元素是 `arr[0]`,第5个元素是 `arr[4]`
- **访问方式**: 读取用 `arr[i]`,修改用 `arr[i] = 新值`
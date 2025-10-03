---
title: 动手实践
category: c++
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 动手实践

恭喜你！你已经学完了 C++ 的基础知识。现在是时候把这些知识串联起来，做一个真正有用的小程序了。

## 💡 项目目标

我们要做一个**学生成绩管理系统(Student Score Management System)**，用来管理 5 个学生的成绩。这个系统能够：

- 计算最高分(Maximum Score)
- 计算最低分(Minimum Score)
- 计算平均分(Average Score)
- 统计及格人数(Pass Count)

## 📝 完整代码

新建一个文件 `student_scores.cpp`，把下面的代码复制进去：

```cpp{8-12,15-17,20-27,30-37,40-47,50-57,60-62}
#include <iostream>
using namespace std;

int main() {
    // 存储5个学生的成绩
    double scores[5];
    
    // 输入成绩
    cout << "请输入5个学生的成绩：" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "学生 " << (i + 1) << " 的成绩：";
        cin >> scores[i];
    }
    
    // 初始化最高分和最低分
    double maxScore = scores[0];
    double minScore = scores[0];
    
    // 计算总分
    double totalScore = 0;
    for (int i = 0; i < 5; i++) {
        totalScore += scores[i];
        if (scores[i] > maxScore) {
            maxScore = scores[i];
        }
        if (scores[i] < minScore) {
            minScore = scores[i];
        }
    }
    
    // 计算平均分
    double averageScore = totalScore / 5;
    
    // 统计及格人数
    int passCount = 0;
    for (int i = 0; i < 5; i++) {
        if (scores[i] >= 60) {
            passCount++;
        }
    }
    
    // 输出结果
    cout << "\n========== 成绩统计结果 ==========" << endl;
    cout << "最高分：" << maxScore << endl;
    cout << "最低分：" << minScore << endl;
    cout << "平均分：" << averageScore << endl;
    cout << "及格人数：" << passCount << " 人" << endl;
    cout << "及格率：" << (passCount * 100.0 / 5) << "%" << endl;
    
    // 显示每个学生的成绩
    cout << "\n========== 学生成绩列表 ==========" << endl;
    for (int i = 0; i < 5; i++) {
        cout << "学生 " << (i + 1) << "：" << scores[i];
        if (scores[i] >= 60) {
            cout << " (及格)";
        } else {
            cout << " (不及格)";
        }
        cout << endl;
    }
    
    return 0;
}
```

## 🚀 如何运行这段代码

### Windows 系统

打开命令提示符(CMD)或 PowerShell，进入代码所在文件夹：

```bash
# 编译代码
g++ student_scores.cpp -o student_scores

# 运行程序
student_scores.exe
```

### macOS / Linux 系统

打开终端(Terminal)，进入代码所在文件夹：

```bash
# 编译代码
g++ student_scores.cpp -o student_scores

# 运行程序
./student_scores
```

::: tip 提示
如果提示 `g++: command not found`，说明还没有安装 C++ 编译器。Windows 用户需要安装 MinGW，macOS 用户需要安装 Xcode Command Line Tools，Linux 用户可以用 `sudo apt install g++` 安装。
:::

## 🎬 运行效果展示

当你运行程序后，会看到这样的交互过程：

```
请输入5个学生的成绩：
学生 1 的成绩：85
学生 2 的成绩：92
学生 3 的成绩：58
学生 4 的成绩：76
学生 5 的成绩：88

========== 成绩统计结果 ==========
最高分：92
最低分：58
平均分：79.8
及格人数：4 人
及格率：80%

========== 学生成绩列表 ==========
学生 1：85 (及格)
学生 2：92 (及格)
学生 3：58 (不及格)
学生 4：76 (及格)
学生 5：88 (及格)
```

## 💪 尝试改进

现在程序已经运行成功了，你可以尝试做一些小改动：

**练习 1：修改及格线**

把及格分数从 60 改成 70，看看统计结果有什么变化？

::: details 查看答案
找到代码中的这一行：
```cpp
if (scores[i] >= 60) {
```
把 `60` 改成 `70`，然后重新编译运行即可。
:::

**练习 2：增加学生人数**

把学生人数从 5 人改成 10 人。

::: details 查看答案
需要修改三个地方：
1. `double scores[5];` 改成 `double scores[10];`
2. 所有的 `i < 5` 改成 `i < 10`
3. `totalScore / 5` 改成 `totalScore / 10`
4. `passCount * 100.0 / 5` 改成 `passCount * 100.0 / 10`
:::

## 📌 小结

- 你成功完成了第一个实用的 C++ 程序
- 这个程序综合运用了：数组(Array)、循环(Loop)、条件判断(Conditional Statement)、输入输出(Input/Output)
- 编译命令：`g++ 文件名.cpp -o 程序名`
- 运行程序：Windows 用 `程序名.exe`，macOS/Linux 用 `./程序名`
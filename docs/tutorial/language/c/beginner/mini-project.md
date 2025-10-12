---
title: 动手实践
category: c
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---
# 动手实践

恭喜你！你已经学完了 C 语言的基础知识。现在是时候把这些知识串联起来，做一个真正的小项目了。

## 💡 项目需求

我们要做一个**学生成绩管理系统**，功能包括：
- 输入 5 个学生的成绩
- 计算最高分
- 计算最低分
- 计算平均分
- 统计及格人数（60分及以上）

## 📝 完整代码

把下面的代码保存为 `score_manager.c`：

```c{8-12,15-20,23-30,33-41}
#include <stdio.h>

int main() {
    // 定义变量
    float scores[5];
    float sum = 0;
    float average;
    float max_score;
    float min_score;
    int pass_count = 0;
    
    // 输入5个学生的成绩
    printf("=== 学生成绩管理系统 ===\n");
    printf("请输入5个学生的成绩：\n");
    for (int i = 0; i < 5; i++) {
        printf("学生%d的成绩: ", i + 1);
        scanf("%f", &scores[i]);
        sum = sum + scores[i];
    }
    
    // 初始化最高分和最低分
    max_score = scores[0];
    min_score = scores[0];
    
    // 计算最高分、最低分和及格人数
    for (int i = 0; i < 5; i++) {
        if (scores[i] > max_score) {
            max_score = scores[i];
        }
        if (scores[i] < min_score) {
            min_score = scores[i];
        }
        if (scores[i] >= 60) {
            pass_count = pass_count + 1;
        }
    }
    
    // 计算平均分
    average = sum / 5;
    
    // 输出结果
    printf("\n=== 统计结果 ===\n");
    printf("最高分: %.2f\n", max_score);
    printf("最低分: %.2f\n", min_score);
    printf("平均分: %.2f\n", average);
    printf("及格人数: %d\n", pass_count);
    
    return 0;
}
```

::: tip 代码重点
高亮的代码行是核心逻辑：
- **8-12行**：声明所需的变量(Variable)
- **15-20行**：循环(Loop)输入成绩并累加
- **23-30行**：初始化并查找最值
- **33-41行**：计算平均分并输出结果
:::

## 🚀 如何运行这个程序

### 第一步：编译代码

打开终端(Terminal)或命令提示符(Command Prompt)，输入：

```bash
gcc score_manager.c -o score_manager
```

::: warning 注意
如果提示找不到 `gcc` 命令，说明编译器(Compiler)还没安装好。
:::

### 第二步：运行程序

编译成功后，执行：

```bash
./score_manager
```

::: tip Windows 用户
在 Windows 系统上，执行命令是：
```bash
score_manager.exe
```
:::

### 第三步：输入数据

程序运行后会提示你输入成绩，你可以这样输入：

```
=== 学生成绩管理系统 ===
请输入5个学生的成绩：
学生1的成绩: 85
学生2的成绩: 92
学生3的成绩: 78
学生4的成绩: 55
学生5的成绩: 88
```

### 第四步：查看结果

输入完成后，程序会自动计算并显示：

```
=== 统计结果 ===
最高分: 92.00
最低分: 55.00
平均分: 79.60
及格人数: 4
```

## 💪 练习题

### 练习 1：添加不及格统计

在原有代码基础上，增加统计不及格人数的功能。

<details>
<summary>点击查看答案</summary>

```c{10,27-29,48}
#include <stdio.h>

int main() {
    float scores[5];
    float sum = 0;
    float average;
    float max_score;
    float min_score;
    int pass_count = 0;
    int fail_count = 0;  // 新增：不及格人数
    
    printf("=== 学生成绩管理系统 ===\n");
    printf("请输入5个学生的成绩：\n");
    for (int i = 0; i < 5; i++) {
        printf("学生%d的成绩: ", i + 1);
        scanf("%f", &scores[i]);
        sum = sum + scores[i];
    }
    
    max_score = scores[0];
    min_score = scores[0];
    
    for (int i = 0; i < 5; i++) {
        if (scores[i] > max_score) max_score = scores[i];
        if (scores[i] < min_score) min_score = scores[i];
        if (scores[i] >= 60) {
            pass_count++;
        } else {
            fail_count++;  // 新增：统计不及格
        }
    }
    
    average = sum / 5;
    
    printf("\n=== 统计结果 ===\n");
    printf("最高分: %.2f\n", max_score);
    printf("最低分: %.2f\n", min_score);
    printf("平均分: %.2f\n", average);
    printf("及格人数: %d\n", pass_count);
    printf("不及格人数: %d\n", fail_count);  // 新增：输出不及格人数
    
    return 0;
}
```

</details>

### 练习 2：管理 10 个学生

修改程序，让它可以处理 10 个学生的成绩。

<details>
<summary>点击查看答案</summary>

```c{5,15,39}
#include <stdio.h>

int main() {
    // 将数组(Array)大小改为10
    float scores[10];
    float sum = 0;
    float average;
    float max_score;
    float min_score;
    int pass_count = 0;
    
    printf("=== 学生成绩管理系统 ===\n");
    printf("请输入10个学生的成绩：\n");
    // 循环次数改为10
    for (int i = 0; i < 10; i++) {
        printf("学生%d的成绩: ", i + 1);
        scanf("%f", &scores[i]);
        sum = sum + scores[i];
    }
    
    max_score = scores[0];
    min_score = scores[0];
    
    for (int i = 0; i < 10; i++) {
        if (scores[i] > max_score) max_score = scores[i];
        if (scores[i] < min_score) min_score = scores[i];
        if (scores[i] >= 60) pass_count++;
    }
    
    // 除数改为10
    average = sum / 10;
    
    printf("\n=== 统计结果 ===\n");
    printf("最高分: %.2f\n", max_score);
    printf("最低分: %.2f\n", min_score);
    printf("平均分: %.2f\n", average);
    printf("及格人数: %d\n", pass_count);
    
    return 0;
}
```

</details>

## 📌 小结

- 你已经完成了第一个完整的 C 语言程序
- 你学会了如何编译和运行代码：`gcc 文件名.c -o 程序名` → `./程序名`
- 你能够组合使用变量(Variable)、循环(Loop)、条件判断(Conditional)来解决实际问题

::: tip 下一步
试着修改代码，添加你自己的功能！编程最好的学习方式就是不断尝试和修改。
:::
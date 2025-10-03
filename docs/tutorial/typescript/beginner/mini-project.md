---
title: 动手实践
category: typescript
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 动手实践

恭喜你!🎉 你已经学习完了 TypeScript 的基础知识。现在是时候把这些知识串联起来,做一个真正的小项目了。我们要做一个**学生成绩管理系统(Student Grade Management System)**,用来管理 5 位学生的成绩。

## 💡 项目需求

这个系统需要实现以下功能:
- 计算最高分(Highest Score)
- 计算最低分(Lowest Score)
- 计算平均分(Average Score)
- 统计及格人数(Pass Count,60分及以上)

## 📝 完整代码

创建一个新文件 `gradeManager.ts`,把下面的代码复制进去:

```typescript{2-9,12-13,16-21,24-29,32-38,41-42,45-51}
// 定义学生信息的类型
type Student = {
  name: string;        // 学生姓名
  score: number;       // 成绩
};

// 学生数据
const students: Student[] = [
  { name: "张三", score: 85 },
  { name: "李四", score: 92 },
  { name: "王五", score: 58 },
  { name: "赵六", score: 76 },
  { name: "孙七", score: 88 }
];

// 计算最高分
function getHighestScore(students: Student[]): number {
  let highest = students[0].score;
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highest) {
      highest = students[i].score;
    }
  }
  return highest;
}

// 计算最低分
function getLowestScore(students: Student[]): number {
  let lowest = students[0].score;
  for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowest) {
      lowest = students[i].score;
    }
  }
  return lowest;
}

// 计算平均分
function getAverageScore(students: Student[]): number {
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }
  return total / students.length;
}

// 统计及格人数
function getPassCount(students: Student[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 60) {
      count++;
    }
  }
  return count;
}

// 输出统计结果
console.log("=== 学生成绩统计系统 ===");
console.log(`总人数: ${students.length}`);
console.log(`最高分: ${getHighestScore(students)}`);
console.log(`最低分: ${getLowestScore(students)}`);
console.log(`平均分: ${getAverageScore(students).toFixed(2)}`);
console.log(`及格人数: ${getPassCount(students)}`);
```

## 🚀 如何运行代码

### 第一步:编译 TypeScript

打开终端(Terminal),进入你的项目文件夹,运行:

```bash
tsc gradeManager.ts
```

::: tip 提示
如果提示 `tsc` 命令找不到,需要先全局安装 TypeScript:
```bash
npm install -g typescript
```
:::

编译成功后,会生成一个 `gradeManager.js` 文件。

### 第二步:运行 JavaScript 文件

在终端继续输入:

```bash
node gradeManager.js
```

### 第三步:查看运行结果

你会看到类似这样的输出:

```
=== 学生成绩统计系统 ===
总人数: 5
最高分: 92
最低分: 58
平均分: 79.80
及格人数: 4
```

## 💪 练习题

### 练习 1:添加新功能

为系统添加一个新功能:找出成绩最高的学生姓名。

::: details 点击查看答案
```typescript
function getTopStudent(students: Student[]): string {
  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
      topStudent = students[i];
    }
  }
  return topStudent.name;
}

// 在输出部分添加
console.log(`最高分学生: ${getTopStudent(students)}`);
```
:::

### 练习 2:修改及格线

把及格分数线从 60 分改为 70 分,重新运行程序,看看及格人数有什么变化?

::: details 点击查看答案
```typescript
function getPassCount(students: Student[]): number {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 70) {  // 修改这里
      count++;
    }
  }
  return count;
}
```
运行结果:及格人数会变成 3(只有 85、92、76、88 这四位超过 70 分,王五的 58 分不及格)
:::

## 📌 小结

- 你已经完成了第一个完整的 TypeScript 项目
- 学会了如何编译和运行 TypeScript 代码
- 掌握了类型定义、函数、循环等知识的综合运用
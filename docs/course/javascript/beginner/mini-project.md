---
title: 动手实践
category: javascript
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 动手实践

恭喜你!🎉 你已经学完了 JavaScript 的基础知识,现在是时候把这些知识串联起来,做一个真正的小项目了。我们要做一个**学生成绩管理系统**,这个系统会帮你计算班级的各种成绩数据。

## 项目需求

我们要管理 5 个学生的成绩,并且计算出:
- 最高分
- 最低分
- 平均分
- 及格人数(60分及以上)

## 编写代码

创建一个新文件 `student-scores.js`,然后把下面的代码写进去:

```javascript{2-8,11-12,15-20,23-28,31-36,39-44,47-53}
// 学生成绩数据
const students = [
  { name: 'Zhang San', score: 85 },
  { name: 'Li Si', score: 92 },
  { name: 'Wang Wu', score: 78 },
  { name: 'Zhao Liu', score: 58 },
  { name: 'Sun Qi', score: 95 }
];

// 初始化变量
let highest = students[0].score;  // 假设第一个是最高分
let lowest = students[0].score;   // 假设第一个是最低分
let total = 0;                    // 总分
let passCount = 0;                // 及格人数

// 遍历所有学生,计算各项数据
for (let i = 0; i < students.length; i++) {
  const currentScore = students[i].score;
  
  total = total + currentScore;  // 累加总分
  
  // 检查是否是最高分
  if (currentScore > highest) {
    highest = currentScore;
  }
  
  // 检查是否是最低分
  if (currentScore < lowest) {
    lowest = currentScore;
  }
  
  // 检查是否及格
  if (currentScore >= 60) {
    passCount = passCount + 1;
  }
}

// 计算平均分
const average = total / students.length;

// 显示结果
console.log('=== 学生成绩统计 ===');
console.log('总人数:', students.length);
console.log('最高分:', highest);
console.log('最低分:', lowest);
console.log('平均分:', average.toFixed(2));
console.log('及格人数:', passCount);
console.log('及格率:', (passCount / students.length * 100).toFixed(2) + '%');
```

::: tip 代码说明
- **第 2-8 行**:创建了一个数组(Array),里面存放 5 个学生对象(Object),每个对象包含姓名和分数
- **第 11-13 行**:准备好需要用到的变量
- **第 17 行**:用循环(for)遍历每个学生
- **第 23-35 行**:用条件判断(if)来更新最高分、最低分、及格人数
- **第 40 行**:计算平均分,用总分除以人数
- **第 43-49 行**:在控制台显示所有统计结果
:::

## 运行代码

打开命令行工具(终端或命令提示符),进入你保存文件的目录,然后输入:

```bash
node student-scores.js
```

按下回车键,你会看到这样的输出:

```
=== 学生成绩统计 ===
总人数: 5
最高分: 95
最低分: 58
平均分: 81.60
及格人数: 4
及格率: 80.00%
```

::: tip 关于 toFixed() 方法
`toFixed(2)` 的作用是保留小数点后 2 位数字,让平均分和及格率显示得更整齐。
:::

## 试着修改

现在,你可以尝试做一些改动:

### 修改学生成绩

把某个学生的分数改成其他数字,比如把 `Zhao Liu` 的 58 分改成 65 分:

```javascript{5}
const students = [
  { name: 'Zhang San', score: 85 },
  { name: 'Li Si', score: 92 },
  { name: 'Wang Wu', score: 78 },
  { name: 'Zhao Liu', score: 65 },  // 从58改成65
  { name: 'Sun Qi', score: 95 }
];
```

保存文件后,再次运行 `node student-scores.js`,你会发现及格人数变成了 5,及格率变成了 100%!

### 添加更多学生

在数组里添加第 6 个学生:

```javascript{7}
const students = [
  { name: 'Zhang San', score: 85 },
  { name: 'Li Si', score: 92 },
  { name: 'Wang Wu', score: 78 },
  { name: 'Zhao Liu', score: 58 },
  { name: 'Sun Qi', score: 95 },
  { name: 'Zhou Ba', score: 88 }  // 新增学生
];
```

再次运行,总人数会变成 6,其他数据也会自动重新计算。

::: warning 注意逗号
在数组中添加新元素时,要在前一个元素后面加上逗号 `,`
:::

## 💪 练习题

**练习 1**:添加一个功能,统计出优秀人数(90 分及以上)

<details>
<summary>点击查看答案</summary>

```javascript{4,14-17,28}
// 在初始化变量部分添加
let total = 0;
let passCount = 0;
let excellentCount = 0;  // 优秀人数

// 在循环内部添加
for (let i = 0; i < students.length; i++) {
  const currentScore = students[i].score;
  
  total = total + currentScore;
  
  // ... 其他代码 ...
  
  // 检查是否优秀
  if (currentScore >= 90) {
    excellentCount = excellentCount + 1;
  }
}

// 在显示结果部分添加
console.log('=== 学生成绩统计 ===');
console.log('总人数:', students.length);
console.log('最高分:', highest);
console.log('最低分:', lowest);
console.log('平均分:', average.toFixed(2));
console.log('及格人数:', passCount);
console.log('及格率:', (passCount / students.length * 100).toFixed(2) + '%');
console.log('优秀人数:', excellentCount);  // 新增这行
```

</details>

**练习 2**:显示最高分是哪位同学获得的

<details>
<summary>点击查看答案</summary>

```javascript{3,10-12,21}
// 修改初始化变量部分
let highest = students[0].score;
let highestStudent = students[0].name;  // 记录最高分学生姓名
let lowest = students[0].score;

// 修改循环内部
for (let i = 0; i < students.length; i++) {
  // 检查是否是最高分
  if (currentScore > highest) {
    highest = currentScore;
    highestStudent = students[i].name;  // 更新最高分学生
  }
  
  // ... 其他代码 ...
}

// 修改显示结果部分
console.log('=== 学生成绩统计 ===');
console.log('总人数:', students.length);
console.log('最高分:', highest);
console.log('最高分学生:', highestStudent);  // 显示学生姓名
// ... 其他代码 ...
```

</details>

## 📌 小结

- 你已经完成了第一个完整的 JavaScript 小项目
- 这个项目综合运用了变量(Variable)、数组(Array)、对象(Object)、循环(Loop)、条件判断(If Statement)
- 通过修改代码和观察结果,你能更深刻地理解代码是如何工作的
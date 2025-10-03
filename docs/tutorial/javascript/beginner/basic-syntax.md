---
title: 基本语法
category: javascript
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 基本语法

## 变量(Variable)

💡 **是什么?**

变量就像一个带标签的盒子,用来存放数据。你可以随时往盒子里放东西,也可以随时取出来用。

```javascript{1}
let name = "张三";
```

这行代码做了三件事:
- `let` 告诉电脑"我要创建一个盒子"
- `name` 是盒子的标签
- `"张三"` 是放进盒子里的内容

### 📝 完整示例

```javascript{1-3}
let age = 18;
let city = "北京";
let isStudent = true;
```

**运行结果**: 代码执行后,电脑内存中会创建三个变量,但你暂时看不到任何输出。

::: tip 命名规则
- 变量名只能包含字母、数字、下划线和美元符号
- 不能以数字开头
- 推荐使用有意义的英文单词: `userName` 而不是 `a`
:::

## 输出变量

💡 **为什么需要输出?**

创建变量后,你需要一种方式查看变量里存了什么内容。

### 📝 使用 console.log()

```javascript{1-2,4}
let score = 95;
let subject = "数学";

console.log(score);    // 输出: 95
console.log(subject);  // 输出: 数学
```

**运行结果**: 在浏览器的控制台(Console)中会显示:
```
95
数学
```

### 📝 输出多个变量

```javascript{1-3,5-6}
let firstName = "李";
let lastName = "明";
let fullAge = 20;

console.log(firstName, lastName);     // 输出: 李 明
console.log("年龄是:", fullAge);      // 输出: 年龄是: 20
```

**运行结果**:
```
李 明
年龄是: 20
```

::: warning 新手容易忘记
`console.log()` 中的括号和分号都不能省略
:::

## 注释(Comment)

💡 **是什么?**

注释是写给人看的说明文字,电脑会自动忽略它。

### 📝 单行注释

```javascript{1,4}
// 这是注释,不会被执行

let price = 100;
// let discount = 0.8;  这行代码被注释掉了,不会执行
```

### 📝 多行注释

```javascript{1-4}
/*
  这是一个计算程序
  作者: 张三
*/
let result = 10 + 20;
```

::: tip 什么时候用注释?
- 解释复杂的代码逻辑
- 暂时禁用某行代码
- 标记待办事项
:::

## 日志打印

💡 **console.log() 的更多用法**

除了输出变量,你还可以输出各种内容来帮助调试代码。

### 📝 输出计算结果

```javascript{1-2}
console.log(10 + 5);           // 输出: 15
console.log(100 - 30);         // 输出: 70
console.log("你好" + "世界");   // 输出: 你好世界
```

### 📝 输出多种数据类型

```javascript{1-4}
console.log(123);              // 数字
console.log("Hello");          // 文本
console.log(true);             // 布尔值
console.log(10, "岁", true);   // 混合输出
```

**运行结果**:
```
123
Hello
true
10 岁 true
```

### 📝 查看变量内容

```javascript{1-5}
let userName = "王芳";
let userAge = 25;

console.log("用户名:", userName);
console.log("年龄:", userAge);
```

**运行结果**:
```
用户名: 王芳
年龄: 25
```

## 💪 练习题

**练习 1**: 创建一个存储你喜欢的水果名称的变量,并输出它

<details>
<summary>查看答案</summary>

```javascript
let favoriteFruit = "苹果";
console.log(favoriteFruit);
```

</details>

**练习 2**: 创建两个变量分别存储数学成绩和英语成绩,然后输出它们

<details>
<summary>查看答案</summary>

```javascript
let mathScore = 88;
let englishScore = 92;

console.log("数学成绩:", mathScore);
console.log("英语成绩:", englishScore);
```

</details>

## 📌 小结

- **变量**: 使用 `let` 创建变量来存储数据
- **输出**: 使用 `console.log()` 查看变量内容
- **注释**: 使用 `//` 或 `/* */` 添加代码说明
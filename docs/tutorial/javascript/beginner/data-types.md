---
title: 数据类型
category: javascript
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 数据类型

## 💡 什么是数据类型(Data Type)

在编程中,数据类型(Data Type)就是数据的"身份证",它告诉计算机这个数据是什么类型的。就像我们日常生活中有数字、文字、真假判断一样,JavaScript也有不同类型的数据。

本章我们将学习四种基本数据类型:
- **整数(Integer)** - 完整的数字
- **浮点数(Float)** - 带小数点的数字
- **字符串(String)** - 文本内容
- **布尔值(Boolean)** - 真或假

## 整数(Integer)

### 💡 概念说明

整数就是没有小数部分的数字,可以是正数、负数或零。

### 📝 代码示例

```javascript{1-3}
let age = 25;           // 正整数
let temperature = -5;   // 负整数
let score = 0;          // 零

console.log(age);
console.log(temperature);
console.log(score);
```

**运行结果:**
```
25
-5
0
```

::: tip 提示
整数可以直接写,不需要加引号或其他符号
:::

### 💪 练习题

**练习1:** 创建一个变量存储你的出生年份,并打印出来

<details>
<summary>查看答案</summary>

```javascript
let birthYear = 2000;
console.log(birthYear);
```

</details>

**练习2:** 创建两个变量分别存储100和-50,然后打印它们

<details>
<summary>查看答案</summary>

```javascript
let positive = 100;
let negative = -50;
console.log(positive);
console.log(negative);
```

</details>

## 浮点数(Float)

### 💡 概念说明

浮点数就是带有小数点的数字,用于表示更精确的数值。

### 📝 代码示例

```javascript{1-3}
let price = 19.99;      // 商品价格
let pi = 3.14159;       // 圆周率
let discount = 0.85;    // 折扣

console.log(price);
console.log(pi);
console.log(discount);
```

**运行结果:**
```
19.99
3.14159
0.85
```

::: warning 注意
小数点用英文句号 `.` 而不是逗号 `,`
:::

### 💪 练习题

**练习1:** 创建一个变量存储你的身高(米),例如1.75米

<details>
<summary>查看答案</summary>

```javascript
let height = 1.75;
console.log(height);
```

</details>

**练习2:** 创建一个变量存储商品打折后的价格99.5元

<details>
<summary>查看答案</summary>

```javascript
let salePrice = 99.5;
console.log(salePrice);
```

</details>

## 字符串(String)

### 💡 概念说明

字符串就是文本内容,可以是单词、句子或任何文字。在JavaScript中,字符串必须用引号包裹起来。

可以使用三种引号:
- 单引号 `'...'`
- 双引号 `"..."`
- 反引号 `` `...` ``

### 📝 代码示例

```javascript{1-4}
let name = "张三";                    // 双引号
let city = '北京';                    // 单引号
let greeting = `你好,世界!`;          // 反引号
let email = "example@email.com";     // 英文内容

console.log(name);
console.log(city);
console.log(greeting);
console.log(email);
```

**运行结果:**
```
张三
北京
你好,世界!
example@email.com
```

::: tip 提示
单引号和双引号效果相同,选择你喜欢的一种即可。反引号有特殊功能,我们后续章节会学习
:::

### 💪 练习题

**练习1:** 创建一个变量存储你的名字,并打印出来

<details>
<summary>查看答案</summary>

```javascript
let myName = "小明";
console.log(myName);
```

</details>

**练习2:** 创建两个变量,分别存储你的姓和名,然后打印它们

<details>
<summary>查看答案</summary>

```javascript
let firstName = "李";
let lastName = "华";
console.log(firstName);
console.log(lastName);
```

</details>

## 布尔值(Boolean)

### 💡 概念说明

布尔值(Boolean)只有两个值:`true`(真)和`false`(假)。它用于表示"是或否"、"对或错"、"开或关"这类只有两种状态的情况。

### 📝 代码示例

```javascript{1-4}
let isStudent = true;       // 是学生
let hasLicense = false;     // 没有驾照
let isRaining = false;      // 没有下雨
let isAdult = true;         // 是成年人

console.log(isStudent);
console.log(hasLicense);
console.log(isRaining);
console.log(isAdult);
```

**运行结果:**
```
true
false
false
true
```

::: warning 注意
`true`和`false`不需要加引号,它们是特殊的关键字
:::

### 💪 练习题

**练习1:** 创建一个变量表示"今天是周末",值为true

<details>
<summary>查看答案</summary>

```javascript
let isWeekend = true;
console.log(isWeekend);
```

</details>

**练习2:** 创建两个变量,一个表示"下雨了"(true),另一个表示"带伞了"(false)

<details>
<summary>查看答案</summary>

```javascript
let isRaining = true;
let hasUmbrella = false;
console.log(isRaining);
console.log(hasUmbrella);
```

</details>

## 综合练习

创建一个小程序,存储一个人的基本信息:

<details>
<summary>查看答案</summary>

```javascript
// 个人信息
let personName = "王小明";
let age = 28;
let height = 1.75;
let isMarried = false;

console.log(personName);
console.log(age);
console.log(height);
console.log(isMarried);
```

**运行结果:**
```
王小明
28
1.75
false
```

</details>

## 📌 小结

- **整数(Integer)**:完整的数字,如`25`、`-10`、`0`
- **浮点数(Float)**:带小数点的数字,如`3.14`、`19.99`
- **字符串(String)**:用引号包裹的文本,如`"你好"`、`'世界'`
- **布尔值(Boolean)**:只有`true`或`false`两个值
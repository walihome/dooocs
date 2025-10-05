---
title: 基本语法
category: typescript
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 基本语法

## 定义变量(Variable)

💡 **变量是什么?**

变量就像一个带标签的盒子,用来存放数据。你需要告诉 TypeScript 这个盒子叫什么名字,里面放什么类型的东西。

### 📝 代码示例

```typescript{1,2,3}
let age = 25;
let name = "张三";
let isStudent = true;
```

**运行结果:**
代码运行后不会显示任何内容,但这三个变量已经创建好了,可以在后续代码中使用。

::: tip 提示
- `let` 是定义变量的关键字
- `=` 右边是你要存放的数据
- 每行代码结尾用分号 `;`
:::

## 输出变量(Output)

💡 **如何查看变量的值?**

使用 `console.log()` 可以在控制台(Console)打印出变量的内容,这是检查代码运行结果的最常用方法。

### 📝 代码示例

```typescript{4,5,6}
let age = 25;
let name = "张三";
let isStudent = true;
console.log(age);
console.log(name);
console.log(isStudent);
```

**运行结果:**
```
25
张三
true
```

::: tip 提示
你可以在一个 `console.log()` 中同时输出多个变量:
```typescript
console.log(age, name, isStudent);
```
输出: `25 张三 true`
:::

## 增加注释(Comment)

💡 **注释的作用?**

注释是写给人看的说明文字,程序运行时会自动忽略这些内容。它帮助你(和其他人)理解代码的意图。

### 📝 代码示例

```typescript{1,4,7,8,9}
// 这是单行注释,用两个斜杠开头

let age = 25; // 也可以写在代码后面
let name = "张三";

/*
这是多行注释
可以写很多行说明
*/
let isStudent = true;
```

**运行结果:**
代码正常运行,注释内容不会影响程序执行。

::: warning 注意
注释要写得有意义,避免写无用的注释:
- ❌ 不好: `let age = 25; // 定义 age 变量`
- ✅ 好: `let age = 25; // 用户输入的年龄`
:::

## 日志打印(Console Logging)

💡 **更灵活的输出方式**

除了基本的 `console.log()`,还有其他日志方法用于不同场景。

### 📝 代码示例

```typescript{6,9,12}
let score = 85;
let userName = "李四";

// 普通信息
console.log("学生姓名:", userName);

// 警告信息(黄色显示)
console.warn("分数接近及格线!");

// 错误信息(红色显示)
console.error("成绩输入有误!");
```

**运行结果:**
```
学生姓名: 李四
⚠️ 警告: 分数接近及格线!
❌ 错误: 成绩输入有误!
```

::: tip 提示
不同的日志方法会在浏览器控制台中显示不同的颜色和图标,方便区分信息类型。
:::

## 💪 练习题

**练习 1**: 创建一个表示商品信息的变量组,包含商品名称、价格和是否有货,然后输出这些信息。

<details>
<summary>查看答案</summary>

```typescript
let productName = "iPhone 15";
let price = 5999;
let inStock = true;

console.log("商品名称:", productName);
console.log("价格:", price);
console.log("是否有货:", inStock);
```

</details>

**练习 2**: 在上面的代码中添加注释,说明每个变量的用途。

<details>
<summary>查看答案</summary>

```typescript
// 商品基本信息
let productName = "iPhone 15"; // 商品名称
let price = 5999; // 销售价格(单位:元)
let inStock = true; // 库存状态

// 输出商品信息到控制台
console.log("商品名称:", productName);
console.log("价格:", price);
console.log("是否有货:", inStock);
```

</details>

## 📌 小结

- 使用 `let` 定义变量,格式: `let 变量名 = 值;`
- 使用 `console.log()` 输出变量内容到控制台
- 单行注释用 `//`,多行注释用 `/* */`
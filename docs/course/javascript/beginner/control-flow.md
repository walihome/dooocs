---
title: 控制流
category: javascript
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 控制流

程序不仅能按顺序执行代码,还能根据条件做出决策、重复执行任务。这就是控制流(Control Flow)的作用——让代码变得更加智能和灵活。

## for 循环(for Loop)

### 💡 概念说明

当你需要重复做同一件事多次时,`for` 循环能帮你自动完成,而不用写很多遍相同的代码。

**基本结构:**
- 初始值:从哪里开始
- 条件:循环到什么时候停止
- 更新:每次循环后如何改变

### 📝 代码示例

```javascript{1}
for (let i = 0; i < 5; i++) {
  console.log("这是第 " + i + " 次循环");
}
```

**运行结果:**
```
这是第 0 次循环
这是第 1 次循环
这是第 2 次循环
这是第 3 次循环
这是第 4 次循环
```

::: tip 提示
`i++` 是 `i = i + 1` 的简写,表示每次循环后 i 增加 1
:::

### 实际应用场景

```javascript{2-4}
// 计算 1 到 10 的总和
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log("总和是: " + sum); // 输出: 总和是: 55
```

### 💪 练习题

**练习 1:** 使用 `for` 循环输出 1 到 10 的所有偶数

<details>
<summary>点击查看答案</summary>

```javascript
for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
// 或者
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
```

</details>

**练习 2:** 创建一个倒计时,从 5 数到 1

<details>
<summary>点击查看答案</summary>

```javascript
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
console.log("发射!");
```

</details>

## while 循环(while Loop)

### 💡 概念说明

`while` 循环在不知道具体要循环多少次,但知道什么时候应该停止时特别有用。只要条件为真(true),就会一直循环。

### 📝 代码示例

```javascript{1,3}
let count = 0;
while (count < 3) {
  console.log("当前计数: " + count);
  count++;
}
```

**运行结果:**
```
当前计数: 0
当前计数: 1
当前计数: 2
```

::: warning 注意
确保循环条件最终会变成 `false`,否则程序会一直运行下去(无限循环)
:::

### 实际应用场景

```javascript{2-5}
// 找到第一个大于 100 的 2 的倍数
let number = 1;
while (number <= 100) {
  number = number * 2;
}
console.log("结果是: " + number); // 输出: 结果是: 128
```

### 💪 练习题

**练习 1:** 使用 `while` 循环计算 1 到 5 的乘积

<details>
<summary>点击查看答案</summary>

```javascript
let result = 1;
let i = 1;
while (i <= 5) {
  result = result * i;
  i++;
}
console.log("1 到 5 的乘积是: " + result); // 输出: 120
```

</details>

## if 条件语句(if Statement)

### 💡 概念说明

`if` 语句让程序能够根据不同情况做出不同的决策,就像现实生活中"如果...那么..."的逻辑。

**基本形式:**
- `if`:如果条件成立,执行某段代码
- `else if`:如果前面条件不成立,检查另一个条件
- `else`:如果所有条件都不成立,执行这段代码

### 📝 代码示例

```javascript{1-7}
let score = 85;

if (score >= 90) {
  console.log("优秀");
} else if (score >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}
```

**运行结果:**
```
及格
```

### 条件比较运算符

```javascript
let age = 18;

// 等于
if (age === 18) {
  console.log("刚好 18 岁");
}

// 不等于
if (age !== 20) {
  console.log("不是 20 岁");
}

// 大于、小于
if (age > 16) {
  console.log("大于 16 岁");
}

if (age <= 18) {
  console.log("小于或等于 18 岁");
}
```

::: tip 提示
使用 `===` 而不是 `==`,这样比较更严格、更安全
:::

### 组合多个条件

```javascript{4,9}
let temperature = 25;
let isRaining = false;

// 使用 && (并且)
if (temperature > 20 && !isRaining) {
  console.log("适合外出");
}

// 使用 || (或者)
if (temperature < 10 || temperature > 35) {
  console.log("天气极端");
}
```

### 💪 练习题

**练习 1:** 写一个程序判断一个数字是正数、负数还是零

<details>
<summary>点击查看答案</summary>

```javascript
let number = -5;

if (number > 0) {
  console.log("正数");
} else if (number < 0) {
  console.log("负数");
} else {
  console.log("零");
}
```

</details>

**练习 2:** 结合 `for` 循环和 `if` 语句,输出 1 到 20 中能被 3 整除的数字

<details>
<summary>点击查看答案</summary>

```javascript
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// 输出: 3, 6, 9, 12, 15, 18
```

</details>

## 📌 小结

- **for 循环**: 当你知道要重复多少次时使用,语法格式为 `for (初始值; 条件; 更新)`
- **while 循环**: 当你只知道停止条件,不确定次数时使用,确保条件最终会变成 `false`
- **if 语句**: 根据条件执行不同代码,可以使用 `===`、`>`、`<` 等运算符,还能用 `&&`、`||` 组合多个条件
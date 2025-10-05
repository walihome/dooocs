---
title: 控制流
category: typescript
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 控制流

在编程中,我们经常需要让程序根据不同情况做出不同决策,或者重复执行某些操作。控制流(Control Flow)就是用来控制代码执行顺序的语法。

## if 条件判断

💡 **概念说明**

`if` 语句让程序能够"做选择"——当条件满足时执行某段代码,不满足时跳过或执行其他代码。

### 📝 代码示例

```typescript{1,5,9}
// 基本的 if 语句
let age: number = 18;

if (age >= 18) {
  console.log("你可以考驾照了");
}

// if-else: 二选一
let temperature: number = 15;

if (temperature > 25) {
  console.log("天气很热,记得开空调");
} else {
  console.log("天气凉爽");
}

// if-else if-else: 多选一
let score: number = 85;

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
你可以考驾照了
天气凉爽
及格
```

::: tip 提示
条件判断中的 `>=`、`>`、`<`、`<=`、`===` 都是比较运算符(Comparison Operators),用来比较两个值的关系。
:::

### 💪 练习题

**练习1**: 写一个程序,根据时间(hour)判断是上午、下午还是晚上。

<details>
<summary>点击查看答案</summary>

```typescript
let hour: number = 14;

if (hour < 12) {
  console.log("上午好");
} else if (hour < 18) {
  console.log("下午好");
} else {
  console.log("晚上好");
}
```

</details>

**练习2**: 写一个程序,判断一个数字是正数、负数还是零。

<details>
<summary>点击查看答案</summary>

```typescript
let num: number = -5;

if (num > 0) {
  console.log("这是正数");
} else if (num < 0) {
  console.log("这是负数");
} else {
  console.log("这是零");
}
```

</details>

## for 循环

💡 **概念说明**

`for` 循环用于重复执行某段代码指定的次数。它由三部分组成:
- 初始化: 设置循环计数器的起始值
- 条件: 每次循环前检查是否继续
- 更新: 每次循环后如何改变计数器

### 📝 代码示例

```typescript{2,8,14}
// 打印数字 1 到 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 计算 1 到 10 的总和
let sum: number = 0;
for (let i = 1; i <= 10; i++) {
  sum = sum + i;
}
console.log("总和是:", sum);

// 遍历数组
let fruits: string[] = ["苹果", "香蕉", "橙子"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**运行结果:**
```
1
2
3
4
5
总和是: 55
苹果
香蕉
橙子
```

::: warning 注意
`i++` 是 `i = i + 1` 的简写,表示每次循环后 `i` 增加 1。数组的索引(index)从 0 开始,所以 `i < fruits.length` 而不是 `<=`。
:::

### 💪 练习题

**练习1**: 使用 for 循环打印 10 到 1 的倒数。

<details>
<summary>点击查看答案</summary>

```typescript
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
```

</details>

**练习2**: 计算数组中所有数字的平均值。

<details>
<summary>点击查看答案</summary>

```typescript
let numbers: number[] = [10, 20, 30, 40, 50];
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

let average: number = sum / numbers.length;
console.log("平均值是:", average);
```

</details>

## while 循环

💡 **概念说明**

`while` 循环会持续执行代码,直到条件变为 false。它与 for 循环的区别是:
- `while`: 当你不知道要循环多少次,只知道什么时候停止
- `for`: 当你明确知道要循环多少次

### 📝 代码示例

```typescript{2,9,16}
// 基本的 while 循环
let count: number = 1;
while (count <= 5) {
  console.log("当前计数:", count);
  count++;
}

// 累加到目标值
let total: number = 0;
let num: number = 1;
while (total < 50) {
  total = total + num;
  num++;
}
console.log("总和达到:", total);

// do-while: 至少执行一次
let password: string = "";
do {
  console.log("请输入密码");
  password = "123456"; // 模拟用户输入
} while (password !== "123456");
console.log("密码正确");
```

**运行结果:**
```
当前计数: 1
当前计数: 2
当前计数: 3
当前计数: 4
当前计数: 5
总和达到: 55
请输入密码
密码正确
```

::: danger 警告
使用 while 循环要小心"死循环"——如果条件永远为 true,程序会一直运行下去。确保循环内部会改变条件相关的变量。
:::

### 💪 练习题

**练习1**: 使用 while 循环找出第一个大于 100 的 2 的倍数。

<details>
<summary>点击查看答案</summary>

```typescript
let number: number = 2;
while (number <= 100) {
  number = number * 2;
}
console.log("第一个大于 100 的结果:", number);
```

</details>

**练习2**: 使用 while 循环计算一个数字的各位数字之和(例如 123 的结果是 6)。

<details>
<summary>点击查看答案</summary>

```typescript
let num: number = 123;
let sum: number = 0;

while (num > 0) {
  sum = sum + (num % 10); // 取个位数
  num = Math.floor(num / 10); // 去掉个位数
}

console.log("各位数字之和:", sum);
```

</details>

## 📌 小结

- **if 语句**: 根据条件决定是否执行代码,可以搭配 else 和 else if 实现多种选择
- **for 循环**: 适合已知循环次数的场景,常用于遍历数组或重复固定次数
- **while 循环**: 适合条件驱动的场景,在条件满足时持续执行
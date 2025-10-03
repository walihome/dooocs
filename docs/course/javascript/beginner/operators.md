---
title: 基础运算
category: javascript
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 基础运算

编程的本质之一就是让计算机帮我们进行各种计算。在这一章,你将学会如何让 JavaScript 处理数字、比较数据和做出判断。

## 赋值(Assignment)

### 💡 概念说明

赋值就是把一个值存储到变量中,使用等号 `=` 实现。

### 📝 代码示例

```javascript{1,4,7}
let price = 100;  // 把 100 赋值给 price

// 可以把一个变量的值赋给另一个变量
let originalPrice = price;

// 可以通过计算后再赋值
let totalPrice = price * 2;

console.log(price);          // 100
console.log(originalPrice);  // 100
console.log(totalPrice);     // 200
```

::: tip 提示
等号 `=` 在编程中是"赋值"的意思,不是数学中的"相等"。要记住:右边的值会被存入左边的变量中。
:::

### 💪 练习题

1. 创建一个变量 `age`,赋值为 25,然后创建另一个变量 `myAge`,把 `age` 的值赋给它

<details>
<summary>查看答案</summary>

```javascript
let age = 25;
let myAge = age;
console.log(myAge);  // 25
```

</details>

## 数学操作(Arithmetic Operations)

### 💡 概念说明

JavaScript 支持基本的数学运算:
- 加法 `+`
- 减法 `-`
- 乘法 `*`
- 除法 `/`
- 求余 `%`

### 📝 代码示例

```javascript{2,5,8,11,14}
// 加法
let sum = 10 + 5;
console.log(sum);  // 15

// 减法
let difference = 10 - 5;
console.log(difference);  // 5

// 乘法
let product = 10 * 5;
console.log(product);  // 50

// 除法
let quotient = 10 / 5;
console.log(quotient);  // 2

// 求余(取余数)
let remainder = 10 % 3;
console.log(remainder);  // 1
```

::: tip 求余的用途
求余运算 `%` 会返回除法的余数。比如 10 除以 3 等于 3 余 1,所以 `10 % 3` 的结果是 1。这在判断奇偶数、循环计数等场景很有用。
:::

### 📝 组合运算示例

```javascript{2-3}
let price = 100;
let quantity = 3;
let total = price * quantity + 10;  // 先乘后加
console.log(total);  // 310

// 使用括号改变运算顺序
let result = (10 + 5) * 2;
console.log(result);  // 30
```

### 💪 练习题

1. 计算一个商品原价 200,打八折后再加 15 元运费,最终价格是多少?

<details>
<summary>查看答案</summary>

```javascript
let originalPrice = 200;
let discountPrice = originalPrice * 0.8;
let finalPrice = discountPrice + 15;
console.log(finalPrice);  // 175
```

</details>

2. 判断数字 17 是奇数还是偶数(提示:偶数对 2 求余等于 0)

<details>
<summary>查看答案</summary>

```javascript
let number = 17;
let remainder = number % 2;
console.log(remainder);  // 1,不等于 0,所以是奇数
```

</details>

## 比较运算(Comparison Operations)

### 💡 概念说明

比较运算用来判断两个值的关系,结果是 `true`(真)或 `false`(假):
- 相等 `===`
- 不相等 `!==`
- 大于 `>`
- 小于 `<`
- 大于等于 `>=`
- 小于等于 `<=`

### 📝 代码示例

```javascript{2,5,8,11,14,17}
// 相等
let isEqual = 10 === 10;
console.log(isEqual);  // true

// 不相等
let isNotEqual = 10 !== 5;
console.log(isNotEqual);  // true

// 大于
let isGreater = 10 > 5;
console.log(isGreater);  // true

// 小于
let isLess = 10 < 5;
console.log(isLess);  // false

// 大于等于
let isGreaterOrEqual = 10 >= 10;
console.log(isGreaterOrEqual);  // true

// 小于等于
let isLessOrEqual = 5 <= 10;
console.log(isLessOrEqual);  // true
```

::: warning 注意
JavaScript 中判断相等要用三个等号 `===`,而不是两个。虽然 `==` 也能用,但 `===` 更严格、更安全。
:::

### 💪 练习题

1. 判断一个人的年龄 18 是否已经成年(大于等于 18 岁)

<details>
<summary>查看答案</summary>

```javascript
let age = 18;
let isAdult = age >= 18;
console.log(isAdult);  // true
```

</details>

## 逻辑运算(Logical Operations)

### 💡 概念说明

逻辑运算用来组合多个条件判断:
- 并且 `&&` (AND) - 所有条件都为真才是真
- 或者 `||` (OR) - 任意一个条件为真就是真
- 取反 `!` (NOT) - 把真变假,把假变真

### 📝 代码示例

```javascript{2,6,10,14}
// 并且(AND):两个条件都要满足
let age = 20;
let hasTicket = true;
let canEnter = age >= 18 && hasTicket;
console.log(canEnter);  // true

// 或者(OR):满足任意一个条件即可
let isWeekend = false;
let isHoliday = true;
let canRest = isWeekend || isHoliday;
console.log(canRest);  // true

// 取反(NOT):把结果反转
let isBusy = false;
let isFree = !isBusy;
console.log(isFree);  // true
```

### 📝 组合使用示例

```javascript{4-5}
let age = 25;
let hasLicense = true;
let hasInsurance = true;
// 可以开车的条件:年龄>=18 并且 有驾照 并且 有保险
let canDrive = age >= 18 && hasLicense && hasInsurance;
console.log(canDrive);  // true
```

::: tip 理解逻辑运算
- `&&` 就像"同时满足"：必须两个条件都是 true,结果才是 true
- `||` 就像"至少满足一个"：只要有一个条件是 true,结果就是 true
- `!` 就像"相反"：true 变 false,false 变 true
:::

### 💪 练习题

1. 一个电影院规定:年龄在 18 到 60 岁之间才能观看某部电影,判断年龄 25 是否符合条件

<details>
<summary>查看答案</summary>

```javascript
let age = 25;
let canWatch = age >= 18 && age <= 60;
console.log(canWatch);  // true
```

</details>

2. 一个人可以免费乘车的条件是:年龄小于 6 岁或者年龄大于 65 岁,判断年龄 70 是否免费

<details>
<summary>查看答案</summary>

```javascript
let age = 70;
let isFree = age < 6 || age > 65;
console.log(isFree);  // true
```

</details>

## 📌 小结

- **赋值**使用 `=`,把右边的值存入左边的变量
- **数学运算**包括 `+` `-` `*` `/` `%`,遵循数学运算优先级
- **比较运算**返回 true 或 false,判断相等用 `===`
- **逻辑运算**用来组合多个条件,`&&` 表示"并且",`||` 表示"或者",`!` 表示"取反"
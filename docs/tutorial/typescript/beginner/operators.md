---
title: 基础运算
category: typescript
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 基础运算

编程的核心之一就是让计算机帮我们完成各种计算。在这一章,你将学会如何让 TypeScript 进行数学计算、比较大小,以及做出逻辑判断。

## 赋值(Assignment)

### 💡 概念说明

赋值就是把一个值存储到变量中,使用 `=` 符号完成。

::: tip 提示
`=` 在编程中不是"等于"的意思,而是"赋值"——把右边的值放到左边的变量里。
:::

### 📝 代码示例

```typescript{1,4,7}
let score = 95; // 把 95 存到 score 变量中

// 可以重新赋值
score = 100; // score 现在是 100

// 可以用一个变量的值赋给另一个变量
let finalScore = score; // finalScore 也是 100

console.log(score); // 输出: 100
console.log(finalScore); // 输出: 100
```

**运行结果**: 控制台会显示两个 100

## 数学运算(Arithmetic Operators)

### 💡 概念说明

TypeScript 支持基本的数学运算:
- 加法 `+`
- 减法 `-`
- 乘法 `*`
- 除法 `/`
- 求余(取模) `%`

### 📝 代码示例

```typescript{2,5,8,11,14}
// 加法
let total = 50 + 30; // total 是 80

// 减法
let remaining = 100 - 25; // remaining 是 75

// 乘法
let price = 20 * 3; // price 是 60

// 除法
let average = 100 / 4; // average 是 25

// 求余 - 除法后的余数
let remainder = 17 % 5; // remainder 是 2 (因为 17÷5=3余2)

console.log(total); // 80
console.log(remainder); // 2
```

**运行结果**: 控制台显示 80 和 2

::: tip 提示
求余运算 `%` 常用于判断奇偶数:如果 `number % 2` 结果是 0,说明是偶数;结果是 1,说明是奇数。
:::

### 📝 组合运算

```typescript{2-3}
let a = 10;
let result = (a + 5) * 2; // 先算括号内: 10+5=15, 再乘2: 15*2=30
console.log(result); // 30
```

## 比较运算(Comparison Operators)

### 💡 概念说明

比较运算用于比较两个值,结果是 `boolean` 类型(true 或 false):
- 相等 `===`
- 不相等 `!==`
- 大于 `>`
- 小于 `<`
- 大于等于 `>=`
- 小于等于 `<=`

### 📝 代码示例

```typescript{2,5,8,11,14,17}
// 相等判断
let isEqual = 10 === 10; // true

// 不相等判断
let isNotEqual = 10 !== 5; // true

// 大于
let isGreater = 20 > 15; // true

// 小于
let isLess = 10 < 5; // false

// 大于等于
let isGreaterOrEqual = 10 >= 10; // true

// 小于等于
let isLessOrEqual = 8 <= 10; // true

console.log(isEqual); // true
console.log(isLess); // false
```

**运行结果**: 控制台显示 true 和 false

::: warning 注意
TypeScript 中判断相等用 `===`(三个等号),不是 `=`(一个等号是赋值)。
:::

### 📝 实际应用

```typescript{1,2,4}
let userAge = 18;
let canVote = userAge >= 18; // true

console.log(canVote); // true
```

## 逻辑运算(Logical Operators)

### 💡 概念说明

逻辑运算用于组合多个条件:
- 与(AND) `&&` - 两个条件都为 true 时,结果才是 true
- 或(OR) `||` - 任意一个条件为 true 时,结果就是 true
- 非(NOT) `!` - 反转结果,true 变 false,false 变 true

### 📝 代码示例

```typescript{2,5,8,11}
// 与运算 - 都要满足
let hasTicket = true;
let hasTime = true;
let canWatchMovie = hasTicket && hasTime; // true

// 或运算 - 满足一个即可
let isWeekend = false;
let isHoliday = true;
let canRest = isWeekend || isHoliday; // true

// 非运算 - 取反
let isBusy = false;
let isFree = !isBusy; // true

console.log(canWatchMovie); // true
console.log(canRest); // true
console.log(isFree); // true
```

**运行结果**: 控制台显示三个 true

### 📝 组合使用

```typescript{1-3,4}
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense; // true (年龄够 且 有驾照)
console.log(canDrive); // true
```

::: tip 提示
`&&` 运算中,如果第一个条件是 false,TypeScript 不会检查第二个条件(因为结果必然是 false)。这叫做"短路求值"。
:::

## 💪 练习题

### 练习 1: 计算购物总价

一件商品原价 120 元,打 8 折,你买了 3 件。计算总价。

<details>
<summary>点击查看答案</summary>

```typescript
let originalPrice = 120;
let discount = 0.8;
let quantity = 3;

let total = originalPrice * discount * quantity;
console.log(total); // 288
```

</details>

### 练习 2: 判断是否可以免费送货

商城规则:订单金额 >= 99 元或者是会员,就可以免费送货。请判断以下情况是否免费送货。

<details>
<summary>点击查看答案</summary>

```typescript
let orderAmount = 85;
let isMember = true;

let freeShipping = orderAmount >= 99 || isMember;
console.log(freeShipping); // true (因为是会员)
```

</details>

## 📌 小结

- **赋值** 使用 `=`,把右边的值存入左边的变量
- **数学运算** 包括 `+` `-` `*` `/` `%`,其中 `%` 是求余数
- **比较运算** 使用 `===` `>` `<` 等,结果是 boolean 类型
- **逻辑运算** 中,`&&` 要求都满足,`||` 满足一个即可,`!` 用于取反
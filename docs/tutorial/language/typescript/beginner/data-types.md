---
title: 数据类型
category: typescript
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 数据类型

在 TypeScript 中,数据类型(Data Type)就是告诉计算机"这个盒子里装的是什么"。就像你的衣柜有专门放衣服的格子、放鞋子的格子,程序也需要不同类型的"格子"来存放不同的数据。

## 整数(Integer/Number)

### 💡 概念说明

整数就是没有小数点的数字,比如 1、100、-5。在 TypeScript 中,整数使用 `number` 类型表示。

### 📝 代码示例

```typescript{1,4,7}
let age: number = 25;  // 年龄
console.log(age);

let temperature: number = -10;  // 温度(可以是负数)
console.log(temperature);

let score: number = 0;  // 分数
console.log(score);
```

**运行结果**:
```
25
-10
0
```

::: tip 提示
`let` 是用来创建变量的关键字,冒号后面的 `number` 告诉 TypeScript 这个变量只能存放数字。
:::

## 浮点数(Float/Number)

### 💡 概念说明

浮点数就是带小数点的数字,比如 3.14、0.5、-2.8。TypeScript 中整数和浮点数都使用 `number` 类型。

### 📝 代码示例

```typescript{1,4,7}
let price: number = 19.99;  // 价格
console.log(price);

let weight: number = 65.5;  // 体重
console.log(weight);

let pi: number = 3.14159;  // 圆周率
console.log(pi);
```

**运行结果**:
```
19.99
65.5
3.14159
```

### 💪 练习题

**练习 1**: 创建一个变量存储你的身高(单位:米),并打印出来。

::: details 查看答案
```typescript
let height: number = 1.75;
console.log(height);
```
:::

**练习 2**: 创建两个变量,一个存储商品原价 100,另一个存储折扣后的价格 79.9,分别打印。

::: details 查看答案
```typescript
let originalPrice: number = 100;
let discountPrice: number = 79.9;
console.log(originalPrice);
console.log(discountPrice);
```
:::

## 字符串(String)

### 💡 概念说明

字符串就是文本内容,需要用引号包起来。可以使用:
- 单引号 `'hello'`
- 双引号 `"hello"`
- 反引号 `` `hello` ``

### 📝 代码示例

```typescript{1,4,7,10}
let userName: string = "张三";  // 姓名
console.log(userName);

let email: string = 'user@example.com';  // 邮箱
console.log(email);

let greeting: string = `你好,世界!`;  // 问候语
console.log(greeting);

let emptyText: string = "";  // 空字符串也是字符串
console.log(emptyText);
```

**运行结果**:
```
张三
user@example.com
你好,世界!

```

::: warning 注意
引号必须成对出现,不能一边单引号一边双引号:`"hello'` 是错误的。
:::

### 📝 字符串拼接

```typescript{1-2,5-6}
let firstName: string = "张";
let lastName: string = "三";

// 使用 + 号拼接
let fullName: string = firstName + lastName;
console.log(fullName);

// 使用反引号模板(推荐)
let greeting: string = `你好,我叫${firstName}${lastName}`;
console.log(greeting);
```

**运行结果**:
```
张三
你好,我叫张三
```

::: tip 提示
反引号中使用 `${}` 可以插入变量,这种方式叫做模板字符串(Template String),更加直观。
:::

### 💪 练习题

**练习**: 创建两个变量,一个存储你的城市,一个存储你的爱好,然后用模板字符串打印 "我住在{城市},喜欢{爱好}"。

::: details 查看答案
```typescript
let city: string = "北京";
let hobby: string = "编程";
let introduction: string = `我住在${city},喜欢${hobby}`;
console.log(introduction);
```
:::

## 布尔值(Boolean)

### 💡 概念说明

布尔值只有两个值:
- `true` - 表示"是"、"真"、"开"
- `false` - 表示"否"、"假"、"关"

常用于表示开关状态、判断结果等。

### 📝 代码示例

```typescript{1,4,7,10}
let isOnline: boolean = true;  // 是否在线
console.log(isOnline);

let hasPassword: boolean = false;  // 是否有密码
console.log(hasPassword);

let isAdult: boolean = true;  // 是否成年
console.log(isAdult);

let isSunny: boolean = false;  // 是否晴天
console.log(isSunny);
```

**运行结果**:
```
true
false
true
false
```

::: warning 注意
`true` 和 `false` 都是小写,不要写成 `True` 或 `FALSE`。
:::

### 📝 布尔值的实际应用

```typescript{2,5,8}
let age: number = 20;
let isAdult: boolean = age >= 18;  // 判断是否成年
console.log(isAdult);

let score: number = 85;
let isPassed: boolean = score >= 60;  // 判断是否及格
console.log(isPassed);

let temperature: number = 30;
let isHot: boolean = temperature > 28;  // 判断是否炎热
console.log(isHot);
```

**运行结果**:
```
true
true
true
```

### 💪 练习题

**练习**: 创建一个变量存储商品库存数量为 0,然后创建一个布尔变量判断是否有库存(库存数量大于 0)。

::: details 查看答案
```typescript
let stock: number = 0;
let hasStock: boolean = stock > 0;
console.log(hasStock);  // false
```
:::

## 📌 小结

- **number** - 用于存储数字(整数和小数都是 number 类型)
- **string** - 用于存储文本,需要用引号包裹,推荐使用反引号模板字符串
- **boolean** - 只有 `true` 和 `false` 两个值,用于表示是非判断
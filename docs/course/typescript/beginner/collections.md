---
title: 数组
category: typescript
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 数组

## 什么是数组(Array)

💡 **概念说明**

数组是一个可以存储多个值的容器,就像一个有编号的储物柜:

- 每个格子都有一个编号(从 0 开始)
- 可以存放相同或不同类型的数据
- 可以随时读取或修改里面的内容

## 创建数组

### 基本语法

📝 **代码示例**

```typescript{1,4,7}
// 方式1: 创建一个空数组
let fruits: string[] = [];

// 方式2: 创建时直接放入数据
let numbers: number[] = [1, 2, 3, 4, 5];

// 方式3: 混合类型的数组
let mixed: (string | number)[] = ["apple", 100, "banana", 200];
```

::: tip 提示
数组的索引(index)从 0 开始,不是从 1 开始。第一个元素的位置是 0,第二个是 1,以此类推。
:::

### 运行这段代码

创建一个 `array-basic.ts` 文件:

```typescript
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits);
```

运行命令:

```bash
ts-node array-basic.ts
```

**运行结果:**
```
[ 'apple', 'banana', 'orange' ]
```

## 读取数组中的数据

### 通过索引访问

📝 **代码示例**

```typescript{4-6}
let fruits: string[] = ["apple", "banana", "orange"];

// 读取数组中的元素
console.log(fruits[0]);  // apple
console.log(fruits[1]);  // banana
console.log(fruits[2]);  // orange
```

### 获取数组长度

```typescript{4}
let fruits: string[] = ["apple", "banana", "orange"];

// 查看数组有多少个元素
console.log(fruits.length);  // 3
```

::: warning 注意
如果访问不存在的索引,会得到 `undefined`,不会报错:
```typescript
console.log(fruits[10]);  // undefined
```
:::

## 修改数组中的数据

### 修改已存在的元素

📝 **代码示例**

```typescript{4,5}
let fruits: string[] = ["apple", "banana", "orange"];

// 修改第一个元素
fruits[0] = "grape";
console.log(fruits);  // [ 'grape', 'banana', 'orange' ]
```

### 添加新元素

```typescript{4,7}
let numbers: number[] = [1, 2, 3];

// 在数组末尾添加元素
numbers.push(4);
console.log(numbers);  // [ 1, 2, 3, 4 ]

// 可以一次添加多个
numbers.push(5, 6);
console.log(numbers);  // [ 1, 2, 3, 4, 5, 6 ]
```

### 删除元素

```typescript{4,8}
let fruits: string[] = ["apple", "banana", "orange"];

// 删除最后一个元素
let lastFruit = fruits.pop();
console.log(lastFruit);  // orange
console.log(fruits);     // [ 'apple', 'banana' ]

// 删除第一个元素
let firstFruit = fruits.shift();
console.log(firstFruit);  // apple
console.log(fruits);      // [ 'banana' ]
```

## 💪 练习题

### 练习 1: 创建购物清单

创建一个购物清单数组,包含至少 3 件商品,然后输出第 2 件商品。

::: details 查看答案
```typescript
let shoppingList: string[] = ["milk", "bread", "eggs", "butter"];
console.log(shoppingList[1]);  // bread
```
:::

### 练习 2: 修改和添加

有一个分数数组 `[85, 90, 78]`,请完成:
1. 将第一个分数改为 88
2. 添加一个新分数 92
3. 输出修改后的完整数组

::: details 查看答案
```typescript
let scores: number[] = [85, 90, 78];

// 修改第一个分数
scores[0] = 88;

// 添加新分数
scores.push(92);

// 输出结果
console.log(scores);  // [ 88, 90, 78, 92 ]
```
:::

## 📌 小结

- 数组使用 `[]` 创建,可以存储多个值
- 数组索引从 0 开始,使用 `array[索引]` 访问元素
- 使用 `push()` 在末尾添加元素,使用 `pop()` 删除末尾元素
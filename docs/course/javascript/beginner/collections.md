---
title: 数组
category: javascript
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 数组(Array)

## 什么是数组

💡 **数组是一个容器，可以按顺序存放多个数据。**

想象一下，你有一排编号的盒子(0号、1号、2号...)，每个盒子里可以放一个东西。这就是数组。

## 创建数组

### 基本语法

```javascript
let fruits = ['apple', 'banana', 'orange'];
```

::: tip 提示
- 用方括号 `[]` 创建数组
- 数据之间用逗号 `,` 分隔
- 数组里可以放任何类型的数据
:::

### 代码示例

```javascript{1,4,7}
// 存储水果名称
let fruits = ['apple', 'banana', 'orange'];

// 存储数字
let scores = [85, 92, 78, 95];

// 存储不同类型的数据
let mixedData = ['Tom', 25, true];
```

**运行结果：**
这些代码会在内存中创建三个数组，但不会在控制台显示任何内容。

## 读取数组中的数据

### 索引(Index)的概念

💡 **数组中每个位置都有一个编号，叫做索引。重要：索引从 0 开始！**

```
['apple', 'banana', 'orange']
   ↓        ↓         ↓
  索引0    索引1     索引2
```

### 读取语法

```javascript
let value = arrayName[index];
```

### 代码示例

```javascript{1,4,7,10,13}
let fruits = ['apple', 'banana', 'orange'];

// 读取第1个元素
console.log(fruits[0]);  // 输出: apple

// 读取第2个元素
console.log(fruits[1]);  // 输出: banana

// 读取第3个元素
console.log(fruits[2]);  // 输出: orange

// 获取数组的长度(有多少个元素)
console.log(fruits.length);  // 输出: 3
```

**运行结果：**
```
apple
banana
orange
3
```

::: warning 注意
如果索引超出范围，会得到 `undefined`：
```javascript
console.log(fruits[10]);  // 输出: undefined
```
:::

## 修改数组中的数据

### 修改语法

```javascript
arrayName[index] = newValue;
```

### 代码示例

```javascript{1,4,5,8,9}
let fruits = ['apple', 'banana', 'orange'];

// 修改第1个元素
fruits[0] = 'grape';
console.log(fruits);  // 输出: ['grape', 'banana', 'orange']

// 修改第3个元素
fruits[2] = 'watermelon';
console.log(fruits);  // 输出: ['grape', 'banana', 'watermelon']
```

**运行结果：**
```
['grape', 'banana', 'orange']
['grape', 'banana', 'watermelon']
```

### 添加新元素

```javascript{1,4,5}
let numbers = [10, 20, 30];

// 在末尾添加新元素
numbers[3] = 40;
console.log(numbers);  // 输出: [10, 20, 30, 40]
```

**运行结果：**
```
[10, 20, 30, 40]
```

## 💪 练习题

### 练习1：读取和输出

创建一个数组存储3个城市名称，然后输出第2个城市。

::: details 查看答案
```javascript
let cities = ['Beijing', 'Shanghai', 'Guangzhou'];
console.log(cities[1]);  // 输出: Shanghai
```
:::

### 练习2：修改数组

创建一个数组 `[100, 200, 300]`，将第1个数字改为 `150`，然后输出整个数组。

::: details 查看答案
```javascript
let numbers = [100, 200, 300];
numbers[0] = 150;
console.log(numbers);  // 输出: [150, 200, 300]
```
:::

## 📌 小结

- 数组用 `[]` 创建，可以存储多个数据
- 数组的索引从 **0** 开始，不是从 1
- 用 `arrayName[index]` 读取数据
- 用 `arrayName[index] = newValue` 修改数据
- 用 `arrayName.length` 获取数组长度
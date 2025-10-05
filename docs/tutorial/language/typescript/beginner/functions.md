---
title: 函数与方法
category: typescript
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 函数与方法

## 💡 什么是函数(Function)

函数就像一个"任务执行器",你把一些操作步骤打包在一起,给它取个名字,之后就可以随时叫它来工作。

比如你想计算两个数字的和,与其每次都写一遍计算过程,不如把这个过程做成函数,需要时直接调用。

## 定义一个函数

### 📝 基础语法

```typescript{1}
function sayHello() {
  console.log("你好,世界!");
}
```

**代码说明:**
- `function` 是关键字,表示"我要定义一个函数了"
- `sayHello` 是函数名,你可以自己取名
- `()` 里面可以放参数(稍后会讲)
- `{}` 里面是函数要执行的代码

### 📝 带参数(Parameter)的函数

```typescript{1,2}
function greet(name: string) {
  console.log("你好," + name + "!");
}
```

**代码说明:**
- `name: string` 表示这个函数需要接收一个文本类型的参数
- 函数内部可以使用这个 `name` 变量

### 📝 有返回值(Return Value)的函数

```typescript{1,2}
function add(a: number, b: number): number {
  return a + b;
}
```

**代码说明:**
- `: number` 表示这个函数会返回一个数字
- `return` 关键字把计算结果返回出去

## 调用函数

定义好函数后,需要"调用"它才会执行:

```typescript{6,9,12-13}
function sayHello() {
  console.log("你好,世界!");
}

// 调用函数
sayHello();

// 调用带参数的函数
greet("小明");

// 调用有返回值的函数
const result = add(5, 3);
console.log(result); // 输出: 8
```

::: tip 提示
函数定义和调用的顺序:必须先定义,后调用。就像你要先教会机器人做什么,才能指挥它工作。
:::

## 完整示例

```typescript{1-3,5-7,9-11,14-17}
// 定义:计算矩形面积
function calculateArea(width: number, height: number): number {
  return width * height;
}

// 定义:打印面积信息
function printArea(width: number, height: number) {
  const area = calculateArea(width, height);
  console.log(`矩形面积是: ${area}`);
}

// 调用函数
printArea(10, 5);
// 输出: 矩形面积是: 50
```

**运行结果:**
```
矩形面积是: 50
```

::: warning 注意
函数名后面必须加 `()` 才是调用,如果只写函数名不加括号,函数不会执行。
:::

## 💪 练习题

### 练习 1:定义并调用函数

创建一个函数 `introduce`,接收 `name` 和 `age` 两个参数,打印"我叫XXX,今年XX岁"。

<details>
<summary>点击查看答案</summary>

```typescript
function introduce(name: string, age: number) {
  console.log(`我叫${name},今年${age}岁`);
}

// 调用
introduce("小红", 20);
// 输出: 我叫小红,今年20岁
```

</details>

### 练习 2:带返回值的函数

创建一个函数 `multiply`,接收两个数字参数,返回它们的乘积。

<details>
<summary>点击查看答案</summary>

```typescript
function multiply(a: number, b: number): number {
  return a * b;
}

// 调用
const result = multiply(6, 7);
console.log(result); // 输出: 42
```

</details>

## 📌 小结

- **定义函数**:用 `function 函数名(参数) { 代码 }` 的格式
- **调用函数**:写函数名加 `()`,有参数就在括号里传入
- **返回值**:用 `return` 把结果返回出去,调用时可以用变量接收
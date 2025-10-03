---
title: 函数与方法
category: javascript
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 函数与方法

## 💡 什么是函数(Function)

函数就像一个「小机器」,你给它输入一些东西,它帮你处理后输出结果。

比如:
- 一个计算总价的函数:输入单价和数量 → 输出总价
- 一个打招呼的函数:输入名字 → 输出问候语

## 定义函数

### 基本语法

```javascript{1,5}
function sayHello() {
  console.log("Hello!");
}

sayHello(); // 调用函数
```

::: tip 提示
函数定义后不会自动执行,必须「调用」它才会运行。
:::

### 带参数(Parameter)的函数

```javascript{1,6}
function greet(name) {
  console.log("你好," + name + "!");
}

greet("小明"); // 输出:你好,小明!
greet("小红"); // 输出:你好,小红!
```

**运行结果:**
```
你好,小明!
你好,小红!
```

### 带返回值(Return)的函数

```javascript{2,6}
function add(a, b) {
  return a + b; // 返回计算结果
}

let result = add(3, 5);
console.log(result); // 输出:8
```

**运行结果:**
```
8
```

::: warning 注意
`return` 后面的代码不会执行,函数会立即结束。
:::

## 方法(Method)

方法是「属于某个对象的函数」。

### 对象中的方法

```javascript{3-5,9}
let person = {
  name: "张三",
  sayHi: function() {
    console.log("大家好,我是" + this.name);
  }
};

// 调用方法
person.sayHi(); // 输出:大家好,我是张三
```

**运行结果:**
```
大家好,我是张三
```

### 简写语法

```javascript{3-5}
let calculator = {
  price: 100,
  calculate(quantity) {
    return this.price * quantity;
  }
};

console.log(calculator.calculate(3)); // 输出:300
```

**运行结果:**
```
300
```

## 💪 练习题

### 练习 1:创建一个计算器函数

编写一个函数 `multiply`,接收两个数字,返回它们的乘积。

::: details 查看答案
```javascript
function multiply(x, y) {
  return x * y;
}

console.log(multiply(4, 5)); // 输出:20
console.log(multiply(10, 3)); // 输出:30
```
:::

### 练习 2:创建一个用户对象

创建一个 `user` 对象,包含 `name` 属性和 `introduce` 方法,方法输出自我介绍。

::: details 查看答案
```javascript
let user = {
  name: "李明",
  age: 25,
  introduce: function() {
    console.log("我叫" + this.name + ",今年" + this.age + "岁");
  }
};

user.introduce(); // 输出:我叫李明,今年25岁
```
:::

## 📌 小结

1. **函数定义**: 用 `function` 关键字定义,可以接收参数和返回值
2. **函数调用**: 函数名后加 `()` 即可调用,有参数就传入参数
3. **方法**: 对象中的函数,用 `对象名.方法名()` 调用,可以用 `this` 访问对象属性
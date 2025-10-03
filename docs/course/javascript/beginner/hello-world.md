---
title: hello world
category: javascript
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # Hello World

## 💡 什么是 Hello World

Hello World 是一个编程传统——全世界的程序员学习新语言时,第一个程序都是让计算机显示"Hello World"这句话。这个程序虽然简单,但它能验证你的开发环境是否正常工作。

## 📝 编写你的第一个程序

### 准备工作

你需要:
- 一个浏览器(Chrome、Firefox、Edge 都可以)
- 按 `F12` 打开浏览器的开发者工具(Developer Tools)
- 找到"控制台(Console)"标签

::: tip 提示
在浏览器的任何网页上按 `F12`,就能打开开发者工具。控制台就是你写 JavaScript 代码的地方。
:::

### 代码示例

在控制台中输入这行代码,然后按回车:

```js{1}
console.log("Hello World");
```

**运行结果:**

```
Hello World
```

::: warning 注意
- 英文标点符号:`"` 和 `;`
- 字母大小写:`console` 是小写,`W` 是大写
- 如果出现红色错误提示,检查是否完全一致
:::

### 尝试修改

把 "Hello World" 改成你想说的话:

```js{1}
console.log("我的第一个程序");
```

**运行结果:**

```
我的第一个程序
```

## 💪 练习题

### 练习 1:输出你的名字

让程序显示"我叫[你的名字]"。

<details>
<summary>点击查看答案</summary>

```js
console.log("我叫张三");
```

</details>

### 练习 2:输出多行内容

连续写两行代码,分别显示"第一行"和"第二行"。

<details>
<summary>点击查看答案</summary>

```js
console.log("第一行");
console.log("第二行");
```

**运行结果:**
```
第一行
第二行
```

</details>

## 📌 小结

- `console.log()` 用于在控制台显示内容
- 文字内容要用引号 `""` 包起来
- 每行代码结束用分号 `;`

恭喜你!你已经成为程序员了 🎉
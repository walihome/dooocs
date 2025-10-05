---
title: hello world
category: typescript
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # Hello World

## 💡 什么是 Hello World

Hello World 是编程世界的"第一声问候"。就像学说话时先学"你好"一样,写程序时我们先让计算机说"Hello World"。这是一个传统,也是验证你的开发环境是否正常工作的最简单方式。

## 📝 创建你的第一个 TypeScript 程序

### 步骤 1:创建文件

在你的电脑上创建一个文件夹,然后在文件夹里新建一个文件,命名为 `hello.ts`

::: tip 提示
`.ts` 是 TypeScript 文件的扩展名,就像 Word 文档的 `.docx` 一样
:::

### 步骤 2:编写代码

在 `hello.ts` 文件中输入以下代码:

```typescript{1}
console.log("Hello World");
```

### 步骤 3:运行程序

打开命令行工具(Windows 系统叫"命令提示符"或"PowerShell",Mac 系统叫"终端"),输入以下命令:

```bash
ts-node hello.ts
```

你会在屏幕上看到:

```
Hello World
```

::: warning 注意
如果提示 `ts-node: command not found`,说明还没有安装 TypeScript 运行环境。请在命令行中先执行 `npm install -g ts-node typescript`
:::

## 💪 动手练习

### 练习 1:修改问候语

把 "Hello World" 改成你的名字,比如 "Hello 张三"

::: details 查看答案
```typescript
console.log("Hello 张三");
```
:::

### 练习 2:多行输出

让程序依次输出三行文字:
- 第一行:Hello World
- 第二行:Welcome to TypeScript
- 第三行:Let's start coding

::: details 查看答案
```typescript
console.log("Hello World");
console.log("Welcome to TypeScript");
console.log("Let's start coding");
```
:::

## 📌 小结

- `console.log()` 可以让程序在屏幕上显示文字
- 文字内容需要用双引号 `""` 包裹起来
- 用 `ts-node` 命令可以运行 TypeScript 文件
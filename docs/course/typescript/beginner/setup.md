---
title: 开发环境搭建
category: typescript
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 开发环境搭建

在开始编写 TypeScript 代码之前,你需要先在电脑上安装一些工具。这就像烹饪前要准备好厨具一样——没有这些工具,代码是无法运行的。

## 💡 需要安装什么

我们需要安装两个核心工具:

1. **Node.js** - 让电脑能够执行 JavaScript 和 TypeScript 代码的程序
2. **TypeScript** - 将 TypeScript 代码转换为 JavaScript 的工具

::: tip 为什么需要两步?
TypeScript 代码不能直接运行,需要先转换成 JavaScript,然后由 Node.js 执行。
:::

## 安装 Node.js

### Windows 系统

1. 打开浏览器,访问 [https://nodejs.org](https://nodejs.org)
2. 点击下载 **LTS 版本**(长期支持版,更稳定)
3. 下载完成后,双击安装包
4. 安装过程中全部点击"下一步",保持默认设置即可

### macOS 系统

1. 访问 [https://nodejs.org](https://nodejs.org)
2. 下载 **LTS 版本**
3. 双击 `.pkg` 文件安装
4. 按照安装向导提示完成安装

### 验证安装

安装完成后,我们需要确认 Node.js 是否安装成功:

**Windows 用户:**
1. 按 `Win + R` 键
2. 输入 `cmd` 并回车
3. 在黑色窗口中输入以下命令:

```bash
node --version
```

**macOS 用户:**
1. 按 `Command + 空格` 打开 Spotlight
2. 输入 `terminal` 并回车
3. 在终端中输入以下命令:

```bash
node --version
```

如果看到类似 `v20.10.0` 的版本号,说明安装成功了!

::: warning 注意
如果提示"命令未找到"或"不是内部命令",说明安装有问题,需要重新安装 Node.js。
:::

## 安装 TypeScript

现在我们要安装 TypeScript 编译器(Compiler)。在刚才打开的命令行窗口中输入:

```bash
npm install -g typescript
```

::: tip 什么是 npm?
npm 是 Node.js 自带的包管理工具(Package Manager),用于安装各种 JavaScript 工具。`-g` 表示全局安装(Global),让你在任何地方都能使用 TypeScript。
:::

安装过程可能需要 1-2 分钟,耐心等待即可。

### 验证 TypeScript 安装

安装完成后,输入以下命令验证:

```bash
tsc --version
```

如果看到类似 `Version 5.3.3` 的版本号,恭喜你,TypeScript 安装成功!

## 安装代码编辑器

虽然可以用记事本写代码,但专业的代码编辑器(Code Editor)会让你的编程体验好很多。我们推荐使用 **Visual Studio Code**(简称 VS Code):

1. 访问 [https://code.visualstudio.com](https://code.visualstudio.com)
2. 下载对应系统的版本
3. 安装过程保持默认设置即可

::: tip VS Code 的优势
VS Code 会自动提示代码错误,帮你补全代码,还能快速查看函数说明——这些功能对新手特别友好。
:::

## 创建第一个 TypeScript 文件

现在让我们验证环境是否真的可以工作:

### 步骤 1: 创建项目文件夹

在桌面或任意位置创建一个文件夹,命名为 `typescript-learning`。

### 步骤 2: 创建代码文件

1. 用 VS Code 打开这个文件夹(文件 → 打开文件夹)
2. 点击 VS Code 左侧的"新建文件"图标
3. 命名为 `hello.ts`(`.ts` 是 TypeScript 文件的扩展名)
4. 在文件中输入以下代码:

```typescript{1}
console.log("Hello, TypeScript!");
```

### 步骤 3: 编译并运行

1. 在 VS Code 中按 `` Ctrl + ` ``(Windows)或 `` Control + ` ``(macOS)打开终端
2. 输入以下命令编译 TypeScript 文件:

```bash
tsc hello.ts
```

你会发现文件夹中多了一个 `hello.js` 文件——这就是 TypeScript 转换后的 JavaScript 代码。

3. 运行生成的 JavaScript 文件:

```bash
node hello.js
```

你应该会在终端中看到:

```
Hello, TypeScript!
```

::: tip 两步操作的含义
- `tsc hello.ts` - 将 TypeScript 转换为 JavaScript
- `node hello.js` - 执行 JavaScript 代码
:::

## 💪 练习题

### 练习 1: 修改输出内容

将 `hello.ts` 中的文字改为你的名字,重新编译并运行,看看会输出什么。

<details>
<summary>点击查看答案</summary>

```typescript
console.log("我的名字是张三");
```

编译运行:
```bash
tsc hello.ts
node hello.js
```

输出:
```
我的名字是张三
```

</details>

### 练习 2: 运行多行代码

创建一个新文件 `practice.ts`,写入以下内容并运行:

```typescript
console.log("第一行");
console.log("第二行");
console.log("第三行");
```

<details>
<summary>点击查看答案</summary>

```bash
tsc practice.ts
node practice.js
```

输出:
```
第一行
第二行
第三行
```

代码会按顺序从上到下执行,每个 `console.log()` 会输出一行内容。

</details>

## 📌 小结

- **Node.js** 是运行 JavaScript/TypeScript 代码的运行时环境(Runtime)
- **TypeScript 编译器(tsc)** 将 `.ts` 文件转换为 `.js` 文件
- **开发流程**: 编写 `.ts` 代码 → 使用 `tsc` 编译 → 使用 `node` 运行

现在你已经成功搭建了 TypeScript 开发环境,可以开始正式学习 TypeScript 语法了!
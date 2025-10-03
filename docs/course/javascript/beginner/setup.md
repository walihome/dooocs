---
title: 开发环境搭建
category: javascript
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: javascript极简教程
---

 # 开发环境搭建

在开始编写 JavaScript 代码之前,你需要准备两样工具:一个用来写代码的编辑器,和一个用来运行代码的浏览器。

## 💡 为什么需要开发环境

JavaScript 代码需要在浏览器中运行,就像你需要用微信才能发送消息一样。开发环境就是让你能够编写和运行代码的工具组合。

## 安装代码编辑器 VS Code

### 💡 什么是 VS Code

VS Code(Visual Studio Code)是微软开发的免费代码编辑器,它能帮你:
- 高亮显示代码,让代码更容易阅读
- 自动提示代码,减少输入错误
- 发现代码中的错误

### 📝 下载和安装步骤

**步骤 1: 下载 VS Code**

访问官方网站: `https://code.visualstudio.com`

点击页面上的 "Download" 按钮,选择适合你操作系统的版本:
- Windows 用户:下载 `.exe` 文件
- Mac 用户:下载 `.dmg` 文件

**步骤 2: 安装 VS Code**

双击下载的安装包,按照提示完成安装:
- Windows:建议勾选 "添加到 PATH" 选项
- Mac:将 VS Code 图标拖到应用程序文件夹

**步骤 3: 启动 VS Code**

安装完成后,打开 VS Code,你会看到一个欢迎界面。

### 📝 创建第一个 JavaScript 文件

**步骤 1: 创建项目文件夹**

在你的电脑上创建一个新文件夹,比如命名为 `my-first-js`:
- Windows:在桌面右键 → 新建 → 文件夹
- Mac:在桌面按 `Command + Shift + N`

**步骤 2: 用 VS Code 打开文件夹**

- 打开 VS Code
- 点击菜单 `文件(File)` → `打开文件夹(Open Folder)`
- 选择刚才创建的 `my-first-js` 文件夹

**步骤 3: 创建 HTML 文件**

在 VS Code 左侧的文件列表区域,点击 "新建文件" 图标(或右键 → 新建文件),创建一个名为 `index.html` 的文件。

::: tip 为什么是 HTML 文件
JavaScript 代码需要在网页中运行,而 HTML 文件就是网页的基础。你可以把 HTML 理解为房子的框架,JavaScript 是让房子"动起来"的电路系统。
:::

**步骤 4: 编写第一个网页**

在 `index.html` 文件中输入以下代码:

```html{8}
<!DOCTYPE html>
<html>
<head>
    <title>我的第一个 JavaScript 程序</title>
</head>
<body>
    <h1>Hello World</h1>
    <script src="main.js"></script>
</body>
</html>
```

**步骤 5: 创建 JavaScript 文件**

继续创建一个名为 `main.js` 的文件,输入以下代码:

```javascript{1}
alert('欢迎学习 JavaScript!');
```

## 在浏览器中运行代码

### 💡 使用浏览器运行代码

浏览器内置了 JavaScript 引擎(Engine),可以直接执行 JavaScript 代码。推荐使用:
- Google Chrome
- Microsoft Edge
- Firefox

### 📝 运行你的第一个程序

**步骤 1: 打开 HTML 文件**

在 VS Code 中,右键点击 `index.html` 文件,你会看到几个选项:

- 如果安装了 "Live Server" 插件:选择 `Open with Live Server`
- 没有插件:选择 `在文件资源管理器中显示(Reveal in File Explorer)`,然后双击 `index.html` 文件

**步骤 2: 查看运行结果**

浏览器会打开你的网页,你会看到一个弹窗显示 "欢迎学习 JavaScript!"。

恭喜!你已经成功运行了第一个 JavaScript 程序。

### 📝 安装 Live Server 插件(推荐)

Live Server 可以让你的代码修改后自动刷新浏览器,非常方便。

**安装步骤:**

1. 在 VS Code 左侧点击扩展图标(四个方块组成的图标)
2. 在搜索框输入 `Live Server`
3. 找到 "Live Server" 插件(作者是 Ritwick Dey)
4. 点击 `安装(Install)` 按钮

安装完成后,右键 HTML 文件就能看到 `Open with Live Server` 选项了。

## 使用浏览器开发者工具

### 💡 什么是开发者工具

浏览器内置的开发者工具(DevTools)可以帮你:
- 查看代码运行结果
- 发现和调试错误
- 直接在浏览器中测试代码

### 📝 打开开发者工具

**方法 1: 使用快捷键**
- Windows: 按 `F12` 或 `Ctrl + Shift + I`
- Mac: 按 `Command + Option + I`

**方法 2: 使用菜单**
- Chrome: 点击右上角三个点 → 更多工具 → 开发者工具
- Edge: 点击右上角三个点 → 更多工具 → 开发者工具

### 📝 在控制台运行代码

开发者工具打开后,点击 `Console(控制台)` 标签,你可以直接在这里输入 JavaScript 代码:

```javascript
console.log('Hello from Console!');
```

按回车键,你会立即看到运行结果。

::: tip 控制台的作用
控制台(Console)是学习 JavaScript 最好的练习场,你可以随时输入代码并立即看到结果,不需要创建文件。
:::

## 💪 练习题

**练习 1: 修改弹窗内容**

将 `main.js` 中的文字改为你自己的名字,保存文件后刷新浏览器,查看变化。

<details>
<summary>查看答案</summary>

```javascript
alert('我叫张三,正在学习 JavaScript!');
```

保存文件,刷新浏览器(按 `F5` 或 `Ctrl/Command + R`),你会看到新的弹窗内容。

</details>

**练习 2: 在控制台输出信息**

在 `main.js` 中添加一行代码,让浏览器控制台显示一条消息:

<details>
<summary>查看答案</summary>

```javascript{2}
alert('欢迎学习 JavaScript!');
console.log('这条消息显示在控制台中');
```

保存文件,刷新浏览器,按 `F12` 打开开发者工具,切换到 `Console` 标签,你会看到输出的消息。

</details>

## 📌 小结

- **VS Code** 是用来编写代码的编辑器,让代码更易读易写
- **浏览器** 是用来运行 JavaScript 代码的环境,内置了 JavaScript 引擎
- **开发者工具** 是调试代码的利器,特别是控制台(Console)可以立即测试代码

现在你已经搭建好了开发环境,可以开始编写和运行 JavaScript 代码了!
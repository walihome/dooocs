---
title: hello world
category: php
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # Hello World

## 💡 什么是 Hello World

"Hello World" 是全世界程序员学习新编程语言时编写的第一个程序。它的作用很简单：让计算机在屏幕上显示一句话。

通过这个程序，你会学到：
- 如何创建一个 PHP 文件
- 如何让浏览器显示内容
- PHP 代码的基本结构

## 📝 第一个 PHP 程序

### 创建文件

1. 打开你的代码编辑器(Editor)
2. 新建一个文件，命名为 `hello.php`
3. 输入以下代码：

```php{2}
<?php
echo "Hello World";
?>
```

**运行结果**：浏览器会显示 `Hello World`

::: tip 提示
文件必须以 `.php` 结尾，这样服务器才知道这是一个 PHP 文件
:::

### 代码说明

```php
<?php
// 这是 PHP 代码的开始标记
echo "Hello World";
// echo 是输出命令,用于在页面显示内容
?>
```

这段代码包含三个部分：
- `<?php` - PHP 代码开始标记(Start Tag)
- `echo` - 输出命令(Output Command)
- `?>` - PHP 代码结束标记(End Tag)

## 💪 动手练习

### 练习 1：显示你的名字

修改代码，让页面显示 `我叫张三`

<details>
<summary>点击查看答案</summary>

```php
<?php
echo "我叫张三";
?>
```

</details>

### 练习 2：显示多行内容

尝试让页面同时显示两行文字：
- 第一行：Hello World
- 第二行：欢迎学习 PHP

<details>
<summary>点击查看答案</summary>

```php
<?php
echo "Hello World<br>";
echo "欢迎学习 PHP";
?>
```

`<br>` 是换行标签(Line Break Tag),用于在网页上换行

</details>

## 🔧 如何运行代码

你需要一个 PHP 运行环境：

**方法 1：使用集成环境**
- 安装 XAMPP 或 WAMP
- 将 `hello.php` 放入 `htdocs` 文件夹
- 打开浏览器访问 `http://localhost/hello.php`

**方法 2：使用 PHP 内置服务器**
```bash
# 在 hello.php 所在目录打开终端
php -S localhost:8000
```
然后访问 `http://localhost:8000/hello.php`

::: warning 注意
双击 PHP 文件不会运行程序，必须通过浏览器访问
:::

## 📌 小结

- PHP 代码写在 `<?php` 和 `?>` 之间
- `echo` 用于输出内容到浏览器
- 文件必须保存为 `.php` 扩展名
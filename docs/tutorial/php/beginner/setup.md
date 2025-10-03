---
title: 开发环境搭建
category: php
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 开发环境搭建

在开始写 PHP 代码之前,你需要先准备一个能运行 PHP 代码的环境。这就像做饭前要先准备好厨房和炉灶一样。

## 💡 什么是开发环境

开发环境(Development Environment)就是让你的电脑能够理解和执行 PHP 代码的工具集合,它包括:

- **PHP 解释器(PHP Interpreter)**:把你写的代码翻译成电脑能理解的指令
- **Web 服务器(Web Server)**:让你能在浏览器中看到代码运行结果
- **数据库(Database)**:存储数据的地方(后续章节会用到)

::: tip 提示
我们使用 XAMPP 这个工具包,它已经把这三样东西都打包好了,一次安装就全有了。
:::

## 📥 下载并安装 XAMPP

### 下载 XAMPP

1. 打开浏览器,访问 XAMPP 官网:`https://www.apachefriends.org`
2. 点击页面中的下载按钮,选择适合你操作系统的版本:
   - Windows 用户:选择 Windows 版本
   - Mac 用户:选择 OS X 版本
   - Linux 用户:选择 Linux 版本

::: warning 注意
下载文件大约 150MB,确保你的网络连接稳定。
:::

### 安装 XAMPP

**Windows 系统:**

1. 双击下载的安装文件(例如 `xampp-windows-x64-installer.exe`)
2. 如果出现安全提示,点击"是"或"Run"
3. 在安装界面中:
   - 保持所有默认选项
   - 点击"Next"直到安装完成
   - 安装路径建议使用默认的 `C:\xampp`

**Mac 系统:**

1. 打开下载的 `.dmg` 文件
2. 将 XAMPP 图标拖到应用程序文件夹
3. 打开应用程序文件夹,双击 XAMPP 图标

**安装完成后**,你会在桌面或应用程序列表中看到 XAMPP 的图标。

## 🚀 启动 XAMPP

### 打开 XAMPP 控制面板

- **Windows**:从开始菜单找到"XAMPP Control Panel"并打开
- **Mac**:从应用程序文件夹打开 XAMPP

你会看到一个控制面板,上面有几个模块(Module),最重要的是 **Apache**。

### 启动 Apache 服务器

在 XAMPP 控制面板中:

1. 找到 **Apache** 这一行
2. 点击右侧的 **Start** 按钮
3. 等待几秒钟,当你看到 Apache 那一行背景变成绿色,说明启动成功

::: tip 提示
如果 Start 按钮变成了 Stop 按钮,说明 Apache 已经在运行了。
:::

## ✅ 验证安装

### 测试 XAMPP 是否正常工作

1. 打开浏览器(Chrome、Firefox、Edge 等都可以)
2. 在地址栏输入:`http://localhost`
3. 按回车键

**你应该看到什么:**

如果看到 XAMPP 的欢迎页面(橙色为主的页面),恭喜你,安装成功了!

::: danger 警告
如果浏览器显示"无法访问此网站"或"连接被拒绝",请检查 XAMPP 控制面板中 Apache 是否显示为绿色运行状态。
:::

## 📝 创建你的第一个 PHP 文件

### 找到代码存放位置

所有 PHP 文件需要放在 XAMPP 的特定文件夹中:

- **Windows**:`C:\xampp\htdocs`
- **Mac**:`/Applications/XAMPP/htdocs`

::: tip 提示
`htdocs` 就是你的代码仓库,所有网页文件都要放在这里。
:::

### 创建测试文件

1. 打开 `htdocs` 文件夹
2. 在文件夹空白处右键,选择"新建" → "文本文档"(Windows)或创建新文件(Mac)
3. 将文件命名为:`test.php`

::: warning 注意
确保文件扩展名是 `.php` 而不是 `.txt`。Windows 用户需要在文件夹选项中设置"显示文件扩展名"。
:::

### 编写代码

用记事本(或任何文本编辑器)打开 `test.php`,输入以下代码:

```php{2}
<?php
echo "Hello, PHP!";
?>
```

保存文件。

### 查看运行结果

1. 打开浏览器
2. 在地址栏输入:`http://localhost/test.php`
3. 按回车键

**你会看到:**

浏览器页面显示:`Hello, PHP!`

::: tip 提示
如果看到的是代码本身而不是"Hello, PHP!",检查:
1. 文件扩展名是否真的是 `.php`
2. Apache 是否在 XAMPP 中正常运行(显示绿色)
:::

## 💪 练习题

### 练习 1:修改输出内容

修改 `test.php` 文件,让浏览器显示你的名字,例如:"你好,我是张三"。

<details>
<summary>查看答案</summary>

```php{2}
<?php
echo "你好,我是张三";
?>
```

在浏览器中刷新 `http://localhost/test.php`,你会看到显示了你输入的内容。

</details>

### 练习 2:创建新文件

在 `htdocs` 文件夹中创建一个名为 `info.php` 的文件,输入以下代码:

```php{2}
<?php
phpinfo();
?>
```

然后在浏览器访问:`http://localhost/info.php`

<details>
<summary>查看答案</summary>

你会看到一个详细的页面,显示了 PHP 的版本、配置信息等。这说明你的 PHP 环境已经完全配置好了。

::: tip 提示
`phpinfo()` 是一个特殊函数,它会显示 PHP 的所有配置信息,通常用来检查环境是否正确安装。
:::

</details>

## 📌 小结

- XAMPP 是一个集成工具包,包含了运行 PHP 所需的所有组件
- PHP 文件必须放在 `htdocs` 文件夹中才能通过浏览器访问
- 通过 `http://localhost/文件名.php` 来运行你的 PHP 代码
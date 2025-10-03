---
title: 开发环境搭建
category: go
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 开发环境搭建

在开始写 Python 代码之前,你需要先安装 Python 解释器(Interpreter)。解释器就是能读懂并执行 Python 代码的程序。

## 下载 Python

访问 Python 官网下载页面:

```
https://www.python.org/downloads/
```

::: tip 提示
官网会自动识别你的操作系统,推荐适合你的版本。建议下载最新的稳定版本(Stable Release)。
:::

### Windows 系统

1. 点击下载按钮,获取安装包(例如 `python-3.12.x-amd64.exe`)
2. 双击安装包
3. **重要**:勾选 `Add Python to PATH` 选项
4. 点击 `Install Now`

::: warning 注意
如果忘记勾选 `Add Python to PATH`,后续在命令行中无法直接使用 `python` 命令。
:::

### macOS 系统

1. 下载 `.pkg` 安装包
2. 双击安装包,按照提示完成安装

::: tip 提示
macOS 系统自带 Python 2.x,但我们需要安装 Python 3.x。两者可以共存。
:::

### Linux 系统

大多数 Linux 发行版已预装 Python 3。打开终端(Terminal)验证:

```bash
python3 --version
```

如果未安装,使用包管理器安装:

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3

# CentOS/RHEL
sudo yum install python3
```

## 验证安装

安装完成后,打开命令行工具验证:

- **Windows**: 按 `Win + R`,输入 `cmd`,回车
- **macOS**: 按 `Command + 空格`,输入 `Terminal`,回车
- **Linux**: 按 `Ctrl + Alt + T`

在命令行中输入:

```bash
python --version
```

或者(某些系统需要):

```bash
python3 --version
```

如果看到类似 `Python 3.12.0` 的输出,说明安装成功。

## 编写第一个程序

### 使用交互式解释器(Interactive Interpreter)

在命令行中输入:

```bash
python
```

你会看到类似这样的提示符:

```
Python 3.12.0 (main, Oct 2023, 12:00:00)
>>> 
```

`>>>` 表示 Python 正在等待你输入代码。试试输入:

```python
print("Hello, Python!")
```

按回车,你会立即看到输出:

```
Hello, Python!
```

::: tip 提示
输入 `exit()` 可以退出交互式解释器。
:::

### 使用文本编辑器

交互式解释器适合快速测试,但实际开发需要将代码保存到文件中。

1. 打开任意文本编辑器(记事本、TextEdit 等)
2. 输入以下代码:

```python
# 这是我的第一个 Python 程序
print("Hello, Python!")
print("编程世界,我来了!")
```

3. 保存文件,命名为 `hello.py`(扩展名必须是 `.py`)
4. 在命令行中切换到文件所在目录,执行:

```bash
python hello.py
```

你会看到:

```
Hello, Python!
编程世界,我来了!
```

::: warning 注意
文件名不要包含中文或特殊字符,建议使用小写字母和下划线,如 `my_first_program.py`。
:::

## 安装代码编辑器(可选但推荐)

虽然记事本可以写代码,但专业的代码编辑器会提供语法高亮(Syntax Highlighting)、自动补全等功能,让编程更轻松。

推荐以下编辑器之一:

1. **VS Code**(最推荐)
   - 下载地址: `https://code.visualstudio.com/`
   - 安装后,在扩展商店搜索 `Python`,安装官方扩展

2. **PyCharm Community**(功能更强大)
   - 下载地址: `https://www.jetbrains.com/pycharm/download/`
   - 选择免费的 Community 版本

3. **Sublime Text**(轻量快速)
   - 下载地址: `https://www.sublimetext.com/`

### 使用 VS Code 运行代码

1. 打开 VS Code
2. 点击 `File` → `Open Folder`,选择你的代码文件夹
3. 创建新文件 `test.py`,输入:

```python{1}
print("使用 VS Code 运行 Python!")
```

4. 点击右上角的运行按钮(▶️),或按 `F5`
5. 在下方的终端(Terminal)中查看输出结果

::: tip 提示
首次运行时,VS Code 可能提示安装 Python 扩展,点击安装即可。
:::

## 💪 练习题

### 练习 1:验证环境

在命令行中依次执行以下命令,并记录输出结果:

```bash
python --version
python -c "print('环境配置成功!')"
```

::: details 查看答案
第一条命令应显示 Python 版本号,如 `Python 3.12.0`。

第二条命令应输出:`环境配置成功!`

`-c` 参数表示直接执行后面的代码,而不是运行文件。
:::

### 练习 2:创建并运行程序

创建文件 `intro.py`,让程序输出你的名字和学习目标:

```python
# 在这里写代码
```

::: details 查看答案
```python
# intro.py
print("我是张三")
print("我的学习目标是:掌握 Python 编程基础")
```

运行方式:

```bash
python intro.py
```

预期输出:
```
我是张三
我的学习目标是:掌握 Python 编程基础
```
:::

## 📌 小结

- Python 解释器(Interpreter)是执行代码的程序,需要先安装
- 使用 `python --version` 验证安装是否成功
- Python 代码文件的扩展名是 `.py`
- 使用 `python 文件名.py` 命令运行程序
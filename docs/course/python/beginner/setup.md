---
title: 开发环境搭建
category: python
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 开发环境搭建

## 💡 为什么需要开发环境

写代码就像写文章,你需要一个编辑器来写字,还需要一个程序来执行这些代码。**开发环境(Development Environment)**就是帮你编写和运行代码的工具集合。

对于Python,你需要安装两样东西:
- **Python解释器(Python Interpreter)**:执行代码的程序
- **代码编辑器(Code Editor)**:写代码的工具

## 安装Python解释器

### Windows系统

**步骤1:下载安装包**

访问Python官网下载页面:https://www.python.org/downloads/

点击黄色的"Download Python 3.x.x"按钮(数字可能不同,选最新版本即可)。

**步骤2:运行安装程序**

找到下载的文件(通常在"下载"文件夹),双击运行。

::: warning 重要
安装界面底部有个复选框 **"Add Python to PATH"**,一定要勾选!这样你才能在任何地方运行Python。
:::

然后点击"Install Now"开始安装。

**步骤3:验证安装**

按 `Win + R` 键,输入 `cmd`,按回车打开**命令提示符(Command Prompt)**。

输入以下命令:

```bash
python --version
```

如果看到类似 `Python 3.12.0` 的版本号,说明安装成功!

### macOS系统

**步骤1:下载安装包**

访问 https://www.python.org/downloads/,下载macOS版本。

**步骤2:安装**

双击下载的 `.pkg` 文件,按照提示一路点击"继续"和"安装"。

**步骤3:验证安装**

按 `Command + 空格` 打开**聚焦搜索(Spotlight)**,输入 `terminal` 打开**终端(Terminal)**。

输入命令:

```bash
python3 --version
```

::: tip 提示
macOS系统上使用 `python3` 命令,而不是 `python`。
:::

## 安装代码编辑器

推荐使用 **VS Code(Visual Studio Code)**,它免费、功能强大、对新手友好。

### 下载并安装VS Code

访问 https://code.visualstudio.com/,点击下载按钮,选择你的操作系统版本。

- Windows:下载后双击安装,保持默认选项即可
- macOS:下载后拖动到"应用程序"文件夹

### 安装Python扩展

**步骤1:打开VS Code**

第一次打开可能是英文界面,我们先安装中文语言包。

**步骤2:安装中文语言包(可选)**

1. 点击左侧边栏最下方的扩展图标(四个方块组成的图标)
2. 搜索 `Chinese`
3. 找到"Chinese (Simplified) Language Pack",点击"Install"
4. 安装完成后重启VS Code

**步骤3:安装Python扩展**

1. 再次点击扩展图标
2. 搜索 `Python`
3. 找到Microsoft官方发布的"Python"扩展(作者是Microsoft),点击"安装"

## 创建第一个Python文件

### 创建项目文件夹

在你的电脑上创建一个文件夹,比如 `D:\my_python` (Windows) 或 `~/my_python` (macOS)。

### 在VS Code中打开文件夹

1. 打开VS Code
2. 点击菜单"文件" → "打开文件夹"
3. 选择刚才创建的 `my_python` 文件夹

### 创建Python文件

1. 在VS Code左侧文件列表空白处右键,选择"新建文件"
2. 输入文件名 `hello.py`

::: tip 提示
Python文件的扩展名必须是 `.py`
:::

### 编写第一行代码

在 `hello.py` 文件中输入:

```python{1}
print("Hello, Python!")
```

保存文件(`Ctrl + S` 或 `Command + S`)。

## 运行Python代码

### 方法1:使用VS Code运行按钮

1. 确保打开了 `hello.py` 文件
2. 点击右上角的三角形▶️运行按钮
3. 在下方**终端(Terminal)**区域看到输出: `Hello, Python!`

### 方法2:使用命令行运行

在VS Code中按 `` Ctrl + ` `` (反引号键,通常在数字1左边) 打开终端。

输入命令:

```bash
# Windows系统
python hello.py

# macOS/Linux系统
python3 hello.py
```

你会看到输出:
```
Hello, Python!
```

::: tip 运行成功的标志
- 终端显示了 `Hello, Python!`
- 没有出现红色错误信息
:::

## 💪 练习题

**练习1:修改输出内容**

把 `hello.py` 中的代码改成:

```python
print("我的第一个Python程序")
```

运行看看会输出什么?

<details>
<summary>点击查看答案</summary>

```python
print("我的第一个Python程序")
```

运行后终端会输出: `我的第一个Python程序`

</details>

**练习2:输出多行内容**

创建一个新文件 `intro.py`,让程序输出三行内容:
- 第一行:你的名字
- 第二行:你的年龄  
- 第三行:你为什么学习Python

<details>
<summary>点击查看答案</summary>

```python
print("张三")
print("25岁")
print("想学编程找更好的工作")
```

运行后会看到三行输出。每个 `print()` 函数会输出一行内容。

</details>

## 📌 小结

- **Python解释器**是运行代码的核心程序,安装时记得勾选"Add to PATH"
- **VS Code**是编写代码的工具,需要安装Python扩展才能更好地支持Python开发
- Python文件以 `.py` 为扩展名,使用 `python 文件名.py` 命令运行

现在你已经搭建好了开发环境,可以开始真正的Python学习之旅了!
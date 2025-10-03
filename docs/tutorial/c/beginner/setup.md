---
title: 开发环境搭建
category: c
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # 开发环境搭建

在开始编写 C 语言(C Language)程序之前,你需要先安装两个工具:一个用来**写代码**的文本编辑器(Text Editor),一个用来**运行代码**的编译器(Compiler)。就像你需要纸和笔才能写字一样。

## 安装编译器(Compiler)

### 💡 什么是编译器

编译器是一个程序,它能把你写的 C 代码翻译成计算机能理解的指令。没有编译器,你的代码就只是普通的文本文件。

### Windows 系统安装 MinGW

**步骤 1：下载安装包**

打开浏览器访问: `https://github.com/niXman/mingw-builds-binaries/releases`

找到最新版本,下载文件名类似 `x86_64-13.2.0-release-posix-seh-ucrt-rt_v11-rev1.7z` 的压缩包。

**步骤 2：解压到指定位置**

将下载的压缩包解压到 `C:\mingw64` (你可以选择其他位置,但路径中不要有中文和空格)。

**步骤 3：配置环境变量(Environment Variable)**

1. 右键点击"此电脑" → 选择"属性"
2. 点击"高级系统设置"
3. 点击"环境变量"按钮
4. 在"系统变量"中找到 `Path`,双击打开
5. 点击"新建",输入 `C:\mingw64\bin`
6. 连续点击"确定"保存

**步骤 4：验证安装**

按 `Win + R` 键,输入 `cmd`,回车打开命令提示符(Command Prompt)。

输入以下命令:

```bash
gcc --version
```

如果看到类似下面的输出,说明安装成功:

```
gcc (x86_64-posix-seh-rev1, Built by MinGW-Builds project) 13.2.0
```

::: warning 注意
如果提示"不是内部或外部命令",说明环境变量配置有问题,需要重新检查路径是否正确,或者重启电脑后再试。
:::

### macOS 系统安装 Xcode Command Line Tools

打开"终端"应用(Terminal),输入以下命令:

```bash
xcode-select --install
```

在弹出的窗口中点击"安装"按钮,等待安装完成(可能需要 10-30 分钟)。

安装完成后,在终端输入:

```bash
gcc --version
```

看到版本信息即表示安装成功。

### Linux 系统安装 GCC

大多数 Linux 发行版已经预装了 GCC。在终端输入:

```bash
gcc --version
```

如果没有安装,根据你的系统执行对应命令:

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install build-essential
```

**Fedora:**
```bash
sudo dnf install gcc
```

## 选择代码编辑器(Code Editor)

### 💡 为什么需要代码编辑器

虽然记事本(Notepad)也能写代码,但专业的代码编辑器能提供语法高亮(Syntax Highlighting)、自动补全(Auto-completion)等功能,让你写代码更轻松。

### 推荐选项

**方案一：Visual Studio Code (推荐新手)**

1. 访问 `https://code.visualstudio.com/`
2. 下载并安装对应系统的版本
3. 安装后打开 VS Code,点击左侧扩展图标(Extensions)
4. 搜索 `C/C++`,安装微软官方插件

**方案二：在线编辑器(无需安装)**

访问 `https://www.programiz.com/c-programming/online-compiler/` 可以直接在浏览器中写代码和运行。

::: tip 提示
如果你只是想快速体验 C 语言,使用在线编辑器最方便。如果想深入学习,建议在本地安装 VS Code。
:::

## 编写第一个程序

### 📝 创建代码文件

**使用 VS Code:**

1. 打开 VS Code
2. 点击"文件" → "新建文件"
3. 点击"文件" → "保存",文件名输入 `hello.c` (必须以 `.c` 结尾)

**代码内容:**

```c{1,4}
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

### 💡 编译并运行

**Windows 系统:**

在 VS Code 中按 `Ctrl + ` ` (反引号键)打开终端,输入:

```bash
gcc hello.c -o hello
hello.exe
```

**macOS/Linux 系统:**

在 VS Code 终端中输入:

```bash
gcc hello.c -o hello
./hello
```

**运行结果:**

你会在终端看到:

```
Hello, World!
```

::: tip 理解命令
- `gcc hello.c -o hello` 的意思是:用 gcc 编译器把 `hello.c` 编译成可执行文件 `hello`
- `hello.exe` 或 `./hello` 是运行刚才生成的程序
:::

## 💪 练习题

### 练习 1：修改输出内容

修改代码,让程序输出你的名字,例如 `My name is Tom`。

<details>
<summary>查看答案</summary>

```c{4}
#include <stdio.h>

int main() {
    printf("My name is Tom\n");
    return 0;
}
```

记得修改后需要重新编译才能看到新的输出。

</details>

### 练习 2：输出多行

让程序输出两行内容:第一行是你的名字,第二行是你的年龄。

<details>
<summary>查看答案</summary>

```c{4-5}
#include <stdio.h>

int main() {
    printf("My name is Tom\n");
    printf("I am 20 years old\n");
    return 0;
}
```

`\n` 表示换行,每个 `printf` 语句输出一行内容。

</details>

## 📌 小结

- 编译器(Compiler)把 C 代码翻译成计算机能执行的程序
- 使用 `gcc` 命令编译代码,使用 `./程序名` 运行程序
- 代码文件必须以 `.c` 结尾

现在你已经拥有了完整的 C 语言开发环境,可以开始编写程序了!
---
title: 开发环境搭建
category: c++
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c++极简教程
---

 # 开发环境搭建

在开始编写 C++ 程序之前,你需要准备一个"工作台"。就像木匠需要工具箱一样,程序员需要一套工具来编写和运行代码。

## 💡 什么是开发环境

开发环境(Development Environment)包含两个核心工具:

- **编辑器(Editor)**:用来写代码的地方,就像 Word 用来写文档
- **编译器(Compiler)**:把你写的代码翻译成计算机能理解的语言

::: tip 为什么需要编译器?
计算机只认识 0 和 1,你写的 C++ 代码需要先"翻译"成机器能懂的指令,这个翻译过程就叫编译(Compile)。
:::

## 推荐方案:Visual Studio Code + MinGW

我们选择 VS Code 作为编辑器,MinGW 作为编译器。这个组合免费、轻量、适合新手。

### 第一步:安装 Visual Studio Code

1. 访问官网下载页面:`https://code.visualstudio.com/`
2. 点击下载按钮,自动识别你的操作系统
3. 下载完成后双击安装包,一路点击"下一步"即可

::: warning 注意
VS Code 和 Visual Studio 是两个不同的软件,不要搞混!我们用的是 VS Code(轻量级编辑器)。
:::

### 第二步:安装 MinGW 编译器

**Windows 用户:**

1. 下载 MinGW 安装器:
   ```
   https://sourceforge.net/projects/mingw-w64/files/mingw-w64/mingw-w64-release/
   ```
   选择 `x86_64-posix-seh` 版本

2. 解压下载的文件到 `C:\mingw64`(建议使用这个路径,方便后续配置)

3. 添加到系统环境变量(Path):
   - 右键"此电脑" → 属性 → 高级系统设置 → 环境变量
   - 在"系统变量"中找到 `Path`,双击编辑
   - 点击"新建",输入 `C:\mingw64\bin`
   - 一路点击"确定"保存

4. 验证安装是否成功:
   - 按 `Win + R`,输入 `cmd`,回车打开命令提示符
   - 输入以下命令:
   ```bash
   g++ --version
   ```
   - 如果显示版本号信息,说明安装成功

**macOS 用户:**

1. 打开"终端"应用(在 Launchpad 中搜索 Terminal)

2. 安装 Xcode 命令行工具:
   ```bash
   xcode-select --install
   ```

3. 按提示完成安装,验证:
   ```bash
   g++ --version
   ```

**Linux 用户:**

打开终端,根据你的发行版执行:

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install build-essential

# Fedora
sudo dnf install gcc-c++

# Arch Linux
sudo pacman -S base-devel
```

验证安装:
```bash
g++ --version
```

### 第三步:配置 VS Code

1. 打开 VS Code,点击左侧扩展图标(或按 `Ctrl+Shift+X`)

2. 搜索并安装以下扩展:
   - **C/C++**(Microsoft 官方)
   - **Code Runner**(可选,方便运行代码)

3. 创建第一个 C++ 文件:
   - 点击"文件" → "新建文件"
   - 保存为 `hello.cpp`(注意扩展名是 `.cpp`)

## 📝 验证环境

在 `hello.cpp` 中输入以下代码:

```cpp{1,5}
#include <iostream>

int main() {
    // 输出一句话到屏幕
    std::cout << "Hello, C++!" << std::endl;
    return 0;
}
```

### 编译并运行

**方法一:使用终端(推荐)**

1. 在 VS Code 中按 `` Ctrl+` `` 打开终端

2. 编译代码:
   ```bash
   g++ hello.cpp -o hello
   ```
   这条命令的意思是:用 `g++` 编译器把 `hello.cpp` 编译成可执行文件 `hello`

3. 运行程序:
   ```bash
   # Windows
   hello.exe
   
   # macOS/Linux
   ./hello
   ```

**运行结果:**
```
Hello, C++!
```

::: tip 解释一下
- `g++`:调用编译器
- `hello.cpp`:你的源代码文件
- `-o hello`:指定输出的可执行文件名为 `hello`
:::

**方法二:使用 Code Runner 扩展**

如果你安装了 Code Runner 扩展,可以直接点击右上角的"运行"按钮(▶️),或按 `Ctrl+Alt+N`。

## 💪 练习题

### 练习 1:修改输出内容

把代码中的 `"Hello, C++"` 改成 `"我的第一个程序"`,重新编译运行,看看结果。

<details>
<summary>点击查看答案</summary>

```cpp{5}
#include <iostream>

int main() {
    // 输出一句话到屏幕
    std::cout << "我的第一个程序" << std::endl;
    return 0;
}
```

编译运行步骤:
```bash
g++ hello.cpp -o hello
./hello  # Linux/macOS
# 或
hello.exe  # Windows
```

运行结果:
```
我的第一个程序
```

</details>

### 练习 2:输出多行内容

修改代码,让程序输出两行内容:
- 第一行:`欢迎学习 C++`
- 第二行:`今天是个好日子`

<details>
<summary>点击查看答案</summary>

```cpp{5-6}
#include <iostream>

int main() {
    // 输出两行内容
    std::cout << "欢迎学习 C++" << std::endl;
    std::cout << "今天是个好日子" << std::endl;
    return 0;
}
```

运行结果:
```
欢迎学习 C++
今天是个好日子
```

::: tip 提示
每个 `std::cout` 语句输出一行内容,`std::endl` 表示换行。
:::

</details>

## 📌 小结

- 开发环境包含**编辑器**(写代码)和**编译器**(翻译代码)
- 推荐使用 **VS Code + MinGW/GCC** 组合
- 编译命令:`g++ 源文件.cpp -o 可执行文件名`
- 成功看到 `Hello, C++!` 输出,说明环境搭建完成

::: tip 遇到问题?
- 如果编译时提示"找不到 g++",检查环境变量配置
- 如果 VS Code 提示找不到编译器,重启 VS Code 或电脑
- 确保文件扩展名是 `.cpp` 而不是 `.cpp.txt`
:::
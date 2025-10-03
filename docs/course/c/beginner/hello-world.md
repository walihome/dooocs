---
title: hello world
category: c
order: 2
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: c极简教程
---

 # Hello World

当你开始学习编程时,第一个程序总是"Hello World"。这是一个传统,也是最简单的程序——让计算机在屏幕上显示一句话。

## 💡 什么是 Hello World

Hello World 是一个最基础的程序,它的作用很简单:在屏幕上输出文字 "Hello World"。

通过这个程序,你可以验证:
- 编程环境是否正常工作
- 你是否掌握了基本的代码编写和运行流程

## 📝 代码示例

创建一个名为 `hello.c` 的文件,写入以下代码:

```c{5}
#include <stdio.h>

int main()
{
    printf("Hello World\n");
    return 0;
}
```

::: tip 关于文件名
文件名可以自己定义,但必须以 `.c` 结尾,比如 `hello.c`、`test.c` 都可以。
:::

### 如何运行这段代码

**第一步:编译(Compile)**

打开终端或命令行,进入代码所在目录,执行:

```bash
gcc hello.c -o hello
```

这会生成一个可执行文件 `hello`(Windows 上是 `hello.exe`)。

**第二步:运行**

```bash
./hello          # Linux/Mac
hello.exe        # Windows
```

**运行结果:**

```
Hello World
```

你会在屏幕上看到这行文字。

## 💡 代码含义

让我们看看这 7 行代码分别是什么:

```c
#include <stdio.h>  // 引入标准输入输出库
```
这一行告诉编译器,我们需要使用 `printf` 这个功能。

```c
int main()
```
这是程序的入口,程序从这里开始执行。

```c
{
    // 代码内容
}
```
花括号包裹的是 `main` 函数的内容。

```c
printf("Hello World\n");
```
`printf` 用来在屏幕上输出文字,`\n` 表示换行。

```c
return 0;
```
表示程序正常结束。

::: warning 注意
- 每条语句末尾都有分号 `;`
- 引号必须是英文引号 `""`
- 所有符号都必须是英文符号
:::

## 💪 练习题

### 练习 1:修改输出内容

把 "Hello World" 改成你的名字,比如 "Hello Zhang San"。

<details>
<summary>点击查看答案</summary>

```c{5}
#include <stdio.h>

int main()
{
    printf("Hello Zhang San\n");
    return 0;
}
```

</details>

### 练习 2:输出多行文字

让程序输出两行文字:
```
Hello World
Welcome to C
```

<details>
<summary>点击查看答案</summary>

```c{5-6}
#include <stdio.h>

int main()
{
    printf("Hello World\n");
    printf("Welcome to C\n");
    return 0;
}
```

::: tip 提示
每个 `printf` 会输出一行,记得在末尾加 `\n` 换行。
:::

</details>

## 📌 小结

- C 程序从 `main` 函数开始执行
- `printf` 用于在屏幕上输出文字
- 编译后才能运行:先用 `gcc` 编译,再执行生成的文件
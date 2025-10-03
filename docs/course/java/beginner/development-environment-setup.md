---
title: 开发环境搭建
category: Java
order: 1
tag: 
  - 
head:
  - - meta
    - name: keywords
      content: Java急速教程、Java极简教程
---

 # 开发环境搭建

在开始编写 Java 程序之前,你需要先准备好"工具箱"。就像厨师做菜前要准备锅碗瓢盆一样,程序员写代码前也需要安装一些必要的软件。这个过程叫做"搭建开发环境(Development Environment Setup)"。

::: tip 为什么需要搭建开发环境?
想象一下,如果你想给朋友写信,你需要:
- 纸和笔(写作工具)
- 懂中文的能力(语言理解)
- 邮局(传递信件)

写 Java 程序也是类似的:
- **文本编辑器**(写代码的工具) 
- **JDK**(让电脑理解 Java 语言)
- **终端/命令行**(运行程序的地方)
:::

## 💡 认识 JDK - Java 的"翻译官"

**JDK(Java Development Kit)** 是 Java 开发工具包的缩写。你可以把它理解为一个"翻译官":

- 你用 Java 语言写代码(人类能看懂)
- JDK 把代码翻译成机器语言(电脑能执行)
- 电脑执行后显示结果

没有 JDK,你写的 Java 代码就像一本外语书,电脑根本看不懂!

::: warning 版本选择
目前推荐安装 **JDK 17** 或 **JDK 21**,这两个是长期支持版本(LTS - Long Term Support),意味着会持续更新和维护。对于初学者,建议选择 JDK 17,因为它足够新且非常稳定。
:::

## 📥 下载 JDK

### 步骤 1: 访问官方网站

打开浏览器,访问 Oracle 官网的 JDK 下载页面:

```
https://www.oracle.com/java/technologies/downloads/
```

你会看到多个版本的 JDK,找到 **Java 17** 区域。

![JDK下载页面](jdk-download-page.png)

### 步骤 2: 选择对应操作系统的安装包

**Windows 用户**:
- 找到 `Windows` 标签
- 下载 `x64 Installer` (通常是 `.exe` 文件)
- 文件名类似: `jdk-17_windows-x64_bin.exe`

**macOS 用户**:
- 找到 `macOS` 标签  
- 如果你的 Mac 是 2020 年之后购买的(M1/M2/M3 芯片),选择 `Arm 64 DMG Installer`
- 如果是较老的 Intel 芯片 Mac,选择 `x64 DMG Installer`
- 文件名类似: `jdk-17_macos-aarch64_bin.dmg` 或 `jdk-17_macos-x64_bin.dmg`

::: tip 如何判断 Mac 芯片类型?
点击屏幕左上角的  苹果图标 → 关于本机 → 查看"芯片"或"处理器"信息:
- 显示 "Apple M1/M2/M3" → 选择 Arm 64 版本
- 显示 "Intel" → 选择 x64 版本
:::

## 🔧 安装 JDK

### Windows 系统安装步骤

1. **双击下载的 `.exe` 文件**
   - 如果弹出安全提示,点击"是"或"运行"

2. **按照安装向导操作**
   - 点击 "Next"(下一步)
   - 安装路径建议保持默认(通常是 `C:\Program Files\Java\jdk-17`)
   - 记住这个路径,后面会用到!
   
3. **等待安装完成**
   - 进度条走完后,点击 "Close"(关闭)

![Windows安装向导](windows-jdk-install.png)

### macOS 系统安装步骤

1. **双击下载的 `.dmg` 文件**
   - 会弹出一个安装包图标

2. **双击 `.pkg` 安装包**
   - 按照提示点击"继续"
   - 可能需要输入你的 Mac 登录密码

3. **等待安装完成**
   - 看到"安装成功"提示后关闭窗口

::: warning macOS 安全提示
如果 Mac 提示"无法打开,因为来自身份不明的开发者",请:
1. 打开"系统偏好设置"→"安全性与隐私"
2. 在"通用"标签下,点击"仍要打开"
3. 重新运行安装程序
:::

## ✅ 验证 JDK 是否安装成功

安装完成后,我们需要确认 JDK 是否真的能用。这就像买了新手机要先开机测试一样。

### Windows 验证步骤

1. **打开命令提示符**
   - 按键盘上的 `Win + R` 键
   - 输入 `cmd` 然后按回车
   - 会弹出一个黑色窗口

2. **输入验证命令**

```bash
java -version
```

3. **查看输出结果**

如果安装成功,你会看到类似这样的信息:

```
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

::: danger 如果显示"不是内部或外部命令"
这说明系统找不到 Java,需要配置**环境变量(Environment Variables)**。别担心,后面会详细说明!
:::

### macOS 验证步骤

1. **打开终端**
   - 按 `Command + 空格` 打开 Spotlight
   - 输入 `terminal` 然后按回车
   - 会出现一个白色或黑色的窗口

2. **输入验证命令**

```bash
java -version
```

3. **查看输出结果**

成功的话会显示:

```
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

::: tip macOS 通常不需要额外配置
macOS 的 JDK 安装程序会自动配置好路径,所以大多数情况下可以直接使用。如果遇到问题,参考后面的环境变量配置章节。
:::

## 🔧 配置环境变量(Windows 重点)

### 什么是环境变量?

想象你家里有很多工具:锤子在工具箱里,拖把在储物间,剪刀在抽屉里。如果每次用工具都要记住位置,会很麻烦。

**环境变量(Environment Variables)** 就像给常用工具做标签:
- 告诉系统"Java 工具在哪里"
- 以后只要说"Java",系统就知道去哪里找

### Windows 环境变量配置详细步骤

#### 步骤 1: 找到 JDK 安装路径

1. 打开文件资源管理器
2. 进入 `C:\Program Files\Java\`
3. 你会看到类似 `jdk-17` 的文件夹
4. 复制完整路径,例如: `C:\Program Files\Java\jdk-17`

#### 步骤 2: 打开环境变量设置

1. 右键点击"此电脑"(或"我的电脑")
2. 选择"属性"
3. 点击"高级系统设置"
4. 点击"环境变量"按钮

![打开环境变量设置](env-var-settings.png)

#### 步骤 3: 新建 JAVA_HOME 变量

1. 在"系统变量"区域,点击"新建"
2. 变量名填写: `JAVA_HOME`
3. 变量值填写你刚才复制的路径: `C:\Program Files\Java\jdk-17`
4. 点击"确定"

::: tip 为什么叫 JAVA_HOME?
HOME 是"家"的意思,JAVA_HOME 就是告诉系统"Java 的家在哪里"。这是约定俗成的命名规范,许多 Java 工具都会寻找这个变量。
:::

#### 步骤 4: 编辑 Path 变量

1. 在"系统变量"中找到 `Path` 变量
2. 选中它,点击"编辑"
3. 点击"新建"
4. 输入: `%JAVA_HOME%\bin`
5. 点击"确定"保存所有窗口

::: warning 注意事项
- `%JAVA_HOME%` 是引用上一步创建的变量
- `\bin` 是存放 Java 可执行文件的文件夹
- 不要删除 Path 中的其他内容!
:::

#### 步骤 5: 验证配置

1. **关闭之前打开的命令提示符**(这很重要!)
2. 重新打开命令提示符 (`Win + R` → 输入 `cmd`)
3. 输入验证命令:

```bash
java -version
```

```bash
javac -version
```

如果两个命令都能正确显示版本号,恭喜你配置成功!

### macOS 环境变量配置(通常可选)

macOS 一般不需要手动配置,但如果遇到问题,可以按以下步骤操作:

1. **打开终端**

2. **编辑配置文件**

```bash
nano ~/.zshrc
```

::: tip 关于 .zshrc 文件
这是 macOS 的 shell 配置文件。macOS Catalina(10.15)及以后版本默认使用 zsh,如果你的系统较老,可能需要编辑 `~/.bash_profile` 文件。
:::

3. **添加以下内容**

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
export PATH=$JAVA_HOME/bin:$PATH
```

4. **保存文件**
   - 按 `Control + O` 保存
   - 按 `Enter` 确认
   - 按 `Control + X` 退出

5. **使配置生效**

```bash
source ~/.zshrc
```

6. **验证配置**

```bash
echo $JAVA_HOME
java -version
```

## 📝 编写第一个 Java 程序

环境搭建完成后,让我们立即写一个程序测试一下!

### 步骤 1: 创建项目文件夹

**Windows 操作**:
1. 在 D 盘(或其他位置)创建文件夹: `java-learning`
2. 在该文件夹内再创建: `hello-world`

**macOS 操作**:
```bash
mkdir -p ~/Documents/java-learning/hello-world
cd ~/Documents/java-learning/hello-world
```

### 步骤 2: 创建 Java 文件

用记事本(Windows)或文本编辑(macOS)创建文件,命名为 `HelloWorld.java`

::: danger 文件名必须与类名完全一致
Java 要求文件名和代码中的类名必须一模一样,包括大小写! `HelloWorld.java` 中必须有 `public class HelloWorld`。
:::

### 步骤 3: 编写代码

```java
// 这是我的第一个 Java 程序 This is my first Java program
public class HelloWorld {
    // main 方法是程序的入口 main method is the entry point
    public static void main(String[] args) {
        // 打印输出信息 print output message
        System.out.println("Hello, World!");
        System.out.println("我的第一个 Java 程序运行成功!");
    }
}
```

**代码解释**:
- `public class HelloWorld`: 定义了一个名为 HelloWorld 的**类(Class)**
- `public static void main(String[] args)`: 这是**主方法(Main Method)**,程序从这里开始运行
- `System.out.println()`: 用于在屏幕上**打印(Print)** 信息
- `//`: 这是**注释(Comment)**,电脑会忽略不执行

### 步骤 4: 编译程序

**Windows 操作**:
1. 打开命令提示符
2. 切换到文件所在目录:
```bash
cd /d D:\java-learning\hello-world
```

3. 编译 Java 文件:
```bash
javac HelloWorld.java
```

**macOS 操作**:
```bash
cd ~/Documents/java-learning/hello-world
javac HelloWorld.java
```

::: tip 编译是什么?
**编译(Compile)** 就是把人类能看懂的 Java 代码翻译成电脑能执行的机器代码。`javac` 是 Java Compiler(Java 编译器)的缩写。

编译成功后,会生成一个 `HelloWorld.class` 文件,这才是电脑真正执行的文件。
:::

### 步骤 5: 运行程序

```bash
java HelloWorld
```

::: warning 注意
运行时不要加 `.java` 或 `.class` 后缀,直接写类名 `HelloWorld`!
:::

**预期输出**:
```
Hello, World!
我的第一个 Java 程序运行成功!
```

如果看到这个输出,恭喜你!环境搭建彻底成功,你已经完成了程序员的"第一步"!

## 🐛 常见问题排查

### 问题 1: "javac 不是内部或外部命令"

**原因**: 环境变量没配置好

**解决方案**:
1. 重新检查环境变量配置
2. 确保重启了命令提示符/终端
3. 验证 JDK 安装路径是否正确

### 问题 2: "找不到或无法加载主类"

**原因**: 通常是文件名与类名不一致

**解决方案**:
1. 检查文件名是否为 `HelloWorld.java`(区分大小写)
2. 检查代码中是否为 `public class HelloWorld`
3. 确保在正确的目录下运行命令

### 问题 3: 编译时出现乱码

**原因**: 文件编码问题

**解决方案**:
- Windows: 保存文件时选择 UTF-8 编码
- 或者编译时指定编码: `javac -encoding UTF-8 HelloWorld.java`

### 问题 4: macOS 提示"command not found: java"

**原因**: JDK 没有正确安装或路径没配置

**解决方案**:
1. 检查 JDK 是否安装: `/usr/libexec/java_home -V`
2. 如果有多个版本,选择正确版本
3. 重新配置环境变量(参考前面的 macOS 环境变量配置)

## 💪 巩固练习

### 练习 1: 验证安装

完成以下验证步骤,并截图或记录结果:

1. 运行 `java -version` 查看 Java 版本
2. 运行 `javac -version` 查看编译器版本  
3. 运行 `echo %JAVA_HOME%`(Windows) 或 `echo $JAVA_HOME`(macOS) 查看 Java 安装路径

### 练习 2: 修改程序

修改 `HelloWorld.java`,让它输出你的名字和今天的日期:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("我的名字是: [你的名字]");
        System.out.println("今天是: [今天的日期]");
        System.out.println("我成功搭建了 Java 开发环境!");
    }
}
```

保存后重新编译和运行,看看效果!

### 练习 3: 创建新程序

在 `java-learning` 文件夹下创建新文件 `Welcome.java`,编写一个程序输出欢迎信息:

```java
public class Welcome {
    public static void main(String[] args) {
        System.out.println("================================");
        System.out.println("   欢迎来到 Java 编程世界!    ");
        System.out.println("================================");
    }
}
```

尝试自己完成编译和运行的完整流程。

## 📌 本章小结

恭喜你完成了 Java 学习的第一个重要里程碑!让我们回顾一下学到的关键内容:

1. **JDK(Java Development Kit)** 是开发 Java 程序的必备工具包,它能把你写的代码翻译成电脑能理解的语言

2. **环境变量(Environment Variables)** 告诉系统在哪里找到 Java 工具,特别是 `JAVA_HOME` 和 `Path` 两个变量

3. **编译(Compile)** 是用 `javac` 命令把 `.java` 文件转换成 `.class` 文件的过程

4. **运行(Run)** 是用 `java` 命令执行编译后的 `.class` 文件

5. Java 程序的文件名必须与类名完全一致,包括大小写

::: tip 下一步学什么?
环境搭建完成后,你就可以开始学习 Java 的基础语法了:
- 变量和数据类型
- 运算符和表达式
- 流程控制语句

但在这之前,建议多练习几次编译和运行程序的流程,直到你能不看教程就完成这些操作!
:::

记住:搭建开发环境可能是学习编程过程中最枯燥的部分,但它是必须迈过的第一关。如果你遇到问题,不要气馁,仔细检查每一步操作,或者在开发者社区寻求帮助。加油!🚀
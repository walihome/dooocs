---
title: 开发环境搭建
category: Java
order: 1
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 开发环境搭建

在开始编写 Java 程序之前,你需要先准备好工具。就像厨师需要厨房和刀具一样,程序员也需要自己的"工作台"。

## 💡 为什么需要搭建环境?

想象一下:你写了一段 Java 代码,但电脑怎么知道如何执行它呢?这就需要两个核心工具:

- **JDK(Java Development Kit)**:Java 开发工具包,负责把你写的代码翻译成电脑能理解的语言
- **编辑器**:一个写代码的地方,我们选择 Visual Studio Code(简称 VS Code)

## 📦 安装 JDK

### Windows 系统安装步骤

#### 1. 下载 JDK

1. 打开浏览器,访问: `https://adoptium.net/`
2. 点击页面中的 **Download** 按钮
3. 选择以下配置:
   - Operating System: **Windows**
   - Architecture: **x64**
   - Package Type: **JDK**
   - Version: **17(LTS)** (LTS 表示长期支持版本)
4. 点击下载 `.msi` 文件

::: tip 为什么选择 Adoptium?
Adoptium 提供的 JDK 完全免费,且质量稳定。版本 17 是目前推荐的长期支持版本,适合学习使用。
:::

#### 2. 安装 JDK

1. 双击下载的 `.msi` 文件
2. 点击 **Next** 继续
3. **重要**:记住安装路径,默认是 `C:\Program Files\Eclipse Adoptium\jdk-17.x.x.x-hotspot\`
4. 保持所有默认选项,一路点击 **Next**
5. 点击 **Install** 开始安装
6. 等待安装完成,点击 **Finish**

#### 3. 配置环境变量(Environment Variables)

::: warning 为什么要配置环境变量?
这一步是告诉 Windows:"无论我在哪个文件夹,都能找到 Java 工具"。如果不配置,你只能在 JDK 安装目录下使用 Java。
:::

**步骤详解:**

1. 右键点击 **此电脑** → 选择 **属性**
2. 点击 **高级系统设置**
3. 点击 **环境变量** 按钮
4. 在 **系统变量** 区域,点击 **新建**:
   - 变量名: `JAVA_HOME`
   - 变量值: `C:\Program Files\Eclipse Adoptium\jdk-17.x.x.x-hotspot`(你的实际安装路径)
   - 点击 **确定**

5. 找到 **系统变量** 中的 `Path`,双击编辑:
   - 点击 **新建**
   - 输入: `%JAVA_HOME%\bin`
   - 点击 **确定**

6. 一路点击 **确定** 关闭所有窗口

### macOS 系统安装步骤

#### 1. 下载 JDK

1. 打开浏览器,访问: `https://adoptium.net/`
2. 点击页面中的 **Download** 按钮
3. 选择以下配置:
   - Operating System: **macOS**
   - Architecture: **aarch64**(M1/M2/M3 芯片) 或 **x64**(Intel 芯片)
   - Package Type: **JDK**
   - Version: **17(LTS)**
4. 点击下载 `.pkg` 文件

::: tip 如何判断你的 Mac 芯片类型?
点击屏幕左上角的 Apple 图标 → **关于本机** → 查看 **芯片** 或 **处理器** 信息。如果显示 "Apple M1/M2/M3",选择 aarch64;如果显示 "Intel",选择 x64。
:::

#### 2. 安装 JDK

1. 双击下载的 `.pkg` 文件
2. 点击 **继续**
3. 点击 **安装**
4. 输入你的 Mac 密码,点击 **安装软件**
5. 等待安装完成,点击 **关闭**

#### 3. 验证安装路径

打开 **终端(Terminal)**:
- 按下 `Command + 空格`,输入 "终端" 或 "Terminal",回车

在终端中输入:

```bash
/usr/libexec/java_home -V
```

你会看到类似这样的输出:

```
17.0.x (aarch64) "Eclipse Adoptium" - "OpenJDK 17.0.x" /Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
```

记住这个路径,稍后会用到。

#### 4. 配置环境变量

在终端中输入以下命令:

```bash
echo 'export JAVA_HOME=$(/usr/libexec/java_home)' >> ~/.zshrc
```

::: tip 这行命令做了什么?
它把 JAVA_HOME 的配置写入了你的 shell 配置文件。每次打开终端,系统都会自动设置好 Java 环境。
:::

让配置立即生效:

```bash
source ~/.zshrc
```

## ✅ 验证 JDK 安装

无论你使用的是 Windows 还是 macOS,都按以下步骤验证:

### Windows 验证步骤

1. 按下 `Win + R` 键
2. 输入 `cmd`,回车打开命令提示符
3. 输入以下命令:

```bash
java -version
```

**成功的输出示例:**

```
openjdk version "17.0.9" 2023-10-17
OpenJDK Runtime Environment Temurin-17.0.9+9 (build 17.0.9+9)
OpenJDK 64-Bit Server VM Temurin-17.0.9+9 (build 17.0.9+9, mixed mode, sharing)
```

再输入:

```bash
javac -version
```

**成功的输出示例:**

```
javac 17.0.9
```

::: warning 如果出现"'java' 不是内部或外部命令"
这说明环境变量配置有问题。请检查:
1. JAVA_HOME 的路径是否正确
2. Path 中是否添加了 `%JAVA_HOME%\bin`
3. 配置后是否重新打开了命令提示符
:::

### macOS 验证步骤

在终端中输入:

```bash
java -version
```

**成功的输出示例:**

```
openjdk version "17.0.9" 2023-10-17
OpenJDK Runtime Environment Temurin-17.0.9+9 (build 17.0.9+9)
OpenJDK 64-Bit Server VM Temurin-17.0.9+9 (build 17.0.9+9, mixed mode)
```

再输入:

```bash
javac -version
```

**成功的输出示例:**

```
javac 17.0.9
```

::: tip java 和 javac 的区别
- `java`: 运行编译好的 Java 程序
- `javac`: 把你写的代码编译成可执行的程序
两个都能正常显示版本号,说明安装成功!
:::

## 📝 安装 Visual Studio Code

VS Code 是一个轻量级但功能强大的代码编辑器,非常适合初学者。

### Windows 安装步骤

1. 访问: `https://code.visualstudio.com/`
2. 点击 **Download for Windows** 下载安装包
3. 双击下载的 `.exe` 文件
4. **重要选项**:勾选以下两项(其他保持默认)
   - ☑️ 添加到 PATH
   - ☑️ 通过 Code 打开(右键菜单)
5. 一路点击 **下一步** 完成安装

### macOS 安装步骤

1. 访问: `https://code.visualstudio.com/`
2. 点击 **Download for macOS** 下载安装包
3. 双击下载的 `.zip` 文件解压
4. 将 **Visual Studio Code.app** 拖入 **应用程序** 文件夹
5. 首次打开时,如果提示"无法验证开发者",右键点击应用 → 选择 **打开**

## 🔌 安装 Java 扩展

打开 VS Code 后,我们需要安装一个扩展(Extension)来支持 Java 开发。

### 安装步骤(Windows 和 macOS 相同)

1. 点击左侧边栏的 **扩展图标**(或按 `Ctrl+Shift+X` / `Command+Shift+X`)
2. 在搜索框输入: `Extension Pack for Java`
3. 找到 **Microsoft** 官方发布的扩展包
4. 点击 **Install** 按钮
5. 等待安装完成(可能需要 1-2 分钟)

::: tip 这个扩展包包含什么?
它包含了 6 个工具,帮你做这些事:
- 语法高亮(让代码更易读)
- 代码自动补全(写一半就能提示)
- 错误检查(写错了立即提示)
- 一键运行程序
:::

## 🎯 创建你的第一个 Java 程序

现在,让我们验证整个环境是否正常工作。

### 步骤 1: 创建项目文件夹

**Windows:**
1. 在桌面右键 → **新建** → **文件夹**
2. 命名为 `JavaProjects`
3. 在 `JavaProjects` 里再创建一个文件夹,命名为 `HelloWorld`

**macOS:**
1. 打开 **访达(Finder)**
2. 在桌面创建文件夹 `JavaProjects`
3. 在 `JavaProjects` 里再创建一个文件夹,命名为 `HelloWorld`

### 步骤 2: 用 VS Code 打开项目

1. 打开 VS Code
2. 点击菜单 **文件** → **打开文件夹**
3. 选择刚才创建的 `HelloWorld` 文件夹
4. 点击 **选择文件夹**(Windows) 或 **打开**(macOS)

### 步骤 3: 创建 Java 文件

1. 在 VS Code 左侧资源管理器中,点击 **新建文件** 图标
2. 输入文件名: `HelloWorld.java`
3. 按下回车

::: warning 文件名必须和类名一致
Java 规定:如果类名是 `HelloWorld`,文件名就必须是 `HelloWorld.java`,大小写完全一致。这是初学者最常犯的错误之一。
:::

### 步骤 4: 编写代码

在 `HelloWorld.java` 文件中输入以下代码:

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 在控制台打印文本
        System.out.println("Hello, Java!");
    }
}
```

**代码解释:**
- `public class HelloWorld`: 定义一个名为 HelloWorld 的类(Class)
- `public static void main(String[] args)`: 程序的入口点,执行从这里开始
- `System.out.println(...)`: 在控制台输出文本

### 步骤 5: 运行程序

1. 右键点击代码编辑区域
2. 选择 **Run Java**
3. 观察下方的终端窗口

**成功的输出:**

```
Hello, Java!
```

::: tip 恭喜!
如果你看到了 "Hello, Java!",说明整个开发环境已经搭建成功!这是你编写的第一个 Java 程序。
:::

## 🔧 常见问题解决

### 问题 1: 找不到 JAVA_HOME

**Windows 症状:**
```
错误: 找不到或无法加载主类
```

**解决方法:**
1. 重新打开命令提示符(必须重启才能加载新的环境变量)
2. 输入 `echo %JAVA_HOME%` 检查是否显示正确路径
3. 如果显示 `%JAVA_HOME%`,说明环境变量未生效,重新配置

**macOS 症状:**
```
Unable to locate a Java Runtime
```

**解决方法:**
1. 重新打开终端
2. 输入 `echo $JAVA_HOME` 检查是否显示路径
3. 如果为空,重新执行配置命令并运行 `source ~/.zshrc`

### 问题 2: VS Code 提示"找不到 Java"

**解决方法:**
1. 按 `Ctrl+Shift+P`(macOS: `Command+Shift+P`) 打开命令面板
2. 输入 `Java: Configure Java Runtime`
3. 检查是否检测到 JDK 17
4. 如果没有,点击 **+** 手动添加 JAVA_HOME 路径

### 问题 3: 运行程序时卡住不动

**可能原因:**
- 防火墙阻止了 Java
- VS Code 扩展还在初始化

**解决方法:**
1. 等待 2-3 分钟,首次运行需要初始化
2. 查看 VS Code 右下角是否有 "Initializing Java Language Server" 提示
3. 重启 VS Code

## 📌 小结

完成本章后,你已经:

1. ✅ 安装了 **JDK 17**,这是编译和运行 Java 程序的核心工具
2. ✅ 配置了 **环境变量(Environment Variables)**,让系统能找到 Java 工具
3. ✅ 安装了 **VS Code** 和 Java 扩展,拥有了专业的代码编辑器
4. ✅ 成功运行了第一个程序,验证了整个环境正常工作

**关键术语回顾:**
- **JDK(Java Development Kit)**: Java 开发工具包
- **环境变量(Environment Variables)**: 系统级别的配置,告诉操作系统在哪里找到程序
- **javac**: Java 编译器(Compiler),把源代码转换成可执行代码
- **java**: Java 运行器,执行编译后的程序

现在,你的"工作台"已经准备好了。在后续章节中,我们将深入学习 Java 语法,编写更复杂的程序。保存好你的 `HelloWorld.java` 文件,它是你 Java 学习之旅的起点!
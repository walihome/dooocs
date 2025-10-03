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

在开始 Java 编程之旅前,你需要先准备好"工具箱"。就像做饭前要准备好锅碗瓢盆一样,写代码也需要安装一些必需的软件。别担心,我会一步步带你完成整个过程!

## 💡 为什么需要搭建开发环境?

你可能会想:"为什么不能直接开始写代码呢?"

想象一下,如果你想给朋友写一封信:
- 你需要**纸和笔**(相当于代码编辑器)
- 你需要**懂中文**(相当于 Java 运行环境)
- 你可能还需要**字典**(相当于开发工具)

写 Java 程序也是一样的道理:
- **JDK(Java Development Kit)**: Java 开发工具包,让电脑能"听懂"Java 语言
- **IDE(Integrated Development Environment)**: 集成开发环境,一个好用的代码编辑器

::: tip 新手建议
本教程会引导你安装:
1. **JDK 17** - 稳定且被广泛使用的 Java 版本
2. **IntelliJ IDEA Community** - 免费且功能强大的 IDE
:::

---

## 📦 第一步:安装 JDK

**JDK(Java Development Kit)** 是 Java 开发工具包,它包含了:
- **编译器(Compiler)**: 把你写的代码翻译成计算机能理解的语言
- **运行环境(JRE)**: 让程序能够运行起来
- **调试工具**: 帮你找出代码中的问题

### Windows 系统安装 JDK

#### 1. 下载 JDK

访问 Oracle 官网下载页面:
```
https://www.oracle.com/java/technologies/downloads/#java17
```

::: warning 选择正确的版本
- 找到 **Java 17** 区域
- 点击 **Windows** 标签
- 下载 **x64 Installer** (通常是 `.exe` 文件)
:::

![下载JDK示例](download-jdk-windows.png)

#### 2. 安装 JDK

双击下载的 `.exe` 文件:

1. 点击 **Next** 开始安装
2. **记住安装路径!** 默认通常是:
   ```
   C:\Program Files\Java\jdk-17
   ```
3. 继续点击 **Next** 直到安装完成

::: tip 为什么要记住路径?
稍后配置环境变量时需要用到这个路径。你可以把它复制到记事本里保存。
:::

#### 3. 配置环境变量(Windows)

环境变量就像给电脑"指路":告诉它 Java 工具安装在哪里。

**步骤详解:**

1. **打开环境变量设置**
   - 右键点击 **此电脑** → 选择 **属性**
   - 点击 **高级系统设置**
   - 点击 **环境变量** 按钮

2. **添加 JAVA_HOME**
   - 在"系统变量"区域,点击 **新建**
   - 变量名填写: `JAVA_HOME`
   - 变量值填写你的 JDK 安装路径,例如:
     ```
     C:\Program Files\Java\jdk-17
     ```
   - 点击 **确定**

::: warning 注意路径格式
路径中不要有多余的空格,确保路径指向 JDK 根目录(不是 bin 文件夹)
:::

3. **修改 Path 变量**
   - 在"系统变量"中找到 **Path** 变量
   - 点击 **编辑**
   - 点击 **新建**,添加:
     ```
     %JAVA_HOME%\bin
     ```
   - 点击 **确定** 保存所有设置

![环境变量配置示例](env-variable-windows.png)

#### 4. 验证安装(Windows)

打开 **命令提示符(CMD)**:
- 按 `Win + R` 键
- 输入 `cmd` 并按回车

在命令提示符中输入:

```bash
java -version
```

**成功的输出应该类似于:**
```
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

再输入:
```bash
javac -version
```

**应该看到:**
```
javac 17.0.9
```

::: tip 验证成功的标志
- `java -version` 显示 Java 运行环境版本
- `javac -version` 显示 Java 编译器版本
- 两个命令都能正常显示,说明安装成功!
:::

---

### macOS 系统安装 JDK

#### 1. 下载 JDK

访问 Oracle 官网:
```
https://www.oracle.com/java/technologies/downloads/#java17
```

::: warning 选择正确的版本
- 找到 **Java 17** 区域
- 点击 **macOS** 标签
- 根据你的 Mac 芯片选择:
  - **ARM64 DMG Installer** (M1/M2/M3 芯片的 Mac)
  - **x64 DMG Installer** (Intel 芯片的 Mac)
:::

**如何查看你的 Mac 芯片类型?**
- 点击屏幕左上角  图标
- 选择 **关于本机**
- 查看"芯片"或"处理器"信息

#### 2. 安装 JDK

双击下载的 `.dmg` 文件:

1. 双击安装包图标
2. 按照提示点击 **继续**
3. 点击 **安装**
4. 输入你的 Mac 密码授权安装

默认安装路径:
```
/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
```

#### 3. 配置环境变量(macOS)

打开 **终端(Terminal)**:
- 按 `Command + 空格` 打开 Spotlight
- 输入 `terminal` 并回车

**判断你使用的 Shell:**

在终端输入:
```bash
echo $SHELL
```

如果显示 `/bin/zsh`,说明你用的是 **zsh**(macOS 默认);  
如果显示 `/bin/bash`,说明你用的是 **bash**。

**配置步骤(zsh 用户):**

1. 打开配置文件:
```bash
nano ~/.zshrc
```

2. 在文件末尾添加以下内容:
```bash
# Java Environment Variables
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home
export PATH=$JAVA_HOME/bin:$PATH
```

3. 保存并退出:
   - 按 `Control + O` 保存
   - 按 `回车` 确认
   - 按 `Control + X` 退出

4. 使配置生效:
```bash
source ~/.zshrc
```

**配置步骤(bash 用户):**

如果你用的是 bash,步骤相同,只是文件名改为 `~/.bash_profile`:

```bash
nano ~/.bash_profile
# 添加相同的环境变量配置
source ~/.bash_profile
```

::: tip 为什么要配置环境变量?
配置环境变量后,你可以在任何目录下直接使用 `java` 和 `javac` 命令,而不需要每次都输入完整路径。
:::

#### 4. 验证安装(macOS)

在终端中输入:

```bash
java -version
```

**成功的输出:**
```
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

再输入:
```bash
javac -version
```

**应该看到:**
```
javac 17.0.9
```

---

## 🛠️ 第二步:安装 IDE(IntelliJ IDEA)

**IDE(Integrated Development Environment)** 集成开发环境,可以理解为"程序员的 Word"。它提供:
- **代码编辑器**: 写代码的地方,有颜色高亮、自动补全
- **项目管理**: 组织你的代码文件
- **调试工具**: 帮你找出代码错误
- **运行按钮**: 一键运行程序

::: tip 为什么选择 IntelliJ IDEA?
- **社区版免费** (Community Edition)
- **智能代码提示** - 会自动提醒你代码写法
- **错误检查** - 实时显示代码问题
- **新手友好** - 界面直观易用
:::

### Windows 和 macOS 通用安装步骤

#### 1. 下载 IntelliJ IDEA

访问官网:
```
https://www.jetbrains.com/idea/download/
```

::: warning 选择正确的版本
- 下载 **Community Edition**(社区版,免费)
- Windows 用户下载 `.exe` 文件
- macOS 用户下载 `.dmg` 文件
:::

![下载IDEA示例](download-idea.png)

#### 2. 安装 IntelliJ IDEA

**Windows 用户:**
1. 双击 `.exe` 文件
2. 点击 **Next**
3. 选择安装路径(建议使用默认)
4. 勾选以下选项:
   - ☑ Create Desktop Shortcut (创建桌面快捷方式)
   - ☑ Add "bin" folder to the PATH (添加到系统路径)
5. 点击 **Install** 开始安装

**macOS 用户:**
1. 双击 `.dmg` 文件
2. 拖动 IntelliJ IDEA 图标到 Applications 文件夹
3. 打开 **启动台(Launchpad)**
4. 找到 IntelliJ IDEA 并点击打开

::: tip 首次打开提示
macOS 可能会提示"无法打开",需要:
- 打开 **系统偏好设置** → **安全性与隐私**
- 点击 **仍要打开**
:::

#### 3. 首次启动配置

第一次打开 IntelliJ IDEA 会有一些设置:

1. **导入设置**: 选择 **Do not import settings** (不导入设置)
2. **主题选择**: 选择你喜欢的界面主题
   - **Light** - 明亮主题
   - **Darcula** - 暗黑主题(程序员最爱!)
3. **创建桌面启动脚本**: 点击 **Next** 使用默认设置
4. **安装插件**: 点击 **Skip Remaining and Set Defaults** (跳过并使用默认)

---

## ✅ 创建第一个 Java 项目

现在工具都准备好了,让我们创建第一个项目来验证一切正常!

### 步骤 1: 新建项目

1. 打开 IntelliJ IDEA
2. 点击 **New Project** (新建项目)
3. 配置项目:
   - **Name**: 填写 `HelloWorld`
   - **Location**: 选择保存位置(建议在用户文件夹下)
   - **Language**: 选择 **Java**
   - **Build System**: 选择 **IntelliJ**
   - **JDK**: 确保显示 **17** 或你安装的版本

::: warning 如果 JDK 选项为空
点击 JDK 下拉框 → 选择 **Add JDK** → 找到你的 JDK 安装路径
:::

4. 点击 **Create** 创建项目

![创建项目示例](create-project.png)

### 步骤 2: 创建 Java 文件

1. 在左侧项目面板,右键点击 **src** 文件夹
2. 选择 **New** → **Java Class**
3. 输入类名: `HelloWorld`
4. 按 **回车** 创建

### 步骤 3: 编写第一个程序

在打开的编辑器中输入以下代码:

```java
public class HelloWorld {
    // main方法是程序的入口 program entry point
    public static void main(String[] args) {
        // 打印输出 print output
        System.out.println("Hello, Java World!");
        System.out.println("我的第一个Java程序!");
    }
}
```

::: tip 代码说明
- `public class HelloWorld` - 定义一个名为 HelloWorld 的类(Class)
- `public static void main(String[] args)` - 主方法,程序从这里开始执行
- `System.out.println()` - 在控制台打印内容
- `//` 开头是注释(Comment),电脑会忽略它
:::

### 步骤 4: 运行程序

1. 点击编辑器右上角的绿色 **▶** 按钮
2. 或者右键点击代码区域 → 选择 **Run 'HelloWorld.main()'**

**成功运行的输出:**

在底部的 Run 窗口应该看到:
```
Hello, Java World!
我的第一个Java程序!

Process finished with exit code 0
```

::: tip 成功标志
- 看到你的输出内容
- 最后一行显示 `exit code 0` (0 表示程序正常结束)
:::

---

## 🔧 常见问题排查

### 问题 1: 命令提示符/终端找不到 java 命令

**错误提示:**
```
'java' is not recognized as an internal or external command
```
或
```
command not found: java
```

**解决方法:**
1. 检查环境变量配置是否正确
2. **Windows**: 重启电脑使环境变量生效
3. **macOS**: 重新打开终端或执行 `source ~/.zshrc`

### 问题 2: IntelliJ IDEA 找不到 JDK

**解决方法:**
1. 打开项目设置: **File** → **Project Structure**
2. 点击 **Project** 选项卡
3. 点击 **SDK** 下拉框 → **Add SDK** → **JDK**
4. 手动选择 JDK 安装路径:
   - **Windows**: `C:\Program Files\Java\jdk-17`
   - **macOS**: `/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home`

### 问题 3: 程序运行报错

**常见错误 1: 类名与文件名不匹配**
```
Error: Could not find or load main class HelloWorld
```
**解决**: 确保文件名和 `public class` 后的类名完全一致(区分大小写)

**常见错误 2: 找不到 main 方法**
```
Error: Main method not found in class HelloWorld
```
**解决**: 检查 main 方法签名是否正确:
```java
public static void main(String[] args)
```

---

## 📌 本章小结

恭喜你完成开发环境搭建!现在你已经具备:

1. ✅ **JDK 已安装** - 电脑能够编译和运行 Java 程序
2. ✅ **环境变量已配置** - 可以在任何位置使用 Java 命令
3. ✅ **IntelliJ IDEA 已安装** - 拥有专业的代码编辑工具
4. ✅ **第一个程序已运行** - 验证了整个工具链正常工作

**重要概念回顾:**
- **JDK(Java Development Kit)**: Java 开发工具包,包含编译器和运行环境
- **环境变量(Environment Variable)**: 告诉操作系统在哪里找到 Java 工具
- **IDE(Integrated Development Environment)**: 集成开发环境,提升编码效率
- **编译(Compile)**: 把代码翻译成计算机能理解的语言
- **运行(Run)**: 执行编译后的程序

::: tip 接下来
现在你的"工具箱"已经准备好了!接下来你将学习 Java 的基础语法,开始真正的编程之旅。记住,编程是一项需要动手实践的技能,多写多练才能掌握!
:::

**保存好这些信息:**
- JDK 安装路径
- IntelliJ IDEA 项目保存位置
- 这个 HelloWorld 程序作为参考模板

有了这个环境,你随时可以创建新项目,开始编写 Java 代码了! 🚀
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

在开始写 Java 代码之前,你需要准备一个"工作台"——这就是开发环境。就像厨师需要厨房、工具和食材才能做菜一样,程序员也需要特定的软件工具才能编写和运行程序。

## 💡 为什么需要搭建开发环境?

你可能会想:为什么不能直接写代码?原因很简单:

1. **Java 需要翻译官**:你写的代码是人类能理解的,但计算机只认识 0 和 1。JDK(Java Development Kit)就是这个"翻译官",它能把你的代码翻译成计算机能执行的指令。

2. **需要一个好用的编辑器**:虽然记事本也能写代码,但专业的代码编辑器(IDE)就像 Word 相比记事本,能提供语法高亮、自动补全、错误提示等功能,让你的编程效率提升 10 倍以上。

## 📦 需要安装什么?

我们需要安装两样东西:

1. **JDK(Java Development Kit)** - Java 开发工具包
   - 包含编译器(javac):把代码翻译成可执行文件
   - 包含运行环境(JRE):让程序能在你的电脑上运行

2. **IntelliJ IDEA Community** - 代码编辑器
   - 完全免费的专业工具
   - 新手友好,有智能提示功能

::: tip 为什么选择 IntelliJ IDEA?
它是目前最流行的 Java 开发工具之一,全球数百万程序员都在使用。Community 版本完全免费,功能已经足够学习和开发使用。
:::

---

## 第一步:安装 JDK

### Windows 系统安装步骤

#### 1. 下载 JDK

访问 Oracle 官网下载页面:
- 网址:`https://www.oracle.com/java/technologies/downloads/`
- 选择 **Java 17** 或更高版本(推荐 Java 17,这是长期支持版本)
- 点击 **Windows** 标签
- 下载 **x64 Installer** 文件(大约 150MB)

::: warning 版本选择说明
虽然 Java 有很多版本,但我们推荐使用 Java 17。为什么?因为它是 LTS(Long Term Support)版本,会持续获得安全更新和 bug 修复,稳定可靠。
:::

#### 2. 安装 JDK

- 双击下载的 `.exe` 文件
- 点击 **Next**(下一步)
- **重要**:记住安装路径!默认是 `C:\Program Files\Java\jdk-17`
- 继续点击 **Next**,直到安装完成
- 点击 **Close**(关闭)

#### 3. 配置环境变量(Environment Variables)

这是最关键的一步!环境变量就像告诉 Windows:"当我输入 java 命令时,去哪里找这个程序"。

**步骤 A:打开环境变量设置**

1. 右键点击 **此电脑**(This PC)或 **我的电脑**
2. 选择 **属性**(Properties)
3. 点击左侧 **高级系统设置**(Advanced system settings)
4. 点击 **环境变量**(Environment Variables)按钮

**步骤 B:新建 JAVA_HOME 变量**

1. 在 **系统变量**(System variables)区域,点击 **新建**(New)
2. 变量名:`JAVA_HOME`
3. 变量值:你的 JDK 安装路径,例如:`C:\Program Files\Java\jdk-17`
4. 点击 **确定**

::: tip 为什么需要 JAVA_HOME?
很多 Java 工具和框架会通过 JAVA_HOME 变量来找到 JDK 的位置。设置这个变量是一个行业标准做法。
:::

**步骤 C:编辑 Path 变量**

1. 在 **系统变量** 区域找到 **Path** 变量
2. 选中它,点击 **编辑**(Edit)
3. 点击 **新建**(New)
4. 输入:`%JAVA_HOME%\bin`
5. 点击 **确定**,再点击 **确定**,最后点击 **确定**(总共三次)

#### 4. 验证安装

按下 `Win + R` 键,输入 `cmd`,按回车打开命令提示符(Command Prompt),然后输入:

```bash
java -version
```

如果安装成功,你会看到类似这样的输出:

```bash
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

再输入:

```bash
javac -version
```

应该看到:

```bash
javac 17.0.9
```

::: danger 如果看到 "不是内部或外部命令"
这说明环境变量配置有问题。请检查:
1. JAVA_HOME 路径是否正确
2. Path 中是否添加了 `%JAVA_HOME%\bin`
3. 配置完成后是否**重新打开**了命令提示符窗口
:::

---

### macOS 系统安装步骤

#### 1. 下载 JDK

访问 Oracle 官网下载页面:
- 网址:`https://www.oracle.com/java/technologies/downloads/`
- 选择 **Java 17** 或更高版本
- 点击 **macOS** 标签
- 根据你的芯片类型选择:
  - **Apple Silicon**(M1/M2/M3 芯片):下载 **ARM64 DMG Installer**
  - **Intel 芯片**:下载 **x64 DMG Installer**

::: tip 如何查看芯片类型?
点击左上角苹果图标 → 关于本机,查看 "芯片" 或 "处理器" 信息。如果显示 "Apple M1/M2/M3",就是 Apple Silicon;如果显示 "Intel Core",就是 Intel 芯片。
:::

#### 2. 安装 JDK

- 双击下载的 `.dmg` 文件
- 双击 `.pkg` 安装包
- 按照提示点击 **继续**(Continue)
- 同意许可协议
- 点击 **安装**(Install)
- 输入你的 Mac 密码
- 等待安装完成,点击 **关闭**(Close)

#### 3. 配置环境变量

macOS 的环境变量配置相对简单,但需要使用终端(Terminal)。

**步骤 A:打开终端**

- 按 `Command + 空格`,输入 `terminal`,按回车
- 或者从 应用程序 → 实用工具 → 终端

**步骤 B:确定使用的 Shell**

在终端输入:

```bash
echo $SHELL
```

如果输出是 `/bin/zsh`,你使用的是 **zsh**(macOS 10.15 及以后的默认 Shell)

如果输出是 `/bin/bash`,你使用的是 **bash**

**步骤 C:编辑配置文件**

根据你的 Shell 类型,选择对应的命令:

**如果是 zsh**:

```bash
nano ~/.zshrc
```

**如果是 bash**:

```bash
nano ~/.bash_profile
```

这会打开一个文本编辑器。使用方向键移动到文件末尾,添加以下内容:

```bash
# 设置 Java 环境变量 Set Java environment variables
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
export PATH=$JAVA_HOME/bin:$PATH
```

::: tip 命令解释
- `export JAVA_HOME=...`:设置 JAVA_HOME 变量
- `/usr/libexec/java_home -v 17`:macOS 的特殊命令,自动找到 Java 17 的安装路径
- `export PATH=...`:把 Java 命令添加到系统路径中
:::

**步骤 D:保存并退出**

- 按 `Control + O` 保存(会提示确认文件名,直接按回车)
- 按 `Control + X` 退出编辑器

**步骤 E:使配置生效**

在终端输入:

```bash
source ~/.zshrc
```

或(如果你使用 bash):

```bash
source ~/.bash_profile
```

#### 4. 验证安装

在终端输入:

```bash
java -version
```

应该看到类似输出:

```bash
java version "17.0.9" 2023-10-17 LTS
Java(TM) SE Runtime Environment (build 17.0.9+11-LTS-201)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.9+11-LTS-201, mixed mode, sharing)
```

再输入:

```bash
javac -version
```

应该看到:

```bash
javac 17.0.9
```

::: danger 如果命令无法找到
1. 确保你已经执行了 `source` 命令
2. 关闭终端窗口,重新打开一个新的终端窗口
3. 检查 JAVA_HOME 是否正确:`echo $JAVA_HOME`
:::

---

## 第二步:安装 IntelliJ IDEA

### Windows 系统安装步骤

#### 1. 下载 IDEA

- 访问官网:`https://www.jetbrains.com/idea/download/`
- 找到 **Community** 版本(免费的那个,不是 Ultimate)
- 点击 **Download** 下载 `.exe` 文件(大约 800MB)

#### 2. 安装 IDEA

- 双击下载的安装文件
- 点击 **Next**
- 选择安装路径(建议使用默认路径)
- **重要**:在安装选项页面,勾选以下内容:
  - ✅ **Create Desktop Shortcut**(创建桌面快捷方式)
  - ✅ **Add "bin" folder to the PATH**(添加到系统路径)
  - ✅ **.java** - Associate .java files(关联 .java 文件)
- 点击 **Next**,然后点击 **Install**
- 安装完成后,勾选 **Run IntelliJ IDEA Community Edition**
- 点击 **Finish**

#### 3. 首次启动配置

启动 IDEA 后,你会看到一些配置选项:

1. **是否导入配置?** 选择 **Do not import settings**(不导入设置)
2. **选择主题** 根据喜好选择 Light(浅色)或 Dark(深色)主题
3. **安装插件?** 新手建议先跳过(Skip Remaining and Set Defaults)

---

### macOS 系统安装步骤

#### 1. 下载 IDEA

- 访问官网:`https://www.jetbrains.com/idea/download/`
- 确保选择了 **macOS** 标签
- 找到 **Community** 版本
- 根据芯片类型选择:
  - Apple Silicon → **.dmg (Apple Silicon)**
  - Intel → **.dmg (Intel)**
- 点击 **Download**

#### 2. 安装 IDEA

- 双击下载的 `.dmg` 文件
- 将 **IntelliJ IDEA CE** 图标拖动到 **Applications**(应用程序)文件夹
- 等待复制完成
- 弹出(Eject) `.dmg` 镜像

#### 3. 首次启动

- 从启动台(Launchpad)或应用程序文件夹打开 **IntelliJ IDEA CE**
- macOS 可能会提示 "无法打开,因为来自身份不明的开发者"
  - 点击 **确定**
  - 打开 **系统偏好设置** → **安全性与隐私**
  - 点击底部的 **仍要打开** 按钮
  - 再次点击 **打开**

#### 4. 首次启动配置

与 Windows 相同:

1. 选择 **Do not import settings**
2. 选择主题(Light 或 Dark)
3. 跳过插件安装

---

## 第三步:创建你的第一个 Java 项目

现在工具都准备好了,让我们创建第一个项目来验证一切正常!

### 1. 创建新项目(New Project)

1. 启动 IntelliJ IDEA
2. 点击 **New Project**(新建项目)
3. 填写项目信息:
   - **Name**(名称):`HelloWorld`
   - **Location**(位置):选择一个你能找到的文件夹(比如桌面或文档)
   - **Language**(语言):确保选择 **Java**
   - **Build system**(构建系统):选择 **IntelliJ**
   - **JDK**:应该自动检测到你安装的 JDK 17

::: warning 如果 JDK 下拉框是空的
点击下拉框 → 选择 **Add JDK** → 手动导航到 JDK 安装目录:
- Windows:`C:\Program Files\Java\jdk-17`
- macOS:`/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home`
:::

4. 点击 **Create**(创建)

### 2. 创建 Java 文件

1. 在左侧项目面板,找到 **src** 文件夹
2. 右键点击 **src** 文件夹
3. 选择 **New** → **Java Class**
4. 输入类名:`HelloWorld`
5. 按回车

### 3. 编写第一个程序

在打开的编辑器中,你会看到:

```java
public class HelloWorld {
}
```

删除所有内容,输入以下代码(注意大小写和标点符号):

```java
public class HelloWorld {
    // 这是程序的入口点 This is the entry point of the program
    public static void main(String[] args) {
        // 在控制台打印一条消息 Print a message to the console
        System.out.println("Hello, World! 你好,世界!");
    }
}
```

::: tip 代码说明
- `public class HelloWorld`:定义一个名为 HelloWorld 的类(Class)
- `public static void main(String[] args)`:程序的入口方法,程序从这里开始执行
- `System.out.println()`:在控制台输出一行文字
- 每条语句末尾的 `;` 不能省略
:::

### 4. 运行程序

1. 在代码编辑器中,找到第 2 行 `main` 旁边的绿色三角形 ▶️ 按钮
2. 点击它,选择 **Run 'HelloWorld.main()'**
3. 稍等几秒,底部会出现运行窗口

如果一切正常,你会看到:

```
Hello, World! 你好,世界!

Process finished with exit code 0
```

::: tip 成功的标志
- 看到你输出的文字
- `exit code 0` 表示程序正常结束(0 = 成功,非 0 = 出错)
:::

---

## ✅ 验证清单

在继续学习之前,请确保以下所有项都已完成:

### JDK 验证

- [ ] 命令行输入 `java -version` 能看到版本信息
- [ ] 命令行输入 `javac -version` 能看到版本信息
- [ ] 版本号是 17 或更高

### IDEA 验证

- [ ] IntelliJ IDEA 能够成功启动
- [ ] 创建项目时能检测到 JDK
- [ ] HelloWorld 程序能成功运行
- [ ] 控制台显示 "Hello, World! 你好,世界!"

---

## 🔧 常见问题排查

### 问题 1:命令行提示 "java 不是内部或外部命令"

**原因**:环境变量配置不正确

**解决方法**:
1. 重新检查 JAVA_HOME 变量的路径是否正确
2. 确认 Path 变量中添加了 `%JAVA_HOME%\bin`(Windows)或 `$JAVA_HOME/bin`(macOS)
3. **关闭并重新打开命令行窗口**(这一步很重要!)

### 问题 2:IDEA 找不到 JDK

**原因**:IDEA 没有自动检测到 JDK

**解决方法**:
1. 在创建项目时,点击 JDK 下拉框
2. 选择 **Add JDK** 或 **Download JDK**
3. 如果选择 **Add JDK**,手动导航到 JDK 安装目录

### 问题 3:代码有红色波浪线

**原因**:语法错误或 IDEA 正在索引项目

**解决方法**:
1. 如果是刚创建的项目,等待右下角的进度条完成(IDEA 正在分析项目)
2. 检查代码是否完全按照示例输入,特别注意:
   - 大小写是否正确(Java 区分大小写)
   - 括号是否成对出现
   - 分号是否遗漏

### 问题 4:运行时没有绿色三角形按钮

**原因**:`main` 方法签名不正确

**解决方法**:
确保 `main` 方法写法完全正确:
```java
public static void main(String[] args)
```
- `public`、`static`、`void` 一个都不能少
- `main` 必须小写
- 参数必须是 `String[] args`

---

## 📌 本章小结

恭喜你完成了开发环境搭建!让我们回顾一下你学到的内容:

1. **JDK(Java Development Kit)** 是编写和运行 Java 程序的必备工具,包含编译器(javac)和运行环境(JRE)

2. **环境变量(Environment Variables)** 告诉操作系统在哪里找到 Java 相关命令:
   - `JAVA_HOME`:指向 JDK 安装目录
   - `Path`:让系统能在任何位置执行 java 和 javac 命令

3. **IntelliJ IDEA** 是专业的 Java 开发工具,能大幅提升编程效率

4. **验证命令**:
   - `java -version`:检查 Java 运行环境
   - `javac -version`:检查 Java 编译器

5. **第一个程序** 的关键元素:
   - `public class` 类定义
   - `main` 方法作为程序入口
   - `System.out.println()` 输出文字

现在你的 "工作台" 已经准备就绪,可以开始真正的 Java 编程之旅了!在下一章,我们将深入学习 Java 的基础语法和数据类型。

::: tip 保存好你的项目
建议为所有 Java 学习项目创建一个专门的文件夹,比如 `我的Java学习` 或 `JavaProjects`,这样方便以后查找和管理。
:::
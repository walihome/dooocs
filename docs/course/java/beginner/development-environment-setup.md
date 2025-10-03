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

## 💡 什么是开发环境

写 Java 代码需要两个工具：
- **JDK(Java Development Kit)**：让计算机能理解和运行 Java 代码
- **代码编辑器**：你写代码的地方

想象一下，JDK 就像一个翻译官，把你写的代码翻译给计算机；编辑器就像你的笔记本，用来书写代码。

---

## 📥 安装 JDK

### Windows 系统

**步骤 1：下载 JDK**

1. 访问 Oracle 官网：https://www.oracle.com/java/technologies/downloads/
2. 选择 **Java 17** 或更高版本
3. 下载 `x64 Installer`（.exe 文件）

::: tip 为什么选 Java 17？
Java 17 是长期支持版本(LTS)，稳定且被广泛使用。
:::

**步骤 2：安装**

1. 双击下载的 `.exe` 文件
2. 一路点击 **Next**，保持默认设置
3. 记住安装路径（通常是 `C:\Program Files\Java\jdk-17`）

**步骤 3：验证安装**

1. 按 `Win + R`，输入 `cmd`，按回车
2. 在黑色窗口中输入：

```bash
java -version
```

如果看到类似这样的输出，说明安装成功：

```
java version "17.0.8" 2023-07-18 LTS
Java(TM) SE Runtime Environment (build 17.0.8+9-LTS-211)
```

::: warning 如果提示"不是内部或外部命令"
说明系统找不到 Java，需要配置环境变量(Environment Variables)：

1. 右键 **此电脑** → **属性** → **高级系统设置**
2. 点击 **环境变量**
3. 在 **系统变量** 中找到 `Path`，点击 **编辑**
4. 点击 **新建**，输入：`C:\Program Files\Java\jdk-17\bin`
5. 确定后，**重新打开** cmd 窗口，再次输入 `java -version`
:::

---

### macOS 系统

**步骤 1：下载 JDK**

1. 访问 Oracle 官网：https://www.oracle.com/java/technologies/downloads/
2. 选择 **Java 17** 或更高版本
3. 下载 **macOS** 对应的 `.dmg` 文件

**步骤 2：安装**

1. 双击 `.dmg` 文件
2. 双击 `.pkg` 安装包
3. 按提示输入密码，完成安装

**步骤 3：验证安装**

1. 按 `Command + 空格`，输入 `terminal`，打开终端
2. 输入：

```bash
java -version
```

如果看到版本信息，说明安装成功。

::: tip macOS 用户提示
macOS 通常会自动配置环境变量，无需手动设置。
:::

---

## 📝 安装代码编辑器

推荐使用 **Visual Studio Code(VS Code)**，它免费、轻量、支持多种语言。

### Windows 和 macOS 通用步骤

**步骤 1：下载**
- 访问：https://code.visualstudio.com/
- 点击 **Download** 按钮

**步骤 2：安装**
- Windows：双击 `.exe` 文件，一路 Next
- macOS：拖动 VS Code 图标到 Applications 文件夹

**步骤 3：安装 Java 扩展**

1. 打开 VS Code
2. 点击左侧 **Extensions**（扩展）图标（或按 `Ctrl/Cmd + Shift + X`）
3. 搜索 `Extension Pack for Java`
4. 点击 **Install** 安装

::: tip 为什么需要扩展？
扩展让 VS Code 能识别 Java 语法，提供代码提示和错误检查。
:::

---

## ✅ 验证完整环境

创建你的第一个 Java 程序：

**步骤 1：创建文件夹**
- Windows：在桌面新建文件夹 `JavaProjects`
- macOS：在主目录新建文件夹 `JavaProjects`

**步骤 2：用 VS Code 打开文件夹**
1. 打开 VS Code
2. 点击 **File** → **Open Folder**
3. 选择刚创建的 `JavaProjects` 文件夹

**步骤 3：创建文件**
1. 点击 **New File** 图标
2. 文件名输入：`Hello.java`

**步骤 4：编写代码**

```java
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

**步骤 5：运行代码**

在 VS Code 中：
1. 右键代码区域
2. 选择 **Run Java**

或者使用命令行：

```bash
# Windows (cmd)
cd Desktop\JavaProjects
javac Hello.java
java Hello

# macOS (terminal)
cd ~/JavaProjects
javac Hello.java
java Hello
```

**预期结果：**

```
Hello, Java!
```

::: tip 命令解释
- `javac Hello.java`：编译代码，生成 `Hello.class` 文件
- `java Hello`：运行编译后的程序
:::

---

## 💪 练习题

1. **验证 JDK 版本**：在命令行输入 `java -version` 和 `javac -version`，截图两个命令的输出
2. **修改输出内容**：把 `"Hello, Java!"` 改成你的名字，运行看看
3. **创建第二个程序**：新建 `Welcome.java`，输出 `"Welcome to Java World!"`

---

## 📌 小结

- JDK 是运行 Java 程序的必备工具，记得验证 `java -version`
- VS Code + Java 扩展是最适合新手的开发环境
- `javac` 编译代码，`java` 运行程序 —— 记住这两个命令
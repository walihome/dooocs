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
![Java的诞生](https://www.dooocs.com/images/80FAE1EC-A6D9-4131-90CC-4B3EC32CA259.png)

在开始编写 Java 程序之前,你需要先安装一个能够运行 Java 代码的程序。这就像你想看电影,需要先安装一个视频播放器一样。

## 💡 什么是 JDK

**JDK(Java Development Kit)** 是 Java 开发工具包,它包含了运行和编写 Java 程序所需的所有工具。安装 JDK 后,你的电脑就能理解和执行 Java 代码了。

::: tip 提示
我们将安装 JDK 17 版本,这是目前广泛使用且稳定的版本。
:::

## 📥 下载 JDK

::: code-group
```plainttext [Windows 系统]

1. 打开浏览器,访问 Oracle 官网: https://www.oracle.com/java/technologies/downloads/#java17
2. 在页面中找到 **Windows** 标签
3. 下载 **x64 Installer** (文件名类似 `jdk-17_windows-x64_bin.exe`)
```
```plainttext [macOS 系统]

1. 访问同样的网址: https://www.oracle.com/java/technologies/downloads/#java17
2. 在页面中找到 **macOS** 标签
3. 根据你的 Mac 芯片类型选择:
   - **Apple Silicon(M1/M2/M3 芯片)**: 下载 **ARM64 DMG Installer**
   - **Intel 芯片**: 下载 **x64 DMG Installer**
```
::: 
::: warning 注意
如果不确定你的 Mac 是什么芯片,点击屏幕左上角的苹果图标 → "关于本机",查看 "芯片" 或 "处理器" 信息。
:::

## 🔧 安装 JDK

### Windows 安装步骤

1. 双击下载的 `.exe` 文件
2. 点击 **Next** 按钮
3. 记住安装路径(默认是 `C:\Program Files\Java\jdk-17`),点击 **Next**
4. 等待安装完成,点击 **Close**

### macOS 安装步骤

1. 双击下载的 `.dmg` 文件
2. 双击 `.pkg` 安装包
3. 按照提示点击 **继续** 和 **安装**
4. 输入你的 Mac 密码,完成安装

## ✅ 验证安装

安装完成后,我们需要确认 JDK 是否安装成功。

### Windows 验证

1. 按 `Win + R` 键,输入 `cmd`,按回车打开命令提示符
2. 输入以下命令:

```bash
java -version
```

3. 如果看到类似下面的输出,说明安装成功:

```bash
java version "17.0.x" 2024-xx-xx LTS
Java(TM) SE Runtime Environment (build 17.0.x+xx-LTS-xxx)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.x+xx-LTS-xxx, mixed mode, sharing)
```

### macOS 验证

1. 打开 **终端**(Terminal):按 `Command + 空格`,输入 `terminal`,按回车
2. 输入以下命令:

```bash
java -version
```

3. 看到类似的版本信息就表示安装成功了

::: danger 警告
如果看到 "java 不是内部或外部命令" 或 "command not found" 的错误,说明安装有问题,需要配置环境变量。
:::

## 🔨 配置环境变量(如果需要)

如果验证时出现错误,可能需要手动配置环境变量。

### Windows 配置

1. 右键点击 **此电脑** → **属性** → **高级系统设置**
2. 点击 **环境变量** 按钮
3. 在 **系统变量** 中,点击 **新建**:
   - 变量名: `JAVA_HOME`
   - 变量值: `C:\Program Files\Java\jdk-17` (你的实际安装路径)
4. 找到系统变量中的 **Path**,点击 **编辑**
5. 点击 **新建**,添加: `%JAVA_HOME%\bin`
6. 点击 **确定** 保存所有设置
7. **关闭并重新打开命令提示符**,再次验证

### macOS 配置

1. 打开终端,输入以下命令:

```bash
echo 'export JAVA_HOME=$(/usr/libexec/java_home)' >> ~/.zshrc
```

2. 让配置生效:

```bash
source ~/.zshrc
```

3. 再次运行 `java -version` 验证

## 💻 编写第一个程序

现在你的电脑已经可以运行 Java 代码了!让我们来验证一下。

### 创建程序文件

1. 打开记事本(Windows)或文本编辑(macOS)
2. 输入以下代码:

```java{1,3}
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

3. 保存文件:
   - **文件名必须是**: `Hello.java` (注意大小写)
   - 选择保存位置: 桌面或任意你能找到的文件夹

### 运行程序

**Windows 操作:**

1. 打开命令提示符,使用 `cd` 命令进入文件所在位置:

```bash
cd Desktop
```

2. 编译程序:

```bash
javac Hello.java
```

3. 运行程序:

```bash
java Hello
```

**macOS 操作:**

1. 打开终端,进入文件所在位置:

```bash
cd Desktop
```

2. 编译和运行步骤与 Windows 相同

### 运行结果

如果一切顺利,你会在屏幕上看到:

```
Hello, Java!
```

::: tip 恭喜!
你已经成功运行了第一个 Java 程序!这证明你的开发环境已经完全配置好了。
:::

## 💪 练习题

**练习 1:** 修改程序,让它输出你的名字

<details>
<summary>点击查看答案</summary>

```java{3}
public class Hello {
    public static void main(String[] args) {
        System.out.println("My name is Zhang San");
    }
}
```

记得重新编译: `javac Hello.java`,然后运行: `java Hello`
</details>

**练习 2:** 让程序输出两行内容

<details>
<summary>点击查看答案</summary>

```java{3-4}
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
        System.out.println("I am learning programming!");
    }
}
```

每个 `System.out.println()` 会输出一行内容。
</details>

## 📌 小结

- **JDK** 是运行 Java 程序必需的工具包
- 使用 `java -version` 命令可以验证安装是否成功
- `javac` 命令用于编译 Java 程序,`java` 命令用于运行程序
- 文件名必须与代码中的类名完全一致(包括大小写)

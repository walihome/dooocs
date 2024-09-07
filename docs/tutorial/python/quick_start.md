# 快速开始

## 安装环境
要在 macOS 上安装 Python 环境，您可以按照以下步骤进行操作：

1. 访问官方网站：
   打开浏览器，然后访问 Python 官方网站的下载页面：https://www.python.org/downloads/

2. 下载 Python 安装程序：
   在下载页面上，您将看到最新版本的 Python。根据您的需求选择适合的版本（通常建议选择最新的稳定版本）。
   点击对应版本的 macOS 安装程序下载链接，下载安装程序。

3. 运行安装程序：
   打开下载的 Python 安装程序，然后按照提示进行安装。在安装过程中，您可以选择自定义安装选项，如安装路径和组件。对于大多数用户来说，使用默认选项即可。

4. 验证安装：
   打开终端应用程序，输入以下命令并按回车键：
   ```
   python --version
   ```
   如果您看到类似以下内容的输出，则表示 Python 安装成功：
   ```
   Python 3.9.6
   ```
   注意：输出中的版本号可能因您下载的 Python 版本而异。

   您还可以尝试输入以下命令并按回车键，以确保 pip（Python 包管理器）也已正确安装：
   ```
   pip --version
   ```
   如果您看到类似以下内容的输出，则表示 pip 安装成功：
   ```
   pip 21.1.3 from /usr/local/lib/python3.9/site-packages/pip (python 3.9)
   ```

现在您已经成功在 macOS 上安装了 Python 环境。您可以使用 Python 运行和开发 Python 程序了。如果您有任何问题，请随时向我提问。


## 写一个hello world
当然，以下是一个使用Python编写的快速开始代码示例：

```python
# 这是一个示例Python代码

def hello_world():
    """打印Hello World"""
    print("Hello World!")

if __name__ == "__main__":
    hello_world()
```

希望这个示例能帮到你！
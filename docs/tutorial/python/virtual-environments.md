---
title: Python虚拟环境
order: 24
description: 使用虚拟环境的目的是在封装的环境中测试Python代码，并且避免将我们可能只用于一个项目的库填充到基础Python安装中。
---

# 虚拟环境

使用虚拟环境的目的是在封装的环境中测试Python代码，并且避免将我们可能只用于一个项目的库填充到基础Python安装中。

## virtualenv

1.  安装 virtualenv
```
 pip install virtualenv
```

       

1.  安装 virtualenvwrapper-win (Windows)

```
pip install virtualenvwrapper-win
```

使用方法：

1.  创建一个名为 `HelloWorld` 的虚拟环境
```
mkvirtualenv HelloWorld
```
        

    现在我们安装的任何东西都将特定于这个项目。并且可用于我们连接到此环境的项目。

1.  设置项目目录

    要将我们的虚拟环境与当前工作目录绑定，只需输入：
```
setprojectdir .
```
        

1.  退出虚拟环境

    要在命令行中继续其他操作，输入 `deactivate` 以停用您的环境。
```
deactivate
```
        

    注意括号如何消失。

1.  使用 Workon

    打开命令提示符并输入 `workon HelloWorld` 以激活环境并进入您的根项目文件夹

```
workon HelloWorld
```
## Poetry

从 [Poetry 网站](https://python-poetry.org/)

Poetry 是一个用于 Python 中依赖管理和打包的工具。它允许你声明项目所依赖的库，并且它会为你管理（安装/更新）这些库。

1.  安装 Poetry

```
pip install --user poetry
```

2.  创建一个新项目

```
poetry new my-project
```

    这将创建一个 my-project 目录：

```
my-project
        ├── pyproject.toml
        ├── README.rst
        ├── poetry_demo
        │   └── __init__.py
        └── tests
            ├── __init__.py
            └── test_poetry_demo.py
```

    pyproject.toml 文件将协调你的项目及其依赖项：

```
[tool.poetry]
name = "my-project"
version = "0.1.0"
description = ""
authors = ["your name <your@mail.com>"]

[tool.poetry.dependencies]
python = "*"

[tool.poetry.dev-dependencies]
pytest = "^3.4"
```

3.  包管理

要向项目添加依赖项，可以在 tool.poetry.dependencies 部分中指定它们：

```
[tool.poetry.dependencies]
pendulum = "^1.4"
```

    此外，不需要手动修改 pyproject.toml 文件，你可以使用 add 命令，它会自动找到合适的版本约束。

```
poetry add pendulum
```

    要安装 pyproject.toml 中列出的依赖项：

```
poetry install
```

    要移除依赖项：

```
poetry remove pendulum
```

更多信息，请查看 [文档](https://poetry.eustace.io/docs/) 或阅读以下内容：

## Pipenv

来自 [Pipenv 网站](https://pipenv.pypa.io/en/latest/)

Pipenv 是一个旨在将所有打包世界（bundler、composer、npm、cargo、yarn 等）的最佳实践带入 Python 世界的工具。在我们的世界中，Windows 是一等公民。


1.  安装 pipenv

```
pip install pipenv
```

2.  进入你的项目目录并为你的项目安装包

```
cd my_project
pipenv install <package>
```

    Pipenv 会为你安装包并在你的项目目录中创建一个 Pipfile。Pipfile 用于跟踪你的项目需要哪些依赖项，以防你需要重新安装它们。

3.  卸载包

```
pipenv uninstall <package>
```

4.  激活与 Python 项目关联的虚拟环境

```
pipenv shell
```

5.  退出虚拟环境

```
exit
```

更多信息和视频请查看 [docs.pipenv.org](https://docs.pipenv.org/)。

## Anaconda

[Anaconda](https://anaconda.com/) 是另一个流行的 Python 包管理工具。

在这里，包、笔记本、项目和环境可以共享。它是你免费公共 conda 包托管的地方。


使用方法：

1.  创建一个虚拟环境

```
conda create -n HelloWorld
```

2.  要使用虚拟环境，激活它：

```
conda activate HelloWorld
```

    现在安装的任何东西都将特定于项目 HelloWorld

3.  退出虚拟环境

```
conda deactivate
```

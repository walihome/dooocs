---
title: Python 设置.py
order: 22
description: setup 脚本是使用 Distutils 构建、分发和安装模块的所有活动的中心。setup 脚本的主要目的是向 Distutils 描述你的模块分发，以便对你的模块进行操作的各种命令能够正确执行。
---


# Python setup.py

一个“有争议的”观点
使用 `setup.py` 来打包和分发你的 Python 包有时可能会非常具有挑战性。像 <a target="_blank" href="https://python-poetry.org/">Poetry</a> 这样的工具不仅使打包变得<b>容易得多</b>，还帮助你以非常方便的方式管理依赖项。


## 介绍

使用 Distutils 构建、分发和安装模块的所有活动的中心是 setup 脚本。setup 脚本的主要目的是向 Distutils 描述你的模块分发，以便对你的模块进行操作的各种命令能够正确执行。

`setup.py` 文件是 Python 项目的核心。它描述了有关项目的所有元数据。你可以向项目添加相当多的字段，以提供描述项目的丰富元数据。然而，只有三个字段是必需的：name、version 和 packages。如果你希望在 Python Package Index (PyPI) 上发布你的包，name 字段必须是唯一的。version 字段用于跟踪项目的不同版本。packages 字段描述了你在项目中放置 Python 源代码的位置。

这使你可以轻松地安装 Python 包。通常只需编写：

```bash
python setup.py install
```

模块将自行安装。

## 示例

我们的初始 setup.py 还将包括有关许可证的信息，并将重用 README.txt 文件作为 long_description 字段。它看起来像这样：

```python
from distutils.core import setup
setup(
   name='pythonCheatsheet',
   version='0.1',
   packages=['pipenv',],
   license='MIT',
   long_description=open('README.txt').read(),
)
```

Find more information visit the [official documentation](http://docs.python.org/3.11/install/index.html).

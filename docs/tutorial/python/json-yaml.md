---
title: Python Json 和 YAML
order: 14
description: JSON 代表 JavaScript 对象表示法，是一种用于存储和传输数据的轻量级格式。JSON 通常在数据从服务器发送到网页时使用。
---


# JSON 和 YAML


## JSON

JSON 代表 JavaScript 对象表示法，是一种用于存储和传输数据的轻量级格式。JSON 通常在数据从服务器发送到网页时使用。

```python
>>> import json
>>> with open("filename.json", "r") as f:
...     content = json.load(f)
```

写一个包含以下内容的 JSON 文件：

```python
>>> import json

>>> content = {"name": "Joe", "age": 20}
>>> with open("filename.json", "w") as f:
...     json.dump(content, f, indent=2)
```

## YAML

与 JSON 相比，YAML 具有更好的可维护性，并且可以添加注释。它是需要人工编辑的配置文件的方便选择。

有两个主要的库可以访问 YAML 文件：

- [PyYaml](https://pypi.python.org/pypi/PyYAML)
- [Ruamel.yaml](https://pypi.python.org/pypi/ruamel.yaml)

在你的虚拟环境中使用 `pip install` 安装它们。

第一个库更容易使用，但第二个库 Ruamel 更好地实现了 YAML 规范，并且例如允许在不改变注释的情况下修改 YAML 内容。

打开一个 YAML 文件：

```python
>>> from ruamel.yaml import YAML

>>> with open("filename.yaml") as f:
...     yaml=YAML()
...     yaml.load(f)
```

## Anyconfig

[Anyconfig](https://pypi.python.org/pypi/anyconfig) 是一个非常方便的包，允许完全抽象底层的配置文件格式。它允许从 JSON、YAML、TOML 等加载 Python 字典。

安装方法：

```bash
pip install anyconfig
```

用法：

```python
>>> import anyconfig
>>> conf1 = anyconfig.load("/path/to/foo/conf.d/a.yml")
```

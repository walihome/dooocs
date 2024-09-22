---
title: Python 数据类
order: 21
description: 数据类是 Python 类，但更适合用于存储数据对象。这个模块提供了一个装饰器和一些函数，可以自动为用户定义的类添加生成的特殊方法，比如 __init__() 和 __repr__()。
---


# Python 数据类

`数据类` 是 Python 类，但更适合用于存储数据对象。
这个模块提供了一个装饰器和一些函数，可以自动为用户定义的类添加生成的特殊方法，比如 `__init__()` 和 `__repr__()`。

## 特点

1. 它们存储数据并表示某种数据类型。例如：一个数字。对于熟悉 ORM 的人来说，模型实例就是一个数据对象。它表示一种特定的实体。它包含定义或表示该实体的属性。

2. 它们可以与同类型的其他对象进行比较。例如：一个数字可以大于、小于或等于另一个数字。

Python 3.7 提供了一个装饰器 dataclass，用于将类转换为数据类。

```python
>>> class Number:
...     def __init__(self, val):
...         self.val = val
...
>>> obj = Number(2)
>>> obj.val
# 2
```

使用数据类

```python
>>> @dataclass
... class Number:
...     val: int
...
>>> obj = Number(2)
>>> obj.val
# 2
```

## 默认值

在数据类的字段中添加默认值非常容易。

```python
>>> @dataclass
... class Product:
...     name: str
...     count: int = 0
...     price: float = 0.0
...
>>> obj = Product("Python")
>>> obj.name
# Python

>>> obj.count
# 0

>>> obj.price
# 0.0
```

## 类型提示

在数据类中定义数据类型是强制性的。然而，如果你不想指定数据类型，可以使用 `typing.Any`。

```python
>>> from dataclasses import dataclass
>>> from typing import Any

>>> @dataclass
... class WithoutExplicitTypes:
...    name: Any
...    value: Any = 42
```

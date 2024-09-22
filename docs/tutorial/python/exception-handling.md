---
title: Python 异常处理
order: 15
description: 在Python中，异常处理是响应异常发生的过程。
---


# Python 异常处理

[异常处理](https://en.wikipedia.org/wiki/Exception_handling)

在计算和计算机编程中，异常处理是响应异常（需要特殊处理的异常或特殊情况）发生的过程。

Python 有许多[内置异常](https://docs.python.org/3/library/exceptions.html)，当程序遇到错误时会引发这些异常，并且大多数外部库，如流行的 [Requests](https://requests.readthedocs.io/en/latest)，也包含自己的[自定义异常](https://requests.readthedocs.io/en/latest/user/quickstart/#errors-and-exceptions)，我们需要处理这些异常。

## 基本异常处理

你不能除以零，这是一个数学真理，如果你在 Python 中尝试这样做，解释器会引发内置异常 [ZeroDivisionError](https://docs.python.org/3/library/exceptions.html#ZeroDivisionError):

```python
>>> def divide(dividend , divisor):
...     print(dividend / divisor)
...
>>> divide(dividend=10, divisor=5)
# 5

>>> divide(dividend=10, divisor=0)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
```

假设我们不希望程序停止执行或向用户显示他们无法理解的输出。假设我们想打印一个有用且清晰的消息，那么我们需要使用 `try` 和 `except` 关键字来**处理**异常：

```python
>>> def divide(dividend , divisor):
...     try:
...         print(dividend / divisor)
...     except ZeroDivisionError:
...         print('You can not divide by 0')
...
>>> divide(dividend=10, divisor=5)
# 5

>>> divide(dividend=10, divisor=0)
# You can not divide by 0
```

## 使用一个异常块处理多个异常

你也可以像下面这样在一行中处理多个异常，而无需创建多个异常块。

```python
>>> def divide(dividend , divisor):
...     try:
...         var = 'str' + 1
...         print(dividend / divisor)
...     except (ZeroDivisionError, TypeError) as error:
...         print(error)
...
>>> divide(dividend=10, divisor=5)
# 5

>>> divide(dividend=10, divisor=0)
# `division by zero` Error message
# `can only concatenate str (not "int") to str` Error message
```

## 异常处理中的 finally 代码

无论是否引发异常，`finally` 部分中的代码总是会被执行：

```python
>>> def divide(dividend , divisor):
...     try:
...         print(dividend / divisor)
...     except ZeroDivisionError:
...         print('You can not divide by 0')
...     finally:
...         print('Execution finished')
...
>>> divide(dividend=10, divisor=5)
# 5
# Execution finished

>>> divide(dividend=10, divisor=0)
# You can not divide by 0
# Execution finished
```

## 自定义异常

自定义异常通过创建一个继承自 Python 基础 `Exception` 类的 `class` 来初始化，并使用 `raise` 关键字来引发：

```python
>>> class MyCustomException(Exception):
...     pass
...
>>> raise MyCustomException
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# __main__.MyCustomException
```

要声明自定义异常消息，可以将其作为参数传递：

```python
>>> class MyCustomException(Exception):
...     pass
...
>>> raise MyCustomException('A custom message for my custom exception')
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# __main__.MyCustomException: A custom message for my custom exception
```

处理自定义异常与处理其他异常相同：

```python
>>> try:
...     raise MyCustomException('A custom message for my custom exception')
>>> except MyCustomException:
...     print('My custom exception was raised')
...
# My custom exception was raised
```

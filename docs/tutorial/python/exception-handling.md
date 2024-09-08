---
标题: Python 异常处理
顺序: 15
描述: 在Python中，异常处理是响应异常发生的过程。
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

Let's say we don't want our program to stop its execution or show the user an output he will not understand. Say we want to print a useful and clear message, then we need to **_handle_** the exception with the `try` and `except` keywords:

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

## Handling Multiple exceptions using one exception block

You can also handle multiple exceptions in one line like the following without the need to create multiple exception blocks.

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

## Finally code in exception handling

The code inside the `finally` section is always executed, no matter if an exception has been raised or not:

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

## Custom Exceptions

Custom exceptions initialize by creating a `class` that inherits from the base `Exception` class of Python, and are raised using the `raise` keyword:

```python
>>> class MyCustomException(Exception):
...     pass
...
>>> raise MyCustomException
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# __main__.MyCustomException
```

To declare a custom exception message, you can pass it as a parameter:

```python
>>> class MyCustomException(Exception):
...     pass
...
>>> raise MyCustomException('A custom message for my custom exception')
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# __main__.MyCustomException: A custom message for my custom exception
```

Handling a custom exception is the same as any other:

```python
>>> try:
...     raise MyCustomException('A custom message for my custom exception')
>>> except MyCustomException:
...     print('My custom exception was raised')
...
# My custom exception was raised
```

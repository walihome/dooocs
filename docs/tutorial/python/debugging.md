---
title: Python 调试
order: 16
description: 在计算机编程和软件开发中，调试是查找和解决计算机程序、软件或系统中错误（缺陷或阻止正确操作的问题）的过程。
---


# Python Debugging调试



[查找和解决错误](https://en.wikipedia.org/wiki/Debugging)
> 在计算机编程和软件开发中，调试是查找和解决计算机程序、软件或系统中错误（缺陷或阻止正确操作的问题）的过程。
  


## 抛出异常

异常是通过 raise 语句抛出的。在代码中，raise 语句包括以下内容：

- `raise` 关键字
- 调用 `Exception()` 函数
- 传递给 `Exception()` 函数的包含有用错误信息的字符串

```python
>>> raise Exception('This is the error message.')
# Traceback (most recent call last):
#   File "<pyshell#191>", line 1, in <module>
#     raise Exception('This is the error message.')
# Exception: This is the error message.
```

通常是调用函数的代码，而不是函数本身，知道如何处理异常。因此，您通常会在函数内部看到 raise 语句，而在调用该函数的代码中看到 `try` 和 `except` 语句。

```python
>>> def box_print(symbol, width, height):
...     if len(symbol) != 1:
...       raise Exception('Symbol must be a single character string.')
...     if width <= 2:
...       raise Exception('Width must be greater than 2.')
...     if height <= 2:
...       raise Exception('Height must be greater than 2.')
...     print(symbol * width)
...     for i in range(height - 2):
...         print(symbol + (' ' * (width - 2)) + symbol)
...     print(symbol * width)
...
>>> for sym, w, h in (('*', 4, 4), ('O', 20, 5), ('x', 1, 3), ('ZZ', 3, 3)):
...     try:
...         box_print(sym, w, h)
...     except Exception as err:
...         print('An exception happened: ' + str(err))
...
# ****
# *  *
# *  *
# ****
# OOOOOOOOOOOOOOOOOOOO
# O                  O
# O                  O
# O                  O
# OOOOOOOOOOOOOOOOOOOO
# An exception happened: Width must be greater than 2.
# An exception happened: Symbol must be a single character string.
```

阅读更多关于[异常处理](/cheatsheet/exception-handling)的信息。

## 将追溯信息作为字符串获取

当一个抛出的异常未被处理时，Python 会显示 `traceback`。但也可以通过调用 traceback.format_exc() 将其作为字符串获取。如果你想要异常追溯信息，但也希望 except 语句优雅地处理异常，这个函数非常有用。在调用此函数之前，你需要导入 Python 的 traceback 模块。

```python
>>> import traceback

>>> try:
...     raise Exception('This is the error message.')
>>> except:
...     with open('errorInfo.txt', 'w') as error_file:
...         error_file.write(traceback.format_exc())
...     print('The traceback info was written to errorInfo.txt.')
...
# 116
# The traceback info was written to errorInfo.txt.
```

116 是 `write()` 方法的返回值，因为 116 个字符被写入了文件。`traceback` 文本被写入到 errorInfo.txt。

```
Traceback (most recent call last):
  File "<pyshell#28>", line 2, in <module>
Exception: This is the error message.
```
## 断言

断言是一种健全性检查，用于确保代码没有做明显错误的事情。这些健全性检查是通过 `assert` 语句执行的。如果健全性检查失败，则会引发 `AssertionError` 异常。在代码中，一个 `assert` 语句由以下部分组成：

- The `assert` keyword
- A condition (that is, an expression that evaluates to `True` or `False`)
- A comma
- A `string` to display when the condition is `False`

```python
>>> pod_bay_door_status = 'open'
>>> assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'

>>> pod_bay_door_status = 'I\'m sorry, Dave. I\'m afraid I can\'t do that.'
>>> assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
# Traceback (most recent call last):
#   File "<pyshell#10>", line 1, in <module>
#     assert pod_bay_door_status == 'open', 'The pod bay doors need to be "open".'
# AssertionError: The pod bay doors need to be "open".
```
简单来说，assert 语句表示“我断言这个条件为真，如果不为真，那么程序中存在一个错误。”与异常不同，你的代码不应该使用 try 和 except 来处理 assert 语句；如果 assert 失败，你的程序应该崩溃。通过快速失败，你可以缩短从错误的最初原因到你第一次注意到错误之间的时间。这将减少你在找到导致错误的代码之前需要检查的代码量。

### 禁用断言

可以通过在运行 Python 时传递 `-O` 选项来禁用断言。

## 日志记录

要启用 `logging` 模块在程序运行时在屏幕上显示日志消息，请将以下内容复制到程序的顶部：

```python
>>> import logging
>>> logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

假设你编写了一个函数来计算一个数的阶乘。在数学中，4 的阶乘是 1 × 2 × 3 × 4，即 24。7 的阶乘是 1 × 2 × 3 × 4 × 5 × 6 × 7，即 5,040。打开一个新的文件编辑器窗口并输入以下代码。代码中有一个错误，但你也会输入几个日志消息来帮助自己找出问题所在。将程序保存为 factorialLog.py。

```python
>>> import logging
>>> logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
>>> logging.debug('Start of program')

>>> def factorial(n):
...     logging.debug('Start of factorial(%s)' % (n))
...     total = 1
...     for i in range(1, n + 1):
...         total *= i
...         logging.debug('i is ' + str(i) + ', total is ' + str(total))
...     logging.debug('End of factorial(%s)' % (n))
...     return total
...
>>> print(factorial(5))
>>> logging.debug('End of program')
# 2015-05-23 16:20:12,664 - DEBUG - Start of program
# 2015-05-23 16:20:12,664 - DEBUG - Start of factorial(5)
# 2015-05-23 16:20:12,665 - DEBUG - i is 0, total is 0
# 2015-05-23 16:20:12,668 - DEBUG - i is 1, total is 0
# 2015-05-23 16:20:12,670 - DEBUG - i is 2, total is 0
# 2015-05-23 16:20:12,673 - DEBUG - i is 3, total is 0
# 2015-05-23 16:20:12,675 - DEBUG - i is 4, total is 0
# 2015-05-23 16:20:12,678 - DEBUG - i is 5, total is 0
# 2015-05-23 16:20:12,680 - DEBUG - End of factorial(5)
# 0
# 2015-05-23 16:20:12,684 - DEBUG - End of program
```

## 日志级别

日志级别提供了一种按重要性对日志消息进行分类的方法。日志级别有五种，从最不重要到最重要的顺序在表10-1中描述。每个级别的消息可以使用不同的日志函数记录。

| 级别       | 日志函数              | 描述                                                                                                                           |
| ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `DEBUG`    | `logging.debug()`    | 最低级别。用于记录细节。通常只有在诊断问题时才会关心这些消息。                 |
| `INFO`     | `logging.info()`     | 用于记录程序中的一般事件或确认程序中的某些点是否正常工作。 |
| `WARNING`  | `logging.warning()`  | 用于指示潜在问题，这些问题不会阻止程序运行，但将来可能会。              |
| `ERROR`    | `logging.error()`    | 用于记录导致程序无法执行某些操作的错误。                                                       |
| `CRITICAL` | `logging.critical()` | 最高级别。用于指示致命错误，这些错误已经或即将导致程序完全停止运行。   |

## 禁用日志记录

在调试完程序后，你可能不希望所有这些日志消息充斥屏幕。logging.disable() 函数可以禁用这些日志消息，这样你就不必手动进入程序并删除所有的日志调用。

```python
>>> import logging

>>> logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
>>> logging.critical('Critical error! Critical error!')
# 2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!

>>> logging.disable(logging.CRITICAL)
>>> logging.critical('Critical error! Critical error!')
>>> logging.error('Error! Error!')
```
## 日志记录到文件

与其将日志消息显示到屏幕上，你可以将它们写入到一个文本文件中。`logging.basicConfig()` 函数接受一个 filename 关键字参数，如下所示：

```python
>>> import logging
>>> logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

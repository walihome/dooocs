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

The 116 is the return value from the `write()` method, since 116 characters were written to the file. The `traceback` text was written to errorInfo.txt.

    Traceback (most recent call last):
      File "<pyshell#28>", line 2, in <module>
    Exception: This is the error message.

## Assertions

An assertion is a sanity check to make sure your code isn’t doing something obviously wrong. These sanity checks are performed by `assert` statements. If the sanity check fails, then an `AssertionError` exception is raised. In code, an `assert` statement consists of the following:

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

In plain English, an assert statement says, “I assert that this condition holds true, and if not, there is a bug somewhere in the program.” Unlike exceptions, your code should not handle assert statements with try and except; if an assert fails, your program should crash. By failing fast like this, you shorten the time between the original cause of the bug and when you first notice the bug. This will reduce the amount of code you will have to check before finding the code that’s causing the bug.

### Disabling Assertions

Assertions can be disabled by passing the `-O` option when running Python.

## Logging

To enable the `logging` module to display log messages on your screen as your program runs, copy the following to the top of your program:

```python
>>> import logging
>>> logging.basicConfig(level=logging.DEBUG, format=' %(asctime)s - %(levelname)s- %(message)s')
```

Say you wrote a function to calculate the factorial of a number. In mathematics, factorial 4 is 1 × 2 × 3 × 4, or 24. Factorial 7 is 1 × 2 × 3 × 4 × 5 × 6 × 7, or 5,040. Open a new file editor window and enter the following code. It has a bug in it, but you will also enter several log messages to help yourself figure out what is going wrong. Save the program as factorialLog.py.

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

## Logging Levels

Logging levels provide a way to categorize your log messages by importance. There are five logging levels, described in Table 10-1 from least to most important. Messages can be logged at each level using a different logging function.

| Level      | Logging Function     | Description                                                                                                                    |
| ---------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `DEBUG`    | `logging.debug()`    | The lowest level. Used for small details. Usually you care about these messages only when diagnosing problems.                 |
| `INFO`     | `logging.info()`     | Used to record information on general events in your program or confirm that things are working at their point in the program. |
| `WARNING`  | `logging.warning()`  | Used to indicate a potential problem that doesn’t prevent the program from working but might do so in the future.              |
| `ERROR`    | `logging.error()`    | Used to record an error that caused the program to fail to do something.                                                       |
| `CRITICAL` | `logging.critical()` | The highest level. Used to indicate a fatal error that has caused or is about to cause the program to stop running entirely.   |

## Disabling Logging

After you’ve debugged your program, you probably don’t want all these log messages cluttering the screen. The logging.disable() function disables these so that you don’t have to go into your program and remove all the logging calls by hand.

```python
>>> import logging

>>> logging.basicConfig(level=logging.INFO, format=' %(asctime)s -%(levelname)s - %(message)s')
>>> logging.critical('Critical error! Critical error!')
# 2015-05-22 11:10:48,054 - CRITICAL - Critical error! Critical error!

>>> logging.disable(logging.CRITICAL)
>>> logging.critical('Critical error! Critical error!')
>>> logging.error('Error! Error!')
```

## Logging to a File

Instead of displaying the log messages to the screen, you can write them to a text file. The `logging.basicConfig()` function takes a filename keyword argument, like so:

```python
>>> import logging
>>> logging.basicConfig(filename='myProgramLog.txt', level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')
```

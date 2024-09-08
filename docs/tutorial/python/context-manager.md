---
title: Python 上下文管理器
order: 19
description: 虽然 Python 的上下文管理器被广泛使用，但很少有人理解其使用目的。这些语句通常用于读写文件，帮助应用程序节省系统内存并通过确保特定资源仅在某些进程中使用来改善资源管理。
---


# Python 上下文管理器

虽然 Python 的上下文管理器被广泛使用，但很少有人理解其使用目的。这些语句通常用于读写文件，帮助应用程序节省系统内存并通过确保特定资源仅在某些进程中使用来改善资源管理。

## with 语句

上下文管理器是一个在上下文（代码块）开始和结束时被通知的对象。你通常使用 `with` 语句来使用它。它负责通知。

例如，文件对象是上下文管理器。当上下文结束时，文件对象会自动关闭：

```python
>>> with open(filename) as f:
...     file_contents = f.read()
...
>>> # the open_file object has automatically been closed.
```
任何导致代码块执行结束的情况都会调用上下文管理器的退出方法。这包括异常，当错误导致你提前退出打开的文件或连接时，这会很有用。未能正确关闭文件/连接而退出脚本是一个坏主意，可能会导致数据丢失或其他问题。通过使用上下文管理器，你可以确保始终采取预防措施以防止这种方式的损坏或丢失。

## 编写你自己的上下文管理器

也可以使用生成器语法编写上下文管理器，这要归功于 `contextlib.contextmanager` 装饰器：

```python
>>> import contextlib
>>> @contextlib.contextmanager
... def context_manager(num):
...     print('Enter')
...     yield num + 1
...     print('Exit')
...
>>> with context_manager(2) as cm:
...     # the following instructions are run when
...     # the 'yield' point of the context manager is
...     # reached. 'cm' will have the value that was yielded
...     print('Right in the middle with cm = {}'.format(cm))
...
# Enter
# Right in the middle with cm = 3
# Exit
```


## 基于类的上下文管理器

你可以定义基于类的上下文管理器。关键方法是 `__enter__` 和 `__exit__`
```python
class ContextManager:
    def __enter__(self, *args, **kwargs):
        print("--enter--")

    def __exit__(self, *args):
        print("--exit--")


with ContextManager():
    print("test")
#--enter--
#test
#--exit--
```

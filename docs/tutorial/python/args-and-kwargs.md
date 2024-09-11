---
title: Python 入参
order: 17
description: args 和 kwargs 可能看起来很吓人，但实际上它们并不难理解，并且能够赋予你的函数灵活性和可读性
---

# Python 入参（Args and Kwargs）

[Python args 和 kwargs 简单易懂](https://docs.python.org/3/tutorial/index.html)
  
`*args` 和 `**kwargs` 可能看起来很吓人，但实际上它们并不难理解，并且能够赋予你的函数灵活性。

## Args 和 Kwargs

`*args` 和 `**kwargs` 允许你在调用函数时传递不确定数量的参数和关键字。

```python
>>> def some_function(*args, **kwargs):
...     pass
...
>>> # call some_function with any number of arguments
>>> some_function(arg1, arg2, arg3)

>>> # call some_function with any number of keywords
>>> some_function(key1=arg1, key2=arg2, key3=arg3)

>>> # call both, arguments and keywords
>>> some_function(arg, key1=arg1)

>>> # or none
>>> some_function()
```
> Python 规约
> 代码中的 `*args` 和 `**kwargs`" 是一种惯例。它们不是由解释器强制的，而是被 Python 社区认为是良好的实践。


## args 入参

你可以通过`args`变量访问参数：

```python
>>> def some_function(*args):
...     print(f'Arguments passed: {args} as {type(args)}')
...
>>> some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## kwargs

关键词通过 `kwargs` 变量访问：

```python
>>> def some_function(**kwargs):
...     print(f'keywords: {kwargs} as {type(kwargs)}')
...
>>> some_function(key1='arg1', key2='arg2')
# keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```

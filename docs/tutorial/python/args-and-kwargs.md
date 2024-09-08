---
title: Python入参
order: 17
description: args 和 kwargs 可能看起来很吓人，但实际上它们并不难理解，并且能够赋予你的函数灵活性和可读性
---

# Python入参（Args and Kwargs）

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

<base-warning>
  <base-warning-title>
    Python conventions
  </base-warning-title>
  <base-warning-content>
    The words <code>*args</code> and <code>**kwargs</code> are conventions. They are not imposed by the interpreter, but considered good practice by the Python community.
  </base-warning-content>
</base-warning>

## args

You can access the _arguments_ through the `args` variable:

```python
>>> def some_function(*args):
...     print(f'Arguments passed: {args} as {type(args)}')
...
>>> some_function('arg1', 'arg2', 'arg3')
# Arguments passed: ('arg1', 'arg2', 'arg3') as <class 'tuple'>
```

## kwargs

Keywords are accessed through the `kwargs` variable:

```python
>>> def some_function(**kwargs):
...     print(f'keywords: {kwargs} as {type(kwargs)}')
...
>>> some_function(key1='arg1', key2='arg2')
# keywords: {'key1': 'arg1', 'key2': 'arg2'} as <class 'dict'>
```

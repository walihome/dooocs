---
title: Python 装饰器
order: 18
description: Python 装饰器是一种语法，提供了一种简洁且可重用的方式来扩展函数或类。
---


# Python 装饰器

Python 装饰器提供了一种简洁且可重用的方式来扩展函数或类。

## 基本装饰器

最简单形式的装饰器是一个函数，它接受另一个函数作为参数并返回一个包装器。以下示例展示了装饰器的创建及其使用。

```python
def your_decorator(func):
  def wrapper():
    # Do stuff before func...
    print("Before func!")
    func()
    # Do stuff after func...
    print("After func!")
  return wrapper

@your_decorator
def foo():
  print("Hello World!")

foo()
# Before func!
# Hello World!
# After func!
```

## 带参数的函数装饰器

```python
def your_decorator(func):
  def wrapper(*args,**kwargs):
    # Do stuff before func...
    print("Before func!") 
    func(*args,**kwargs)
    # Do stuff after func...
    print("After func!")
  return wrapper

@your_decorator
def foo(bar):
  print("My name is " + bar)

foo("Jack")

# Before func!
# My name is Jack
# After func!
```

## 基本装饰器模板

此模板适用于大多数装饰器的使用情况。它适用于有或没有参数的函数，以及有或没有返回值的函数。

```python
import functools

def your_decorator(func):
  @functools.wraps(func) # For preserving the metadata of func.
  def wrapper(*args,**kwargs):
    # Do stuff before func...
    result = func(*args,**kwargs)
    # Do stuff after func..
    return result
  return wrapper
```

## 带参数的装饰器

你也可以为装饰器定义参数来使用。

```python
import functools

def your_decorator(arg):
  def decorator(func):
    @functools.wraps(func) # For preserving the metadata of func.
    def wrapper(*args,**kwargs):
      # Do stuff before func possibly using arg...
      result = func(*args,**kwargs)
      # Do stuff after func possibly using arg...
      return result
    return wrapper
  return decorator
```

要使用这个装饰器：

```python
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## 基于类的装饰器

装饰器也可以定义为类而不是方法。这对于维护和更新状态非常有用，例如在以下示例中，我们计算对方法的调用次数：

```python
class CountCallNumber:

  def __init__(self, func):
    self.func = func
    self.call_number = 0

  def __call__(self, *args, **kwargs):
    self.call_number += 1
    print("This is execution number " + str(self.call_number))
    return self.func(*args, **kwargs)

@CountCallNumber
def say_hi(name):
  print("Hi! My name is " + name)

say_hi("Jack")
# This is execution number 1
# Hi! My name is Jack

say_hi("James")
# This is execution number 2
# Hi! My name is James
```

  
计数示例

此计数示例的灵感来自于 Patrick Loeber 的 [YouTube 教程](https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV)。








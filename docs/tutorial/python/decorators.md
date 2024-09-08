---
title: Python装饰器
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

## Decorator for a function with parameters

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

## Template for a basic decorator

This template is useful for most decorator use-cases. It is valid for functions with or without parameters, and with or without a return value.

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

## Decorator with parameters

You can also define parameters for the decorator to use.

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

To use this decorator:

```python
@your_decorator(arg = 'x')
def foo(bar):
  return bar
```

## Class based decorators

A decorator can also be defined as a class instead of a method. This is useful for maintaining and updating a state, such as in the following example, where we count the number of calls made to a method:

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

  
    Count Example
  
  
  This count example is inspired by Patrick Loeber's <a href="https://youtu.be/HGOBQPFzWKo?si=IUvFzeQbzTmeEgKV" target="_blank">YouTube tutorial</a>.
  









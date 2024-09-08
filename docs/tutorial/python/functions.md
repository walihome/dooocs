---
title: Python 函数 
order: 4
description: 在Python中，函数是一块用于执行单一任务的有组织的代码。
---

# Python 函数

[编程基础/函数](https://en.wikiversity.org/wiki/Programming_Fundamentals/Functions)
函数是一块用于执行单一任务的有组织的代码。它们为你的应用程序提供了更好的模块化和可重用性。


## 函数参数

函数可以接受`参数`和`返回值`：

在以下示例中，函数 **say_hello** 接收参数 "name" 并打印问候语：

```python
>>> def say_hello(name):
...    print(f'Hello {name}')
...
>>> say_hello('Carlos')
# Hello Carlos

>>> say_hello('Wanda')
# Hello Wanda

>>> say_hello('Rose')
# Hello Rose
```

## 关键字参数

为了提高代码的可读性，我们应该尽可能明确。我们可以通过使用 `关键字参数` 来实现这一点：

```python
>>> def say_hi(name, greeting):
...    print(f"{greeting} {name}")
...
>>> # without keyword arguments
>>> say_hi('John', 'Hello')
# Hello John

>>> # with keyword arguments
>>> say_hi(name='Anna', greeting='Hi')
# Hi Anna
```

## 返回值

当使用 `def` 语句创建函数时，可以使用 `return` 语句指定返回值。一个 `return` 语句包括以下内容：

- `return` 关键字。

- 函数应返回的值或表达式。

```python
>>> def sum_two_numbers(number_1, number_2):
...    return number_1 + number_2
...
>>> result = sum_two_numbers(7, 8)
>>> print(result)
# 15
```

## 局部和全局作用域

- 全局作用域中的代码不能使用任何局部变量。

- 然而，局部作用域可以访问全局变量。

- 函数的局部作用域中的代码不能使用任何其他局部作用域中的变量。

- 你可以在不同的作用域中使用相同的变量名。也就是说，可以有一个名为 spam 的局部变量和一个名为 spam 的全局变量。

```python
global_variable = 'I am available everywhere'

>>> def some_function():
...     print(global_variable)  # because is global
...     local_variable = "only available within this function"
...     print(local_variable)
...
>>> # 以下代码将引发错误，因为
>>> # 'local_variable' 仅在 'some_function' 内部存在
>>> print(local_variable)
Traceback (most recent call last):
  File "<stdin>", line 10, in <module>
NameError: name 'local_variable' is not defined
```

## global 语句

如果你需要从函数内部修改全局变量，请使用 `global` 语句：

```python
>>> def spam():
...     global eggs
...     eggs = 'spam'
...
>>> eggs = 'global'
>>> spam()
>>> print(eggs)
```

有四条规则可以判断一个变量是在局部作用域还是全局作用域：

1. 如果一个变量在全局作用域中使用（即在所有函数之外），那么它始终是一个全局变量。

1. 如果在函数中有一个针对该变量的 global 语句，那么它是一个全局变量。

1. 否则，如果该变量在函数中的赋值语句中使用，那么它是一个局部变量。

1. 但是如果该变量没有在赋值语句中使用，那么它是一个全局变量。
## Lambda 函数

在 Python 中，lambda 函数是一个单行的匿名函数，它可以有任意数量的参数，但只能有一个表达式。

来自 [Python 3 教程](https://docs.python.org/3/library/ast.html?highlight=lambda#function-and-class-definitions)

lambda 是一个可以在表达式中使用的最小函数定义。与 FunctionDef 不同，body 只包含一个节点。
> 单行表达式

> Lambda 函数只能计算一个表达式，就像一行代码一样。

这个函数：

```python
>>> def add(x, y):
...     return x + y
...
>>> add(5, 3)
# 8
```

等价于以下 lambda 函数：

```python
>>> add = lambda x, y: x + y
>>> add(5, 3)
# 8
```

与常规嵌套函数一样，lambda 也作为词法闭包工作：

```python
>>> def make_adder(n):
...     return lambda x: x + n
...
>>> plus_3 = make_adder(3)
>>> plus_5 = make_adder(5)

>>> plus_3(4)
# 7
>>> plus_5(4)
# 9
```

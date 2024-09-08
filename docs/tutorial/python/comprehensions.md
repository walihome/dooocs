---
title: Python 推导式
order: 8
description: 列表推导式提供了一种简洁的方式来创建列表
---

# Python 推导式

列表推导式是一种特殊的语法，它让我们可以从其他列表中创建列表，在处理数字和一到两层嵌套的for循环时非常有用。
> 来自Python 3 [教程](https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions)
> 列表推导式提供了一种简洁的方式来创建列表。[...] 或者创建满足某些条件的子序列。


## 列表推导式

这是我们如何使用For循环从现有集合创建新列表的方法：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George']

>>> new_list = []
>>> for n in names:
...     new_list.append(n)
...
>>> new_list
# ['Charles', 'Susan', 'Patrick', 'George']
```

And this is how we do the same with a List Comprehension:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George']

>>> new_list = [n for n in names]
>>> new_list
# ['Charles', 'Susan', 'Patrick', 'George']
```

We can do the same with numbers:

```python
>>> n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
>>> n
# [(1, 1), (1, 2), (2, 1), (2, 2)]
```

## Adding conditionals

If we want `new_list` to have only the names that start with C, with a for loop, we would do it like this:

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George', 'Carol']

>>> new_list = []
>>> for n in names:
...     if n.startswith('C'):
...         new_list.append(n)
...
>>> print(new_list)
# ['Charles', 'Carol']
```

In a List Comprehension, we add the `if` statement at the end:

```python
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

To use an `if-else` statement in a List Comprehension:

```python
>>> nums = [1, 2, 3, 4, 5, 6]
>>> new_list = [num*2 if num % 2 == 0 else num for num in nums]
>>> print(new_list)
# [1, 4, 3, 8, 5, 12]
```


  
    Set and Dict comprehensions
  
  
    The basics of `list` comprehensions also apply to <b>sets</b> and <b>dictionaries</b>.
  


## Set comprehension

```python
>>> b = {"abc", "def"}
>>> {s.upper() for s in b}
{"ABC", "DEF"}
```

## Dict comprehension

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> {v: k for k, v in c.items()}
{'Pooka': 'name', 5: 'age'}
```

A List comprehension can be generated from a dictionary:

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> ["{}:{}".format(k.upper(), v) for k, v in c.items()]
['NAME:Pooka', 'AGE:5']
```

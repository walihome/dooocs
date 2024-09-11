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

这就是我们使用列表推导式来实现相同功能的方式：

```python
>>> names = ['Charles', 'Susan', 'Patrick', 'George']

>>> new_list = [n for n in names]
>>> new_list
# ['Charles', 'Susan', 'Patrick', 'George']
```

我们也可以用数字来做同样的事情：

```python
>>> n = [(a, b) for a in range(1, 3) for b in range(1, 3)]
>>> n
# [(1, 1), (1, 2), (2, 1), (2, 2)]
```

## 添加条件语句

如果我们想要`new_list`只包含以C开头的名字，我们可以使用for循环这样做：

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

在列表推导式中，我们将`if`语句放在末尾：

```python
>>> new_list = [n for n in names if n.startswith('C')]
>>> print(new_list)
# ['Charles', 'Carol']
```

在列表推导式中使用 `if-else` 语句：

```python
>>> nums = [1, 2, 3, 4, 5, 6]
>>> new_list = [num*2 if num % 2 == 0 else num for num in nums]
>>> print(new_list)
# [1, 4, 3, 8, 5, 12]
```


> 集合「sets」和字典「dictionaries」推导式
  
> `list` 推导式的基础也适用于 `sets` 和 `dictionaries`.
  


## Set 推导式

```python
>>> b = {"abc", "def"}
>>> {s.upper() for s in b}
{"ABC", "DEF"}
```

## Dict 推导式

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> {v: k for k, v in c.items()}
{'Pooka': 'name', 5: 'age'}
```

列表推导式可以从字典生成：

```python
>>> c = {'name': 'Pooka', 'age': 5}
>>> ["{}:{}".format(k.upper(), v) for k, v in c.items()]
['NAME:Pooka', 'AGE:5']
```

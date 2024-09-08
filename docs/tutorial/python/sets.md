---
title: Python Set集合
order: 7
description: Python自带几种内置数据类型来帮助我们组织数据。这些结构包括列表、字典、元组和集合。
---

# Python Set集合
Python自带几种内置数据类型来帮助我们组织数据。这些结构包括列表、字典、元组和**集合**。

来自Python 3 [文档](https://docs.python.org/3/tutorial/datastructures.html#sets)

集合是一种无序且不包含重复元素的集合。基本用途包括成员资格测试和消除重复条目。

## 初始化集合

有两种方法可以创建集合：使用花括号 `{}` 和内置函数 `set()`

>     空集合
>     创建集合时，请确保不要使用空花括号 <code>{}</code>，否则你将得到一个空字典。


```python
>>> s = {1, 2, 3}
>>> s = set([1, 2, 3])

>>> s = set()  # 这样可以创建一个空集合
>>> type(s)
# <class 'dict'>
```

## 无序的唯一元素集合

集合会自动删除所有重复的值。

```python
>>> s = {1, 2, 3, 2, 3, 4}
>>> s
# {1, 2, 3, 4}
```

作为一种无序的数据类型，它们不能被索引。

```python
>>> s = {1, 2, 3}
>>> s[0]
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: 'set' object does not support indexing
```

## 集合的添加和更新

使用 `add()` 方法我们可以向集合中添加一个元素。

```python
>>> s = {1, 2, 3}
>>> s.add(4)
>>> s
# {1, 2, 3, 4}
```

使用 `update()` 方法可以一次添加多个元素：

```python
>>> s = {1, 2, 3}
>>> s.update([2, 3, 4, 5, 6])
>>> s
# {1, 2, 3, 4, 5, 6}
```
## 集合的删除和丢弃

这两种方法都会从集合中删除一个元素，但如果该值不存在，`remove()` 会引发 `key error`。

```python
>>> s = {1, 2, 3}
>>> s.remove(3)
>>> s
# {1, 2}

>>> s.remove(3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 3
```

`discard()` 不会引发任何错误。

```python
>>> s = {1, 2, 3}
>>> s.discard(3)
>>> s
# {1, 2}
>>> s.discard(3)
```

## 集合的并集

`union()` 或 `|` 将创建一个包含提供的所有集合元素的新集合。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {3, 4, 5}
>>> s1.union(s2)  # or 's1 | s2'
# {1, 2, 3, 4, 5}
```

## 集合的交集

`intersection()` 或 `&` 将返回一个仅包含所有集合中共同元素的新集合。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s3 = {3, 4, 5}
>>> s1.intersection(s2, s3)  # or 's1 & s2 & s3'
# {3}
```
## 集合的差集

`difference()` 或 `-` 将返回仅在第一个集合（调用集合）中独有的元素。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}

>>> s1.difference(s2)  # or 's1 - s2'
# {1}

>>> s2.difference(s1) # or 's2 - s1'
# {4}
```

## 集合的对称差集

`symmetric_difference()` 或 `^` 将返回所有不相同的元素。

```python
>>> s1 = {1, 2, 3}
>>> s2 = {2, 3, 4}
>>> s1.symmetric_difference(s2)  # or 's1 ^ s2'
# {1, 4}
```

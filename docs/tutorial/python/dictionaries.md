---
title: Python 字典
order: 6
description: In Python, a dictionary is an insertion-ordered (from Python > 3.7) collection of key, value pairs.
---


# Python 字典

在 Python 中，字典是一个有序的（从 Python > 3.7 开始）键值对集合。
来自 Python 3 [文档](https://docs.python.org/3/tutorial/datastructures.html#dictionaries)
> 字典的主要操作是使用某个键存储一个值，并在给定键的情况下提取该值。也可以使用 `del` 删除键值对。


示例字典：

```python
my_cat = {
    'size': 'fat',
    'color': 'gray',
    'disposition': 'loud'
}
```

## 使用下标运算符 `[]` 设置键值对

```python
>>> my_cat = {
...  'size': 'fat',
...  'color': 'gray',
...  'disposition': 'loud',
... }
>>> my_cat['age_years'] = 2
>>> print(my_cat)
...
# {'size': 'fat', 'color': 'gray', 'disposition': 'loud', 'age_years': 2}
```

## 使用下标运算符 `[]` 获取值

如果字典中不存在该键，则会引发 [`KeyError`](https://docs.python.org/3/library/exceptions.html#KeyError) 异常。

```python
>>> my_cat = {
...  'size': 'fat',
...  'color': 'gray',
...  'disposition': 'loud',
... }
>>> print(my_cat['size'])
...
# fat
>>> print(my_cat['eye_color'])
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# KeyError: 'eye_color'
```

## values()

`values()` 方法获取字典的 **值**：

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for value in pet.values():
...     print(value)
...
# red
# 42
```

## keys()

`keys()` 方法获取字典的 **键**：

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for key in pet.keys():
...     print(key)
...
# color
# age
```

无需使用 **.keys()** ，因为默认情况下会循环遍历键：

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for key in pet:
...     print(key)
...
# color
# age
```

## items()

`items()` 方法获取字典的 **键值对** 并返回一个元组：

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for item in pet.items():
...     print(item)
...
# ('color', 'red')
# ('age', 42)
```

使用 `keys()`, `values()`, 和 `items()` 方法，for 循环可以迭代字典的键、值或键值对，分别。

```python
>>> pet = {'color': 'red', 'age': 42}
>>> for key, value in pet.items():
...     print(f'Key: {key} Value: {value}')
...
# Key: color Value: red
# Key: age Value: 42
```

## get()

`get()` 方法返回给定键的值。如果键不存在，则返回 `None`：

```python
>>> wife = {'name': 'Rose', 'age': 33}

>>> f'My wife name is {wife.get("name")}'
# 'My wife name is Rose'

>>> f'She is {wife.get("age")} years old.'
# 'She is 33 years old.'

>>> f'She is deeply in love with {wife.get("husband")}'
# 'She is deeply in love with None'
```

你还可以将默认的 `None` 值更改为你自己的值：

```python
>>> wife = {'name': 'Rose', 'age': 33}

>>> f'She is deeply in love with {wife.get("husband", "lover")}'
# 'She is deeply in love with lover'
```

## Adding items with setdefault()

可以使用以下方法将项目添加到字典中：

```python
>>> wife = {'name': 'Rose', 'age': 33}
>>> if 'has_hair' not in wife:
...     wife['has_hair'] = True
```

使用 `setdefault` 方法，我们可以使相同的代码更短：

```python
>>> wife = {'name': 'Rose', 'age': 33}
>>> wife.setdefault('has_hair', True)
>>> wife
# {'name': 'Rose', 'age': 33, 'has_hair': True}
```

## Removing Items

### pop()

`pop()` 方法根据给定的键删除并返回一个项目。

```python
>>> wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
>>> wife.pop('age')
# 33
>>> wife
# {'name': 'Rose', 'hair': 'brown'}
```

### popitem()

`popitem()` 方法删除字典中的最后一项并返回它。

```python
>>> wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
>>> wife.popitem()
# ('hair', 'brown')
>>> wife
# {'name': 'Rose', 'age': 33}
```

### del()

`del()` 方法根据给定的键删除一个项目。

```python
>>> wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
>>> del wife['age']
>>> wife
# {'name': 'Rose', 'hair': 'brown'}
```

### clear()

`clear()` 方法删除字典中的所有项目。

```python
>>> wife = {'name': 'Rose', 'age': 33, 'hair': 'brown'}
>>> wife.clear()
>>> wife
# {}
```

## 检查字典中的键

```python
>>> person = {'name': 'Rose', 'age': 33}

>>> 'name' in person.keys()
# True

>>> 'height' in person.keys()
# False

>>> 'skin' in person # You can omit keys()
# False
```

## 检查字典中的值

```python
>>>  person = {'name': 'Rose', 'age': 33}

>>> 'Rose' in person.values()
# True

>>> 33 in person.values()
# True
```

## 打印

```python
>>> import pprint

>>> wife = {'name': 'Rose', 'age': 33, 'has_hair': True, 'hair_color': 'brown', 'height': 1.6, 'eye_color': 'brown'}
>>> pprint.pprint(wife)
# {'age': 33,
#  'eye_color': 'brown',
#  'hair_color': 'brown',
#  'has_hair': True,
#  'height': 1.6,
#  'name': 'Rose'}
```

## 合并两个字典

对于 Python 3.5+：

```python
>>> dict_a = {'a': 1, 'b': 2}
>>> dict_b = {'b': 3, 'c': 4}
>>> dict_c = {**dict_a, **dict_b}
>>> dict_c
# {'a': 1, 'b': 3, 'c': 4}
```

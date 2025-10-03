---
title: 集合
category: python
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 集合

## 💡 什么是集合(Set)

**集合(Set)** 是一种特殊的数据容器,它有两个重要特点:
- **元素唯一**: 不允许重复的元素存在
- **无序**: 元素没有固定的位置

::: tip 生活中的集合
想象一个装弹珠的袋子,即使你放入两颗一模一样的红色弹珠,袋子里也只会保留一颗。而且从袋子里倒出弹珠时,顺序是随机的。
:::

## 创建集合

### 使用花括号创建

```python{1,4,7}
# 创建一个水果集合
fruits = {'apple', 'banana', 'orange'}
print(fruits)
# 输出: {'apple', 'banana', 'orange'} (顺序可能不同)

# 自动去重
numbers = {1, 2, 2, 3, 3, 3}
print(numbers)
# 输出: {1, 2, 3}
```

::: warning 注意
空的花括号 `{}` 不是集合,而是字典(Dictionary)! 创建空集合要用 `set()`
:::

### 使用 set() 函数

```python{1,4,7}
# 创建空集合
empty_set = set()
print(empty_set)
# 输出: set()

# 从列表创建集合
my_list = [1, 2, 2, 3, 4, 4, 5]
my_set = set(my_list)
print(my_set)
# 输出: {1, 2, 3, 4, 5}
```

## 添加元素

### 添加单个元素 - add()

```python{2,5}
fruits = {'apple', 'banana'}
fruits.add('orange')
print(fruits)
# 输出: {'apple', 'banana', 'orange'}

fruits.add('apple')  # 添加已存在的元素
print(fruits)
# 输出: {'apple', 'banana', 'orange'} (没有变化)
```

### 添加多个元素 - update()

```python{2,6}
fruits = {'apple'}
fruits.update(['banana', 'orange', 'grape'])
print(fruits)
# 输出: {'apple', 'banana', 'orange', 'grape'}

fruits.update(['apple', 'mango'])  # 'apple'已存在会被忽略
print(fruits)
# 输出: {'apple', 'banana', 'orange', 'grape', 'mango'}
```

## 删除元素

### remove() - 删除指定元素

```python{2}
fruits = {'apple', 'banana', 'orange'}
fruits.remove('banana')
print(fruits)
# 输出: {'apple', 'orange'}
```

::: danger 警告
如果删除不存在的元素,会报错!
```python
fruits.remove('mango')  # KeyError: 'mango'
```
:::

### discard() - 安全删除

```python{2,5}
fruits = {'apple', 'banana', 'orange'}
fruits.discard('banana')
print(fruits)
# 输出: {'apple', 'orange'}

fruits.discard('mango')  # 不存在也不会报错
print(fruits)
# 输出: {'apple', 'orange'}
```

### pop() - 随机删除

```python{2}
fruits = {'apple', 'banana', 'orange'}
removed = fruits.pop()  # 随机删除一个元素
print(f"删除了: {removed}")
print(f"剩余: {fruits}")
```

### clear() - 清空集合

```python{2}
fruits = {'apple', 'banana', 'orange'}
fruits.clear()
print(fruits)
# 输出: set()
```

## 检查元素

### 使用 in 关键字

```python{2-3,6-7}
fruits = {'apple', 'banana', 'orange'}
print('apple' in fruits)
# 输出: True

print('mango' in fruits)
# 输出: False
```

### 获取集合长度

```python{2}
fruits = {'apple', 'banana', 'orange'}
print(len(fruits))
# 输出: 3
```

## 集合运算

### 并集(Union) - 所有元素

```python{3,6}
set1 = {1, 2, 3}
set2 = {3, 4, 5}
result = set1 | set2
print(result)
# 输出: {1, 2, 3, 4, 5}

result = set1.union(set2)  # 另一种写法
print(result)
```

### 交集(Intersection) - 共同元素

```python{3,6}
set1 = {1, 2, 3}
set2 = {3, 4, 5}
result = set1 & set2
print(result)
# 输出: {3}

result = set1.intersection(set2)  # 另一种写法
print(result)
```

### 差集(Difference) - 独有元素

```python{3,6}
set1 = {1, 2, 3}
set2 = {3, 4, 5}
result = set1 - set2  # set1有但set2没有的
print(result)
# 输出: {1, 2}

result = set2 - set1  # set2有但set1没有的
print(result)
# 输出: {4, 5}
```

## 遍历集合

```python{2-3}
fruits = {'apple', 'banana', 'orange'}
for fruit in fruits:
    print(fruit)
# 输出顺序不固定
```

::: tip 提示
因为集合是无序的,每次遍历的顺序可能不同
:::

## 💪 练习题

### 练习 1: 去除重复
创建一个程序,接收用户输入的多个数字(用空格分隔),输出去重后的数字。

<details>
<summary>点击查看答案</summary>

```python
# 接收输入
user_input = input("请输入数字(用空格分隔): ")
# 分割成列表
numbers = user_input.split()
# 转换为整数集合
number_set = set(int(num) for num in numbers)
# 输出结果
print(f"去重后: {sorted(number_set)}")
```

运行示例:
```
请输入数字(用空格分隔): 1 2 3 2 4 3 5
去重后: [1, 2, 3, 4, 5]
```

</details>

### 练习 2: 找出共同好友
假设小明的好友是 `{'Tom', 'Jerry', 'Bob'}`,小红的好友是 `{'Jerry', 'Alice', 'Bob'}`,找出他们的共同好友。

<details>
<summary>点击查看答案</summary>

```python
xiaoming_friends = {'Tom', 'Jerry', 'Bob'}
xiaohong_friends = {'Jerry', 'Alice', 'Bob'}

common_friends = xiaoming_friends & xiaohong_friends
print(f"共同好友: {common_friends}")
# 输出: 共同好友: {'Jerry', 'Bob'}
```

</details>

## 📌 小结

- **集合(Set)** 存储唯一且无序的元素
- 使用 `{}` 或 `set()` 创建,空集合必须用 `set()`
- 常用操作: `add()` 添加、`remove()`/`discard()` 删除、`in` 检查
- 支持数学运算: 并集 `|`、交集 `&`、差集 `-`
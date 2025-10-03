---
title: 基本语法
category: python
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 基本语法

## 定义变量(Variable)

### 💡 概念说明

**变量(Variable)**就像一个带标签的盒子,可以存放数据。你给盒子起个名字,就能随时取用里面的内容。

```python
name = "Alice"
age = 25
height = 1.68
is_student = True
```

### 📝 代码示例

```python{1-4}
name = "张三"
age = 18
score = 95.5
is_pass = True

print(name)
print(age)
```

**运行结果:**
```
张三
18
```

::: tip 命名规则
- 只能包含字母、数字、下划线
- 不能以数字开头
- 区分大小写:`Name` 和 `name` 是不同的变量
:::

## 输出变量(Print)

### 💡 概念说明

使用 `print()` 函数将变量内容显示在屏幕上。

### 📝 代码示例

```python{1-2,5-8}
username = "小明"
score = 88

# 输出单个变量
print(username)

# 输出多个变量
print("姓名:", username, "分数:", score)

# 输出计算结果
print("总分:", score + 12)
```

**运行结果:**
```
小明
姓名: 小明 分数: 88
总分: 100
```

::: tip 快捷输出
`print()` 可以同时输出多个内容,用逗号隔开,Python会自动在它们之间加空格
:::

## 增加注释(Comment)

### 💡 概念说明

**注释(Comment)**是给自己看的说明文字,程序运行时会忽略它。

### 📝 代码示例

```python{1,4,7-9}
# 这是单行注释,用井号开头

age = 20  # 也可以写在代码后面
print(age)

"""
这是多行注释
可以写很多行
用三个引号包起来
"""
name = "李华"
print(name)
```

**运行结果:**
```
20
李华
```

::: warning 注意
注释不会影响程序运行,只是方便你理解代码
:::

## 日志打印(Logging)

### 💡 概念说明

初学阶段用 `print()` 就够了,它能帮你:
- 查看变量的值
- 检查程序运行到哪一步
- 发现代码问题

### 📝 代码示例

```python{1-2,5,8}
x = 10
y = 20

# 检查计算过程
print("计算前 x =", x, "y =", y)

result = x + y
print("计算后 result =", result)

# 检查数据类型
print("result 的类型是:", type(result))
```

**运行结果:**
```
计算前 x = 10 y = 20
计算后 result = 30
result 的类型是: <class 'int'>
```

## 💪 练习题

### 练习1:个人信息卡

创建变量存储你的信息并输出:
- 姓名
- 年龄  
- 身高(米)
- 是否是学生

::: details 查看答案
```python
# 定义个人信息
name = "王芳"
age = 22
height = 1.65
is_student = True

# 输出信息
print("姓名:", name)
print("年龄:", age)
print("身高:", height, "米")
print("学生身份:", is_student)
```
:::

### 练习2:简单计算器

定义两个数字变量,计算并输出它们的和、差、积:

::: details 查看答案
```python
# 定义两个数字
a = 15
b = 7

# 计算并输出
print("a + b =", a + b)  # 加法
print("a - b =", a - b)  # 减法
print("a * b =", a * b)  # 乘法
```
:::

## 📌 小结

- 用 `=` 给变量赋值,变量名在左,值在右
- 用 `print()` 输出变量,可以同时输出多个
- 用 `#` 添加注释,帮助理解代码
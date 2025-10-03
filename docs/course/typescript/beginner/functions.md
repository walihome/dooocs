---
title: 函数与方法
category: typescript
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: typescript极简教程
---

 # 函数与方法

## 💡 什么是函数(Function)

函数就像一个"代码打包盒",你可以把一段经常使用的代码放进去,需要的时候直接调用,而不用重复写很多遍。

比如:你需要多次计算不同数字的平方,与其每次都写 `数字 * 数字`,不如把这个计算过程"打包"成一个函数。

## 定义函数(Function Definition)

### 📝 基本语法

```python{1}
def 函数名():
    # 这里写函数要做的事情
    print("Hello")
```

- `def` 是定义函数的关键字
- 函数名后面必须有小括号 `()`
- 冒号 `:` 不能忘
- 函数内的代码必须缩进(按一次Tab键)

### 代码示例

```python{1-2}
def say_hello():
    print("你好,欢迎学习Python!")
```

这就定义好了一个名为 `say_hello` 的函数。但是此时它不会执行,因为你还没有"调用"它。

## 调用函数(Function Call)

定义好函数后,需要"调用"它才会执行:

```python{1-2,4}
def say_hello():
    print("你好,欢迎学习Python!")

say_hello()  # 调用函数
```

**运行结果:**
```
你好,欢迎学习Python!
```

::: tip 提示
调用函数时,函数名后面的小括号 `()` 不能省略!
:::

## 带参数的函数(Function with Parameters)

### 💡 为什么需要参数

有时候你希望函数处理不同的数据,比如打招呼时叫不同的名字,这就需要"参数"。

### 📝 代码示例

```python{1,4}
def greet(name):
    print(f"你好,{name}!")

greet("小明")  # 传入参数"小明"
```

**运行结果:**
```
你好,小明!
```

你可以多次调用,传入不同的参数:

```python{1-2,4-5}
def greet(name):
    print(f"你好,{name}!")

greet("小明")
greet("小红")
```

**运行结果:**
```
你好,小明!
你好,小红!
```

## 返回值(Return Value)

### 💡 什么是返回值

有时候你希望函数计算出一个结果并"交还"给你,这就需要 `return` 语句。

### 📝 代码示例

```python{1-2,4-5}
def calculate_square(number):
    return number * number

result = calculate_square(5)  # 函数返回25
print(f"5的平方是: {result}")
```

**运行结果:**
```
5的平方是: 25
```

::: warning 注意
如果函数没有 `return` 语句,它会返回 `None`(表示"没有值")
:::

## 多个参数(Multiple Parameters)

函数可以接收多个参数,用逗号分隔:

```python{1-2,4}
def add_numbers(a, b):
    return a + b

result = add_numbers(10, 20)
print(f"10 + 20 = {result}")
```

**运行结果:**
```
10 + 20 = 30
```

## 💪 练习题

### 练习1:定义并调用函数

编写一个函数 `introduce_yourself`,打印你的名字和年龄。

::: details 点击查看答案
```python
def introduce_yourself():
    print("我叫小明")
    print("我今年18岁")

introduce_yourself()
```
:::

### 练习2:带参数的函数

编写一个函数 `calculate_rectangle_area`,接收长和宽两个参数,返回矩形面积。

::: details 点击查看答案
```python
def calculate_rectangle_area(length, width):
    return length * width

area = calculate_rectangle_area(5, 3)
print(f"矩形面积是: {area}")
```
:::

## 📌 小结

1. **定义函数**:使用 `def 函数名():` 格式,函数内的代码要缩进
2. **调用函数**:写出函数名并加上小括号 `函数名()`
3. **参数**:让函数处理不同的数据,在小括号内定义参数
4. **返回值**:用 `return` 把计算结果交还给调用者
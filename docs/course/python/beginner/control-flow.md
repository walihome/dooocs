---
title: 控制流
category: python
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: python极简教程
---

 # 控制流

控制流(Control Flow)是让程序按照你的意图执行的工具。就像生活中的决策和重复动作一样——"如果下雨就带伞"、"每天早上刷牙"。

## for 循环

### 💡 概念说明

**for 循环(for Loop)**用于重复执行某段代码特定次数。想象你要给 5 个朋友发消息,与其手动发 5 次,不如让程序自动重复。

### 📝 代码示例

```python{1,2}
# 打印 0 到 4
for i in range(5):
    print(i)
```

**运行结果：**
```
0
1
2
3
4
```

::: tip 提示
`range(5)` 生成从 0 开始的 5 个数字(0, 1, 2, 3, 4)。Python 的计数从 0 开始。
:::

**遍历列表：**

```python{2,3}
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")
```

**运行结果：**
```
I like apple
I like banana
I like orange
```

### 💪 练习题

**练习 1**：计算 1 到 10 的总和

<details>
<summary>查看答案</summary>

```python
total = 0
for num in range(1, 11):  # range(1, 11) 生成 1 到 10
    total += num
print(f"总和是: {total}")
```

</details>

**练习 2**：打印九九乘法表的前 3 行

<details>
<summary>查看答案</summary>

```python
for i in range(1, 4):
    for j in range(1, 10):
        print(f"{i} × {j} = {i*j}", end="  ")
    print()  # 换行
```

</details>

## while 循环

### 💡 概念说明

**while 循环(while Loop)**在条件为真时持续执行,直到条件变为假。适合"不知道要重复多少次,但知道什么时候停止"的场景。

### 📝 代码示例

```python{2,3,4}
count = 0
while count < 3:
    print(f"当前计数: {count}")
    count += 1  # 每次加 1
```

**运行结果：**
```
当前计数: 0
当前计数: 1
当前计数: 2
```

::: warning 注意
必须确保循环条件最终会变为假,否则会陷入**无限循环(Infinite Loop)**。记得更新控制变量(如 `count += 1`)。
:::

**实用示例——猜数字游戏：**

```python{1,2,4,5,7}
secret = 7
guess = 0
while guess != secret:
    guess = int(input("猜一个数字: "))
    if guess < secret:
        print("太小了")
    elif guess > secret:
        print("太大了")
print("恭喜你猜对了!")
```

### 💪 练习题

**练习**：计算第一个大于 100 的 2 的幂次

<details>
<summary>查看答案</summary>

```python
power = 1
count = 0
while power <= 100:
    power *= 2
    count += 1
print(f"2 的 {count} 次方 = {power}")
```

</details>

## if 条件判断

### 💡 概念说明

**if 语句(if Statement)**根据条件决定执行哪段代码。包含三个部分:
- `if`: 如果条件成立
- `elif`: 否则如果(else if 的缩写,可选,可多个)
- `else`: 以上都不成立(可选)

### 📝 代码示例

```python{1,2,4}
age = 18
if age >= 18:
    print("成年人")
else:
    print("未成年人")
```

**多条件判断：**

```python{1,2,4,6}
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 60:
    grade = "C"
else:
    grade = "D"
print(f"你的等级是: {grade}")
```

**运行结果：**
```
你的等级是: B
```

::: tip 提示
Python 使用**缩进(Indentation)**表示代码块,通常是 4 个空格。if 语句后的代码必须缩进。
:::

**组合条件：**

```python{2,4}
temperature = 25
is_sunny = True
if temperature > 20 and is_sunny:
    print("适合出门")
```

### 💪 练习题

**练习**：判断一个年份是否为闰年(能被 4 整除但不能被 100 整除,或能被 400 整除)

<details>
<summary>查看答案</summary>

```python
year = 2024
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    print(f"{year} 是闰年")
else:
    print(f"{year} 不是闰年")
```

</details>

## 📌 小结

- **for 循环**：已知重复次数时使用,通常配合 `range()` 或遍历列表
- **while 循环**：根据条件重复执行,注意避免无限循环
- **if 语句**：根据条件选择执行路径,记得正确缩进代码块
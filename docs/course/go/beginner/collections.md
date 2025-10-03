---
title: 数组
category: go
order: 6
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 数组(Array)

## 💡 什么是数组

数组是用来存储一组相同类型数据的容器。想象一下,你有5个苹果要装起来,用5个单独的袋子太麻烦了,用一个有5个格子的盒子就方便多了——数组就是这样的"格子盒"。

数组有两个重要特点:
- **固定长度**:创建时就确定了能装多少个数据
- **相同类型**:只能装同一种类型的数据(比如都是整数,或都是字符串)

## 数组的定义

在 Go 中定义数组需要指定两个信息:数组的长度和数据类型。

### 📝 基础语法

```go
var 数组名 [长度]数据类型
```

### 📝 定义数组的三种方式

```go{3,6,9}
package main

import "fmt"

func main() {
    // 方式1: 先定义,所有元素自动初始化为零值
    var scores [5]int
    fmt.Println(scores) // 输出: [0 0 0 0 0]

    // 方式2: 定义时直接赋值
    var ages [3]int = [3]int{18, 20, 22}
    fmt.Println(ages) // 输出: [18 20 22]

    // 方式3: 简短定义(最常用)
    names := [4]string{"Alice", "Bob", "Carol", "David"}
    fmt.Println(names) // 输出: [Alice Bob Carol David]
}
```

::: tip 零值是什么
当你定义数组但没有赋值时,Go 会自动给每个位置填充"零值":
- 整数类型的零值是 `0`
- 字符串类型的零值是 `""`(空字符串)
- 布尔类型的零值是 `false`
:::

### 📝 让 Go 自动计算长度

如果你在定义时就给出了所有元素,可以用 `...` 让 Go 自动计算长度:

```go{5}
package main

import "fmt"

func main() {
    // 用 ... 代替数字,Go 会自动数有几个元素
    fruits := [...]string{"apple", "banana", "orange"}
    fmt.Println(fruits)        // 输出: [apple banana orange]
    fmt.Println(len(fruits))   // 输出: 3
}
```

## 数组的读取和修改

数组中的每个位置都有一个编号,叫做**索引(Index)**。重要的是:**索引从 0 开始**。

```
索引:   0      1      2      3      4
数组: [10]   [20]   [30]   [40]   [50]
```

### 📝 读取数组元素

```go{8-10}
package main

import "fmt"

func main() {
    prices := [4]int{100, 200, 300, 400}
    
    // 通过 数组名[索引] 来读取
    fmt.Println(prices[0])  // 输出: 100 (第1个元素)
    fmt.Println(prices[2])  // 输出: 300 (第3个元素)
}
```

### 📝 修改数组元素

```go{8-11}
package main

import "fmt"

func main() {
    scores := [3]int{85, 90, 78}
    fmt.Println("修改前:", scores) // 输出: 修改前: [85 90 78]
    
    // 通过 数组名[索引] = 新值 来修改
    scores[1] = 95
    fmt.Println("修改后:", scores) // 输出: 修改后: [85 95 78]
}
```

### 📝 遍历数组

当你想访问数组中的每个元素时,可以使用 `for` 循环配合 `len()` 函数:

```go{8-10}
package main

import "fmt"

func main() {
    numbers := [5]int{10, 20, 30, 40, 50}
    
    // len(numbers) 获取数组长度
    for i := 0; i < len(numbers); i++ {
        fmt.Printf("索引 %d 的值是 %d\n", i, numbers[i])
    }
}
```

**运行结果:**
```
索引 0 的值是 10
索引 1 的值是 20
索引 2 的值是 30
索引 3 的值是 40
索引 4 的值是 50
```

::: warning 注意索引范围
如果数组长度是 5,有效索引是 0 到 4。访问 `numbers[5]` 会导致程序崩溃(数组越界)。
:::

## 💪 练习题

### 练习 1:学生成绩管理

创建一个存储 4 名学生成绩的数组,然后将第 3 名学生的成绩从 88 改为 92,最后打印所有成绩。

::: details 查看答案
```go
package main

import "fmt"

func main() {
    grades := [4]int{85, 90, 88, 78}
    fmt.Println("修改前:", grades)
    
    grades[2] = 92  // 第3名学生的索引是2
    fmt.Println("修改后:", grades)
    
    // 输出每个学生的成绩
    for i := 0; i < len(grades); i++ {
        fmt.Printf("学生 %d 的成绩: %d\n", i+1, grades[i])
    }
}
```
:::

### 练习 2:计算平均分

创建一个包含 5 个分数的数组,计算并输出平均分。

::: details 查看答案
```go
package main

import "fmt"

func main() {
    scores := [5]int{88, 92, 78, 95, 85}
    
    // 计算总分
    sum := 0
    for i := 0; i < len(scores); i++ {
        sum = sum + scores[i]
    }
    
    // 计算平均分
    average := sum / len(scores)
    fmt.Printf("总分: %d, 平均分: %d\n", sum, average)
}
```
:::

## 📌 小结

- **数组定义**: `var 数组名 [长度]类型` 或 `数组名 := [长度]类型{值1, 值2, ...}`
- **索引从 0 开始**: 长度为 5 的数组,索引范围是 0 到 4
- **读取**: `数组名[索引]`
- **修改**: `数组名[索引] = 新值`
- **获取长度**: `len(数组名)`
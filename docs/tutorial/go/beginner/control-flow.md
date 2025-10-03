---
title: 控制流
category: go
order: 7
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 控制流(Control Flow)

程序不总是从上到下顺序执行——有时需要重复做某事,有时需要根据条件选择不同的路径。这就是控制流要解决的问题。

## for 循环(For Loop)

### 💡 概念说明

当你需要重复执行某段代码时,用 `for` 循环。Go 语言只有 `for` 一种循环,但它可以实现多种循环方式。

### 📝 基本用法

```go{4}
package main

import "fmt"

func main() {
    // 打印 5 次问候语
    for i := 0; i < 5; i++ {
        fmt.Println("你好,这是第", i+1, "次问候")
    }
}
```

**运行结果:**
```
你好,这是第 1 次问候
你好,这是第 2 次问候
你好,这是第 3 次问候
你好,这是第 4 次问候
你好,这是第 5 次问候
```

::: tip 提示
`for` 循环的三部分:`i := 0`(初始值) ; `i < 5`(继续条件) ; `i++`(每次递增)
:::

### 📝 省略初始值和递增

```go{4-7}
package main

import "fmt"

func main() {
    count := 0
    // 只保留条件部分
    for count < 3 {
        fmt.Println("计数:", count)
        count++
    }
}
```

**运行结果:**
```
计数: 0
计数: 1
计数: 2
```

### 📝 无限循环

```go{4-9}
package main

import "fmt"

func main() {
    counter := 0
    // 不写任何条件,就是无限循环
    for {
        fmt.Println("循环次数:", counter)
        counter++
        if counter >= 3 {
            break // 跳出循环
        }
    }
}
```

**运行结果:**
```
循环次数: 0
循环次数: 1
循环次数: 2
```

### 💪 练习题

**练习 1:** 用 `for` 循环计算 1 到 10 的总和,并打印结果

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    sum := 0
    for i := 1; i <= 10; i++ {
        sum = sum + i
    }
    fmt.Println("1到10的总和是:", sum)
}
```

</details>

**练习 2:** 打印 1 到 20 之间的所有偶数

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 20; i++ {
        if i%2 == 0 {
            fmt.Println(i)
        }
    }
}
```

</details>

## while 风格的循环

### 💡 概念说明

Go 没有 `while` 关键字,但 `for` 可以当 `while` 用——只写条件部分即可。

### 📝 代码示例

```go{4-10}
package main

import "fmt"

func main() {
    temperature := 30
    
    // 类似其他语言的 while(temperature > 25)
    for temperature > 25 {
        fmt.Println("当前温度:", temperature, "度,正在降温...")
        temperature = temperature - 2
    }
    
    fmt.Println("降温完成,当前温度:", temperature, "度")
}
```

**运行结果:**
```
当前温度: 30 度,正在降温...
当前温度: 28 度,正在降温...
当前温度: 26 度,正在降温...
降温完成,当前温度: 24 度
```

### 💪 练习题

**练习:** 从 100 开始,每次减 7,直到小于 50 为止,打印每一步的值

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    number := 100
    for number >= 50 {
        fmt.Println(number)
        number = number - 7
    }
}
```

</details>

## if 条件判断(If Statement)

### 💡 概念说明

根据条件决定是否执行某段代码。可以单独使用 `if`,也可以配合 `else`(否则)使用。

### 📝 基本 if

```go{4-6}
package main

import "fmt"

func main() {
    age := 20
    
    if age >= 18 {
        fmt.Println("你已经成年了")
    }
}
```

**运行结果:**
```
你已经成年了
```

### 📝 if-else

```go{4-8}
package main

import "fmt"

func main() {
    score := 75
    
    if score >= 60 {
        fmt.Println("及格了!")
    } else {
        fmt.Println("需要继续努力")
    }
}
```

**运行结果:**
```
及格了!
```

### 📝 if-else if-else

```go{4-12}
package main

import "fmt"

func main() {
    temperature := 28
    
    if temperature > 30 {
        fmt.Println("天气很热")
    } else if temperature > 20 {
        fmt.Println("天气舒适")
    } else {
        fmt.Println("天气有点凉")
    }
}
```

**运行结果:**
```
天气舒适
```

### 📝 if 的简短声明

```go{4-7}
package main

import "fmt"

func main() {
    // 在 if 中声明变量并判断
    if price := 150; price > 100 {
        fmt.Println("价格超过100元")
    }
    // 注意:price 只在 if 块内有效
}
```

**运行结果:**
```
价格超过100元
```

::: warning 注意
在 `if` 语句中声明的变量,只能在 `if-else` 块内使用
:::

### 💪 练习题

**练习 1:** 判断一个数字是正数、负数还是零

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    number := -5
    
    if number > 0 {
        fmt.Println("这是正数")
    } else if number < 0 {
        fmt.Println("这是负数")
    } else {
        fmt.Println("这是零")
    }
}
```

</details>

**练习 2:** 结合 `for` 和 `if`,打印 1 到 10 中能被 3 整除的数字

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    for i := 1; i <= 10; i++ {
        if i%3 == 0 {
            fmt.Println(i, "能被3整除")
        }
    }
}
```

</details>

## 📌 小结

1. **for 循环**是 Go 中唯一的循环方式,可以写成完整的三段式,也可以只保留条件部分当 `while` 用
2. **if 语句**用于条件判断,可以单独使用或配合 `else`、`else if` 组合使用
3. 使用 `break` 可以跳出循环,控制流可以让程序更灵活地处理重复任务和条件分支
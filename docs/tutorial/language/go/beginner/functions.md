---
title: 函数与方法
category: go
order: 8
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 函数与方法

## 什么是函数(Function)

函数就像一个工具箱,你把东西放进去,它帮你处理后给你结果。

比如:
- 计算器是个函数:输入两个数字,返回它们的和
- 榨汁机是个函数:输入水果,返回果汁

## 定义一个函数

### 基本语法

```go
func 函数名(参数) 返回值类型 {
    // 函数体
    return 返回值
}
```

### 完整示例

```go{5-8}
package main

import "fmt"

// 定义一个计算两数之和的函数
func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(3, 5)
    fmt.Println("结果是:", result)
}
```

**运行结果:**
```
结果是: 8
```

::: tip 提示
函数名用小写字母开头(如 `add`),如果想让其他包也能用这个函数,就用大写字母开头(如 `Add`)
:::

## 不同类型的函数

### 没有参数的函数

```go{5-7}
package main

import "fmt"

func sayHello() {
    fmt.Println("Hello, World!")
}

func main() {
    sayHello()
}
```

**运行结果:**
```
Hello, World!
```

### 没有返回值的函数

```go{5-7}
package main

import "fmt"

func printMessage(message string) {
    fmt.Println("消息:", message)
}

func main() {
    printMessage("学习Go语言真有趣")
}
```

**运行结果:**
```
消息: 学习Go语言真有趣
```

### 多个返回值的函数

```go{5-8}
package main

import "fmt"

// 返回两个值:商和余数
func divide(a int, b int) (int, int) {
    return a / b, a % b
}

func main() {
    quotient, remainder := divide(10, 3)
    fmt.Println("商:", quotient)
    fmt.Println("余数:", remainder)
}
```

**运行结果:**
```
商: 3
余数: 1
```

::: warning 注意
多个返回值用逗号分隔,接收时也要用对应数量的变量
:::

## 什么是方法(Method)

方法是"属于某个类型"的函数。就像:
- 手机有"打电话"这个方法
- 汽车有"启动"这个方法

### 定义结构体(Struct)

```go{5-8}
package main

import "fmt"

// 定义一个矩形结构体
type Rectangle struct {
    width  int
    height int
}

func main() {
    rect := Rectangle{width: 5, height: 3}
    fmt.Println("矩形:", rect)
}
```

### 给结构体添加方法

```go{11-13}
package main

import "fmt"

type Rectangle struct {
    width  int
    height int
}

// 定义计算面积的方法
func (r Rectangle) area() int {
    return r.width * r.height
}

func main() {
    rect := Rectangle{width: 5, height: 3}
    result := rect.area()
    fmt.Println("面积是:", result)
}
```

**运行结果:**
```
面积是: 15
```

::: tip 提示
`(r Rectangle)` 叫做接收者(Receiver),表示这个方法属于 `Rectangle` 类型
:::

## 函数 vs 方法

```go{8-11,14-17}
package main

import "fmt"

type Circle struct {
    radius float64
}

// 这是一个函数
func calculateArea(radius float64) float64 {
    return 3.14 * radius * radius
}

// 这是一个方法
func (c Circle) area() float64 {
    return 3.14 * c.radius * c.radius
}

func main() {
    // 调用函数
    area1 := calculateArea(5.0)
    fmt.Println("函数计算的面积:", area1)
    
    // 调用方法
    circle := Circle{radius: 5.0}
    area2 := circle.area()
    fmt.Println("方法计算的面积:", area2)
}
```

**运行结果:**
```
函数计算的面积: 78.5
方法计算的面积: 78.5
```

## 💪 练习题

### 练习 1:创建一个问候函数

编写一个函数 `greet`,接收一个名字(string),返回问候语(string)。

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func greet(name string) string {
    return "你好, " + name + "!"
}

func main() {
    message := greet("小明")
    fmt.Println(message)
}
```

**运行结果:**
```
你好, 小明!
```

</details>

### 练习 2:创建一个学生方法

定义一个 `Student` 结构体(包含 `name` 和 `age`),给它添加一个 `introduce` 方法,打印自我介绍。

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

type Student struct {
    name string
    age  int
}

func (s Student) introduce() {
    fmt.Printf("我叫%s,今年%d岁\n", s.name, s.age)
}

func main() {
    student := Student{name: "小红", age: 18}
    student.introduce()
}
```

**运行结果:**
```
我叫小红,今年18岁
```

</details>

## 📌 小结

1. **函数(Function)**:独立的代码块,使用 `func` 关键字定义,可以接收参数并返回结果
2. **方法(Method)**:属于某个类型的函数,通过接收者(Receiver)与类型关联
3. **调用方式**:函数直接调用 `funcName()`,方法通过类型实例调用 `instance.methodName()`
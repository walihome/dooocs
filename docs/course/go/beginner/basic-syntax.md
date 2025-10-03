---
title: 基本语法
category: go
order: 3
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 基本语法

## 变量定义(Variable Declaration)

💡 **概念说明**

变量(Variable)就像一个带标签的盒子,用来存放数据。Go 提供了两种定义变量的方式:

- `var` 关键字 - 标准方式
- `:=` 短声明 - 快捷方式(只能在函数内使用)

### 📝 代码示例

```go{5-8}
package main

func main() {
    // 方式1: 使用 var 关键字
    var name string = "张三"
    var age int = 25
    // 方式2: 短声明(自动推断类型)
    city := "北京"
}
```

::: tip 提示
`:=` 会自动判断数据类型,不需要写 `string` 或 `int`
:::

## 输出变量(Print Variable)

💡 **概念说明**

使用 `fmt.Println()` 函数将变量内容显示到屏幕上。`fmt` 是 Go 的标准库,专门处理输入输出。

### 📝 代码示例

```go{2,8-10}
package main
import "fmt"  // 引入格式化输出库

func main() {
    name := "李四"
    age := 30
    
    fmt.Println(name)           // 输出: 李四
    fmt.Println("年龄:", age)    // 输出: 年龄: 30
    fmt.Println(name, "今年", age, "岁")  // 输出: 李四 今年 30 岁
}
```

**运行结果:**
```
李四
年龄: 30
李四 今年 30 岁
```

::: warning 注意
`import "fmt"` 必须写在 `package main` 后面,`func main()` 前面
:::

## 注释(Comment)

💡 **概念说明**

注释是给人看的说明文字,程序运行时会被忽略。有两种写法:

- `//` 单行注释
- `/* */` 多行注释

### 📝 代码示例

```go{4,7-10}
package main

func main() {
    // 这是单行注释,解释下面这行代码的作用
    score := 95
    
    /*
      这是多行注释
      可以写很多行说明
    */
    name := "王五"
}
```

## 日志打印(Log Print)

💡 **概念说明**

`log.Println()` 和 `fmt.Println()` 类似,但会自动添加时间信息,适合用于调试和记录程序运行过程。

### 📝 代码示例

```go{2-3,9-10}
package main
import "fmt"
import "log"

func main() {
    price := 99.5
    
    fmt.Println("商品价格:", price)  // 普通输出
    log.Println("商品价格:", price)  // 日志输出(带时间)
}
```

**运行结果:**
```
商品价格: 99.5
2025/10/03 14:30:45 商品价格: 99.5
```

::: tip 提示
调试代码时用 `log.Println()`,正式输出用 `fmt.Println()`
:::

## 💪 练习题

**练习 1:** 定义你的个人信息并输出

要求:定义姓名、年龄、城市三个变量,然后用 `fmt.Println()` 输出

<details>
<summary>查看答案</summary>

```go
package main
import "fmt"

func main() {
    name := "张伟"
    age := 28
    city := "上海"
    
    fmt.Println("姓名:", name)
    fmt.Println("年龄:", age)
    fmt.Println("城市:", city)
}
```

</details>

**练习 2:** 为代码添加注释和日志

要求:为下面的代码添加单行注释,并把最后一行改用 `log.Println()` 输出

```go
package main
import "fmt"

func main() {
    totalPrice := 299.9
    discount := 0.8
    finalPrice := totalPrice * discount
    fmt.Println("最终价格:", finalPrice)
}
```

<details>
<summary>查看答案</summary>

```go
package main
import "fmt"
import "log"

func main() {
    // 商品原价
    totalPrice := 299.9
    // 折扣(8折)
    discount := 0.8
    // 计算折后价
    finalPrice := totalPrice * discount
    
    log.Println("最终价格:", finalPrice)
}
```

</details>

## 📌 小结

- 用 `:=` 定义变量最简单,会自动判断类型
- `fmt.Println()` 用于输出内容到屏幕
- `//` 写注释帮助理解代码
- `log.Println()` 会显示时间,适合调试
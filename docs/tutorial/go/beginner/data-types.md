---
title: 数据类型
category: go
order: 4
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 数据类型

在Go语言中,数据类型(Data Type)告诉计算机如何理解和存储数据。就像日常生活中,我们会区分数字、文字、真假判断一样,编程语言也需要这样的分类。

## 整数(Integer)

### 💡 概念说明

整数类型用于存储没有小数部分的数字,比如 1、-5、1000。Go提供了多种整数类型:

- `int` - 最常用,根据系统自动选择32位或64位
- `int8`、`int16`、`int32`、`int64` - 指定位数的整数
- `uint` - 无符号整数(只能是正数和0)

::: tip 提示
新手直接使用 `int` 就够了,它能满足大部分需求。
:::

### 📝 代码示例

```go{4-6}
package main

import "fmt"

func main() {
    var age int = 25           // 声明整数变量
    var temperature int = -10   // 可以是负数
    score := 95                 // 简短声明方式
    
    fmt.Println("年龄:", age)
    fmt.Println("温度:", temperature)
    fmt.Println("分数:", score)
}
```

**运行结果:**
```
年龄: 25
温度: -10
分数: 95
```

## 浮点数(Float)

### 💡 概念说明

浮点数用于存储带小数的数字,比如 3.14、-0.5、99.99。Go提供两种浮点类型:

- `float32` - 单精度浮点数
- `float64` - 双精度浮点数(推荐使用)

### 📝 代码示例

```go{5-7}
package main

import "fmt"

func main() {
    var price float64 = 19.99    // 商品价格
    var pi float64 = 3.14159     // 圆周率
    discount := 0.85             // 折扣(Go会自动识别为float64)
    
    fmt.Println("价格:", price)
    fmt.Println("圆周率:", pi)
    fmt.Println("折扣:", discount)
}
```

**运行结果:**
```
价格: 19.99
圆周率: 3.14159
折扣: 0.85
```

::: warning 注意
整数和浮点数不能直接混合运算,需要类型转换。
:::

## 字符串(String)

### 💡 概念说明

字符串用于存储文本信息,必须用双引号 `""` 包裹。字符串可以包含中文、英文、数字、符号等任何文字内容。

### 📝 代码示例

```go{5-7,10-11}
package main

import "fmt"

func main() {
    var name string = "张三"        // 中文字符串
    var greeting string = "Hello"   // 英文字符串
    message := "Go语言真有趣!"      // 混合字符串
    
    fmt.Println(name)
    fmt.Println(greeting + ", " + name)  // 字符串拼接
    fmt.Println(message)
}
```

**运行结果:**
```
张三
Hello, 张三
Go语言真有趣!
```

::: tip 提示
使用 `+` 号可以拼接字符串,就像把两段文字连接在一起。
:::

## 布尔值(Boolean)

### 💡 概念说明

布尔值只有两个可能的值:
- `true` - 真,表示"是"
- `false` - 假,表示"否"

布尔值常用于判断和条件控制。

### 📝 代码示例

```go{5-7,9-11}
package main

import "fmt"

func main() {
    var isStudent bool = true     // 是否是学生
    var hasLicense bool = false   // 是否有驾照
    isAdult := true               // 是否成年
    
    fmt.Println("是学生吗?", isStudent)
    fmt.Println("有驾照吗?", hasLicense)
    fmt.Println("已成年?", isAdult)
}
```

**运行结果:**
```
是学生吗? true
有驾照吗? false
已成年? true
```

## 💪 练习题

### 练习1:计算商品总价

创建一个程序,声明商品单价(浮点数)、购买数量(整数),输出商品信息。

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    var price float64 = 29.9  // 单价
    var quantity int = 3      // 数量
    
    fmt.Println("单价:", price)
    fmt.Println("数量:", quantity)
}
```

</details>

### 练习2:个人信息卡片

创建一个程序,使用不同数据类型存储并输出个人信息:姓名(字符串)、年龄(整数)、身高(浮点数)、是否在职(布尔值)。

<details>
<summary>点击查看答案</summary>

```go
package main

import "fmt"

func main() {
    name := "李明"
    age := 28
    height := 175.5
    isEmployed := true
    
    fmt.Println("姓名:", name)
    fmt.Println("年龄:", age)
    fmt.Println("身高:", height, "cm")
    fmt.Println("在职:", isEmployed)
}
```

</details>

## 📌 小结

- **整数(int)**:用于存储没有小数的数字,如年龄、数量
- **浮点数(float64)**:用于存储带小数的数字,如价格、温度
- **字符串(string)**:用于存储文本,必须用双引号包裹,可用 `+` 拼接
- **布尔值(bool)**:只有 `true` 和 `false` 两个值,用于表示"是"或"否"
---
title: 基础运算
category: go
order: 5
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 基础运算

在编程中,运算(Operations)是处理数据的基本方式。Go语言提供了丰富的运算符来完成各种计算和判断任务。

## 赋值运算(Assignment)

💡 **概念说明**

赋值就是把一个值存储到变量中,使用 `=` 符号。

### 📝 代码示例

```go{4-7}
package main

func main() {
    var age int = 25        // 声明并赋值
    name := "张三"           // 简短赋值
    age = 26                // 重新赋值
    count := age            // 把age的值赋给count
}
```

::: tip 提示
`=` 的左边必须是变量,右边是要存储的值。
:::

## 数学运算(Arithmetic Operations)

💡 **概念说明**

Go语言支持常见的数学计算:
- `+` 加法(Addition)
- `-` 减法(Subtraction)
- `*` 乘法(Multiplication)
- `/` 除法(Division)
- `%` 求余(Modulus)

### 📝 代码示例

```go{6-10}
package main

import "fmt"

func main() {
    a := 10
    b := 3
    
    fmt.Println(a + b)  // 13
    fmt.Println(a - b)  // 7
    fmt.Println(a * b)  // 30
    fmt.Println(a / b)  // 3
    fmt.Println(a % b)  // 1
}
```

**运行结果:**
```
13
7
30
3
1
```

::: warning 注意
整数相除结果仍是整数,小数部分会被舍弃。`10 / 3` 结果是 `3` 而不是 `3.333...`
:::

### 💪 练习题

**练习1:** 计算一个长方形的面积和周长,长为8,宽为5。

<details>
<summary>查看答案</summary>

```go
package main

import "fmt"

func main() {
    length := 8
    width := 5
    
    area := length * width           // 面积
    perimeter := 2 * (length + width) // 周长
    
    fmt.Println("面积:", area)
    fmt.Println("周长:", perimeter)
}
```

**运行结果:**
```
面积: 40
周长: 26
```

</details>

**练习2:** 有17个苹果,每3个装一袋,能装几袋?还剩几个?

<details>
<summary>查看答案</summary>

```go
package main

import "fmt"

func main() {
    apples := 17
    bagSize := 3
    
    bags := apples / bagSize      // 袋数
    remaining := apples % bagSize // 剩余
    
    fmt.Println("袋数:", bags)
    fmt.Println("剩余:", remaining)
}
```

**运行结果:**
```
袋数: 5
剩余: 2
```

</details>

## 比较运算(Comparison Operations)

💡 **概念说明**

比较运算用于判断两个值的大小关系,结果是布尔值(Boolean) `true` 或 `false`:
- `==` 相等(Equal)
- `!=` 不相等(Not Equal)
- `>` 大于(Greater Than)
- `<` 小于(Less Than)
- `>=` 大于等于(Greater or Equal)
- `<=` 小于等于(Less or Equal)

### 📝 代码示例

```go{6-11}
package main

import "fmt"

func main() {
    age := 18
    
    fmt.Println(age == 18)  // true
    fmt.Println(age != 20)  // true
    fmt.Println(age > 16)   // true
    fmt.Println(age < 18)   // false
    fmt.Println(age >= 18)  // true
    fmt.Println(age <= 17)  // false
}
```

**运行结果:**
```
true
true
true
false
true
false
```

::: danger 警告
判断相等用 `==`,不是 `=`。`=` 是赋值,`==` 是比较。
:::

## 逻辑运算(Logical Operations)

💡 **概念说明**

逻辑运算用于组合多个条件:
- `&&` 逻辑与(AND) - 两个条件都为真时结果才为真
- `||` 逻辑或(OR) - 至少一个条件为真时结果就为真
- `!` 逻辑非(NOT) - 取反,真变假,假变真

### 📝 代码示例

```go{6-13}
package main

import "fmt"

func main() {
    age := 20
    hasTicket := true
    
    // 年龄大于18 并且 有票
    fmt.Println(age > 18 && hasTicket)  // true
    
    // 年龄小于18 或者 有票
    fmt.Println(age < 18 || hasTicket)  // true
    
    // 没有票
    fmt.Println(!hasTicket)  // false
}
```

**运行结果:**
```
true
true
false
```

### 📝 真值表(Truth Table)

帮助你理解逻辑运算:

**AND (&&):**
| A | B | A && B |
|---|---|--------|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |

**OR (||):**
| A | B | A \|\| B |
|---|---|--------|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |

### 💪 练习题

**练习:** 判断一个人是否可以进入游乐园的过山车项目。要求:年龄在12到65岁之间,并且身高大于140cm。

<details>
<summary>查看答案</summary>

```go
package main

import "fmt"

func main() {
    age := 25
    height := 165
    
    canRide := age >= 12 && age <= 65 && height > 140
    
    fmt.Println("可以乘坐:", canRide)
}
```

**运行结果:**
```
可以乘坐: true
```

</details>

## 📌 小结

- **赋值运算** 使用 `=` 把值存入变量
- **数学运算** 包括 `+` `-` `*` `/` `%` 五种基本运算
- **比较运算** 用于判断大小关系,结果是 `true` 或 `false`
- **逻辑运算** 使用 `&&` `||` `!` 组合多个条件
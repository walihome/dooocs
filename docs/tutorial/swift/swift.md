---
title: swift之旅
colla: true
order: 2
head:
  - - meta
    - name: dooocs swift 苹果 apple 
      content: 关于swift语言
---

# Swift之旅
> 传统上，第一个使用新语言的程序应该打印 `Hello，world！` 
> 这只需一行代码即可完成：

```swift
print("Hello, world!")
// Prints "Hello, world!"
```

如果你懂另一种语言的话，这种语法看起来应该很熟悉，在`Swift`中，这行代码是一个完整的程序。您不需要为输出文本或处理字符串等功能导入单独的库。在全局范围内编写的代码用作程序的入口点，因此您不需要`main（）`函数。你也不需要在每个语句的末尾都写上引号。

本教程通过向您展示如何完成各种编程任务，为您提供了开始使用Swift编写代码的足够信息。


## 简单赋值

使用`let`来创建常量，使用`var`来创建变量。
在编译时不需要知道常数的值，但必须给它赋值一次。这意味着您可以使用常量来命名一个值，该值只需确定一次，但可以在许多地方使用。
```swift
var myVariable = 42
myVariable = 50
let myConstant = 42
```

一个常量或变量的类型必须与你想赋予它的值的类型相同。但是，你不必总是显式地写类型。在创建常量或变量时提供一个值，可以让编译器推断其类型。在上面的例子中，编译器推断我的变量是整数，因为它的初始值是整数。

如果初始值没有提供足够的信息（或者如果没有初始值），请在变量后面写入类型，并用冒号分隔。

```swift
// 隐式类型
let implicitInteger = 70
let implicitDouble = 70.0

// 显式类型
let explicitDouble: Double = 70
```

::: tip 实验
创建一个显式类型为 `Float`且值为`4`的常量。
```swift
let explicitFloat: Float = 4
```
:::

值永远不会隐式转换为另一种类型。如果需要将值转换为不同的类型，请显式创建所需类型的实例。

```swift
let label = "The width is "
let width = 94
let widthLabel = label + String(width)
```

尝试删除最后一行的`String`转换。看看会有什么错误？还有一种更简单的方法可以在字符串中包含值：将值写在括号中，并在括号前写一个反斜杠`（\）`。举例来说：

```swift
let apples = 3
let oranges = 5
let appleSummary = "I have \(apples) apples."
let fruitSummary = "I have \(apples + oranges) pieces of fruit."
```

::: tip 实验
使用`\()`在字符串中包含浮点计算，并在问候语中包含某人的名字。
:::

对于占用多行的字符串，请使用三个双引号 `"`。只要与右引号的缩进相匹配，就可以删除每一行引号开头的缩进。举例来说，请注意：

```swift
let quotation = """
        Even though there's whitespace to the left,
        the actual lines aren't indented.
            Except for this line.
        Double quotes (") can appear without being escaped.

        I still have \(apples + oranges) pieces of fruit.
"""
```
使用方括号`[]`创建数组和字典，并通过在方括号中写入索引或键来访问它们的元素。最后一个元素后允许有逗号。

```swift
var fruits = ["strawberries", "limes", "tangerines"]
fruits[1] = "grapes"


var occupations = [
    "Malcolm": "Captain",
    "Kaylee": "Mechanic",
 ]
occupations["Jayne"] = "Public Relations"
```

数组会随着您添加元素而自动增长。
```swift
fruits.append("blueberries")
print(fruits)
// 打印 "["strawberries", "grapes", "tangerines", "blueberries"]"
```
您还可以使用方括号来编写空数组或字典。对于数组，写`[]`，对于字典，写`[：]`。

```swift
fruits = []
occupations = [:]
```

如果要将空数组或字典赋给一个新变量，或者赋给另一个没有任何类型信息的地方，则需要指

```swift
let emptyArray: [String] = []
let emptyDictionary: [String: Float] = [:]
```
## 流程控制
使用`if`和`switch`创建条件语句，使用`for-in`、`while`和`repeat-while`创建循环。条件或循环变量周围的括号是可选的。身体周围的支架是必需的。

```swift
let individualScores = [75, 43, 103, 87, 12]
var teamScore = 0
for score in individualScores {
    if score > 50 {
        teamScore += 3
    } else {
        teamScore += 1
    }
}
print(teamScore)
// 打印 "11"
```

在if语句中，条件必须是一个布尔表达式-这意味着代码，如`if score {. }`是一个错误，而不是与零的隐式比较。

您可以在赋值的等号`（=）`之后或返回之后写入`if`或`switch`，以根据条件选择值。

```swift
let scoreDecoration = if teamScore > 10 {
    "🎉"
} else {
    ""
}
print("Score:", teamScore, scoreDecoration)
// 打印 "Score: 11 🎉"
```

可以同时使用`if`和`let`来处理可能丢失的值。这些值表示为可选值。一个可选值要么包含一个值，要么包含`nil`以指示缺少一个值。写一个问号（`?`），将该值标记为可选。

```swift
var optionalString: String? = "Hello"
print(optionalString == nil)
// 打印 "false"

var optionalName: String? = "John Appleseed"
var greeting = "Hello!"
if let name = optionalName {
    greeting = "Hello, \(name)"
}
```

::: tip 实验

将可选名称更改为`nil`。你得到什么问候？添加一个`else`子句，如果可选Name为`nil`，则设置不同的问候语。
:::

如果可选值为`nil`，则条件为`false`，并跳过大括号中的代码。否则，可选值将被解包并赋给`let`后的常量，这使得解包后的值在代码块中可用。

处理可选值的另一种方法是使用？？操作符.如果缺少可选值，则使用默认值。

```swift
let nickname: String? = nil
let fullName: String = "John Appleseed"
let informalGreeting = "Hi \(nickname ?? fullName)"
```

您可以使用较短的拼写来展开值，并对展开的值使用相同的名称。

```swift    
if let nickname {
    print("Hey, \(nickname)")
}
// Doesn't print anything, because nickname is nil.
```

开关支持任何类型的数据和各种各样的比较操作，它们不限于整数和相等性测试。

```swift
let vegetable = "red pepper"
switch vegetable {
case "celery":
    print("Add some raisins and make ants on a log.")
case "cucumber", "watercress":
    print("That would make a good tea sandwich.")
case let x where x.hasSuffix("pepper"):
    print("Is it a spicy \(x)?")
default:
    print("Everything tastes good in soup.")
}
// Prints "Is it a spicy red pepper?"
```
::: tip 实验

尝试删除默认大小写。你犯了什么错误？

请注意如何在模式中使用 `let`将与模式匹配的值赋给常量。
:::

在执行了匹配的switch case中的代码之后，程序从switch语句中退出。执行不会继续到下一个case，因此您不需要在每个case的代码结束时显式地中断开关。

通过为每个键值对提供一对名称，可以使用for-in替换字典中的项。字典是一个无序的集合，因此它们的键和值以任意顺序迭代。

```swift
let interestingNumbers = [
    "Prime": [2, 3, 5, 7, 11, 13],
    "Fibonacci": [1, 1, 2, 3, 5, 8],
    "Square": [1, 4, 9, 16, 25],
]
var largest = 0
for (_, numbers) in interestingNumbers {
    for number in numbers {
        if number > largest {
            largest = number
        }
    }
}
print(largest)
// Prints "25"
```

::: tip 实验
将_替换为变量名，并跟踪哪种数字是最大的。
:::

使用`while`重复执行代码块，直到条件发生变化。循环的条件可以在末尾，以确保循环至少运行一次。
```swift
var n = 2
while n < 100 {
    n *= 2
}
print(n)
// Prints "128"


var m = 2
repeat {
    m *= 2
} while m < 100
print(m)
// Prints "128"
```

::: tip 实验

将条件从`m < 100`更改为`m < 0`，以查看当循环条件已经为`false`时，`while`和`repeat-while`的行为有何不同。
:::

您可以使用`.. %`在循环中保持索引3C制作一系列索引。
```swift
var total = 0
for i in 0..<4 {
    total += i
}
print(total)
// Prints "6"
```
使用.. % 3C创建一个忽略其上限值的范围，并使用... 以创建一个包含这两个值的范围。

Functions and Closures 函数和闭包
使用func声明一个函数。通过在函数名后面加上括号中的参数列表来调用函数。使用->将参数名称和类型与函数的返回类型分隔开。

```swift
func greet(person: String, day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet(person: "Bob", day: "Tuesday")
```

::: TIP 实验

删除day参数。添加一个参数以在问候中包含今天的午餐特价。

默认情况下，函数使用它们的形参名称作为其实参的标签。在参数名之前写入自定义参数标签，或者write_不使用参数标签。
::: 


```swift
func greet(_ person: String, on day: String) -> String {
    return "Hello \(person), today is \(day)."
}
greet("John", on: "Wednesday")
```

使用元组生成复合值-例如，从函数返回多个值。元组的元素可以通过名称或数字来引用。

```swift
func calculateStatistics(scores: [Int]) -> (min: Int, max: Int, sum: Int) {
    var min = scores[0]
    var max = scores[0]
    var sum = 0


    for score in scores {
        if score > max {
            max = score
        } else if score < min {
            min = score
        }
        sum += score
    }


    return (min, max, sum)
}
let statistics = calculateStatistics(scores: [5, 3, 100, 3, 9])
print(statistics.sum)
// Prints "120"
print(statistics.2)
// Prints "120"
```

函数可以嵌套。嵌套函数可以访问在外部函数中声明的变量。可以使用嵌套函数来组织长或复杂函数中的代码。

```swift
func returnFifteen() -> Int {
    var y = 10
    func add() {
        y += 5
    }
    add()
    return y
}
returnFifteen()
```

函数是一级类型。这意味着一个函数可以返回另一个函数作为它的值。


```swift
func makeIncrementer() -> ((Int) -> Int) {
    func addOne(number: Int) -> Int {
        return 1 + number
    }
    return addOne
}
var increment = makeIncrementer()
increment(7)
```

一个函数可以接受另一个函数作为它的参数之一。

```swift

func hasAnyMatches(list: [Int], condition: (Int) -> Bool) -> Bool {
    for item in list {
        if condition(item) {
            return true
        }
    }
    return false
}
func lessThanTen(number: Int) -> Bool {
    return number < 10
}
var numbers = [20, 19, 7, 12]
hasAnyMatches(list: numbers, condition: lessThanTen)
```

函数实际上是闭包的一种特殊情况：可以稍后调用的代码块。闭包中的代码可以访问创建闭包的作用域中可用的变量和函数，即使闭包在执行时处于不同的作用域中-您已经看到了嵌套函数的示例。您可以编写一个没有名称的闭包，方法是用大括号（{}）将代码括起来。使用in将参数和返回类型与主体分开。

```swift
numbers.map({ (number: Int) -> Int in
    let result = 3 * number
    return result
})
```

::: tip 实验
重写闭包，对所有奇数返回零。
:::

有几种方法可以更简洁地编写闭包。当一个闭包的类型已知时，比如一个委托的回调函数，你可以省略它的参数类型、返回类型，或者两者都省略。单语句闭包隐式返回其唯一语句的值。

```swift
let mappedNumbers = numbers.map({ number in 3 * number })
print(mappedNumbers)
// Prints "[60, 57, 21, 36]"
```

你可以用数字而不是名字来引用参数--这种方法在非常短的闭包中特别有用。作为最后一个参数传递给函数的闭包可以直接出现在圆括号之后。当闭包是函数的唯一参数时，可以完全省略括号。

```swift

let sortedNumbers = numbers.sorted { $0 > $1 }
print(sortedNumbers)
// Prints "[20, 19, 12, 7]"
```

## 对象和类
使用class后跟类名来创建一个类。类中的属性声明与常量或变量声明的编写方式相同，不同之处在于它是在类的上下文中。同样，方法和函数声明也是以同样的方式编写的。

```swift
class Shape {
    var numberOfSides = 0
    func simpleDescription() -> String {
        return "A shape with \(numberOfSides) sides."
    }
}
```
::: tip 实验
使用let添加一个常量属性，并添加另一个接受参数的方法。
:::

通过在类名后面加上括号来创建类的实例。使用点语法访问实例的属性和方法。

```swift
var shape = Shape()
shape.numberOfSides = 7
var shapeDescription = shape.simpleDescription()
```

这个版本的Shape类缺少一些重要的东西：在创建实例时设置类的初始化器。使用init创建一个。

```swift
class NamedShape {
    var numberOfSides: Int = 0
    var name: String


    init(name: String) {
       self.name = name
    }


    func simpleDescription() -> String {
       return "A shape with \(numberOfSides) sides."
    }
}
```

注意self是如何用来区分name属性和初始化器的name参数的。初始化器的参数在创建类的实例时像函数调用一样传递。每个属性都需要赋值--要么在它的声明中（如面数），要么在初始化器中（如名称）。

如果需要在对象被释放之前执行一些清理，可以使用deinit创建一个反初始化器。

子类在类名之后包含它们的超类名，用冒号分隔。没有要求类继承任何标准根类，因此您可以根据需要包含或省略超类。

子类中覆盖超类实现的方法被标记为override--意外覆盖一个方法，而没有覆盖，编译器会将其检测为错误。编译器也会检测到带有override的方法，这些方法实际上并没有覆盖超类中的任何方法。

```swift
class Square: NamedShape {
    var sideLength: Double


    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 4
    }


    func area() -> Double {
        return sideLength * sideLength
    }


    override func simpleDescription() -> String {
        return "A square with sides of length \(sideLength)."
    }
}
let test = Square(sideLength: 5.2, name: "my test square")
test.area()
test.simpleDescription()
```
::: tip 实验
创建Named Shape的另一个子类Circle，它接受一个半径和一个名称作为其初始化器的参数。在Circle类上实现一个area（）和一个简单的Description（）方法。
:::
除了存储的简单属性之外，属性还可以有一个getter和setter。

```swift
class EquilateralTriangle: NamedShape {
    var sideLength: Double = 0.0


    init(sideLength: Double, name: String) {
        self.sideLength = sideLength
        super.init(name: name)
        numberOfSides = 3
    }


    var perimeter: Double {
        get {
             return 3.0 * sideLength
        }
        set {
            sideLength = newValue / 3.0
        }
    }


    override func simpleDescription() -> String {
        return "An equilateral triangle with sides of length \(sideLength)."
    }
}
var triangle = EquilateralTriangle(sideLength: 3.1, name: "a triangle")
print(triangle.perimeter)
// Prints "9.3"
triangle.perimeter = 9.9
print(triangle.sideLength)
// Prints "3.3000000000000003"
```

在perimeter的setter中，新值的隐式名称为new Value。可以在set后面的括号中提供显式名称。

请注意，Equilateral Triangle类的初始化器有三个不同的步骤：

设置子类声明的属性的值。

调用超类的初始化器。

更改由超类定义的属性的值。此时也可以完成任何使用方法、getter或setter的额外设置工作。

如果不需要计算属性，但仍需要提供在设置新值之前和之后运行的代码，请使用will Set和did Set。只要值在初始化器之外发生更改，就会运行您提供的代码。例如，下面的类确保其三角形的边长始终与其正方形的边长相同。

```swift
class TriangleAndSquare {
    var triangle: EquilateralTriangle {
        willSet {
            square.sideLength = newValue.sideLength
        }
    }
    var square: Square {
        willSet {
            triangle.sideLength = newValue.sideLength
        }
    }
    init(size: Double, name: String) {
        square = Square(sideLength: size, name: name)
        triangle = EquilateralTriangle(sideLength: size, name: name)
    }
}
var triangleAndSquare = TriangleAndSquare(size: 10, name: "another test shape")
print(triangleAndSquare.square.sideLength)
// Prints "10.0"
print(triangleAndSquare.triangle.sideLength)
// Prints "10.0"
triangleAndSquare.square = Square(sideLength: 50, name: "larger square")
print(triangleAndSquare.triangle.sideLength)
// Prints "50.0"
```

当使用可选值时，你可以写？在方法、属性和下标等操作之前。如果之前的值是？是nil，后面的都是？被忽略，整个表达式的值为nil。否则，将展开可选值，并且？作用于展开的值。在这两种情况下，整个表达式的值都是可选值。

```swift
let optionalSquare: Square? = Square(sideLength: 2.5, name: "optional square")
let sideLength = optionalSquare?.sideLength
```
## 枚举和结构

使用enum创建枚举。与类和所有其他命名类型一样，枚举可以有与之关联的方法。

```swift
enum Rank: Int {
    case ace = 1
    case two, three, four, five, six, seven, eight, nine, ten
    case jack, queen, king


    func simpleDescription() -> String {
        switch self {
        case .ace:
            return "ace"
        case .jack:
            return "jack"
        case .queen:
            return "queen"
        case .king:
            return "king"
        default:
            return String(self.rawValue)
        }
    }
}
let ace = Rank.ace
let aceRawValue = ace.rawValue
```
::: tip 实验
编写一个函数，通过比较两个Rank值的原始值来比较它们。
:::

默认情况下，Swift分配的原始值从0开始，每次递增1，但您可以通过显式指定值来更改此行为。在上面的示例中，Ace被显式地赋予原始值1，其余的原始值按顺序分配。也可以使用字符串或浮点数作为枚举的原始类型。使用rawValue属性访问枚举案例的原始值。

使用init?(rawValue:)初始化器从原始值生成枚举的实例。它返回匹配原始值的枚举情况，或者如果没有匹配的Rank，则返回nil。

```swift
if let convertedRank = Rank(rawValue: 3) {
    let threeDescription = convertedRank.simpleDescription()
}
```

枚举的case值是实际值，而不仅仅是编写其原始值的另一种方式。事实上，在没有有意义的原始值的情况下，您不必提供原始值。

```swift
enum Suit {
    case spades, hearts, diamonds, clubs


    func simpleDescription() -> String {
        switch self {
        case .spades:
            return "spades"
        case .hearts:
            return "hearts"
        case .diamonds:
            return "diamonds"
        case .clubs:
            return "clubs"
        }
    }
}
let hearts = Suit.hearts
let heartsDescription = hearts.simpleDescription()
```
::: tip 实验
向Suit添加一个color（）方法，该方法为黑桃和梅花返回“黑色”，为红心和方块返回“红色”。
:::

注意上面引用枚举的heartscase的两种方式：当给hearts常量赋值时，枚举caseSuit.hearts由其全名引用，因为常量没有明确指定类型。在开关内部，枚举情况由缩写形式.hearts引用，因为self的值已经知道是一个suit。只要已知值的类型，就可以使用缩写形式。

如果枚举有原始值，则这些值将作为声明的一部分确定，这意味着特定枚举情况的每个实例始终具有相同的原始值。枚举案例的另一种选择是让值与案例相关联-这些值是在创建实例时确定的，并且它们对于枚举案例的每个实例都可以不同。您可以将关联的值视为行为类似于枚举案例实例的存储属性。例如，考虑从服务器请求日出和日落时间的情况。服务器要么响应请求的信息，要么响应错误的描述。

```swift
enum ServerResponse {
    case result(String, String)
    case failure(String)
}


let success = ServerResponse.result("6:00 am", "8:09 pm")
let failure = ServerResponse.failure("Out of cheese.")


switch success {
case let .result(sunrise, sunset):
    print("Sunrise is at \(sunrise) and sunset is at \(sunset).")
case let .failure(message):
    print("Failure...  \(message)")
}
```
::: tip 实验
将第三种情况添加到服务器响应和交换机。
:::

请注意如何从服务器响应值中提取日出和日落时间，作为将该值与开关情况进行匹配的一部分。

使用struct创建结构。结构支持许多与类相同的行为，包括方法和初始值设定项。结构和类之间最重要的区别之一是，当它们在代码中传递时，结构总是被复制的，而类是通过引用传递的。

```swift
struct Card {
    var rank: Rank
    var suit: Suit
    func simpleDescription() -> String {
        return "The \(rank.simpleDescription()) of \(suit.simpleDescription())"
    }
}
let threeOfSpades = Card(rank: .three, suit: .spades)
let threeOfSpadesDescription = threeOfSpades.simpleDescription()
```
::: tip 实验
写一个函数，返回一个数组，其中包含一整副牌，每种花色和花色组合都有一张牌。
:::

## 并发
使用functional标记异步运行的函数。

```swift
func fetchUserID(from server: String) async -> Int {
    if server == "primary" {
        return 97
    }
    return 501
}
```
你可以通过在异步函数前面写await来标记它的调用。

```swift
func fetchUsername(from server: String) async -> String {
    let userID = await fetchUserID(from: server)
    if userID == 501 {
        return "John Appleseed"
    }
    return "Guest"
}
```
使用javascript let调用异步函数，让它与其他异步代码并行运行。当你使用它返回的值时，写await。

```swift

func connectUser(to server: String) async {
    async let userID = fetchUserID(from: server)
    async let username = fetchUsername(from: server)
    let greeting = await "Hello \(username), user ID \(userID)"
    print(greeting)
}
```
使用任务从同步代码调用异步函数，而不等待它们返回。
```swift
Task {
    await connectUser(to: "primary")
}
// Prints "Hello Guest, user ID 97"
```
使用任务组来构造并发代码。

```swift
let userIDs = await withTaskGroup(of: Int.self) { group in
    for server in ["primary", "secondary", "development"] {
        group.addTask {
            return await fetchUserID(from: server)
        }
    }


    var results: [Int] = []
    for await result in group {
        results.append(result)
    }
    return results
}
```

Actor类似于类，只是它们确保不同的异步函数可以同时安全地与同一Actor的实例进行交互。
```swift
actor ServerConnection {
    var server: String = "primary"
    private var activeUsers: [Int] = []
    func connect() async -> Int {
        let userID = await fetchUserID(from: server)
        // ... communicate with server ...
        activeUsers.append(userID)
        return userID
    }
}
```
当您调用参与者的方法或访问其属性之一时，您将该代码标记为await，以指示它可能必须等待已在参与者上运行的其他代码完成。

```swift
let server = ServerConnection()
let userID = await server.connect()
Protocols and Extensions 协议和扩展
Use protocol to declare a protocol.
```
使用协议声明协议。

```swift
protocol ExampleProtocol {
     var simpleDescription: String { get }
     mutating func adjust()
}
```
类、枚举和结构都可以采用协议。

```swift
class SimpleClass: ExampleProtocol {
     var simpleDescription: String = "A very simple class."
     var anotherProperty: Int = 69105
     func adjust() {
          simpleDescription += "  Now 100% adjusted."
     }
}
var a = SimpleClass()
a.adjust()
let aDescription = a.simpleDescription


struct SimpleStructure: ExampleProtocol {
     var simpleDescription: String = "A simple structure"
     mutating func adjust() {
          simpleDescription += " (adjusted)"
     }
}
var b = SimpleStructure()
b.adjust()
let bDescription = b.simpleDescription
```
::: tip 实验
在示例方案中添加另一项要求。您需要对简单类和简单结构进行哪些更改，以使它们仍然符合协议？
:::
请注意，在SimpleStructure的声明中使用了mutating关键字来标记修改结构的方法。简单类的声明不需要将它的任何方法标记为可变，因为类上的方法总是可以修改类。

使用扩展向现有类型添加功能，如新方法和计算属性。您可以使用扩展为在其他地方声明的类型添加协议一致性，甚至可以为从库或框架导入的类型添加协议一致性。

```swift
extension Int: ExampleProtocol {
    var simpleDescription: String {
        return "The number \(self)"
    }
    mutating func adjust() {
        self += 42
    }
 }
print(7.simpleDescription)
// Prints "The number 7"
```
::: tip 实验
为Double类型编写一个扩展，添加一个绝对值属性。
:::
您可以像使用任何其他命名类型一样使用协议名称-例如，创建具有不同类型但都符合单个协议的对象的集合。当您使用的值的类型是装箱协议类型时，协议定义之外的方法不可用。

```swift
let protocolValue: any ExampleProtocol = a
print(protocolValue.simpleDescription)
// Prints "A very simple class.  Now 100% adjusted."
// print(protocolValue.anotherProperty)  // Uncomment to see the error
```
即使变量protocol Value的运行时类型为Simple Class，编译器也会将其视为给定类型的Example Protocol。这意味着您不能意外地访问类实现的方法或属性，以及类的协议一致性。

## 异常处理
您可以使用采用Error协议的任何类型来表示错误。

```swift
enum PrinterError: Error {
    case outOfPaper
    case noToner
    case onFire
}
```
使用throw抛出错误，使用throws标记可以抛出错误的函数。如果在函数中抛出错误，该函数将立即返回，调用该函数的代码将处理该错误。

```swift
func send(job: Int, toPrinter printerName: String) throws -> String {
    if printerName == "Never Has Toner" {
        throw PrinterError.noToner
    }
    return "Job sent"
}
```
有几种方法可以处理错误。一种方法是使用do-catch。在do块中，你可以通过在代码前面写上try来标记可能抛出错误的代码。在catch块中，错误会自动被命名为error，除非你给它一个不同的名字。

```swift
do {
    let printerResponse = try send(job: 1040, toPrinter: "Bi Sheng")
    print(printerResponse)
} catch {
    print(error)
}
// Prints "Job sent"
```
::: tip 实验
将打印机名称更改为“Never Has Toner”，以便send（job：to Printer：）函数抛出错误。
:::
您可以提供多个catch块来处理特定的错误。在catch之后写一个模式，就像在switch中的case之后写一样。

```swift
do {
    let printerResponse = try send(job: 1440, toPrinter: "Gutenberg")
    print(printerResponse)
} catch PrinterError.onFire {
    print("I'll just put this over here, with the rest of the fire.")
} catch let printerError as PrinterError {
    print("Printer error: \(printerError).")
} catch {
    print(error)
}
// Prints "Job sent"
```
::: tip 实验
添加代码以在do块内抛出错误。你需要抛出什么样的错误才能让第一个catch块处理错误？第二和第三块呢？
:::
处理错误的另一种方法是使用try？将结果转换为可选的。如果函数抛出错误，则丢弃特定的错误，结果为nil。否则，结果是一个可选的，包含函数返回的值。

```swift
let printerSuccess = try? send(job: 1884, toPrinter: "Mergenthaler")
let printerFailure = try? send(job: 1885, toPrinter: "Never Has Toner")
```
使用defer编写一段代码，在函数中的所有其他代码之后执行，就在函数返回之前。不管函数是否抛出错误，代码都会被执行。您可以使用defer将安装和清理代码写在一起，即使它们需要在不同的时间执行。

```swift
var fridgeIsOpen = false
let fridgeContent = ["milk", "eggs", "leftovers"]


func fridgeContains(_ food: String) -> Bool {
    fridgeIsOpen = true
    defer {
        fridgeIsOpen = false
    }


    let result = fridgeContent.contains(food)
    return result
}
if fridgeContains("banana") {
    print("Found a banana")
}
print(fridgeIsOpen)
// Prints "false"
```

## 泛型
在尖括号内写一个名字，以创建一个泛型函数或类型。

```swift
func makeArray<Item>(repeating item: Item, numberOfTimes: Int) -> [Item] {
    var result: [Item] = []
    for _ in 0..< numberOfTimes {
         result.append(item)
    }
    return result
}
makeArray(repeating: "knock", numberOfTimes: 4)
```
您可以创建泛型形式的函数和方法，以及类、枚举和结构。
```swift
// Reimplement the Swift standard library's optional type
enum OptionalValue<Wrapped> {
    case none
    case some(Wrapped)
}
var possibleInteger: OptionalValue<Int> = .none
possibleInteger = .some(100)
```
在body之前使用where来指定一系列要求-例如，要求类型实现一个协议，要求两个类型相同，或者要求一个类具有特定的超类。
```swift
func anyCommonElements<T: Sequence, U: Sequence>(_ lhs: T, _ rhs: U) -> Bool
    where T.Element: Equatable, T.Element == U.Element
{
    for lhsItem in lhs {
        for rhsItem in rhs {
            if lhsItem == rhsItem {
                return true
            }
        }
    }
   return false
}
```

::: tip 实验
修改any Common Elements（_：_：）函数，使其返回任意两个序列共有元素的数组。
写 `<T: Equatable>` 和写 `<T> ... where T: Equatable` 一样。
:::
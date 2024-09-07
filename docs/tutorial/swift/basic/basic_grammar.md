# 基础语法
Swift是用于iOS、macOS、watchOS和tvOS应用程序开发的编程语言。如果您有C或Objective-C开发经验，那么Swift的许多部分都会很熟悉。

Swift提供了自己版本的所有基本C和Objective-C类型，包括整数`Int`、浮点值`Double`和`Float`、布尔值`Bool`以及文本数据`String`。Swift还提供了三种主要集合类型Array、Set和Dictionary的强大版本，如集合类型中所述。

与C一样，Swift使用变量通过标识名称存储和引用值。 Swift还广泛使用其值无法更改的变量。这些称为常量，并且比C中的常量更加强大。在处理不需要更改的值时，在整个Swift中使用常量可以使代码更安全并清晰地表达意图。

除了熟悉的类型外，Swift还引入了Objective-C中没有找到的高级类型，例如元组（tuples）。元组使您能够创建并传递值组合。您可以使用元组将多个返回值从函数作为单个复合值返回。

Swift还引入了可选类型（optional types），它们处理缺少一个值时情况下该怎么办。可选项表示“存在一个等于x”的价值观或者根本不存在任何价值观”。虽然在Objective-C中使用nil指针类似于使用可选项，但它们适用于任何类型，而不仅仅是类。可选项不仅比Objective-C中的nil指针更安全和更具表现力，而且是Swift许多最强大功能的核心。

Swift是一种类型安全语言，这意味着该语言可以帮助您清楚地了解代码可以使用哪些值类型。如果您的代码的一部分需要一个String，则类型安全性会防止您错误地传递Int。同样，类型安全性还会防止您无意中将可选字符串传递给需要非可选字符串的代码片段。 类型安全有助于在开发过程尽早捕获并修复错误。


## 声明常量和变量 「Constants and Variables」
在使用常量和变量之前，必须先进行声明。你可以使用 let 关键字声明常量，使用 var 关键字声明变量。下面是一个例子，展示了如何使用常量和变量来跟踪用户的登录尝试次数：
``` swift
let maximumNumberOfLoginAttempts = 10
var currentLoginAttempt = 0
```
这段代码可以被解读为：

“声明一个新的常量，名为`maximumNumberOfLoginAttempts`，并赋值为10。然后，声明一个新的变量，名为`currentLoginAttempt`，并赋初值为0。”

在这个例子中，最大的登录尝试次数被声明为一个常量，因为这个最大值从不改变。当前的登录尝试次数被声明为一个变量，因为每次登录失败后，这个值必须增加。

你可以在一行中声明多个常量或多个变量，用逗号分隔：
``` swift
var x = 0.0, y = 0.0, z = 0.0
```

::: tip
如果你的代码中的一个存储值不会改变，那么总是应该用 let 关键字将其声明为常量。只有需要能够改变的值时，才使用变量进行存储。
:::
## 类型注释 「Type Annotations」
在声明常量或变量时，您可以提供类型注释，以明确该常量或变量可以存储的值的类型。通过在常量或变量名称后面放置冒号，然后是一个空格，接着是要使用的类型名称来编写类型注释。

以下示例为名为`welcomeMessage`的变量提供了一种类型注释，以指示该变量可以存储字符串值：
``` swift
var welcomeMessage: String
```
声明中的冒号表示“…的类型为…”，因此上面的代码可以理解为：

“声明一个名为`welcomeMessage`的变量，其类型为String。”

短语“类型为`String`”意味着“可以存储任何字符串值”。将其视为指代可存储内容的“种类”。

现在，`welcomeMessage`变量可以设置为任何字符串值而不会出错：
``` swift
welcomeMessage = "Hello"
``` 
您可以在一行上定义多个相同类型的相关变量，以逗号分隔，并在最终变量名称后使用单个类型注释：
``` swift
var red, green, blue: Double
```
::: tip

在实践中很少需要编写类型注释。如果您在定义常量或变量时为其提供初始值，Swift 几乎总是可以推断出该常量或变量要使用的类型，如类型安全和类型推断中所述。在上面的示例中，没有提供初始值，因此变量的类型是使用类型注释指定的，而不是从初始值推断出来的。welcomeMessagewelcomeMessage
:::
## 命名常量和变量 Naming Constants and Variables
常量和变量名称几乎可以包含任何字符，包括 Unicode 字符：
``` swift
let π = 3.14159
let 你好 = "你好世界"
let 🐶🐮 = "dogcow"
```
常量和变量名称不能包含空白字符、数学符号、箭头、专用 Unicode 标量值或线条和方框绘制字符。它们也不能以数字开头，尽管数字可能包含在名称中的其他位置。

一旦声明了某种类型的常量或变量，就不能用相同的名称再次声明它，也不能将其更改为存储不同类型的值。也不能将常量更改为变量或将变量更改为常量。

::: tip

如果您需要为常量或变量提供与保留的 Swift 关键字相同的名称，请在将其用作名称时用反引号 (```) 括住关键字。但是，除非您别无选择，否则请避免使用关键字作为名称。
:::
您可以将现有变量的值更改为兼容类型的另一个值。在此示例中， 的值从 更改为：friendlyWelcome"Hello!""Bonjour!"
``` swift
var friendlyWelcome = "Hello!"
friendlyWelcome = "Bonjour!"
// friendlyWelcome is now "Bonjour!"

```
与变量不同，常量的值一旦设置就不能更改。编译代码时尝试这样做会报告错误：
``` swift
let languageName = "Swift"
languageName = "Swift++"
// This is a compile-time error: languageName cannot be changed.
```
## 打印常量和变量 Printing Constants and Variables
您可以使用以下函数打印常量或变量的当前值：print(_:separator:terminator:)
``` swift
print(friendlyWelcome)
// Prints "Bonjour!"
```
该函数是一个全局函数，它将一个或多个值打印到适当的输出。例如，在 Xcode 中，该函数在 Xcode 的“控制台”窗格中打印其输出。和参数有默认值，因此调用此函数时可以省略它们。默认情况下，该函数通过添加换行符来终止它打印的行。要打印后面不带换行符的值，请传递一个空字符串作为终止符 - 例如，。有关具有默认值的参数的信息，请参阅默认参数值。print(_:separator:terminator:)print(_:separator:terminator:)separatorterminatorprint(someValue, terminator: "")

Swift 使用字符串插值将常量或变量的名称作为占位符包含在较长的字符串中，并提示 Swift 将其替换为该常量或变量的当前值。将名称括在括号中，并在左括号前使用反斜杠进行转义：
``` swift
print("The current value of friendlyWelcome is \(friendlyWelcome)")
// Prints "The current value of friendlyWelcome is Bonjour!"
```
::: tip

字符串插值中描述了可用于字符串插值的所有选项。
:::

## 注释 Comments 
使用注释在代码中包含不可执行的文本，作为对自己的注释或提醒。编译代码时，Swift 编译器会忽略注释。

Swift 中的注释与 C 中的注释非常相似。单行注释以两个正斜杠 ( //) 开头：
``` swift
// This is a comment.
```
多行注释以正斜杠开头，后跟星号 ( /*)，以星号后跟正斜杠 ( */) 结尾：
``` swift
/* This is also a comment
but is written over multiple lines. */
```
与 C 中的多行注释不同，Swift 中的多行注释可以嵌套在其他多行注释中。您可以通过启动多行注释块，然后在第一个块中启动第二个多行注释来编写嵌套注释。然后关闭第二个块，然后关闭第一个块：
``` swift
/* This is the start of the first multiline comment.
    /* This is the second, nested multiline comment. */
This is the end of the first multiline comment. */
```
嵌套多行注释使您能够快速轻松地注释掉大块代码，即使代码已经包含多行注释也是如此。

## 分号 Semicolons
与许多其他语言不同，Swift 不要求您在代码中的每个语句后编写分号 ( ;)，但如果您愿意，也可以这样做。但是，如果您想在一行上编写多个单独的语句，则需要分号：
``` swift
let cat = "🐱"; print(cat)
// Prints "🐱"
```
## 整数 Integers
整数是没有小数部分的整数，例如42和-23。整数可以是有符号的（正、零或负），也可以是无符号的（正或零）。

Swift 提供 8、16、32 和 64 位形式的有符号和无符号整数。这些整数遵循类似于 C 的命名约定，其中 8 位无符号整数的类型为UInt8，32 位有符号整数的类型为Int32。与 Swift 中的所有类型一样，这些整数类型的名称都大写。

## 整数界限 Integer Bounds
min您可以通过其和属性访问每个整数类型的最小值和最大值max：
``` swift
let minValue = UInt8.min  // minValue is equal to 0, and is of type UInt8
let maxValue = UInt8.max  // maxValue is equal to 255, and is of type UInt8
```
这些属性的值是适当大小的数字类型（例如UInt8上面的示例），因此可以与相同类型的其他值一起在表达式中使用。

## INT
在大多数情况下，您不需要选择在代码中使用的特定大小的整数。Swift 提供了一个额外的整数类型 ，Int它的大小与当前平台的本机字大小相同：

在 32 位平台上，Int大小与Int32.

在 64 位平台上，Int与Int64.

除非您需要使用特定大小的整数，否则请始终Int在代码中使用整数值。这有助于代码的一致性和互操作性。即使在 32 位平台上，Int也可以存储-2,147,483,648和之间的任何值2,147,483,647，并且对于许多整数范围来说足够大。

## UInt
Swift 还提供了无符号整数类型 ，UInt其大小与当前平台的本机字大小相同：

在 32 位平台上，UInt大小与UInt32.

在 64 位平台上，UInt与UInt64.

::: tip

UInt仅当您特别需要大小与平台本机字大小相同的无符号整数类型时才使用。如果情况并非如此Int，即使已知要存储的值是非负的，也是首选。整数值的一致使用Int有助于代码互操作性，避免在不同数字类型之间进行转换，并匹配整数类型推断，如类型安全和类型推断中所述。
:::
## 浮点数字 Floating-Point Numbers
浮点数是带有小数部分的数字，例如、和。3.141590.1-273.15

浮点类型可以表示比整数类型更广泛的值，并且可以存储比Int. Swift 提供了两种有符号浮点数类型：

Double表示 64 位浮点数。

Float表示 32 位浮点数。

::: tip

Double的精度至少为 15 位小数，而 的精度Float可以低至 6 位小数。要使用的适当浮点类型取决于您需要在代码中使用的值的性质和范围。在任何一种类型都合适的情况下，Double首选。
:::

## 类型安全和类型推断 Type Safety and Type Inference
Swift 是一种类型安全的语言。类型安全语言鼓励您清楚代码可以使用的值的类型。如果您的部分代码需要 a String，则您不能Int错误地传递它。

由于 Swift 是类型安全的，因此它会在编译代码时执行类型检查，并将任何不匹配的类型标记为错误。这使您能够在开发过程中尽早发现并修复错误。

类型检查可以帮助您在使用不同类型的值时避免错误。但是，这并不意味着您必须指定声明的每个常量和变量的类型。如果您没有指定所需值的类型，Swift 会使用类型推断来计算出适当的类型。类型推断使编译器能够在编译代码时自动推断出特定表达式的类型，只需检查您提供的值即可。

由于类型推断，Swift 需要的类型声明比 C 或 Objective-C 等语言少得多。常量和变量仍然是显式类型的，但指定其类型的大部分工作都已为您完成。

当您声明具有初始值的常量或变量时，类型推断特别有用。这通常是通过在声明常量或变量时为其分配一个文字值（或文字）来完成的。（文字值是直接出现在源代码中的值，例如下面的示例中的42和。）3.14159

例如，如果你42为一个新常量分配一个字面值 ，但没有说明它是什么类型，Swift 会推断你希望该常量是一个Int，因为你已经用一个看起来像整数的数字初始化了它：
``` swift
let meaningOfLife = 42
// meaningOfLife is inferred to be of type Int
```
同样，如果您没有指定浮点文字的类型，Swift 会推断您要创建一个Double：
``` swift
let pi = 3.14159
// pi is inferred to be of type Double
```
Swift在推断浮点数类型时总是选择Double(而不是)。Float

Double如果在表达式中组合整数和浮点文字，将从上下文中推断出 的类型：
``` swift
let anotherPi = 3 + 0.14159
// anotherPi is also inferred to be of type Double
```
的文字值3本身没有显式类型，因此Double根据作为加法的一部分的浮点文字的存在来推断适当的输出类型。

## 数字字面量 Numeric Literals
整数文字可以写成：

十进制数，没有前缀

带有前缀的二进制数0b

带有前缀的八进制数0o

一个十六进制数，带有0x前缀

所有这些整数文字的十进制值为17：
``` swift
let decimalInteger = 17
let binaryInteger = 0b10001       // 17 in binary notation
let octalInteger = 0o21           // 17 in octal notation
let hexadecimalInteger = 0x11     // 17 in hexadecimal notation
```
浮点文字可以是十进制（无前缀）或十六进制（有前缀0x）。它们的小数点两侧必须始终有一个数字（或十六进制数字）。十进制浮点数还可以有一个可选的指数，用大写或小写字母表示e；十六进制浮点数必须有一个指数，用大写或小写字母表示p。

对于指数为 的十进制数x，基数乘以 10ˣ：

1.25e2表示 1.25 x 10²，或.125.0

1.25e-2表示 1.25 x 10⁻²，或.0.0125

对于指数为 的十六进制数x，基数乘以 2ˣ：

0xFp2表示 15 x 2²，或.60.0

0xFp-2表示 15 x 2⁻²，或.3.75

所有这些浮点文字的十进制值为：12.1875
``` swift
let decimalDouble = 12.1875
let exponentDouble = 1.21875e1
let hexadecimalDouble = 0xC.3p0
```
数字文字可以包含额外的格式以使其更易于阅读。整数和浮点数都可以用额外的零填充，并且可以包含下划线以帮助提高可读性。这两种格式都不会影响文字的基础值：
``` swift
let paddedDouble = 000123.456
let oneMillion = 1_000_000
let justOverOneMillion = 1_000_000.000_000_1
```
## 数值类型转换 Numeric Type Convertion
Int为代码中的所有通用整型常量和变量使用该类型，即使它们已知为非负数。在日常情况下使用默认整数类型意味着整数常量和变量可以在代码中立即互操作，并且将与整数文字值的推断类型相匹配。

仅当手头的任务特别需要其他整数类型时（因为来自外部源的明确大小的数据，或者为了性能、内存使用或其他必要的优化）才使用其他整数类型。在这些情况下使用显式大小的类型有助于捕获任何意外的值溢出并隐式记录所使用数据的性质。

## 整数转换 Integer Convertion
对于每种数字类型，可以存储在整型常量或变量中的数字范围是不同的。常量Int8或变量可以存储-128和之间的数字127，而UInt8常量或变量可以存储0和之间的数字255。编译代码时，不适合大小整数类型的常量或变量的数字将报告为错误：
``` swift
let cannotBeNegative: UInt8 = -1
// UInt8 can't store negative numbers, and so this will report an error
let tooBig: Int8 = Int8.max + 1
// Int8 can't store a number larger than its maximum value,
// and so this will also report an error
```
由于每种数值类型可以存储不同范围的值，因此您必须根据具体情况选择进行数值类型转换。这种选择加入方法可以防止隐藏的转换错误，并有助于在代码中明确类型转换意图。

要将一种特定数字类型转换为另一种特定数字类型，请使用现有值初始化所需类型的新数字。在下面的示例中，常量的类型为，而常量的类型为。它们不能直接相加，因为它们不是同一类型。相反，此示例调用创建一个用 值初始化的新值，并使用该值代替原始值：twoThousandUInt16oneUInt8UInt16(one)UInt16one
``` swift
let twoThousand: UInt16 = 2_000
let one: UInt8 = 1
let twoThousandAndOne = twoThousand + UInt16(one)
```
因为现在加法两边都是 类型UInt16，所以允许加法。输出常量 ( ) 被推断为 类型，因为它是两个值的和。twoThousandAndOneUInt16UInt16

SomeType(ofInitialValue)是调用 Swift 类型的初始值设定项并传入初始值的默认方式。在幕后，UInt16有一个接受UInt8值的初始值设定项，因此该初始值设定项用于UInt16从现有的UInt8. 但是，您不能在此处传递任何类型 - 它必须是为其提供初始值设定项的类型UInt16。扩展中介绍了扩展现有类型以提供接受新类型（包括您自己的类型定义）的初始值设定项。

## 整数和浮点转换 Integer and Float-Point Conversion
整数和浮点数字类型之间的转换必须明确：
``` swift
let three = 3
let pointOneFourOneFiveNine = 0.14159
let pi = Double(three) + pointOneFourOneFiveNine
// pi equals 3.14159, and is inferred to be of type Double
```
这里，常量的值three用于创建类型为 的新值Double，使得加法两边的类型相同。如果没有进行此转换，则不允许添加。

浮点到整数的转换也必须明确。整数类型可以用DoubleorFloat值初始化：
``` swift
let integerPi = Int(pi)
// integerPi equals 3, and is inferred to be of type Int
```
当用于以这种方式初始化新的整数值时，浮点值总是被截断。这意味着成为，并且成为。4.754-3.9-3

::: tip

组合数字常量和变量的规则与数字文字的规则不同。文字值3可以直接添加到文字值，因为数字文字本身没有显式类型。它们的类型仅在编译器评估时推断。0.14159
:::
## 类型别名 Type Aliases
类型别名定义现有类型的替代名称。您可以使用关键字定义类型别名typealias。

当您想要通过上下文更合适的名称引用现有类型时，类型别名非常有用，例如在处理来自外部源的特定大小的数据时：
``` swift
typealias AudioSample = UInt16
```
定义类型别名后，您可以在任何可能使用原始名称的地方使用该别名：
``` swift
var maxAmplitudeFound = AudioSample.min
// maxAmplitudeFound is now 0
```
这里，被定义为 的别名。因为它是一个别名，所以对的调用实际上调用了，它为变量提供了初始值。AudioSampleUInt16AudioSample.minUInt16.min0maxAmplitudeFound

## 布尔值 Booleans
Swift 有一个基本的布尔类型，称为Bool. 布尔值被称为逻辑值，因为它们只能是 true 或 false。Swift 提供了两个布尔常量值，true和false：
``` swift
let orangesAreOrange = true
let turnipsAreDelicious = false
```
和的类型是根据它们是用布尔文字值初始化的事实推断出来的。与上面一样，您不需要声明常量或变量，就好像将它们设置为或在创建它们时一样。当使用类型已知的其他值初始化常量或变量时，类型推断有助于使 Swift 代码更加简洁和可读。orangesAreOrangeturnipsAreDeliciousBoolIntDoubleBooltruefalse

当您使用条件语句（例如以下if语句）时，布尔值特别有用：
``` swift
if turnipsAreDelicious {
    print("Mmm, tasty turnips!")
} else {
    print("Eww, turnips are horrible.")
}
// Prints "Eww, turnips are horrible."
```
控制流if中更详细地介绍了诸如 语句之类的条件语句。

Swift 的类型安全性可防止非布尔值被替换Bool。以下示例报告编译时错误：
``` swift
let i = 1
if i {
    // this example will not compile, and will report an error
}
```
但是，下面的替代示例是有效的：
``` swift
let i = 1
if i == 1 {
    // this example will compile successfully
}
```
比较结果的i == 1类型为Bool，因此第二个示例通过了类型检查。基本运算符i == 1中讨论了类似的比较。

与 Swift 中类型安全的其他示例一样，这种方法可以避免意外错误，并确保特定代码部分的意图始终清晰。

## 元组 Tuples
元组将多个值分组为单个复合值。元组中的值可以是任何类型，并且彼此之间的类型不必相同。

在此示例中，(404, "Not Found")是一个描述HTTP 状态代码 的元组。HTTP 状态代码是每当您请求网页时 Web 服务器返回的特殊值。404 Not Found如果您请求的网页不存在，则会返回状态代码。
``` swift
let http404Error = (404, "Not Found")
// http404Error is of type (Int, String), and equals (404, "Not Found")
```
该(404, "Not Found")元组将 anInt和 a组合在一起String，为 HTTP 状态代码提供两个单独的值：一个数字和一个人类可读的描述。它可以被描述为“类型的元组(Int, String)”。

您可以根据任何类型排列创建元组，并且它们可以包含任意数量的不同类型。没有什么可以阻止您拥有类型为(Int, Int, Int)、 或 的元组(String, Bool)，或者实际上您需要的任何其他排列。

您可以将元组的内容分解为单独的常量或变量，然后像往常一样访问它们：
``` swift
let (statusCode, statusMessage) = http404Error
print("The status code is \(statusCode)")
// Prints "The status code is 404"
print("The status message is \(statusMessage)")
// Prints "The status message is Not Found"
```
_如果您只需要元组的某些值，则在分解元组时忽略元组中带有下划线 ( ) 的部分：
``` swift
let (justTheStatusCode, _) = http404Error
print("The status code is \(justTheStatusCode)")
// Prints "The status code is 404"
```
或者，使用从零开始的索引号访问元组中的各个元素值：
``` swift
print("The status code is \(http404Error.0)")
// Prints "The status code is 404"
print("The status message is \(http404Error.1)")
// Prints "The status message is Not Found"
```
您可以在定义元组时命名元组中的各个元素：
``` swift
let http200Status = (statusCode: 200, description: "OK")
```
如果您命名元组中的元素，则可以使用元素名称来访问这些元素的值：
``` swift
print("The status code is \(http200Status.statusCode)")
// Prints "The status code is 200"
print("The status message is \(http200Status.description)")
// Prints "The status message is OK"
```
元组作为函数的返回值特别有用。尝试检索网页的函数可能会返回(Int, String)元组类型来描述页面检索的成功或失败。通过返回具有两个不同值（每个值都具有不同类型）的元组，与仅返回单一类型的单个值相比，该函数可以提供有关其结果的更多有用信息。有关详细信息，请参阅具有多个返回值的函数。

::: tip

元组对于简单的相关值组很有用。它们不适合创建复杂的数据结构。如果您的数据结构可能更复杂，请将其建模为类或结构，而不是元组。有关详细信息，请参阅结构和类。
:::
##  Optionals
在可能缺少值的情况下使用选项。可选值代表两种可能性：要么有一个值，并且您可以解开可选值以访问该值，要么根本没有值。

::: tip

C 或 Objective-C 中不存在选项的概念。Objective-C 中最接近的事情是能够nil从原本会返回对象的方法中返回，其nil含义是“缺少有效对象”。然而，这仅适用于对象——它不适用于结构、基本 C 类型或枚举值。对于这些类型，Objective-C 方法通常返回一个特殊值（例如）来指示值不存在。这种方法假设方法的调用者知道有一个特殊的值需要测试并记得检查它。Swift 的可选值让您可以指示任何类型根本不存在值，而不需要特殊的常量。NSNotFound
:::

下面是一个示例，说明如何使用选项来应对缺少值的情况。Swift 的Int类型有一个初始化器，它尝试将一个String值转换为一个Int值。但是，并不是每个字符串都可以转换为整数。字符串"123"可以转换为数值123，但字符串"hello, world"没有明显的数值可供转换。

下面的示例使用初始化器尝试将 a 转换String为 an Int：
``` swift
let possibleNumber = "123"
let convertedNumber = Int(possibleNumber)
// convertedNumber is inferred to be of type "Int?", or "optional Int"
```
因为初始化程序可能会失败，所以它返回一个可选的 Int，而不是Int。可选Int写为Int?, not Int。问号表示它包含的值是可选的，这意味着它可能包含一些 Int值，也可能根本不包含任何值。（它不能包含任何其他内容，例如Bool值或String值。它要么是Int，要么什么都没有。）

## nil
您可以通过为可选变量分配特殊值来将其设置为无值状态nil：
``` swift
var serverResponseCode: Int? = 404
// serverResponseCode contains an actual Int value of 404
serverResponseCode = nil
// serverResponseCode now contains no value
```
::: tip

您不能nil与非可选常量和变量一起使用。如果代码中的常量或变量需要在某些条件下在没有值的情况下工作，请始终将其声明为适当类型的可选值。
:::

如果您定义可选变量而不提供默认值，则该变量会自动设置为nil：
``` swift
var surveyAnswer: String?
// surveyAnswer is automatically set to nil
```
::: tip

Swift与 Objective-Cnil不一样。nil在 Objective-C 中，nil是一个指向不存在对象的指针。在 Swift 中，nil不是指针——而是缺少某种类型的值。任何类型的可选值都可以设置为nil，而不仅仅是对象类型。
:::
If 语句和强制展开
您可以使用if语句通过将可选值与 进行比较来查明可选值是否包含值nil。您可以使用“等于”运算符 ( ==) 或“不等于”运算符 ( !=) 执行此比较。

如果可选值具有值，则将其视为“不等于” nil：
``` swift
if convertedNumber != nil {
    print("convertedNumber contains some integer value.")
}
// Prints "convertedNumber contains some integer value."
```
一旦确定可选值确实包含!值，您就可以通过在可选值名称末尾添加感叹号 ( ) 来访问其基础值。感叹号有效地表示：“我知道这个可选值肯定有价值；请使用它。” 这称为强制展开可选值：
``` swift
if convertedNumber != nil {
    print("convertedNumber has an integer value of \(convertedNumber!).")
}
// Prints "convertedNumber has an integer value of 123."
```
有关该if语句的更多信息，请参阅控制流。

::: tip

尝试使用!访问不存在的可选值会触发运行时错误。nil在使用!强制解包其值之前，始终确保可选值包含非值。
:::
## if语句和强制解包 If Statements and Forced Unwapping
您可以使用可选绑定来查明可选值是否包含值，如果包含，则使该值可用作临时常量或变量。if可选绑定可以与and语句一起使用，while以检查可选值内的值，并将该值提取到常量或变量中，作为单个操作的一部分。if和语句在控制流while中有更详细的描述。

为if语句编写一个可选绑定，如下所示：
``` swift
if let <#constantName#> = <#someOptional#> {
   <#statements#>
}
```
您可以重写Options部分中的示例以使用可选绑定而不是强制展开：possibleNumber
``` swift
if let actualNumber = Int(possibleNumber) {
    print("The string \"\(possibleNumber)\" has an integer value of \(actualNumber)")
} else {
    print("The string \"\(possibleNumber)\" couldn't be converted to an integer")
}
// Prints "The string "123" has an integer value of 123"
```
这段代码可以读作：

Int“如果返回的可选值包含一个值，则设置一个新常量，调用该可选值中包含的值。”Int(possibleNumber)actualNumber

如果转换成功，该常量就可以在语句的第一个分支中使用。它已使用可选中包含的值进行初始化，因此您无需使用后缀来访问其值。在此示例中，仅用于打印转换结果。actualNumberif!actualNumber

如果在访问原始可选常量或变量包含的值后不需要引用它，则可以对新常量或变量使用相同的名称：
``` swift
let myNumber = Int(possibleNumber)
// Here, myNumber is an optional integer
if let myNumber = myNumber {
    // Here, myNumber is a non-optional integer
    print("My number is \(myNumber)")
}
// Prints "My number is 123"
```
此代码首先检查是否包含值，就像前面示例中的代码一样。如果有值，则将名为的新常量的值设置为该值。在语句正文中，写作指的是新的非可选常量。在语句开始之前和结束之后，写入指的是可选的整型常量。myNumbermyNumbermyNumberifmyNumberifmyNumber

由于这种代码非常常见，因此您可以使用更短的拼写来解包可选值：仅写入要解包的常量或变量的名称。新的、未包装的常量或变量隐式使用与可选值相同的名称。
``` swift
if let myNumber {
    print("My number is \(myNumber)")
}
// Prints "My number is 123"
```
您可以使用带有可选绑定的常量和变量。如果您想操作语句第一个分支中的值，您可以改为编写，并且可选中包含的值将作为变量而不是常量提供。您对语句主体内部所做的更改仅适用于该局部变量，而不适用于您解包的原始可选常量或变量。myNumberifif var myNumbermyNumberif

if您可以根据需要在单个语句中包含任意数量的可选绑定和布尔条件，并用逗号分隔。如果可选绑定中的任何值是nil或任何布尔条件计算结果为false，则整个if语句的条件被视为false。以下if语句是等效的：
``` swift
if let firstNumber = Int("4"), let secondNumber = Int("42"), firstNumber < secondNumber && secondNumber < 100 {
    print("\(firstNumber) < \(secondNumber) < 100")
}
// Prints "4 < 42 < 100"


if let firstNumber = Int("4") {
    if let secondNumber = Int("42") {
        if firstNumber < secondNumber && secondNumber < 100 {
            print("\(firstNumber) < \(secondNumber) < 100")
        }
    }
}
// Prints "4 < 42 < 100"
```
::: tip

在语句中使用可选绑定创建的常量和变量if仅在语句主体内可用if。相反，使用guard语句创建的常量和变量可在该语句后面的代码行中使用guard，如Early Exit中所述。
:::
## 隐式解包选项 Implicitly Unwapped Optional
如上所述，可选值表示允许常量或变量具有“无值”。可以使用语句检查可选值if以查看值是否存在，并且可以使用可选绑定有条件地展开以访问可选值（如果存在）。

有时，从程序的结构中可以清楚地看出，在首次设置该值之后，可选值将始终具有一个值。在这些情况下，消除每次访问可选值时检查和解开可选值的需要很有用，因为可以安全地假设它始终具有值。

这些类型的可选值被定义为隐式展开的可选值。您可以通过在要设为可选的类型后面放置感叹号 ( String!) 而不是问号 ( ) 来编写隐式展开的可选类型。String?当您使用它时，不是在可选项的名称后面放置一个感叹号，而是在声明它时在可选项的类型后面放置一个感叹号。

当首次定义可选值后立即确认可选值存在并且可以肯定地假定此后的每个点都存在时，隐式解包可选值非常有用。Swift 中隐式解包选项的主要用途是在类初始化期间，如无主引用和隐式解包可选属性中所述。

隐式解包的可选值是幕后的普通可选值，但也可以像非可选值一样使用，而无需在每次访问时解包可选值。以下示例显示了当以显式方式访问可选字符串和隐式解包可选字符串的包装值时，它们之间的行为差​​异String：
``` swift
let possibleString: String? = "An optional string."
let forcedString: String = possibleString! // requires an exclamation point


let assumedString: String! = "An implicitly unwrapped optional string."
let implicitString: String = assumedString // no need for an exclamation point
```
您可以将隐式解包选项视为允许在需要时强制解包选项。当您使用隐式解包的可选值时，Swift 首先尝试将其用作普通可选值；如果它不能用作可选值，Swift 会强制解包该值。在上面的代码中，可选值在将其值分配给之前被强制解包，因为它具有显式的非可选类型. 在下面的代码中，没有显式类型，因此它是一个普通的可选值。assumedStringimplicitStringimplicitStringStringoptionalString
``` swift
let optionalString = assumedString
// The type of optionalString is "String?" and assumedString isn't force-unwrapped.
```
如果隐式解包的可选值是nil并且您尝试访问其包装的值，则会触发运行时错误。结果与在不包含值的普通可选项后面放置感叹号完全相同。

您可以检查隐式展开的可选选项是否与nil检查普通可选选项的方式相同：
``` swift
if assumedString != nil {
    print(assumedString!)
}
// Prints "An implicitly unwrapped optional string."
```
您还可以使用带有可选绑定的隐式解包可选，以在单个语句中检查和解包其值：
``` swift
if let definiteString = assumedString {
    print(definiteString)
}
// Prints "An implicitly unwrapped optional string."
```
::: tip

当变量有可能nil稍后出现时，不要使用隐式展开的可选值。如果需要nil在变量的生命周期内检查值，请始终使用普通的可选类型。
:::
## 错误处理 Error Handling
您可以使用错误处理来响应程序在执行过程中可能遇到的错误情况。

与可选值不同，可选值可以使用值的存在或不存在来传达函数的成功或失败，错误处理允许您确定失败的根本原因，并在必要时将错误传播到程序的其他部分。

当函数遇到错误条件时，它会抛出错误。然后，该函数的调用者可以捕获错误并做出适当的响应。
``` swift
func canThrowAnError() throws {
    // this function may or may not throw an error
}
```
函数通过throws在其声明中包含关键字来指示它可以引发错误。当您调用可能引发错误的函数时，您可以将try关键字添加到表达式中。

Swift 会自动将错误传播到当前范围之外，直到它们被子句处理为止catch。
``` swift
do {
    try canThrowAnError()
    // no error was thrown
} catch {
    // an error was thrown
}
```
语句do创建一个新的包含范围，允许将错误传播到一个或多个catch子句。

以下是如何使用错误处理来响应不同错误条件的示例：
``` swift
func makeASandwich() throws {
    // ...
}


do {
    try makeASandwich()
    eatASandwich()
} catch SandwichError.outOfCleanDishes {
    washDishes()
} catch SandwichError.missingIngredients(let ingredients) {
    buyGroceries(ingredients)
}
```
在此示例中，如果没有干净的菜肴或缺少任何成分，该函数`makeASandwich()`将抛出错误。因为可能会引发错误，所以函数调用被包装在表达式中。通过将函数调用包装在语句中，引发的任何错误都将传播到提供的子句。makeASandwich()makeASandwich()trydocatch

如果没有抛出错误，则调用该函数。如果抛出错误并且与大小写匹配，则将调用该函数。如果抛出错误并且它与大小写匹配，则使用模式捕获的关联值调用该函数。eatASandwich()SandwichError.outOfCleanDisheswashDishes()SandwichError.missingIngredientsbuyGroceries(_:)[String]catch

错误处理中更详细地介绍了抛出、捕获和传播错误。

## 断言和前提条件 Assertions and Preconditions
断言和前提条件`Assertions and Preconditions`是在运行时发生的检查。您可以使用它们来确保在执行任何进一步的代码之前满足基本条件。如果断言或前置条件中的布尔条件的计算结果为true，则代码执行将照常继续。如果条件评估为false，则程序的当前状态无效；代码执行结束，您的应用程序被终止。

您可以使用断言和前提条件来表达您在编码时所做的假设和期望，因此您可以将它们包含在代码中。断言可帮助您在开发过程中发现错误和不正确的假设，前提条件可帮助您检测生产中的问题。

除了在运行时验证您的期望之外，断言和前提条件也成为代码中有用的文档形式。与上面错误处理中讨论的错误条件不同，断言和先决条件不用于可恢复或预期的错误。由于失败的断言或前置条件指示无效的程序状态，因此无法捕获失败的断言。

使用断言和前提条件并不能替代以不太可能出现无效条件的方式设计代码。但是，使用它们来强制执行有效的数据和状态会导致您的应用程序在出现无效状态时更可预测地终止，并有助于使问题更易于调试。一旦检测到无效状态就停止执行也有助于限制该无效状态造成的损害。

断言和前置条件之间的区别在于检查它们的时间：仅在调试版本中检查断言，但在调试和生产版本中都会检查前置条件。在生产版本中，不会评估断言内的条件。这意味着您可以在开发过程中使用任意数量的断言，而不会影响生产性能。

## 使用断言进行调试 Debugging with Assertions
您可以通过调用Swift 标准库中的函数来编写断言。您可以向该函数传递一个计算结果为or 的表达式，以及一条在条件结果为 时显示的消息。例如：assert(_:_:file:line:)truefalsefalse
``` swift
let age = -3
assert(age >= 0, "A person's age can't be less than zero.")
// This assertion fails because -3 isn't >= 0.
```
age >= 0在此示例中，如果计算结果为true，即，如果 的值为非负值，则代码继续执行age。如果 的值为age负数（如上面的代码所示），则age >= 0计算结果为false，并且断言失败，终止应用程序。

您可以省略断言消息 - 例如，当它只是将条件重复为散文时。
``` swift
assert(age >= 0)
```
如果代码已经检查了条件，则可以使用该函数`assertionFailure(_:file:line:)`来指示断言失败。例如：
``` swift
if age > 10 {
    print("You can ride the roller-coaster or the ferris wheel.")
} else if age >= 0 {
    print("You can ride the ferris wheel.")
} else {
    assertionFailure("A person's age can't be less than zero.")
}
```
## 执行先决条件 Enforcing Preconditions
只要条件可能为假，但必须为真，代码才能继续执行，请使用前提条件。例如，使用前置条件来检查下标是否超出范围，或者检查函数是否已传递有效值。

您可以通过调用该函数`precondition(_:_:file:line:)`来编写前提条件。您可以向该函数传递一个计算结果为or 的表达式，以及一条在条件结果为 时显示的消息。例如：
``` swift
// In the implementation of a subscript...
precondition(index > 0, "Index must be greater than zero.")
```
您还可以调用该函数`preconditionFailure(_:file:line:)` 来指示发生了故障 - 例如，如果采用了开关的默认情况，但所有有效输入数据都应由开关的其他情况之一处理。

::: tip

如果您在未检查模式 ( -Ounchecked) 下进行编译，则不会检查先决条件。编译器假定前提条件始终为真，并相应地优化您的代码。但是，无论优化设置如何，该函数始终会停止执行。fatalError(_:file:line:)


您可以在原型设计和早期开发期间使用该函数，通过编写为存根实现来为尚未实现的功能创建存根。因为与断言或先决条件不同，致命错误永远不会被优化掉，所以您可以确保执行在遇到存根实现时始终会停止。fatalError(_:file:line:)fatalError("Unimplemented")
:::

::: info
测试版软件

本文档包含有关正在开发的 API 或技术的初步信息。该信息可能会发生变化，并且根据本文档实现的软件应使用最终操作系统软件进行测试。

了解有关使用Apple 测试版软件的更多信息。
:::
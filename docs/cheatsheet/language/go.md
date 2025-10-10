---
title: Go 速记表
sidebar: false
single: true
order: 6
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `package main
import "fmt"
func main() {
    fmt.Println("Hello, World!")
}`,
        language: 'go'
      },
      {
        title: '输入输出',
        code: `package main
import "fmt"
func main() {
    // 输出
    fmt.Println("Hello, World!")
    fmt.Printf("Name: %s, Age: %d\\n", "Alice", 25)
    // 输入
    var name string
    var age int
    fmt.Print("Enter your name: ")
    fmt.Scanln(&name)
    fmt.Print("Enter your age: ")
    fmt.Scanln(&age)
    fmt.Printf("Hello, %s!\\n", name)
}`,
        language: 'go'
      },
      {
        title: '注释',
        code: `// 单行注释
/* 多行注释
   可以换行 */
// Package 文档注释
// 紧贴 package 声明上方`,
        language: 'go'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `var name string = "Alice"
var age int = 25
var x int  // 零值初始化
// 短声明（仅函数内）
count := 10
name := "Bob"
// 多变量声明
var (
    x int = 1
    y int = 2
)
a, b := 1, 2`,
        language: 'go'
      },
      {
        title: '常量',
        code: `const PI = 3.14
const (
    StatusOK = 200
    StatusNotFound = 404
)
// iota 枚举
const (
    Sunday = iota    // 0
    Monday           // 1
    Tuesday          // 2
)`,
        language: 'go'
      },
      {
        title: '作用域',
        code: `var globalVar = "global"  // 包级作用域
func example() {
    localVar := "local"   // 函数作用域
    if true {
        blockVar := "block"  // 块作用域
    }
}`,
        language: 'go'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `// 整数
int int8 int16 int32 int64
uint uint8 uint16 uint32 uint64 uintptr
// 浮点数
float32 float64
// 复数
complex64 complex128
// 其他
bool
byte  // uint8 别名
rune  // int32 别名，表示 Unicode 码点
string`,
        language: 'go'
      },
      {
        title: '复合类型',
        code: `// 数组
var arr [5]int
// 切片
var slice []int
// 映射
var m map[string]int
// 结构体
type Person struct {
    Name string
    Age  int
}
// 指针
var p *int`,
        language: 'go'
      },
      {
        title: '类型转换',
        code: `var i int = 42
var f float64 = float64(i)
var u uint = uint(f)
// 字符串转换
str := strconv.Itoa(i)
num, err := strconv.Atoi(str)
f, err := strconv.ParseFloat("3.14", 64)`,
        language: 'go'
      },
      {
        title: '零值',
        code: `// 未初始化变量的默认值
0      // 数字类型
false  // bool
""     // string
nil    // 指针、切片、映射、通道、函数`,
        language: 'go'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '算术运算符',
        code: `+  -  *  /  %
++  --  // 只能后置`,
        language: 'go'
      },
      {
        title: '比较运算符',
        code: `==  !=
>  <  >=  <=`,
        language: 'go'
      },
      {
        title: '逻辑运算符',
        code: `&&  ||  !`,
        language: 'go'
      },
      {
        title: '位运算符',
        code: `&   |   ^   &^  // 与、或、异或、与非
<<  >>              // 左移、右移`,
        language: 'go'
      },
      {
        title: '赋值运算符',
        code: `=  +=  -=  *=  /=  %=
&=  |=  ^=  <<=  >>=  &^=`,
        language: 'go'
      },
      {
        title: '取址与解引用',
        code: `&x  // 取地址
*p  // 解引用`,
        language: 'go'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '字符串基础',
        code: `s := "hello"
s := \`multi
line
string\`  // 原始字符串

// 字符串不可变
// s[0] = 'H'  // 错误

len(s)  // 字节长度`,
        language: 'go'
      },
      {
        title: '字符串操作',
        code: `import "strings"
strings.Contains(s, "sub")
strings.HasPrefix(s, "pre")
strings.HasSuffix(s, "suf")
strings.Index(s, "sub")
strings.LastIndex(s, "sub")
strings.Count(s, "sub")
strings.ToUpper(s)
strings.ToLower(s)
strings.Title(s)
strings.TrimSpace(s)
strings.Trim(s, "cutset")
strings.TrimLeft(s, "cutset")
strings.TrimRight(s, "cutset")`,
        language: 'go'
      },
      {
        title: '字符串分割与拼接',
        code: `parts := strings.Split(s, " ")
joined := strings.Join(parts, "-")
repeated := strings.Repeat("ab", 3)
strings.Replace(s, "old", "new", n)
strings.ReplaceAll(s, "old", "new")`,
        language: 'go'
      },
      {
        title: '字符串构建',
        code: `import "strings"
var sb strings.Builder
sb.WriteString("Hello")
sb.WriteString(" World")
result := sb.String()
// 格式化
s := fmt.Sprintf("Name: %s, Age: %d", name, age)`,
        language: 'go'
      }
    ]
  },
  {
    title: '集合数据结构',
    items: [
      {
        title: '数组',
        code: `var arr [5]int
arr := [5]int{1, 2, 3, 4, 5}
arr := [...]int{1, 2, 3}  // 自动推导长度
len(arr)  // 长度
// 遍历
for i, v := range arr {
    fmt.Println(i, v)
}`,
        language: 'go'
      },
      {
        title: '切片',
        code: `// 创建切片
s := []int{1, 2, 3}
s := make([]int, 5)       // 长度 5
s := make([]int, 0, 10)   // 长度 0，容量 10
// 操作
s = append(s, 4)
s = append(s, 5, 6, 7)
s = append(s, other...)
len(s)    // 长度
cap(s)    // 容量
// 切片操作
sub := s[1:3]   // [1, 3)
sub := s[:3]    // 前 3 个
sub := s[2:]    // 从索引 2 到末尾`,
        language: 'go'
      },
      {
        title: '映射 (Map)',
        code: `// 创建
m := make(map[string]int)
m := map[string]int{
    "alice": 25,
    "bob": 30,
}
// 操作
m["key"] = 100
value := m["key"]
// 检查键是否存在
value, ok := m["key"]
if ok {
    fmt.Println(value)
}
delete(m, "key")
len(m)
// 遍历
for key, value := range m {
    fmt.Println(key, value)
}`,
        language: 'go'
      }
    ]
  },
  {
    title: '控制流',
    items: [
      {
        title: 'if / else',
        code: `if condition {
    // 执行
} else if other {
    // 执行
} else {
    // 执行
}
// if 带初始化语句
if err := doSomething(); err != nil {
    return err
}`,
        language: 'go'
      },
      {
        title: 'switch',
        code: `switch value {
    case 1:
        fmt.Println("one")
    case 2, 3:
        fmt.Println("two or three")
    default:
        fmt.Println("other")
}
// 无条件 switch
switch {
    case x < 0:
        fmt.Println("negative")
    case x == 0:
        fmt.Println("zero")
    default:
        fmt.Println("positive")
}`,
        language: 'go'
      },
      {
        title: 'for 循环',
        code: `// C 风格 for
for i := 0; i < 10; i++ {
    fmt.Println(i)
}
// while 风格
for condition {
    // 执行
}
// 无限循环
for {
    // 执行
    if done {
        break
    }
}
// range 遍历
for i, v := range slice {
    fmt.Println(i, v)
}
// 只要值
for _, v := range slice {
    fmt.Println(v)
}`,
        language: 'go'
      },
      {
        title: '跳转语句',
        code: `break     // 退出循环
continue  // 跳过本次
return    // 返回
// 标签跳转
outer:
for i := 0; i < 3; i++ {
    for j := 0; j < 3; j++ {
        if i == 1 && j == 1 {
            break outer
        }
    }
}`,
        language: 'go'
      },
      {
        title: 'defer',
        code: `func example() {
    defer fmt.Println("World")  // 函数返回前执行
    fmt.Println("Hello")
    // 输出：Hello World
}
// 常用于资源清理
file, err := os.Open("file.txt")
defer file.Close()`,
        language: 'go'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '函数定义',
        code: `func add(a, b int) int {
    return a + b
}
// 多返回值
func swap(a, b string) (string, string) {
    return b, a
}
// 命名返回值
func divide(a, b int) (result int, err error) {
    if b == 0 {
        err = errors.New("division by zero")
        return
    }
    result = a / b
    return
}`,
        language: 'go'
      },
      {
        title: '可变参数',
        code: `func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}
result := sum(1, 2, 3, 4, 5)`,
        language: 'go'
      },
      {
        title: '匿名函数与闭包',
        code: `// 匿名函数
fn := func(x int) int {
    return x * 2
}
// 立即执行
result := func(x int) int {
    return x * 2
}(5)
// 闭包
func counter() func() int {
    count := 0
    return func() int {
        count++
        return count
    }
}`,
        language: 'go'
      },
      {
        title: '高阶函数',
        code: `func apply(fn func(int) int, value int) int {
    return fn(value)
}
func multiplier(factor int) func(int) int {
    return func(x int) int {
        return x * factor
    }
}`,
        language: 'go'
      }
    ]
  },
  {
    title: '结构体与方法',
    items: [
      {
        title: '结构体定义',
        code: `type Person struct {
    Name string
    Age  int
}
// 创建实例
p1 := Person{Name: "Alice", Age: 25}
p2 := Person{"Bob", 30}
p3 := &Person{Name: "Charlie"}`,
        language: 'go'
      },
      {
        title: '方法',
        code: `func (p Person) Greet() string {
    return "Hello, I'm " + p.Name
}
// 指针接收者（可修改）
func (p *Person) HaveBirthday() {
    p.Age++
}
p := Person{Name: "Alice", Age: 25}
p.HaveBirthday()`,
        language: 'go'
      },
      {
        title: '嵌入（组合）',
        code: `type Address struct {
    City    string
    Country string
}
type Employee struct {
    Person      // 嵌入
    Address     // 嵌入
    Salary int
}
e := Employee{
    Person: Person{Name: "Alice", Age: 25},
    Salary: 5000,
}
fmt.Println(e.Name)  // 直接访问嵌入字段`,
        language: 'go'
      }
    ]
  },
  {
    title: '接口',
    items: [
      {
        title: '接口定义',
        code: `type Reader interface {
    Read(p []byte) (n int, err error)
}
type Writer interface {
    Write(p []byte) (n int, err error)
}
// 组合接口
type ReadWriter interface {
    Reader
    Writer
}`,
        language: 'go'
      },
      {
        title: '实现接口',
        code: `type MyReader struct{}
func (r MyReader) Read(p []byte) (n int, err error) {
    // 实现细节
    return len(p), nil
}
// 隐式实现，无需声明
var r Reader = MyReader{}`,
        language: 'go'
      },
      {
        title: '空接口',
        code: `// interface{} 或 any (Go 1.18+) 可以表示任何类型
var i interface{} = "hello"
var a any = 42`,
        language: 'go'
      },
      {
        title: '类型断言',
        code: `var i interface{} = "hello"
// 类型断言
s := i.(string)
// 安全断言
s, ok := i.(string)
if ok {
    fmt.Println(s)
}
// 类型判断
switch v := i.(type) {
case int:
    fmt.Printf("int: %d\\n", v)
case string:
    fmt.Printf("string: %s\\n", v)
default:
    fmt.Printf("unknown\\n")
}`,
        language: 'go'
      }
    ]
  },
  {
    title: '错误处理',
    items: [
      {
        title: '错误处理模式',
        code: `result, err := someFunction()
if err != nil {
    return err  // 或 log.Fatal(err)
}
// 使用 errors 包
import "errors"
err := errors.New("something went wrong")
err := fmt.Errorf("error: %s", msg)`,
        language: 'go'
      },
      {
        title: '自定义错误',
        code: `type MyError struct {
    Code    int
    Message string
}
func (e *MyError) Error() string {
    return fmt.Sprintf("error %d: %s", e.Code, e.Message)
}
err := &MyError{Code: 404, Message: "Not Found"}`,
        language: 'go'
      },
      {
        title: '错误包装',
        description: 'Go 1.13+',
        code: `import "errors"
err := fmt.Errorf("failed to process: %w", originalErr)
// 检查错误
if errors.Is(err, os.ErrNotExist) {
    // 处理
}
// 类型判断
var pathErr *os.PathError
if errors.As(err, &pathErr) {
    fmt.Println(pathErr.Path)
}`,
        language: 'go'
      },
      {
        title: 'panic 与 recover',
        code: `// panic 导致程序崩溃
panic("something went wrong")
// recover 捕获 panic
func safeDivide(a, b int) (result int) {
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("Recovered:", r)
            result = 0
        }
    }()
    result = a / b
    return
}`,
        language: 'go'
      }
    ]
  },
  {
    title: '并发编程',
    items: [
      {
        title: 'Goroutine',
        code: `// 启动 goroutine
go func() {
    fmt.Println("Running in goroutine")
}()
go processData(data)
// 匿名 goroutine
go func(msg string) {
    fmt.Println(msg)
}("Hello")`,
        language: 'go'
      },
      {
        title: 'Channel',
        code: `// 创建 channel
ch := make(chan int)
ch := make(chan int, 10)  // 带缓冲
// 发送
ch <- 42
// 接收
value := <-ch
// 关闭
close(ch)
// 检查 channel 是否关闭
value, ok := <-ch
if !ok {
    fmt.Println("Channel closed")
}`,
        language: 'go'
      },
      {
        title: 'Select',
        code: `select {
case msg := <-ch1:
    fmt.Println("Received from ch1:", msg)
case msg := <-ch2:
    fmt.Println("Received from ch2:", msg)
case <-time.After(time.Second):
    fmt.Println("Timeout")
default:
    fmt.Println("No communication")
}`,
        language: 'go'
      },
      {
        title: 'WaitGroup',
        code: `import "sync"
var wg sync.WaitGroup
for i := 0; i < 5; i++ {
    wg.Add(1)
    go func(id int) {
        defer wg.Done()
        fmt.Println("Worker", id)
    }(i)
}
wg.Wait()`,
        language: 'go'
      },
      {
        title: 'Mutex',
        code: `import "sync"
var mu sync.Mutex
var counter int
mu.Lock()
counter++
mu.Unlock()
// RWMutex
var rwMu sync.RWMutex
rwMu.RLock()   // 读锁
rwMu.RUnlock()
rwMu.Lock()    // 写锁
rwMu.Unlock()`,
        language: 'go'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: '读取文件',
        code: `import "os"
// 读取全部
data, err := os.ReadFile("file.txt")
if err != nil {
    log.Fatal(err)
}
fmt.Println(string(data))
// 逐行读取
file, err := os.Open("file.txt")
defer file.Close()
scanner := bufio.NewScanner(file)
for scanner.Scan() {
    fmt.Println(scanner.Text())
}`,
        language: 'go'
      },
      {
        title: '写入文件',
        code: `// 写入全部
err := os.WriteFile("file.txt", []byte("content"), 0644)
// 追加写入
file, err := os.OpenFile("file.txt", os.O_APPEND|os.O_WRONLY, 0644)
defer file.Close()
file.WriteString("more content\\n")`,
        language: 'go'
      },
      {
        title: 'JSON 操作',
        code: `import "encoding/json"
// 序列化
data, err := json.Marshal(obj)
jsonStr, err := json.MarshalIndent(obj, "", "  ")
// 反序列化
var obj MyStruct
err := json.Unmarshal(data, &obj)`,
        language: 'go'
      }
    ]
  },
  {
    title: '泛型',
    items: [
      {
        title: '泛型函数',
        description: 'Go 1.18+',
        code: `func Min[T constraints.Ordered](a, b T) T {
    if a < b {
        return a
    }
    return b
}
result := Min(1, 2)
result := Min("a", "b")`,
        language: 'go'
      },
      {
        title: '泛型类型',
        code: `type Stack[T any] struct {
    items []T
}
func (s *Stack[T]) Push(item T) {
    s.items = append(s.items, item)
}
func (s *Stack[T]) Pop() T {
    item := s.items[len(s.items)-1]
    s.items = s.items[:len(s.items)-1]
    return item
}`,
        language: 'go'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格',
        code: `// 使用 gofmt 格式化代码
// 使用短变量声明
x := 10
// 尽早返回
if err != nil {
    return err
}
// 使用有意义的名称
count := len(users)  // 好
c := len(users)      // 不好`,
        language: 'go'
      },
      {
        title: '错误处理',
        code: `// 不要忽略错误
result, err := someFunc()
if err != nil {
    return fmt.Errorf("failed to do something: %w", err)
}
// 使用 defer 清理资源
file, err := os.Open("file.txt")
if err != nil {
    return err
}
defer file.Close()`,
        language: 'go'
      },
      {
        title: '并发安全',
        code: `// 不要通过共享内存通信，而要通过通信共享内存
// 使用 channel 传递数据
ch := make(chan int)
go func() {
    ch <- processData()
}()
result := <-ch
// 必要时使用 mutex
var mu sync.Mutex
mu.Lock()
// 访问共享资源
mu.Unlock()`,
        language: 'go'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: 'Go 命令',
        code: `go run main.go          # 运行
go build                # 编译
go test                 # 测试
go mod init             # 初始化模块
go mod tidy             # 整理依赖
go get package          # 获取包
go install              # 安装
go fmt                  # 格式化
go vet                  # 静态分析`,
        language: 'bash'
      },
      {
        title: '测试',
        code: `// example_test.go
package example
import "testing"
func TestAdd(t *testing.T) {
    result := Add(2, 3)
    if result != 5 {
        t.Errorf("Expected 5, got %d", result)
    }
}
// 基准测试
func BenchmarkAdd(b *testing.B) {
    for i := 0; i < b.N; i++ {
        Add(2, 3)
    }
}`,
        language: 'go'
      },
      {
        title: '常用工具',
        code: `# golangci-lint - 代码检查
golangci-lint run
# go-staticcheck - 静态分析
staticcheck ./...
# godoc - 文档生成
godoc -http=:6060`,
        language: 'bash'
      }
    ]
  }
]
</script>

# Go 速记表

<Cheatsheet :sections="cheatsheetData" />

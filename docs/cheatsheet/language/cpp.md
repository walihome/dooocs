---
title: C++ 速记表
sidebar: false
single: true
order: 2
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `#include &lt;iostream>
using namespace std;
int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
        language: 'cpp'
      },
      {
        title: '输入输出',
        code: `#include &lt;iostream>
#include &lt;string>
using namespace std;
int main() {
    // 输出
    cout << "Hello, World!" << endl;
    cout << "Number: " << 42 << ", Float: " << 3.14 << endl;
    // 输入
    string name;
    int age;
    cout << "Enter your name: ";
    cin >> name;
    cout << "Enter your age: ";
    cin >> age;
    cout << "Hello, " << name << "!" << endl;
    return 0;
}`,
        language: 'cpp'
      },
      {
        title: '注释',
        code: `// 单行注释
/* 多行注释 */
/**
 * Doxygen 文档注释
 * @param x 参数说明
 * @return 返回值说明
 */`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `int x = 10;
auto y = 20;           // C++11 类型推导
const int MAX = 100;
constexpr int SIZE = 50;
int& ref = x;          // 引用
const int* ptr = &x;   // 指针`,
        language: 'cpp'
      },
      {
        title: '引用',
        code: `int x = 10;
int& ref = x;
ref = 20;  // x 也变为 20
// 常量引用
const int& cref = x;
// 右值引用 (C++11)
int&& rref = 10;`,
        language: 'cpp'
      },
      {
        title: '作用域',
        code: `int globalVar = 0;  // 全局
int main() {
    int localVar = 0;  // 局部
    {
        int blockVar = 0;  // 块作用域
    }
    static int staticVar = 0;  // 静态
}`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `// 整数
int short long long long
unsigned int unsigned long
// 浮点数
float double long double
// 字符
char wchar_t char16_t char32_t  // C++11
// 布尔
bool
// 空类型
void`,
        language: 'cpp'
      },
      {
        title: 'STL 容器',
        code: `#include &lt;vector>
#include &lt;string&gt;
#include &lt;map>
#include &lt;set>
vector<int> v;
string s;
map<string, int> m;
set<int> st;`,
        language: 'cpp'
      },
      {
        title: '类型转换',
        code: `// C 风格
int i = (int)3.14;
// C++ 风格
static_cast<int>(3.14)
dynamic_cast<Derived*>(base)
const_cast<int*>(const_ptr)
reinterpret_cast<int*>(ptr)`,
        language: 'cpp'
      },
      {
        title: 'auto 与 decltype',
        description: 'C++11',
        code: `auto x = 10;  // int
auto s = "hello"s;  // string
auto vec = vector<int>{1, 2, 3};
decltype(x) y = 20;  // y 的类型与 x 相同`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '基本运算符',
        code: `// 算术
+  -  *  /  %  ++  --
// 比较
==  !=  >  <  >=  <=
// 逻辑
&&  ||  !
// 位运算
&  |  ^  ~  <<  >>
// 赋值
=  +=  -=  *=  /=  %=  &=  |=  ^=  <<=  >>=`,
        language: 'cpp'
      },
      {
        title: '作用域运算符',
        code: `::         // 全局作用域
class::    // 类作用域
namespace::  // 命名空间`,
        language: 'cpp'
      },
      {
        title: '成员访问',
        code: `.          // 对象成员
->         // 指针成员
.*         // 成员指针
->*        // 成员指针`,
        language: 'cpp'
      },
      {
        title: '其他运算符',
        code: `sizeof()   // 大小
typeid()   // 类型信息
new delete // 内存管理
?:         // 三元运算符`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: 'string 基础',
        code: `#include &lt;string&gt;
string s = "Hello";
s += " World";
s.append(" !");
s.length();
s.size();
s.empty();
s.clear();
s[0] = 'h';
s.at(0) = 'h';`,
        language: 'cpp'
      },
      {
        title: '字符串方法',
        code: `s.substr(0, 5);
s.find("sub");
s.rfind("sub");
s.find_first_of("aeiou");
s.find_last_of("aeiou");
s.replace(0, 5, "Hi");
s.insert(5, "text");
s.erase(0, 5);
s.c_str();  // 转 C 字符串`,
        language: 'cpp'
      },
      {
        title: '字符串转换',
        code: `// 数字转字符串
to_string(42);
to_string(3.14);
// 字符串转数字
stoi("42");
stol("1000");
stof("3.14");
stod("3.14159");`,
        language: 'cpp'
      },
      {
        title: '字符串流',
        code: `#include &lt;sstream>
stringstream ss;
ss << "Value: " << 42;
string result = ss.str();
// 解析
ss.str("10 20 30");
int a, b, c;
ss >> a >> b >> c;`,
        language: 'cpp'
      }
    ]
  },
  {
    title: 'STL 容器',
    items: [
      {
        title: 'vector',
        code: `#include &lt;vector>
vector<int> v = {1, 2, 3};
v.push_back(4);
v.pop_back();
v[0] = 100;
v.at(0) = 100;
v.size();
v.empty();
v.clear();
v.front();
v.back();
v.insert(v.begin(), 5);
v.erase(v.begin());`,
        language: 'cpp'
      },
      {
        title: 'map',
        code: `#include &lt;map>
map<string, int> m;
m["key"] = 100;
m.insert({"key2", 200});
m["key"];
m.at("key");
m.count("key");
m.find("key") != m.end();
m.erase("key");
for (auto& [key, value] : m) {  // C++17
    cout << key << ": " << value << endl;
}`,
        language: 'cpp'
      },
      {
        title: 'set',
        code: `#include &lt;set>
set<int> s;
s.insert(10);
s.insert(20);
s.count(10);
s.find(10) != s.end();
s.erase(10);
for (int x : s) {
    cout << x << endl;
}`,
        language: 'cpp'
      },
      {
        title: 'unordered_map/set',
        description: 'C++11 哈希表',
        code: `#include &lt;unordered_map>
#include &lt;unordered_set>
unordered_map<string, int> umap;
unordered_set<int> uset;
// 用法同 map/set，但无序，性能更好`,
        language: 'cpp'
      },
      {
        title: 'deque & list',
        code: `#include &lt;deque>
#include &lt;list>
deque<int> dq;
dq.push_front(1);
dq.push_back(2);
list<int> lst;
lst.push_front(1);
lst.push_back(2);`,
        language: 'cpp'
      }
    ]
  },
  {
    title: 'STL 算法',
    items: [
      {
        title: '排序与查找',
        code: `#include &lt;algorithm>
sort(v.begin(), v.end());
sort(v.begin(), v.end(), greater<int>());
auto it = find(v.begin(), v.end(), 5);
binary_search(v.begin(), v.end(), 5);
lower_bound(v.begin(), v.end(), 5);
upper_bound(v.begin(), v.end(), 5);`,
        language: 'cpp'
      },
      {
        title: '变换与过滤',
        code: `// transform
vector<int> result(v.size());
transform(v.begin(), v.end(), result.begin(), 
    [](int x) { return x * 2; });
// copy_if
vector<int> evens;
copy_if(v.begin(), v.end(), back_inserter(evens),
    [](int x) { return x % 2 == 0; });`,
        language: 'cpp'
      },
      {
        title: '累积与计数',
        code: `#include &lt;numeric>
int sum = accumulate(v.begin(), v.end(), 0);
int product = accumulate(v.begin(), v.end(), 1, multiplies<int>());
int cnt = count(v.begin(), v.end(), 5);
int cnt = count_if(v.begin(), v.end(), [](int x) { return x &gt; 10; });`,
        language: 'cpp'
      },
      {
        title: '其他算法',
        code: `reverse(v.begin(), v.end());
rotate(v.begin(), v.begin() + 2, v.end());
unique(v.begin(), v.end());  // 需先排序
int minVal = *min_element(v.begin(), v.end());
int maxVal = *max_element(v.begin(), v.end());`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '控制流',
    items: [
      {
        title: 'if / else',
        code: `if (condition) {
    // 执行
} else if (other) {
    // 执行
} else {
    // 执行
}
// if 初始化 (C++17)
if (auto it = m.find("key"); it != m.end()) {
    cout << it->second << endl;
}`,
        language: 'cpp'
      },
      {
        title: 'switch',
        code: `switch (value) {
    case 1:
        cout << "one" << endl;
        break;
    case 2:
    case 3:
        cout << "two or three" << endl;
        break;
    default:
        cout << "other" << endl;
}`,
        language: 'cpp'
      },
      {
        title: '循环',
        code: `for (int i = 0; i &lt; 10; i++) {}
// 范围 for (C++11)
for (auto& item : vec) {}
for (const auto& [key, value] : map) {}  // C++17
while (condition) {}
do {} while (condition);`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '函数定义',
        code: `int add(int a, int b) {
    return a + b;
}
// 默认参数
void greet(string name = "Guest") {
    cout << "Hello, " << name << endl;
}
// 内联函数
inline int square(int x) {
    return x * x;
}`,
        language: 'cpp'
      },
      {
        title: 'Lambda 表达式',
        description: 'C++11',
        code: `auto add = [](int a, int b) { return a + b; };
int x = 10;
auto captureByValue = [x]() { return x; };
auto captureByRef = [&x]() { x++; };
auto captureAll = [=]() { /* 值捕获所有 */ };
auto captureAllRef = [&]() { /* 引用捕获所有 */ };`,
        language: 'cpp'
      },
      {
        title: '函数模板',
        code: `template<typename T>
T max(T a, T b) {
    return (a &gt; b) ? a : b;
}
auto result = max(10, 20);
auto result = max(3.14, 2.71);`,
        language: 'cpp'
      },
      {
        title: '可变参数模板',
        description: 'C++11',
        code: `template<typename... Args>
void print(Args... args) {
    (cout << ... << args) << endl;  // C++17 折叠表达式
}
print(1, 2, 3, "hello");`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '面向对象',
    items: [
      {
        title: '类定义',
        code: `class Person {
private:
    string name;
    int age;
public:
    Person(string n, int a) : name(n), age(a) {}
    void greet() {
        cout << "Hello, I'm " << name << endl;
    }
    int getAge() const { return age; }
    static int count;
};`,
        language: 'cpp'
      },
      {
        title: '继承',
        code: `class Student : public Person {
private:
    string major;
public:
    Student(string n, int a, string m) 
        : Person(n, a), major(m) {}
    void study() {
        cout << "Studying " << major << endl;
    }
};`,
        language: 'cpp'
      },
      {
        title: '虚函数与多态',
        code: `class Animal {
public:
    virtual void makeSound() {
        cout << "Some sound" << endl;
    }
    virtual ~Animal() {}  // 虚析构
};
class Dog : public Animal {
public:
    void makeSound() override {  // C++11
        cout << "Woof!" << endl;
    }
};`,
        language: 'cpp'
      },
      {
        title: '运算符重载',
        code: `class Complex {
    double real, imag;
public:
    Complex operator+(const Complex& other) {
        return Complex(real + other.real, imag + other.imag);
    }
    friend ostream& operator<<(ostream& os, const Complex& c) {
        os << c.real << "+" << c.imag << "i";
        return os;
    }
};`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '智能指针',
    items: [
      {
        title: 'unique_ptr',
        description: 'C++11 独占所有权',
        code: `#include &lt;memory>
unique_ptr<int> ptr = make_unique<int>(10);
*ptr = 20;
unique_ptr<vector<int>> v = make_unique<vector<int>>();
v->push_back(1);`,
        language: 'cpp'
      },
      {
        title: 'shared_ptr',
        description: 'C++11 共享所有权',
        code: `shared_ptr<int> ptr1 = make_shared<int>(10);
shared_ptr<int> ptr2 = ptr1;  // 引用计数增加
ptr1.use_count();  // 2
ptr1.reset();      // 释放`,
        language: 'cpp'
      },
      {
        title: 'weak_ptr',
        description: '避免循环引用',
        code: `shared_ptr<int> sptr = make_shared<int>(10);
weak_ptr<int> wptr = sptr;
if (auto ptr = wptr.lock()) {
    // 使用 ptr
}`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '异常处理',
    items: [
      {
        title: 'try/catch',
        code: `try {
    throw runtime_error("Something went wrong");
} catch (const runtime_error& e) {
    cerr << "Error: " << e.what() << endl;
} catch (const exception& e) {
    cerr << "Exception: " << e.what() << endl;
} catch (...) {
    cerr << "Unknown exception" << endl;
}`,
        language: 'cpp'
      },
      {
        title: '自定义异常',
        code: `class ValidationError : public exception {
    string message;
public:
    ValidationError(const string& msg) : message(msg) {}
    const char* what() const noexcept override {
        return message.c_str();
    }
};
throw ValidationError("Invalid input");`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: '读取文件',
        code: `#include &lt;fstream>
ifstream file("input.txt");
if (!file.is_open()) {
    cerr << "Error opening file" << endl;
}
string line;
while (getline(file, line)) {
    cout << line << endl;
}
file.close();`,
        language: 'cpp'
      },
      {
        title: '写入文件',
        code: `ofstream file("output.txt");
file << "Hello World" << endl;
file << "Value: " << 42 << endl;
file.close();`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '现代 C++ 特性',
    items: [
      {
        title: '结构化绑定',
        description: 'C++17',
        code: `auto [x, y] = make_pair(1, 2);
map<string, int> m;
for (auto [key, value] : m) {
    cout << key << ": " << value << endl;
}`,
        language: 'cpp'
      },
      {
        title: 'optional',
        description: 'C++17',
        code: `#include &lt;optional>
optional<int> find(vector<int>& v, int target) {
    auto it = std::find(v.begin(), v.end(), target);
    if (it != v.end()) return *it;
    return nullopt;
}
if (auto result = find(v, 5)) {
    cout << *result << endl;
}`,
        language: 'cpp'
      },
      {
        title: 'variant',
        description: 'C++17',
        code: `#include &lt;variant>
variant<int, string> v;
v = 42;
v = "hello";
if (holds_alternative<int>(v)) {
    cout << get<int>(v) << endl;
}`,
        language: 'cpp'
      },
      {
        title: 'Concepts',
        description: 'C++20',
        code: `template<typename T>
concept Numeric = std::is_arithmetic_v&lt;T&gt;;
template<Numeric T>
T add(T a, T b) {
    return a + b;
}`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格',
        code: `// 使用 auto
auto v = vector<int>{1, 2, 3};
// 使用范围 for
for (const auto& item : vec) {}
// 使用智能指针
auto ptr = make_unique<int>(10);
// 使用 const
void func(const string& s);`,
        language: 'cpp'
      },
      {
        title: '性能优化',
        code: `// 使用 move 语义
vector<int> v1 = {1, 2, 3};
vector<int> v2 = move(v1);
// 预留容量
vector<int> v;
v.reserve(1000);
// 使用 emplace
v.emplace_back(1, 2, 3);  // 原地构造`,
        language: 'cpp'
      },
      {
        title: '常见陷阱',
        code: `// 避免悬空指针
int* ptr = new int(10);
delete ptr;
ptr = nullptr;
// 避免浅拷贝
// 实现深拷贝构造函数和赋值运算符
// 避免内存泄漏
// 使用智能指针`,
        language: 'cpp'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: '编译器',
        code: `# GCC
g++ -std=c++17 -Wall -O2 main.cpp -o main
# Clang
clang++ -std=c++17 -Wall -O2 main.cpp -o main
# MSVC
cl /std:c++17 /W4 /O2 main.cpp`,
        language: 'bash'
      },
      {
        title: '构建工具',
        code: `# CMake
cmake -B build
cmake --build build
# Make
make
make clean`,
        language: 'bash'
      },
      {
        title: '调试与分析',
        code: `# GDB
g++ -g main.cpp -o main
gdb ./main
# Valgrind (内存检查)
valgrind --leak-check=full ./main`,
        language: 'bash'
      }
    ]
  }
]
</script>

# C++ 速记表

<Cheatsheet :sections="cheatsheetData" />

---
title: JavaScript 速记表
sidebar: false
single: true
order: 4
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `console.log("Hello, World!");`,
        language: 'javascript'
      },
      {
        title: '输入输出',
        code: `// 输出
console.log("Hello");
console.error("Error message");
console.warn("Warning");
// 浏览器环境输入
let name = prompt("Enter your name:");
// Node.js 环境输入
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter your name: ', (answer) => {
  console.log(\`Hello, \${answer}\`);
  rl.close();
});`,
        language: 'javascript'
      },
      {
        title: '注释',
        code: `// 单行注释
/* 多行注释
   可以换行 */
/**
 * 文档注释 (JSDoc)
 * @param {string} name
 * @returns {string}
 */`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `let mutable = 10       // 可变
const immutable = 20   // 不可变
var oldStyle = 30      // 不推荐（函数作用域）`,
        language: 'javascript'
      },
      {
        title: '作用域',
        code: `// 全局作用域
var globalVar = 'global'
function example() {
  // 函数作用域
  var funcVar = 'function'
  if (true) {
    // 块级作用域
    let blockVar = 'block'
    const blockConst = 'block'
  }
}`,
        language: 'javascript'
      },
      {
        title: '类型推断',
        description: '动态类型，运行时确定',
        code: `let x = 10          // number
x = "hello"         // 可以改变类型
const arr = [1, 2]  // Array`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `// 7 种基本类型
let num = 42                    // number
let str = "hello"               // string
let bool = true                 // boolean
let nul = null                  // null
let undef = undefined           // undefined
let sym = Symbol('id')          // symbol (ES6)
let big = 123n                  // bigint (ES2020)`,
        language: 'javascript'
      },
      {
        title: '复合类型',
        code: `// Object
const obj = { name: 'Alice', age: 25 }
// Array
const arr = [1, 2, 3]
// Function
const func = function() {}
// Date
const date = new Date()
// RegExp
const regex = /pattern/g`,
        language: 'javascript'
      },
      {
        title: '类型转换',
        code: `// 转数字
Number('42')
parseInt('42')
parseFloat('3.14')
+'42'
// 转字符串
String(42)
(42).toString()
'' + 42
// 转布尔
Boolean(1)
!!value`,
        language: 'javascript'
      },
      {
        title: '类型检查',
        code: `typeof value
Array.isArray(arr)
value instanceof Class
Object.prototype.toString.call(value)
Number.isNaN(value)
Number.isFinite(value)`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '算术运算符',
        code: `+ - * / %    // 加减乘除取模
**               // 幂运算 (ES2016)
++  --           // 自增自减`,
        language: 'javascript'
      },
      {
        title: '比较运算符',
        code: `==  !=           // 相等（类型转换）
=== !==          // 严格相等
>  <  >=  <=     // 大小比较`,
        language: 'javascript'
      },
      {
        title: '逻辑运算符',
        code: `&&  ||  !        // 与或非
??               // 空值合并 (ES2020)
?.               // 可选链 (ES2020)
value ?? 'default'
obj?.prop?.method?.()`,
        language: 'javascript'
      },
      {
        title: '位运算符',
        code: `&  |  ^  ~       // 按位与或异或非
<<  >>  >>>      // 左移、右移、无符号右移`,
        language: 'javascript'
      },
      {
        title: '赋值运算符',
        code: `=  +=  -=  *=  /=  %=
**=  &=  |=  ^=
<<=  >>=  >>>=
&&=  ||=  ??=    // 逻辑赋值 (ES2021)`,
        language: 'javascript'
      },
      {
        title: '其他运算符',
        code: `... // 展开运算符
,   // 逗号运算符
?:  // 三元运算符
in  // 属性检查
delete // 删除属性`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '声明和初始化',
        code: `const str1 = 'single quotes'
const str2 = "double quotes"
const str3 = \`template literal\`
const str4 = String(123)`,
        language: 'javascript'
      },
      {
        title: '模板字符串',
        code: `const name = 'Alice'
const age = 25
const msg = \`Hello, \${name}! Age: \${age}\`
const multi = \`Line 1
Line 2
Line 3\``,
        language: 'javascript'
      },
      {
        title: '字符串方法',
        code: `str.length
str.charAt(0)
str.charCodeAt(0)
str[0]
str.indexOf('sub')
str.lastIndexOf('sub')
str.includes('sub')
str.startsWith('pre')
str.endsWith('suf')`,
        language: 'javascript'
      },
      {
        title: '字符串操作',
        code: `str.slice(0, 5)
str.substring(0, 5)
str.substr(0, 5)
str.split(' ')
str.repeat(3)
str.concat(str2)
str.trim()
str.trimStart()
str.trimEnd()
str.padStart(10, '0')
str.padEnd(10, ' ')`,
        language: 'javascript'
      },
      {
        title: '大小写与替换',
        code: `str.toLowerCase()
str.toUpperCase()
str.replace('old', 'new')
str.replaceAll('old', 'new')  // ES2021`,
        language: 'javascript'
      },
      {
        title: '正则表达式',
        code: `const regex = /pattern/gi
str.match(/\\d+/g)
str.matchAll(/\\d+/g)
str.search(/pattern/)
str.replace(/old/g, 'new')
regex.test(str)
regex.exec(str)`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '集合数据结构',
    items: [
      {
        title: '数组基础',
        code: `const arr = [1, 2, 3]
const arr2 = new Array(5)
const arr3 = Array.of(1, 2, 3)
const arr4 = Array.from('hello')`,
        language: 'javascript'
      },
      {
        title: '数组方法',
        code: `arr.push(4)
arr.pop()
arr.unshift(0)
arr.shift()
arr.splice(1, 2, 'a', 'b')
arr.slice(1, 3)
arr.concat(arr2)
arr.join('-')
arr.reverse()
arr.sort()`,
        language: 'javascript'
      },
      {
        title: '数组迭代',
        code: `arr.map(x => x * 2)
arr.filter(x => x > 0)
arr.reduce((acc, x) => acc + x, 0)
arr.forEach(x => console.log(x))
arr.find(x => x > 5)
arr.findIndex(x => x > 5)
arr.some(x => x > 5)
arr.every(x => x > 0)`,
        language: 'javascript'
      },
      {
        title: 'Map 映射',
        code: `const map = new Map()
map.set('key', 'value')
map.get('key')
map.has('key')
map.delete('key')
map.size
map.clear()
for (const [key, value] of map) {}`,
        language: 'javascript'
      },
      {
        title: 'Set 集合',
        code: `const set = new Set([1, 2, 3])
set.add(4)
set.has(1)
set.delete(1)
set.size
set.clear()
for (const value of set) {}`,
        language: 'javascript'
      },
      {
        title: 'WeakMap 与 WeakSet',
        code: `const wm = new WeakMap()
const ws = new WeakSet()
// 键必须是对象，弱引用
const obj = {}
wm.set(obj, 'value')
ws.add(obj)`,
        language: 'javascript'
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
} else if (otherCondition) {
  // 执行
} else {
  // 执行
}
// 三元运算符
const result = condition ? 'yes' : 'no'`,
        language: 'javascript'
      },
      {
        title: 'switch',
        code: `switch (value) {
  case 1:
    console.log('one')
    break
  case 2:
  case 3:
    console.log('two or three')
    break
  default:
    console.log('other')
}`,
        language: 'javascript'
      },
      {
        title: 'for 循环',
        code: `for (let i = 0; i < 10; i++) {
  console.log(i)
}
for (const item of array) {
  console.log(item)
}
for (const key in object) {
  console.log(key, object[key])
}`,
        language: 'javascript'
      },
      {
        title: 'while 循环',
        code: `while (condition) {
  // 执行
}
do {
  // 至少执行一次
} while (condition)`,
        language: 'javascript'
      },
      {
        title: '跳转语句',
        code: `break       // 退出循环
continue    // 跳过本次
return value // 返回值
// 标签跳转
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer
  }
}`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '函数定义',
        code: `// 函数声明
function greet(name) {
  return \`Hello, \${name}\`
}

// 函数表达式
const greet = function(name) {
  return \`Hello, \${name}\`
}

// 箭头函数
const greet = (name) => \`Hello, \${name}\`
const square = x => x * x`,
        language: 'javascript'
      },
      {
        title: '参数',
        code: `// 默认参数
function greet(name = 'Guest') {}
// 剩余参数
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0)
}
// 解构参数
function print({name, age}) {}`,
        language: 'javascript'
      },
      {
        title: '高阶函数',
        code: `// 函数作为参数
function apply(fn, value) {
  return fn(value)
}
// 函数作为返回值
function multiplier(factor) {
  return x => x * factor
}`,
        language: 'javascript'
      },
      {
        title: '闭包',
        code: `function counter() {
  let count = 0
  return {
    increment: () => ++count,
    decrement: () => --count,
    get: () => count
  }
}
const c = counter()
c.increment()`,
        language: 'javascript'
      },
      {
        title: '递归',
        code: `function factorial(n) {
  if (n <= 1) return 1
  return n * factorial(n - 1)
}
function fibonacci(n) {
  if (n <= 1) return n
  return fibonacci(n - 1) + fibonacci(n - 2)
}`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '面向对象',
    items: [
      {
        title: '类定义',
        code: `class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    return \`Hello, I'm \${this.name}\`
  }
  
  static species = 'Homo sapiens'
}`,
        language: 'javascript'
      },
      {
        title: '继承',
        code: `class Student extends Person {
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  study() {
    console.log(\`\${this.name} is studying\`)
  }
}`,
        language: 'javascript'
      },
      {
        title: '私有字段',
        description: 'ES2022',
        code: `class BankAccount {
  #balance = 0
  deposit(amount) {
    this.#balance += amount
  }
  getBalance() {
    return this.#balance
  }
}`,
        language: 'javascript'
      },
      {
        title: 'Getter 和 Setter',
        code: `class Circle {
  constructor(radius) {
    this._radius = radius
  }
  get area() {
    return Math.PI * this._radius ** 2
  }
  set radius(value) {
    this._radius = value
  }
}`,
        language: 'javascript'
      },
      {
        title: '原型',
        code: `function Person(name) {
  this.name = name
}
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`
}

const p = new Person('Alice')`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '异步编程',
    items: [
      {
        title: 'Promise',
        code: `const promise = new Promise((resolve, reject) => {
  if (success) {
    resolve(data)
  } else {
    reject(error)
  }
})
promise
  .then(data => console.log(data))
  .catch(error => console.error(error))
  .finally(() => console.log('Done'))`,
        language: 'javascript'
      },
      {
        title: 'async/await',
        code: `async function fetchData() {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}`,
        language: 'javascript'
      },
      {
        title: 'Promise 方法',
        code: `Promise.all([p1, p2, p3])      // 全部完成
Promise.allSettled([p1, p2])   // 全部结束
Promise.race([p1, p2])         // 最快完成
Promise.any([p1, p2])          // 任一成功`,
        language: 'javascript'
      },
      {
        title: '定时器',
        code: `setTimeout(() => {}, 1000)
setInterval(() => {}, 1000)
clearTimeout(timerId)
clearInterval(intervalId)`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '错误处理',
    items: [
      {
        title: 'try/catch/finally',
        code: `try {
  throw new Error('Something went wrong')
} catch (error) {
  console.error(error.message)
  console.error(error.stack)
} finally {
  console.log('Cleanup')
}`,
        language: 'javascript'
      },
      {
        title: '错误类型',
        code: `Error
SyntaxError
ReferenceError
TypeError
RangeError
URIError`,
        language: 'javascript'
      },
      {
        title: '自定义错误',
        code: `class ValidationError extends Error {
  constructor(message) {
    super(message)
    this.name = 'ValidationError'
  }
}
throw new ValidationError('Invalid input')`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '模块',
    items: [
      {
        title: 'ES6 模块',
        code: `// 导出
export const PI = 3.14
export function add(a, b) {}
export default class User {}
// 导入
import User from './user.js'
import { PI, add } from './math.js'
import * as Math from './math.js'
import { add as sum } from './math.js'`,
        language: 'javascript'
      },
      {
        title: 'CommonJS',
        code: `// 导出
module.exports = { add, subtract }
exports.PI = 3.14
// 导入
const { add } = require('./math')
const math = require('./math')`,
        language: 'javascript'
      },
      {
        title: '动态导入',
        code: `// ES2020
const module = await import('./module.js')
import('./module.js').then(module => {
  module.doSomething()
})`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: 'Node.js 文件读取',
        code: `const fs = require('fs')
// 同步读取
const data = fs.readFileSync('file.txt', 'utf8')
// 异步读取
fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})
// Promise API
const data = await fs.promises.readFile('file.txt', 'utf8')`,
        language: 'javascript'
      },
      {
        title: '文件写入',
        code: `// 同步写入
fs.writeFileSync('file.txt', 'content')
// 异步写入
fs.writeFile('file.txt', 'content', err => {
  if (err) throw err
})
// 追加
fs.appendFileSync('file.txt', 'more content')`,
        language: 'javascript'
      },
      {
        title: '路径处理',
        code: `const path = require('path')
path.join('dir', 'file.txt')
path.resolve('file.txt')
path.dirname('/path/to/file.txt')
path.basename('/path/to/file.txt')
path.extname('file.txt')`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '常用 API',
    items: [
      {
        title: 'JSON',
        code: `JSON.stringify(obj)
JSON.stringify(obj, null, 2)  // 格式化
JSON.parse(jsonString)`,
        language: 'javascript'
      },
      {
        title: 'Math',
        code: `Math.random()
Math.floor(3.7)
Math.ceil(3.2)
Math.round(3.5)
Math.max(1, 2, 3)
Math.min(1, 2, 3)
Math.abs(-5)
Math.pow(2, 3)
Math.sqrt(16)`,
        language: 'javascript'
      },
      {
        title: 'Date',
        code: `const now = new Date()
const date = new Date('2024-01-01')
date.getFullYear()
date.getMonth()  // 0-11
date.getDate()
date.getDay()    // 0-6
date.getTime()
date.toISOString()
date.toLocaleDateString()`,
        language: 'javascript'
      },
      {
        title: 'Console',
        code: `console.log('message')
console.error('error')
console.warn('warning')
console.table(array)
console.time('label')
console.timeEnd('label')
console.trace()`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格',
        code: `// 使用 const/let，避免 var
const PI = 3.14
let count = 0
// 使用严格相等
if (value === 42) {}
// 使用箭头函数
const fn = (x) => x * 2
// 使用模板字符串
const msg = \`Hello, \${name}\``,
        language: 'javascript'
      },
      {
        title: '性能优化',
        code: `// 避免全局变量
// 使用事件委托
// 防抖和节流
function debounce(fn, delay) {
  let timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}`,
        language: 'javascript'
      },
      {
        title: '常见陷阱',
        code: `// == vs ===
0 == '0'   // true
0 === '0'  // false
// this 绑定
const obj = { fn: function() { console.log(this) } }
const fn = obj.fn
fn()  // this 指向 window/undefined
// 闭包变量
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0)  // 输出 3,3,3
}`,
        language: 'javascript'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: '包管理器',
        code: `npm install package
npm install -g package
npm install --save-dev package
yarn add package
yarn global add package
yarn add -D package
pnpm install package`,
        language: 'bash'
      },
      {
        title: '构建工具',
        code: `// Webpack
webpack --mode production
// Vite
vite build
// Rollup
rollup -c`,
        language: 'bash'
      },
      {
        title: '测试框架',
        code: `// Jest
npm test
// Vitest
vitest
// Mocha
mocha test/*.js`,
        language: 'bash'
      },
      {
        title: '代码格式化',
        code: `// Prettier
prettier --write .
// ESLint
eslint --fix .`,
        language: 'bash'
      }
    ]
  }
]
</script>

# JavaScript 速记表

<Cheatsheet :sections="cheatsheetData" />

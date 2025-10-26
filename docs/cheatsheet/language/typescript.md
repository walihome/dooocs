---
title: TypeScript 速记表
sidebar: false
single: true
order: 7
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `console.log("Hello, World!");`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '输入输出',
        code: `// 输出
console.log("Hello, World!");
console.error("Error message");
console.warn("Warning");
// 浏览器环境输入
let name: string | null = prompt("Enter your name:");
// Node.js 环境输入
import * as readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Enter your name: ', (answer: string) => {
  console.log(\`Hello, \${answer}\`);
  rl.close();
});`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '注释',
        code: `// 单行注释
/* 多行注释 */
/**
 * JSDoc 注释
 * @param name 用户名
 * @returns 问候语
 */`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `let mutable: number = 10
const immutable: string = "hello"
var oldStyle: any = 30  // 不推荐
// 类型推导
let x = 10  // 推导为 number
let y = "hello"  // 推导为 string`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '作用域',
        code: `// 全局作用域
let globalVar: string = 'global'
function example() {
  // 函数作用域
  let funcVar: string = 'function'
  if (true) {
    // 块级作用域
    let blockVar: string = 'block'
    const blockConst: string = 'const'
  }
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `let num: number = 42
let str: string = "hello"
let bool: boolean = true
let nul: null = null
let undef: undefined = undefined
let sym: symbol = Symbol('id')
let big: bigint = 123n`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '特殊类型',
        code: `let anything: any = "anything"
let nothing: void = undefined
let never: never  // 永不返回
let unknown: unknown = 10  // 类型安全的 any`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '数组与元组',
        code: `let arr: number[] = [1, 2, 3]
let arr2: Array&lt;number&gt; = [1, 2, 3]
let tuple: [string, number] = ["age", 25]
let tuple2: [string, number, boolean?] = ["name", 30]`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '联合与交叉类型',
        code: `// 联合类型
let id: string | number = 123
// 交叉类型
type A = { name: string }
type B = { age: number }
type C = A & B  // { name: string, age: number }`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '字面量类型',
        code: `let status: "success" | "error" | "pending"
let direction: "left" | "right" | "up" | "down"
let port: 3000 | 8080`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '类型别名与接口',
        code: `// 类型别名
type User = {
  name: string
  age: number
}
// 接口
interface IUser {
  name: string
  age: number
  greet(): void
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '基本运算符',
        code: `// 算术
+  -  *  /  %  **
// 比较
==  !=  ===  !==
>  <  >=  <=
// 逻辑
&&  ||  !
// 赋值
=  +=  -=  *=  /=  %=`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '类型相关运算符',
        code: `// 类型断言
value as string
&lt;string&gt;value
// 非空断言
user.name!
// 可选链
obj?.prop?.method?.()
// 空值合并
value ?? 'default'`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: 'typeof / keyof',
        code: `// typeof
const user = { name: "Alice", age: 25 }
type UserType = typeof user
// keyof
type UserKeys = keyof User  // "name" | "age"`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '字符串类型',
        code: `let str: string = 'hello'
let template: string = \`Hello, \${name}\`

// 模板字面量类型
type Greeting = \`Hello, \${string}\`
type Route = \`/api/\${string}\``,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '字符串方法',
        code: `str.length
str.charAt(0)
str.indexOf('sub')
str.includes('sub')
str.startsWith('pre')
str.endsWith('suf')
str.slice(0, 5)
str.split(' ')
str.replace('old', 'new')
str.toLowerCase()
str.toUpperCase()
str.trim()`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '集合数据结构',
    items: [
      {
        title: '数组类型',
        code: `let numbers: number[] = [1, 2, 3]
let strings: Array&lt;string&gt; = ["a", "b"]
// 只读数组
let readonly: readonly number[] = [1, 2, 3]
let readonly2: ReadonlyArray&lt;number&gt; = [1, 2, 3]`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '数组方法',
        code: `arr.push(4)
arr.pop()
arr.shift()
arr.unshift(0)
arr.splice(1, 2)
arr.slice(1, 3)
arr.map(x => x * 2)
arr.filter(x => x &gt; 0)
arr.reduce((acc, x) => acc + x, 0)
arr.find(x => x &gt; 5)
arr.some(x => x &gt; 5)
arr.every(x => x &gt; 0)`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: 'Map 类型',
        code: `let map: Map<string, number> = new Map()
map.set('key', 100)
map.get('key')
map.has('key')
map.delete('key')
// Record 类型
type StringMap = Record<string, number>
let obj: StringMap = { a: 1, b: 2 }`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: 'Set 类型',
        code: `let set: Set&lt;number&gt; = new Set([1, 2, 3])
set.add(4)
set.has(1)
set.delete(1)
set.size
for (const value of set) {}`,
        language: 'typescript',
        width: 'half'
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
const result = condition ? 'yes' : 'no'`,
        language: 'typescript',
        width: 'half'
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
        language: 'typescript',
        width: 'half'
      },
      {
        title: '循环',
        code: `for (let i = 0; i &lt; 10; i++) {}
for (const item of array) {}
for (const key in object) {}
while (condition) {}
do {} while (condition)`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '类型守卫',
        code: `function isString(x: any): x is string {
  return typeof x === "string"
}
if (isString(value)) {
  // value 是 string 类型
  console.log(value.toUpperCase())
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '函数声明',
        code: `function add(a: number, b: number): number {
  return a + b
}
const multiply = (a: number, b: number): number => a * b
const greet: (name: string) => string = (name) => {
  return \`Hello, \${name}\`
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '可选与默认参数',
        code: `function greet(name: string, age?: number): string {
  return \`Hello, \${name}\`
}

function log(msg: string, prefix = "INFO"): void {
  console.log(\`[\${prefix}] \${msg}\`)
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '剩余参数',
        code: `function sum(...nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0)
}
function format(template: string, ...args: any[]): string {
  return template
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '函数重载',
        code: `function format(value: string): string
function format(value: number): string
function format(value: string | number): string {
  return String(value)
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '泛型函数',
        code: `function identity&lt;T&gt;(arg: T): T {
  return arg
}
const result = identity&lt;string&gt;("hello")
const result2 = identity(42)  // 类型推导`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '高级类型',
    items: [
      {
        title: '泛型',
        code: `interface Box&lt;T&gt; {
  value: T
}
class Container&lt;T&gt; {
  constructor(private value: T) {}
  getValue(): T {
    return this.value
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '泛型约束',
        code: `interface HasLength {
  length: number
}
function log<T extends HasLength>(arg: T): void {
  console.log(arg.length)
}
// 多重约束
function merge<T extends object, U extends object>(a: T, b: U): T & U {
  return { ...a, ...b }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: 'Utility Types',
        code: `Partial&lt;T&gt;       // 所有属性可选
Required&lt;T&gt;      // 所有属性必填
Readonly&lt;T&gt;      // 所有属性只读
Pick&lt;T, K&gt;       // 选择部分属性
Omit&lt;T, K&gt;       // 排除部分属性
Record&lt;K, T&gt;     // 键值对类型
Exclude&lt;T, U&gt;    // 从 T 中排除 U
Extract&lt;T, U&gt;    // 从 T 中提取 U
NonNullable&lt;T&gt;   // 排除 null 和 undefined
ReturnType&lt;T&gt;    // 函数返回类型
Parameters&lt;T&gt;    // 函数参数类型`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '条件类型',
        code: `type IsString&lt;T&gt; = T extends string ? true : false
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T
// 分发条件类型
type ToArray&lt;T&gt; = T extends any ? T[] : never`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '映射类型',
        code: `type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P]
}
type Optional&lt;T&gt; = {
  [P in keyof T]?: T[P]
}
type Getters&lt;T&gt; = {
  [P in keyof T as \`get\${Capitalize<string & P>}\`]: () => T[P]
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '模板字面量类型',
        code: `type HttpMethod = "GET" | "POST"
type Route = "/api" | "/admin"
type Endpoint = \`\${HttpMethod} \${Route}\`

type Getters<T> = {
  [K in keyof T as \`get\${Capitalize<string & K>}\`]: () => T[K]
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '面向对象',
    items: [
      {
        title: '类定义',
        code: `class Person {
  private name: string
  protected age: number
  public readonly id: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.id = Date.now()
  }
  greet(): string {
    return \`Hello, I'm \${this.name}\`
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '继承',
        code: `class Student extends Person {
  constructor(name: string, age: number, public grade: string) {
    super(name, age)
  }
  study(): void {
    console.log('Studying...')
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '抽象类',
        code: `abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('Moving...')
  }
}
class Dog extends Animal {
  makeSound(): void {
    console.log('Woof!')
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '接口',
        code: `interface Drawable {
  draw(): void
}
interface Clickable {
  click(): void
}
class Button implements Drawable, Clickable {
  draw(): void {}
  click(): void {}
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '访问器',
        code: `class User {
  private _name: string = ""
  get name(): string {
    return this._name
  }
  set name(value: string) {
    this._name = value.trim()
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '泛型类',
        code: `class Stack&lt;T&gt; {
  private items: T[] = []
  push(item: T): void {
    this.items.push(item)
  }
  pop(): T | undefined {
    return this.items.pop()
  }
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '异步编程',
    items: [
      {
        title: 'Promise 类型',
        code: `function fetchData(): Promise&lt;string&gt; {
  return new Promise((resolve, reject) => {
    resolve("data")
  })
}
const promise: Promise&lt;number&gt; = Promise.resolve(42)`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: 'async/await',
        code: `async function getData(): Promise&lt;User&gt; {
  try {
    const response = await fetch("/api/user")
    const data: User = await response.json()
    return data
  } catch (error) {
    throw new Error("Failed to fetch")
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '泛型 Promise',
        code: `async function request&lt;T&gt;(url: string): Promise&lt;T&gt; {
  const response = await fetch(url)
  return response.json()
}
const user = await request&lt;User&gt;("/api/user")`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '错误处理',
    items: [
      {
        title: 'try/catch',
        code: `try {
  throw new Error("Something went wrong")
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  }
} finally {
  console.log("Cleanup")
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '自定义错误',
        code: `class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}
throw new ValidationError("Invalid input")`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '模块',
    items: [
      {
        title: '导入导出',
        code: `// 导出
export const PI = 3.14
export function add(a: number, b: number) {}
export default class User {}
// 导入
import User, { PI, add } from './module'
import * as Utils from './utils'`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '类型导入导出',
        code: `export type UserType = {
  name: string
}
export interface IConfig {
  apiUrl: string
}
import type { UserType, IConfig } from './types'
// 仅导入类型
import { type User } from './user'`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '命名空间',
        code: `namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean
  }
  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.includes("@")
    }
  }
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '装饰器',
    items: [
      {
        title: '类装饰器',
        code: `function sealed(constructor: Function) {
  Object.seal(constructor)
  Object.seal(constructor.prototype)
}
@sealed
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '方法装饰器',
        code: `function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${key}\`)
    return original.apply(this, args)
  }
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b
  }
}`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格',
        code: `// 使用接口而非类型别名定义对象形状
interface User {
  name: string
  age: number
}
// 使用 const 断言
const colors = ['red', 'blue'] as const
// 避免 any，使用 unknown
function process(value: unknown) {
  if (typeof value === 'string') {}
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '类型安全',
        code: `// 使用严格模式
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
// 使用类型守卫
function isUser(obj: any): obj is User {
  return 'name' in obj && 'age' in obj
}`,
        language: 'typescript',
        width: 'half'
      },
      {
        title: '常见陷阱',
        code: `// 避免类型断言滥用
const value = someValue as any  // 不好
const value = someValue as SomeType  // 谨慎使用
// 注意可选链和空值合并
obj?.prop  // 可能是 undefined
obj ?? 'default'  // 只处理 null/undefined`,
        language: 'typescript',
        width: 'half'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: '编译器配置',
        code: `// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  }
}`,
        language: 'json'
      },
      {
        title: '构建工具',
        code: `# TypeScript 编译器
tsc
tsc --watch
# Webpack with ts-loader
webpack --mode production
# Vite (原生支持)
vite build
# esbuild
esbuild src/index.ts --bundle`,
        language: 'bash'
      },
      {
        title: '类型声明',
        code: `# 安装类型声明
npm install --save-dev @types/node
npm install --save-dev @types/react
# 生成声明文件
tsc --declaration`,
        language: 'bash'
      }
    ]
  }
]
</script>

# TypeScript 速记表

<Cheatsheet :sections="cheatsheetData" />

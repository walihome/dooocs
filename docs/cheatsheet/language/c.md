---
title: C 速记表
sidebar: false
single: true
order: 1
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `#include <stdio.h>
int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
        language: 'c'
      },
      {
        title: '输入输出',
        code: `#include <stdio.h>
int main() {
    // 输出
    printf("Hello, World!\\n");
    printf("Number: %d, Float: %.2f\\n", 42, 3.14);
    // 输入
    char name[50];
    int age;
    printf("Enter your name: ");
    scanf("%s", name);
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("Hello, %s!\\n", name);
    return 0;
}`,
        language: 'c'
      },
      {
        title: '注释',
        code: `// 单行注释 (C99+)
/* 多行注释
   可以换行 */`,
        language: 'c'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `int x = 10;
float pi = 3.14f;
char c = 'A';
const int MAX = 100;
// 多变量声明
int a, b, c;
int x = 1, y = 2;`,
        language: 'c'
      },
      {
        title: '作用域',
        code: `int global_var = 0;  // 全局作用域
void function() {
    int local_var = 0;  // 函数作用域
    if (1) {
        int block_var = 0;  // 块作用域 (C99+)
    }
}
static int file_var = 0;  // 文件作用域`,
        language: 'c'
      },
      {
        title: '存储类',
        code: `auto int x = 10;     // 自动变量（默认）
static int y = 20;   // 静态变量
extern int z;        // 外部变量
register int i;      // 寄存器变量（建议）`,
        language: 'c'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `// 整数
char            // 1 byte
short           // 2 bytes
int             // 4 bytes
long            // 4/8 bytes
long long       // 8 bytes
unsigned char
unsigned int
unsigned long
// 浮点数
float           // 4 bytes
double          // 8 bytes
long double     // 10/16 bytes
// 其他
_Bool           // C99+
void`,
        language: 'c'
      },
      {
        title: '类型修饰符',
        code: `signed int
unsigned int
short int
long int
long long int`,
        language: 'c'
      },
      {
        title: '类型转换',
        code: `// 隐式转换
int i = 10;
double d = i;
// 显式转换
double d = 3.14;
int i = (int)d;
float f = (float)10 / 3;`,
        language: 'c'
      },
      {
        title: 'typedef',
        code: `typedef unsigned int uint;
typedef struct {
    int x;
    int y;
} Point;
uint count = 10;
Point p = {1, 2};`,
        language: 'c'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '算术运算符',
        code: `+  -  *  /  %
++  --`,
        language: 'c'
      },
      {
        title: '比较运算符',
        code: `==  !=
>  <  >=  <=`,
        language: 'c'
      },
      {
        title: '逻辑运算符',
        code: `&&  ||  !`,
        language: 'c'
      },
      {
        title: '位运算符',
        code: `&   |   ^   ~
<<  >>`,
        language: 'c'
      },
      {
        title: '赋值运算符',
        code: `=  +=  -=  *=  /=  %=
&=  |=  ^=  <<=  >>=`,
        language: 'c'
      },
      {
        title: '其他运算符',
        code: `sizeof(type)     // 类型大小
&variable        // 取地址
*pointer         // 解引用
condition ? a : b  // 三元运算符
(type)value      // 类型转换`,
        language: 'c'
      }
    ]
  },
  {
    title: '指针',
    items: [
      {
        title: '指针基础',
        code: `int x = 10;
int *p = &x;     // 指向 x 的指针
*p = 20;         // 修改 x 的值
printf("%p\\n", p);   // 打印地址
printf("%d\\n", *p);  // 打印值`,
        language: 'c'
      },
      {
        title: '指针运算',
        code: `int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;
p++;           // 指向下一个元素
p--;           // 指向上一个元素
*(p + 2)       // 访问偏移元素
p[2]           // 等价于 *(p + 2)`,
        language: 'c'
      },
      {
        title: '指针与数组',
        code: `int arr[5] = {1, 2, 3, 4, 5};
int *p = arr;
arr[0] == *p
arr[1] == *(p + 1)
arr[i] == *(p + i)`,
        language: 'c'
      },
      {
        title: '函数指针',
        code: `int add(int a, int b) {
    return a + b;
}
int (*func_ptr)(int, int) = add;
int result = func_ptr(2, 3);`,
        language: 'c'
      }
    ]
  },
  {
    title: '数组',
    items: [
      {
        title: '一维数组',
        code: `int arr[5] = {1, 2, 3, 4, 5};
int nums[5];
int values[] = {1, 2, 3};
// 访问元素
arr[0] = 10;
int val = arr[2];
// 数组长度
int len = sizeof(arr) / sizeof(arr[0]);`,
        language: 'c'
      },
      {
        title: '多维数组',
        code: `int matrix[3][4] = {
    {1, 2, 3, 4},
    {5, 6, 7, 8},
    {9, 10, 11, 12}
};
matrix[1][2] = 100;`,
        language: 'c'
      },
      {
        title: '遍历数组',
        code: `for (int i = 0; i < 5; i++) {
    printf("%d\\n", arr[i]);
}
// 使用指针遍历
int *p = arr;
for (int i = 0; i < 5; i++) {
    printf("%d\\n", *(p + i));
}`,
        language: 'c'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '字符串基础',
        code: `char str1[] = "Hello";
char str2[20] = "World";
char *str3 = "Constant";  // 字符串字面量
// 字符串以 '\\0' 结尾
char str[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};`,
        language: 'c'
      },
      {
        title: '字符串函数',
        description: '#include <string.h>',
        code: `strlen(str)              // 长度
strcpy(dest, src)        // 复制
strncpy(dest, src, n)    // 复制 n 个字符
strcat(dest, src)        // 拼接
strncat(dest, src, n)    // 拼接 n 个字符
strcmp(str1, str2)       // 比较
strncmp(str1, str2, n)   // 比较 n 个字符
strchr(str, ch)          // 查找字符
strstr(str, sub)         // 查找子串`,
        language: 'c'
      },
      {
        title: '字符串输入输出',
        code: `char str[100];
// 读取
scanf("%s", str);        // 遇空格停止
fgets(str, 100, stdin);  // 读取一行
// 输出
printf("%s\\n", str);
puts(str);`,
        language: 'c'
      },
      {
        title: '字符串格式化',
        code: `char buffer[100];
sprintf(buffer, "Name: %s, Age: %d", name, age);
// 安全版本 (C11+)
snprintf(buffer, sizeof(buffer), "Value: %d", value);`,
        language: 'c'
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
} else if (other_condition) {
    // 执行
} else {
    // 执行
}`,
        language: 'c'
      },
      {
        title: 'switch',
        code: `switch (value) {
    case 1:
        printf("one\\n");
        break;
    case 2:
    case 3:
        printf("two or three\\n");
        break;
    default:
        printf("other\\n");
}`,
        language: 'c'
      },
      {
        title: 'for 循环',
        code: `for (int i = 0; i < 10; i++) {
    printf("%d\\n", i);
}
// 多变量
for (int i = 0, j = 10; i < j; i++, j--) {
    printf("%d %d\\n", i, j);
}`,
        language: 'c'
      },
      {
        title: 'while 循环',
        code: `while (condition) {
    // 执行
}
do {
    // 至少执行一次
} while (condition);`,
        language: 'c'
      },
      {
        title: '跳转语句',
        code: `break;       // 退出循环
continue;    // 跳过本次
return value; // 返回值
goto label;  // 跳转到标签
label:
    // 代码`,
        language: 'c'
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
void greet(char *name) {
    printf("Hello, %s\\n", name);
}
// 函数声明（原型）
int add(int a, int b);`,
        language: 'c'
      },
      {
        title: '函数参数',
        code: `// 值传递
void func(int x) {
    x = 10;  // 不影响原变量
}
// 指针传递
void func(int *x) {
    *x = 10;  // 影响原变量
}
// 数组参数
void func(int arr[], int size) {}
void func(int *arr, int size) {}  // 等价`,
        language: 'c'
      },
      {
        title: '递归',
        code: `int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}`,
        language: 'c'
      }
    ]
  },
  {
    title: '结构体',
    items: [
      {
        title: '定义结构体',
        code: `struct Person {
    char name[50];
    int age;
    float height;
};
// 创建实例
struct Person p1 = {"Alice", 25, 1.65};
struct Person p2;
p2.age = 30;`,
        language: 'c'
      },
      {
        title: 'typedef',
        code: `typedef struct {
    char name[50];
    int age;
} Person;
// 使用
Person p = {"Bob", 30};`,
        language: 'c'
      },
      {
        title: '结构体指针',
        code: `Person *p = malloc(sizeof(Person));
// 访问成员
p->age = 25;
(*p).age = 25;  // 等价
free(p);`,
        language: 'c'
      },
      {
        title: '嵌套结构体',
        code: `typedef struct {
    char city[50];
    char country[50];
} Address;
typedef struct {
    char name[50];
    int age;
    Address address;
} Person;
Person p;
strcpy(p.address.city, "Beijing");`,
        language: 'c'
      }
    ]
  },
  {
    title: '内存管理',
    items: [
      {
        title: '动态分配',
        description: '#include <stdlib.h>',
        code: `// malloc - 分配内存
int *ptr = (int*)malloc(sizeof(int) * 10);
if (ptr == NULL) {
    // 分配失败
}
// 使用
ptr[0] = 100;
// 释放
free(ptr);
ptr = NULL;`,
        language: 'c'
      },
      {
        title: 'calloc 与 realloc',
        code: `// calloc - 分配并初始化为 0
int *arr = (int*)calloc(10, sizeof(int));
// realloc - 重新分配
arr = (int*)realloc(arr, sizeof(int) * 20);
free(arr);`,
        language: 'c'
      },
      {
        title: '内存操作',
        description: '#include <string.h>',
        code: `void *memcpy(void *dest, const void *src, size_t n);
void *memmove(void *dest, const void *src, size_t n);
void *memset(void *s, int c, size_t n);
int memcmp(const void *s1, const void *s2, size_t n);`,
        language: 'c'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: '打开与关闭',
        code: `FILE *fp = fopen("file.txt", "r");
if (fp == NULL) {
    perror("Error opening file");
    return 1;
}
fclose(fp);
// 文件模式
"r"  - 读
"w"  - 写（覆盖）
"a"  - 追加
"r+" - 读写
"w+" - 读写（覆盖）
"rb" - 二进制读`,
        language: 'c'
      },
      {
        title: '读取文件',
        code: `char buffer[100];
// 逐行读取
while (fgets(buffer, 100, fp) != NULL) {
    printf("%s", buffer);
}
// 逐字符读取
int ch;
while ((ch = fgetc(fp)) != EOF) {
    putchar(ch);
}
// 格式化读取
fscanf(fp, "%s %d", name, &age);
// 读取二进制
fread(data, sizeof(int), count, fp);`,
        language: 'c'
      },
      {
        title: '写入文件',
        code: `FILE *fp = fopen("output.txt", "w");
fprintf(fp, "Name: %s\\n", name);
fputs("Hello\\n", fp);
fputc('A', fp);
// 写入二进制
fwrite(data, sizeof(int), count, fp);
fclose(fp);`,
        language: 'c'
      }
    ]
  },
  {
    title: '预处理器',
    items: [
      {
        title: '宏定义',
        code: `#define PI 3.14159
#define MAX(a, b) ((a) > (b) ? (a) : (b))
#define SQUARE(x) ((x) * (x))
#undef PI  // 取消定义
// 预定义宏
__FILE__    // 文件名
__LINE__    // 行号
__DATE__    // 编译日期
__TIME__    // 编译时间`,
        language: 'c'
      },
      {
        title: '条件编译',
        code: `#ifdef DEBUG
    printf("Debug mode\\n");
#endif
#ifndef CONFIG_H
#define CONFIG_H
    // 头文件内容
#endif
#if defined(WIN32) || defined(_WIN32)
    // Windows 代码
#elif defined(__linux__)
    // Linux 代码
#endif`,
        language: 'c'
      },
      {
        title: '#include',
        code: `#include <stdio.h>     // 系统头文件
#include "myheader.h"  // 用户头文件`,
        language: 'c'
      }
    ]
  },
  {
    title: '标准库',
    items: [
      {
        title: 'stdio.h',
        code: `printf()  scanf()  puts()  gets()
fopen()  fclose()  fread()  fwrite()
fgets()  fputs()  fgetc()  fputc()
fprintf()  fscanf()`,
        language: 'c'
      },
      {
        title: 'stdlib.h',
        code: `malloc()  calloc()  realloc()  free()
atoi()  atof()  atol()
rand()  srand()
system()  exit()  abort()
qsort()  bsearch()`,
        language: 'c'
      },
      {
        title: 'string.h',
        code: `strlen()  strcpy()  strcat()  strcmp()
strncpy()  strncat()  strncmp()
strchr()  strstr()  strtok()
memcpy()  memmove()  memset()  memcmp()`,
        language: 'c'
      },
      {
        title: 'math.h',
        code: `sqrt()  pow()  abs()  fabs()
ceil()  floor()  round()
sin()  cos()  tan()
log()  log10()  exp()
// 编译时需要链接 -lm
gcc main.c -lm`,
        language: 'c'
      },
      {
        title: 'ctype.h',
        code: `isdigit()  isalpha()  isalnum()
isupper()  islower()  isspace()
toupper()  tolower()`,
        language: 'c'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格',
        code: `// 使用有意义的名称
int user_count;  // 好
int uc;          // 不好
// 检查指针
if (ptr == NULL) {
    return;
}
// 初始化变量
int x = 0;
int *p = NULL;`,
        language: 'c'
      },
      {
        title: '内存管理',
        code: `// 总是检查 malloc 返回值
int *ptr = malloc(sizeof(int) * 10);
if (ptr == NULL) {
    // 处理错误
}
// 释放后置空
free(ptr);
ptr = NULL;
// 避免内存泄漏
// 避免野指针`,
        language: 'c'
      },
      {
        title: '常见陷阱',
        code: `// 数组越界
int arr[5];
arr[5] = 10;  // 错误
// 字符串未终止
char str[5] = {'H', 'e', 'l', 'l', 'o'};  // 缺少 '\\0'
// 悬空指针
int *p = malloc(sizeof(int));
free(p);
*p = 10;  // 错误`,
        language: 'c'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: '编译器',
        code: `# GCC
gcc -Wall -Wextra -O2 main.c -o main
# Clang
clang -Wall -O2 main.c -o main
# 调试
gcc -g main.c -o main
gdb ./main`,
        language: 'bash'
      },
      {
        title: '编译选项',
        code: `-Wall          # 所有警告
-Werror        # 警告视为错误
-O0 -O1 -O2 -O3  # 优化级别
-g             # 调试信息
-std=c99       # 指定标准
-I/path        # 包含路径
-L/path        # 库路径
-lm            # 链接数学库`,
        language: 'bash'
      },
      {
        title: 'Make',
        code: `# Makefile
CC = gcc
CFLAGS = -Wall -O2
main: main.o utils.o
	$(CC) $(CFLAGS) -o main main.o utils.o
main.o: main.c
	$(CC) $(CFLAGS) -c main.c
clean:
	rm -f *.o main`,
        language: 'makefile'
      }
    ]
  }
]
</script>

# C 速记表

<Cheatsheet :sections="cheatsheetData" />

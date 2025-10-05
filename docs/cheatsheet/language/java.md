---
title: Java 速记表
sidebar: false
single: true
order: 3
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
        language: 'java'
      },
      {
        title: '输入输出',
        code: `import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        // 输出
        System.out.println("Hello, World!");
        System.out.print("Without newline");
        System.out.printf("Name: %s, Age: %d%n", "Alice", 25);
        // 输入
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your name: ");
        String name = scanner.nextLine();
        System.out.print("Enter your age: ");
        int age = scanner.nextInt();
        System.out.println("Hello, " + name);
        scanner.close();
    }
}`,
        language: 'java'
      },
      {
        title: '注释',
        code: `// 单行注释
/* 多行注释
   可以换行 */
/**
 * JavaDoc 文档注释
 * @param name 参数说明
 * @return 返回值说明
 */`,
        language: 'java'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '声明方式',
        code: `int num = 10;
String name = "Alice";
final double PI = 3.14;
// Java 10+ var 类型推导
var message = "Hello";
var count = 100;`,
        language: 'java'
      },
      {
        title: '作用域',
        code: `public class Example {
    static int classVar = 0;  // 类变量
    int instanceVar = 0;      // 实例变量
    public void method() {
        int localVar = 0;     // 局部变量
        if (true) {
            int blockVar = 0; // 块作用域
        }
    }
}`,
        language: 'java'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '基本类型',
        code: `// 整数
byte b = 127;           // 8-bit
short s = 32767;        // 16-bit
int i = 2147483647;     // 32-bit
long l = 9223372036854775807L;  // 64-bit
// 浮点数
float f = 3.14f;        // 32-bit
double d = 3.14159;     // 64-bit
// 其他
boolean bool = true;
char c = 'A';           // 16-bit Unicode`,
        language: 'java'
      },
      {
        title: '引用类型',
        code: `String str = "hello";
Integer num = 100;
int[] arr = {1, 2, 3};
List&lt;String&gt; list = new ArrayList<>();`,
        language: 'java'
      },
      {
        title: '类型转换',
        code: `// 自动转换（小到大）
int i = 100;
double d = i;
// 强制转换
double d = 3.14;
int i = (int) d;
// 包装类转换
String str = String.valueOf(42);
int num = Integer.parseInt("42");`,
        language: 'java'
      },
      {
        title: '泛型',
        code: `List&lt;String&gt; list = new ArrayList<>();
Map&lt;String, Integer&gt; map = new HashMap<>();
// 泛型类
class Box&lt;T&gt; {
    private T value;
    public void set(T value) { this.value = value; }
    public T get() { return value; }
}`,
        language: 'java'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '算术运算符',
        code: `+  -  *  /  %    // 加减乘除取模
++  --           // 自增自减`,
        language: 'java'
      },
      {
        title: '比较运算符',
        code: `==  !=           // 相等、不等
>  <  >=  <=     // 大小比较
instanceof       // 类型检查`,
        language: 'java'
      },
      {
        title: '逻辑运算符',
        code: `&&  ||  !        // 逻辑与、或、非
&  |             // 位逻辑与、或`,
        language: 'java'
      },
      {
        title: '位运算符',
        code: `&  |  ^  ~       // 按位与、或、异或、非
<<  >>  >>>      // 左移、右移、无符号右移`,
        language: 'java'
      },
      {
        title: '赋值运算符',
        code: `=  +=  -=  *=  /=  %=
&=  |=  ^=  <<=  >>=  >>>=`,
        language: 'java'
      },
      {
        title: '三元运算符',
        code: `int max = (a &gt; b) ? a : b;
String result = (valid) ? "yes" : "no";`,
        language: 'java'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '创建字符串',
        code: `String str = "hello";
String str2 = new String("world");
String str3 = String.format("Age: %d", 25);`,
        language: 'java'
      },
      {
        title: '字符串方法',
        code: `str.length()
str.charAt(0)
str.indexOf("sub")
str.contains("sub")
str.startsWith("pre")
str.endsWith("suf")
str.substring(0, 5)
str.split(" ")
str.replace("old", "new")
str.toLowerCase()
str.toUpperCase()
str.trim()
str.strip()  // Java 11+
str.isEmpty()
str.isBlank()  // Java 11+`,
        language: 'java'
      },
      {
        title: '字符串拼接',
        code: `// + 运算符
String result = "Hello" + " " + "World";
// concat()
String result = str1.concat(str2);
// String.join()
String result = String.join("-", "a", "b", "c");
// StringBuilder
StringBuilder sb = new StringBuilder();
sb.append("Hello").append(" ").append("World");
String result = sb.toString();`,
        language: 'java'
      },
      {
        title: '文本块',
        description: 'Java 15+',
        code: `String html = """
    &lt;html&gt;
        &lt;body&gt;
            &lt;p&gt;Hello&lt;/p&gt;
        &lt;/body&gt;
    &lt;/html&gt;
    """;`,
        language: 'java'
      }
    ]
  },
  {
    title: '集合数据结构',
    items: [
      {
        title: 'List',
        code: `List&lt;String&gt; list = new ArrayList<>();
List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3);
List&lt;String&gt; immutable = List.of("a", "b", "c");
list.add("item");
list.add(0, "first");
list.remove("item");
list.remove(0);
list.set(0, "new");
list.get(0);
list.size();
list.isEmpty();
list.contains("item");
list.clear();`,
        language: 'java'
      },
      {
        title: 'Set',
        code: `Set&lt;String&gt; set = new HashSet<>();
Set&lt;Integer&gt; ordered = new LinkedHashSet<>();
Set&lt;String&gt; sorted = new TreeSet<>();
set.add("item");
set.remove("item");
set.contains("item");
set.size();
set.isEmpty();`,
        language: 'java'
      },
      {
        title: 'Map',
        code: `Map&lt;String, Integer&gt; map = new HashMap<>();
Map&lt;String, String&gt; ordered = new LinkedHashMap<>();
map.put("key", 100);
map.get("key");
map.getOrDefault("key", 0);
map.remove("key");
map.containsKey("key");
map.containsValue(100);
map.size();
map.isEmpty();
map.keySet();
map.values();
map.entrySet();`,
        language: 'java'
      },
      {
        title: 'Queue & Deque',
        code: `Queue&lt;Integer&gt; queue = new LinkedList<>();
queue.offer(1);
queue.poll();
queue.peek();
Deque&lt;Integer&gt; deque = new ArrayDeque<>();
deque.offerFirst(1);
deque.offerLast(2);
deque.pollFirst();
deque.pollLast();`,
        language: 'java'
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
}`,
        language: 'java'
      },
      {
        title: 'switch',
        code: `// 传统 switch
switch (day) {
    case MONDAY:
    case FRIDAY:
        System.out.println("Working");
        break;
    case SATURDAY:
    case SUNDAY:
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Midweek");
}
// Switch 表达式 (Java 14+)
String result = switch (day) {
    case MONDAY, FRIDAY -> "Working";
    case SATURDAY, SUNDAY -> "Weekend";
    default -> "Midweek";
};`,
        language: 'java'
      },
      {
        title: 'for 循环',
        code: `// 传统 for
for (int i = 0; i &lt; 10; i++) {
    System.out.println(i);
}
// 增强 for (for-each)
for (String item : list) {
    System.out.println(item);
}`,
        language: 'java'
      },
      {
        title: 'while 循环',
        code: `while (condition) {
    // 执行
}
do {
    // 至少执行一次
} while (condition);`,
        language: 'java'
      },
      {
        title: '跳转语句',
        code: `break;       // 退出循环
continue;    // 跳过本次
return value; // 返回值`,
        language: 'java'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '方法定义',
        code: `public int add(int a, int b) {
    return a + b;
}
public static void main(String[] args) {
    System.out.println("Hello");
}
// 可变参数
public int sum(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}`,
        language: 'java'
      },
      {
        title: 'Lambda 表达式',
        description: 'Java 8+',
        code: `(a, b) -> a + b
x -> x * x
() -> System.out.println("Hello")
(String s) -> { return s.length(); }`,
        language: 'java'
      },
      {
        title: '方法引用',
        description: 'Java 8+',
        code: `// 静态方法引用
Integer::parseInt
// 实例方法引用
String::toUpperCase
list::add
// 构造器引用
ArrayList::new`,
        language: 'java'
      }
    ]
  },
  {
    title: 'Stream API',
    items: [
      {
        title: '创建 Stream',
        code: `list.stream()
Stream.of(1, 2, 3)
Arrays.stream(array)
Stream.empty()
Stream.generate(() -> Math.random())
Stream.iterate(0, n -> n + 1)`,
        language: 'java'
      },
      {
        title: '中间操作',
        code: `stream.filter(x -> x &gt; 0)
stream.map(x -> x * 2)
stream.flatMap(list -> list.stream())
stream.distinct()
stream.sorted()
stream.limit(10)
stream.skip(5)
stream.peek(System.out::println)`,
        language: 'java'
      },
      {
        title: '终端操作',
        code: `stream.forEach(System.out::println)
stream.toList()  // Java 16+
stream.collect(Collectors.toList())
stream.reduce(0, Integer::sum)
stream.count()
stream.anyMatch(x -> x &gt; 10)
stream.allMatch(x -> x &gt; 0)
stream.noneMatch(x -> x &lt; 0)
stream.findFirst()
stream.findAny()`,
        language: 'java'
      }
    ]
  },
  {
    title: '面向对象',
    items: [
      {
        title: '类定义',
        code: `public class Person {
    private String name;
    protected int age;
    public final String id;
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
        this.id = UUID.randomUUID().toString();
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
}`,
        language: 'java'
      },
      {
        title: 'Record',
        description: 'Java 16+ 不可变数据类',
        code: `public record Person(String name, int age) {
    // 自动生成 constructor, getters, equals, hashCode, toString
    // 自定义方法
    public String greet() {
        return "Hello, " + name;
    }
}
Person p = new Person("Alice", 25);
System.out.println(p.name());`,
        language: 'java'
      },
      {
        title: '继承',
        code: `public class Student extends Person {
    private String major;
    public Student(String name, int age, String major) {
        super(name, age);
        this.major = major;
    }
    @Override
    public String greet() {
        return "Hi, I'm " + getName();
    }
}`,
        language: 'java'
      },
      {
        title: '接口',
        code: `public interface Drawable {
    void draw();
    // 默认方法 (Java 8+)
    default void display() {
        System.out.println("Displaying");
    }
    // 静态方法
    static void info() {
        System.out.println("Drawable interface");
    }
}`,
        language: 'java'
      },
      {
        title: '抽象类',
        code: `public abstract class Shape {
    protected String color;
    public abstract double area();
    public void setColor(String color) {
        this.color = color;
    }
}`,
        language: 'java'
      },
      {
        title: 'Sealed Classes',
        description: 'Java 17+',
        code: `public sealed class Shape 
    permits Circle, Rectangle, Triangle {
}
public final class Circle extends Shape {}
public final class Rectangle extends Shape {}
public final class Triangle extends Shape {}`,
        language: 'java'
      }
    ]
  },
  {
    title: '错误处理',
    items: [
      {
        title: 'try-catch-finally',
        code: `try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.err.println("Error: " + e.getMessage());
    e.printStackTrace();
} catch (Exception e) {
    System.err.println("Unexpected: " + e);
} finally {
    // 总是执行
    System.out.println("Cleanup");
}`,
        language: 'java'
      },
      {
        title: 'try-with-resources',
        description: 'Java 7+ 自动关闭资源',
        code: `try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line = br.readLine();
} catch (IOException e) {
    e.printStackTrace();
}`,
        language: 'java'
      },
      {
        title: '异常类型',
        code: `// Checked Exceptions
IOException
SQLException
ClassNotFoundException
// Unchecked Exceptions
NullPointerException
IllegalArgumentException
IndexOutOfBoundsException
ArithmeticException`,
        language: 'java'
      },
      {
        title: '抛出异常',
        code: `public void validate(String input) throws IllegalArgumentException {
    if (input == null) {
        throw new IllegalArgumentException("Input cannot be null");
    }
}
// 自定义异常
public class ValidationException extends Exception {
    public ValidationException(String message) {
        super(message);
    }
}`,
        language: 'java'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: '读取文件',
        code: `// Java 11+
String content = Files.readString(Path.of("file.txt"));
List&lt;String&gt; lines = Files.readAllLines(Path.of("file.txt"));
// 传统方式
try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line;
    while ((line = br.readLine()) != null) {
        System.out.println(line);
    }
}`,
        language: 'java'
      },
      {
        title: '写入文件',
        code: `// Java 11+
Files.writeString(Path.of("file.txt"), "content");
// 写入多行
List&lt;String&gt; lines = Arrays.asList("line1", "line2");
Files.write(Path.of("file.txt"), lines);
// 传统方式
try (BufferedWriter bw = new BufferedWriter(new FileWriter("file.txt"))) {
    bw.write("Hello\\n");
}`,
        language: 'java'
      },
      {
        title: '路径操作',
        code: `Path path = Paths.get("dir", "file.txt");
path.getFileName();
path.getParent();
path.toAbsolutePath();
Files.exists(path);
Files.isDirectory(path);
Files.createDirectories(path);`,
        language: 'java'
      }
    ]
  },
  {
    title: '并发编程',
    items: [
      {
        title: '线程',
        code: `// 继承 Thread
class MyThread extends Thread {
    public void run() {
        System.out.println("Running");
    }
}
new MyThread().start();
// 实现 Runnable
new Thread(() -> {
    System.out.println("Running");
}).start();`,
        language: 'java'
      },
      {
        title: 'ExecutorService',
        code: `ExecutorService executor = Executors.newFixedThreadPool(5);
executor.submit(() -> {
    System.out.println("Task running");
});
executor.shutdown();`,
        language: 'java'
      },
      {
        title: 'CompletableFuture',
        description: 'Java 8+',
        code: `CompletableFuture.supplyAsync(() -> {
    return "result";
}).thenApply(result -> {
    return result.toUpperCase();
}).thenAccept(result -> {
    System.out.println(result);
});`,
        language: 'java'
      },
      {
        title: '同步',
        code: `// synchronized 方法
public synchronized void method() {}
// synchronized 块
synchronized (this) {
    // 临界区
}
// Lock
Lock lock = new ReentrantLock();
lock.lock();
try {
    // 临界区
} finally {
    lock.unlock();
}`,
        language: 'java'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格',
        code: `// 使用 final 修饰不变量
final int MAX = 100;
// 使用 var 简化代码 (Java 10+)
var list = new ArrayList&lt;String&gt;();
// 使用 Optional 避免 null
Optional&lt;String&gt; opt = Optional.ofNullable(value);
// 使用 Stream API
list.stream()
    .filter(s -> s.length() &gt; 3)
    .collect(Collectors.toList());`,
        language: 'java'
      },
      {
        title: '性能优化',
        code: `// 使用 StringBuilder 拼接字符串
StringBuilder sb = new StringBuilder();
for (String s : list) {
    sb.append(s);
}
// 使用合适的集合
ArrayList - 随机访问快
LinkedList - 插入删除快
HashSet - 快速查找
TreeSet - 有序集合`,
        language: 'java'
      },
      {
        title: '常见陷阱',
        code: `// == vs equals
"a" == "a"       // 比较引用
"a".equals("a")  // 比较值
// Integer 缓存 (-128 to 127)
Integer a = 127;
Integer b = 127;
a == b  // true
Integer x = 128;
Integer y = 128;
x == y  // false`,
        language: 'java'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: '构建工具',
        code: `# Maven
mvn clean install
mvn test
mvn package
# Gradle
gradle build
gradle test
gradle run`,
        language: 'bash'
      },
      {
        title: '依赖管理',
        code: `<!-- Maven pom.xml -->
&lt;dependency>
    &lt;groupId>org.springframework.boot</groupId>
    &lt;artifactId>spring-boot-starter-web</artifactId>
    &lt;version>3.2.0</version>
</dependency>
// Gradle build.gradle
dependencies {
    implementation 'org.springframework.boot:spring-boot-starter-web:3.2.0'
}`,
        language: 'xml'
      },
      {
        title: '测试框架',
        code: `// JUnit 5
@Test
void testAdd() {
    assertEquals(5, calculator.add(2, 3));
}
// Mockito
@Mock
private UserService userService;`,
        language: 'java'
      }
    ]
  }
]
</script>

# Java 速记表

<Cheatsheet :sections="cheatsheetData" />

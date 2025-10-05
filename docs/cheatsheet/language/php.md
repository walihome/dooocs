---
title: PHP 速记表
sidebar: false
single: true
order: 8
---

<script setup>
const cheatsheetData = [
  {
    title: '基础语法',
    items: [
      {
        title: 'Hello World',
        code: `<?php
echo "Hello, World!";
?>`,
        language: 'php'
      },
      {
        title: '输入输出',
        code: `<?php
// 输出
echo "Hello, World!";
print "Hello, World!";
printf("Name: %s, Age: %d\\n", "Alice", 25);
// 命令行输入
$name = readline("Enter your name: ");
echo "Hello, " . $name . "!\\n";
// Web 表单输入
$name = $_POST['name'] ?? '';
$age = $_GET['age'] ?? 0;
?>`,
        language: 'php'
      },
      {
        title: '注释',
        code: `<?php
// 单行注释
# 单行注释（shell 风格）
/* 多行注释
   可以换行 */
/**
 * PHPDoc 文档注释
 * @param string $name
 * @return string
 */`,
        language: 'php'
      }
    ]
  },
  {
    title: '变量与常量',
    items: [
      {
        title: '变量声明',
        code: `<?php
$name = "Alice";
$age = 25;
$pi = 3.14;
$isValid = true;
// 变量变量
$var = "name";
$$var = "Bob";  // $name = "Bob"`,
        language: 'php'
      },
      {
        title: '常量',
        code: `define('MAX', 100);
const API_KEY = "secret";  // PHP 5.3+
// 魔术常量
__FILE__      // 文件路径
__LINE__      // 行号
__DIR__       // 目录
__FUNCTION__  // 函数名
__CLASS__     // 类名
__METHOD__    // 方法名`,
        language: 'php'
      },
      {
        title: '作用域',
        code: `$globalVar = "global";  // 全局作用域
function example() {
    global $globalVar;  // 使用全局变量
    $localVar = "local";  // 局部作用域
    static $staticVar = 0;  // 静态变量
    $staticVar++;
}`,
        language: 'php'
      }
    ]
  },
  {
    title: '数据类型',
    items: [
      {
        title: '标量类型',
        code: `// 整数
$int = 42;
$hex = 0x1A;
$octal = 0123;
$binary = 0b1010;
// 浮点数
$float = 3.14;
$scientific = 1.2e3;
// 字符串
$str = "hello";
$str = 'world';
// 布尔
$bool = true;
$bool = false`,
        language: 'php'
      },
      {
        title: '复合类型',
        code: `// 数组
$arr = [1, 2, 3];
$arr = array(1, 2, 3);
// 对象
$obj = new stdClass();
$obj->name = "Alice";
// 资源
$file = fopen("file.txt", "r");
// NULL
$null = null;`,
        language: 'php'
      },
      {
        title: '类型声明',
        description: 'PHP 7+',
        code: `function add(int $a, int $b): int {
    return $a + $b;
}
function greet(string $name): void {
    echo "Hello, $name";
}
// PHP 7.4+ 属性类型
class User {
    public string $name;
    public int $age;
}`,
        language: 'php'
      },
      {
        title: '类型转换',
        code: `(int)$value
(float)$value
(string)$value
(bool)$value
(array)$value
(object)$value
intval($value)
floatval($value)
strval($value)`,
        language: 'php'
      }
    ]
  },
  {
    title: '运算符',
    items: [
      {
        title: '算术运算符',
        code: `+  -  *  /  %  **
++  --`,
        language: 'php'
      },
      {
        title: '比较运算符',
        code: `==  !=  <>        // 相等
===  !==          // 全等
>  <  >=  <=
<=>               // 太空船运算符 (PHP 7+)`,
        language: 'php'
      },
      {
        title: '逻辑运算符',
        code: `&&  and
||  or
!   not
xor`,
        language: 'php'
      },
      {
        title: '字符串运算符',
        code: `.          // 拼接
.=         // 拼接赋值`,
        language: 'php'
      },
      {
        title: '赋值运算符',
        code: `=  +=  -=  *=  /=  %=  **=
.=  &=  |=  ^=  <<=  >>=`,
        language: 'php'
      },
      {
        title: 'Null 运算符',
        description: 'PHP 7+',
        code: `// Null 合并
$name = $_GET['name'] ?? 'default';
// Null 安全 (PHP 8+)
$name = $user?->profile?->name;`,
        language: 'php'
      }
    ]
  },
  {
    title: '字符串',
    items: [
      {
        title: '字符串创建',
        code: `$str = "hello";
$str = 'world';
// Heredoc
$text = <<<EOT
Multi-line
string
EOT;
// Nowdoc (PHP 5.3+)
$text = <<<'EOT'
No variable
interpolation
EOT;`,
        language: 'php'
      },
      {
        title: '字符串插值',
        code: `$name = "Alice";
$age = 25;
echo "Name: $name, Age: $age";
echo "Name: {$name}, Age: {$age}";
echo 'Name: ' . $name . ', Age: ' . $age;`,
        language: 'php'
      },
      {
        title: '字符串函数',
        code: `strlen($str)
strtoupper($str)
strtolower($str)
ucfirst($str)
ucwords($str)
trim($str)
ltrim($str)
rtrim($str)
substr($str, 0, 5)
strpos($str, 'sub')
str_replace('old', 'new', $str)
str_contains($str, 'sub')  // PHP 8+
str_starts_with($str, 'pre')  // PHP 8+
str_ends_with($str, 'fix')  // PHP 8+`,
        language: 'php'
      },
      {
        title: '字符串分割与拼接',
        code: `$parts = explode(' ', $str);
$joined = implode('-', $parts);
$result = join(', ', $arr);`,
        language: 'php'
      },
      {
        title: '正则表达式',
        code: `preg_match('/pattern/', $str, $matches);
preg_match_all('/pattern/', $str, $matches);
preg_replace('/old/', 'new', $str);
preg_split('/\\s+/', $str);`,
        language: 'php'
      }
    ]
  },
  {
    title: '数组',
    items: [
      {
        title: '数组创建',
        code: `$arr = [1, 2, 3, 4, 5];
$arr = array(1, 2, 3);
// 关联数组
$person = [
    'name' => 'Alice',
    'age' => 25
];`,
        language: 'php'
      },
      {
        title: '数组操作',
        code: `array_push($arr, 6);
$arr[] = 7;
array_pop($arr);
array_shift($arr);
array_unshift($arr, 0);
count($arr);
in_array(5, $arr);
array_key_exists('key', $arr);`,
        language: 'php'
      },
      {
        title: '数组函数',
        code: `array_map(fn($x) => $x * 2, $arr);
array_filter($arr, fn($x) => $x &gt; 5);
array_reduce($arr, fn($acc, $x) => $acc + $x, 0);
array_slice($arr, 1, 3);
array_merge($arr1, $arr2);
array_unique($arr);
sort($arr);
rsort($arr);
asort($arr);  // 保持键关联
ksort($arr);  // 按键排序`,
        language: 'php'
      },
      {
        title: '遍历数组',
        code: `foreach ($arr as $value) {
    echo $value;
}
foreach ($arr as $key => $value) {
    echo "$key: $value";
}
// 引用修改
foreach ($arr as &$value) {
    $value *= 2;
}`,
        language: 'php'
      },
      {
        title: '数组解构',
        description: 'PHP 7.1+',
        code: `[$a, $b] = [1, 2];
['name' => $name, 'age' => $age] = $person;`,
        language: 'php'
      }
    ]
  },
  {
    title: '控制流',
    items: [
      {
        title: 'if / else',
        code: `if ($condition) {
    // 执行
} elseif ($other) {
    // 执行
} else {
    // 执行
}
// 三元运算符
$result = $condition ? 'yes' : 'no';`,
        language: 'php'
      },
      {
        title: 'switch',
        code: `switch ($value) {
    case 1:
        echo "one";
        break;
    case 2:
    case 3:
        echo "two or three";
        break;
    default:
        echo "other";
}`,
        language: 'php'
      },
      {
        title: 'match',
        description: 'PHP 8+',
        code: `$result = match($status) {
    'success' => 'Operation successful',
    'error' => 'Operation failed',
    default => 'Unknown status'
};`,
        language: 'php'
      },
      {
        title: 'for 循环',
        code: `for ($i = 0; $i &lt; 10; $i++) {
    echo $i;
}
foreach ($arr as $value) {
    echo $value;
}
foreach ($arr as $key => $value) {
    echo "$key: $value";
}`,
        language: 'php'
      },
      {
        title: 'while 循环',
        code: `while ($condition) {
    // 执行
}
do {
    // 至少执行一次
} while ($condition);`,
        language: 'php'
      },
      {
        title: '跳转语句',
        code: `break;       // 退出循环
continue;    // 跳过本次
return $value; // 返回值
goto label;  // 跳转`,
        language: 'php'
      }
    ]
  },
  {
    title: '函数',
    items: [
      {
        title: '函数定义',
        code: `function add($a, $b) {
    return $a + $b;
}
// 默认参数
function greet($name = "Guest") {
    return "Hello, $name";
}
// 类型声明 (PHP 7+)
function sum(int $a, int $b): int {
    return $a + $b;
}`,
        language: 'php'
      },
      {
        title: '箭头函数',
        description: 'PHP 7.4+',
        code: `$square = fn($x) => $x * $x;
$add = fn($a, $b) => $a + $b;
// 自动捕获外部变量
$factor = 2;
$multiply = fn($x) => $x * $factor;`,
        language: 'php'
      },
      {
        title: '匿名函数',
        code: `$greet = function($name) {
    return "Hello, $name";
};
// use 捕获外部变量
$multiplier = 2;
$multiply = function($x) use ($multiplier) {
    return $x * $multiplier;
};`,
        language: 'php'
      },
      {
        title: '可变参数',
        code: `function sum(...$nums) {
    return array_sum($nums);
}
$result = sum(1, 2, 3, 4, 5);
// 解包参数
$arr = [1, 2, 3];
sum(...$arr);`,
        language: 'php'
      },
      {
        title: '命名参数',
        description: 'PHP 8+',
        code: `function createUser($name, $email, $age) {
    // ...
}
createUser(
    name: 'Alice',
    age: 25,
    email: 'alice@example.com'
);`,
        language: 'php'
      }
    ]
  },
  {
    title: '面向对象',
    items: [
      {
        title: '类定义',
        code: `class Person {
    private $name;
    protected $age;
    public $email;
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    public function greet() {
        return "Hello, I'm {$this->name}";
    }
    public static function species() {
        return "Human";
    }
}
$person = new Person("Alice", 25);`,
        language: 'php'
      },
      {
        title: '构造器属性提升',
        description: 'PHP 8+',
        code: `class Person {
    public function __construct(
        public string $name,
        public int $age,
        private string $email = ""
    ) {}
}
$person = new Person("Alice", 25);
echo $person->name;`,
        language: 'php'
      },
      {
        title: '继承',
        code: `class Student extends Person {
    private $major;
    public function __construct($name, $age, $major) {
        parent::__construct($name, $age);
        $this->major = $major;
    }
    public function study() {
        echo "Studying $this->major";
    }
}`,
        language: 'php'
      },
      {
        title: '接口与抽象类',
        code: `interface Drawable {
    public function draw();
}
abstract class Shape {
    abstract public function area();
    public function describe() {
        echo "This is a shape";
    }
}
class Circle extends Shape implements Drawable {
    public function area() {
        return 3.14 * $this->radius ** 2;
    }
    public function draw() {
        echo "Drawing circle";
    }
}`,
        language: 'php'
      },
      {
        title: 'Trait',
        code: `trait Logger {
    public function log($message) {
        echo "[LOG] $message";
    }
}
class User {
    use Logger;
}
$user = new User();
$user->log("User created");`,
        language: 'php'
      },
      {
        title: '魔术方法',
        code: `class MyClass {
    public function __construct() {}
    public function __destruct() {}
    public function __toString() {}
    public function __get($name) {}
    public function __set($name, $value) {}
    public function __call($name, $args) {}
    public function __invoke() {}
}`,
        language: 'php'
      },
      {
        title: 'Enum',
        description: 'PHP 8.1+',
        code: `enum Status {
    case Pending;
    case Approved;
    case Rejected;
}
$status = Status::Pending;
// Backed Enum
enum HttpStatus: int {
    case OK = 200;
    case NotFound = 404;
    case ServerError = 500;
}`,
        language: 'php'
      }
    ]
  },
  {
    title: '错误处理',
    items: [
      {
        title: 'try/catch',
        code: `try {
    throw new Exception("Something went wrong");
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "Always executed";
}`,
        language: 'php'
      },
      {
        title: '多重捕获',
        description: 'PHP 7.1+',
        code: `try {
    // 可能抛出异常
} catch (RuntimeException | InvalidArgumentException $e) {
    echo "Error: " . $e->getMessage();
}`,
        language: 'php'
      },
      {
        title: '自定义异常',
        code: `class ValidationException extends Exception {
    public function __construct($message) {
        parent::__construct($message);
    }
}
throw new ValidationException("Invalid input");`,
        language: 'php'
      }
    ]
  },
  {
    title: '文件操作',
    items: [
      {
        title: '读取文件',
        code: `// 读取全部
$content = file_get_contents('file.txt');
// 读取行数组
$lines = file('file.txt');
// 逐行读取
$handle = fopen('file.txt', 'r');
while (($line = fgets($handle)) !== false) {
    echo $line;
}
fclose($handle);`,
        language: 'php'
      },
      {
        title: '写入文件',
        code: `// 写入全部
file_put_contents('file.txt', 'content');
// 追加
file_put_contents('file.txt', 'append', FILE_APPEND);
// 逐行写入
$handle = fopen('file.txt', 'w');
fwrite($handle, "Hello\\n");
fclose($handle);`,
        language: 'php'
      },
      {
        title: '文件系统',
        code: `file_exists($path);
is_file($path);
is_dir($path);
filesize($path);
filemtime($path);
unlink($file);  // 删除文件
mkdir($dir);
rmdir($dir);
rename($old, $new);`,
        language: 'php'
      },
      {
        title: 'JSON 操作',
        code: `// 序列化
$json = json_encode($array);
$json = json_encode($data, JSON_PRETTY_PRINT);
// 反序列化
$array = json_decode($json, true);
$obj = json_decode($json);`,
        language: 'php'
      }
    ]
  },
  {
    title: '超全局变量',
    items: [
      {
        title: 'HTTP 请求',
        code: `$_GET['param'];
$_POST['field'];
$_REQUEST['data'];
$_SERVER['REQUEST_METHOD'];
$_SERVER['HTTP_HOST'];
$_SERVER['REQUEST_URI'];
$_FILES['upload'];
$_COOKIE['session'];
$_SESSION['user'];
$_ENV['APP_KEY'];`,
        language: 'php'
      },
      {
        title: '处理表单',
        code: `if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? 'default';
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    if ($email === false) {
        echo "Invalid email";
    }
}`,
        language: 'php'
      }
    ]
  },
  {
    title: '数据库',
    items: [
      {
        title: 'PDO',
        code: `$pdo = new PDO('mysql:host=localhost;dbname=test', 'user', 'pass');
// 查询
$stmt = $pdo->query('SELECT * FROM users');
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
// 预处理语句
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
$stmt->execute([$id]);
$user = $stmt->fetch();
// 插入
$stmt = $pdo->prepare('INSERT INTO users (name, email) VALUES (?, ?)');
$stmt->execute([$name, $email]);`,
        language: 'php'
      },
      {
        title: 'MySQLi',
        code: `$mysqli = new mysqli('localhost', 'user', 'pass', 'test');
// 查询
$result = $mysqli->query('SELECT * FROM users');
while ($row = $result->fetch_assoc()) {
    echo $row['name'];
}
// 预处理
$stmt = $mysqli->prepare('SELECT * FROM users WHERE id = ?');
$stmt->bind_param('i', $id);
$stmt->execute();
$result = $stmt->get_result();`,
        language: 'php'
      }
    ]
  },
  {
    title: '常用函数',
    items: [
      {
        title: '日期时间',
        code: `date('Y-m-d H:i:s');
time();
strtotime('2024-01-01');
strtotime('+1 day');
$dt = new DateTime();
$formatted = $dt->format('Y-m-d');
$dt->modify('+1 day');`,
        language: 'php'
      },
      {
        title: '数学函数',
        code: `abs($x);
ceil($x);
floor($x);
round($x);
max($a, $b, $c);
min($a, $b, $c);
pow($base, $exp);
sqrt($x);
rand($min, $max);`,
        language: 'php'
      },
      {
        title: '类型检查',
        code: `is_int($var);
is_string($var);
is_array($var);
is_object($var);
is_null($var);
is_numeric($var);
is_callable($var);
gettype($var);
get_class($obj);`,
        language: 'php'
      },
      {
        title: '输出控制',
        code: `echo "Hello";
print "World";
var_dump($var);
print_r($array);
var_export($data);
header('Content-Type: application/json');
header('Location: /page.php');
http_response_code(404);`,
        language: 'php'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '代码风格 (PSR-12)',
        code: `// 使用类型声明
function add(int $a, int $b): int {
    return $a + $b;
}
// 使用 null 合并
$name = $_GET['name'] ?? 'default';
// 使用严格类型 (PHP 7+)
declare(strict_types=1);`,
        language: 'php'
      },
      {
        title: '安全性',
        code: `// 防止 SQL 注入
$stmt = $pdo->prepare('SELECT * FROM users WHERE id = ?');
$stmt->execute([$id]);
// 防止 XSS
echo htmlspecialchars($userInput, ENT_QUOTES, 'UTF-8');
// 密码哈希
$hash = password_hash($password, PASSWORD_DEFAULT);
password_verify($password, $hash);
// CSRF 令牌
$token = bin2hex(random_bytes(32));`,
        language: 'php'
      },
      {
        title: '常见陷阱',
        code: `// == vs ===
0 == '0'   // true
0 === '0'  // false
// 数组键
$arr[0] !== $arr['0']  // false (相同)
// 字符串连接性能
// 用 . 而非 += 拼接大量字符串
$parts = [];
$parts[] = $str1;
$parts[] = $str2;
$result = implode('', $parts);`,
        language: 'php'
      }
    ]
  },
  {
    title: '工具链',
    items: [
      {
        title: 'Composer',
        code: `# 安装依赖
composer install
composer require package
# 自动加载
composer dump-autoload
# 更新
composer update`,
        language: 'bash'
      },
      {
        title: '测试框架',
        code: `# PHPUnit
./vendor/bin/phpunit
# Pest
./vendor/bin/pest`,
        language: 'bash'
      },
      {
        title: '代码质量',
        code: `# PHP-CS-Fixer (格式化)
php-cs-fixer fix
# PHPStan (静态分析)
phpstan analyse
# Psalm (静态分析)
psalm`,
        language: 'bash'
      },
      {
        title: '框架',
        code: `# Laravel
composer create-project laravel/laravel myapp
php artisan serve
# Symfony
composer create-project symfony/skeleton myapp
symfony serve`,
        language: 'bash'
      }
    ]
  }
]
</script>

# PHP 速记表

<Cheatsheet :sections="cheatsheetData" />

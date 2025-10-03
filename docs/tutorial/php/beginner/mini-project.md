---
title: 动手实践
category: php
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: php极简教程
---

 # 动手实践

恭喜你!🎉 你已经掌握了 PHP 的基础语法——变量(Variable)、数组(Array)、循环(Loop)、条件判断(Conditional)等核心概念。现在是时候把这些知识串联起来,做一个真实的小项目了。

今天我们要做一个**学生成绩管理系统**,虽然功能简单,但会让你体会到编程解决实际问题的乐趣。

## 💡 项目需求

我们要管理 5 个学生的成绩,并计算:
- 最高分(Maximum Score)
- 最低分(Minimum Score)  
- 平均分(Average Score)
- 及格人数(Pass Count,60分为及格线)

## 📝 完整代码

创建一个新文件 `student_score.php`,输入以下代码:

```php{2,5,8,11,14,20,26}
<?php
// 学生成绩数据
$scores = [85, 92, 78, 65, 58];

// 计算最高分
$maxScore = max($scores);

// 计算最低分
$minScore = min($scores);

// 计算平均分
$totalScore = array_sum($scores);
$averageScore = $totalScore / count($scores);

// 计算及格人数
$passCount = 0;
foreach ($scores as $score) {
    if ($score >= 60) {
        $passCount++;
    }
}

// 输出结果
echo "========== 学生成绩统计 ==========\n";
echo "共有学生: " . count($scores) . " 人\n";
echo "最高分: " . $maxScore . " 分\n";
echo "最低分: " . $minScore . " 分\n";
echo "平均分: " . round($averageScore, 2) . " 分\n";
echo "及格人数: " . $passCount . " 人\n";
echo "不及格人数: " . (count($scores) - $passCount) . " 人\n";
?>
```

::: tip 代码亮点
- 第2行:用数组存储所有学生成绩
- 第5行:`max()` 函数直接找出最大值
- 第8行:`min()` 函数直接找出最小值
- 第11-12行:`array_sum()` 求和,`count()` 统计个数
- 第14-20行:用循环遍历统计及格人数
:::

## 🚀 如何运行代码

### 方式一:命令行运行(推荐)

打开终端(Terminal),进入文件所在目录,执行:

```bash
php student_score.php
```

### 方式二:浏览器运行

如果你安装了本地服务器(如 XAMPP、MAMP):
1. 将文件放到服务器根目录(通常是 `htdocs` 文件夹)
2. 浏览器访问:`http://localhost/student_score.php`

## 📊 运行结果

你会看到类似这样的输出:

```
========== 学生成绩统计 ==========
共有学生: 5 人
最高分: 92 分
最低分: 58 分
平均分: 75.6 分
及格人数: 4 人
不及格人数: 1 人
```

::: warning 注意
如果在命令行运行看不到换行效果,把代码中的 `\n` 改为 `<br>`,然后用浏览器访问。
:::

## 💪 挑战练习

### 练习 1:添加学生姓名

修改代码,让每个成绩对应一个学生姓名,输出时显示"张三: 85分"这样的格式。

<details>
<summary>点击查看答案</summary>

```php{2-8,11-13}
<?php
// 使用关联数组存储学生信息
$students = [
    "张三" => 85,
    "李四" => 92,
    "王五" => 78,
    "赵六" => 65,
    "孙七" => 58
];

// 提取成绩用于计算
$scores = array_values($students);

$maxScore = max($scores);
$minScore = min($scores);
$averageScore = array_sum($scores) / count($scores);

$passCount = 0;
foreach ($scores as $score) {
    if ($score >= 60) {
        $passCount++;
    }
}

echo "========== 学生成绩明细 ==========\n";
foreach ($students as $name => $score) {
    echo $name . ": " . $score . " 分\n";
}

echo "\n========== 统计结果 ==========\n";
echo "最高分: " . $maxScore . " 分\n";
echo "最低分: " . $minScore . " 分\n";
echo "平均分: " . round($averageScore, 2) . " 分\n";
echo "及格人数: " . $passCount . " 人\n";
?>
```

</details>

### 练习 2:找出最高分学生

在练习1的基础上,输出哪位学生获得了最高分。

<details>
<summary>点击查看答案</summary>

```php{16-21}
<?php
$students = [
    "张三" => 85,
    "李四" => 92,
    "王五" => 78,
    "赵六" => 65,
    "孙七" => 58
];

$scores = array_values($students);
$maxScore = max($scores);
$minScore = min($scores);
$averageScore = array_sum($scores) / count($scores);

// 找出最高分学生
$topStudent = "";
foreach ($students as $name => $score) {
    if ($score == $maxScore) {
        $topStudent = $name;
        break;
    }
}

$passCount = 0;
foreach ($scores as $score) {
    if ($score >= 60) {
        $passCount++;
    }
}

echo "========== 统计结果 ==========\n";
echo "最高分: " . $maxScore . " 分 (获得者: " . $topStudent . ")\n";
echo "最低分: " . $minScore . " 分\n";
echo "平均分: " . round($averageScore, 2) . " 分\n";
echo "及格人数: " . $passCount . " 人\n";
?>
```

</details>

## 📌 小结

- **数组是存储多个数据的好工具**,用 `[]` 或 `array()` 创建
- **PHP内置函数很强大**:`max()`、`min()`、`array_sum()`、`count()` 让计算变简单
- **循环配合条件判断可以统计符合条件的数据**,这是数据分析的基础
- **实践是最好的学习方式**,动手写代码比看十遍教程更有效

你已经能够独立完成一个小项目了,这是一个重要的里程碑!继续保持这种动手实践的习惯,你会进步得更快。💪
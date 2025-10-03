---
title: 动手实践
category: go
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: go极简教程
---

 # 动手实践

恭喜你!🎉 你已经掌握了 Go 语言的核心基础知识。现在是时候把这些知识组合起来,做一个真正的小项目了。

## 项目目标

我们要做一个**学生成绩管理系统**,帮助老师管理 5 位学生的成绩,并自动计算:
- 最高分
- 最低分
- 平均分
- 及格人数(60分及以上)

## 💡 思路分析

在动手写代码之前,我们先想想需要用到哪些知识:
- **数组(Array)**:存储 5 位学生的成绩
- **循环(Loop)**:遍历所有成绩进行计算
- **条件判断(If)**:判断是否及格
- **变量(Variable)**:保存计算结果
- **函数(Function)**:组织代码逻辑

## 📝 完整代码

创建一个新文件 `student_score.go`,输入以下代码:

```go{7-8,11-14,17-23,26-31,34-35}
package main

import "fmt"

func main() {
	// 定义5位学生的成绩
	scores := [5]int{85, 92, 78, 63, 88}
	studentCount := len(scores)

	// 初始化统计变量
	maxScore := scores[0]  // 最高分
	minScore := scores[0]  // 最低分
	totalScore := 0        // 总分
	passCount := 0         // 及格人数

	// 遍历所有成绩进行统计
	for i := 0; i < studentCount; i++ {
		currentScore := scores[i]
		totalScore += currentScore

		// 更新最高分和最低分
		if currentScore > maxScore {
			maxScore = currentScore
		}
		if currentScore < minScore {
			minScore = currentScore
		}

		// 统计及格人数
		if currentScore >= 60 {
			passCount++
		}
	}

	// 计算平均分
	averageScore := float64(totalScore) / float64(studentCount)

	// 输出统计结果
	fmt.Println("========== 学生成绩统计 ==========")
	fmt.Printf("学生人数: %d\n", studentCount)
	fmt.Printf("最高分: %d\n", maxScore)
	fmt.Printf("最低分: %d\n", minScore)
	fmt.Printf("平均分: %.2f\n", averageScore)
	fmt.Printf("及格人数: %d\n", passCount)
	fmt.Printf("及格率: %.1f%%\n", float64(passCount)/float64(studentCount)*100)
}
```

### 代码关键点说明

**第 7-8 行**:定义成绩数组和获取学生总数

**第 11-14 行**:初始化统计需要的变量,最高分和最低分都先设为第一个学生的成绩

**第 17-23 行**:遍历每个成绩,通过比较更新最高分和最低分

**第 26-31 行**:判断成绩是否大于等于 60 分,统计及格人数

**第 34-35 行**:计算平均分,注意要转换为 `float64` 类型才能得到小数结果

## 🚀 运行程序

### 第一步:保存文件

确保你的代码保存为 `student_score.go`

### 第二步:执行程序

打开终端(Terminal),进入文件所在目录,输入命令:

```bash
go run student_score.go
```

### 第三步:查看结果

你会看到这样的输出:

```
========== 学生成绩统计 ==========
学生人数: 5
最高分: 92
最低分: 63
平均分: 81.20
及格人数: 5
及格率: 100.0%
```

::: tip 提示
如果你想修改成绩数据,只需要改变第 7 行数组中的数字,比如:
```go
scores := [5]int{45, 92, 78, 55, 88}
```
再次运行,你会看到及格率变化了!
:::

## 💪 挑战练习

### 练习 1:添加不及格名单

修改程序,在统计结果中增加一行,显示有多少人不及格。

<details>
<summary>点击查看答案</summary>

```go{9,17,26}
package main

import "fmt"

func main() {
	scores := [5]int{85, 92, 78, 63, 88}
	studentCount := len(scores)

	maxScore := scores[0]
	minScore := scores[0]
	totalScore := 0
	passCount := 0
	failCount := 0  // 新增:不及格人数

	for i := 0; i < studentCount; i++ {
		currentScore := scores[i]
		totalScore += currentScore

		if currentScore > maxScore {
			maxScore = currentScore
		}
		if currentScore < minScore {
			minScore = currentScore
		}

		if currentScore >= 60 {
			passCount++
		} else {
			failCount++  // 新增:统计不及格
		}
	}

	averageScore := float64(totalScore) / float64(studentCount)

	fmt.Println("========== 学生成绩统计 ==========")
	fmt.Printf("学生人数: %d\n", studentCount)
	fmt.Printf("最高分: %d\n", maxScore)
	fmt.Printf("最低分: %d\n", minScore)
	fmt.Printf("平均分: %.2f\n", averageScore)
	fmt.Printf("及格人数: %d\n", passCount)
	fmt.Printf("不及格人数: %d\n", failCount)  // 新增:输出不及格人数
}
```

</details>

### 练习 2:增加优秀统计

在程序中增加"优秀人数"的统计(成绩 >= 85 分)。

<details>
<summary>点击查看答案</summary>

```go{13,28-30,45}
package main

import "fmt"

func main() {
	scores := [5]int{85, 92, 78, 63, 88}
	studentCount := len(scores)

	maxScore := scores[0]
	minScore := scores[0]
	totalScore := 0
	passCount := 0
	excellentCount := 0  // 新增:优秀人数

	for i := 0; i < studentCount; i++ {
		currentScore := scores[i]
		totalScore += currentScore

		if currentScore > maxScore {
			maxScore = currentScore
		}
		if currentScore < minScore {
			minScore = currentScore
		}

		if currentScore >= 60 {
			passCount++
		}
		if currentScore >= 85 {
			excellentCount++  // 新增:统计优秀
		}
	}

	averageScore := float64(totalScore) / float64(studentCount)

	fmt.Println("========== 学生成绩统计 ==========")
	fmt.Printf("学生人数: %d\n", studentCount)
	fmt.Printf("最高分: %d\n", maxScore)
	fmt.Printf("最低分: %d\n", minScore)
	fmt.Printf("平均分: %.2f\n", averageScore)
	fmt.Printf("及格人数: %d\n", passCount)
	fmt.Printf("及格率: %.1f%%\n", float64(passCount)/float64(studentCount)*100)
	fmt.Printf("优秀人数: %d\n", excellentCount)  // 新增:输出优秀人数
}
```

</details>

## 📌 小结

通过这个实践项目,你综合运用了:
- **数组**存储多个数据
- **循环**处理每一个数据
- **条件判断**实现业务逻辑(如判断及格、优秀)

你已经能够用 Go 语言解决实际问题了!继续保持这份学习热情,多动手实践,你会越来越熟练。💪
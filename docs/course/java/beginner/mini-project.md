---
title: 动手实践
category: Java
order: 9
tag: 菜鸟教程、新手教程
  - 
head:
  - - meta
    - name: keywords
      content: Java极简教程
---

 # 动手实践

恭喜你!你已经学完了 Java 编程中最核心的基础内容。你可能会惊讶地发现,专业程序员 90% 的工作时间都在使用这些基础知识,而你只用了 20% 的学习时间就掌握了 80% 的常用技能。

但是,**看懂不等于学会**。根据费曼学习法(Feynman Technique),只有当你能独立完成一个实际需求时,才算真正掌握了这些知识。

现在,让我们通过一个真实的小项目来验证你的学习成果。

## 💡 项目需求

我们要开发一个**学生成绩管理系统**,功能包括:

1. 输入 3 名学生的姓名和成绩
2. 计算平均分
3. 找出最高分和最低分
4. 判断每个学生是否及格(60分及格)

这个项目会用到你前面学过的:
- **变量(Variable)** - 存储学生信息
- **数据类型(Data Type)** - int、double、String
- **运算符(Operator)** - 比较、逻辑运算
- **条件语句(Conditional Statement)** - if-else 判断
- **循环(Loop)** - for 循环处理多个学生

## 📝 完整代码实现

```java{5-7,10-17,20-25,28-36,39-48}
public class StudentScoreManager {
    public static void main(String[] args) {
        
        // 第一步:定义数据
        String[] names = {"张三", "李四", "王五"};
        int[] scores = {85, 62, 45};
        int studentCount = 3;
        
        // 第二步:计算总分和平均分
        int totalScore = 0;
        for (int i = 0; i < studentCount; i++) {
            totalScore += scores[i];
        }
        double averageScore = (double) totalScore / studentCount;
        
        System.out.println("=== 学生成绩统计 ===");
        System.out.println("平均分: " + averageScore);
        
        // 第三步:找出最高分和最低分
        int maxScore = scores[0];
        int minScore = scores[0];
        for (int i = 1; i < studentCount; i++) {
            if (scores[i] > maxScore) maxScore = scores[i];
            if (scores[i] < minScore) minScore = scores[i];
        }
        
        System.out.println("最高分: " + maxScore);
        System.out.println("最低分: " + minScore);
        
        // 第四步:判断每个学生是否及格
        System.out.println("\n=== 学生成绩详情 ===");
        for (int i = 0; i < studentCount; i++) {
            String passStatus = (scores[i] >= 60) ? "及格" : "不及格";
            System.out.println(names[i] + ": " + 
                             scores[i] + "分 - " + passStatus);
        }
        
        // 第五步:统计及格人数
        int passCount = 0;
        for (int i = 0; i < studentCount; i++) {
            if (scores[i] >= 60) {
                passCount++;
            }
        }
        
        double passRate = (double) passCount / studentCount * 100;
        System.out.println("\n及格率: " + passRate + "%");
    }
}
```

## 🎯 运行结果

```bash
=== 学生成绩统计 ===
平均分: 64.0
最高分: 85
最低分: 45

=== 学生成绩详情 ===
张三: 85分 - 及格
李四: 62分 - 及格
王五: 45分 - 不及格

及格率: 66.66666666666666%
```

## 💪 挑战练习

::: tip 提示
先自己动手尝试,遇到困难再查看答案!
:::

### 练习 1:添加等级评定

在现有代码基础上,添加成绩等级评定:
- 90分以上:优秀
- 80-89分:良好
- 60-79分:及格
- 60分以下:不及格

<details>
<summary>点击查看答案</summary>

```java{7-14}
// 在第四步的循环中添加等级判断
System.out.println("\n=== 学生成绩详情 ===");
for (int i = 0; i < studentCount; i++) {
    String passStatus = (scores[i] >= 60) ? "及格" : "不及格";
    
    // 添加等级评定
    String grade;
    if (scores[i] >= 90) {
        grade = "优秀";
    } else if (scores[i] >= 80) {
        grade = "良好";
    } else if (scores[i] >= 60) {
        grade = "及格";
    } else {
        grade = "不及格";
    }
    
    System.out.println(names[i] + ": " + 
                     scores[i] + "分 - " + grade);
}
```

</details>

### 练习 2:扩展到 5 名学生

修改代码,支持录入 5 名学生的成绩,并测试所有功能是否正常。

<details>
<summary>点击查看答案</summary>

```java{2-4}
// 只需修改数据部分
String[] names = {"张三", "李四", "王五", "赵六", "孙七"};
int[] scores = {85, 62, 45, 92, 78};
int studentCount = 5;

// 其他代码完全不需要修改!
```

::: tip 发现了吗?
使用循环的好处就是:数据增加时,逻辑代码不需要改动!
:::

</details>

## 📌 小结

通过这个实战项目,你应该能够:

1. **独立组织代码结构** - 将需求拆解成清晰的步骤
2. **灵活运用基础知识** - 变量、循环、条件判断的综合应用
3. **解决实际问题** - 从需求到代码的完整实现

::: warning 下一步建议
- 尝试修改数据,观察程序运行结果
- 思考如何改进代码(比如让用户输入数据,而不是写死在代码里)
- 尝试添加新功能(比如按成绩排序)

记住:**多动手才是进步的唯一方法!**
:::
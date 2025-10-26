---
title: 控制台应用项目
description: 通过开发学生管理系统和图书馆系统，综合运用 Java 基础知识，掌握控制台应用开发流程。
order: 91
keywords: [Java, 控制台应用, 学生管理系统, 图书馆系统, 基础知识综合运用]
---

# 控制台应用项目

## 前置知识
> 在阅读本章前,你需要了解: Java 基础语法、面向对象初步、基本输入输出、流程控制（if/switch、for/while 循环）、数组和集合的简单使用。

## 为什么需要控制台应用项目？

想象一下，你刚学完 Java 的基础知识，但还不确定怎样把这些零散的知识串联起来，做出一个真实可运行的程序。开发一个控制台应用项目，比如学生管理系统或者图书馆系统，是个很棒的练习。它们能帮我们：

- 理解程序的整体架构
- 熟悉输入输出交互的设计
- 锻炼数据存储与处理逻辑
- 综合运用流程控制和面向对象思想

让我们一起通过做一个简单的学生管理系统，从零开始，逐步把知识块“拼凑”成一个功能完整的小项目。

## 具体章节

### 1. 设计核心需求：学生管理系统怎么做？

先别急着写代码，我们先想清楚：一个学生管理系统需要实现什么？

- 添加学生基本信息（学号、姓名、年龄）
- 查看学生列表
- 查找特定学生
- 删除学生信息

这些功能虽然简单，但涵盖了数据的增删查操作，够我们练手了。

### 2. 代码示例 1：最简单的学生信息存储与打印

先写一个能创建学生对象并打印的简单程序。

```java
import java.util.ArrayList;
import java.util.List;

public class StudentManagementApp {
    // 学生类，封装学生基本信息
    static class Student {
        String id;      // 学号
        String name;    // 姓名
        int age;        // 年龄

        Student(String id, String name, int age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return "学生学号: " + id + ", 姓名: " + name + ", 年龄: " + age;
        }
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        
        // 添加几个学生
        students.add(new Student("S001", "张三", 20));
        students.add(new Student("S002", "李四", 22));
        students.add(new Student("S003", "王五", 19));
        
        // 打印所有学生信息
        for (Student student : students) {
            System.out.println(student);
        }
    }
}
```

**这段代码做了什么？**  
1. 我们定义了一个简单的 `Student` 类，有学号、姓名和年龄字段。  
2. 用 `ArrayList` 存储学生对象。  
3. 在 `main` 方法中向列表中添加了几个学生实例。  
4. 最后用增强 `for` 循环遍历并输出所有学生。

这就是最朴素的学生管理“数据库”啦！你可能觉得这还离“管理系统”差得远，但不要急，后面马上给它注入控制台交互。

---

### 3. 代码示例 2：添加控制台输入，实现动态管理

静态的写死数据不够灵活，我们改成让用户从控制台输入，动态添加和查询学生。

```java
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class StudentManagementApp {
    static class Student {
        String id;
        String name;
        int age;

        Student(String id, String name, int age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return "学生学号: " + id + ", 姓名: " + name + ", 年龄: " + age;
        }
    }

    public static void main(String[] args) {
        List<Student> students = new ArrayList<>();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\n请输入操作编号: 1.添加学生 2.查看所有学生 3.退出");
            String input = scanner.nextLine();

            if ("1".equals(input)) {
                // 添加学生
                System.out.print("请输入学号: ");
                String id = scanner.nextLine();
                System.out.print("请输入姓名: ");
                String name = scanner.nextLine();
                System.out.print("请输入年龄: ");
                int age = Integer.parseInt(scanner.nextLine());

                students.add(new Student(id, name, age));
                System.out.println("学生添加成功！");
            } else if ("2".equals(input)) {
                // 查看所有学生
                if (students.isEmpty()) {
                    System.out.println("当前没有学生信息。");
                } else {
                    System.out.println("学生列表:");
                    for (Student s : students) {
                        System.out.println(s);
                    }
                }
            } else if ("3".equals(input)) {
                System.out.println("程序退出，再见！");
                break;
            } else {
                System.out.println("无效输入，请重新输入。");
            }
        }
        scanner.close();
    }
}
```

**这段代码做了什么？**  
1. 用 `Scanner` 读取用户输入。  
2. 利用 `while(true)` 循环不断接收命令（添加、查看、退出）。  
3. 添加学生时从控制台读取每个属性，创建新对象放入集合。  
4. 查看学生时打印所有已存学生。  
5. 用简单的文本界面和用户交互。

**这里的关键点：**  
- 你会发现控制台输入略显繁琐，但这正是掌握交互逻辑的基础。  
- 注意数据类型转换（字符串转整数），要保证输入格式正确，这是细节里容易出错的地方。

---

### 4. 代码示例 3：进阶功能——删除学生，实现更完整的管理

我们继续给系统添加删除学生功能，同时做点“小优化”：封装操作逻辑，避免 `main` 函数过于臃肿。

```java
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

public class StudentManagementApp {
    static class Student {
        String id;
        String name;
        int age;

        Student(String id, String name, int age) {
            this.id = id;
            this.name = name;
            this.age = age;
        }

        @Override
        public String toString() {
            return "学生学号: " + id + ", 姓名: " + name + ", 年龄: " + age;
        }
    }

    private List<Student> students = new ArrayList<>();
    private Scanner scanner = new Scanner(System.in);

    public void start() {
        while (true) {
            System.out.println("\n请选择操作: 1.添加学生 2.查看所有学生 3.删除学生 4.退出");
            String choice = scanner.nextLine();

            switch (choice) {
                case "1":
                    addStudent();
                    break;
                case "2":
                    listStudents();
                    break;
                case "3":
                    deleteStudent();
                    break;
                case "4":
                    System.out.println("退出程序。");
                    scanner.close();
                    return;
                default:
                    System.out.println("无效输入，请输入1~4的数字。");
            }
        }
    }

    private void addStudent() {
        System.out.print("请输入学号: ");
        String id = scanner.nextLine();
        System.out.print("请输入姓名: ");
        String name = scanner.nextLine();
        System.out.print("请输入年龄: ");
        int age = Integer.parseInt(scanner.nextLine());
        students.add(new Student(id, name, age));
        System.out.println("学生添加成功！");
    }

    private void listStudents() {
        if (students.isEmpty()) {
            System.out.println("当前无学生记录。");
        } else {
            System.out.println("学生列表：");
            for (Student s : students) {
                System.out.println(s);
            }
        }
    }

    private void deleteStudent() {
        System.out.print("请输入要删除的学生学号: ");
        String id = scanner.nextLine();

        Iterator<Student> iterator = students.iterator();
        boolean found = false;

        while (iterator.hasNext()) {
            Student student = iterator.next();
            if (student.id.equals(id)) {
                iterator.remove();  // 安全删除当前元素
                System.out.println("学生 " + id + " 删除成功！");
                found = true;
                break;
            }
        }

        if (!found) {
            System.out.println("未找到学号为 " + id + " 的学生。");
        }
    }

    public static void main(String[] args) {
        new StudentManagementApp().start();
    }
}
```

**这段代码做了什么？**  
1. 将所有功能封装成对象方法，结构更清晰。  
2. 新增删除功能，通过输入学号删除对应学生。  
3. 删除时使用 `Iterator` 迭代器安全地从集合中移除元素，避免并发修改异常。  
4. 主方法仅启动应用实例，职责单一。

---

## 对比总结

| 方案              | 优点                            | 缺点                                 | 适用场景                  |
|-------------------|---------------------------------|-------------------------------------|---------------------------|
| 静态数据示例       | 简单直观，入门快                | 无动态交互，功能单一                 | 初学了解类和集合使用      |
| 控制台输入交互     | 练习输入输出，基本交互设计      | 界面简单，操作需手动输入，易错         | 入门级交互逻辑训练        |
| 封装式完整系统     | 结构清晰，功能齐全，扩展方便    | 代码量大，封装和设计要求更高           | 真实项目雏形，代码规范培养 |

这些版本是逐步递进的过程，就像盖房子要先打好地基，慢慢搭建框架一样。每一步都有它存在的理由，熟练掌握它们，后续开发 Web、移动端系统都会受益。

---

:::tip 💡 实战建议

- **封装逻辑，避免 main 过于臃肿**：随着功能增加，把业务逻辑拆分成方法甚至类，方便阅读和维护。  
- **输入校验很重要**：上面示例没有处理非数字的年龄输入。如果想让系统更健壮，请加上异常处理，提醒用户重新输入正确格式。  
- **用集合API安全删除元素**：直接在 foreach 循环中 remove 会抛异常，用 Iterator 是规范做法。  
- **注重用户体验**：适当输出提示信息，让用户知道每一步发生了什么，提高程序的“友好度”。  
- **逐步迭代增加新功能**：控制台程序是小型实验场，不断尝试加功能，锻炼抽象和设计能力。

:::

---

:::warning ⚠️ 常见陷阱

- **Scanner 的 nextLine() 搭配 nextInt() 等方法时的坑**：如果用 `nextInt()` 读取数字后直接调用 `nextLine()`，会读取到空换行符，导致跳过输入。最佳做法是都用 `nextLine()`，然后手动转换数字类型。  
- **删除操作忘记用 Iterator，导致抛异常**：不能在遍历集合时直接调用 `list.remove()`，会触发 `ConcurrentModificationException`。  
- **未处理输入异常**：用户输入不合法时没有提示，程序直接报错，影响体验。

:::

---

## 延伸思考

- 如果采用更高级的数据结构（如 Map）管理学生信息，能带来什么好处？  
- 如何设计学生管理系统的数据持久化（例如文件或数据库存储）？  
- 怎样改造控制台程序，做到更友好、支持更多功能（例如修改学生信息或搜索）？

---

## 小结

- 通过构建学生管理系统，你学会了面向对象的设计思路。  
- 熟悉了控制台输入/输出，提高了用户交互能力。  
- 掌握了列表存储数据、用迭代器安全删除元素等实用技能。  
- 把混乱的知识点组合成完整程序，是提升编程能力的必经之路。

这些项目是你 Java 路上的“练兵场”，多写多练，你会发现实际开发也没有那么可怕。

祝你编码愉快！有问题随时来聊。
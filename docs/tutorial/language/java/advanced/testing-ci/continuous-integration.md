---
title: 持续集成
description: 介绍持续集成（CI/CD）基础概念、使用 Jenkins 和 GitLab CI 实现自动化构建，帮助 Java 开发者提升交付效率。
order: 87
keywords: [持续集成, CI/CD, Jenkins, GitLab CI, 自动化构建, Java]
---

# 持续集成

## 前置知识
> 在阅读本章前，你需要了解：Java 项目的基本构建过程（如 Maven 或 Gradle 使用），以及版本控制系统的基本操作（Git 基础即可）。

## 为什么需要持续集成？

你有没有遇到过这样的场景：项目代码在不同开发者电脑上看似正常运行，但合并到主分支后却暴露各种错误，或者部署成品手工操作频繁出错？这不仅让人头大，还极大拖慢了交付速度。

持续集成（Continuous Integration，简称 CI）就是为了解决这些「合并灾难」和「手工重复劳动」的问题。它的核心理念是：

- **频繁合并代码**：确保团队成员可以定期将最新代码推送到共享仓库。
- **自动构建和测试**：每次提交都会触发自动化构建和测试，及早发现问题。
- **保持主分支稳定**：使得任何时候主分支都可以准备用于部署。

读到这里，可能你会想：“听起来不错，但怎么具体实现呢？”别急，我们先聊聊核心概念，再逐步用实际工具操作验证。

## 持续集成的核心概念

简单来说，持续集成就是在你每次提交代码到版本库（比如 Git）的同时，有一套自动化流程帮你做以下事情：

1. **拉取最新代码** —— 把仓库里最新版本的代码取下来。
2. **编译构建项目** —— 确保项目能正常编译通过。
3. **运行单元测试** —— 验证代码逻辑正确。
4. **生成构建报告和产物** —— 用于后续发布或部署。

为什么需要它？单靠人工执行这些步骤，既耗时又容易出错，尤其当团队规模变大，代码频繁变更时更是如此。

当然，如果只是简单的“运行 `mvn clean install`”，你也许觉得没什么难度。但随着项目复杂度增加，操作流程多样，还会涉及代码质量扫描、自动化部署等环节，持续集成工具恰好帮你把繁琐事情自动化了。

## 具体章节

### 1. 用 Jenkins 实现第一个持续集成流程

Jenkins 是 Java 生态里最早广泛使用的持续集成服务器，它功能强大且插件丰富。我们先用最简单的示范来理解它的工作原理。

假设你有一个用 Maven 构建的 Java 项目，Jenkins 的任务是做到：每次你推送代码，Jenkins 自动拉代码、构建、测试。

以下是一个 Jenkins 任务配置的简化示例：作为示范，我们用 Jenkins Pipeline 脚本完成这一流程。

```java
// Jenkinsfile 实现自动构建流程（存放在项目根目录）
pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                // 拉取最新代码
                git url: 'https://github.com/example/java-project.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                // 编译并运行测试
                sh 'mvn clean install'
            }
        }
    }
}
```

这段 Jenkinsfile 做了什么？

- `agent any` 表示任务可以在任意可用节点执行。
- `stage('Checkout')` 阶段拉取远程 Git 仓库主分支代码。
- `stage('Build')` 阶段使用 Maven 构建项目并执行测试。

Jenkins 会自动识别项目里的 `Jenkinsfile`，并把整个流程自动跑起来。

### 2. 使用 GitLab CI/CD 自动构建 Java 项目

GitLab CI 是 GitLab 自带的持续集成工具，配置处于代码库内，通过 `.gitlab-ci.yml` 文件定义构建和测试流程。它的好处是：不需要单独维护 Jenkins 服务器，轻松集成在日常工作流里。

下面是一个简单GitLab CI配置，自动构建 Maven Java 项目。

```yaml
# .gitlab-ci.yml
stages:
  - build
  - test

build_job:
  stage: build
  image: maven:3.8.5-openjdk-17
  script:
    - mvn clean compile

test_job:
  stage: test
  image: maven:3.8.5-openjdk-17
  script:
    - mvn test
  artifacts:
    when: always
    reports:
      junit: target/surefire-reports/*.xml
```

这段配置做了什么？

- 定义了两个阶段 `build`（构建）和 `test`（测试）。
- `build_job` 使用 Maven 镜像执行 `mvn clean compile` 编译代码。
- `test_job` 使用同样镜像运行单元测试 `mvn test`，并收集测试报告。

你只要把 `.gitlab-ci.yml` 推送到仓库，GitLab 就会在每次提交后自动执行这些任务。

### 3. 复杂场景：结合多模块项目和代码质量检查

真实项目中，可能需要更复杂的流程，比如：

- 多模块 Maven 项目分阶段构建。
- 集成代码扫描工具，如 SonarQube，保证代码质量。
- 并行执行测试加快速度。

我们用一个更完整的 Jenkins Pipeline 例子展示：

```java
pipeline {
    agent any
    environment {
        SONARQUBE = credentials('sonarqube-token')
    }
    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/example/multimodule-java.git', branch: 'main'
            }
        }
        stage('Build & Test') {
            parallel {
                stage('Module-A') {
                    steps {
                        dir('module-a') {
                            sh 'mvn clean test'
                        }
                    }
                }
                stage('Module-B') {
                    steps {
                        dir('module-b') {
                            sh 'mvn clean test'
                        }
                    }
                }
            }
        }
        stage('SonarQube Analysis') {
            steps {
                withSonarQubeEnv('MySonarQubeServer') {
                    sh 'mvn sonar:sonar'
                }
            }
        }
    }
    post {
        always {
            junit 'module-*/target/surefire-reports/*.xml'  // 收集测试报告
        }
    }
}
```

这段脚本解释：

1. **多模块并行构建测试**：`Module-A` 和 `Module-B` 并行执行测试，节省时间。
2. **SonarQube 代码质量分析**：集成 SonarQube 扫描，用 `withSonarQubeEnv` 包装执行。
3. **测试报告收集**：执行结束总会收集所有模块的测试结果，方便查看。

这样的流水线更适合实际中大型项目。

---

:::tip 💡 实战建议
- **逐步集成**：不要把所有复杂功能一次性加进流水线，先搭建最简单版本，确保能自动构建测试，再逐步加入代码扫描、部署等环节。
- **保持流水线简洁直观**，方便团队成员理解和维护。
- **利用代码审查和拉取请求保护分支策略**，配合 CI 保证代码质量，提高主分支稳定性。
:::

:::warning ⚠️ 常见陷阱
- **忽视环境一致性**：流水线中使用的 JDK、Maven 版本要和本地开发一致，否则“在我电脑上没问题”会一直发生。
- **流水线无故失败导致忽视构建错误**：有些团队为了避免频繁看见失败，选择忽略错误，这样会让问题越积越多。
- **测试覆盖率不足**：只构建不测试，失去 CI 最大价值。务必保证关键功能有自动化测试。
:::

:::details 🔍 深入理解
持续集成背后的哲学不仅是“自动化”。它更是一种文化推动力——促使团队更早发现问题，减少集成成本，同时让软件交付更可信赖。有人把它比作生产线上的质检环节，没有质检，整条线会埋下隐患。熟悉不同 CI 工具（Jenkins、GitLab CI、GitHub Actions 等），理解其优缺点，有助于根据团队具体情况选择合适方案。
:::

## 小结

- 持续集成是通过自动化构建和测试，持续验证代码质量和正确性的流程。
- Jenkins 和 GitLab CI 是目前使用广泛的两大持续集成工具，各有特色。
- 真实项目中，流水线需求更复杂，要分阶段搭建，保证工具和环境一致。
- 持续集成不是单纯“搭工具”，而是推动团队软件质量提升和交付效率的文化。

这章讲了持续集成的基础概念和实际操作演练。接下来，你可以结合项目尝试写自己的流水线脚本，实践起来会更有感触。

期待你的持续集成之路越来越顺畅！
```

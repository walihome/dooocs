# VitePress 自动化脚本说明

## 概述

本项目包含两个自动化脚本，用于动态生成网站内容：

1. `genIndex.ts` - 生成各级目录的索引页面
2. `genHomePage.ts` - 生成首页的表格导航

## 脚本功能

### genIndex.ts
- 自动遍历 docs 目录下的所有二级目录
- 为每个二级目录生成 `index.md` 文件
- 列出该目录下所有三级目录的链接

### genHomePage.ts
- 自动生成首页的表格形式导航
- 第一列显示分类名称（一级目录）
- 第二列显示该分类下的所有内容（二级目录）
- 支持点击直接跳转到对应知识库

## 使用方法

### 自动运行
脚本会在以下情况自动运行：
- `npm run prebuild` - 手动运行预构建
- `npm run docs:build` - 构建文档时自动运行
- `npm install` 或 `npm run postinstall` - 安装依赖后自动运行

### 手动运行
```bash
# 运行索引生成
npx tsx docs/.vitepress/genIndex.ts

# 运行首页生成
npx tsx docs/.vitepress/genHomePage.ts

# 运行所有预构建脚本
npm run prebuild
```

## 目录结构要求

```
docs/
├── .vitepress/
│   ├── genIndex.ts
│   ├── genHomePage.ts
│   └── ...
├── tutorial/           # 一级目录
│   ├── index.md       # 自动生成
│   ├── python/        # 二级目录
│   │   └── index.md
│   └── java/          # 二级目录
│       └── index.md
├── note/              # 一级目录
│   ├── index.md       # 自动生成
│   └── ...
└── index.md           # 首页，自动生成
```

## 自定义配置

### 分类名称映射
在 `genHomePage.ts` 中可以修改 `categoryNameMap` 来自定义分类显示名称：

```typescript
const categoryNameMap: Record<string, string> = {
  'tutorial': '教程',
  'note': '笔记',
  'resource': '资源',
  'cheatsheet': '速记表',
  'roadmap': '路线图'
};
```

### 排序控制
在各目录的 `index.md` 文件中添加 frontmatter 来控制排序：

```markdown
---
title: 自定义标题
order: 1
---
```

### 标题自定义
脚本会按以下优先级获取标题：
1. frontmatter 中的 `title` 字段
2. 文档中的第一个 `#` 标题
3. 目录名称

## 添加新内容

当你添加新的目录时：

1. 创建目录结构：
   ```
   docs/新分类/新内容/index.md
   ```

2. 运行预构建脚本：
   ```bash
   npm run prebuild
   ```

3. 新内容会自动出现在首页表格中

## 样式自定义

首页表格的样式定义在生成的 `index.md` 文件中，包含：
- 响应式设计
- 悬停效果
- 品牌色彩主题
- 移动端适配

如需修改样式，可以编辑 `genHomePage.ts` 中的 CSS 部分。 
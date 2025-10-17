---
title: 路线图
order: 3
editLink: false
isHomePage: true
sidebar: false
---

<script setup>
const pageData = {
  "hero": {
    "title": "开发路线图",
    "description": "为不同技术栈提供系统化的学习路径"
  },
  "columns": [
    {
      "id": "backend",
      "icon": "🚀",
      "title": "后端开发",
      "items": [
        {
          "displayName": "Java 开发路线图",
          "link": "/roadmap/java"
        }
      ]
    },
    {
      "id": "frontend",
      "icon": "🎨",
      "title": "前端开发",
      "items": [
        {
          "displayName": "前端开发路线图",
          "link": "/roadmap/frontend"
        }
      ]
    },
    {
      "id": "more",
      "icon": "📚",
      "title": "更多路线",
      "items": [
        {
          "displayName": "Python 开发路线图",
          "link": "/roadmap/python"
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

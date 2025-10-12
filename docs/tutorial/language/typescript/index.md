---
title: Typescript教程
order: 7
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "Typescript教程",
    "description": "欢迎来到Typescript教程！这里将带你从零开始学习编程。"
  },
  "columns": [
    {
      "id": "content",
      "icon": "📚",
      "title": "课程内容",
      "items": [
        {
          "displayName": "TypeScript入门教程",
          "link": "/tutorial/language/typescript/beginner/",
          "order": 1
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

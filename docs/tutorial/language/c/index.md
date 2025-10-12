---
title: C语言教程
order: 1
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "C语言教程",
    "description": "欢迎来到C语言教程！这里将带你从零开始学习编程。"
  },
  "columns": [
    {
      "id": "content",
      "icon": "📚",
      "title": "课程内容",
      "items": [
        {
          "displayName": "C语言入门教程",
          "link": "/tutorial/language/c/beginner/",
          "order": 1
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

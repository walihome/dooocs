---
title: Go语言教程
order: 6
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "Go语言教程",
    "description": "欢迎来到Go语言教程！这里将带你从零开始学习编程。"
  },
  "columns": [
    {
      "id": "content",
      "icon": "📚",
      "title": "课程内容",
      "items": [
        {
          "displayName": "Go语言入门教程",
          "link": "/tutorial/language/go/beginner/",
          "order": 1
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

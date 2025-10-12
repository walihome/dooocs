---
title: Python教程
order: 5
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "Python教程",
    "description": "欢迎来到Python教程！这里将带你从零开始学习编程。"
  },
  "columns": [
    {
      "id": "content",
      "icon": "📚",
      "title": "课程内容",
      "items": [
        {
          "displayName": "Python入门教程",
          "link": "/tutorial/language/python/beginner/",
          "order": 1
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

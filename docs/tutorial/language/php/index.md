---
title: PHP教程
order: 9
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "PHP教程",
    "description": "欢迎来到PHP教程！这里将带你从零开始学习编程。"
  },
  "columns": [
    {
      "id": "content",
      "icon": "📚",
      "title": "课程内容",
      "items": [
        {
          "displayName": "PHP入门教程",
          "link": "/tutorial/language/php/beginner/",
          "order": 1
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

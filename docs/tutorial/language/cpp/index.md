---
title: C++教程
order: 2
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "C++教程",
    "description": "欢迎来到C++教程！这里将带你从零开始学习编程。"
  },
  "columns": [
    {
      "id": "content",
      "icon": "📚",
      "title": "课程内容",
      "items": [
        {
          "displayName": "C++入门教程",
          "link": "/tutorial/language/cpp/beginner/",
          "order": 1
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

---
title: 编程语言
order: 1
editLink: false
isHomePage: true
sidebar: false
---

<script setup>
const pageData = {
  "hero": {
    "title": "language",
    "description": "language的内容概览"
  },
  "columns": [
    {
      "id": "files",
      "icon": "📝",
      "title": "文档",
      "items": [
        {
          "displayName": "C 速记表",
          "link": "/cheatsheet/language/c"
        },
        {
          "displayName": "C++ 速记表",
          "link": "/cheatsheet/language/cpp"
        },
        {
          "displayName": "Go 速记表",
          "link": "/cheatsheet/language/go"
        },
        {
          "displayName": "Java 速记表",
          "link": "/cheatsheet/language/java"
        },
        {
          "displayName": "JavaScript 速记表",
          "link": "/cheatsheet/language/javascript"
        },
        {
          "displayName": "PHP 速记表",
          "link": "/cheatsheet/language/php"
        },
        {
          "displayName": "Python 速记表",
          "link": "/cheatsheet/language/python"
        },
        {
          "displayName": "TypeScript 速记表",
          "link": "/cheatsheet/language/typescript"
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

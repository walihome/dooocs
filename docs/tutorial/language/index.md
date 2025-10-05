---
title: 编程语言
order: 1
editLink: false
isHomePage: true
sidebar: false
showList: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "language",
    "description": "language的内容概览"
  },
  "columns": [
    {
      "id": "directories",
      "icon": "📚",
      "title": "教程列表",
      "items": [
        {
          "displayName": "c",
          "link": "/tutorial/language/c/",
          "order": null
        },
        {
          "displayName": "c++",
          "link": "/tutorial/language/c++/",
          "order": null
        },
        {
          "displayName": "go",
          "link": "/tutorial/language/go/",
          "order": null
        },
        {
          "displayName": "java",
          "link": "/tutorial/language/java/",
          "order": null
        },
        {
          "displayName": "javascript",
          "link": "/tutorial/language/javascript/",
          "order": null
        },
        {
          "displayName": "php",
          "link": "/tutorial/language/php/",
          "order": null
        },
        {
          "displayName": "python",
          "link": "/tutorial/language/python/",
          "order": null
        },
        {
          "displayName": "typescript",
          "link": "/tutorial/language/typescript/",
          "order": null
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

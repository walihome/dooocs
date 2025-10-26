---
title: 编程语言
order: 1
editLink: false
isHomePage: true
layout:
  root: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "编程语言",
    "description": "编程语言的内容概览"
  },
  "columns": [
    {
      "id": "javascript",
      "icon": "📁",
      "title": "javascript",
      "items": [
        {
          "displayName": "Javascript 技术趋势-20250828",
          "link": "/rankings/language/javascript/Javascript-trending-2025",
          "order": null
        }
      ]
    },
    {
      "id": "python",
      "icon": "📁",
      "title": "python",
      "items": [
        {
          "displayName": "Python 技术趋势-20250828",
          "link": "/rankings/language/python/Python-trending-2025",
          "order": null
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

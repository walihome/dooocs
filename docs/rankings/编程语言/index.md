---
title: 编程语言
order: 1
editLink: false
isHomePage: true
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
          "link": "/rankings/编程语言/javascript/Javascript 技术趋势-20250828",
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
          "link": "/rankings/编程语言/python/Python 技术趋势-20250828",
          "order": null
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

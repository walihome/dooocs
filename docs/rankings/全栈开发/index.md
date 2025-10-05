---
title: 全栈开发
order: 1
editLink: false
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "全栈开发",
    "description": "全栈开发的内容概览"
  },
  "columns": [
    {
      "id": "个人开发者必备",
      "icon": "📁",
      "title": "个人开发者必备",
      "items": [
        {
          "displayName": "Forum 技术趋势-20250828",
          "link": "/rankings/全栈开发/个人开发者必备/Forum 技术趋势-20250828",
          "order": null
        },
        {
          "displayName": "个人开发者 技术趋势-20250830",
          "link": "/rankings/全栈开发/个人开发者必备/个人开发者 技术趋势-20250830",
          "order": null
        },
        {
          "displayName": "评论 技术趋势-20250828",
          "link": "/rankings/全栈开发/个人开发者必备/评论 技术趋势-20250828",
          "order": null
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

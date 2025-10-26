---
title: 全栈开发
order: 1
editLink: false
---

<script setup>
const pageData = {
  "hero": {
    "title": "全栈开发",
    "description": "全栈开发的内容概览"
  },
  "columns": [
    {
      "id": "solo-develop",
      "icon": "📁",
      "title": "个人开发者必备",
      "items": [
        {
          "displayName": "Forum 技术趋势-20250828",
          "link": "/rankings/fullstack/solo-develop/forum-ranking",
          "order": null
        },
        {
          "displayName": "个人开发者 技术趋势-20250830",
          "link": "/rankings/fullstack/solo-develop/solo-develop-trending-2025",
          "order": null
        },
        {
          "displayName": "评论 技术趋势-20250828",
          "link": "/rankings/fullstack/solo-develop/comment-trending-2025",
          "order": null
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

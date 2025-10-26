---
title: 人工智能
order: 1
editLink: false
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "人工智能",
    "description": "人工智能的内容概览"
  },
  "columns": [
    {
      "id": "opensource",
      "icon": "📁",
      "title": "AI 开源趋势",
      "items": [
        {
          "displayName": "Ai 技术趋势-20250828",
          "link": "/rankings/ai/opensource/ai-trending-2025",
          "order": null
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

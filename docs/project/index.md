---
title: 项目集合
order: 4
editLink: false
isHomePage: true
sidebar: false
---

<script setup>
const pageData = {
  "hero": {
    "title": "项目集合",
    "description": "精选各类实战项目，从入门到商业级应用"
  },
  "columns": [
    {
      "id": "beginner",
      "icon": "🎯",
      "title": "入门练手",
      "items": [
        {
          "displayName": "入门练手项目",
          "link": "/project/beginner"
        }
      ]
    },
    {
      "id": "advanced",
      "icon": "🚀",
      "title": "进阶实战",
      "items": [
        {
          "displayName": "进阶实战项目",
          "link": "/project/advanced"
        }
      ]
    },
    {
      "id": "tools",
      "icon": "🛠️",
      "title": "工具/脚手架",
      "items": [
        {
          "displayName": "工具与脚手架",
          "link": "/project/tools"
        }
      ]
    },
    {
      "id": "opensource",
      "icon": "⭐",
      "title": "开源精选",
      "items": [
        {
          "displayName": "开源精选项目",
          "link": "/project/opensource"
        }
      ]
    },
    {
      "id": "commercial",
      "icon": "💼",
      "title": "商业级项目",
      "items": [
        {
          "displayName": "商业级项目",
          "link": "/project/commercial"
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

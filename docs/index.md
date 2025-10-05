---
editLink: false
isHomePage: true
---

<script setup>
const pageData = {
  "hero": {
    "title": "极简编程",
    "description": "编程如此简单！"
  },
  "columns": [
    {
      "id": "tutorial",
      "icon": "📚",
      "title": "教程",
      "items": [
        {
          "displayName": "编程语言",
          "link": "/tutorial/language/"
        }
      ]
    },
    {
      "id": "cheatsheet",
      "icon": "⚡",
      "title": "速记表",
      "items": [
        {
          "displayName": "编程语言",
          "link": "/cheatsheet/language/"
        },
        {
          "displayName": "Linux",
          "link": "/cheatsheet/linux"
        },
        {
          "displayName": "Git",
          "link": "/cheatsheet/git"
        }
      ]
    },
    {
      "id": "roadmap",
      "icon": "🗺️",
      "title": "路线图",
      "items": []
    },
    {
      "id": "project",
      "icon": "📁",
      "title": "项目",
      "items": []
    },
    {
      "id": "rankings",
      "icon": "📁",
      "title": "榜单资讯",
      "items": [
        {
          "displayName": "人工智能",
          "link": "/rankings/人工智能/"
        },
        {
          "displayName": "全栈开发",
          "link": "/rankings/全栈开发/"
        },
        {
          "displayName": "编程语言",
          "link": "/rankings/编程语言/"
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

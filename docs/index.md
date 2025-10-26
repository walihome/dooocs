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
      "items": [
        {
          "displayName": "前端开发",
          "link": "/roadmap/frontend"
        },
        {
          "displayName": "Java 开发",
          "link": "/roadmap/java"
        },
        {
          "displayName": "Python 开发",
          "link": "/roadmap/python"
        }
      ]
    },
    {
      "id": "project",
      "icon": "📁",
      "title": "项目集合",
      "items": [
        {
          "displayName": "入门练手",
          "link": "/project/beginner"
        },
        {
          "displayName": "进阶实战",
          "link": "/project/advanced"
        },
        {
          "displayName": "工具与脚手架",
          "link": "/project/tools"
        },
        {
          "displayName": "开源精选",
          "link": "/project/opensource"
        },
        {
          "displayName": "商业级项目",
          "link": "/project/commercial"
        }
      ]
    },
    {
      "id": "rankings",
      "icon": "📁",
      "title": "榜单资讯",
      "items": [
        {
          "displayName": "人工智能",
          "link": "/rankings/ai/"
        },
        {
          "displayName": "全栈开发",
          "link": "/rankings/fullstack/"
        },
        {
          "displayName": "编程语言",
          "link": "/rankings/language/"
        }
      ]
    },
    {
      "id": "venture",
      "icon": "📁",
      "title": "创业有道",
      "items": [
        {
          "displayName": "创业搭子",
          "link": "/venture/partners/"
        }
      ]
    },
    {
      "id": "breathe",
      "icon": "📁",
      "title": "认真生活",
      "items": [
        {
          "displayName": "运动搭子",
          "link": "/breathe/partners/"
        }
      ]
    }
  ]
};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />

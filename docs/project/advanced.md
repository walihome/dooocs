---
title: 进阶实战
sidebar: false
single: true
order: 2
---

<script setup>
const projectsData = [
  {
    title: '进阶实战',
    description: '有一定难度的综合项目，提升你的开发能力',
    icon: '🚀',
    projects: [
      {
        name: '在线协作白板',
        description: '实时多人协作白板，支持绘制、文字、图片、撤销重做。使用 WebSocket 实现实时同步，Canvas 绘制，Redis 存储状态。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'TypeScript',
        stars: '3.4k',
        tags: ['WebSocket', 'Canvas', 'Redis', 'Socket.io']
      },
      {
        name: '短链接服务',
        description: '完整的短链接生成和管理系统，包含点击统计、访问分析、自定义短链。学习哈希算法、分布式 ID、缓存策略。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Node.js',
        stars: '2.1k',
        tags: ['Express', 'MongoDB', 'Redis', 'Analytics']
      },
      {
        name: '实时聊天室',
        description: '支持私聊、群聊、语音、视频的实时通讯应用。包含消息已读、@提醒、表情包、文件传输等功能。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '4.2k',
        tags: ['Spring Boot', 'WebSocket', 'MySQL', 'MinIO']
      },
      {
        name: '在线代码编辑器',
        description: '类似 CodePen 的代码编辑和实时预览工具。支持 HTML/CSS/JS、代码提示、多文件、分享链接。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'React',
        stars: '5.6k',
        tags: ['Monaco Editor', 'WebContainer', 'React', 'Split Pane']
      },
      {
        name: '图片床系统',
        description: '图片上传、存储、CDN 加速的完整解决方案。支持多种存储后端、图片压缩、水印、防盗链。',
        url: '#',
        github: '#',
        language: 'Go',
        stars: '1.8k',
        tags: ['Go', 'MinIO', 'OSS', 'Image Processing']
      },
      {
        name: '看板式任务管理',
        description: '类似 Trello 的任务管理工具，支持拖拽排序、多人协作、子任务、标签、到期提醒。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Vue',
        stars: '3.9k',
        tags: ['Vue3', 'Drag & Drop', 'Pinia', 'WebSocket']
      },
      {
        name: '在线文档协作',
        description: '类似 Google Docs 的协作文档编辑器，支持多人实时编辑、评论、版本历史、权限控制。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'TypeScript',
        stars: '4.7k',
        tags: ['Slate.js', 'CRDT', 'WebSocket', 'OT']
      },
      {
        name: 'API 接口管理平台',
        description: '接口文档、Mock 数据、接口测试的一体化平台。支持团队协作、环境管理、自动化测试。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '6.3k',
        tags: ['Spring Boot', 'Mock', 'Swagger', 'PostgreSQL']
      },
      {
        name: '视频会议系统',
        description: '基于 WebRTC 的视频会议应用，支持屏幕共享、聊天、录制、虚拟背景。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Node.js',
        stars: '3.2k',
        tags: ['WebRTC', 'Socket.io', 'MediaStream', 'Peer-to-Peer']
      },
      {
        name: '问卷调查系统',
        description: '在线问卷设计、发布、统计分析平台。支持多种题型、逻辑跳转、数据导出、报表生成。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Python',
        stars: '2.5k',
        tags: ['Django', 'Vue3', 'Chart.js', 'Export']
      },
      {
        name: '低代码表单设计器',
        description: '拖拽式表单设计工具，支持自定义组件、数据校验、动态表单、表单联动。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Vue',
        stars: '5.1k',
        tags: ['Vue3', 'Form Builder', 'Drag & Drop', 'JSON Schema']
      },
      {
        name: '数据可视化大屏',
        description: '大屏数据展示系统，支持多种图表、实时数据、自适应布局、全屏展示。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'React',
        stars: '4.8k',
        tags: ['React', 'ECharts', 'DataV', 'WebSocket']
      }
    ]
  }
];
</script>

<Projects :categories="projectsData" />


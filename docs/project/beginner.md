---
title: 入门练手
sidebar: false
single: true
order: 1
---

<script setup>
const projectsData = [
  {
    title: '入门练手',
    description: '适合初学者的小项目，帮助你快速上手编程',
    icon: '🎯',
    projects: [
      {
        name: 'TodoList 待办事项',
        description: '经典的待办事项应用，学习 CRUD 操作、状态管理和本地存储。功能包括：添加任务、标记完成、删除任务、筛选任务。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'JavaScript',
        stars: '1.2k',
        tags: ['React', 'TypeScript', 'LocalStorage', 'Hooks']
      },
      {
        name: '天气查询应用',
        description: '调用第三方天气 API 展示城市天气信息，学习 API 调用、数据展示、错误处理。支持搜索城市、查看多日天气、温度单位切换。',
        url: '#',
        github: '#',
        language: 'Vue',
        stars: '856',
        tags: ['Vue3', 'Axios', 'API', 'Composition API']
      },
      {
        name: '个人博客系统',
        description: '简洁的个人博客，支持 Markdown 文章、分类标签、评论功能。学习文件系统、路由、SEO 优化。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Next.js',
        stars: '2.3k',
        tags: ['Next.js', 'MDX', 'Tailwind CSS', 'SSG']
      },
      {
        name: '计算器应用',
        description: '功能完整的科学计算器，支持基础运算、科学计算、历史记录。学习事件处理、计算逻辑、键盘快捷键。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'JavaScript',
        stars: '432',
        tags: ['Vanilla JS', 'CSS Grid', 'Keyboard Event']
      },
      {
        name: '番茄工作法计时器',
        description: '番茄工作法计时应用，支持自定义时长、休息提醒、统计数据。学习定时器、通知 API、PWA。',
        url: '#',
        github: '#',
        language: 'React',
        stars: '678',
        tags: ['React', 'PWA', 'Notification', 'Service Worker']
      },
      {
        name: '在线音乐播放器',
        description: '简单的音乐播放器，支持播放控制、播放列表、进度条。学习 Audio API、媒体控制、状态同步。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Vue',
        stars: '1.5k',
        tags: ['Vue3', 'Audio API', 'Composition API']
      },
      {
        name: '记账本应用',
        description: '简单的个人记账工具，支持收支记录、分类统计、图表展示。学习数据持久化、图表库使用。',
        url: '#',
        github: '#',
        language: 'React',
        stars: '892',
        tags: ['React', 'Chart.js', 'IndexedDB']
      },
      {
        name: '二维码生成器',
        description: 'URL/文本转二维码工具，支持自定义样式、颜色、Logo。学习第三方库集成、Canvas 绘制。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'JavaScript',
        stars: '543',
        tags: ['QRCode', 'Canvas', 'Download']
      },
      {
        name: 'Markdown 编辑器',
        description: '在线 Markdown 编辑器，支持实时预览、导出 HTML/PDF、快捷键。学习编辑器集成、文件导出。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Vue',
        stars: '1.8k',
        tags: ['Vue3', 'Markdown', 'CodeMirror']
      },
      {
        name: '颜色选择器工具',
        description: '颜色选择和转换工具，支持 RGB、HEX、HSL 互转、调色板保存。学习颜色算法、拖拽交互。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'JavaScript',
        stars: '398',
        tags: ['Color Picker', 'Canvas', 'LocalStorage']
      },
      {
        name: '打字练习游戏',
        description: '打字速度和准确度练习工具，支持不同难度、统计分析、排行榜。学习键盘事件、计时逻辑。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'React',
        stars: '765',
        tags: ['React', 'Game', 'Keyboard Event']
      },
      {
        name: '备忘录应用',
        description: '简单的笔记应用，支持富文本编辑、分类、搜索。学习富文本编辑器、全文搜索。',
        url: '#',
        github: '#',
        language: 'Vue',
        stars: '612',
        tags: ['Vue3', 'Rich Text', 'Search']
      }
    ]
  }
];
</script>

<Projects :categories="projectsData" />


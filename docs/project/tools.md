---
title: 工具与脚手架
sidebar: false
single: true
order: 3
---

<script setup>
const projectsData = [
  {
    title: '工具/脚手架',
    description: '开发辅助工具、项目模板和脚手架，提升开发效率',
    icon: '🛠️',
    projects: [
      {
        name: 'Vue3 Admin 后台模板',
        description: '基于 Vue3 + TypeScript 的企业级后台管理系统模板。集成权限管理、动态路由、国际化、主题切换、图表组件。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Vue',
        stars: '12.5k',
        tags: ['Vue3', 'Vite', 'Element Plus', 'TypeScript', 'Pinia']
      },
      {
        name: 'React Admin Dashboard',
        description: 'React 后台管理系统模板，包含完整的 RBAC 权限、表格、表单、图表等常用功能。响应式设计，支持暗黑模式。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'React',
        stars: '8.3k',
        tags: ['React', 'Ant Design', 'TypeScript', 'Redux Toolkit']
      },
      {
        name: 'Spring Boot 快速开发平台',
        description: '企业级 Spring Boot 项目脚手架。集成 MyBatis-Plus、Redis、JWT、Swagger、代码生成器等。开箱即用。',
        url: '#',
        github: '#',
        language: 'Java',
        stars: '6.2k',
        tags: ['Spring Boot', 'MyBatis-Plus', 'Redis', 'JWT', 'Shiro']
      },
      {
        name: 'API 文档生成器',
        description: '从代码注释自动生成 API 文档。支持 OpenAPI/Swagger、Markdown、HTML 等多种格式导出。',
        url: '#',
        github: '#',
        language: 'Node.js',
        stars: '4.7k',
        tags: ['OpenAPI', 'Swagger', 'CLI', 'Documentation']
      },
      {
        name: '代码生成器',
        description: '根据数据库表结构自动生成前后端 CRUD 代码。支持多种框架模板，自定义配置。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '3.1k',
        tags: ['Code Generator', 'MyBatis', 'Vue', 'Template']
      },
      {
        name: 'CLI 工具开发框架',
        description: '命令行工具开发脚手架。支持子命令、交互式输入、插件系统、配置管理。',
        url: '#',
        github: '#',
        language: 'TypeScript',
        stars: '2.4k',
        tags: ['CLI', 'Commander', 'Inquirer', 'Plugin']
      },
      {
        name: 'Electron 桌面应用模板',
        description: 'Electron + React/Vue 桌面应用开发模板。包含自动更新、打包配置、原生能力封装。',
        url: '#',
        github: '#',
        language: 'TypeScript',
        stars: '5.8k',
        tags: ['Electron', 'React', 'Auto Update', 'Native']
      },
      {
        name: '微信小程序脚手架',
        description: '小程序快速开发模板，集成常用组件、工具函数、状态管理、网络请求封装。',
        url: '#',
        github: '#',
        language: 'JavaScript',
        stars: '3.7k',
        tags: ['WeChat', 'Mini Program', 'Component Library']
      },
      {
        name: 'Monorepo 工作空间模板',
        description: '基于 pnpm workspace 的 Monorepo 项目模板。包含多包管理、共享配置、统一构建发布。',
        url: '#',
        github: '#',
        language: 'TypeScript',
        stars: '4.2k',
        tags: ['Monorepo', 'pnpm', 'Turborepo', 'Changesets']
      },
      {
        name: 'Chrome 扩展开发模板',
        description: 'Chrome Extension 开发脚手架，支持 manifest v3、热重载、TypeScript、React。',
        url: '#',
        github: '#',
        language: 'TypeScript',
        stars: '2.9k',
        tags: ['Chrome Extension', 'React', 'Manifest V3']
      },
      {
        name: 'VSCode 插件开发模板',
        description: 'VSCode Extension 快速开发模板，包含常用 API 示例、调试配置、发布脚本。',
        url: '#',
        github: '#',
        language: 'TypeScript',
        stars: '1.6k',
        tags: ['VSCode', 'Extension', 'Language Server']
      },
      {
        name: 'Docker Compose 模板集',
        description: '常用开发环境的 Docker Compose 配置集合。MySQL、Redis、MongoDB、Elasticsearch 等一键启动。',
        url: '#',
        github: '#',
        language: 'Shell',
        stars: '3.3k',
        tags: ['Docker', 'Docker Compose', 'DevOps']
      },
      {
        name: 'UI 组件库模板',
        description: '组件库开发脚手架，包含组件开发、文档生成、单元测试、打包发布的完整流程。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'TypeScript',
        stars: '2.7k',
        tags: ['Component Library', 'Storybook', 'Vitest']
      },
      {
        name: 'Next.js 全栈模板',
        description: 'Next.js 14 App Router 全栈项目模板。集成 Prisma、NextAuth、Tailwind、tRPC。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'TypeScript',
        stars: '7.1k',
        tags: ['Next.js', 'Prisma', 'tRPC', 'NextAuth']
      },
      {
        name: 'GraphQL API 脚手架',
        description: 'GraphQL API 快速开发模板，包含 Schema 设计、Resolver、认证授权、DataLoader。',
        url: '#',
        github: '#',
        language: 'TypeScript',
        stars: '2.8k',
        tags: ['GraphQL', 'Apollo Server', 'Prisma', 'TypeGraphQL']
      }
    ]
  }
];
</script>

<Projects :categories="projectsData" />


---
title: 前端开发
sidebar: false
single: true
---

<script setup>
const roadmapData = [
  {
    title: 'Internet 基础',
    description: '理解互联网的工作原理',
    topics: [
      {
        name: '互联网是如何工作的',
        description: 'HTTP/HTTPS 协议、客户端/服务器模型、请求响应周期',
        resources: [
          { name: 'How the Internet Works', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/How_does_the_Internet_work' }
        ]
      },
      {
        name: '什么是 HTTP',
        description: 'HTTP 方法、状态码、Headers、Cookies',
        resources: [
          { name: 'HTTP 协议详解', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP' }
        ]
      },
      {
        name: '域名与 DNS',
        description: 'DNS 解析过程、域名系统、DNS 记录类型',
      },
      {
        name: '什么是托管',
        description: '静态托管、服务器托管、云服务',
      },
      {
        name: '浏览器工作原理',
        description: '渲染引擎、JavaScript 引擎、关键渲染路径',
        resources: [
          { name: '浏览器工作原理', url: 'https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work' }
        ]
      }
    ]
  },
  {
    title: 'HTML',
    description: '网页结构的基础',
    topics: [
      {
        name: 'HTML 基础',
        description: '标签、属性、文档结构、语义化标签',
        resources: [
          { name: 'MDN HTML 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTML' }
        ]
      },
      {
        name: '表单与验证',
        description: '表单元素、输入类型、表单验证',
      },
      {
        name: 'SEO 基础',
        description: 'Meta 标签、结构化数据、可访问性',
      },
      {
        name: '最佳实践',
        description: '语义化、可访问性、性能优化',
      }
    ]
  },
  {
    title: 'CSS',
    description: '样式与布局',
    topics: [
      {
        name: 'CSS 基础',
        description: '选择器、盒模型、层叠与继承',
        resources: [
          { name: 'MDN CSS 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/CSS' }
        ]
      },
      {
        name: '布局',
        description: 'Flexbox、Grid、定位、浮动',
      },
      {
        name: '响应式设计',
        description: 'Media Queries、移动优先、视口单位',
      },
      {
        name: 'CSS 预处理器',
        description: 'Sass、Less、PostCSS',
      },
      {
        name: 'CSS 框架',
        description: 'Tailwind CSS、Bootstrap、UnoCSS',
        resources: [
          { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' }
        ]
      },
      {
        name: 'CSS-in-JS',
        description: 'Styled Components、Emotion、CSS Modules',
      }
    ]
  },
  {
    title: 'JavaScript 基础',
    description: '编程语言核心',
    topics: [
      {
        name: '语法与基础',
        description: '变量、数据类型、运算符、控制流程',
        resources: [
          { name: 'MDN JavaScript 教程', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript' }
        ]
      },
      {
        name: '函数与作用域',
        description: '函数声明、箭头函数、闭包、this 绑定',
      },
      {
        name: '对象与原型',
        description: '对象字面量、原型链、继承、类',
      },
      {
        name: 'ES6+ 特性',
        description: 'let/const、解构、模板字符串、展开运算符、模块',
      },
      {
        name: '异步编程',
        description: 'Callbacks、Promises、async/await',
      },
      {
        name: 'DOM 操作',
        description: '元素选择、事件监听、DOM 操作',
      },
      {
        name: 'Fetch API / Ajax',
        description: 'HTTP 请求、Promise、错误处理',
      }
    ]
  },
  {
    title: '版本控制',
    description: '代码版本管理',
    topics: [
      {
        name: 'Git 基础',
        description: 'commit、branch、merge、rebase',
        resources: [
          { name: 'Git 官方文档', url: 'https://git-scm.com/doc' }
        ]
      },
      {
        name: 'GitHub',
        description: 'Pull Request、Issues、Actions、Pages',
        resources: [
          { name: 'GitHub 文档', url: 'https://docs.github.com/' }
        ]
      },
      {
        name: 'GitLab',
        description: 'CI/CD、Merge Request、Registry',
      }
    ]
  },
  {
    title: '包管理器',
    description: '依赖管理工具',
    topics: [
      {
        name: 'npm',
        description: 'package.json、scripts、发布包',
        resources: [
          { name: 'npm 文档', url: 'https://docs.npmjs.com/' }
        ]
      },
      {
        name: 'yarn',
        description: 'Yarn Classic、Yarn Berry、工作区',
      },
      {
        name: 'pnpm',
        description: '节省磁盘空间、Monorepo 支持',
        resources: [
          { name: 'pnpm 文档', url: 'https://pnpm.io/' }
        ]
      },
      {
        name: 'Bun',
        description: '一体化工具、极速性能',
        resources: [
          { name: 'Bun 官网', url: 'https://bun.sh/' }
        ]
      }
    ]
  },
  {
    title: '前端框架',
    description: '现代化前端开发',
    topics: [
      {
        name: 'React',
        description: 'JSX、组件、Hooks、状态管理',
        resources: [
          { name: 'React 官方文档', url: 'https://react.dev/' }
        ]
      },
      {
        name: 'Vue.js',
        description: '响应式系统、组件、Composition API',
        resources: [
          { name: 'Vue 官方文档', url: 'https://cn.vuejs.org/' }
        ]
      },
      {
        name: 'Angular',
        description: 'TypeScript、依赖注入、RxJS',
        resources: [
          { name: 'Angular 文档', url: 'https://angular.io/' }
        ]
      },
      {
        name: 'Svelte',
        description: '编译时框架、无虚拟 DOM',
        resources: [
          { name: 'Svelte 文档', url: 'https://svelte.dev/' }
        ]
      },
      {
        name: 'Solid.js',
        description: '细粒度响应式、高性能',
        resources: [
          { name: 'Solid.js 文档', url: 'https://www.solidjs.com/' }
        ]
      }
    ]
  },
  {
    title: 'TypeScript',
    description: '类型安全的 JavaScript',
    topics: [
      {
        name: 'TypeScript 基础',
        description: '类型系统、接口、泛型',
        resources: [
          { name: 'TypeScript 官方文档', url: 'https://www.typescriptlang.org/' }
        ]
      },
      {
        name: '高级类型',
        description: '联合类型、交叉类型、类型守卫、工具类型',
      },
      {
        name: '配置与最佳实践',
        description: 'tsconfig.json、严格模式、类型声明文件',
      }
    ]
  },
  {
    title: '构建工具',
    description: '模块打包与构建',
    topics: [
      {
        name: 'Vite',
        description: '极速开发服务器、ESBuild、Rollup',
        resources: [
          { name: 'Vite 官方文档', url: 'https://vitejs.dev/' }
        ]
      },
      {
        name: 'esbuild',
        description: 'Go 编写、超快速度',
      },
      {
        name: 'Rollup',
        description: 'ES 模块打包、Tree Shaking',
      },
      {
        name: 'Webpack',
        description: '配置化、插件系统、代码分割',
        resources: [
          { name: 'Webpack 文档', url: 'https://webpack.js.org/' }
        ]
      },
      {
        name: 'Turbopack',
        description: 'Rust 编写、增量计算',
      }
    ]
  },
  {
    title: '代码质量',
    description: 'Linters 与 Formatters',
    topics: [
      {
        name: 'ESLint',
        description: 'JavaScript 代码检查、规则配置',
        resources: [
          { name: 'ESLint 文档', url: 'https://eslint.org/' }
        ]
      },
      {
        name: 'Prettier',
        description: '代码格式化、统一风格',
        resources: [
          { name: 'Prettier 文档', url: 'https://prettier.io/' }
        ]
      },
      {
        name: 'Biome',
        description: '一体化工具、Rust 编写',
        resources: [
          { name: 'Biome 文档', url: 'https://biomejs.dev/' }
        ]
      },
      {
        name: 'Husky & lint-staged',
        description: 'Git hooks、提交前检查',
      }
    ]
  },
  {
    title: '测试',
    description: '保证代码质量',
    topics: [
      {
        name: 'Vitest',
        description: 'Vite 原生、单元测试',
        resources: [
          { name: 'Vitest 文档', url: 'https://vitest.dev/' }
        ]
      },
      {
        name: 'Jest',
        description: 'React 测试、快照测试',
      },
      {
        name: 'Testing Library',
        description: '用户行为测试、组件测试',
      },
      {
        name: 'Playwright',
        description: 'E2E 测试、跨浏览器',
        resources: [
          { name: 'Playwright 文档', url: 'https://playwright.dev/' }
        ]
      },
      {
        name: 'Cypress',
        description: 'E2E 测试、时间旅行调试',
      }
    ]
  },
  {
    title: '状态管理',
    description: '应用状态管理',
    topics: [
      {
        name: 'Redux / Redux Toolkit',
        description: '可预测的状态容器、中间件',
        resources: [
          { name: 'Redux 文档', url: 'https://redux.js.org/' }
        ]
      },
      {
        name: 'Zustand',
        description: '轻量级、简单 API',
      },
      {
        name: 'MobX',
        description: '响应式状态管理',
      },
      {
        name: 'Pinia',
        description: 'Vue 3 状态管理',
        resources: [
          { name: 'Pinia 文档', url: 'https://pinia.vuejs.org/' }
        ]
      },
      {
        name: 'Jotai / Recoil',
        description: '原子化状态管理',
      }
    ]
  },
  {
    title: 'React 生态',
    description: 'React 全栈框架',
    topics: [
      {
        name: 'Next.js',
        description: 'SSR、SSG、API Routes、App Router',
        resources: [
          { name: 'Next.js 文档', url: 'https://nextjs.org/' }
        ]
      },
      {
        name: 'Remix',
        description: '全栈框架、嵌套路由、数据加载',
      },
      {
        name: 'React Router',
        description: '客户端路由、嵌套路由',
      },
      {
        name: 'TanStack Query',
        description: '数据获取、缓存、同步',
      }
    ]
  },
  {
    title: 'Vue 生态',
    description: 'Vue 全栈框架',
    topics: [
      {
        name: 'Nuxt.js',
        description: 'SSR、SSG、自动导入、模块系统',
        resources: [
          { name: 'Nuxt 文档', url: 'https://nuxt.com/' }
        ]
      },
      {
        name: 'Vue Router',
        description: '官方路由、导航守卫',
      },
      {
        name: 'VueUse',
        description: 'Composition API 工具集',
      }
    ]
  },
  {
    title: 'SSR 与 SSG',
    description: '渲染策略',
    topics: [
      {
        name: '服务端渲染 (SSR)',
        description: 'SEO 友好、首屏加载优化',
      },
      {
        name: '静态站点生成 (SSG)',
        description: '构建时生成、CDN 友好',
      },
      {
        name: '增量静态再生 (ISR)',
        description: 'Next.js ISR、按需重新生成',
      },
      {
        name: 'Astro',
        description: '群岛架构、零 JS',
        resources: [
          { name: 'Astro 文档', url: 'https://astro.build/' }
        ]
      }
    ]
  },
  {
    title: 'Web APIs',
    description: '现代浏览器 API',
    topics: [
      {
        name: 'Storage APIs',
        description: 'localStorage、sessionStorage、IndexedDB',
      },
      {
        name: 'Web Workers',
        description: '多线程处理、后台任务',
      },
      {
        name: 'Service Workers',
        description: 'PWA、离线缓存、推送通知',
      },
      {
        name: 'WebSocket',
        description: '实时通信、双向连接',
      },
      {
        name: 'Canvas / WebGL',
        description: '图形绘制、3D 渲染',
      },
      {
        name: 'Geolocation',
        description: '地理位置、GPS',
      }
    ]
  },
  {
    title: 'Web 安全',
    description: '安全最佳实践',
    topics: [
      {
        name: 'HTTPS',
        description: 'SSL/TLS、证书、加密',
      },
      {
        name: 'CORS',
        description: '跨域资源共享、预检请求',
        resources: [
          { name: 'CORS 详解', url: 'https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS' }
        ]
      },
      {
        name: 'CSP',
        description: '内容安全策略、XSS 防护',
      },
      {
        name: 'OWASP Top 10',
        description: 'XSS、CSRF、SQL 注入',
        resources: [
          { name: 'OWASP', url: 'https://owasp.org/' }
        ]
      }
    ]
  },
  {
    title: '认证授权',
    description: '身份验证策略',
    topics: [
      {
        name: 'JWT',
        description: 'JSON Web Tokens、无状态认证',
      },
      {
        name: 'OAuth 2.0',
        description: '第三方登录、授权码流程',
      },
      {
        name: 'Session & Cookies',
        description: '会话管理、安全设置',
      },
      {
        name: 'NextAuth.js',
        description: 'Next.js 认证解决方案',
        resources: [
          { name: 'NextAuth.js', url: 'https://next-auth.js.org/' }
        ]
      }
    ]
  },
  {
    title: '性能优化',
    description: '提升用户体验',
    topics: [
      {
        name: 'Core Web Vitals',
        description: 'LCP、FID、CLS',
        resources: [
          { name: 'Web Vitals', url: 'https://web.dev/vitals/' }
        ]
      },
      {
        name: 'Lighthouse',
        description: '性能审计、优化建议',
      },
      {
        name: 'DevTools 使用',
        description: 'Performance 面板、Network 分析',
      },
      {
        name: '代码分割',
        description: 'Dynamic Import、懒加载',
      },
      {
        name: '图片优化',
        description: 'WebP、响应式图片、懒加载',
      },
      {
        name: 'Cache 策略',
        description: 'Cache-Control、ETag、Service Worker 缓存',
      }
    ]
  },
  {
    title: '可访问性',
    description: 'Web 可访问性 (A11y)',
    topics: [
      {
        name: 'ARIA',
        description: 'ARIA 属性、角色、状态',
        resources: [
          { name: 'ARIA 文档', url: 'https://developer.mozilla.org/zh-CN/docs/Web/Accessibility/ARIA' }
        ]
      },
      {
        name: '键盘导航',
        description: 'Tab 顺序、焦点管理',
      },
      {
        name: '屏幕阅读器',
        description: '语义化、标签正确使用',
      },
      {
        name: 'WCAG 标准',
        description: 'Web 内容可访问性指南',
      }
    ]
  },
  {
    title: 'UI 组件库',
    description: '组件库与设计系统',
    topics: [
      {
        name: 'Ant Design',
        description: '企业级 UI 组件库',
        resources: [
          { name: 'Ant Design', url: 'https://ant.design/' }
        ]
      },
      {
        name: 'Material UI',
        description: 'Material Design 实现',
      },
      {
        name: 'Chakra UI',
        description: '可访问性优先、主题定制',
      },
      {
        name: 'shadcn/ui',
        description: '可复制组件、Radix UI',
        resources: [
          { name: 'shadcn/ui', url: 'https://ui.shadcn.com/' }
        ]
      },
      {
        name: 'Headless UI',
        description: '无样式组件、完全可定制',
      }
    ]
  },
  {
    title: '部署',
    description: '应用部署平台',
    topics: [
      {
        name: 'Vercel',
        description: 'Next.js 官方、自动部署',
        resources: [
          { name: 'Vercel', url: 'https://vercel.com/' }
        ]
      },
      {
        name: 'Netlify',
        description: 'Jamstack 部署、Serverless Functions',
      },
      {
        name: 'Cloudflare Pages',
        description: '全球 CDN、边缘计算',
      },
      {
        name: 'GitHub Pages',
        description: '免费静态站点托管',
      },
      {
        name: 'Railway / Render',
        description: '全栈应用部署',
      },
      {
        name: 'Docker',
        description: '容器化部署',
      }
    ]
  },
  {
    title: 'CI/CD',
    description: '持续集成与部署',
    topics: [
      {
        name: 'GitHub Actions',
        description: '自动化工作流、部署流水线',
        resources: [
          { name: 'GitHub Actions', url: 'https://docs.github.com/actions' }
        ]
      },
      {
        name: 'GitLab CI',
        description: 'Pipeline、Runner',
      },
      {
        name: 'Jenkins',
        description: '开源自动化服务器',
      }
    ]
  },
  {
    title: '移动端开发',
    description: '跨平台移动应用',
    topics: [
      {
        name: 'React Native',
        description: '原生移动应用、跨平台',
        resources: [
          { name: 'React Native', url: 'https://reactnative.dev/' }
        ]
      },
      {
        name: 'Expo',
        description: 'React Native 工具链',
      },
      {
        name: 'Ionic',
        description: '混合应用框架',
      },
      {
        name: 'Flutter',
        description: 'Dart 语言、高性能',
      }
    ]
  },
  {
    title: '桌面应用',
    description: '跨平台桌面应用',
    topics: [
      {
        name: 'Electron',
        description: 'Chromium + Node.js',
        resources: [
          { name: 'Electron', url: 'https://www.electronjs.org/' }
        ]
      },
      {
        name: 'Tauri',
        description: 'Rust + WebView、体积小',
        resources: [
          { name: 'Tauri', url: 'https://tauri.app/' }
        ]
      }
    ]
  }
];
</script>

<Roadmap :stages="roadmapData" />


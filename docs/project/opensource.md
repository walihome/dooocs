---
title: 开源精选
sidebar: false
single: true
order: 4
---

<script setup>
const projectsData = [
  {
    title: '开源精选',
    description: '精选优质开源项目，值得学习和参考',
    icon: '⭐',
    projects: [
      {
        name: 'Vue.js',
        description: '渐进式 JavaScript 框架，易学易用，性能出色。拥有完善的生态系统和活跃的社区。',
        url: 'https://github.com/vuejs/core',
        github: 'https://github.com/vuejs/core',
        demo: 'https://vuejs.org/',
        language: 'TypeScript',
        stars: '45.2k',
        tags: ['Framework', 'Reactive', 'Component', 'SFC']
      },
      {
        name: 'React',
        description: 'Facebook 开发的用户界面库，组件化开发，虚拟 DOM，单向数据流。',
        url: 'https://github.com/facebook/react',
        github: 'https://github.com/facebook/react',
        demo: 'https://react.dev/',
        language: 'JavaScript',
        stars: '223k',
        tags: ['Framework', 'Hooks', 'JSX', 'Virtual DOM']
      },
      {
        name: 'Spring Boot',
        description: 'Java 企业级应用快速开发框架，简化配置，开箱即用，生产级特性。',
        url: 'https://github.com/spring-projects/spring-boot',
        github: 'https://github.com/spring-projects/spring-boot',
        demo: 'https://spring.io/projects/spring-boot',
        language: 'Java',
        stars: '73.5k',
        tags: ['Framework', 'Microservices', 'REST', 'Enterprise']
      },
      {
        name: 'Node.js',
        description: '基于 Chrome V8 引擎的 JavaScript 运行时，高性能、事件驱动、非阻塞 I/O。',
        url: 'https://github.com/nodejs/node',
        github: 'https://github.com/nodejs/node',
        demo: 'https://nodejs.org/',
        language: 'JavaScript',
        stars: '104k',
        tags: ['Runtime', 'Server-side', 'Event-driven', 'V8']
      },
      {
        name: 'Vite',
        description: '下一代前端构建工具，基于 ESM 的极速开发服务器，Rollup 打包。',
        url: 'https://github.com/vitejs/vite',
        github: 'https://github.com/vitejs/vite',
        demo: 'https://vitejs.dev/',
        language: 'TypeScript',
        stars: '65.8k',
        tags: ['Build Tool', 'ESBuild', 'HMR', 'Fast']
      },
      {
        name: 'Redis',
        description: '高性能键值存储数据库，支持多种数据结构，持久化，主从复制，集群。',
        url: 'https://github.com/redis/redis',
        github: 'https://github.com/redis/redis',
        demo: 'https://redis.io/',
        language: 'C',
        stars: '65.1k',
        tags: ['Database', 'Cache', 'NoSQL', 'In-Memory']
      },
      {
        name: 'Elasticsearch',
        description: '分布式搜索和分析引擎，全文检索，日志分析，数据可视化。',
        url: 'https://github.com/elastic/elasticsearch',
        github: 'https://github.com/elastic/elasticsearch',
        demo: 'https://www.elastic.co/elasticsearch/',
        language: 'Java',
        stars: '68.4k',
        tags: ['Search', 'Analytics', 'Distributed', 'Lucene']
      },
      {
        name: 'MongoDB',
        description: '面向文档的 NoSQL 数据库，灵活的数据模型，水平扩展，高性能。',
        url: 'https://github.com/mongodb/mongo',
        github: 'https://github.com/mongodb/mongo',
        demo: 'https://www.mongodb.com/',
        language: 'C++',
        stars: '25.7k',
        tags: ['Database', 'NoSQL', 'Document', 'Distributed']
      },
      {
        name: 'Docker',
        description: '容器化平台，打包应用及其依赖，轻量级虚拟化，一次构建到处运行。',
        url: 'https://github.com/moby/moby',
        github: 'https://github.com/moby/moby',
        demo: 'https://www.docker.com/',
        language: 'Go',
        stars: '67.9k',
        tags: ['Container', 'DevOps', 'Virtualization', 'CI/CD']
      },
      {
        name: 'Kubernetes',
        description: '容器编排系统，自动化部署、扩展和管理容器化应用。',
        url: 'https://github.com/kubernetes/kubernetes',
        github: 'https://github.com/kubernetes/kubernetes',
        demo: 'https://kubernetes.io/',
        language: 'Go',
        stars: '108k',
        tags: ['Orchestration', 'Cloud Native', 'Container', 'Microservices']
      },
      {
        name: 'TypeScript',
        description: 'JavaScript 的超集，添加了类型系统，更好的工具支持，大型项目必备。',
        url: 'https://github.com/microsoft/TypeScript',
        github: 'https://github.com/microsoft/TypeScript',
        demo: 'https://www.typescriptlang.org/',
        language: 'TypeScript',
        stars: '98.5k',
        tags: ['Language', 'Type System', 'JavaScript', 'Compiler']
      },
      {
        name: 'Next.js',
        description: 'React 全栈框架，服务端渲染，静态生成，API 路由，零配置。',
        url: 'https://github.com/vercel/next.js',
        github: 'https://github.com/vercel/next.js',
        demo: 'https://nextjs.org/',
        language: 'JavaScript',
        stars: '122k',
        tags: ['Framework', 'SSR', 'SSG', 'React', 'Full-stack']
      },
      {
        name: 'TensorFlow',
        description: 'Google 开发的机器学习框架，深度学习，神经网络，支持多平台。',
        url: 'https://github.com/tensorflow/tensorflow',
        github: 'https://github.com/tensorflow/tensorflow',
        demo: 'https://www.tensorflow.org/',
        language: 'Python',
        stars: '183k',
        tags: ['Machine Learning', 'AI', 'Deep Learning', 'Neural Network']
      },
      {
        name: 'PyTorch',
        description: 'Facebook 开发的深度学习框架，动态计算图，Python 优先，易于调试。',
        url: 'https://github.com/pytorch/pytorch',
        github: 'https://github.com/pytorch/pytorch',
        demo: 'https://pytorch.org/',
        language: 'Python',
        stars: '79.3k',
        tags: ['Deep Learning', 'AI', 'Neural Network', 'Python']
      },
      {
        name: 'Nginx',
        description: '高性能 Web 服务器、反向代理、负载均衡器，事件驱动，低内存占用。',
        url: 'https://github.com/nginx/nginx',
        github: 'https://github.com/nginx/nginx',
        demo: 'https://nginx.org/',
        language: 'C',
        stars: '20.1k',
        tags: ['Web Server', 'Reverse Proxy', 'Load Balancer', 'High Performance']
      },
      {
        name: 'PostgreSQL',
        description: '强大的开源关系型数据库，ACID 支持，丰富的数据类型，扩展性强。',
        url: 'https://github.com/postgres/postgres',
        github: 'https://github.com/postgres/postgres',
        demo: 'https://www.postgresql.org/',
        language: 'C',
        stars: '14.8k',
        tags: ['Database', 'SQL', 'Relational', 'ACID']
      },
      {
        name: 'MySQL',
        description: '世界上最流行的开源关系型数据库，高性能，可靠性高，易于使用。',
        url: 'https://github.com/mysql/mysql-server',
        github: 'https://github.com/mysql/mysql-server',
        demo: 'https://www.mysql.com/',
        language: 'C++',
        stars: '10.3k',
        tags: ['Database', 'SQL', 'Relational', 'Oracle']
      },
      {
        name: 'Apache Kafka',
        description: '分布式流处理平台，高吞吐量消息系统，实时数据管道。',
        url: 'https://github.com/apache/kafka',
        github: 'https://github.com/apache/kafka',
        demo: 'https://kafka.apache.org/',
        language: 'Java',
        stars: '27.7k',
        tags: ['Message Queue', 'Stream Processing', 'Distributed', 'Event-driven']
      }
    ]
  }
];
</script>

<Projects :categories="projectsData" />


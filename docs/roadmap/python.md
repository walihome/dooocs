---
title: Python 开发路线图
sidebar: false
single: true
---

<script setup>
const roadmapData = [
  {
    title: 'Python 基础',
    description: '掌握 Python 核心语法',
    topics: [
      {
        name: 'Python 环境搭建',
        description: '安装 Python、pip、虚拟环境管理',
        resources: [
          { name: 'Python 官方文档', url: 'https://docs.python.org/zh-cn/3/' }
        ]
      },
      {
        name: '基础语法',
        description: '变量、数据类型、运算符、控制流',
      },
      {
        name: '函数与模块',
        description: '函数定义、参数传递、模块导入',
      },
      {
        name: '面向对象',
        description: '类、继承、多态、魔法方法',
      }
    ]
  },
  {
    title: 'Python 核心',
    description: '深入学习 Python 特性',
    topics: [
      {
        name: '数据结构',
        description: 'list、tuple、dict、set、collections',
      },
      {
        name: '文件与 IO',
        description: '文件读写、with 语句、序列化',
      },
      {
        name: '异常处理',
        description: 'try-except、自定义异常',
      },
      {
        name: '装饰器与生成器',
        description: '装饰器、迭代器、生成器',
      },
      {
        name: '并发编程',
        description: '多线程、多进程、asyncio',
      }
    ]
  },
  {
    title: 'Web 开发',
    description: 'Python Web 框架',
    topics: [
      {
        name: 'Flask',
        description: '轻量级 Web 框架、路由、模板',
        resources: [
          { name: 'Flask 官方文档', url: 'https://flask.palletsprojects.com/' }
        ]
      },
      {
        name: 'Django',
        description: '全栈 Web 框架、ORM、Admin',
        resources: [
          { name: 'Django 官方文档', url: 'https://www.djangoproject.com/' }
        ]
      },
      {
        name: 'FastAPI',
        description: '现代异步 Web 框架、自动文档',
        resources: [
          { name: 'FastAPI 官方文档', url: 'https://fastapi.tiangolo.com/' }
        ]
      }
    ]
  },
  {
    title: '数据库',
    description: '数据库操作',
    topics: [
      {
        name: 'SQL',
        description: 'MySQL、PostgreSQL',
      },
      {
        name: 'ORM',
        description: 'SQLAlchemy、Django ORM',
      },
      {
        name: 'NoSQL',
        description: 'MongoDB、Redis',
      }
    ]
  },
  {
    title: '数据科学',
    description: '数据分析与机器学习',
    topics: [
      {
        name: 'NumPy',
        description: '数值计算、数组操作',
        resources: [
          { name: 'NumPy 官方文档', url: 'https://numpy.org/' }
        ]
      },
      {
        name: 'Pandas',
        description: '数据分析、DataFrame',
        resources: [
          { name: 'Pandas 官方文档', url: 'https://pandas.pydata.org/' }
        ]
      },
      {
        name: 'Matplotlib / Seaborn',
        description: '数据可视化',
      },
      {
        name: 'Scikit-learn',
        description: '机器学习库',
        resources: [
          { name: 'Scikit-learn 文档', url: 'https://scikit-learn.org/' }
        ]
      }
    ]
  },
  {
    title: '深度学习',
    description: '神经网络与深度学习',
    topics: [
      {
        name: 'PyTorch',
        description: '深度学习框架、张量计算',
        resources: [
          { name: 'PyTorch 官方文档', url: 'https://pytorch.org/' }
        ]
      },
      {
        name: 'TensorFlow',
        description: 'Google 深度学习框架',
        resources: [
          { name: 'TensorFlow 官方文档', url: 'https://www.tensorflow.org/' }
        ]
      }
    ]
  },
  {
    title: '工具与部署',
    description: '开发工具和项目部署',
    topics: [
      {
        name: '测试',
        description: 'pytest、unittest、mock',
      },
      {
        name: '代码质量',
        description: 'pylint、black、mypy',
      },
      {
        name: '部署',
        description: 'Docker、Kubernetes、CI/CD',
      }
    ]
  }
];
</script>

<Roadmap :stages="roadmapData" />


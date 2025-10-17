---
title: 商业级项目
sidebar: false
single: true
order: 5
---

<script setup>
const projectsData = [
  {
    title: '商业级项目',
    description: '可直接用于生产环境的完整商业项目',
    icon: '💼',
    projects: [
      {
        name: '电商系统',
        description: '完整的B2C电商平台，包含商品管理、订单系统、支付对接、物流跟踪、营销活动、数据分析。支持多商户、分销、秒杀等。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '15.3k',
        tags: ['Spring Cloud', 'MySQL', 'Redis', 'RabbitMQ', 'Elasticsearch']
      },
      {
        name: '内容管理系统 CMS',
        description: '灵活的内容管理系统，支持自定义内容模型、多语言、SEO、权限管理、插件扩展。适用于企业官网、新闻门户。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'PHP',
        stars: '9.8k',
        tags: ['Laravel', 'Vue3', 'MySQL', 'REST API', 'Multi-language']
      },
      {
        name: '在线教育平台',
        description: '完整的在线教育系统，包含视频点播、直播课堂、作业系统、考试测评、学习路径、证书系统。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '7.6k',
        tags: ['Spring Boot', 'FFmpeg', 'WebRTC', 'MySQL', 'MinIO']
      },
      {
        name: '客户关系管理 CRM',
        description: '企业级 CRM 系统，包含客户管理、销售机会、销售漏斗、合同管理、报表分析、工作流引擎。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Python',
        stars: '5.4k',
        tags: ['Django', 'PostgreSQL', 'Celery', 'Docker', 'BI']
      },
      {
        name: '医院管理系统 HIS',
        description: '医院信息管理系统，包含门诊、住院、药房、检验、影像、电子病历、财务结算等完整流程。',
        url: '#',
        github: '#',
        language: 'Java',
        stars: '4.1k',
        tags: ['Spring Boot', 'Oracle', 'Shiro', 'Quartz', 'HL7']
      },
      {
        name: '进销存系统',
        description: '完整的 ERP 系统，包含采购、销售、库存、财务、报表。支持多仓库、批次管理、序列号追溯。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Go',
        stars: '6.7k',
        tags: ['Go', 'PostgreSQL', 'gRPC', 'Kubernetes', 'Microservices']
      },
      {
        name: '人力资源管理系统',
        description: 'HR 管理系统，包含招聘、入职、考勤、薪资、绩效、培训、离职等全生命周期管理。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '3.8k',
        tags: ['Spring Boot', 'MySQL', 'Flowable', 'Vue3', 'Excel']
      },
      {
        name: 'OA 办公自动化',
        description: '企业 OA 系统，包含审批流程、公文管理、会议管理、考勤打卡、通讯录、企业网盘。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '5.2k',
        tags: ['Spring Boot', 'Activiti', 'MySQL', 'WebSocket', 'MinIO']
      },
      {
        name: '智慧物业管理系统',
        description: '小区物业管理平台，包含业主管理、缴费管理、报修服务、停车管理、访客登记、智能门禁。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '2.9k',
        tags: ['Spring Cloud', 'MySQL', 'Redis', 'Mini Program', 'IoT']
      },
      {
        name: '仓储管理系统 WMS',
        description: '仓库管理系统，包含入库、出库、盘点、库位管理、批次追溯、RF 手持终端。',
        url: '#',
        github: '#',
        language: 'C#',
        stars: '3.5k',
        tags: ['.NET Core', 'SQL Server', 'Barcode', 'RFID']
      },
      {
        name: '外卖配送平台',
        description: '类似美团外卖的配送平台，包含商家端、用户端、骑手端、调度系统、支付系统。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '4.6k',
        tags: ['Spring Cloud', 'MongoDB', 'GIS', 'Real-time', 'Mini Program']
      },
      {
        name: '酒店管理系统 PMS',
        description: '酒店前台管理系统，包含预订、入住、退房、房态管理、会员管理、财务结算。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '2.3k',
        tags: ['Spring Boot', 'MySQL', 'Channel Manager', 'POS']
      },
      {
        name: '供应链管理系统 SCM',
        description: '供应链协同管理平台，包含供应商管理、采购协同、订单追踪、质量管理、对账结算。',
        url: '#',
        github: '#',
        language: 'Java',
        stars: '3.7k',
        tags: ['Spring Cloud', 'MySQL', 'Elasticsearch', 'BI', 'EDI']
      },
      {
        name: '智能停车场系统',
        description: '停车场管理系统，包含车牌识别、车位导航、无感支付、月卡管理、数据分析。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Python',
        stars: '2.1k',
        tags: ['Python', 'OpenCV', 'Deep Learning', 'IoT', 'Payment']
      },
      {
        name: '连锁门店管理系统',
        description: '连锁店铺管理平台，包含总部管理、门店管理、会员系统、收银系统、库存调拨、数据分析。',
        url: '#',
        github: '#',
        demo: '#',
        language: 'Java',
        stars: '4.9k',
        tags: ['Spring Boot', 'MySQL', 'Redis', 'Multi-tenant', 'POS']
      }
    ]
  }
];
</script>

<Projects :categories="projectsData" />


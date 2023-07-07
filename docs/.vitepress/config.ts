import { createContentLoader, defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'script',
      {
        async: "true",
        src: 'https://www.googletagmanager.com/gtag/js?id=G-659VJ2QMN0',
      },
    ],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-659VJ2QMN0');",
    ],
    ['link', {rel: 'icon', href: '/logo.png'}],
    [
      'script',
      {
        async: "true",
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9054903983954158',
        crossorigin: 'anonymous'
      }
    ]
  ],

  title: "Dooocs",
  description: "让进步发生！",
  
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/.html' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    
    sidebar: {
      '/ai/': [
        {
          text: 'AI学习资料',
          items: [
            { text: '阅读须知', link: '/ai/README.html' },
          ]
        }
      ],
      '/chatgpt/': [
        {
          text: 'Chatgpt使用指导',
          items: [
            { text: '阅读须知', link: '/chatgpt/README.html' },
          ]
        }
      ],
      '/ios/': [
        {
          text: 'IOS开发文档',
          items: [
            { text: '阅读须知', link: '/ios/README.html' },
            
          ]
        }
      ],
      '/java/': [
        {
          text: 'Java学习手册',
          items: [
            { text: '阅读须知', link: '/java/README.html' },
            { text: '概览', link: '/java/overview.html' },
            { text: '基础知识', collapsed: true, items: [
              { text: '基础语法', link: '/java/basic/basic_grammer.html' },
              { text: '基本数据类型', link: '/java/basic/data_type.html' },
              { text: '基本运算', link: '/java/basic/operate.html' },
              { text: '集合', link: '/java/basic/collection.html' },
              { text: '控制流程', link: '/java/basic/control_flow.html' },
              { text: '方法|函数', link: '/java/basic/method.html' },
              { text: '枚举', link: '/java/basic/enum.html' },
              { text: '接口和类', link: '/java/basic/interface_and_class.html' },
              { text: '面向对象基础', link: '/java/basic/oop.html' },
              { text: '继承和多态', link: '/java/basic/inheritance_and_polymorphism.html' },
              { text: '泛型', link: '/java/basic/generic.html' },
              { text: '异常', link: '/java/basic/exception.html' },
              { text: '并发', link: '/java/basic/concurrency.html' },
              { text: '反射', link: '/java/basic/reflect.html' },
              { text: '注解', link: '/java/basic/annotation.html' },
              { text: 'SPI', link: '/java/basic/spi.html' },
              { text: '序列化', link: '/java/basic/serializable.html' },
              { text: 'IO', link: '/java/basic/io.html' },
              { text: '语法糖', link: '/java/basic/syntactic_sugar.html' },
              { text: '参考', link: '/java/basic/reference.html' },
            ]},
          ]
        }
      ],
      '/markdown/': [
        {
          text: 'markdown参考手册',
          items: [
            { text: '阅读须知', link: '/markdown/README.html' },
            { text: '基础知识',  collapsed: false, items: [
              { text: '基础语法', link: '/markdown/basic/basic.html' },
              
            ]},
          ]
        }
      ],
      '/mongodb/': [
        {
          text: 'mongoDB参考手册',
          items: [
            { text: '阅读须知', link: '/mongodb/README.html' },
            { text: '快速开始', link: '/mongodb/quickstart.html' },
            { text: '基础知识',  collapsed: false, items: [
              { text: 'mongosh介绍', link: '/mongodb/basic/mongosh.html' },
            ]},
          ]
        }
      ],
    
      '/nginx/': [
        {
          text: 'nginx参考手册',
          items: [
            { text: '阅读须知', link: '/nginx/README.html' },
            { text: '日志',  collapsed: false, items: [
              { text: 'nginx基础日志', link: '/nginx/logs/nginx.html' },
              { text: 'https日志', link: '/nginx/logs/https.html' },
            ]},
          ]
        }
      ],
      '/nodebb/': [
        {
          text: 'nodeBB参考手册',
          items: [
            { text: '阅读须知', link: '/nodebb/README.html' },
            { text: '日志',  collapsed: false, items: [
              { text: 'nodebb基础日志', link: '/nodebb/logs/nodebb.html' },
            ]},
          ]
        }
      ],
      '/odps/': [
        {
          text: 'ODPS参考手册',
          items: [
            { text: '阅读须知', link: '/odps/README.html' },
            { text: '基础知识',  collapsed: true, items: [
              { text: 'SELECT语法', link: '/odps/basic/select.html' },
              { text: '性能优化', link: '/odps/basic/optimize.html' },
              
            ]},
          ]
        }
      ],
      '/work/': [
        {
          text: '工作指南',
          items: [
            { text: '阅读须知', link: '/work/README.html' },
            { text: '办公指引', collapsed: true, 
              items: [
                { text: '电脑软件', link: '/work/guideline/computer_software.html' },
                { text: '团队协作', link: '/work/guideline/team_work.html' },
              ]
            },
            { text: '业务学习', collapsed: true, 
            items: [
              { text: '业务指引', link: '/work/biz/biz_learn.html' },
            ]
          }
          ]
        }
      ],
      '/swift/': [
        {
          text: 'SWIFT学习手册',
          items: [
            { text: '阅读须知', link: '/swift/README.html' },
            { text: '基础知识',  collapsed: true, items: [
              { text: '基础语法', link: '/swift/basic/basic_grammar.html' },
              { text: '基础运算符', link: '/swift/basic/basic_operators.html' },
            ]},
          ]
        }
      ],

    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2022023772号</a>'
    }
  },

  buildEnd: async ({ outDir }) => {
    console.log("outDir: " + outDir)
    const sitemap = new SitemapStream({ hostname: 'https://www.dooocs.com' })
    const pages = await createContentLoader(['*/*.md', '*.md', '*/*/*.md', '*/*/*/*.md']).load()
    console.log("page size:" + pages.length)
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))

    sitemap.pipe(writeStream)
    pages.forEach((page) => sitemap.write(
      page.url
        // Strip `index.html` from URL
        .replace(/index.html$/g, '')
        // Optional: if Markdown files are located in a subfolder
        .replace(/^\/docs/, '')
      ))
    sitemap.end()

    await new Promise((r) => writeStream.on('finish', r))
  },
  
})

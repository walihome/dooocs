import { createContentLoader, defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { java, swift, python, ios } from './config_java'

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
      { text: '解惑机器人', link: 'https://chatbot.weixin.qq.com/webapp/oqZiTntQCQC6wbCGGCKWod8KybXWNF?robotName=%E5%B0%8F%E7%BD%97' }
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
      '/ios/': ios,
      '/java/': java,
      '/swift/': swift,
      '/python/': python,
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
                { text: '谷歌浏览器插件', link: '/work/guideline/chrome_extension.html' },
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
      
      
      '/git/': [
        {
          text: 'Git学习手册',
          items: [
            { text: '阅读须知', link: '/git/README.html' },
            { text: '快速开始', link: '/git/quick_start.html' },
            { text: '基础知识',  collapsed: true, items: [
              { text: '基础语法', link: '/git/basic/basic.html' },
              
            ]},
          ]
        }
      ],
      '/maven/': [
        {
          text: 'Maven学习手册',
          items: [
            { text: '阅读须知', link: '/maven/README.html' },
            { text: '快速开始', link: '/maven/quick_start.html' },
            { text: '基础知识',  collapsed: true, items: [
              { text: '基础语法', link: '/maven/basic/basic.html' },
              
            ]},
          ]
        }
      ],
      '/seo/': [
        {
          text: 'SEO学习手册',
          items: [
            { text: '阅读须知', link: '/seo/README.html' },
            { text: '快速开始', link: '/seo/quick_start.html' },
            { text: '基础知识',  collapsed: true, items: [
              { text: '基础语法', link: '/seo/basic/basic.html' },
              
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

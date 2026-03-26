import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { SitemapStream } from 'sitemap'
import { createWriteStream, existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  title: "夏斑文档",
  description: "极简编程 - 提供Python、Java、JavaScript等编程语言教程、速记表、项目实战和学习路线图，让编程学习变得简单高效。适合初学者入门和进阶开发者参考。",
  
  lang: 'zh-CN',
  ignoreDeadLinks: true,
  base: '/', 
  // 关闭 cleanUrls，保留 .html 后缀
  cleanUrls: false,
  
  // 启用最近更新时间
  lastUpdated: true,

  head: [
    // 核心 SEO Meta 标签
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'keywords', content: '编程教程,Python教程,Java教程,JavaScript教程,编程入门,编程速记表,编程项目,学习路线,极简编程' }],
    
    // Open Graph
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: '极简编程' }],
    ['meta', { property: 'og:image', content: 'https://www.dooocs.com/logo.png' }],
    
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary' }],
    
    // Favicon
    ['link', { rel: 'icon', href: '/logo.png' }],
    
    // Google Analytics
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
    
    // Google AdSense
    [
      'script',
      {
        async: "true",
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9054903983954158',
        crossorigin: 'anonymous'
      }
    ]
  ],

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: '幸福小测验', link: '/wellbeing' },
      { text: '关于', link: '/about' },
      { text: '聊一聊', link: 'https://chatbot.weixin.qq.com/webapp/oqZiTntQCQC6wbCGGCKWod8KybXWNF?robotName=%E5%B0%8F%E7%BD%97' }
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/walihome/dooocs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License. | <a href="/about">关于我们</a> · <a href="/contact">联系我们</a> · <a href="/privacy">隐私政策</a> · <a href="/terms">服务条款</a>',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2022023772号</a>'
    }
  },

  buildEnd: async ({ pages, outDir }) => {
    if (pages.length === 0) {
      console.warn('No pages found for sitemap generation');
      return;
    }
    
    const sitemap = new SitemapStream({ hostname: 'https://www.dooocs.com' })
    const writeStream = createWriteStream(resolve(outDir, 'sitemap.xml'))
    sitemap.pipe(writeStream)
  
    pages.forEach((page) => {
      const pagePath = resolve(__dirname, '..', page)
      if (existsSync(pagePath)) {
        const content = readFileSync(pagePath, 'utf-8')
        const contentWithoutFrontmatter = content.replace(/^---\n[\s\S]*?\n---\n?/, '').trim()
        
        if (!contentWithoutFrontmatter) {
          return
        }
      }
      
      let url = page.replace(/^\//, '').replace(/\.md$/, '')
      
      if (url === 'index' || url === '') {
        url = 'index.html'
      } else if (url.endsWith('/index')) {
        url = url + '.html'
      } else {
        url = url + '.html'
      }
      
      const priority = url === 'index.html' ? 1.0 : 0.8
      
      sitemap.write({
        url: url,
        changefreq: 'weekly',
        priority: priority
      })
    })
  
    sitemap.end()
  
    await new Promise<void>((resolve) => writeStream.on('finish', () => resolve()))
    console.log('Sitemap generated successfully')
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },

  markdown: {
    config: (md) => {
      const defaultRender = md.render;
      md.render = function (src, env) {
        console.log('Rendering file:', env.path);
        if (env.path.endsWith('tutorial/index.md')) {
          console.log('Content of tutorial/index.md:', src);
        }
        return defaultRender.call(this, src, env);
      }
    }
  },

  async transformPageData(pageData) {
    if (pageData.relativePath === 'tutorial/index.md') {
      const filePath = resolve(__dirname, '../tutorial/index.md');
      if (!existsSync(filePath)) {
        console.error('tutorial/index.md does not exist!');
      } else {
        console.log('tutorial/index.md exists and its content is:');
        console.log(readFileSync(filePath, 'utf-8'));
      }
    }
    
    // 处理 single: true 的页面
    if (pageData.frontmatter?.single === true) {
      pageData.frontmatter.pageClass = 'single-page';
    }
    
    return pageData;
  },

  transformHead({ pageData }) {
    const head: any[] = []
    const siteUrl = 'https://www.dooocs.com'
    
    // Canonical URL
    let canonicalUrl = `${siteUrl}/${pageData.relativePath}`
      .replace(/index\.md$/, '')
      .replace(/\.md$/, '.html')
    
    head.push(['link', { rel: 'canonical', href: canonicalUrl }])
    
    // 页面标题
    const ogTitle = pageData.frontmatter.title || pageData.title || '极简编程'
    
    // 页面描述：优先使用 frontmatter.description，其次用 VitePress 的 pageData.description
    let ogDescription = pageData.frontmatter.description || pageData.description
    
    // 如果仍然没有，根据页面类型生成
    if (!ogDescription) {
      const path = pageData.relativePath
      if (path.includes('tutorial/')) {
        ogDescription = `${ogTitle} - 编程教程，包含基础语法、示例代码和练习题`
      } else if (path.includes('cheatsheet/')) {
        ogDescription = `${ogTitle} - 快速参考速记表`
      } else if (path.includes('project/')) {
        ogDescription = `${ogTitle} - 项目实战`
      } else {
        ogDescription = '极简编程 - 提供编程语言教程、速记表、项目实战和学习路线图'
      }
    }
    
    head.push(['meta', { property: 'og:url', content: canonicalUrl }])
    head.push(['meta', { property: 'og:title', content: ogTitle }])
    head.push(['meta', { property: 'og:description', content: ogDescription }])
    
    // 首页添加简单的结构化数据
    if (pageData.relativePath === 'index.md') {
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: '极简编程',
        url: siteUrl,
        description: ogDescription
      }
      head.push([
        'script',
        { type: 'application/ld+json' },
        JSON.stringify(jsonLd)
      ])
    }
    
    return head
  },

  vite: {
    build: {
      sourcemap: false,
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return
          warn(warning)
        },
        output: {
          sourcemapExcludeSources: true,
          sourcemapPathTransform: (relativeSourcePath, sourcemapPath) => {
            if (relativeSourcePath.includes('theme') || relativeSourcePath.includes('framework')) {
              return relativeSourcePath
            }
            return ''
          }
        }
      }
    },
    optimizeDeps: {
      exclude: ['vitepress']
    },
    logLevel: 'info',
  }
})

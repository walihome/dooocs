import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { SitemapStream } from 'sitemap'
import { createWriteStream, existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  title: "极简编程",
  description: "编程如此简单！",
  
  ignoreDeadLinks: true,
  base: '/', 
  // 关闭 cleanUrls，保留 .html 后缀
  cleanUrls: false,
  
  // 启用最近更新时间
  lastUpdated: true,

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
    ['link', { rel: 'stylesheet', href: '/custom.css' }],
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
      { text: '提交需求', link: 'https://chatbot.weixin.qq.com/webapp/oqZiTntQCQC6wbCGGCKWod8KybXWNF?robotName=%E5%B0%8F%E7%BD%97' }
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
      message: 'Released under the MIT License.',
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
      // 移除开头的斜杠和 .md 扩展名
      let url = page.replace(/^\//, '').replace(/\.md$/, '')
      
      // 处理 index 文件：tutorial/index -> tutorial/index.html
      if (url === 'index' || url === '') {
        url = 'index.html'
      } else if (url.endsWith('/index')) {
        // tutorial/index -> tutorial/index.html
        url = url + '.html'
      } else {
        // tutorial/c/beginner/setup -> tutorial/c/beginner/setup.html
        url = url + '.html'
      }
      
      sitemap.write({
        url: url,
        changefreq: 'weekly',
        priority: url === 'index.html' ? 1.0 : 0.8
      })
      
      console.log('Added to sitemap:', url)
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

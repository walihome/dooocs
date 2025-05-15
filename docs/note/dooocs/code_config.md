---
title: D站文档配置代码解读
order: 3
head:
  - - meta
    - name: description
      content: D站代码配置解读
  - - meta
    - name: keywords
      content: D站 代码 配置
---

# 配置文件解读

```js
import { defineConfig } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
import { sidebar } from './sidebar'
import fs from 'fs'

export default defineConfig({

  title: "dooocs",
  description: "build your dream, duild your life",
  
  ignoreDeadLinks: true, // 忽略死链接警告

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

  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: 'https://www.dooocs.com' },
      { text: '教程', link: '/tutorial/' },
      { text: '解惑机器人', link: 'https://chatbot.weixin.qq.com/webapp/oqZiTntQCQC6wbCGGCKWod8KybXWNF?robotName=%E5%B0%8F%E7%BD%97' }
    ],
    // 启用最近更新时间
    lastUpdated: 'Last Updated', // 显示的文本
    sidebar: sidebar,

    editLink: {
      pattern: 'https://github.com/walihome/dooocs/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2022023772号</a>'
    }
  },

  // 确保 tutorial/index.md 被识别为 /tutorial/ 路由
  rewrites: {
    // 'tutorial/index.md': 'tutorial/index.html',
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
      sitemap.write({
        url: page.replace(/^\//, ''),
        changefreq: 'weekly'
      })
    })
  
    sitemap.end()
  
    await new Promise((r) => writeStream.on('finish', r))
    console.log('Sitemap generated successfully')
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  },

  // 添加这个钩子来处理 Markdown 文件
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

  // 添加这个钩子来检查文件是否存在
  async transformPageData(pageData) {
    if (pageData.relativePath === 'tutorial/index.md') {
      const filePath = resolve(__dirname, '../tutorial/index.md');
      if (!fs.existsSync(filePath)) {
        console.error('tutorial/index.md does not exist!');
      } else {
        console.log('tutorial/index.md exists and its content is:');
        console.log(fs.readFileSync(filePath, 'utf-8'));
      }
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
```

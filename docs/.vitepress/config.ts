import { defineConfig } from 'vitepress'
import { sidebar } from './sidebar'
import { SitemapStream } from 'sitemap'
import { createWriteStream, existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  title: "夏斑文档",
  description: "认真生活，快乐工作，早点下班～",
  
  ignoreDeadLinks: true,
  base: '/', 
  
  // 启用最近更新时间
  lastUpdated: true,

  // 暂时移除所有 head 配置，只保留基本图标
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
    // 其他 head 标签...
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
    // 在主题配置中也启用最近更新时间
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    sidebar: sidebar,
    editLink: {
      pattern: 'https://github.com/walihome/dooocs/tree/main/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: '浙ICP备2022023772号'
    }
  },

  // 暂时移除复杂的钩子配置
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
      if (!existsSync(filePath)) {
        console.error('tutorial/index.md does not exist!');
      } else {
        console.log('tutorial/index.md exists and its content is:');
        console.log(readFileSync(filePath, 'utf-8'));
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

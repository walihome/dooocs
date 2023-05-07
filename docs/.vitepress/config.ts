import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Do\u25CF\u25CFcs",
  description: "如有本之泉，不舍昼夜，盈科而后进，放乎四海",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/ai/': [
        {
          text: 'AI学习资料',
          items: [
            { text: '阅读须知', link: '/ai/README' },
          ]
        }
      ],
      '/java/': [
        {
          text: 'Java学习教程',
          items: [
            { text: '阅读须知', link: '/java/README' },
          ]
        }
      ],
      '/html/': [
        {
          text: 'HTML学习资料',
          items: [
            { text: '阅读须知', link: '/html/README' },
          ]
        }
      ],
      '/ios/': [
        {
          text: 'IOS开发文档',
          items: [
            { text: '阅读须知', link: '/ios/README' },
          ]
        }
      ],
      '/chatgpt/': [
        {
          text: 'Chatgpt使用指导',
          items: [
            { text: '阅读须知', link: '/chatgpt/README' },
          ]
        }
      ],

    }
  }
})

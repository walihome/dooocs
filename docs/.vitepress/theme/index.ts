import DefaultTheme from 'vitepress/theme'
import Cheatsheet from './cheatsheet.vue'
import HomePage from './HomePage.vue'
import Roadmap from './roadmap.vue'
import Projects from './projects.vue'
import Layout from './Layout.vue'
import './custom.css'
export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('Cheatsheet', Cheatsheet)
    app.component('HomePage', HomePage)
    app.component('Roadmap', Roadmap)
    app.component('Projects', Projects)
  }
}

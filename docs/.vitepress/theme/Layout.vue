<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { frontmatter } = useData()

const pageClass = computed(() => {
  const classes = []
  if (frontmatter.value.single) classes.push('single-page')
  if (frontmatter.value.isHomePage) classes.push('home-page-layout')
  return classes.join(' ')
})
</script>

<template>
  <Layout :class="pageClass" />
</template>

<style>
/* 针对 single: true 的页面隐藏侧边栏并扩展内容宽度 */
.single-page .VPDoc .aside {
  display: none !important;
}

.single-page .VPDoc.has-aside .content-container {
  max-width: 1440px !important;
}

@media (min-width: 1440px) {
  .single-page .VPDoc:not(.has-sidebar) .content {
    max-width: 1440px !important;
  }
}
@media (min-width: 960px) {
    .VPDoc[data-v-10119189] {
        padding: 0px 32px 0;
    }
}

/* 隐藏首页的VPDocFooter */
.home-page-layout .VPDocFooter {
  display: none !important;
}
</style>


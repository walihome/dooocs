<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

interface CheatItem {
  title: string
  description?: string
  code: string
  language?: string
}

interface CheatSection {
  title: string
  items: CheatItem[]
}

const props = defineProps<{
  sections: CheatSection[]
}>()

const { frontmatter } = useData()

const copiedStates = ref<Record<string, boolean>>({})
const activeSection = ref<number>(0)
const sectionRefs = ref<HTMLElement[]>([])

const copyToClipboard = async (text: string, key: string) => {
  try {
    await navigator.clipboard.writeText(text)
    copiedStates.value[key] = true
    setTimeout(() => {
      copiedStates.value[key] = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

const scrollToSection = (index: number) => {
  const section = sectionRefs.value[index]
  if (section) {
    const offset = 80
    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 150
  
  for (let i = sectionRefs.value.length - 1; i >= 0; i--) {
    const section = sectionRefs.value[i]
    if (section && section.offsetTop <= scrollPosition) {
      activeSection.value = i
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveSection, { passive: true })
  updateActiveSection()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
</script>

<template>
  <div class="cheatsheet-container">
    <!-- 左侧导航 -->
    <aside class="toc-nav">
      <h4 class="toc-header">{{ frontmatter.title || '速记表' }}</h4>
      <nav class="toc-list">
        <a
          v-for="(section, index) in sections"
          :key="index"
          @click.prevent="scrollToSection(index)"
          :class="['toc-item', { active: activeSection === index }]"
          :href="`#section-${index}`"
        >
          <span class="toc-indicator"></span>
          <span class="toc-text">{{ section.title }}</span>
        </a>
      </nav>
    </aside>

    <!-- 主内容区 -->
    <div class="cheatsheet-main">
      <div class="cheatsheet-grid">
        <div 
          v-for="(section, sectionIndex) in sections" 
          :key="sectionIndex"
          :ref="el => { if (el) sectionRefs[sectionIndex] = el as HTMLElement }"
          :id="`section-${sectionIndex}`"
          class="cheatsheet-section"
        >
          <h3 class="section-title">{{ section.title }}</h3>
          
          <div class="items-container">
            <div 
              v-for="(item, itemIndex) in section.items" 
              :key="itemIndex"
              class="cheat-item"
            >
              <div class="item-header">
                <h4 class="item-title">{{ item.title }}</h4>
                <p v-if="item.description" class="item-description">
                  {{ item.description }}
                </p>
                <button
                    @click="copyToClipboard(item.code, `${sectionIndex}-${itemIndex}-block`)"
                    class="copy-button"
                    :class="{ 'copy-success': copiedStates[`${sectionIndex}-${itemIndex}-block`] }"
                  >
                    <span v-if="copiedStates[`${sectionIndex}-${itemIndex}-block`]">✓</span>
                    <span v-else>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    </span>
                  </button>
              </div>

              <div class="code-wrapper">              
                <div class="code-content">
                  <div
                    v-for="(line, lineIndex) in item.code.split('\n')"
                    :key="lineIndex"
                    class="code-line-wrapper"
                    @click="line.trim() && copyToClipboard(line, `${sectionIndex}-${itemIndex}-${lineIndex}`)"
                    :class="{ 'clickable': line.trim(), 'copied': copiedStates[`${sectionIndex}-${itemIndex}-${lineIndex}`] }"
                  >
                    <pre class="code-line"><code>{{ line || ' ' }}</code></pre>
                    <span 
                      v-if="copiedStates[`${sectionIndex}-${itemIndex}-${lineIndex}`]"
                      class="copy-indicator"
                    >
                      ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style>
/* 隐藏 single 页面的 VitePress 标题（全局样式）*/
.single-page .VPDoc h1:first-of-type {
  display: none;
}
</style>

<style scoped>
.cheatsheet-container {
  display: flex;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;
}

/* 左侧目录导航 */
.toc-nav {
  position: sticky;
  top: 80px;
  width: 200px;
  height: fit-content;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  flex-shrink: 0;
}

.toc-header {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  padding: 0.75rem 0.75rem;
  margin: 0 0 1rem 0;
  border-bottom: 2px solid var(--vp-c-brand-1);
  line-height: 1.4;
}

.toc-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.toc-item {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  padding-left: 1.5rem;
  font-size: 0.8125rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

.toc-item:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
  font-size: 0.875rem;
}

.toc-item.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  font-weight: 500;
  font-size: 0.875rem;
}

.toc-item.active .toc-indicator {
  opacity: 1;
  background: var(--vp-c-brand-1);
}

.toc-indicator {
  position: absolute;
  left: 0.5rem;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--vp-c-text-3);
  opacity: 0;
  transition: all 0.2s ease;
}

.toc-item:hover .toc-indicator {
  opacity: 1;
}

.toc-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 主内容区 */
.cheatsheet-main {
  flex: 1;
  min-width: 0;
}

.cheatsheet-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

/* 响应式：隐藏小屏幕导航 */
@media (max-width: 1024px) {
  .toc-nav {
    display: none;
  }
  
  .cheatsheet-container {
    gap: 0;
  }
}

.cheatsheet-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.section-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--vp-c-divider);
  letter-spacing: 0.01em;
}

.items-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 640px) {
  .items-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .items-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.cheat-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  overflow: hidden;
  transition: all 0.2s ease;
}

.cheat-item:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px var(--vp-c-bg-soft);
  transform: translateY(-1px);
}

.item-header {
  position: relative;
  padding: 0.625rem 0.75rem;
  padding-right: 2.5rem;
  background: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.item-header:hover .copy-button {
  opacity: 1;
}

.item-title {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.item-description {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.4;
}

.code-wrapper {
  position: relative;
  overflow: hidden;
  border-radius: 0 0 0.375rem 0.375rem;
}


.copy-button {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.375rem;
  font-size: 0.6875rem;
  color: white;
  background: var(--vp-c-brand-1);
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 0.25rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 1.75rem;
  height: 1.75rem;
  opacity: 0;
}

.copy-button:hover {
  background: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
  transform: scale(1.05);
}

.copy-success {
  opacity: 1 !important;
  color: white;
  border-color: var(--vp-c-green-1);
  background: var(--vp-c-green-1);
}

.code-content {
  position: relative;
  background: var(--vp-c-bg);
}

.code-line-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  transition: all 0.15s ease;
  min-height: 2rem;
}

.code-line-wrapper.clickable {
  cursor: pointer;
}

.code-line-wrapper.clickable:hover {
  background: var(--vp-c-bg-soft);
  box-shadow: inset 2px 0 0 0 var(--vp-c-brand-1);
}

.code-line-wrapper.clickable:active {
  background: var(--vp-c-bg-soft);
}

.code-line-wrapper.copied {
  background: var(--vp-c-bg-soft);
  box-shadow: inset 2px 0 0 0 var(--vp-c-green-1);
}

.code-line {
  flex: 1;
  margin: 0;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--vp-c-text-1);
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  white-space: pre-wrap;
  word-break: break-word;
  overflow-wrap: break-word;
}

.code-line code {
  font-family: inherit;
}

.copy-indicator {
  position: absolute;
  right: 0.75rem;
  color: var(--vp-c-green-1);
  font-size: 0.875rem;
  font-weight: 600;
  pointer-events: none;
}
</style>
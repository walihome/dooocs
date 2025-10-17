<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

interface Project {
  name: string
  description: string
  url: string
  github?: string
  tags?: string[]
  stars?: string
  language?: string
  demo?: string
}

interface ProjectCategory {
  title: string
  description?: string
  icon?: string
  projects: Project[]
}

const props = defineProps<{
  categories: ProjectCategory[]
}>()

const { frontmatter } = useData()

const activeCategory = ref<number>(0)
const categoryRefs = ref<HTMLElement[]>([])
const searchQuery = ref<string>('')

const filteredCategories = computed(() => {
  if (!searchQuery.value.trim()) {
    return props.categories
  }
  
  const query = searchQuery.value.toLowerCase()
  return props.categories.map(category => ({
    ...category,
    projects: category.projects.filter(project => 
      project.name.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.language?.toLowerCase().includes(query) ||
      project.tags?.some(tag => tag.toLowerCase().includes(query))
    )
  })).filter(category => category.projects.length > 0)
})

const scrollToCategory = (index: number) => {
  const category = categoryRefs.value[index]
  if (category) {
    const offset = 80
    const elementPosition = category.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveCategory = () => {
  const scrollPosition = window.scrollY + 150
  
  for (let i = categoryRefs.value.length - 1; i >= 0; i--) {
    const category = categoryRefs.value[i]
    if (category && category.offsetTop <= scrollPosition) {
      activeCategory.value = i
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveCategory, { passive: true })
  updateActiveCategory()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveCategory)
})
</script>

<template>
  <div class="projects-container">
    <!-- 左侧导航 -->
    <aside class="projects-nav">
      <h4 class="nav-header">{{ frontmatter.title || '项目集合' }}</h4>
      
      <!-- 搜索框 -->
      <div class="search-box">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="搜索项目..."
          class="search-input"
        />
        <svg class="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
      </div>

      <nav class="nav-list">
        <a
          v-for="(category, index) in categories"
          :key="index"
          @click.prevent="scrollToCategory(index)"
          :class="['nav-item', { active: activeCategory === index }]"
          :href="`#category-${index}`"
        >
          <span v-if="category.icon" class="nav-icon">{{ category.icon }}</span>
          <span class="nav-text">{{ category.title }}</span>
        </a>
      </nav>
    </aside>

    <!-- 主内容区 -->
    <div class="projects-main">
      <div 
        v-for="(category, categoryIndex) in filteredCategories" 
        :key="categoryIndex"
        :ref="el => { if (el) categoryRefs[categoryIndex] = el as HTMLElement }"
        :id="`category-${categoryIndex}`"
        class="project-category"
      >
        <div class="category-header">
          <h2 class="category-title">
            <span v-if="category.icon" class="category-icon">{{ category.icon }}</span>
            {{ category.title }}
          </h2>
          <p v-if="category.description" class="category-description">
            {{ category.description }}
          </p>
        </div>

        <div class="projects-grid">
          <div 
            v-for="(project, projectIndex) in category.projects" 
            :key="projectIndex"
            class="project-card"
          >
            <div class="project-header">
              <h3 class="project-name">{{ project.name }}</h3>
              <div class="project-actions">
                <a 
                  v-if="project.github"
                  :href="project.github" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-button github"
                  title="GitHub"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  v-if="project.demo"
                  :href="project.demo" 
                  target="_blank"
                  rel="noopener noreferrer"
                  class="action-button demo"
                  title="在线演示"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>

            <p class="project-description">{{ project.description }}</p>

            <div class="project-meta">
              <span v-if="project.language" class="meta-item language">
                <span class="language-dot"></span>
                {{ project.language }}
              </span>
              <span v-if="project.stars" class="meta-item stars">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                </svg>
                {{ project.stars }}
              </span>
            </div>

            <div v-if="project.tags && project.tags.length > 0" class="project-tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>

            <div class="project-footer">
              <a 
                :href="project.url" 
                target="_blank"
                rel="noopener noreferrer"
                class="download-button"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                <span>下载 / 查看</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="searchQuery && filteredCategories.length === 0" class="no-results">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <p>没有找到匹配的项目</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  display: flex;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;
}

/* 左侧导航 */
.projects-nav {
  position: sticky;
  top: 80px;
  width: 220px;
  height: fit-content;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  flex-shrink: 0;
}

.nav-header {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  padding: 0.75rem 0.75rem;
  margin: 0 0 0.75rem 0;
  border-bottom: 2px solid var(--vp-c-brand-1);
  line-height: 1.4;
}

.search-box {
  position: relative;
  margin-bottom: 1rem;
  padding: 0 0.75rem;
}

.search-input {
  width: 100%;
  padding: 0.5rem 0.75rem;
  padding-left: 2.25rem;
  font-size: 0.875rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.375rem;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 3px rgba(var(--vp-c-brand-1), 0.1);
}

.search-input::placeholder {
  color: var(--vp-c-text-3);
}

.search-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  pointer-events: none;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  cursor: pointer;
}

.nav-item:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}

.nav-item.active {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  font-weight: 600;
}

.nav-icon {
  font-size: 1.125rem;
  flex-shrink: 0;
}

.nav-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 主内容区 */
.projects-main {
  flex: 1;
  min-width: 0;
}

.project-category {
  margin-bottom: 3rem;
}

.category-header {
  margin-bottom: 1.5rem;
}

.category-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.category-icon {
  font-size: 1.5rem;
}

.category-description {
  font-size: 1rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}

@media (min-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1280px) {
  .projects-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* 项目卡片 */
.project-card {
  display: flex;
  flex-direction: column;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  padding: 1.25rem;
  transition: all 0.2s ease;
  height: 100%;
}

.project-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.project-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.project-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
  flex-shrink: 0;
}

.action-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
  color: var(--vp-c-text-2);
}

.action-button:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
}

.action-button.github:hover {
  color: #333;
  background: #f0f0f0;
}

.action-button.demo:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg);
}

.project-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.6;
  flex: 1;
}

.project-meta {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.8125rem;
  color: var(--vp-c-text-3);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.language-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.25rem;
  white-space: nowrap;
}

.project-footer {
  margin-top: auto;
  padding-top: 0.75rem;
  border-top: 1px solid var(--vp-c-divider);
}

.download-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background: var(--vp-c-brand-1);
  border: none;
  border-radius: 0.375rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.download-button:hover {
  background: var(--vp-c-brand-2);
  transform: scale(1.02);
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  color: var(--vp-c-text-3);
}

.no-results svg {
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-results p {
  font-size: 1rem;
  margin: 0;
}

/* 响应式 */
@media (max-width: 1024px) {
  .projects-nav {
    display: none;
  }
  
  .projects-container {
    gap: 0;
  }
}

@media (max-width: 640px) {
  .category-title {
    font-size: 1.5rem;
  }

  .project-card {
    padding: 1rem;
  }
}
</style>


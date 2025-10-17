<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useData } from 'vitepress'

interface Resource {
  name: string
  url?: string
}

interface Topic {
  name: string
  description?: string
  resources?: Resource[]
}

interface RoadmapStage {
  title: string
  description?: string
  topics: Topic[]
}

const props = defineProps<{
  stages: RoadmapStage[]
}>()

const { frontmatter } = useData()

const activeStage = ref<number>(0)
const stageRefs = ref<HTMLElement[]>([])
const expandedTopics = ref<Record<string, boolean>>({})

const toggleTopic = (stageIndex: number, topicIndex: number) => {
  const key = `${stageIndex}-${topicIndex}`
  const isCurrentlyExpanded = expandedTopics.value[key]
  
  // 关闭所有其他的 topic
  expandedTopics.value = {}
  
  // 如果当前是关闭状态，则打开它
  if (!isCurrentlyExpanded) {
    expandedTopics.value[key] = true
  }
}

const scrollToStage = (index: number) => {
  const stage = stageRefs.value[index]
  if (stage) {
    const offset = 80
    const elementPosition = stage.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveStage = () => {
  const scrollPosition = window.scrollY + 150
  
  for (let i = stageRefs.value.length - 1; i >= 0; i--) {
    const stage = stageRefs.value[i]
    if (stage && stage.offsetTop <= scrollPosition) {
      activeStage.value = i
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', updateActiveStage, { passive: true })
  updateActiveStage()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveStage)
})
</script>

<template>
  <div class="roadmap-container">
    <!-- 左侧导航 -->
    <aside class="roadmap-nav">
      <h4 class="nav-header">{{ frontmatter.title || '学习路线' }}</h4>
      <nav class="nav-list">
        <a
          v-for="(stage, index) in stages"
          :key="index"
          @click.prevent="scrollToStage(index)"
          :class="['nav-item', { active: activeStage === index }]"
          :href="`#stage-${index}`"
        >
          <span class="nav-number">{{ index + 1 }}</span>
          <span class="nav-text">{{ stage.title }}</span>
        </a>
      </nav>
    </aside>

    <!-- 主内容区 -->
    <div class="roadmap-main">
      <div class="roadmap-path">
        <div 
          v-for="(stage, stageIndex) in stages" 
          :key="stageIndex"
          :ref="el => { if (el) stageRefs[stageIndex] = el as HTMLElement }"
          :id="`stage-${stageIndex}`"
          class="roadmap-stage"
        >
          <!-- 阶段头部 -->
          <div class="stage-header">
            <div class="stage-number">
              <span>{{ stageIndex + 1 }}</span>
            </div>
            <div class="stage-info">
              <h3 class="stage-title">{{ stage.title }}</h3>
              <p v-if="stage.description" class="stage-description">
                {{ stage.description }}
              </p>
            </div>
          </div>

          <!-- 主题列表 -->
          <div class="topics-container">
            <div 
              v-for="(topic, topicIndex) in stage.topics" 
              :key="topicIndex"
              class="topic-item"
              :class="{ expanded: expandedTopics[`${stageIndex}-${topicIndex}`] }"
            >
              <div 
                class="topic-header"
                @click="toggleTopic(stageIndex, topicIndex)"
              >
                <div class="topic-dot"></div>
                <h4 class="topic-name">{{ topic.name }}</h4>
                <button 
                  v-if="topic.description || topic.resources"
                  class="expand-button"
                  :class="{ expanded: expandedTopics[`${stageIndex}-${topicIndex}`] }"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
              </div>

              <div 
                v-if="expandedTopics[`${stageIndex}-${topicIndex}`]"
                class="topic-content"
              >
                <p v-if="topic.description" class="topic-description">
                  {{ topic.description }}
                </p>
                <div v-if="topic.resources && topic.resources.length > 0" class="topic-resources">
                  <h5 class="resources-title">推荐资源</h5>
                  <ul class="resources-list">
                    <li v-for="(resource, rIndex) in topic.resources" :key="rIndex">
                      <a 
                        v-if="resource.url" 
                        :href="resource.url" 
                        target="_blank"
                        rel="noopener noreferrer"
                        class="resource-link"
                      >
                        {{ resource.name }}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                      <span v-else class="resource-text">{{ resource.name }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- 连接线（除了最后一个阶段） -->
          <div v-if="stageIndex < stages.length - 1" class="stage-connector"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.roadmap-container {
  display: flex;
  width: 100%;
  padding: 1rem 0;
  gap: 2rem;
}

/* 左侧导航 */
.roadmap-nav {
  position: sticky;
  top: 80px;
  width: 200px;
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
  margin: 0 0 1rem 0;
  border-bottom: 2px solid var(--vp-c-brand-1);
  line-height: 1.4;
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
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

.nav-item.active .nav-number {
  background: var(--vp-c-brand-1);
  color: white;
}

.nav-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.nav-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 主内容区 */
.roadmap-main {
  flex: 1;
  min-width: 0;
}

.roadmap-path {
  display: flex;
  flex-direction: column;
}

.roadmap-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;
}

/* 阶段头部 */
.stage-header {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.stage-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--vp-c-brand-1), var(--vp-c-brand-2));
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.stage-info {
  flex: 1;
}

.stage-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
  line-height: 1.3;
}

.stage-description {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  margin: 0;
  line-height: 1.6;
}

/* 主题容器 */
.topics-container {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--vp-c-divider);
  margin-left: 1.5rem;
}

.topic-item {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.2s ease;
}

.topic-item:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.topic-item.expanded {
  border-color: var(--vp-c-brand-1);
}

.topic-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.2s ease;
}

.topic-header:hover {
  background: var(--vp-c-bg);
}

.topic-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.topic-name {
  flex: 1;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.4;
}

.expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: var(--vp-c-text-2);
  cursor: pointer;
  border-radius: 0.25rem;
  transition: all 0.2s ease;
}

.expand-button:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
}

.expand-button svg {
  transition: transform 0.2s ease;
}

.expand-button.expanded svg {
  transform: rotate(180deg);
}

.topic-content {
  padding: 0 1rem 1rem 2.5rem;
  animation: slideDown 0.2s ease;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-0.5rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.topic-description {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.75rem 0;
  line-height: 1.6;
}

.topic-resources {
  margin-top: 0.75rem;
}

.resources-title {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 0.5rem 0;
}

.resources-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.resources-list li {
  font-size: 0.8125rem;
  line-height: 1.5;
}

.resource-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: all 0.2s ease;
}

.resource-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}

.resource-link svg {
  flex-shrink: 0;
}

.resource-text {
  color: var(--vp-c-text-2);
}

/* 连接线 */
.stage-connector {
  width: 2px;
  height: 2rem;
  background: linear-gradient(to bottom, var(--vp-c-divider), transparent);
  margin-left: 1.5rem;
}

/* 响应式 */
@media (max-width: 1024px) {
  .roadmap-nav {
    display: none;
  }
  
  .roadmap-container {
    gap: 0;
  }
}

@media (max-width: 640px) {
  .stage-header {
    gap: 1rem;
  }

  .stage-number {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1rem;
  }

  .stage-title {
    font-size: 1.25rem;
  }

  .topics-container {
    padding-left: 1rem;
    margin-left: 1.25rem;
  }

  .topic-header {
    padding: 0.75rem;
  }

  .topic-content {
    padding: 0 0.75rem 0.75rem 2rem;
  }
}
</style>


<template>
  <div class="home-page">
    
    <div class="content-grid">
      <div 
        v-for="column in columns" 
        :key="column.id"
        class="column"
      >
        <div class="column-header">
          <span>{{ column.title }}</span>
        </div>
        
        <div class="column-items">
          <a 
            v-for="item in column.items" 
            :key="item.link"
            :href="item.link"
            class="item-link"
          >
            {{ item.displayName }}
          </a>
          <div v-if="column.items.length === 0" class="empty-hint">
            内容补充中
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Item {
  displayName: string;
  link: string;
}

interface Column {
  id: string;
  icon: string;
  title: string;
  items: Item[];
}

interface Hero {
  title: string;
  description: string;
}

defineProps<{
  hero: Hero;
  columns: Column[];
}>();
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: var(--vp-c-bg);
  padding-bottom: 4rem;
  margin-top: 5rem;
}

.home-page .hero-section {
  text-align: center;
  padding: 4rem 2rem 3rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  color: white;
  margin-bottom: 3rem;
}

.home-page .hero-section h1 {
  font-size: 3rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.home-page .hero-section p {
  font-size: 1.5rem;
  margin-top: 1rem;
  opacity: 0.95;
  font-weight: 400;
}

.home-page .content-grid {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  align-items: start;
}

.home-page .column {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}

.home-page .column-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 0 0.5rem 0.75rem 0.5rem;
  position: relative;
  border-left: 3px solid transparent;
}

.home-page .column-header::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0.5rem;
  right: 0.5rem;
  height: 2px;
  background-color: var(--vp-c-divider);
}

.home-page .column-header span {
  color: var(--vp-c-text-1);
  font-size: 1.25rem;
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.01em;
  transition: color 0.3s ease;
}

.home-page .column-header::after {
  transition: background-color 0.3s ease;
}

/* 当hover到item时，header的文字和横线都变色 */
.home-page .column:has(.item-link:hover) .column-header span {
  color: var(--vp-c-brand-1);
}

.home-page .column:has(.item-link:hover) .column-header::after {
  background-color: var(--vp-c-brand-1);
}

.home-page .column-items {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 0;
}

.home-page .item-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: all 0.2s ease;
  padding: 0.3rem 0.5rem;
  border-radius: 4px;
  font-size: 0.95rem;
  line-height: 1.5;
  position: relative;
  display: block;
  border-left: 3px solid transparent;
}

.home-page .item-link:hover {
  color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft);
  border-left-color: var(--vp-c-brand-1);
}

.home-page .empty-hint {
  color: var(--vp-c-text-3);
  font-style: italic;
  font-size: 0.9rem;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .home-page .hero-section {
    padding: 3rem 1.5rem 2rem;
  }
  
  .home-page .hero-section h1 {
    font-size: 2rem;
  }
  
  .home-page .hero-section p {
    font-size: 1.2rem;
  }
  
  .home-page .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  .home-page .column-header h3 {
    font-size: 1.1rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .home-page .content-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .home-page .content-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* 暗黑模式优化 */
html.dark .home-page .hero-section {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-dark) 100%);
}

html.dark .home-page .item-link:hover {
  background: var(--vp-c-bg-mute);
}
</style>

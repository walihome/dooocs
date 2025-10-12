<template>
  <div class="home-page">
    <!-- 背景装饰插画 -->
    <div class="background-decorations">
      <!-- 左上角装饰 -->
      <div class="decoration decoration-top-left">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="60" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.1">
            <animate attributeName="r" values="60;70;60" dur="4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="100" cy="100" r="40" fill="none" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.15">
            <animate attributeName="r" values="40;50;40" dur="3s" repeatCount="indefinite"/>
          </circle>
          <text x="100" y="110" text-anchor="middle" fill="var(--vp-c-brand-1)" font-size="40" opacity="0.2">{ }</text>
        </svg>
      </div>
      
      <!-- 右上角装饰 -->
      <div class="decoration decoration-top-right">
        <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 50 L 100 50 L 100 100 L 50 100 Z" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.1">
            <animateTransform attributeName="transform" type="rotate" from="0 75 75" to="360 75 75" dur="20s" repeatCount="indefinite"/>
          </path>
          <text x="75" y="85" text-anchor="middle" fill="var(--vp-c-brand-2)" font-size="30" opacity="0.2">&lt;/&gt;</text>
        </svg>
      </div>
      
      <!-- 右下角装饰 -->
      <div class="decoration decoration-bottom-right">
        <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
          <polygon points="90,30 130,110 50,110" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.1">
            <animate attributeName="opacity" values="0.1;0.2;0.1" dur="3s" repeatCount="indefinite"/>
          </polygon>
          <text x="90" y="95" text-anchor="middle" fill="var(--vp-c-brand-1)" font-size="35" opacity="0.2">λ</text>
        </svg>
      </div>
      
      <!-- 左下角装饰 -->
      <div class="decoration decoration-bottom-left">
        <svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <line x1="40" y1="80" x2="120" y2="80" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.15">
            <animate attributeName="x2" values="120;130;120" dur="2s" repeatCount="indefinite"/>
          </line>
          <line x1="40" y1="95" x2="100" y2="95" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.15">
            <animate attributeName="x2" values="100;110;100" dur="2.5s" repeatCount="indefinite"/>
          </line>
          <circle cx="135" cy="80" r="3" fill="var(--vp-c-brand-2)" opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      <!-- Ctrl+C / Ctrl+V 装饰 (中上) -->
      <div class="decoration decoration-top-center">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <!-- Ctrl+C 键盘按键 -->
          <rect x="20" y="20" width="35" height="30" rx="4" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.15"/>
          <text x="37.5" y="40" text-anchor="middle" fill="var(--vp-c-brand-1)" font-size="12" opacity="0.25" font-family="monospace">Ctrl</text>
          <rect x="58" y="20" width="25" height="30" rx="4" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.15"/>
          <text x="70.5" y="40" text-anchor="middle" fill="var(--vp-c-brand-1)" font-size="14" opacity="0.25" font-family="monospace">C</text>
          
          <!-- 复制图标箭头 -->
          <path d="M 95 35 L 105 35" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.2" marker-end="url(#arrowhead)">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
          </path>
          
          <!-- Ctrl+V 键盘按键 -->
          <rect x="117" y="20" width="35" height="30" rx="4" fill="none" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.15"/>
          <text x="134.5" y="40" text-anchor="middle" fill="var(--vp-c-brand-2)" font-size="12" opacity="0.25" font-family="monospace">Ctrl</text>
          <rect x="155" y="20" width="25" height="30" rx="4" fill="none" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.15"/>
          <text x="167.5" y="40" text-anchor="middle" fill="var(--vp-c-brand-2)" font-size="14" opacity="0.25" font-family="monospace">V</text>
          
          <!-- 箭头标记定义 -->
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
              <polygon points="0 0, 10 3, 0 6" fill="var(--vp-c-brand-2)" opacity="0.2"/>
            </marker>
          </defs>
        </svg>
      </div>

      <!-- 996 装饰 (右中) -->
      <div class="decoration decoration-right-center">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <text x="60" y="65" text-anchor="middle" fill="var(--vp-c-brand-1)" font-size="48" opacity="0.15" font-weight="bold" font-family="Arial, sans-serif">996</text>
          <circle cx="60" cy="60" r="50" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.1" stroke-dasharray="5,5">
            <animateTransform attributeName="transform" type="rotate" from="0 60 60" to="360 60 60" dur="30s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>

      <!-- 咖啡杯装饰 (左中) -->
      <div class="decoration decoration-left-center">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <!-- 咖啡杯 -->
          <path d="M 30 40 L 30 70 Q 30 75 35 75 L 55 75 Q 60 75 60 70 L 60 40 Z" fill="none" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.15"/>
          <!-- 杯把手 -->
          <path d="M 60 50 Q 70 50 70 60 Q 70 70 60 70" fill="none" stroke="var(--vp-c-brand-2)" stroke-width="2" opacity="0.15"/>
          <!-- 热气 -->
          <path d="M 35 35 Q 37 30 35 25" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" repeatCount="indefinite"/>
          </path>
          <path d="M 45 35 Q 47 30 45 25" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" begin="0.3s" repeatCount="indefinite"/>
          </path>
          <path d="M 55 35 Q 57 30 55 25" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.2">
            <animate attributeName="opacity" values="0.2;0.4;0.2" dur="2s" begin="0.6s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>

      <!-- Bug 装饰 (中下) -->
      <div class="decoration decoration-bottom-center">
        <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <!-- Bug 身体 -->
          <ellipse cx="60" cy="50" rx="20" ry="25" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.15"/>
          <!-- Bug 头 -->
          <circle cx="60" cy="30" r="12" fill="none" stroke="var(--vp-c-brand-1)" stroke-width="2" opacity="0.15"/>
          <!-- Bug 触角 -->
          <line x1="55" y1="25" x2="50" y2="18" stroke="var(--vp-c-brand-2)" stroke-width="1.5" opacity="0.2"/>
          <line x1="65" y1="25" x2="70" y2="18" stroke="var(--vp-c-brand-2)" stroke-width="1.5" opacity="0.2"/>
          <circle cx="50" cy="18" r="2" fill="var(--vp-c-brand-2)" opacity="0.2"/>
          <circle cx="70" cy="18" r="2" fill="var(--vp-c-brand-2)" opacity="0.2"/>
          <!-- Bug 腿 -->
          <line x1="45" y1="45" x2="30" y2="45" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.15"/>
          <line x1="75" y1="45" x2="90" y2="45" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.15"/>
          <line x1="45" y1="55" x2="30" y2="60" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.15"/>
          <line x1="75" y1="55" x2="90" y2="60" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.15"/>
          <line x1="45" y1="65" x2="35" y2="75" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.15"/>
          <line x1="75" y1="65" x2="85" y2="75" stroke="var(--vp-c-brand-1)" stroke-width="1.5" opacity="0.15"/>
          <!-- 删除线表示修复Bug -->
          <line class="bug-strike" x1="35" y1="40" x2="85" y2="60" stroke="var(--vp-c-red-1)" stroke-width="2.5" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
          </line>
        </svg>
      </div>
    </div>
    
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1>{{ hero.title }}</h1>
        <span class="separator">·</span>
        <p>{{ hero.description }}</p>
      </div>
    </div>
    
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
  position: relative;
  overflow: hidden;
}

/* 背景装饰元素 */
.home-page .background-decorations {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}

.home-page .decoration {
  position: absolute;
  opacity: 0.6;
}

.home-page .decoration-top-left {
  top: 250px;
  left: -50px;
  width: 200px;
  height: 200px;
}

.home-page .decoration-top-right {
  top: 280px;
  right: 50px;
  width: 150px;
  height: 150px;
}

.home-page .decoration-bottom-right {
  bottom: 100px;
  right: -30px;
  width: 180px;
  height: 180px;
}

.home-page .decoration-bottom-left {
  bottom: 150px;
  left: 30px;
  width: 160px;
  height: 160px;
}

.home-page .decoration-top-center {
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 100px;
}

.home-page .decoration-right-center {
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 120px;
  height: 120px;
}

.home-page .decoration-left-center {
  top: 45%;
  left: 10px;
  transform: translateY(-50%);
  width: 100px;
  height: 100px;
}

.home-page .decoration-bottom-center {
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 120px;
}

.home-page .hero-section {
  padding: 2rem 2rem;
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
  color: white;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.home-page .hero-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.home-page .hero-section h1 {
  font-size: 2rem;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.home-page .hero-section .separator {
  font-size: 1.5rem;
  opacity: 0.7;
}

.home-page .hero-section p {
  font-size: 1.2rem;
  margin: 0;
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
  position: relative;
  z-index: 1;
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
    padding: 1.5rem 1rem;
  }
  
  .home-page .hero-content {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .home-page .hero-section .separator {
    display: none;
  }
  
  .home-page .hero-section h1 {
    font-size: 1.5rem;
  }
  
  .home-page .hero-section p {
    font-size: 1rem;
  }
  
  .home-page .content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 0 1rem;
  }

  .home-page .column-header h3 {
    font-size: 1.1rem;
  }
  
  /* 移动端隐藏部分装饰 */
  .home-page .decoration-bottom-left,
  .home-page .decoration-top-right,
  .home-page .decoration-top-center,
  .home-page .decoration-left-center,
  .home-page .decoration-right-center {
    display: none;
  }
  
  .home-page .decoration-top-left {
    width: 120px;
    height: 120px;
    top: 180px;
    left: -40px;
  }
  
  .home-page .decoration-bottom-right {
    width: 100px;
    height: 100px;
    bottom: 80px;
    right: -20px;
  }

  .home-page .decoration-bottom-center {
    width: 80px;
    height: 80px;
    bottom: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .home-page .content-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .home-page .decoration {
    opacity: 0.4;
  }
}

@media (min-width: 1025px) {
  .home-page .content-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

/* 暗黑模式优化 */
.dark .home-page {
  background: var(--vp-c-bg);
}

.dark .home-page .hero-section {
  background: linear-gradient(135deg, var(--vp-c-brand-1) 0%, var(--vp-c-brand-2) 100%);
}

.dark .home-page .item-link {
  color: var(--vp-c-text-2);
}

.dark .home-page .item-link:hover {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-brand-1);
}

.dark .home-page .column-header span {
  color: var(--vp-c-text-1);
}

.dark .home-page .decoration {
  opacity: 0.25;
}

/* 暗黑模式下装饰使用更柔和的颜色 */
.dark .home-page .decoration circle {
  stroke: var(--vp-c-indigo-2) !important;
}

.dark .home-page .decoration line {
  stroke: var(--vp-c-purple-2) !important;
}

.dark .home-page .decoration polygon {
  stroke: var(--vp-c-green-2) !important;
}

.dark .home-page .decoration path {
  stroke: var(--vp-c-indigo-2) !important;
}

.dark .home-page .decoration rect {
  stroke: var(--vp-c-indigo-2) !important;
}

.dark .home-page .decoration ellipse {
  stroke: var(--vp-c-indigo-2) !important;
}

.dark .home-page .decoration text {
  fill: var(--vp-c-indigo-1) !important;
  opacity: 0.6;
}

/* 暗黑模式下特定装饰的优化 */
.dark .home-page .decoration-top-center rect {
  stroke: var(--vp-c-indigo-2) !important;
}

.dark .home-page .decoration-top-center text {
  fill: var(--vp-c-indigo-1) !important;
}

.dark .home-page .decoration-right-center text {
  fill: var(--vp-c-purple-1) !important;
}

.dark .home-page .decoration-left-center path {
  stroke: var(--vp-c-green-2) !important;
}

.dark .home-page .decoration-bottom-center {
  opacity: 0.5 !important;
}

.dark .home-page .decoration-bottom-center ellipse,
.dark .home-page .decoration-bottom-center circle {
  stroke: var(--vp-c-green-2) !important;
  stroke-width: 2.5 !important;
  opacity: 0.5 !important;
}

.dark .home-page .decoration-bottom-center line {
  stroke: var(--vp-c-green-2) !important;
  stroke-width: 2 !important;
  opacity: 0.5 !important;
}

.dark .home-page .decoration-bottom-center .bug-strike {
  stroke: var(--vp-c-red-1) !important;
  stroke-width: 3 !important;
}
</style>

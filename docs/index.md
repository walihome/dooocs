---
editLink: false
---

<div class="knowledge-base-container">
  <div class="knowledge-base-table">
    <table>
      <thead>
        <tr>
          <th>分类</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="category-name">🗺️ 路线图</td>
          <td class="content-links">暂无内容</td>
        </tr>
        <tr>
          <td class="category-name">⚡ 速记表</td>
          <td class="content-links"><a href="/cheatsheet/css/" class="content-link">css</a></td>
        </tr>
        <tr>
          <td class="category-name">📝 笔记</td>
          <td class="content-links"><a href="/note/dooocs/" class="content-link">D站文档库</a> · <a href="/note/前端学习/" class="content-link">前端学习记录</a> · <a href="/note/打造高效的mac/" class="content-link">打造高效的mac</a></td>
        </tr>
        <tr>
          <td class="category-name">🎯 资源</td>
          <td class="content-links"><a href="/resource/java/" class="content-link">Java资源下载</a></td>
        </tr>
        <tr>
          <td class="category-name">📚 教程</td>
          <td class="content-links"><a href="/tutorial/ios/" class="content-link">文档</a> · <a href="/tutorial/python/" class="content-link">python 基础</a> · <a href="/tutorial/swift/" class="content-link">关于swift语言</a> · <a href="/tutorial/git/" class="content-link">文档</a> · <a href="/tutorial/java/" class="content-link">文档</a> · <a href="/tutorial/markdown/" class="content-link">文档</a> · <a href="/tutorial/maven/" class="content-link">文档</a> · <a href="/tutorial/odps/" class="content-link">文档</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<style>
.knowledge-base-container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

.knowledge-base-table {
  overflow-x: auto;
  max-width: 1200px;
  width: 100%;
}

.knowledge-base-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--vp-c-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.knowledge-base-table th {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  font-size: 1.2rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.knowledge-base-table td {
  padding: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  vertical-align: top;
  font-size: 1rem;
}

.knowledge-base-table tr:last-child td {
  border-bottom: none;
}

.knowledge-base-table tr:hover {
  background: var(--vp-c-bg-soft);
}

.category-name {
  font-weight: 600;
  color: var(--vp-c-brand-1);
  min-width: 120px;
  width: 25%;
  padding: 1rem;
  font-size: 1.05rem;
}

.content-links {
  width: 75%;
  line-height: 1.6;
}

.content-link {
  color: var(--vp-c-brand-1);
  text-decoration: none !important;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.content-link:hover {
  color: var(--vp-c-brand-2);
  text-decoration: none !important;
}

@media (max-width: 768px) {
  .knowledge-base-container {
    margin: 1rem;
  }
  
  .knowledge-base-table table {
    font-size: 0.95rem;
  }
  
  .knowledge-base-table th,
  .knowledge-base-table td {
    padding: 0.75rem;
  }
  
  .knowledge-base-table th {
    font-size: 1.1rem;
  }
  
  .content-link {
    font-size: 0.9rem;
  }
  
  .category-name {
    min-width: 100px;
    width: 30%;
    padding: 0.75rem;
    font-size: 1rem;
  }
  
  .content-links {
    width: 70%;
  }
}

/* 暗黑模式优化 */
html.dark .knowledge-base-table table {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

html.dark .knowledge-base-table th {
  background: var(--vp-c-bg-mute);
  border-bottom: 1px solid var(--vp-c-divider);
}

html.dark .knowledge-base-table tr:hover {
  background: var(--vp-c-bg-mute);
}
</style>

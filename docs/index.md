---
editLink: false
---

<div class="knowledge-base-container">
  <div class="knowledge-base-table">
    <table>
      <thead>
        <tr>
          <th>分类</th>
          <th>二级分类</th>
          <th>内容</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="category-name" rowspan="1">📁 人工智能</td>          <td class="sub-category-name">AI 开源趋势</td>
          <td class="content-links"><a href="/人工智能/AI 开源趋势/Ai 技术趋势-20250828" class="content-link">Ai 技术趋势-20250828</a></td>
        </tr>
        <tr>
          <td class="category-name" rowspan="1">📁 全栈开发</td>          <td class="sub-category-name">个人开发者必备</td>
          <td class="content-links"><a href="/全栈开发/个人开发者必备/Forum 技术趋势-20250828" class="content-link">Forum 技术趋势-20250828</a> · <a href="/全栈开发/个人开发者必备/个人开发者 技术趋势-20250830" class="content-link">个人开发者 技术趋势-20250830</a> · <a href="/全栈开发/个人开发者必备/评论 技术趋势-20250828" class="content-link">评论 技术趋势-20250828</a></td>
        </tr>
        <tr>
          <td class="category-name" rowspan="1">📁 工具资源</td>
          <td class="sub-category-name">暂无二级目录</td>
          <td class="content-links">暂无内容</td>
        </tr>
        <tr>
          <td class="category-name" rowspan="1">📁 操作系统</td>
          <td class="sub-category-name">暂无二级目录</td>
          <td class="content-links">暂无内容</td>
        </tr>
        <tr>
          <td class="category-name" rowspan="2">📁 编程语言</td>          <td class="sub-category-name">javascript</td>
          <td class="content-links"><a href="/编程语言/javascript/Javascript 技术趋势-20250828" class="content-link">Javascript 技术趋势-20250828</a></td>
        </tr>
        <tr>
          <td class="sub-category-name">python</td>
          <td class="content-links"><a href="/编程语言/python/Python 技术趋势-20250828" class="content-link">Python 技术趋势-20250828</a></td>
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
  max-width: 1400px;
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
  font-size: 1.1rem;
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
  width: 20%;
  padding: 1rem;
  font-size: 1.05rem;
}

.sub-category-name {
  font-weight: 500;
  color: var(--vp-c-text-1);
  min-width: 100px;
  width: 25%;
  padding: 1rem;
  font-size: 1rem;
}

.content-links {
  width: 55%;
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
    font-size: 0.9rem;
  }
  
  .knowledge-base-table th,
  .knowledge-base-table td {
    padding: 0.5rem;
  }
  
  .knowledge-base-table th {
    font-size: 1rem;
  }
  
  .content-link {
    font-size: 0.85rem;
  }
  
  .category-name {
    min-width: 80px;
    width: 25%;
    padding: 0.5rem;
    font-size: 0.95rem;
  }
  
  .sub-category-name {
    min-width: 80px;
    width: 30%;
    padding: 0.5rem;
    font-size: 0.9rem;
  }
  
  .content-links {
    width: 45%;
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

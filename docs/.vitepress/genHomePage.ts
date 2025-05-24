import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(process.cwd(), 'docs');

interface DirectoryInfo {
  name: string;
  displayName: string;
  order: number;
  subDirectories: {
    name: string;
    displayName: string;
    link: string;
    order: number;
  }[];
}

function getOrderFromMd(filePath: string): number {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const orderMatch = frontmatter.match(/order:\s*(\d+)/);
      if (orderMatch) {
        return parseInt(orderMatch[1], 10);
      }
    }
  }
  return Infinity;
}

function getTitleFromMd(filePath: string): string {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title:\s*(.*)/);
      if (titleMatch) {
        return titleMatch[1].trim();
      }
    }
    
    // 如果没有frontmatter，尝试获取第一个标题
    const titleMatch = content.match(/^#\s+(.*)$/m);
    if (titleMatch) {
      return titleMatch[1].trim();
    }
  }
  return '';
}

function getDirectoryDisplayName(dirPath: string, dirName: string): string {
  const indexPath = path.join(dirPath, 'index.md');
  const title = getTitleFromMd(indexPath);
  return title || dirName;
}

// 目录名称映射，用于更好的显示
const categoryNameMap: Record<string, string> = {
  'tutorial': '教程',
  'note': '笔记',
  'resource': '资源',
  'cheatsheet': '速记表',
  'roadmap': '路线图'
};

// 分类图标映射，为每个分类提供合适的图标
const categoryIconMap: Record<string, string> = {
  'tutorial': '📚',     // 教程 - 书本
  'note': '📝',         // 笔记 - 记事本
  'resource': '🎯',     // 资源 - 目标/资源
  'cheatsheet': '⚡',   // 速记表 - 闪电（快速）
  'roadmap': '🗺️'       // 路线图 - 地图
};

async function genHomePage() {
  console.log('开始生成首页内容');

  // 查询一级目录列表
  const firstLevelDirs = fs.readdirSync(docsDir).filter(dir => 
    fs.statSync(path.join(docsDir, dir)).isDirectory() && 
    !dir.startsWith('.') && 
    dir !== 'public'
  );

  console.log("一级目录: " + firstLevelDirs);

  const directoryInfos: DirectoryInfo[] = [];

  // 遍历一级目录
  for (const dir of firstLevelDirs) {
    const dirPath = path.join(docsDir, dir);
    const displayName = getDirectoryDisplayName(dirPath, dir);
    const finalDisplayName = categoryNameMap[dir] || displayName || dir;
    const order = getOrderFromMd(path.join(dirPath, 'index.md'));
    
    // 查询二级目录列表
    const subDirs = fs.readdirSync(dirPath).filter(subDir => 
      fs.statSync(path.join(dirPath, subDir)).isDirectory() && 
      !subDir.startsWith('.')
    );

    console.log(`${dir} 的二级目录: ` + subDirs);

    const subDirectories = subDirs.map(subDir => {
      const subDirPath = path.join(dirPath, subDir);
      const subDisplayName = getDirectoryDisplayName(subDirPath, subDir);
      const subOrder = getOrderFromMd(path.join(subDirPath, 'index.md'));
      return {
        name: subDir,
        displayName: subDisplayName || subDir,
        link: `/${dir}/${subDir}/`,
        order: subOrder
      };
    });

    // 对二级目录排序
    subDirectories.sort((a, b) => a.order - b.order);

    directoryInfos.push({
      name: dir,
      displayName: finalDisplayName,
      order,
      subDirectories
    });
  }

  // 对一级目录排序
  directoryInfos.sort((a, b) => a.order - b.order);

  // 生成首页内容
  let homeContent = `---
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
`;

  for (const dirInfo of directoryInfos) {
    const categoryIcon = categoryIconMap[dirInfo.name] || '📁';
    const categoryDisplayName = `${categoryIcon} ${dirInfo.displayName}`;
    
    if (dirInfo.subDirectories.length === 0) {
      // 如果没有二级目录，显示空内容
      homeContent += `        <tr>
          <td class="category-name">${categoryDisplayName}</td>
          <td class="content-links">暂无内容</td>
        </tr>
`;
    } else {
      // 有二级目录的情况
      const links = dirInfo.subDirectories.map(sub => 
        `<a href="${sub.link}" class="content-link">${sub.displayName}</a>`
      ).join(' · ');
      
      homeContent += `        <tr>
          <td class="category-name">${categoryDisplayName}</td>
          <td class="content-links">${links}</td>
        </tr>
`;
    }
  }

  homeContent += `      </tbody>
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
`;

  // 写入首页文件
  const indexPath = path.join(docsDir, 'index.md');
  fs.writeFileSync(indexPath, homeContent);
  
  console.log('首页内容生成完成');
  console.log('生成的内容预览:');
  console.log(homeContent.substring(0, 500) + '...');
}

genHomePage().catch(console.error); 

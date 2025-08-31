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
    thirdLevelContent: {
      name: string;
      displayName: string;
      link: string;
      order: number;
    }[];
    markdownFiles: {
      name: string;
      displayName: string;
      link: string;
      order: number;
    }[];
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

function getMarkdownFiles(dirPath: string): { name: string; displayName: string; link: string; order: number }[] {
  const files = fs.readdirSync(dirPath).filter(file => 
    file.endsWith('.md') && 
    file !== 'index.md' && 
    !file.startsWith('.')
  );

  return files.map(file => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // 尝试从 frontmatter 获取标题
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    let displayName = file.replace('.md', '');
    
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      const titleMatch = frontmatter.match(/title:\s*(.*)/);
      if (titleMatch) {
        displayName = titleMatch[1].trim();
      }
    } else {
      // 如果没有 frontmatter，尝试获取第一个标题
      const titleMatch = content.match(/^#\s+(.*)$/m);
      if (titleMatch) {
        displayName = titleMatch[1].trim();
      }
    }
    
    const order = getOrderFromMd(filePath);
    const relativePath = path.relative(docsDir, filePath).replace(/\\/g, '/');
    const link = `/${relativePath.replace('.md', '')}`;
    
    return {
      name: file,
      displayName,
      link,
      order
    };
  });
}

// 目录名称映射，用于更好的显示
const categoryNameMap: Record<string, string> = {
  'tutorial': '教程',
  'note': '笔记',
  'resource': '资源',
  'cheatsheet': '速记表',
  'roadmap': '路线图',
  // 新增分类
  'ai': '人工智能',
  'fullstack': '全栈开发',
  'tools': '工具资源',
  'os': '操作系统',
  'programming_language': '编程语言'
};

// 分类图标映射，为每个分类提供合适的图标
const categoryIconMap: Record<string, string> = {
  'tutorial': '📚',     // 教程 - 书本
  'note': '📝',         // 笔记 - 记事本
  '编程语言': '🎯',     // 资源 - 目标/资源
  'cheatsheet': '⚡',   // 速记表 - 闪电（快速）
  'roadmap': '🗺️',       // 路线图 - 地图
  // 新增分类图标
  '人工智能': '🧠',             // 人工智能 - 大脑
  '操作系统': '🌐',      // 全栈开发 - 地球/网络
  '工具资源': '⚙️',          // 工具资源 - 齿轮
  '全栈开发': '💻',             // 操作系统 - 笔记本电脑
  'programming_language': '✍️' // 编程语言 - 手写/代码
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

    console.log(`${dir} 的二级分类: ` + subDirs);

    const subDirectories = subDirs.map(subDir => {
      const subDirPath = path.join(dirPath, subDir);
      const subDisplayName = getDirectoryDisplayName(subDirPath, subDir);
      const subOrder = getOrderFromMd(path.join(subDirPath, 'index.md'));
      
      // 查询三级目录列表
      const thirdLevelDirs = fs.readdirSync(subDirPath).filter(thirdDir => 
        fs.statSync(path.join(subDirPath, thirdDir)).isDirectory() && 
        !thirdDir.startsWith('.')
      );

      console.log(`${dir}/${subDir} 的三级目录: ` + thirdLevelDirs);

      const thirdLevelContent = thirdLevelDirs.map(thirdDir => {
        const thirdDirPath = path.join(subDirPath, thirdDir);
        const thirdDisplayName = getDirectoryDisplayName(thirdDirPath, thirdDir);
        const thirdOrder = getOrderFromMd(path.join(thirdDirPath, 'index.md'));
        return {
          name: thirdDir,
          displayName: thirdDisplayName || thirdDir,
          link: `/${dir}/${subDir}/${thirdDir}/`,
          order: thirdOrder
        };
      });

      // 对三级目录排序
      thirdLevelContent.sort((a, b) => a.order - b.order);

      // 获取二级目录下的 markdown 文件
      const markdownFiles = getMarkdownFiles(subDirPath);
      markdownFiles.sort((a, b) => a.order - b.order);

      return {
        name: subDir,
        displayName: subDisplayName || subDir,
        link: `/${dir}/${subDir}/`,
        order: subOrder,
        thirdLevelContent,
        markdownFiles
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
          <th>二级分类</th>
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
          <td class="category-name" rowspan="1">${categoryDisplayName}</td>
          <td class="sub-category-name">暂无二级目录</td>
          <td class="content-links">暂无内容</td>
        </tr>
`;
    } else {
      // 有二级目录的情况
      let isFirstRow = true;
      for (const subDir of dirInfo.subDirectories) {
        const rowspan = isFirstRow ? dirInfo.subDirectories.length : 0;
        const categoryCell = isFirstRow ? `          <td class="category-name" rowspan="${dirInfo.subDirectories.length}">${categoryDisplayName}</td>` : '';
        
        // 合并三级目录和 markdown 文件
        const allContent = [
          ...subDir.thirdLevelContent.map(third => ({
            ...third,
            type: 'directory'
          })),
          ...subDir.markdownFiles.map(file => ({
            ...file,
            type: 'file'
          }))
        ].sort((a, b) => a.order - b.order);

        if (allContent.length === 0) {
          // 如果没有内容，显示空内容
          homeContent += `        <tr>
${categoryCell}          <td class="sub-category-name">${subDir.displayName}</td>
          <td class="content-links">暂无内容</td>
        </tr>
`;
        } else {
          // 有内容的情况
          const links = allContent.map(item => 
            `<a href="${item.link}" class="content-link">${item.displayName}</a>`
          ).join(' · ');
          
          homeContent += `        <tr>
${categoryCell}          <td class="sub-category-name">${subDir.displayName}</td>
          <td class="content-links">${links}</td>
        </tr>
`;
        }
        isFirstRow = false;
      }
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
`;

  // 写入首页文件
  const indexPath = path.join(docsDir, 'index.md');
  fs.writeFileSync(indexPath, homeContent);
  
  console.log('首页内容生成完成');
  console.log('生成的内容预览:');
  console.log(homeContent.substring(0, 500) + '...');
}

genHomePage().catch(console.error); 

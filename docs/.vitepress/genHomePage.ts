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
  const columns: any[] = [];

  // 遍历一级目录
  for (const dir of firstLevelDirs) {
    const dirPath = path.join(docsDir, dir);
    const displayName = getDirectoryDisplayName(dirPath, dir);
    const finalDisplayName = categoryNameMap[dir] || displayName || dir;
    const order = getOrderFromMd(path.join(dirPath, 'index.md'));
    const categoryIcon = categoryIconMap[finalDisplayName] || categoryIconMap[dir] || '📁';
    
    // 查询二级目录列表
    const subDirs = fs.readdirSync(dirPath).filter(subDir => 
      fs.statSync(path.join(dirPath, subDir)).isDirectory() && 
      !subDir.startsWith('.')
    );

    console.log(`${dir} 的二级分类: ` + subDirs);

    const sections: any[] = [];
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

      // 为每个二级目录创建一个链接项
      sections.push({
        displayName: subDisplayName,
        link: `/${dir}/${subDir}/`
      });

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

    // 获取一级目录下的 markdown 文件（除了 index.md）
    const firstLevelMarkdownFiles = getMarkdownFiles(dirPath);
    firstLevelMarkdownFiles.sort((a, b) => a.order - b.order);

    // 将一级目录的 markdown 文件也添加到 sections
    const allItems = [
      ...sections,
      ...firstLevelMarkdownFiles.map(file => ({
        displayName: file.displayName,
        link: file.link
      }))
    ];

    // 合并后按 order 重新排序
    const sortedItems = [
      ...sections.map((s, idx) => ({ ...s, order: subDirectories[idx]?.order ?? Infinity })),
      ...firstLevelMarkdownFiles.map(f => ({ displayName: f.displayName, link: f.link, order: f.order }))
    ].sort((a, b) => a.order - b.order);

    // 为每个一级目录生成一列
    columns.push({
      id: dir,
      icon: categoryIcon,
      title: finalDisplayName,
      order: order,
      items: sortedItems.map(item => ({ displayName: item.displayName, link: item.link }))
    });

    directoryInfos.push({
      name: dir,
      displayName: finalDisplayName,
      order,
      subDirectories
    });
  }

  // 对一级目录排序
  directoryInfos.sort((a, b) => a.order - b.order);
  
  // 对列排序
  columns.sort((a, b) => a.order - b.order);

  // 准备HomePage组件的数据
  const homePageData = {
    hero: {
      title: '极简编程',
      description: '编程如此简单！'
    },
    columns: columns.map(col => ({
      id: col.id,
      icon: col.icon,
      title: col.title,
      items: col.items
    }))
  };

  // 生成首页内容
  const homeContent = `---
editLink: false
isHomePage: true
---

<script setup>
const pageData = ${JSON.stringify(homePageData, null, 2)};
</script>

<HomePage :hero="pageData.hero" :columns="pageData.columns" />
`;

  // 写入首页文件
  const indexPath = path.join(docsDir, 'index.md');
  fs.writeFileSync(indexPath, homeContent);
  
  console.log('首页内容生成完成');
  console.log('生成的内容预览:');
  console.log(homeContent.substring(0, 500) + '...');
}

genHomePage().catch(console.error); 

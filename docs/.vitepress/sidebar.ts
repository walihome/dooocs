import fs from 'fs'
import path from 'path'

const isNode = typeof process !== 'undefined' && process.versions && process.versions.node
const __dirname = isNode ? path.dirname(new URL(import.meta.url).pathname) : '/'

interface SidebarItem {
  text: string;
  link?: string;
  items?: SidebarItem[];
  collapsible?: boolean;
  collapsed?: boolean;
}

interface LayoutConfig {
  root?: boolean;
}

interface Frontmatter {
  pageType?: 'home' | 'custom' | 'doc';
  layout?: LayoutConfig;
  title?: string;
  order?: number;
  colla?: boolean;
}

function getCollaFromMd(filePath: string): boolean {
  const fullPath = path.join(isNode ? path.dirname(__dirname) : '', filePath)
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8')
    const collaMatch = content.match(/^colla:\s*(.*)$/m)
    if (collaMatch) {
      return collaMatch[1].trim().toLowerCase() === 'true'
    }
  }
  return false
}

function getOrderFromMd(filePath: string): number {
  const fullPath = path.join(isNode ? path.dirname(__dirname) : '', filePath)
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8')
    const orderMatch = content.match(/^order:\s*(\d+)$/m)
    if (orderMatch) {
      return parseInt(orderMatch[1], 10)
    }
  }
  return Infinity
}

function generateSidebar(dir: string, basePath: string = ''): SidebarItem[] {
  const fullPath = path.join(path.dirname(__dirname), dir)
  if (!fs.existsSync(fullPath)) {
    console.warn(`Warning: Directory ${fullPath} does not exist. Skipping sidebar generation for this path.`)
    return []
  }

  const files = fs.readdirSync(fullPath)
  const sidebarItems: (SidebarItem & { order: number })[] = []

  for (const file of files) {
    const filePath = path.join(dir, file)
    const fullFilePath = path.join(isNode ? path.dirname(__dirname) : '', filePath)
    const stat = fs.statSync(fullFilePath)

    if (stat.isDirectory()) {
      // 确保路径拼接时没有双斜杠
      const newBasePath = basePath.endsWith('/') ? `${basePath}${file}` : `${basePath}/${file}`
      const children = generateSidebar(filePath, newBasePath)
      if (children.length > 0) {
        sidebarItems.push({
          text: getTitleFromMd(path.join(dir, file, 'index.md')),
          collapsible: true,
          collapsed: getCollaFromMd(path.join(dir, file, 'index.md')),
          items: children,
          order: getOrderFromMd(path.join(dir, file, 'index.md'))
        })
      }
    } else if (path.extname(file) === '.md' && file !== 'index.md') {
      // 确保路径拼接时没有双斜杠
      const link = basePath.endsWith('/') ? `${basePath}${path.basename(file, '.md')}` : `${basePath}/${path.basename(file, '.md')}`
      sidebarItems.push({
        text: getTitleFromMd(path.join(dir, file)),
        link: link,
        order: getOrderFromMd(path.join(dir, file))
      })
    }
  }

  sidebarItems.sort((a, b) => a.order - b.order)
  return sidebarItems.map(({ order, ...item }) => item)
}

function getDirectories(source: string): string[] {
  return fs.readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.') && !['dist', 'node_modules'].includes(dirent.name))
    .map(dirent => dirent.name)
}

function getTitleFromMd(filePath: string): string {
  const fullPath = path.join(isNode ? path.dirname(__dirname) : '', filePath)
  if (fs.existsSync(fullPath)) {
    const content = fs.readFileSync(fullPath, 'utf-8')
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1] 
      const titleMatch = frontmatter.match(/title:\s*(.*)/)
      console.log('titleMatch:', titleMatch);
      if (titleMatch) {
        return titleMatch[1].trim()
      }
    }
  }
  return path.basename(path.dirname(filePath))
}

function getFrontmatter(filePath: string): Frontmatter | null {
  const fullPath = path.join(isNode ? path.dirname(__dirname) : '', filePath)
  if (!fs.existsSync(fullPath)) {
    return null
  }
  
  const content = fs.readFileSync(fullPath, 'utf-8')
  const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/)
  
  if (!frontmatterMatch) {
    return null
  }
  
  const frontmatter = frontmatterMatch[1]
  const result: Frontmatter = {}
  
  // Parse pageType
  const pageTypeMatch = frontmatter.match(/pageType:\s*(.*)/)
  if (pageTypeMatch) {
    result.pageType = pageTypeMatch[1].trim() as 'home' | 'custom' | 'doc'
  }
  
  // Parse layout.root (支持多种格式)
  const layoutRootMatch = frontmatter.match(/layout:\s*\n[\s]*root:\s*(.*)/)
  if (layoutRootMatch) {
    const rootValue = layoutRootMatch[1].trim().toLowerCase()
    result.layout = {
      root: rootValue === 'true' || rootValue === 'ture' // 兼容拼写错误
    }
  }
  
  // Parse title
  const titleMatch = frontmatter.match(/title:\s*(.*)/)
  if (titleMatch) {
    result.title = titleMatch[1].trim()
  }
  
  // Parse order
  const orderMatch = frontmatter.match(/order:\s*(\d+)/)
  if (orderMatch) {
    result.order = parseInt(orderMatch[1], 10)
  }
  
  // Parse colla
  const collaMatch = frontmatter.match(/colla:\s*(.*)/)
  if (collaMatch) {
    result.colla = collaMatch[1].trim().toLowerCase() === 'true'
  }
  
  return result
}

function getPageType(filePath: string): 'home' | 'custom' | 'doc' {
  const frontmatter = getFrontmatter(filePath)
  return frontmatter?.pageType || 'doc'
}

function isRootLayout(filePath: string): boolean {
  const frontmatter = getFrontmatter(filePath)
  return frontmatter?.layout?.root || false
}


const docsPath = path.dirname(__dirname)
const directories = getDirectories(docsPath).filter(dir => dir !== '.vitepress')

const sidebar: Record<string, SidebarItem[]> = {}

// 检查目录下是否有子目录（排除只有 md 文件的情况）
function hasSubDirectories(dirPath: string): boolean {
    const fullPath = path.join(docsPath, dirPath)
    if (!fs.existsSync(fullPath)) {
        return false
    }
    const subDirs = getDirectories(fullPath)
    return subDirs.length > 0
}

// 递归生成所有层级的 sidebar 配置
function generateAllSidebars(dirPath: string, urlPath: string) {
    const indexPath = path.join(dirPath, 'index.md')
    const pageType = getPageType(indexPath)
    const isRoot = isRootLayout(indexPath)
    
    // 如果 pageType 是 home 或 custom，跳过 sidebar 生成
    if (pageType === 'home' || pageType === 'custom') {
        return
    }
    
    // 如果是 root layout，该目录下所有文件展示在一个知识库里
    if (isRoot) {
        sidebar[urlPath] = generateSidebar(dirPath, urlPath)
        // root 目录不再递归生成子目录的 sidebar，所有内容都在当前 sidebar 中
        return
    }
    
    // 为当前目录生成 sidebar
    sidebar[urlPath] = generateSidebar(dirPath, urlPath)
    
    // 获取当前目录下的所有子目录
    const fullPath = path.join(docsPath, dirPath)
    if (!fs.existsSync(fullPath)) {
        return
    }
    
    const subDirs = getDirectories(fullPath)
    
    // 递归为每个子目录生成 sidebar
    subDirs.forEach(subDir => {
        const subDirPath = path.join(dirPath, subDir)
        const subUrlPath = `${urlPath}${subDir}/`
        
        // 只有当子目录本身还有子目录时，才为其生成独立的 sidebar
        // 否则内容会包含在父级 sidebar 中
        if (hasSubDirectories(subDirPath)) {
            generateAllSidebars(subDirPath, subUrlPath)
        } else {
            // 叶子目录：检查是否有特殊配置
            const subIndexPath = path.join(subDirPath, 'index.md')
            const subPageType = getPageType(subIndexPath)
            const subIsRoot = isRootLayout(subIndexPath)
            
            // 如果有特殊配置，仍然生成独立 sidebar
            if (subPageType !== 'doc' || subIsRoot) {
                generateAllSidebars(subDirPath, subUrlPath)
            }
            // 否则不生成，让父级 sidebar 包含这些内容
        }
    })
}

directories.forEach(dir => {
    // 跳过文件夹名称为 'public' 的文件夹
    if (dir === 'public') {
        return;
    }
    const dirPath = path.join(docsPath, dir)
    const secondLevelDirectories = getDirectories(dirPath)
    
    // 如果有二级目录，为每个二级目录生成 sidebar
    if (secondLevelDirectories.length > 0) {
        secondLevelDirectories.forEach(subDir => {
            // 递归生成所有层级的 sidebar
            generateAllSidebars(`${dir}/${subDir}`, `/${dir}/${subDir}/`)
        })
    } else {
        // 如果没有二级目录，但一级目录下有内容，直接为一级目录生成 sidebar
        const indexPath = path.join(dir, 'index.md')
        const pageType = getPageType(indexPath)
        // 只有当 pageType 是 doc 时才生成 sidebar
        if (pageType === 'doc' || fs.existsSync(path.join(dirPath, 'index.md'))) {
            sidebar[`/${dir}/`] = generateSidebar(dir, `/${dir}`)
        }
    }
})

export { sidebar }

console.log('Sidebar.ts is being executed');

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
      const children = generateSidebar(filePath, `${basePath}/${file}`)
      if (children.length > 0) {
        sidebarItems.push({
          text: getTitleFromMd(path.join(dir, file, 'index.md')),
          collapsible: true,
          collapsed: getCollaFromMd(path.join(dir, file, 'index.md')),
          items: children,
          order: getOrderFromMd(path.join(dir, file, 'index.md'))
        })
      }
    } else if (path.extname(file) === '.md') {
      sidebarItems.push({
        text: getTitleFromMd(path.join(dir, file)),
        link: `${basePath}/${path.basename(file, '.md')}`,
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


const docsPath = path.dirname(__dirname)
const directories = getDirectories(docsPath).filter(dir => dir !== '.vitepress')

// 开始执行sidebar 日志
console.log('开始执行sidebar 日志');
//  打印目录
console.log('目录:', directories);

const sidebar: Record<string, SidebarItem[]> = {}

directories.forEach(dir => {
    // 跳过文件夹名称为 'public' 的文件夹
    if (dir === 'public') {
        return;
    }
    const secondLevelDirectories = getDirectories(path.join(docsPath, dir))
    secondLevelDirectories.forEach(subDir => {
        sidebar[`/${dir}/${subDir}/`] = generateSidebar(`${dir}/${subDir}`, `/${dir}/${subDir}`)
    })

    // 打印sidebar
    console.log('sidebar生成完成:', sidebar);
})

export { sidebar }

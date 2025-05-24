import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(process.cwd(), 'docs');

// 递归获取目录下所有文件和子目录
function getAllFilesAndDirs(dirPath: string, basePath: string = '', level: number = 0): string[] {
	const items: string[] = [];
	const files = fs.readdirSync(dirPath);
	
	// 创建缩进 - 在VitePress中使用&nbsp;确保缩进显示
	const indent = '&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(level);
	
	// 创建文件信息数组用于排序
	const fileItems: Array<{
		name: string;
		fullPath: string;
		relativePath: string;
		stat: fs.Stats;
		order: number;
	}> = [];
	
	// 收集文件信息
	for (const file of files) {
		if (file.startsWith('.') || file === 'index.md') {
			continue; // 跳过隐藏文件和index.md
		}
		
		const fullPath = path.join(dirPath, file);
		const relativePath = basePath ? `${basePath}/${file}` : file;
		const stat = fs.statSync(fullPath);
		
		// 获取文件或目录的order值
		let order = Infinity;
		if (stat.isDirectory()) {
			// 目录的order从index.md获取
			order = getOrderFromMd(path.join(fullPath, 'index.md'));
		} else if (path.extname(file) === '.md') {
			// Markdown文件的order从文件本身获取
			order = getOrderFromMd(fullPath);
		}
		
		fileItems.push({
			name: file,
			fullPath,
			relativePath,
			stat,
			order
		});
	}
	
	// 按order排序，数字越小越靠前
	fileItems.sort((a, b) => a.order - b.order);
	
	// 处理排序后的文件
	for (const fileItem of fileItems) {
		const { name: file, fullPath, relativePath, stat } = fileItem;
		
		if (stat.isDirectory()) {
			// 目录用黄色文件夹图标，加粗显示
			items.push(`${indent}📁 **${file}/**`);
			items.push(''); // 空行确保换行
			
			// 递归获取子目录内容，增加层级
			const subItems = getAllFilesAndDirs(fullPath, relativePath, level + 1);
			items.push(...subItems);
			
			// 在同级目录间添加分隔
			if (level === 0) {
				items.push(''); // 顶级目录后添加空行
			}
		} else if (path.extname(file) === '.md') {
			// Markdown文件用彩色文档图标，显示标题和文件名
			const title = getTitleFromMd(fullPath);
			const fileName = path.basename(file, '.md');
			const displayText = title && title !== fileName ? `${title} (${fileName})` : fileName;
			
			// VitePress链接格式，确保能正确跳转
			const linkPath = relativePath.replace(/\.md$/, '');
			items.push(`${indent}📝 [${displayText}](./${linkPath})`);
			items.push(''); // 空行确保换行
		} else {
			// 其他文件用通用图标
			const fileName = path.basename(file);
			let icon = '📄'; // 默认图标
			
			// 根据文件类型使用不同的彩色图标
			const ext = path.extname(file).toLowerCase();
			switch (ext) {
				case '.png':
				case '.jpg':
				case '.jpeg':
				case '.gif':
				case '.webp':
					icon = '🖼️';
					break;
				case '.pdf':
					icon = '📕';
					break;
				case '.txt':
					icon = '📝';
					break;
				case '.json':
					icon = '📋';
					break;
				case '.js':
				case '.ts':
					icon = '⚡';
					break;
				case '.css':
					icon = '🎨';
					break;
				case '.html':
					icon = '🌐';
					break;
				case '.xml':
					icon = '📰';
					break;
				case '.yml':
				case '.yaml':
					icon = '⚙️';
					break;
				default:
					icon = '📄';
			}
			
			items.push(`${indent}${icon} ${fileName}`);
			items.push(''); // 空行确保换行
		}
	}
	
	return items;
}

// 获取Markdown文件的order值
function getOrderFromMd(filePath: string): number {
	try {
		if (fs.existsSync(filePath)) {
			const content = fs.readFileSync(filePath, 'utf-8');
			const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
			if (frontmatterMatch) {
				const frontmatter = frontmatterMatch[1];
				const orderMatch = frontmatter.match(/order:\s*(\d+)$/m);
				if (orderMatch) {
					return parseInt(orderMatch[1], 10);
				}
			}
		}
	} catch (error) {
		console.warn(`读取文件order失败: ${filePath}`, error);
	}
	return Infinity;
}

// 获取Markdown文件的标题
function getTitleFromMd(filePath: string): string {
	try {
		if (fs.existsSync(filePath)) {
			const content = fs.readFileSync(filePath, 'utf-8');
			
			// 先尝试从frontmatter获取标题
			const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
			if (frontmatterMatch) {
				const frontmatter = frontmatterMatch[1];
				const titleMatch = frontmatter.match(/title:\s*(.*)$/m);
				if (titleMatch) {
					return titleMatch[1].trim().replace(/['"]/g, '');
				}
			}
			
			// 如果frontmatter没有标题，尝试获取第一个h1标题
			const h1Match = content.match(/^#\s+(.*)$/m);
			if (h1Match) {
				return h1Match[1].trim();
			}
		}
	} catch (error) {
		console.warn(`读取文件标题失败: ${filePath}`, error);
	}
	
	return '';
}

async function genIndex() {
	console.log('开始生成索引');

	// 查询一级目录列表
	const firstLevelDirs = fs.readdirSync(docsDir).filter(dir => 
		fs.statSync(path.join(docsDir, dir)).isDirectory() && 
		!dir.startsWith('.') && 
		dir !== 'public' // 跳过public目录
	);

	console.log("一级目录: " + firstLevelDirs);

	// 遍历每个一级目录
	for (const firstDir of firstLevelDirs) {
		const firstDirPath = path.join(docsDir, firstDir);
		
		// 查询二级目录列表（知识库）
		const secondLevelDirs = fs.readdirSync(firstDirPath).filter(dir => 
			fs.statSync(path.join(firstDirPath, dir)).isDirectory() && 
			!dir.startsWith('.')
		);

		console.log(`${firstDir} 下的知识库目录: ` + secondLevelDirs);

		// 遍历每个知识库目录（二级目录）
		for (const knowledgeBase of secondLevelDirs) {
			const knowledgeBasePath = path.join(firstDirPath, knowledgeBase);
			console.log(`处理知识库: ${firstDir}/${knowledgeBase}`);
			
			if (!fs.existsSync(knowledgeBasePath)) {
				console.log(`目录 ${knowledgeBasePath} 不存在，跳过`);
				continue;
			}

			// 获取该知识库下的所有文件和目录
			const allItems = getAllFilesAndDirs(knowledgeBasePath);
			
			if (allItems.length === 0) {
				console.log(`知识库 ${firstDir}/${knowledgeBase} 为空，跳过`);
				continue;
			}

			// 生成index.md内容
			const indexPath = path.join(knowledgeBasePath, 'index.md');
			let indexContent = `---\ntitle: ${knowledgeBase}\norder: 1\ncolla: false\n---\n\n`;
			
			// 添加CSS样式去掉链接下划线
			indexContent += `<style>\n.content a {\n  text-decoration: none;\n}\n.content a:hover {\n  text-decoration: underline;\n}\n</style>\n\n`;
			
			indexContent += `# ${knowledgeBase}\n\n`;
			indexContent += `这个知识库包含以下内容：\n\n`;
			
			for (const item of allItems) {
				indexContent += `${item}\n`;
			}
			
			// 打印并写入文件
			console.log("indexPath: " + indexPath);
			console.log("indexContent: " + indexContent);
			fs.writeFileSync(indexPath, indexContent);
		}
	}
	
	console.log('索引生成完成');
}

genIndex().catch(console.error);

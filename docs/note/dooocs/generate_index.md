---
title: 生成目录部分代码
order: 4
head:
  - - meta
    - name: description
      content: 生成目录代码
  - - meta
    - name: keywords
      content: 生成 目录
---

# 目录生成代码

```js
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const docsDir = path.join(process.cwd(), 'docs');

async function genIndex() {
	console.log('开始生成索引');


    // 查询二级目录列表
    const dirs = fs.readdirSync(docsDir).filter(dir => 
        fs.statSync(path.join(docsDir, dir)).isDirectory() && !dir.startsWith('.')
    );

    // 打印二级目录
    console.log("二级目录: " + dirs)

    // 遍历二级目录
    for (const dir of dirs) {
	// 跳过文件夹名称为 'public' 的文件夹
	    if (dir === 'public') {
		continue;
	    }
        const dirPath = path.join(docsDir, dir);
        console.log(`创建目录: ${dirPath}`);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        // 查询三级目录列表
        const subDirs = fs.readdirSync(dirPath).filter(subDir => 
            fs.statSync(path.join(dirPath, subDir)).isDirectory() && !subDir.startsWith('.')
        );

        // 打印三级目录
        console.log("三级目录: " + subDirs)
        // 如果目录为空就不执行，跳过
        if (subDirs.length === 0) {
            console.log(`目录 ${dirPath} 为空，跳过`);
            continue;
        }

        // 为三级目录生成url，作为一个列表写入到二级目录下的index.md文件中
        const indexPath = path.join(dirPath, 'index.md');
        let indexContent = `# ${dir}\n\n`;
        for (const subDir of subDirs) {
            indexContent += `- [${subDir}](./${subDir}/index.md)\n`;
        }
        // 打印indexContent
        console.log("indexPath: " + indexPath)
        console.log("indexContent: " + indexContent)
        fs.writeFileSync(indexPath, indexContent);
    }
	
	console.log('索引生成完成');
}

genIndex().catch(console.error);
```

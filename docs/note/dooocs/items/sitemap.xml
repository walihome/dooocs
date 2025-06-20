---
title: sitemap方案
order: 10
---
# 网站sitemap方案

在现代Web开发中，我们常常会将一个主应用（如React/Vue开发的SPA）和一个静态内容站点（如VitePress/Hugo生成的文档或博客）通过CDN的路径规则整合在同一个域名下对外提供服务。这种架构虽然高效，但却带来了一个常见问题：**如何将两个独立生成的Sitemap合并，以便向搜索引擎正确提交？**

本文将提供一个标准且高效的解决方案：**使用Sitemap索引文件（Sitemap Index File）**。

## 核心思路：Sitemap索引文件

Sitemap索引文件是Sitemaps协议的一部分。它本身是一个XML文件，但不直接包含URL，而是列出您网站上所有独立的Sitemap文件的地址。搜索引擎会首先抓取这个索引文件，然后根据其中的列表去抓取所有子Sitemap。

这完美地解决了我们的问题，基本流程如下：

1.  **各自生成**：保持React网站和VitePress静态站各自生成自己的Sitemap。
2.  **创建索引**：创建一个名为 `sitemap.xml` 的索引文件，其内容指向所有子Sitemap。
3.  **统一入口**：将这个 `sitemap.xml` 索引文件放置在主域名的根目录下。
4.  **CDN配置**：确保CDN可以正确访问到索引文件和所有子Sitemap文件。
5.  **提交**：向Google Search Console、百度资源平台等搜索引擎提交这一个 `sitemap.xml` 索引文件的地址即可。

---

## 方案一：通过CI/CD自动化（推荐方案）

这是最健壮、一劳永逸的方法。通过在CI/CD流水线中增加一个脚本，可以实现Sitemap索引的自动生成和部署，无需人工干预。

### 第一步：重命名各自的Sitemap

为了避免文件名冲突，我们需要在各自的项目中指定生成的Sitemap文件名。

*   **React项目**：修改sitemap生成工具的配置，将输出文件命名为 `sitemap-react.xml`。
*   **VitePress项目**：修改相关插件（如 `vitepress-plugin-sitemap`）的配置，将输出文件命名为 `sitemap-vitepress.xml`。

### 第二步：编写索引生成脚本

在CI/CD环境中，当两个站点的构建都完成后，我们可以用一个简单的Node.js脚本来创建索引文件。

首先，需要一个XML处理库：
```bash
npm install xmlbuilder2
```

然后，创建一个脚本 `create-sitemap-index.js`：

```javascript
// create-sitemap-index.js
const { create } = require('xmlbuilder2');
const fs = require('fs');
const path = require('path');

// 你的主域名
const DOMAIN = 'https://www.yourdomain.com';

// 定义所有子Sitemap的最终URL
const sitemapUrls = [
  `${DOMAIN}/sitemap-react.xml`,
  `${DOMAIN}/sitemap-vitepress.xml`
];

// 创建Sitemap索引文件的XML结构
const root = create({ version: '1.0', encoding: 'UTF-8' })
  .ele('sitemapindex', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

sitemapUrls.forEach(url => {
  const sitemap = root.ele('sitemap');
  sitemap.ele('loc').txt(url);
  sitemap.ele('lastmod').txt(new Date().toISOString()); // 可选，但建议加上
});

const xml = root.end({ prettyPrint: true });

// 假设此脚本在项目根目录运行，并将sitemap.xml写入主应用（React）的构建输出目录
const outputPath = path.resolve(__dirname, 'react-app/build/sitemap.xml');
fs.writeFileSync(outputPath, xml);

console.log(`Sitemap index file created successfully at: ${outputPath}`);
```

### 第三步：整合到CI/CD流水线 (以GitHub Actions为例)

下面是一个简化的GitHub Actions工作流，演示了如何将上述步骤整合起来。

```yaml
# .github/workflows/deploy.yml
name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build_and_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      # --- 构建React应用 (生成 sitemap-react.xml) ---
      - name: Build React App
        run: |
          cd react-app # 进入React项目目录
          npm install
          npm run build # 构建命令，产物在 react-app/build

      # --- 构建VitePress站点 (生成 sitemap-vitepress.xml) ---
      - name: Build VitePress Site
        run: |
          cd vitepress-site # 进入VitePress项目目录
          npm install
          npm run docs:build # 构建命令，产物在 vitepress-site/docs/.vitepress/dist

      # --- 统一Sitemap ---
      - name: Unify Sitemaps
        run: |
          # 1. 将VitePress的sitemap复制到React的构建目录，方便统一上传
          cp vitepress-site/docs/.vitepress/dist/sitemap-vitepress.xml react-app/build/
          
          # 2. 安装依赖并运行脚本，生成 sitemap.xml 索引文件
          npm install xmlbuilder2
          node create-sitemap-index.js

      # --- 部署到OSS ---
      - name: Deploy to Alibaba Cloud OSS
        uses: aliyun/oss-upload-action@v1
        with:
          access-key-id: ${{ secrets.OSS_ACCESS_KEY_ID }}
          access-key-secret: ${{ secrets.OSS_ACCESS_KEY_SECRET }}
          bucket: your-bucket-name
          endpoint: oss-cn-hangzhou.aliyuncs.com
          # 上传React构建目录，现在它包含了3个sitemap文件和所有应用代码
          source-folder: react-app/build 
          destination-folder: / # 上传到Bucket根目录

      # --- 刷新CDN缓存（重要） ---
      - name: Refresh CDN Cache
        # 使用阿里云CLI或其他工具刷新CDN缓存，确保sitemap.*.xml文件是最新版本
        run: |
          aliyun cdn RefreshObjectCaches --ObjectPath "/sitemap.xml" --ObjectType File
          aliyun cdn RefreshObjectCaches --ObjectPath "/sitemap-react.xml" --ObjectType File
          aliyun cdn RefreshObjectCaches --ObjectPath "/sitemap-vitepress.xml" --ObjectType File
```

---

## 方案二：手动创建与配置（适用于更新不频繁的站点）

如果你的站点内容更新不频繁，或者不想配置复杂的CI/CD，也可以手动完成。

1.  **生成并重命名文件**：
    在本地分别构建两个项目，找到生成的Sitemap文件，并将它们重命名为 `sitemap-react.xml` 和 `sitemap-vitepress.xml`。

2.  **手动创建索引文件**：
    在你的电脑上，创建一个新文件 `sitemap.xml`，并填入以下内容（记得替换成你自己的域名）：

    ```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <sitemap>
          <loc>https://www.yourdomain.com/sitemap-react.xml</loc>
       </sitemap>
       <sitemap>
          <loc>https://www.yourdomain.com/sitemap-vitepress.xml</loc>
       </sitemap>
    </sitemapindex>
    ```

3.  **上传到OSS**：
    *   将 `sitemap.xml` 和 `sitemap-react.xml` 上传到你的**主应用（React）**所在的OSS Bucket根目录。
    *   将 `sitemap-vitepress.xml` 上传到你的**静态站点（VitePress）**所在的OSS Bucket根目录或相应路径。

4.  **检查CDN路径规则**：
    这是手动操作中最关键的一步。你需要确保CDN的路径规则能正确地将请求转发到对应的OSS文件。
    *   `https://www.yourdomain.com/sitemap.xml` -> 应回源到React站点的OSS。
    *   `https://www.yourdomain.com/sitemap-react.xml` -> 应回源到React站点的OSS。
    *   `https://www.yourdomain.com/sitemap-vitepress.xml` -> 需要确保此路径能回源到VitePress站点的OSS。如果你的回源规则是按目录（如 `/docs/*`）划分的，你可能需要为这个特定文件**添加一条新的路径规则**。

---

## 最终验证与提交

无论使用哪种方案，完成配置后，请务必进行以下验证：

1.  **浏览器访问**：在浏览器中依次打开以下链接，确保它们都能正常返回XML内容，而不是404或错误页面。
    *   `https://www.yourdomain.com/sitemap.xml`
    *   `https://www.yourdomain.com/sitemap-react.xml`
    *   `https://www.yourdomain.com/sitemap-vitepress.xml`

2.  **提交给搜索引擎**：
    登录Google Search Console或其他搜索引擎的站长平台，在Sitemap管理部分，**只需提交索引文件的URL**：
    
    `https://www.yourdomain.com/sitemap.xml`

3.  **检查收录状态**：
    提交后，等待搜索引擎处理。你将会在后台看到它成功识别出Sitemap索引，并列出其中包含的两个子Sitemap及其URL数量。

通过以上方法，你就可以优雅且标准地管理多个站点统一域名下的Sitemap了。

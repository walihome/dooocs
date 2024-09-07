#!/bin/bash

# 设置 docs 目录的路径
DOCS_DIR="./docs"

# 使用 find 命令查找所有的 README.md 文件并重命名
find "$DOCS_DIR" -type f -iname "readme.md" | while read file; do
    dir=$(dirname "$file")
    mv "$file" "$dir/index.md"
    echo "Renamed: $file -> $dir/index.md"
done

echo "Renaming complete."

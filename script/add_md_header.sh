#!/bin/bash

# 定义一个函数来打印文件的第一行
print_first_line() {
    local file="$1"
    if [ -f "$file" ]; then
        local first_line=$(head -n 1 "$file")
        echo "文件 $file 的第一行是: $first_line"
    else
        echo "文件 $file 不存在"
    fi
}


# 遍历docs目录下的所有md文件
find docs -name "*.md" | while read -r file; do
    # 跳过 docs/index.md 文件
    if [ "$file" != "docs/index.md" ]; then
        # 检查文件的第一行
        first_line=$(head -n 1 "$file")
        if [ "$first_line" != "---" ]; then
            echo "文件 $file 的第一行是: $first_line"

            # 在文件开头添加指定内容
            # 在这里，'1i' 的含义是:
            # 1 - 表示在第一行
            # i - 表示插入（insert）
            # 所以 '1i' 的意思是在文件的第一行之前插入新的内容
            sed -i '' '1i\
---\
title: 文档\
colla: true\
order: 50\
head:\
  - - meta\
    - name: dooocs\
      content: 最详细的文档库\
---\
' "$file"
            
            # 检查是否添加成功
            if grep -q "^---$" "$file" && grep -q "title: 文档" "$file"; then
                echo "已成功在 $file 文件开头添加指定内容"
            else
                echo "在 $file 文件开头添加指定内容失败"
            fi
        fi
    fi
done
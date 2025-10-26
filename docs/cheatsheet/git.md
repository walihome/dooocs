---
title: Git
sidebar: false
single: true
order: 3
---

<script setup>
const cheatsheetData = [
  {
    title: '配置',
    items: [
      {
        title: '用户信息',
        code: `git config --global user.name "Your Name"
git config --global user.email "email@example.com"
git config --list          # 查看所有配置
git config user.name       # 查看特定配置
git config --system   # 系统级（所有用户）
git config --global   # 用户级（当前用户）
git config --local    # 仓库级（当前仓库，默认）`,
        language: 'bash',
         width: 'half' 
      },
      {
        title: '配置别名',
        code: `git config --global alias.s status
git config --global alias.co checkout
git config --global alias.b branch
git config --global alias.cm commit
`,
        language: 'bash',
         width: 'half' 
      }
    ]
  },
  {
    title: '初始化',
    items: [
      {
        title: '创建仓库',
        code: `git init               # 初始化本地仓库
git init project       # 创建并初始化项目目录
git clone url          # 克隆远程仓库
git clone url dir      # 克隆到指定目录`,
        language: 'bash',
         width: 'half' 
      },
      {
        title: '克隆选项',
        code: `git clone --depth 1 url        # 浅克隆（仅最新提交）
git clone --branch dev url     # 克隆指定分支
git clone --single-branch url  # 仅克隆一个分支`,
        language: 'bash',
         width: 'half' 
      }
    ]
  },
  {
    title: '基本操作',
    items: [
      {
        title: '查看状态',
        code: `git status             # 查看状态
git status -s          # 简短输出
git status -b          # 显示分支信息
git diff               # 查看未暂存的修改
git diff --staged      # 查看已暂存的修改`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '添加文件',
        code: `git add file.txt       # 添加单个文件
git add .              # 添加所有文件
git add *.js           # 添加所有js文件
git add -p             # 交互式添加（部分添加）`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '提交',
        code: `git commit -m "message"        # 提交
git commit -am "message"       # 添加并提交（已跟踪文件）
git commit --amend             # 修改最近一次提交
git commit --amend --no-edit   # 修改提交但不改消息`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '撤销操作',
        code: `git restore file.txt   # 撤销工作区修改
git restore --staged file.txt  # 取消暂存
git reset HEAD~1       # 撤销最近一次提交（保留修改）
git reset --hard HEAD~1 # 撤销提交并丢弃修改
git revert commit-hash  # 创建新提交来撤销`,
        language: 'bash',
         width: 'half' 
      },
      {
        title: '删除文件',
        code: `git rm file.txt        # 删除文件并暂存
git rm --cached file.txt # 仅从仓库删除（保留本地）
git mv old.txt new.txt # 重命名文件`,
        language: 'bash',
         width: 'half' 
      }
    ]
  },
  {
    title: '分支管理',
    items: [
      {
        title: '分支操作',
        code: `git branch             # 查看本地分支
git branch -a          # 查看所有分支
git branch name        # 创建分支
git branch -d name     # 删除分支
git branch -D name     # 强制删除分支
git branch -m old new  # 重命名分支`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '切换分支',
        code: `git checkout branch    # 切换分支
git checkout -b branch # 创建并切换分支
git switch branch      # 切换分支（新）
git switch -c branch   # 创建并切换（新）`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '合并分支',
        code: `git merge branch       # 合并分支
git merge --no-ff branch # 禁用快速合并
git merge --squash branch # 压缩合并
git merge --abort      # 取消合并`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '变基',
        code: `git rebase branch      # 变基到指定分支
git rebase -i HEAD~3   # 交互式变基最近3次提交
git rebase --continue  # 继续变基
git rebase --abort     # 取消变基`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '分支比较',
        code: `git diff branch1 branch2       # 比较分支
git diff branch1..branch2      # 同上
git diff branch1...branch2     # 比较分支分叉点后的差异
git log branch1..branch2       # 查看差异提交`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '远程操作',
    items: [
      {
        title: '远程仓库',
        code: `git remote             # 查看远程仓库
git remote -v          # 查看远程仓库详细信息
git remote add origin url # 添加远程仓库
git remote remove origin  # 删除远程仓库
git remote rename old new # 重命名远程仓库`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '获取更新',
        code: `git fetch              # 获取远程更新
git fetch origin       # 获取指定远程仓库
git fetch --all        # 获取所有远程仓库
git fetch --prune      # 获取并清理已删除的远程分支`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '拉取',
        code: `git pull               # 拉取并合并
git pull --rebase      # 拉取并变基
git pull origin main   # 从指定远程分支拉取
git pull --ff-only     # 仅快速合并`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '推送',
        code: `git push               # 推送到远程
git push origin main   # 推送到指定分支
git push -u origin main # 推送并设置上游
git push --all         # 推送所有分支
git push --tags        # 推送所有标签
git push --force       # 强制推送（慎用）`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '跟踪分支',
        code: `git branch -vv         # 查看跟踪分支
git branch -u origin/main # 设置上游分支
git push -u origin branch # 推送并设置上游
git checkout --track origin/branch # 创建跟踪分支`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '查看历史',
    items: [
      {
        title: '日志查看',
        code: `git log                # 查看提交历史
git log --oneline      # 单行显示
git log --graph        # 图形化显示
git log --all          # 显示所有分支
git log -n 5           # 显示最近5条
git log --stat         # 显示文件变更统计`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '格式化日志',
        code: `git log --oneline --graph --all --decorate
git log --pretty=format:"%h - %an, %ar : %s"
git log --pretty=oneline
git log --pretty=short
git log --pretty=full`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '筛选日志',
        code: `git log --author="name"        # 按作者
git log --since="2 weeks ago"  # 按时间
git log --until="2024-01-01"   # 截止时间
git log --grep="keyword"       # 按提交消息
git log -- file.txt            # 按文件
git log -S "function"          # 按内容变化`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '查看提交',
        code: `git show commit-hash   # 查看提交详情
git show HEAD          # 查看最新提交
git show HEAD~2        # 查看倒数第3次提交
git show branch:file   # 查看分支上的文件`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '查看差异',
        code: `git diff               # 工作区 vs 暂存区
git diff HEAD          # 工作区 vs 最新提交
git diff --cached      # 暂存区 vs 最新提交
git diff commit1 commit2 # 比较两次提交
git diff branch1 branch2 # 比较分支`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '查看文件历史',
        code: `git log -- file.txt    # 文件提交历史
git log -p file.txt    # 显示文件变更内容
git blame file.txt     # 查看每行最后修改
git log --follow file.txt # 跟踪重命名`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '标签管理',
    items: [
      {
        title: '创建标签',
        code: `git tag v1.0.0         # 创建轻量标签
git tag -a v1.0.0 -m "Release 1.0" # 创建附注标签
git tag v1.0.0 commit-hash # 为指定提交打标签`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '查看标签',
        code: `git tag                # 列出所有标签
git tag -l "v1.*"      # 列出匹配的标签
git show v1.0.0        # 查看标签详情`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '推送标签',
        code: `git push origin v1.0.0 # 推送指定标签
git push origin --tags # 推送所有标签
git push origin :refs/tags/v1.0.0 # 删除远程标签`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '删除标签',
        code: `git tag -d v1.0.0      # 删除本地标签
git push origin --delete v1.0.0 # 删除远程标签`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '暂存',
    items: [
      {
        title: 'stash 操作',
        code: `git stash              # 暂存当前修改
git stash save "message" # 暂存并添加说明
git stash -u           # 包含未跟踪文件
git stash list         # 查看暂存列表
git stash show         # 查看最新暂存`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '恢复暂存',
        code: `git stash pop          # 恢复最新暂存并删除
git stash apply        # 恢复最新暂存（保留）
git stash apply stash@{2} # 恢复指定暂存
git stash drop         # 删除最新暂存
git stash clear        # 清空所有暂存`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '创建分支',
        code: `git stash branch name  # 从暂存创建分支`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '高级操作',
    items: [
      {
        title: 'cherry-pick',
        description: '挑选提交',
        code: `git cherry-pick commit-hash    # 应用指定提交
git cherry-pick commit1 commit2 # 应用多个提交
git cherry-pick --continue     # 继续
git cherry-pick --abort        # 取消`,
        language: 'bash',
        width: 'half'
      },
      {
        title: 'reflog',
        description: '引用日志',
        code: `git reflog             # 查看引用历史
git reflog show branch # 查看分支历史
git reset --hard HEAD@{2} # 恢复到之前的状态`,
        language: 'bash',
        width: 'half'
      },
      {
        title: 'bisect',
        description: '二分查找问题',
        code: `git bisect start       # 开始二分查找
git bisect bad         # 标记当前为坏的
git bisect good commit # 标记好的提交
git bisect reset       # 结束查找`,
        language: 'bash',
        width: 'half'
      },
      {
        title: 'clean',
        description: '清理未跟踪文件',
        code: `git clean -n           # 预览要删除的文件
git clean -f           # 删除未跟踪文件
git clean -fd          # 删除文件和目录
git clean -fX          # 删除被忽略的文件
git clean -fx          # 删除所有未跟踪文件`,
        language: 'bash',
        width: 'half'
      },
      {
        title: 'worktree',
        description: '工作树',
        code: `git worktree add ../path branch # 添加工作树
git worktree list      # 列出工作树
git worktree remove path # 删除工作树
git worktree prune     # 清理工作树`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '子模块',
    items: [
      {
        title: '添加子模块',
        code: `git submodule add url path     # 添加子模块
git submodule init     # 初始化子模块
git submodule update   # 更新子模块
git submodule update --init --recursive # 递归初始化`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '管理子模块',
        code: `git submodule status   # 查看子模块状态
git submodule foreach git pull # 更新所有子模块
git clone --recurse-submodules url # 克隆包含子模块`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '删除子模块',
        code: `git submodule deinit path      # 注销子模块
git rm path            # 删除子模块
rm -rf .git/modules/path # 清理.git目录`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '.gitignore',
    items: [
      {
        title: '忽略规则',
        code: `# 注释
*.log              # 忽略所有.log文件
!important.log     # 不忽略
/temp              # 仅忽略根目录的temp
temp/              # 忽略所有temp目录
**/logs            # 忽略所有logs目录
*.txt              # 忽略所有txt文件`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '常见模式',
        code: `# Node.js
node_modules/
npm-debug.log

# Python
__pycache__/
*.py[cod]
.env

# IDE
.vscode/
.idea/
*.swp`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '全局忽略',
        code: `git config --global core.excludesfile ~/.gitignore_global`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '清除已跟踪文件',
        code: `git rm -r --cached .   # 清除缓存
git add .              # 重新添加
git commit -m "Update .gitignore"`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '冲突解决',
    items: [
      {
        title: '查看冲突',
        code: `git status             # 查看冲突文件
git diff               # 查看冲突内容
git log --merge        # 查看冲突的提交`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '解决冲突',
        code: `# 手动编辑文件，删除冲突标记
<<<<<<< HEAD
当前分支的内容
=======
合并分支的内容
>>>>>>> branch
# 标记为已解决
git add conflicted-file
git commit`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '冲突工具',
        code: `git mergetool          # 使用合并工具
git checkout --ours file   # 使用当前分支版本
git checkout --theirs file # 使用合并分支版本`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '取消合并',
        code: `git merge --abort      # 取消合并
git rebase --abort     # 取消变基`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '最佳实践',
    items: [
      {
        title: '提交信息',
        code: `# 格式
<type>(<scope>): <subject>

<body>

<footer>

# 类型
feat: 新功能
fix: 修复bug
docs: 文档
style: 格式
refactor: 重构
test: 测试
chore: 构建/工具`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '分支命名',
        code: `main/master            # 主分支
develop                # 开发分支
feature/feature-name   # 功能分支
bugfix/bug-name        # 修复分支
hotfix/hotfix-name     # 热修复分支
release/v1.0.0         # 发布分支`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '工作流',
        code: `# 功能开发
git checkout -b feature/new-feature develop
# 开发...
git add .
git commit -m "feat: add new feature"
git checkout develop
git merge --no-ff feature/new-feature
git branch -d feature/new-feature
git push origin develop`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '保持整洁',
        code: `# 定期同步主分支
git checkout main
git pull
git checkout feature-branch
git rebase main

# 压缩提交
git rebase -i HEAD~3

# 清理分支
git branch -d old-branch
git push origin --delete old-branch`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '常用命令组合',
    items: [
      {
        title: '快速提交',
        code: `git add . && git commit -m "message" && git push`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '撤销推送',
        code: `git reset --hard HEAD~1
git push --force`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '同步fork',
        code: `git remote add upstream url
git fetch upstream
git checkout main
git merge upstream/main
git push origin main`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '查找提交',
        code: `git log --all --grep="keyword"
git log --all --oneline | grep "keyword"`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '统计信息',
        code: `git shortlog -sn       # 贡献者统计
git log --author="name" --oneline | wc -l # 提交数
git diff --stat        # 变更统计`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '备份分支',
        code: `git branch backup-branch
git tag backup-tag`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: 'Git Hooks',
    items: [
      {
        title: '常用钩子',
        code: `pre-commit             # 提交前
commit-msg             # 提交消息
pre-push               # 推送前
post-checkout          # 检出后
post-merge             # 合并后`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '创建钩子',
        code: `# .git/hooks/pre-commit
#!/bin/sh
npm test
if [ $? -ne 0 ]; then
  echo "Tests failed"
  exit 1
fi

chmod +x .git/hooks/pre-commit`,
        language: 'bash',
        width: 'half'
      },
      {
        title: 'husky',
        description: '现代 Git Hooks',
        code: `npm install husky -D
npx husky init
echo "npm test" > .husky/pre-commit`,
        language: 'bash',
        width: 'half'
      }
    ]
  },
  {
    title: '技巧与诀窍',
    items: [
      {
        title: '临时忽略文件',
        code: `git update-index --assume-unchanged file
git update-index --no-assume-unchanged file
git ls-files -v | grep "^h" # 查看被忽略的文件`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '修改作者',
        code: `git commit --amend --author="Name <email>"
git rebase -i HEAD~3 # 交互式修改多个`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '查看远程分支',
        code: `git branch -r          # 远程分支
git branch -a          # 所有分支
git remote show origin # 远程仓库详情`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '优化仓库',
        code: `git gc                 # 垃圾回收
git prune              # 清理无用对象
git fsck               # 检查完整性
git count-objects -vH  # 查看仓库大小`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '找回删除的提交',
        code: `git reflog             # 查找提交hash
git checkout -b recover-branch commit-hash
git cherry-pick commit-hash`,
        language: 'bash',
        width: 'half'
      },
      {
        title: '批量修改历史',
        code: `# 修改邮箱
git filter-branch --env-filter '
OLD_EMAIL="old@email.com"
NEW_EMAIL="new@email.com"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]; then
  export GIT_COMMITTER_EMAIL="$NEW_EMAIL"
  export GIT_AUTHOR_EMAIL="$NEW_EMAIL"
fi' --tag-name-filter cat -- --branches --tags`,
        language: 'bash',
        width: 'half'
      }
    ]
  }
]
</script>

# Git 速记表

<Cheatsheet :sections="cheatsheetData" />
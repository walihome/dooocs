---
title: Linux
sidebar: false
single: true
order: 2
---

<script setup>
const cheatsheetData = [
  {
    title: '文件与目录',
    items: [
      {
        title: '目录导航',
        code: `cd /path/to/dir    # 切换目录
cd ~               # 切换到主目录
cd -               # 切换到上一个目录
pwd                # 显示当前路径`,
        language: 'bash'
      },
      {
        title: '查看文件',
        code: `ls                 # 列出文件
ls -la             # 详细列表（含隐藏文件）
ls -lh             # 人类可读的文件大小
ls -lt             # 按时间排序
tree               # 树形结构`,
        language: 'bash'
      },
      {
        title: '创建与删除',
        code: `mkdir dir          # 创建目录
mkdir -p a/b/c     # 递归创建
touch file.txt     # 创建文件
rm file.txt        # 删除文件
rm -rf dir         # 递归强制删除目录`,
        language: 'bash'
      },
      {
        title: '复制与移动',
        code: `cp src dest        # 复制文件
cp -r dir1 dir2    # 复制目录
mv src dest        # 移动/重命名
rsync -av src/ dest/ # 同步目录`,
        language: 'bash'
      },
      {
        title: '查找文件',
        code: `find . -name "*.txt"           # 按名称查找
find . -type f -mtime -7       # 7天内修改的文件
find . -size +100M             # 大于100MB的文件
locate filename                # 快速定位文件
which command                  # 查找命令路径`,
        language: 'bash'
      },
      {
        title: '链接文件',
        code: `ln -s target link  # 创建软链接
ln target link     # 创建硬链接
readlink -f link   # 查看链接目标`,
        language: 'bash'
      }
    ]
  },
  {
    title: '文件内容',
    items: [
      {
        title: '查看文件',
        code: `cat file.txt       # 显示全部内容
less file.txt      # 分页查看
head -n 10 file    # 查看前10行
tail -n 10 file    # 查看后10行
tail -f file       # 实时查看文件更新`,
        language: 'bash'
      },
      {
        title: '编辑文件',
        code: `vim file.txt       # Vim 编辑器
nano file.txt      # Nano 编辑器
echo "text" > file # 覆盖写入
echo "text" >> file # 追加写入`,
        language: 'bash'
      },
      {
        title: '文本搜索',
        code: `grep "pattern" file            # 搜索文本
grep -r "pattern" dir          # 递归搜索
grep -i "pattern" file         # 忽略大小写
grep -v "pattern" file         # 反向匹配
grep -n "pattern" file         # 显示行号
grep -E "regex" file           # 正则表达式`,
        language: 'bash'
      },
      {
        title: '文本处理',
        code: `wc -l file         # 统计行数
sort file          # 排序
uniq file          # 去重
cut -d: -f1 file   # 提取字段
awk '{print $1}' file # AWK处理
sed 's/old/new/g' file # SED替换`,
        language: 'bash'
      },
      {
        title: '文件比较',
        code: `diff file1 file2   # 比较文件
diff -u file1 file2 # 统一格式
vimdiff file1 file2 # Vim可视化比较
comm file1 file2   # 逐行比较`,
        language: 'bash'
      }
    ]
  },
  {
    title: '权限管理',
    items: [
      {
        title: '查看权限',
        code: `ls -l              # 查看权限
# -rwxr-xr-x
# - 文件类型 (- 文件, d 目录, l 链接)
# rwx 所有者权限（读写执行）
# r-x 组权限（读执行）
# r-x 其他用户权限（读执行）`,
        language: 'bash'
      },
      {
        title: '修改权限',
        code: `chmod 755 file     # 数字方式
chmod u+x file     # 给所有者添加执行权限
chmod g-w file     # 移除组写权限
chmod a+r file     # 所有人添加读权限
chmod -R 755 dir   # 递归修改`,
        language: 'bash'
      },
      {
        title: '权限数字',
        description: 'r=4, w=2, x=1',
        code: `777 = rwxrwxrwx    # 所有人全部权限
755 = rwxr-xr-x    # 所有者全部，其他可读执行
644 = rw-r--r--    # 所有者读写，其他只读
600 = rw-------    # 仅所有者读写`,
        language: 'bash'
      },
      {
        title: '所有者管理',
        code: `chown user file    # 修改所有者
chown user:group file # 修改所有者和组
chown -R user dir  # 递归修改
chgrp group file   # 修改组`,
        language: 'bash'
      },
      {
        title: 'sudo 权限',
        code: `sudo command       # 以root执行命令
sudo -i            # 切换到root shell
sudo -u user cmd   # 以指定用户执行
visudo             # 编辑sudoers文件`,
        language: 'bash'
      }
    ]
  },
  {
    title: '进程管理',
    items: [
      {
        title: '查看进程',
        code: `ps aux             # 查看所有进程
ps aux | grep name # 搜索进程
top                # 实时进程监控
htop               # 更好的进程监控
pgrep name         # 按名称查找进程ID`,
        language: 'bash'
      },
      {
        title: '管理进程',
        code: `kill PID           # 终止进程
kill -9 PID        # 强制终止
killall name       # 按名称终止
pkill name         # 按名称终止
bg                 # 后台运行
fg                 # 前台运行`,
        language: 'bash'
      },
      {
        title: '进程状态',
        code: `command &          # 后台运行
nohup command &    # 不挂断运行
jobs               # 查看后台任务
ctrl+z             # 暂停当前进程
ctrl+c             # 终止当前进程`,
        language: 'bash'
      },
      {
        title: '服务管理',
        description: 'systemd',
        code: `systemctl start service    # 启动服务
systemctl stop service     # 停止服务
systemctl restart service  # 重启服务
systemctl status service   # 查看状态
systemctl enable service   # 开机自启
systemctl disable service  # 禁用自启`,
        language: 'bash'
      },
      {
        title: '系统监控',
        code: `free -h            # 内存使用
df -h              # 磁盘使用
du -sh dir         # 目录大小
iostat             # IO统计
vmstat             # 虚拟内存统计`,
        language: 'bash'
      }
    ]
  },
  {
    title: '网络管理',
    items: [
      {
        title: '网络信息',
        code: `ip addr            # 查看IP地址
ip link            # 查看网络接口
ifconfig           # 网络接口配置（旧）
hostname           # 查看主机名
hostname -I        # 查看所有IP`,
        language: 'bash'
      },
      {
        title: '网络测试',
        code: `ping host          # 测试连通性
ping -c 4 host     # ping 4次
traceroute host    # 追踪路由
mtr host           # 持续追踪路由
nslookup domain    # DNS查询
dig domain         # DNS详细查询`,
        language: 'bash'
      },
      {
        title: '网络连接',
        code: `netstat -tulpn     # 查看监听端口
ss -tulpn          # socket统计（更快）
lsof -i :80        # 查看端口占用
nc -zv host port   # 测试端口连通性
telnet host port   # Telnet测试`,
        language: 'bash'
      },
      {
        title: '下载工具',
        code: `wget url           # 下载文件
wget -c url        # 断点续传
curl url           # 获取内容
curl -O url        # 下载保存
curl -I url        # 仅获取头部`,
        language: 'bash'
      },
      {
        title: '远程连接',
        code: `ssh user@host      # SSH连接
ssh -p 2222 user@host # 指定端口
scp file user@host:/path # 复制文件到远程
scp user@host:/path file # 从远程复制
rsync -avz src user@host:dest # 同步`,
        language: 'bash'
      },
      {
        title: '防火墙',
        code: `ufw status         # UFW防火墙状态
ufw enable         # 启用防火墙
ufw allow 80       # 允许端口
firewall-cmd --list-all # firewalld查看
iptables -L        # iptables查看规则`,
        language: 'bash'
      }
    ]
  },
  {
    title: '压缩与归档',
    items: [
      {
        title: 'tar 归档',
        code: `tar -czf archive.tar.gz dir/  # 创建压缩包
tar -xzf archive.tar.gz       # 解压
tar -tzf archive.tar.gz       # 查看内容
tar -xzf file.tar.gz -C /path # 解压到指定目录`,
        language: 'bash'
      },
      {
        title: 'tar 选项',
        code: `-c  创建归档
-x  解压归档
-t  列出内容
-z  gzip压缩
-j  bzip2压缩
-J  xz压缩
-v  显示详细信息
-f  指定文件名`,
        language: 'bash'
      },
      {
        title: 'zip/unzip',
        code: `zip archive.zip file1 file2   # 创建zip
zip -r archive.zip dir/       # 压缩目录
unzip archive.zip             # 解压
unzip -l archive.zip          # 查看内容
unzip archive.zip -d /path    # 解压到指定目录`,
        language: 'bash'
      },
      {
        title: 'gzip/bzip2',
        code: `gzip file          # gzip压缩
gzip -d file.gz    # gzip解压
gunzip file.gz     # gzip解压
bzip2 file         # bzip2压缩
bzip2 -d file.bz2  # bzip2解压
bunzip2 file.bz2   # bzip2解压`,
        language: 'bash'
      }
    ]
  },
  {
    title: '用户管理',
    items: [
      {
        title: '用户信息',
        code: `whoami             # 当前用户
id                 # 用户ID和组ID
users              # 已登录用户
w                  # 谁在线及在做什么
last               # 最近登录记录`,
        language: 'bash'
      },
      {
        title: '用户操作',
        code: `useradd username   # 添加用户
useradd -m -s /bin/bash user # 创建用户（带主目录）
userdel username   # 删除用户
userdel -r username # 删除用户及主目录
passwd username    # 设置密码
usermod -aG group user # 添加用户到组`,
        language: 'bash'
      },
      {
        title: '组管理',
        code: `groupadd group     # 创建组
groupdel group     # 删除组
groups             # 显示当前用户的组
groups username    # 显示指定用户的组`,
        language: 'bash'
      },
      {
        title: '切换用户',
        code: `su                 # 切换到root
su - username      # 切换到指定用户
sudo -i            # 切换到root shell
sudo -u user cmd   # 以指定用户执行`,
        language: 'bash'
      }
    ]
  },
  {
    title: '包管理',
    items: [
      {
        title: 'APT (Debian/Ubuntu)',
        code: `apt update         # 更新包列表
apt upgrade        # 升级所有包
apt install pkg    # 安装包
apt remove pkg     # 卸载包
apt autoremove     # 清理无用包
apt search pkg     # 搜索包`,
        language: 'bash'
      },
      {
        title: 'YUM/DNF (RHEL/CentOS)',
        code: `yum update         # 更新包
yum install pkg    # 安装包
yum remove pkg     # 卸载包
yum search pkg     # 搜索包
dnf install pkg    # DNF安装（新版）`,
        language: 'bash'
      },
      {
        title: 'Pacman (Arch)',
        code: `pacman -Syu        # 更新系统
pacman -S pkg      # 安装包
pacman -R pkg      # 卸载包
pacman -Ss pkg     # 搜索包
pacman -Qi pkg     # 查看包信息`,
        language: 'bash'
      },
      {
        title: 'Snap/Flatpak',
        code: `snap install pkg   # Snap安装
snap list          # 列出已安装
flatpak install pkg # Flatpak安装
flatpak list       # 列出已安装`,
        language: 'bash'
      }
    ]
  },
  {
    title: '系统信息',
    items: [
      {
        title: '基本信息',
        code: `uname -a           # 系统信息
hostnamectl        # 主机信息
lsb_release -a     # 发行版信息
cat /etc/os-release # 系统版本`,
        language: 'bash'
      },
      {
        title: '硬件信息',
        code: `lscpu              # CPU信息
lsmem              # 内存信息
lsblk              # 块设备信息
lspci              # PCI设备
lsusb              # USB设备
dmidecode          # DMI/SMBIOS信息`,
        language: 'bash'
      },
      {
        title: '性能信息',
        code: `uptime             # 运行时间和负载
free -h            # 内存使用
df -h              # 磁盘使用
du -sh *           # 目录大小
iostat             # IO统计
vmstat 1           # 每秒系统统计`,
        language: 'bash'
      },
      {
        title: '日志查看',
        code: `journalctl         # systemd日志
journalctl -f      # 实时查看日志
journalctl -u service # 查看服务日志
dmesg              # 内核日志
tail -f /var/log/syslog # 系统日志`,
        language: 'bash'
      }
    ]
  },
  {
    title: '管道与重定向',
    items: [
      {
        title: '输出重定向',
        code: `cmd > file         # 覆盖写入文件
cmd >> file        # 追加到文件
cmd 2> file        # 错误输出到文件
cmd &> file        # 标准输出和错误都输出
cmd > /dev/null    # 丢弃输出`,
        language: 'bash'
      },
      {
        title: '管道操作',
        code: `cmd1 | cmd2        # 管道传递
cmd1 | tee file    # 同时输出到文件和终端
cmd1 && cmd2       # cmd1成功后执行cmd2
cmd1 || cmd2       # cmd1失败后执行cmd2
cmd1 ; cmd2        # 顺序执行`,
        language: 'bash'
      },
      {
        title: '输入重定向',
        code: `cmd < file         # 从文件读入
cmd << EOF         # Here Document
  content
EOF
cmd <<< "string"   # Here String`,
        language: 'bash'
      }
    ]
  },
  {
    title: '快捷键',
    items: [
      {
        title: '光标移动',
        code: `Ctrl+A             # 移到行首
Ctrl+E             # 移到行尾
Ctrl+B             # 向左移动
Ctrl+F             # 向右移动
Alt+B              # 向左移动一个单词
Alt+F              # 向右移动一个单词`,
        language: 'bash'
      },
      {
        title: '编辑',
        code: `Ctrl+U             # 删除到行首
Ctrl+K             # 删除到行尾
Ctrl+W             # 删除前一个单词
Ctrl+Y             # 粘贴
Ctrl+L             # 清屏
Ctrl+_             # 撤销`,
        language: 'bash'
      },
      {
        title: '进程控制',
        code: `Ctrl+C             # 终止当前进程
Ctrl+Z             # 暂停当前进程
Ctrl+D             # 退出当前shell
Ctrl+S             # 暂停输出
Ctrl+Q             # 恢复输出`,
        language: 'bash'
      },
      {
        title: '历史命令',
        code: `Ctrl+R             # 搜索历史命令
Ctrl+P / ↑         # 上一条命令
Ctrl+N / ↓         # 下一条命令
!!                 # 执行上一条命令
!n                 # 执行第n条命令
!string            # 执行最近以string开头的命令`,
        language: 'bash'
      }
    ]
  },
  {
    title: 'Shell 脚本',
    items: [
      {
        title: '基础结构',
        code: `#!/bin/bash
# 这是注释
echo "Hello World"
# 变量
name="Alice"
echo "Hello, $name"
# 只读变量
readonly PI=3.14`,
        language: 'bash'
      },
      {
        title: '条件语句',
        code: `if [ condition ]; then
  echo "true"
elif [ condition2 ]; then
  echo "true2"
else
  echo "false"
fi
# 测试运算符
[ -f file ]    # 文件存在
[ -d dir ]     # 目录存在
[ "$a" = "$b" ] # 字符串相等
[ $a -eq $b ]  # 数字相等`,
        language: 'bash'
      },
      {
        title: '循环',
        code: `# for循环
for i in {1..5}; do
  echo $i
done
# while循环
while [ condition ]; do
  echo "loop"
done
# until循环
until [ condition ]; do
  echo "loop"
done`,
        language: 'bash'
      },
      {
        title: '函数',
        code: `# 定义函数
function greet() {
  echo "Hello, $1"
}
# 或者
greet() {
  local name=$1
  echo "Hello, $name"
  return 0
}
# 调用函数
greet "Alice"`,
        language: 'bash'
      },
      {
        title: '特殊变量',
        code: `$0                 # 脚本名称
$1 $2 ...          # 参数
$#                 # 参数个数
$@                 # 所有参数
$?                 # 上个命令的退出状态
$$                 # 当前进程ID
$!                 # 后台运行的最后一个进程ID`,
        language: 'bash'
      }
    ]
  },
  {
    title: '实用技巧',
    items: [
      {
        title: '命令历史',
        code: `history            # 查看历史
history | grep cmd # 搜索历史
!123               # 执行第123条命令
!!                 # 执行上一条
!$                 # 上一条命令的最后参数
ctrl+r             # 反向搜索`,
        language: 'bash'
      },
      {
        title: '别名',
        code: `alias ll='ls -la'  # 创建别名
alias ..='cd ..'
unalias ll         # 删除别名
alias              # 查看所有别名
# 永久生效：添加到 ~/.bashrc 或 ~/.zshrc`,
        language: 'bash'
      },
      {
        title: '环境变量',
        code: `echo $PATH         # 查看PATH
export VAR=value   # 设置环境变量
export PATH=$PATH:/new/path # 添加到PATH
env                # 查看所有环境变量
printenv           # 打印环境变量`,
        language: 'bash'
      },
      {
        title: '命令替换',
        code: `result=$(command)  # 命令替换（推荐）
result=\`command\`  # 命令替换（旧）
echo "Date: $(date)"
files=$(ls *.txt)`,
        language: 'bash'
      },
      {
        title: '批量操作',
        code: `# 批量重命名
for f in *.txt; do mv "$f" "\${f%.txt}.md"; done
# 批量处理
find . -name "*.log" -exec rm {} \\;
# xargs批量
ls *.txt | xargs -I {} cp {} backup/`,
        language: 'bash'
      },
      {
        title: '常用组合',
        code: `# 查找大文件
du -ah / | sort -rh | head -20
# 查看端口占用
netstat -tulpn | grep :80
# 实时日志带高亮
tail -f log | grep --color "ERROR"
# 查找并删除
find . -name "*.tmp" -delete`,
        language: 'bash'
      }
    ]
  }
]
</script>

# Linux 速记表

<Cheatsheet :sections="cheatsheetData" />
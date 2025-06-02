---
title: 服务端部署脚本
order: 7
---

# 阿里云云效-服务端部署脚本
```
#!/bin/bash
set -e

DEPLOY_DIR="/opt/backend"
BACKUP_DIR="/opt/backend_backup/$(date +%Y%m%d%H%M%S)"
PORT=8080
sudo mkdir -p $DEPLOY_DIR
sudo mkdir -p $BACKUP_DIR
sudo chown -R $(whoami):$(whoami) $DEPLOY_DIR
touch $DEPLOY_DIR/ab
mv $DEPLOY_DIR/* $BACKUP_DIR/

cd /home/admin/app
tar -xzf package_backend.tgz -C $DEPLOY_DIR
PID=$(sudo ss -tulnp | grep ":$PORT" | awk -F',' '{print $2}' | awk -F'pid=' '{print $2}' | awk -F' ' '{print $1}' || true)
if [ -n "$PID" ]; then
    echo "端口 $PORT 被进程 $PID 占用，正在终止..."
    sudo kill -9 $PID
    sleep 5
    if sudo ss -tulnp | grep ":$PORT" > /dev/null; then
        echo "错误：端口 $PORT 仍然被占用，清理失败！"
        exit 1
    else
        echo "端口 $PORT 已成功释放。"
    fi
else
    echo "端口 $PORT 未被占用，继续部署。"
fi

cd $DEPLOY_DIR
nohup java -jar dooocs_backend-0.0.1-SNAPSHOT.jar \
  --spring.profiles.active=prod \
  > app.log 2>&1 &
```

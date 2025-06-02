---
title: 前端部署脚本
order: 6
---
# 阿里云云效-前端部署脚本

```shell
#!/bin/bash
set -e 

DEPLOY_DIR="/opt/frontend"
BACKUP_DIR="/opt/frontend_backup/$(date +%Y%m%d%H%M%S)"

sudo mkdir -p $DEPLOY_DIR
sudo chown -R $(whoami):$(whoami) $DEPLOY_DIR

if [ -d "$DEPLOY_DIR/build" ]; then
  mkdir -p $BACKUP_DIR
fi
mv $DEPLOY_DIR/* $BACKUP_DIR/

cd /home/admin/app
if [ ! -f "package_frontend.tgz" ]; then
  exit 1
fi

tar -xzf package_frontend.tgz -C $DEPLOY_DIR

if [ ! -f "$DEPLOY_DIR/build/index.html" ]; then
  ls -lR $DEPLOY_DIR
  exit 1
fi

if ! command -v node >/dev/null 2>&1; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
    \. "$HOME/.nvm/nvm.sh"
    nvm install 22
    node -v
    nvm current
    npm -v
    npm install pm2 -g
    npm install -g npm@11.2.0
    npm install serve -g
fi

cd $DEPLOY_DIR

npm install --production --registry=https://registry.npmmirror.com
pm2 delete frontend 2> /dev/null || true
pm2 start "serve -s $DEPLOY_DIR/build -l 3000" --name "frontend"
pm2 save
```

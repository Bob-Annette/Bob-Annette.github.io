---
title: 如何用Hexo发博客
description: 2024 年留下的一篇旧博客使用笔记，现作为迁移存档保留。
category: 杂谈
pubDate: 2024-08-12
legacy: true
---

> 这篇文章写于 2024 年，记录的是当时使用 Hexo 的命令。本站现在已迁移到 Astro，以下内容作为旧文存档。

## 启动 Hexo 环境

```powershell
winget install Schniz.fnm # 安装过后就不用再运行
fnm env --use-on-cd | Out-String | Invoke-Expression
fnm use --install-if-missing 20
node -v
npm -v
hexo -v # 用于判断是否启动成功
```

## 生成 / 发布文章

```powershell
hexo clean # 清理缓存
hexo generate # Generate static files
hexo server # Run server
hexo deploy # Deploy to remote sites
```

更多信息可以参考 Hexo 的[生成文档](https://hexo.io/docs/generating.html)、[本地服务文档](https://hexo.io/docs/server.html)和[部署文档](https://hexo.io/docs/one-command-deployment.html)。

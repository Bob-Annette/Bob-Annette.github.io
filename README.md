# FightingBob Blog

这是使用 Astro 搭建的个人博客与作品展示站点，发布地址为 <https://bob-annette.github.io/>。

## 本地开发

要求 Node.js 22 或更新版本。

```powershell
npm install
npm run dev
```

构建静态网站：

```powershell
npm run build
npm run preview
```

文章放在 `src/content/posts/`，使用 Markdown。每篇文章的前置元数据需要填写 `title`、`description`、`category`（`量化`、`AI动手玩` 或 `杂谈`）和 `pubDate`。`draft: true` 可让文章暂时不出现在网站中。

`src/pages/work.astro` 展示站内交互实验，并在浏览器中读取 GitHub 公开仓库 API。这个请求不使用私密令牌；如果 API 暂时不可用，访客可直接点击 GitHub 链接。

GitHub Pages 的发布源需设为 **GitHub Actions**。推送到 `main` 后，`.github/workflows/deploy.yml` 会构建并发布 `dist/`。仓库根目录中的旧 Hexo 导出文件暂时保留；`public/` 下的文件用于保留旧文章地址。

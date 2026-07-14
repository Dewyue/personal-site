# 部署指南

> **需要国内 + 海外都稳定访问？** 见 [DEPLOYMENT-DUAL.md](./DEPLOYMENT-DUAL.md)（双节点：Vercel 海外 + 阿里云 OSS/CDN 国内 + 备案 + 分线路 DNS）。

本项目已配置为在 [Vercel](https://vercel.com) 上零配置部署。

## 前置条件

- Node.js >= 22.12.0
- Git 仓库已推送到 GitHub / GitLab / Bitbucket

## 方式一：Vercel 控制台（推荐）

1. 登录 [vercel.com](https://vercel.com) 并点击 **Add New Project**
2. 导入 `personal-site` 仓库
3. 框架预设会自动识别为 **Astro**
4. 构建设置（已包含在 `vercel.json`）：
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
5. 点击 **Deploy**

部署完成后，将 Vercel 分配的域名更新到以下两处：

- `astro.config.mjs` → `site` 字段
- `src/data/site.ts` → `url` 字段

## 方式二：Vercel CLI

```bash
export PATH="/Users/wangyue/.local/node/bin:$PATH"
npm i -g vercel
cd /Users/wangyue/personal-site
vercel login
vercel          # 首次部署（预览）
vercel --prod   # 生产部署
```

## 本地验证

```bash
export PATH="/Users/wangyue/.local/node/bin:$PATH"
cd /Users/wangyue/personal-site
npm run build
npm run preview
```

构建成功后访问 `http://localhost:4321` 预览。

## 部署后检查清单

- [ ] 首页、关于、项目、博客、联系页面可访问
- [ ] `/rss.xml` 返回 RSS feed
- [ ] `/sitemap-index.xml` 可访问
- [ ] 404 页面正常显示
- [ ] 深色/浅色模式切换正常
- [ ] OG 图片与 favicon 正确加载

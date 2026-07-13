---
title: CLI 脚手架工具
description: 一键生成标准化项目模板的命令行工具，支持多种技术栈预设。
pubDate: 2025-04-20
tags: ['Node.js', 'CLI', '开源', '开发者工具']
image: /images/project-cli.svg
github: https://github.com/example/create-app
featured: true
draft: false
---

## 动机

每次新建项目都要重复配置 ESLint、Prettier、CI 等基础设施。我希望用一条命令解决这些重复劳动。

## 功能特性

```bash
npx create-my-app my-project --template react-ts
```

- 支持 React、Vue、Astro 三种模板
- 内置 ESLint + Prettier + Husky
- 可选 GitHub Actions CI 配置
- 交互式 CLI 引导

## 技术实现

- **框架**：Commander.js + Inquirer.js
- **模板引擎**：Handlebars
- **测试**：Vitest + 快照测试

## 开源数据

发布 6 个月后获得 500+ GitHub Stars，被 3 家创业公司采用为内部标准脚手架。

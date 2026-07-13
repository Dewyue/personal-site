---
title: 数据分析仪表盘
description: 实时数据可视化平台，支持自定义图表与多数据源接入。
pubDate: 2025-03-10
tags: ['Vue', 'D3.js', '数据可视化']
image: '/projects/dashboard.svg'
link: 'https://dashboard-demo.vercel.app'
featured: false
draft: false
---

## 概述

为企业内部团队打造的数据分析仪表盘，整合销售、运营、产品等多维度数据。

## 功能模块

- 拖拽式仪表盘布局
- 10+ 图表类型（折线、柱状、饼图、热力图等）
- 数据导出与定时报告
- 权限管理与数据脱敏

## 架构设计

前端 Vue 3 + Pinia，后端 Node.js 聚合多个数据源 API，使用 Redis 缓存热点查询。

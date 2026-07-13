---
title: 任务管理看板
description: 基于 React 与 Supabase 的实时协作看板，支持拖拽排序与多人同步。
pubDate: 2025-10-01
tags: ['React', 'TypeScript', 'Supabase', '实时协作']
image: /images/project-kanban.svg
link: https://example.com/kanban
github: https://github.com/example/kanban
featured: true
draft: false
---

## 项目概述

一款面向小团队的轻量级任务管理工具，灵感来自 Trello，但针对中文用户做了本地化优化。

## 技术栈

- **前端**：React 19 + TypeScript + Tailwind CSS
- **后端**：Supabase（PostgreSQL + Realtime）
- **状态管理**：Zustand
- **拖拽**：@dnd-kit/core

## 核心功能

- 看板、列表、卡片三级结构
- 实时多人协作，变更即时同步
- 标签、截止日期、成员分配
- 暗色模式与响应式布局

## 挑战与收获

实时同步的冲突处理是最大难点。最终采用乐观更新 + 服务端校验的策略，在保证体验的同时确保数据一致性。

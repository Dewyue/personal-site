---
title: TypeScript 类型体操入门
description: 从实用角度理解 TypeScript 高级类型，提升代码的类型安全与开发体验。
pubDate: 2025-06-10
tags: ['TypeScript', '类型系统', '前端']
draft: false
---

## 为什么学类型体操？

TypeScript 的类型系统不仅是「检查错误」的工具，更是表达业务约束的语言。掌握高级类型能让你写出更安全、更易维护的代码。

## 核心概念

### 泛型约束

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

### 条件类型

```typescript
type IsString<T> = T extends string ? true : false;
```

### 映射类型

```typescript
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};
```

## 实用模式

1. **API 响应类型推导**：用 `infer` 从复杂嵌套结构中提取类型
2. **表单验证**：用 discriminated union 表达不同字段状态
3. **组件 Props**：用 `ComponentProps` 复用已有组件类型

## 学习建议

不必追求炫技。从实际项目中的痛点出发，逐步引入高级类型。类型系统的目标是**减少 bug**，而不是**增加复杂度**。

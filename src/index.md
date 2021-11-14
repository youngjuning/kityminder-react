---
title: Docs
sidemenu: false
---

<div align="center">
  <h1>kityminder-react</h1>
  <img alt="" src="https://cdn.jsdelivr.net/gh/youngjuning/images/202111142059632.png" width="150"/>
  <p> 基于 <a href="https://github.com/fex-team/kityminder-core">kityminder-core</a> 和 <a href="https://github.com/fex-team/kity">kity</a> 封装的用于渲染百度脑图 kv JSON 数据的 React 组件。</p>
</div>

## 安装

yarn：

```sh
yarn add kityminder-react
```

npm：

```sh
npm install kityminder-react
```

## 示例

```tsx
/**
 * defaultShowCode: true
 * hideActions: ["EXTERNAL"]
 */
import React from 'react';
import './index.css';
import KityMinder from 'kityminder-react';

export default () => (
  <KityMinder
    data={{
      root: {
        data: {
          text: '百度产品',
          image: 'https://www.baidu.com/img/bd_logo1.png?where=super',
          imageSize: { width: 270, height: 129 },
        },
        children: [
          { data: { text: '新闻' } },
          { data: { text: '网页', priority: 1 } },
          { data: { text: '贴吧', priority: 2 } },
          { data: { text: '知道', priority: 2 } },
          { data: { text: '音乐', priority: 3 } },
          { data: { text: '图片', priority: 3 } },
          { data: { text: '视频', priority: 3 } },
          { data: { text: '地图', priority: 3 } },
          { data: { text: '百科', priority: 3 } },
          { data: { text: '更多', hyperlink: 'http://www.baidu.com/more' } },
        ],
      },
    }}
  />
);
```

<API src="./index.tsx"></API>

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo

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
import React from 'react';
import './index.css';
import data from '../naotu/洛竹宇宙.json';
import KityMinder from 'kityminder-react';

export default () => (
  <KityMinder
    data={data}
    link="http://naotu.baidu.com/file/9edcff888e546a56ea5169c19a924485?token=e069ac3f774b55bb"
  />
);
```

<API src="./index.tsx"></API>

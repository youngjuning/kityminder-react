import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'kityminder-react',
  favicon: 'https://cdn.jsdelivr.net/gh/youngjuning/images/202111142059632.png',
  logo: 'https://cdn.jsdelivr.net/gh/youngjuning/images/202111142059632.png',
  outputPath: 'docs-dist',
  base: '/kityminder-react',
  publicPath: '/kityminder-react/',
  hash: true,
  exportStatic: {},
  sitemap: {
    hostname: 'https://youngjuning.js.org/',
  },
  fastRefresh: {},
  // more config: https://d.umijs.org/config
});

import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  title: 'xiaoyao-Ye',
  titleTemplate: '不要让时代的悲哀成为你的悲哀!',
  description: '当灾难来临时, 精神意志是人类的第一序列武器.',
  // 暗黑模式
  appearance: true,
  // 当设置为 时true，VitePress 不会因为死链接而导致构建失败。
  ignoreDeadLinks: true,
  // 使用 git commit 获取时间戳。此选项启用默认主题以显示页面的最后更新时间。
  lastUpdated: true,
  // 配置 Markdown 解析器选项。VitePress 使用Markdown-it作为解析器，使用Shiki来突出语言语法。在此选项中，您可以传递各种 Markdown 相关选项以满足您的需求。
  markdown: {
    // headers: {
    //   level: [0, 0]
    // }
    // theme: 'material-palenight',
    // lineNumbers: true
  },
  themeConfig: {
    logo: '/img/book.png',
    siteTitle: 'xiaoyao-Ye',
    outlineTitle: '在本页面',
    outline: [2, 6],
    lastUpdatedText: '最近更新时间',
    editLink: {
      pattern: 'https://github.com/xiaoyao-Ye/blog/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    nav: nav(),
    sidebar: {
      '/quickQuery/': sidebarQuickQuery(),
      '/basics/': sidebarBasics(),
      '/interview/': sidebarInterview(),
      '/other/': sidebarOther(),
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/xiaoyao-Ye' }],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present xiaoyao-Ye',
    },
    // 广告
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement',
    // },
  },
})

function nav() {
  return [
    { text: '速查手册', link: '/quickQuery/', activeMatch: '/quickQuery/' },
    { text: '基础', link: '/basics/', activeMatch: '/basics/' },
    { text: '八股文', link: '/interview/', activeMatch: '/interview/' },
    { text: '其他', link: '/other/', activeMatch: '/other/' },
  ]
}
function sidebarQuickQuery() {
  return [
    {
      text: '速查手册',
      items: [
        { text: '代码规范', link: '/quickQuery/coding-specification' },
        { text: 'settings', link: '/quickQuery/settings' },
        { text: 'vue', link: '/quickQuery/vue' },
        { text: 'css', link: '/quickQuery/css' },
        { text: 'JavaScript', link: '/quickQuery/JavaScript' },
        { text: 'other', link: '/quickQuery/other' },
      ],
    },
    {
      text: '工程化',
      items: [
        { text: 'Git', link: '/quickQuery/Git' },
        { text: 'npm', link: '/quickQuery/npm' },
        { text: 'webpack', link: '/quickQuery/webpack' },
      ],
    },
  ]
}
function sidebarBasics() {
  return [
    {
      text: '基础',
      items: [{ text: 'mpvue', link: '/basics/mpvue' }],
    },
  ]
}
function sidebarInterview() {
  return [
    {
      text: '八股文',
      items: [{ text: 'prepare', link: '/interview/prepare' }],
    },
  ]
}
function sidebarOther() {
  return [
    {
      text: '其他',
      items: [
        { text: '书籍', link: '/other/books' },
        { text: '原生应用', link: '/other/RN_Flutter_Weex' },
        { text: 'Python', link: '/other/Python' },
        { text: 'error', link: '/other/error' },
      ],
    },
  ]
}

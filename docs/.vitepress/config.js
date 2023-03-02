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
    algolia: {
      appId: 'IW5HVGHWB1',
      apiKey: 'd8359d2012af4f23b1f9364c2c50d789',
      indexName: 'xiaoyao-Ye',
      locales: {
        zh: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
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
      items: [{ text: '工程化', link: '/interview/engineering' }],
    },
  ]
}
function sidebarOther() {
  return [
    {
      text: '其他',
      items: [
        // { text: '书籍', link: '/other/books' },
        { text: '原生应用', link: '/other/RN_Flutter_Weex' },
        { text: 'Python', link: '/other/Python' },
        { text: 'error', link: '/other/error' },
        { text: 'docker', link: '/other/docker' },
        { text: 'vscode', link: '/other/vscode' },
      ],
    },
  ]
}

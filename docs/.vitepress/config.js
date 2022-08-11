import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '_Ghosteye',
  titleTemplate: '不要让时代的悲哀成为你的悲哀!',
  description: '当灾难来临时, 精神意志是人类的第一序列武器.',
  // 暗黑模式
  appearance: true,
  // 当设置为 时true，VitePress 不会因为死链接而导致构建失败。
  ignoreDeadLinks: true,
  // 使用 git commit 获取时间戳。此选项启用默认主题以显示页面的最后更新时间。
  lastUpdated: true,
  // 配置 Markdown 解析器选项。VitePress 使用Markdown-it作为解析器，使用Shiki来突出语言语法。在此选项中，您可以传递各种 Markdown 相关选项以满足您的需求。
  // markdown: {
  //   theme: 'material-palenight',
  //   lineNumbers: true
  // },
  themeConfig: {
    logo: '../assets/img/jp.png',
    siteTitle: 'panacea',
    lastUpdatedText: 'Updated Date',
    nav: [
      { text: 'skill', link: '/skill/codeing-specification' },
    ],
    sidebar: {
      '/skill/': [
        {
          text: '小技巧', items: [
            { text: '代码规范', link: '/skill/codeing-specification' },
            { text: 'settings', link: '/skill/settings' },
            { text: 'webpack', link: '/skill/webpack' },
            { text: 'npm', link: '/skill/npm' },
            { text: 'vue', link: '/skill/vue' },
            { text: 'vue3', link: '/skill/vue3' },
            { text: 'css', link: '/skill/CSS' },
            { text: 'JavaScript', link: '/skill/JavaScript' },
            { text: 'other', link: '/skill/other' },
          ]
        },

      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present _Ghosteye'
    // },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // 广告
    carbonAds: {
      code: 'your-carbon-code',
      placement: 'your-carbon-placement'
    }
  }
})

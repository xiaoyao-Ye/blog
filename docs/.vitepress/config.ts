import { defineConfig } from "vitepress";
import { navBar, sidebar } from "./router";

export default defineConfig({
  head: [
    ["link", { rel: "icon", href: "/blog/favicon.ico" }],
    ["meta", { name: "author", content: "_Ghosteye" }],
  ],
  // srcDir: './src',
  base: "/blog/",
  cleanUrls: true,
  title: "_Ghosteye",
  titleTemplate: false,
  srcDir: "../docs",
  srcExclude: ["**/README.md"],
  // titleTemplate: '不要让时代的悲哀成为你的悲哀!',
  // description: '当灾难来临时, 精神意志是人类的第一序列武器.',
  description: "Do you have any output? Do it now!",
  // 暗黑模式
  appearance: "dark",
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
    logo: "/img/book.png",
    siteTitle: "_Ghosteye",
    outlineTitle: "在本页面",
    outline: [2, 6],
    lastUpdatedText: "最近更新时间",
    editLink: {
      pattern: "https://github.com/xiaoyao-Ye/blog/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    nav: navBar,
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/xiaoyao-Ye" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present _Ghosteye",
    },
    algolia: {
      appId: "EJYW8N5YY2",
      apiKey: "b2a060fd4e6b6b5b249c13b9056c89f0",
      indexName: "xiaoyao-yeio",
      // locales: {
      //   zh: {
      //     placeholder: '搜索文档',
      //     translations: {
      //       button: {
      //         buttonText: '搜索文档',
      //         buttonAriaLabel: '搜索文档',
      //       },
      //       modal: {
      //         searchBox: {
      //           resetButtonTitle: '清除查询条件',
      //           resetButtonAriaLabel: '清除查询条件',
      //           cancelButtonText: '取消',
      //           cancelButtonAriaLabel: '取消',
      //         },
      //         startScreen: {
      //           recentSearchesTitle: '搜索历史',
      //           noRecentSearchesText: '没有搜索历史',
      //           saveRecentSearchButtonTitle: '保存至搜索历史',
      //           removeRecentSearchButtonTitle: '从搜索历史中移除',
      //           favoriteSearchesTitle: '收藏',
      //           removeFavoriteSearchButtonTitle: '从收藏中移除',
      //         },
      //         errorScreen: {
      //           titleText: '无法获取结果',
      //           helpText: '你可能需要检查你的网络连接',
      //         },
      //         footer: {
      //           selectText: '选择',
      //           navigateText: '切换',
      //           closeText: '关闭',
      //           searchByText: '搜索提供者',
      //         },
      //         noResultsScreen: {
      //           noResultsText: '无法找到相关结果',
      //           suggestedQueryText: '你可以尝试查询',
      //           reportMissingResultsText: '你认为该查询应该有结果？',
      //           reportMissingResultsLinkText: '点击反馈',
      //         },
      //       },
      //     },
      //   },
      // },
    },
    // 广告
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement',
    // },
  },
});

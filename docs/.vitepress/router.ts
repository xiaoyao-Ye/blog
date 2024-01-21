const sidebarHandbook = [
  {
    text: '速查手册',
    items: [
      { text: '代码规范', link: '/handbook/coding-specification' },
      { text: 'settings', link: '/handbook/settings' },
      { text: 'Vue', link: '/handbook/vue' },
      { text: 'Css', link: '/handbook/css' },
      { text: 'JavaScript', link: '/handbook/JavaScript' },
      { text: 'ES6', link: '/handbook/ES6' },
      { text: 'NodeJS', link: '/handbook/node' },
      { text: 'uniapp', link: '/handbook/uniapp' },
      { text: 'mpvue', link: '/handbook/mpvue' },
      { text: 'other', link: '/handbook/other' },
    ],
  },
  {
    text: '工程化',
    items: [
      { text: 'Git', link: '/handbook/Git' },
      { text: 'npm', link: '/handbook/npm' },
      { text: 'webpack', link: '/handbook/webpack' },
    ],
  },
]

const sidebarInterview = [
  {
    text: '面试相关',
    items: [
      { text: 'prepare', link: '/interview/prepare' },
      { text: '工程化', link: '/interview/engineering' },
      { text: '记录一些面试题', link: '/interview/record' },
    ],
  },
  {
    text: 'LeetCode',
    collapsed: false,
    items: [
      { text: '[简单] 01.两数之和', link: '/interview/leetCode/01.md' },
      { text: '[中等] 03.无重复字符的最长子串', link: '/interview/leetCode/03.md' },
      { text: '[中等] 07.整数反转', link: '/interview/leetCode/07.md' },
      { text: '[简单] 09.回文数', link: '/interview/leetCode/09.md' },
      { text: '[简单] 14.最长公共前缀', link: '/interview/leetCode/14.md' },
      { text: '[简单] 20.有效的括号', link: '/interview/leetCode/20.md' },
      { text: '[简单] 27.移除元素', link: '/interview/leetCode/27.md' },
      { text: '[中等] 36.有效的数独', link: '/interview/leetCode/36.md' },
      { text: '[中等] 45.跳跃游戏 II', link: '/interview/leetCode/45.md' },
      { text: '[简单] 59.最后一个单词的长度', link: '/interview/leetCode/59.md' },
      { text: '[简单] 66.加一', link: '/interview/leetCode/66.md' },
      { text: '[简单] 70.爬楼梯', link: '/interview/leetCode/70.md' },
      { text: '[简单] 121.买卖股票的最佳时机', link: '/interview/leetCode/121.md' },
      { text: '[简单] 125.验证回文串', link: '/interview/leetCode/125.md' },
      { text: '[简单] 219.存在重复元素 II', link: '/interview/leetCode/219.md' },
      { text: '[简单] 242.有效的字母异位词', link: '/interview/leetCode/242.md' },
      { text: '[简单] 387.字符串中的第一个唯一字符', link: '/interview/leetCode/387.md' },
    ],
  },
]

const sidebarOther = [
  {
    text: '其他',
    items: [
      // { text: '书籍', link: '/other/books' },
      { text: '原生应用', link: '/other/RN_Flutter_Weex' },
      { text: 'Python', link: '/other/Python' },
      { text: 'error', link: '/other/error' },
      { text: 'linux', link: '/other/linux' },
      { text: 'docker', link: '/other/docker' },
      { text: 'devOps', link: '/other/DevOps' },
      { text: 'vscode', link: '/other/vscode' },
      { text: 'quotations', link: '/other/quotations' },
      { text: 'test', link: '/other/test' },
      { text: 'mini', link: '/other/mini' },
      { text: 'install', link: '/other/install' },
      { text: 'js', link: '/other/js' },
      { text: 'web3', link: '/other/web3' },
      { text: 'TODO', link: '/other/TODO' },
    ],
  },
]

const sidebarGhosteye = [
  {
    text: 'blog',
    items: [
      // { text: 'create-xm', link: '/Ghosteye/create-xm' },
      { text: 'initapi', link: '/Ghosteye/initapi' },
      { text: 'Quick create log', link: '/Ghosteye/vs-quick-log' },
      { text: 'mini-react', link: '/Ghosteye/mini-react' },
    ],
  },
]

const sidebar = {
  '/handbook/': sidebarHandbook,
  '/interview/': sidebarInterview,
  '/other/': sidebarOther,
  '/Ghosteye/': sidebarGhosteye,
}

const navBar = [
  { text: 'Handbook', activeMatch: '/handbook/', link: sidebarHandbook[0].items[0].link },
  { text: 'Interview', activeMatch: '/interview/', link: sidebarInterview[0].items[0].link },
  { text: 'Other', activeMatch: '/other/', link: sidebarOther[0].items[0].link },
  // { text: "Demo", activeMatch: "/demo/", link: "/demo/" },
  { text: 'Ghosteye', activeMatch: '/Ghosteye/', link: sidebarGhosteye[0].items[0].link },
]

export { navBar, sidebar }

import Theme from 'vitepress/theme'

// import '../style/vars.css'
import '../style/main.css'
import './overrides.css'
import './rainbow.css'
import './vars.css'

import { h, watch } from 'vue'
import BG from '../../components/BG.vue'
import Comment from '../../components/Comment.vue'

let homePageStyle: HTMLStyleElement | undefined

export default {
  ...Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(BG),
      'doc-before': () => h(BG),
      'doc-after': () => h(Comment),
      // 文章右边 sidebar 内容之后
      // 'aside-outline-after': () => h(BG)
    })
  },
  enhanceApp({ router }) {
    // 可以用来判断是否在浏览器环境下
    // import { inBrowser } from 'vitepress'
    // if (inBrowser) {}
    if (typeof window === 'undefined')
      return

    watch(
      () => router.route.data.relativePath,
      () => updateHomePageStyle(location.pathname === '/'),
      { immediate: true },
    )
  },
}

if (typeof window !== 'undefined') {
  // detect browser, add to class for conditional styling
  const browser = navigator.userAgent.toLowerCase()
  if (browser.includes('chrome'))
    document.documentElement.classList.add('browser-chrome')
  else if (browser.includes('firefox'))
    document.documentElement.classList.add('browser-firefox')
  else if (browser.includes('safari'))
    document.documentElement.classList.add('browser-safari')
}

// Speed up the rainbow animation on home page
function updateHomePageStyle(value: boolean) {
  if (value) {
    if (homePageStyle)
      return

    homePageStyle = document.createElement('style')
    homePageStyle.innerHTML = `
    :root {
      animation: rainbow 12s linear infinite;
    }`
    document.body.appendChild(homePageStyle)
  }
  else {
    if (!homePageStyle)
      return

    homePageStyle.remove()
    homePageStyle = undefined
  }
}

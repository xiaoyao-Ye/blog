import Theme from 'vitepress/theme'
import '../style/vars.css'
import '../style/main.css'

import { onMounted } from 'vue'

onMounted(() => {
  window.localStorage.setItem('vitepress-theme-appearance', 'dark')
})

export default {
  ...Theme,
  enhanceApp({ app }) {
    // console.log({ app })
  },
}

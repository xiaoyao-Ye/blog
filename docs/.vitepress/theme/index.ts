import Theme from 'vitepress/theme'
import '../style/vars.css'
import '../style/main.css'

localStorage.setItem('vitepress-theme-appearance', 'dark')

export default {
  ...Theme,
}

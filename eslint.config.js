// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    // 'max-len': ['error', { code: 75 }],
  },
  typescript: {
    parserOptions: {
      extraFileExtensions: ['.vue'],
    },
  },
})

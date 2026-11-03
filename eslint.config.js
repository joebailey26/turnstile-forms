import globals from 'globals'
import galexia from 'eslint-config-galexia'

export default [
  {
    name: 'turnstile-forms/ignores',
    ignores: ['dist/', 'node_modules/']
  },
  ...galexia,
  {
    name: 'turnstile-forms/globals',
    languageOptions: {
      globals: { ...globals.node, ...globals.browser }
    }
  }
]

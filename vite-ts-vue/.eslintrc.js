module.exports = {
  root: true,
  ignorePatterns: [
    'node_modules/*',
    'dist/*',
  ],
  extends: [
    '@antfu',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    /** vue */
    'vue/component-tags-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
    'vue/v-on-event-hyphenation': ['error', 'always', {
      autofix: true,
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
  },
}

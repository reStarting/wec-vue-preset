module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true
  },
  'extends': [
    'plugin:vue/essential',
    // '@vue/prettier'
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    "prettier/prettier": ["warn", {
      "singleQuote": true
    }],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ]
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  }
}

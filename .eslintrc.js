const restrictedImports = ['error', {
  patterns: ['../*']
}];

module.exports = {
  extends: ['airbnb/base', 'plugin:react/recommended'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true
  },
  globals: {
    REGISTRY_URI: true,
    AUTHENTICATION_ENDPOINT: true,
    rxjs$Observable: true,
    TimeoutID: true,
    IntervalID: true,
    SyntheticDragEvent: true,
    SyntheticEvent: true,
    SyntheticKeyboardEvent: true
  },
  plugins: [
    'react', 'import'
  ],
  settings: {
    'import/resolver': 'webpack'
  },
  rules: {
    'linebreak-style': [
      // Allow windows users with dodgy git config to run the app locally
      process.platform === 'win32' ? 0 : 2,
      'unix'
    ],
    'comma-dangle': ['error', 'never'],
    'max-len': [1, 150],
    'no-confusing-arrow': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-plusplus': 'off',
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        'test/**/*',
        '**/*.test.js',
        '**/*.spec.js',
        '**/*.defs.js',
        '**/*.mock.js',
        '**/*.store.js',
        '**/*.story.js',
        '**/*.enforce.js'
      ]
    }],
    'function-paren-newline': ['error', 'consistent'],
    'import/no-unresolved': ["error", { caseSensitive: false }],
    'no-restricted-imports': restrictedImports,
    'no-restricted-modules': restrictedImports,
    indent: ['error', 2, {
      SwitchCase: 1,
      ignoreComments: true
    }],
    // React/JSX rules
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/prop-types': 0,
    'react/jsx-key': 'error',
    'react/no-array-index-key': 'warn',
    'react/jsx-wrap-multilines': ['error', {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line'
    }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-equals-spacing': ['error', 'never'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline'
    }],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
    }]
  },
  parser: 'babel-eslint'
}

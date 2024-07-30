import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    overrides: {
      'style/comma-dangle': 'off'
    }
  },
  typescript: true,
  react: true,
}, {
  rules: {
    'no-console': 'off',

    'react-refresh/only-export-components': 'off',
    'react/no-unstable-context-value': 'off',
    'ts/no-use-before-define': 'off',
    'import/order': [
      2,
      {
        'pathGroups': [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after'
          }
        ],
        'alphabetize': { order: 'asc', caseInsensitive: false },
        'newlines-between': 'always-and-inside-groups',
        'warnOnUnassignedImports': true
      }
    ]
  },
  ignores: [
    'src/assets/**',
    'node_modules',
    '*.md',
    '.vscode',
    'dist',
    '/public',
    '.husky',
    'Dockerfile',
  ]
})

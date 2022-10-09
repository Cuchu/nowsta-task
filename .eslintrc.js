module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['standard', 'plugin:jest/recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '(^_|resolve|reject)' }],
    'jest/no-test-callback': 'off',
  },
}

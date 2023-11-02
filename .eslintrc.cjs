module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:prettier/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    semi: ['error', 'always'],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    indent: [
      'off',
      2,
      {
        SwitchCase: 1
      }
    ],
    'comma-dangle': ['error', 'never'],
    'no-plusplus': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    'jsx-quotes': ['error', 'prefer-single']
  }
};

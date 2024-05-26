module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals'
  ],
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off', // Next.js automatically imports React
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};

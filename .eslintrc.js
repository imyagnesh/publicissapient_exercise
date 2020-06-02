module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jsx-control-statements/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'prettier', 'react-hooks', 'jsx-control-statements'],
  rules: {
    'jsx-control-statements/jsx-jcs-no-undef': 2,
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'prettier/prettier': ['error'],
    'jsx-a11y/href-no-hash': [0],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
  },
};

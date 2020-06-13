module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    es2020: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:react/recommended',
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
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'import', 'jsx-a11y', 'prettier', 'react-hooks', 'jsx-control-statements'],
  rules: {
    'jsx-control-statements/jsx-jcs-no-undef': 2,
    'react/react-in-jsx-scope': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-no-undef': [2, { allowGlobals: true }],
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    'prettier/prettier': ['error'],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    'import/resolver': {
      'babel-module': {
        extensions: ['.js', '.jsx'],
      },
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['~'],
      },
    },
  },
};

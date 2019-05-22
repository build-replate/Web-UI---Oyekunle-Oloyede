module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "quotes": 0,
    "arrow-parens": 0,
    "no-undef": 0,
    "no-new": 0,
    "array-callback-return": 0,
    "no-use-before-define": 0,
    "no-plusplus": 0
  },
};

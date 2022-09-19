const rules = {
  'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
  'no-unused-vars': 'warn',
  'react/forbid-prop-types': 'warn',
  'linebreak-style': 'off',
  'anchor-is-valid': 'off',
  'consistent-return': 'off',
  'array-callback-return': 'off',
  'react/state-in-constructor': 'off',
  'global-require': 'off',
  'jsx-a11y/label-has-for': 1,
  'jsx-a11y/anchor-is-valid': 0,
  'jsx-a11y/control-has-associated-label': 1,
  'jsx-a11y/label-has-associated-control': 1,
  'jsx-a11y/interactive-supports-focus': 1,
  'jsx-a11y/click-events-have-key-events': 1,
  'jsx-a11y/no-noninteractive-element-interactions': ['warn'],
  'jsx-a11y/no-static-element-interactions': 1,
  '@typescript-eslint/no-unused-vars': ['warn'],

  'react/display-name': [1, { ignoreTranspilerName: false }],
  'react/react-in-jsx-scope': 0,
  'react/destructuring-assignment': ['warn'],
  'react/no-unescaped-entities': ['warn'],

  'react/jsx-props-no-spreading': [
    1,
    {
      exceptions: ['Link'],
    },
  ],
  'import/extensions': [
    'warn',
    'never',
    {
      json: 'always',
      css: 'always',
    },
  ],
  'import/prefer-default-export': 'warn',
  camelcase: [
    'warn',
    {
      ignoreDestructuring: true,
      ignoreGlobals: true,
    },
  ],
  'react/prop-types': 1,
  'react/require-default-props': [0],
  'no-empty': ['error', { allowEmptyCatch: true }],
};

module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
  ],
  rules,
  env: {
    browser: true,
    prototypejs: true,
    es6: true,
    jest: false,
    node: true,
  },
  plugins: ['import'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
    project: './jsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
      typescript: {
        project: '.',
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      env: {
        browser: true,
        es6: true,
        node: true,
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
        'prettier',
        'plugin:react-hooks/recommended',
        'plugin:@next/next/recommended',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
      },
      plugins: ['@typescript-eslint'],
      rules: { ...rules, '@typescript-eslint/naming-convention': [1] },
    },
  ],
};

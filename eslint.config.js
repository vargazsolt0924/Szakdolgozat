import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: globals.browser,
    },
    plugins: {
      prettier: prettier,
    },
    rules: {
      quotes: ['error', 'single'],
      'prettier/prettier': 'error',
    },
  },
  pluginJs.configs.recommended,
];

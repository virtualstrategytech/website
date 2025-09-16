// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

export default [
  // Ignore build output and static assets
  { ignores: ['dist/**', 'node_modules/**', 'public/**', '.vite/**', 'coverage/**'] },

  // Base configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Project-wide rules (TS + JS + React)
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { react },
    settings: { react: { version: 'detect' } },
    rules: {
      // Quiet mode while you focus on building
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',

      // >>> stop the current errors
      'prefer-const': 'off',
    },
  },

  // Allow require() in JS config files like tailwind.config.js/postcss.config.js
  {
    files: ['**/*.js', '**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
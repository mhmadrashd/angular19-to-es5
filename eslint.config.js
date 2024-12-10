// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');

module.exports = tseslint.config(
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
      // "@angular-eslint/prefer-on-push-component-change-detection": ["warn"],
      'operator-linebreak': [
        'error',
        'after',
        {
          overrides: {
            '?': 'ignore',
            ':': 'ignore',
          },
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      'func-names': 'off',
      'no-param-reassign': 'off',
      'default-case': 'off',
      'comma-dangle': ['error', 'always-multiline'],
      'consistent-return': 'off',
      'new-cap': 'off',
      'no-underscore-dangle': 'off',
      'no-use-before-define': 'off',
      'no-new': 'off',
      'global-require': 'off',
      'no-control-regex': 'off',
      'wrap-iife': ['error', 'outside'],
      'no-mixed-operators': 0,
      'no-bitwise': 0,
      'no-restricted-globals': 0,
      'class-methods-use-this': 0,
      'no-fallthrough': 'off',

      'no-console': [
        'error',
        {
          allow: ['warn', 'error'],
        },
      ],

      'nonblock-statement-body-position': ['error', 'below'],
      'no-var': ['error'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-useless-constructor': ['off'],
      'no-trailing-spaces': 'error',
      'no-eval': ['error'],
      'no-useless-escape': ['off'],
      '@typescript-eslint/no-empty-interface': 'off',

      'no-empty': [
        'error',
        {
          allowEmptyCatch: true,
        },
      ],

      'constructor-super': 'error',

      indent: [
        'error',
        2,
        {
          VariableDeclarator: 'first',
          MemberExpression: 1,
          ArrayExpression: 1,
          ObjectExpression: 1,
          ImportDeclaration: 1,
        },
      ],

      'comma-style': ['error', 'last'],

      'no-irregular-whitespace': [
        'error',
        {
          skipTemplates: true,
          skipRegExps: true,
          skipComments: true,
        },
      ],

      'keyword-spacing': [
        'error',
        {
          before: true,
          after: true,
        },
      ],

      'no-whitespace-before-property': 'error',

      'array-bracket-newline': [
        'error',
        {
          multiline: true,
        },
      ],

      'array-bracket-spacing': [
        'error',
        'always',
        {
          objectsInArrays: false,
          singleValue: false,
          arraysInArrays: false,
        },
      ],

      'array-element-newline': ['error', 'always'],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': 'error',
      'computed-property-spacing': ['error', 'always'],
      'func-call-spacing': ['error', 'never'],
      'function-call-argument-newline': ['error', 'never'],
      'implicit-arrow-linebreak': ['error', 'beside'],

      'key-spacing': [
        'error',
        {
          beforeColon: false,
        },
      ],

      'lines-between-class-members': ['error', 'always'],
      'multiline-ternary': ['error', 'always-multiline'],
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'object-property-newline': 'error',
      'padded-blocks': ['error', 'never'],

      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['case', 'default'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
      ],

      'rest-spread-spacing': ['error', 'never'],
      'space-in-parens': ['error', 'never'],

      'newline-per-chained-call': [
        'error',
        {
          ignoreChainWithDepth: 2,
        },
      ],

      'linebreak-style': ['error', 'windows'],
      '@typescript-eslint/no-namespace': 'off',
    },
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/elements-content': 'off',
      '@angular-eslint/template/alt-text': 'off',
      // "@angular-eslint/template/prefer-self-closing-tags": "warn",
      // "@angular-eslint/template/prefer-ngsrc": "warn",
      // "@angular-eslint/template/prefer-control-flow": "warn",
    },
  }
);

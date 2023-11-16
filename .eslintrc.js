module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
		es6: true,
	},
	root: true,
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended',
		'next',
		'next/core-web-vitals',
	],
	rules: {
		'@typescript-eslint/ban-types': [
			'error',
			{
				types: {
					// un-ban a type that's banned by default
					'{}': false,
				},
				extendDefaults: true,
			},
		],
		'react/no-unescaped-entities': 'off',
		'no-console': ['warn', { allow: ['error'] }],
		curly: 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/display-name': 'off',
		'@typescript-eslint/no-empty-interface': 'off',
		'react/jsx-curly-brace-presence': [
			'warn',
			{
				props: 'never',
				children: 'never',
			},
		],
		'@typescript-eslint/no-empty-function': 'off'
	},
	globals: {
		React: true,
		JSX: true,
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
};

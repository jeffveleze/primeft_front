module.exports = {
	plugins: [
		"prettier",
	],
	extends: ["@verypossible/eslint-config/react", "prettier"],
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-unsafe-assignment': 'off',
		'@typescript-eslint/no-unsafe-call': 'off',
		'@typescript-eslint/no-unsafe-return': 'off',
		'@typescript-eslint/restrict-template-expressions': 'off',
		'import/no-unresolved': 'error',
		'import/order': [
		  'warn',
		  {
			pathGroups: [
			  {
				pattern: '~/**',
				group: 'parent',
			  },
			],
		  },
		],
		'no-magic-numbers': 'off',
		'prettier/prettier': [
		  'error',
		  {
			singleQuote: true,
		  },
		],
		'react/react-in-jsx-scope': 'off',
	  },
};
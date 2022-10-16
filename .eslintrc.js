module.exports = {
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"next",
		"next/core-web-vitals",
		"plugin:jest/recommended",
		"plugin:jest/style",
		"plugin:testing-library/react",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {},
};

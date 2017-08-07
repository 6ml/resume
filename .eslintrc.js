// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		// allow paren-less arrow functions
		'arrow-parens': 0,
		// allow async-await
		'generator-star-spacing': 0,
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		// 分号结尾
		"semi": [2, "always"],
		// 引号类型
		"quotes": [1, "double"],
		// 强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
		// if while function 后面的{必须与if在同一行，java风格。
		"brace-style": [2, "1tbs", { "allowSingleLine": true }],
		// 不允许空格和 tab 混合缩进
		"no-mixed-spaces-and-tabs": 0,
		// 不使用tab
		"no-tabs": "off",
		// 缩进风格
		"indent": [2, "tab"],
		// 确保对象中键值对间空格
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],
		// 确保逗号前后空格
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],
		// 使用严格模式
		"strict": [2, "global"],
		// 操作符前后空格
		"space-infix-ops": 2,
		// 块前空格
		"space-before-blocks": [2, "always"]
	}
};

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
    "quotes": [1, "double"],//引号类型 `` "" ''
    //强制使用一致的缩进 第二个参数为 "tab" 时，会使用tab，
    // if while function 后面的{必须与if在同一行，java风格。
    "brace-style": [2, "1tbs", { "allowSingleLine": true }],
    // // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs": 0,
    "no-tabs": "off",
    "indent": [2, "tab"]//缩进风格
  }
}

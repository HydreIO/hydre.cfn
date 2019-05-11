module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ],
  plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ["@babel/plugin-proposal-private-methods", { "loose": true }],
		['@babel/plugin-proposal-function-bind'],
		['@babel/plugin-proposal-optional-chaining']
	]
}

module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
	plugins: [
		"@babel/plugin-proposal-export-default-from",
		"@babel/plugin-proposal-optional-chaining",
	],
};

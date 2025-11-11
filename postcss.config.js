module.exports = {
	plugins: {
		autoprefixer: {
			// Autoprefixer will use browserslist from package.json
			// The warning about not needing prefixes is expected when targeting modern browsers
			// We suppress it in webpack config instead
		},
	},
};


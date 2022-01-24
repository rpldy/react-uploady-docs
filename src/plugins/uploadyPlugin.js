const UPLOADY_PKG = "@rpldy/uploady";
const pacote = require("pacote");
	// webpack = require("webpack");

const uploadyPlugin = (context, options) => {

	const getCurrentNpmVersion = async (config) => {
		let result = null;

		try {
			if (config.mode !== "development") {
				const manifest = await pacote.manifest(UPLOADY_PKG);
				result = manifest.version;
			} else {
				result = "dev";
			}
		} catch (e) {
			console.error("FAILED TO GET NPM VERSION !!!!!", e);
			result = "failed";
		}

		return result;
	};

	return {
		name: "uploady-plugin",

		async loadContent() {
			const data = {
					uploadyVersion: await getCurrentNpmVersion({}),
				};

			return data;
		},

		async contentLoaded({ content, actions }) {
			const { setGlobalData } = actions;

			setGlobalData(content);
		},

		// configureWebpack: (config, isServer, utils, content) => {
		//
		// 	console.log("UPLOADY WEBPACK PLUGIN -", content);
		//
		//
		// 	config.plugins.push(new webpack.DefinePlugin({
		// 		UPLOADY_VERSION: JSON.stringify(content),
		// 	}));
		//
		// 	// console.log("!!!!!!!! CONFIG !!!! ", config);
		//
		// 	return config;
		// },
	};
};

module.exports = uploadyPlugin;

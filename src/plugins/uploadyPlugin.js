const fetch = require("cross-fetch"),
	pacote = require("pacote");

const UPLOADY_PKG = "@rpldy/uploady",
	OC_MEMBERS_URL = "https://opencollective.com/react-uploady/members.json";

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

const getBackers = async () => {
	const res = await fetch(OC_MEMBERS_URL);
	let result = [];

	if (res.status === 200) {
		const json = await res.json();
		result = json
			.filter((member) => member.role === "BACKER")
			.sort((m, m2) => m2.totalAmountDonated - m.totalAmountDonated)
			.map((member) => ({
				id: member.MemberId,
				name: member.name,
				image: member.image,
				website: member.website || member.profile,
			}));

	} else {
		console.error(`GOT ${res.status} when getting: ${OC_MEMBERS_URL}`);
	}

	return result;
};

const uploadyPlugin = (context, options) => {
	return {
		name: "uploady-plugin",

		async loadContent() {
			const content = await Promise.all(
				[
					getCurrentNpmVersion({}),
					getBackers(),
				]
			);

			return {
				uploadyVersion: content[0],
				uploadyBackers: content[1],
			};
		},

		async contentLoaded({ content, actions }) {
			const { setGlobalData } = actions;

			console.log("SETTING UPLOADY PLUGIN CONTENT ", content);

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

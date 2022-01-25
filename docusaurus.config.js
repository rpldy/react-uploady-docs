// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "React-Uploady",
	tagline: "Modern file-upload components & hooks for React.",
	url: "https://react-uploady.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "https://res.cloudinary.com/yoav-cloud/image/upload/w_192,r_max/v1585756811/rpldy/logo/logo-white-bg.png",
	organizationName: "rpldy",
	projectName: "react-uploady",

	// metadata: [{name: 'twitter:card', content: 'summary'}],

	// customFields: {
	// 	description:
	// 		'An optimized site generator in React. Docusaurus helps you to move fast and write content. Build documentation websites, blogs, marketing pages, and more.',
	// },

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),

					// editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",

					// showLastUpdateAuthor: true,
					showLastUpdateTime: true,

					remarkPlugins: [[npm2yarn, { sync: true }]],
				},
				blog: {
					showReadingTime: true,

					// editUrl:
					// 	"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
	/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
			image: "img/uploady/react-uploady-text-logo.png",

			announcementBar: {
				id: "rpldy-announce-1", // Increment on change
				content: `⭐️ If you like Uploady, please give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/rpldy/react-uploady">GitHub</a> ⭐`,
			},

			navbar: {
				hideOnScroll: true,
				title: "React-Uploady",
				logo: {
					alt: "Uploady Logo",
					src: "img/uploady/react-uploady.png",
					srcDark: "img/uploady/react-uploady-light.png",
				},
				items: [
					//left-side
					{
						type: "doc",
						docId: "introduction",
						position: "left",
						label: "Docs",
					},
					{
						type: "doc",
						docId: "api/api",
						position: "left",
						label: "API",
					},
					{ to: "/blog", label: "Blog", position: "left" },


					//right-side
					{
						href: "https://github.com/rpldy/react-uploady",
						position: "right",
						className: "header-github-link",
						"aria-label": "GitHub repository",
					},
					{
						href: "https://www.npmjs.com/package/@rpldy/uploady",
						position: "right",
						className: "header-npm-version",
						"aria-label": "NPM package"
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Docs",
								to: "/docs/intro",
							},
							{
								label: "API",
								to: "/docs/api",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Stack Overflow",
								href: "https://stackoverflow.com/questions/tagged/docusaurus",
							},
							{
								label: "Discord",
								href: "https://discordapp.com/invite/docusaurus",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/poeticGeek",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/rpldy/react-uploady",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} React-Uploady, Yoav Niran.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	plugins: [
		[
			"@docusaurus/plugin-sitemap",
			{
				changefreq: "weekly",
				priority: 0.5,
			},
		],
		"./src/plugins/uploadyPlugin",
		//TODO - configure PWA plugin!!
		// [
		// 	"@docusaurus/plugin-pwa",
		// 	{
		//
		// 	}
		// ]
	],
};

module.exports = config;

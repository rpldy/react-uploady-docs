// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const npm2yarn = require("@docusaurus/remark-plugin-npm2yarn");


const logo = {
	alt: "Uploady Logo",
	src: "img/uploady/react-uploady.png",
	srcDark: "img/uploady/react-uploady-light.png",
};

/** @type {import("@docusaurus/types").Config} */
const config = {
	title: "React-Uploady",
	tagline: "Modern file-upload components & hooks for React.",
	url: "https://react-uploady.netlify.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "https://res.cloudinary.com/yoav-cloud/image/upload/w_192,r_max/v1585756811/rpldy/logo/logo-white-bg.png",
	organizationName: "rpldy",
	projectName: "react-uploady",

	customFields: {
		description:
			"react-uploady is a library containing modern file-upload components & hooks for React.",
		contact: {
			Twitter: "https://twitter.com/poeticGeek",
			Github: "https://github.com/yoavniran",
			Linkedin: "https://www.linkedin.com/in/yoavniran/",
			Instagram: "https://instagram.com/literaryCoder",
			Medium: "https://poeticgeek.medium.com/",
			"dev.to": "https://dev.to/poeticgeek"
		},
		homeVideoId: "bxvHE4hWu3c",
	},

	presets: [
		[
			"classic",
			/** @type {import("@docusaurus/preset-classic").Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),

					editUrl: "https://github.com/rpldy/react-uploady-docs/edit/master/",

					// showLastUpdateAuthor: true,
					showLastUpdateTime: true,

					remarkPlugins: [[npm2yarn, { sync: true }]],
				},
				blog: {
					showReadingTime: true,
					postsPerPage: 3,
					feedOptions: {
						type: "all",
						copyright: `Copyright © ${new Date().getFullYear()} Yoav Niran`,
					},
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
				sitemap: {
					changefreq: "weekly",
					priority: 0.5,
				},
				gtag: {
					trackingID: "G-6GB4P0YRQN",
					anonymizeIP: true,
				},
			}),
		],
	],

	themeConfig:
	/** @type {import("@docusaurus/preset-classic").ThemeConfig} */
		({
			image: "img/uploady/react-uploady-text-logo-og.png",

			metadata: [
				{ name: "twitter:card", content: "summary_large_image" },
				{ name: "twitter:domain", content: "react-uploady.netlify.app" },
				{ name: "keywords", content: "uploady,react-uploady,file upload,upload,queue,javascript,frontend dev,development,documentation,docs,chunked uploads,resumable" },
			],

			hideableSidebar: true,

			announcementBar: {
				id: "rpldy-announce-1", // Increment on change
				content: `⭐️ If you like Uploady, please give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/rpldy/react-uploady">GitHub</a> ⭐`,
			},

			navbar: {
				hideOnScroll: true,
				title: "React-Uploady",
				logo,
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
						docId: "api/providers/uploady",
						position: "left",
						label: "API",
					},
					{
						to: "/blog",
						label: "Blog",
						position: "left"
					},

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
					{
						label: "donate",
						href: "https://opencollective.com/react-uploady",
						position: "right",
					}
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
								to: "/docs",
							},
							{
								label: "API",
								to: "/docs/api",
							},
							{
								label: "Storybook",
								href: "https://react-uploady-storybook.netlify.app/"
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Discussions",
								href: "https://github.com/rpldy/react-uploady/discussions",
							},
							{
								label: "External Resources",
								to: "/docs/external#blog-posts"
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
							{
								label: "Issues",
								href: "https://github.com/rpldy/react-uploady/issues"
							},
							{
								html: `<a href="https://app.netlify.com/sites/react-uploady/deploys">
									<img src="https://api.netlify.com/api/v1/badges/22e2f0d8-93e2-4889-b9fc-17c9302675c9/deploy-status" alt="netlify status"/>
								</a>`
							}
						],
					},
				],
				logo: { ...logo, height: 48, width: 48 },
				copyright: `Copyright © ${new Date().getFullYear()} React-Uploady, <a href="/docs/yoav">Yoav Niran.</a>`,
			},

			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),

	plugins: [
		[
			"@docusaurus/plugin-pwa",
			{
				debug: false,
				offlineModeActivationStrategies: [
					"appInstalled",
					"standalone",
					"queryString",
				],
				pwaHead: [
					{
						tagName: "link",
						rel: "icon",
						href: "/img/uploady/react-uploady.png",
					},
					{
						tagName: "link",
						rel: "manifest",
						href: "/manifest.json", // your PWA manifest
					},
					{
						tagName: "meta",
						name: "theme-color",
						content: "#052649",
					},
					{
						tagName: "meta",
						name: "apple-mobile-web-app-capable",
						content: 'yes',
					},
					{
						tagName: "meta",
						name: "apple-mobile-web-app-status-bar-style",
						content: "#052649",
					},
					{
						tagName: "link",
						rel: "apple-touch-icon",
						href: "img/uploady/react-uploady.png",
					},
				],
			},
		],

		"./src/plugins/uploadyPlugin",
	],
};

module.exports = config;

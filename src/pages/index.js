import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageQuotes from "../components/HomepageQuotes";
import HomepageVideo from "../components/HomepageVideo";
// import useThemeContext from "@theme/hooks/useThemeContext";

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext();
	// const {isDarkTheme, setLightTheme, setDarkTheme} = useTheme();

	return (
		<header className={clsx("hero hero--primary", styles.heroBanner)}>
			<div className="container">
				<ThemedImage
					className={styles.heroLogo}
					sources={{
						light: useBaseUrl("/img/uploady/react-uploady-text-logo.png"),
						dark: useBaseUrl("/img/uploady/react-uploady-text-logo-light.png"),
					}}
				/>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className="button button--primary button--active button--lg"
						to="/docs/"
					>
						Get Started
					</Link>
					<Link
						className="button button--outline button--secondary button--lg"
						to="https://github.com/rpldy/react-uploady"
					>
						Uploady on GitHub
					</Link>
					<iframe
						src="https://ghbtns.com/github-btn.html?user=rpldy&repo=react-uploady&type=star&count=true&size=large"
						frameBorder="0" scrolling="0" width="170" height="30" title="GitHub"/>
				</div>
			</div>
		</header>
	);
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	// const { isDarkTheme } = useThemeContext();

	return (
		<Layout
			home
			title={`Home`}
			description={siteConfig.customFields.description}
		>
			<HomepageHeader/>
			<main>
				<HomepageFeatures/>
				<HomepageVideo />
				<HomepageQuotes/>
			</main>
		</Layout>
	);
}

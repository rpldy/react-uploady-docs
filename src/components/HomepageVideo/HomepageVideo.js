import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import YoutubePreview from "../YoutubePreview";
import styles from "./HomepageVideo.module.css";
import clsx from "clsx";

const HomepageVideo = () => {
	const { siteConfig } = useDocusaurusContext();
	const { homeVideoId } = siteConfig.customFields;

	return (<div
			className={clsx("hero--primary", styles.homeVideoContainer)}
		>
			<section>
						<YoutubePreview id={homeVideoId} className={styles.video}/>
			</section>
		</div>
	);
};

export default HomepageVideo;

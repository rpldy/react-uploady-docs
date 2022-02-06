import React from "react";
import YoutubePreview from "../YoutubePreview";
import styles from "./YoutubeVideosList.module.css";

//TODO: retrieve videos in playlist from youtube API

const YoutubeVideosList = ({ videos }) => {
	return <div className={styles.videos}>
		{videos.map(({ id, title }) =>
			<a key={id} href={`https://youtu.be/${id}`} target="_blank" rel="nofollow noopener"
			style={{  position: "relative" }}>
				<YoutubePreview id={id} embed={false}/>
				<span className={styles.videoTitle}>{title}</span>
			</a>)}
	</div>;
};

export default YoutubeVideosList;


import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import styles from "./YoutubePreview.module.css";
import clsx from "clsx";

const YoutubePreview = ({ id, className, embed = true }) => {
	const [isShowingEmbed, setShowEmbed] = useState(false);

	const onClick = () => {
		if (embed && !isShowingEmbed) {
			setShowEmbed(true);
		}
	};

	const normalImg = `https://i3.ytimg.com/vi/${id}/hqdefault.jpg`,
		hiResImg = `https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`;

	return (<div className={clsx(styles.preview, className)} onClick={onClick}>
		<div className={clsx(
			styles.imgContainer,
			{
				[styles.absImg]: isShowingEmbed,
				[styles.imgPreviewMode]: !isShowingEmbed,
			},
		)}>
			<picture>
				<source media="(max-width: 1000px)" srcSet={normalImg}/>
				<source media="(min-width: 1000px)" srcSet={hiResImg}/>
				<img src={hiResImg} alt="youtube preview image"/>
			</picture>


			{!isShowingEmbed && <FaYoutube size="10%" fill="red"/>}
		</div>

		{isShowingEmbed &&
			<div className={styles.iframeContainer}>
				<iframe src={`https://www.youtube.com/embed/${id}?autoplay=1`}
				        title="YouTube video player"
				        frameBorder="0"
				        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				        allowFullScreen
				/>
			</div>}
	</div>);
};

export default YoutubePreview;



import React from "react";
import { FaPlay } from "react-icons/fa";

//TODO: retrieve videos in playlist from youtube API

const YoutubeVideosList = ({ videos }) => {
	return <div style={{ display: "flex", flexWrap: "wrap" }}>
		{videos.map((id) =>
			<a key={id} href={`https://youtu.be/${id}`} target="_blank" rel="nofollow noopener"
			style={{  position: "relative" }}>
				<img
					style={{ marginRight: "10px", marginBottom: "10px", maxWidth: "300px" }}
					src={`https://i3.ytimg.com/vi/${id}/maxresdefault.jpg`}
				/>
				<FaPlay
					size={32}
					fill="#FFF"
					style={{ position:"absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}/>
			</a>)}
	</div>;
};

export default YoutubeVideosList;


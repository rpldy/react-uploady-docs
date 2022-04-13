import React from "react";
import Link from "@docusaurus/Link";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import getIdealImageMaxSrc from "../getIdealImageMaxSrc";

import styles from "./HomepageComponents.module.css";

const Components = [
	{
		title: "Upload Button",
		link: "/docs/api/components/uploadButton",
		description: "Easy to use & stylable component to initiate local file uploads",
		image:
			require("../../../static/img/uploady/components/upload-button.png"),
		className: "clip-path-1",
	},
	{
		title: "Upload Preview",
		link: "/docs/api/components/uploadPreview",
		description: "Customizable preview component for files being uploaded",
		image:
			require("../../../static/img/uploady/components/upload-preview.png"),
		className: "clip-path-2",
	},
	{
		title: "Upload Drop-Zone",
		link: "/docs/api/components/uploadDropZone",
		description: "Drop zone component to initiate file and folder uploads",
		image:
			require("../../../static/img/uploady/components/upload-drop-zone.png"),
		className: "clip-path-3",
	},
	{
		title: "Upload URL Input",
		link: "/docs/api/components/uploadUrlInput",
		description: "Input component to enter a URL that will be sent as an upload",
		image:
			require("../../../static/img/uploady/components/upload-url-input.png"),
		className: "clip-path-4",
	},
];

const ComponentShowcase = ({ title, link, description, image, className }) => {
	return <div className={clsx(styles.compShowCase, className)}>
		<Link to={link} className={clsx("row", styles.showCaseLink)}>
			<Image img={getIdealImageMaxSrc(image, 600)}/>
			<div className={clsx(styles.componentText)}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
		</Link>
	</div>;
};

const HomepageComponents = () => {
	return (
		<div className={clsx("hero--primary", styles.components)}>
			<h1>Components</h1>
			<div className={clsx(styles.limitedContainer)}>
				{Components.map((c) => <ComponentShowcase {...c} key={c.title}/>)}
			</div>
		</div>
	);
};

export default HomepageComponents;

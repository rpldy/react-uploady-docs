import React from "react";
import clsx from "clsx";
import Image from "@theme/IdealImage";
import getIdealImageMaxSrc from "../getIdealImageMaxSrc";

import styles from "./HomepageComponents.module.css";

const Components = [
	{
		title: "Upload Button",
		description: "Easy to use & stylable component to initiate local file uploads",
		image:
			require("../../../static/img/uploady/components/upload-button.png"),
	},
	// {
	// 	title: "",
	// 	description: "",
	// 	image:
	// 		require("../../../static/img/uploady/components/"),
	// },
];

const ComponentShowcase = ({ title, description, image }) => {
	return <div className={clsx("row", styles.compShowCase)}>
		<Image img={getIdealImageMaxSrc(image, 600)}/>
		<div className={clsx(styles.)}
	</div>;
};

const HomepageComponents = () => {
	return (
		<div className={clsx("hero--primary", styles.components)}>
				{Components.map((c) => <ComponentShowcase {...c} key={c.title}/>)}
		</div>
	);
};

export default HomepageComponents;

import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FEATURES = [
	{
		title: "Get Started Quickly",
		image: require("../../../static/img/uploady/feature1.png").default,
		description: (
			<>
				React-Uploady takes care of complex & advanced uploading flows
				without you needing to write a whole lot of code.
			</>
		),
	},
	{
		title: "Simple yet Configurable",
		image: require("../../../static/img/uploady/feature2.png").default,
		description: (
			<>
				All of Uploady's features can be used easily and out of the box.
				However, everything is configurable and extensible, so you can easily make it fit your particular needs.
			</>
		),
	},
	{
		title: "Building Blocks Inside",
		image: require("../../../static/img/uploady/feature3.png").default,
		description: (
			<>
				React-Uploady doesn't try to be something it's not.
				It provides the building-blocks (components & hooks) for you to build your upload flow they way you like it.
			</>
		),
	},
];

function Feature({ image, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className="text--center">
				<img src={image} />
			</div>
			<div className="text--center padding-horiz--md">
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className="container">
				<div className="row">
					{FEATURES.map((props) => (
						<Feature key={props.title} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}

import React from "react";
import clsx from "clsx";
import { BsFillPersonFill } from "react-icons/bs";
import { useWindowSize } from "@docusaurus/theme-common";
import { usePluginData } from "@docusaurus/useGlobalData";
import styles from "./HomepageSponsors.module.css";

const BackerContent = ({ image, name }) => {
	const isMobile = useWindowSize() === "mobile";

	return (
		<>
			{image ? <img src={image}/> : <BsFillPersonFill size={80}/>}
			{isMobile && name}
		</>
	);
};

const Backer = ({ id, name, image }) => {
	return (
		<div
			data-id={id}
			title={name}
			className={clsx("col col--3 quote-col", styles.backer)}
		>
			<BackerContent image={image} name={name}/>
		</div>
	);
};

const BackerWithLink = ({ website, id, name, image }) => {
	return (
		<a
			target="_blank"
			rel="noopener"
			data-id={id}
			title={name}
			className={clsx("col col--3 quote-col", styles.backer)}
			href={website + (website.includes("?") ? "&" : "?" + "ref=react-uploady")}
		>
			<BackerContent image={image} name={name}/>
		</a>
	);
};

const HomepageSponsors = () => {
	const { uploadyBackers } = usePluginData("uploady-plugin");

	return (
		<div className={clsx(styles.backersContainer)}>
			{
				uploadyBackers.length &&
				<div className={clsx(styles.backersWrapper)}>
					<h3>Uploady is proudly backed by:</h3>

					<div className={clsx("row", styles.backersList)}>
						{uploadyBackers.map(
							(backer) =>
								backer.website ?
									<BackerWithLink key={backer.id} {...backer} /> :
									<Backer key={backer.id} {...backer} />)
						}
					</div>
				</div>
			}
			<div className={`row ${styles.shareLinkRow}`}>
				<h4>You can be an Uploady Supporter too!</h4>
				<div className={clsx(styles.sponsorLinks)}>
					<a target="_blank" href="https://opencollective.com/react-uploady">Open Collective</a>
					|
					<a target="_blank" href="https://github.com/sponsors/yoavniran">Github</a>
				</div>

				<h5>(and have your name and/or company's logo shown here)</h5>
			</div>

		</div>
	);
};

export default HomepageSponsors;

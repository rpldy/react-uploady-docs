import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./SiteVersionChip.module.css";

const SiteVersionChip = () => {
	const context = useDocusaurusContext();

	console.log("CONTEXT ", context);

	return <div className={styles.chip}>

	</div>;
};

export default SiteVersionChip;

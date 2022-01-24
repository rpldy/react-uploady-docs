import React, { useEffect } from "react";
import DocusaurusNavbar from "@theme-original/Navbar";
import { usePluginData } from "@docusaurus/useGlobalData";

import "./navbar.css";

const UploadyNavBar = (props) => {
	const { uploadyVersion } = usePluginData("uploady-plugin");

	useEffect(() => {
		const versionItem = document.querySelector(".navbar__item.header-npm-version");
		versionItem.textContent = uploadyVersion;
	}, [uploadyVersion]);

	return <DocusaurusNavbar {...props}/>;
};

export default UploadyNavBar;


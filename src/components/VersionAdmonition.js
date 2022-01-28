import React from "react";
import Admonition from "@theme/Admonition";
import { usePluginData } from "@docusaurus/useGlobalData";

const VersionAdmonition = () => {
	const { uploadyVersion } = usePluginData("uploady-plugin");

	return (
		<Admonition type="info">
			<p>Current Version: {uploadyVersion}</p>
		</Admonition>
	);
}

export default VersionAdmonition;

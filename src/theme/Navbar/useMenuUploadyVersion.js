import { useEffect } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

const useMenuUploadyVersion = (selector, ...conditions) => {
	const { uploadyVersion } = usePluginData("uploady-plugin");

	useEffect(() => {
		if (!conditions.length || conditions.every(Boolean)) {
			const barVersionItem = document.querySelector(`${selector}.header-npm-version`);

			barVersionItem.textContent = uploadyVersion;
		}

	}, [uploadyVersion, ...conditions]);
};

export default useMenuUploadyVersion;

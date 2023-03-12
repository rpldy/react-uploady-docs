import { useEffect } from "react";
import { usePluginData } from "@docusaurus/useGlobalData";

const updateItemWithVersion = (selector, version) => {
	const barVersionItem = document.querySelector(`${selector}.header-npm-version`);

	if (barVersionItem) {
		barVersionItem.textContent = version;
	}

	return !!barVersionItem;
};

const useMenuUploadyVersion = (selector, ...conditions) => {
	const { uploadyVersion } = usePluginData("uploady-plugin");

	useEffect(() => {
		let delayedHandler = null;

		if (!conditions.length || conditions.every(Boolean)) {
			const updated = updateItemWithVersion(selector, uploadyVersion);

			if (!updated) {
				delayedHandler = setTimeout(() => {
						delayedHandler = null;
						updateItemWithVersion(selector, uploadyVersion);
					},
					500,
				);
			}
		}

		return () => {
			if (delayedHandler) {
				clearTimeout(delayedHandler);
			}
		};
	}, [uploadyVersion, ...conditions]);
};

export default useMenuUploadyVersion;

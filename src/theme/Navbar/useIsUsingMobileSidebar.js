import { useWindowSize, useThemeConfig } from "@docusaurus/theme-common";

/**
 * mimics (not exactly) the now internal useNavbarMobileSidebar from docusaurus
 * @returns {boolean}
 */
const useIsUsingMobileSidebar = () => {
	const windowSize = useWindowSize();
	const { items } = useThemeConfig().navbar;

	return windowSize === "mobile" && !!items.length;
};

export default useIsUsingMobileSidebar;

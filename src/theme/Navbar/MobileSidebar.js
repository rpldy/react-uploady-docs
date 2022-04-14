import React from "react";
import DocusaurusMobileSidebar from "@theme-original/Navbar/MobileSidebar";
import { useNavbarMobileSidebar } from "@docusaurus/theme-common";
import useMenuUploadyVersion from "./useMenuUploadyVersion";

import "./mobile-sidebar.css";

const UploadyMobileSidebar = (props) => {
	const { shouldRender } = useNavbarMobileSidebar();
	useMenuUploadyVersion(".menu__link", shouldRender);

	return <DocusaurusMobileSidebar {...props}/>;
};

export default UploadyMobileSidebar;


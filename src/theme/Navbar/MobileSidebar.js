import React from "react";
import DocusaurusMobileSidebar from "@theme-original/Navbar/MobileSidebar";
import useMenuUploadyVersion from "./useMenuUploadyVersion";
import useIsUsingMobileSidebar from "./useIsUsingMobileSidebar";

import "./mobile-sidebar.css";


const UploadyMobileSidebar = (props) => {
	const shouldRender = useIsUsingMobileSidebar();
	useMenuUploadyVersion(".menu__link", shouldRender);

	return <DocusaurusMobileSidebar {...props}/>;
};

export default UploadyMobileSidebar;


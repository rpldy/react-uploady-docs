import React  from "react";
import DocusaurusNavbar from "@theme-original/Navbar";
import useMenuUploadyVersion from "./useMenuUploadyVersion";

import "./navbar.css";

const UploadyNavBar = (props) => {
	useMenuUploadyVersion(".navbar__item");

	return <DocusaurusNavbar {...props}/>;
};

export default UploadyNavBar;

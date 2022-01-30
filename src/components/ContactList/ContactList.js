import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
// import { useColorMode } from "@docusaurus/theme-common";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter, FaMedium, FaLink } from "react-icons/fa";
import styles from "./ContactList.module.css";

const ICONS = {
	"twitter": FaTwitter,
	"instagram": FaInstagram,
	"linkedin": FaLinkedinIn,
	"medium": FaMedium,
	"github": FaGithub,
};

const ContactList = () => {
	const { siteConfig } = useDocusaurusContext();
	// const { isDarkTheme } = useColorMode();

	return <ul className={styles.linkList}>
		{Object.entries(siteConfig.customFields.contact)
			.map(([key, value]) => {
				const Icon = ICONS[key.toLowerCase()] || FaLink;
				return (
					<li key={key}>
						<a href={value} target="_blank" rel="nofollow noopened" className={styles.link}>
							{Icon && <Icon size={48}/>}
							{key}
						</a>
					</li>);
			})}
	</ul>;
};

export default ContactList;

import React, { useEffect } from "react";
import DocusaurusLayout from "@theme-original/Layout";
import Head from "@docusaurus/Head";

const UploadyLayout = (props) => {
	useEffect(() => {
		console.log(` HELLO
		
 ______                  __          ___ ___       __                __       
|   __ |.----.---.-.----| |__ ______|   |   |-----|  .-----.---.-.--|  .--.--.
|      |  -__|  _  |  __|   _|______|   |   |  _  |  |  _  |  _  |  _  |  |  |
|___|__|_____|___._|____|____|      |_______|   __|__|_____|___._|_____|___  |
                                            |__|                       |_____|
		`);
	}, []);

	//  ________  _______   ________  ________ _________               ___  ___  ________  ___       ________  ________  ________      ___    ___
// |\   __  \|\  ___ \ |\   __  \|\   ____\\___   ___\            |\  \|\  \|\   __  \|\  \     |\   __  \|\   __  \|\   ___ \    |\  \  /  /|
// \ \  \|\  \ \   __/|\ \  \|\  \ \  \___\|___ \  \_|____________\ \  \\\  \ \  \|\  \ \  \    \ \  \|\  \ \  \|\  \ \  \_|\ \   \ \  \/  / /
//  \ \   _  _\ \  \_|/_\ \   __  \ \  \       \ \  \|\____________\ \  \\\  \ \   ____\ \  \    \ \  \\\  \ \   __  \ \  \ \\ \   \ \    / /
//   \ \  \\  \\ \  \_|\ \ \  \ \  \ \  \____   \ \  \|____________|\ \  \\\  \ \  \___|\ \  \____\ \  \\\  \ \  \ \  \ \  \_\\ \   \/  /  /
//    \ \__\\ _\\ \_______\ \__\ \__\ \_______\  \ \__\              \ \_______\ \__\    \ \_______\ \_______\ \__\ \__\ \_______\__/  / /
//     \|__|\|__|\|_______|\|__|\|__|\|_______|   \|__|               \|_______|\|__|     \|_______|\|_______|\|__|\|__|\|_______|\___/ /
//                                                                                                                               \|___|/

	const pageClassName  = (props.pageClassName || "") + (props.home ? "homepage" : "");

	return <>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
				<link rel="preconnect" href="https://i3.ytimg.com" />
			</Head>
			<DocusaurusLayout {...props} pageClassName={pageClassName}/>
		</>;
};

export default UploadyLayout;

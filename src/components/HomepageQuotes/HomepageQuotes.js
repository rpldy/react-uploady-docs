import React from "react";
import clsx from "clsx";
import { FaQuoteRight } from "react-icons/fa";
import styles from "./HomepageQuotes.module.css";

const QUOTES = [
	{
		text: "What a fantastically compact, well-designed, well-documented and simple-to-use library! Many thanks, and many kudos!",
		name: "John S.",
		//https://github.com/rpldy/react-uploady/discussions/198
	},
	{
		text: "It's an awesome library, thanks for creating it ❤️",
		name: "Ofer I.",
		//https://github.com/rpldy/react-uploady/discussions/131#discussioncomment-340711
	},
	{
		text: "You need to allow the user to choose files, upload them, and get feedback on the status of their upload. This is where react-uploady comes in to save the day",
		name: "Austin R.O.",
		//https://blog.logrocket.com/building-a-file-upload-component-with-react-uploady-and-ant-design/
	},
];

const Quote = ({ text, name }) => {
	return <div className={clsx("col col--4", styles.quote)}>
		<div className="text--center padding-horiz--md">
			<FaQuoteRight size={32}/>
			<h3>{name}</h3>
			<p>"{text}"</p>
		</div>
	</div>;
};

const HomepageQuotes = () => {
	return <div className={clsx("hero--primary", styles.quotesContainer)}>
		<section>
		<div className="container">
			<div className="row">
				{QUOTES.map((quote) => <Quote {...quote} key={quote.name}/>)}
			</div>
		</div>
		</section>
	</div>;
};

export default HomepageQuotes;

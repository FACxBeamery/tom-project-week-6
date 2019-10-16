import React from "react";

const IntroPage = ({ setStage }) => {
	return (
		<div>
			<h1>Welcome to the game!</h1>
			<p>To play, you need to blah blah blah</p>
			<button
				onClick={() => {
					setStage((st) => st + 1);
				}}
			>
				Let's go!
			</button>
		</div>
	);
};

export default IntroPage;

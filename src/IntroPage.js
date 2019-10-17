import React from "react";
import main from "./css/main.module.css";

const IntroPage = ({ setStage }) => {
	return (
		<div className={main.slide}>
			<h1>Welcome to the game!</h1>
			<p className={main.introtext}>
				Your mission is to fly around the world and soak up the sun!
				Depending on how hot your destination is, you'll get (or lose!)
				a tan. Try to get the best tan you can in 5 trips, but be
				careful not to burn yourself!
			</p>
			<button
				className={main.button}
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

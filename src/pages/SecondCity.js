import React from "react";
import CityForm from "./CityForm.js";
import main from "../css/main.module.css";

const SecondCity = ({
	score,
	temp,
	city,
	setTemp,
	setScore,
	setCity,
	setStage,
	stage,
	tempTest
}) => {
	const lastCity = (" " + city).slice(1); // awful hack for deep copy
	return tempTest ? (
		<div className={main.slide}>
			<h1>Stage {stage} page</h1>
			<p>
				The temperature of {lastCity} is {temp.toFixed(1)} C. Your total
				score so far is {Number(score).toFixed()}.
			</p>
			<p> What's your next destination? Enter it here:</p>
			<CityForm city={city} setCity={setCity} setStage={setStage} />
		</div>
	) : null;
};

export default SecondCity;

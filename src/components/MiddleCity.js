import React from "react";
import CityForm from "./CityForm.js";
import main from "../css/main.module.css";

const MiddleCity = ({
	score,
	temp,
	city,
	setCity,
	setRequestLogger,
	stage,
	formValue,
	setFormValue
}) => {
	return (
		<div className={main.slide}>
			<h1>Stage {stage} page</h1>
			<p>
				The temperature of {city} is {temp.toFixed(1)} C. Your total
				score so far is {Number(score).toFixed()}.
			</p>
			<p> What's your next destination? Enter it here:</p>
			<CityForm
				city={city}
				setRequestLogger={setRequestLogger}
				setCity={setCity}
				formValue={formValue}
				setFormValue={setFormValue}
			/>
		</div>
	);
};

export default MiddleCity;

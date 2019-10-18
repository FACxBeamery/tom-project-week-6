import React from "react";
import CityForm from "./CityForm";
import main from "../css/main.module.css";

const FirstCity = ({ city, setRequestLogger, setCity }) => {
	return (
		<div className={main.slide}>
			<h1>Enter your first city in the form below</h1>
			<CityForm
				city={city}
				setRequestLogger={setRequestLogger}
				setCity={setCity}
			/>
		</div>
	);
};

export default FirstCity;

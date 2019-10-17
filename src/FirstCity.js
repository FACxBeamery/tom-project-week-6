import React from "react";
import CityForm from "./CityForm";
const FirstCity = ({ city, setStage, setCity, stage }) => {
	return (
		<>
			<h1>Enter your first city in the form below</h1>
			<CityForm
				city={city}
				setStage={setStage}
				setCity={setCity}
				stage={stage}
			/>
		</>
	);
};

export default FirstCity;

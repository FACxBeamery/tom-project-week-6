import React from "react";
import CityForm from "./CityForm";

const SecondCity = ({ score, temp, city, handleCity, submit }) => {
	return (
		<>
			<h1>Second city page</h1>
			<p>
				Your score is {score.toFixed(2)}. The temperature of {city} is
				{temp.toFixed(1)} C
			</p>
			<p> What's your next destination? Enter it here:</p>
			<CityForm city={city} handleCity={handleCity} submit={submit} />
		</>
	);
};

export default SecondCity;

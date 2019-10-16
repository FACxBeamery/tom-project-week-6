import React from "react";
import "./App.css";
import { getWeather, checkResponse } from "./getWeather.js";

import FirstCity from "./FirstCity";
import SecondCity from "./SecondCity";
import IntroPage from "./IntroPage";
import ResultsPage from "./ResultsPage";

//TODO score is one behind what it should be.
const App = () => {
	// react state variables
	const [score, setScore] = React.useState(10);
	const [stage, setStage] = React.useState(0);
	const [city, setCity] = React.useState("London");
	const [temp, setTemp] = React.useState(20);

	// changes city as it's typed in
	const handleCity = (event) => {
		if (event) {
			event.preventDefault();
		}
		setCity(event.target.value);
	};

	const handleTemp = (data) => {
		setTemp(data.main.temp - 273.3); // K -> C
	};

	const handleScore = (temperature) => {
		setScore((sc) => sc + (temperature - 10));
	};

	const handleStage = () => {
		setStage((st) => st + 1);
	};

	// sets Temp, new score and moves  stage on
	const submit = (city) => {
		getWeather(city)
			.then(checkResponse)
			.then(handleTemp)
			.then((res) => handleScore(temp))
			.then(handleStage)
			.catch((err) => {
				throw new Error(`Failed to get weather data ${err}`);
			});
	};

	return (
		<>
			{(stage === 0 && <IntroPage setStage={setStage} />) ||
				(stage === 1 && (
					<FirstCity
						city={city}
						score={score}
						handleCity={handleCity}
						submit={submit}
					/>
				)) ||
				([2, 3, 4].includes(stage) && (
					<SecondCity
						score={score}
						temp={temp}
						city={city}
						handleCity={handleCity}
						submit={submit}
					/>
				)) ||
				(stage === 5 && <ResultsPage score={score} />)}
		</>
	);
};
export default App;

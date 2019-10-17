import React from "react";
import "./App.css";
import { getWeather, checkResponse } from "./getWeather.js";

import FirstCity from "./FirstCity";
import SecondCity from "./SecondCity";
import IntroPage from "./IntroPage";
import ResultsPage from "./ResultsPage";

//TODO
// * score is one behind what it should be.
// * React.useEffect()???
// * Make it pretty - animations!
// * Form validation
// * Accessibility

const App = () => {
	// react state variables
	const [score, setScore] = React.useState(10);
	const [stage, setStage] = React.useState(0);
	const [city, setCity] = React.useState(undefined);
	const [temp, setTemp] = React.useState(undefined);

	// changes city as it's typed in

	// const handleTemp = (data) => {
	// 	setTemp(data.main.temp - 273.3); // K -> C
	// };

	// const handleScore = (temperature) => {
	// 	setScore((sc) => sc + (temperature - 10));
	// };

	// sets Temp, new score and moves  stage on
	// const submit = (city) => {
	// 	getWeather(city)
	// 		.then(checkResponse)
	// 		.then(handleTemp)
	// 		.then((res) => handleScore(temp))
	// 		.then(handleStage)
	// 		.catch((err) => {
	// 			throw new Error(`Failed to get weather data ${err}`);
	// 		});
	// };

	return (
		<>
			{(stage === 0 && <IntroPage setStage={setStage} />) ||
				(stage === 1 && (
					<FirstCity
						city={city}
						score={score}
						setCity={setCity}
						setStage={setStage}
					/>
				)) ||
				([2, 3, 4].includes(stage) && (
					<SecondCity
						score={score}
						temp={temp}
						city={city}
						setScore={setScore}
						setTemp={setTemp}
						setCity={setCity}
						setStage={setStage}
						stage={stage}
					/>
				)) ||
				(stage === 5 && (
					<ResultsPage score={score} city={city} temp={temp} />
				))}
		</>
	);
};
export default App;

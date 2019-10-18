import React from "react";
import "./css/App.css";
import { getWeather, checkResponse } from "./utils/getWeather.js";

import FirstCity from "./pages/FirstCity";
import SecondCity from "./pages/SecondCity";
import IntroPage from "./pages/IntroPage";
import FinalCity from "./pages/FinalCity";
import ResultsPage from "./pages/ResultsPage";
const dotenv = require("dotenv");

dotenv.config();
//TODO

// * Make it pretty
// * Accessibility

const App = () => {
	// react state variables
	const [score, setScore] = React.useState(30);
	const [stage, setStage] = React.useState(0);
	const [city, setCity] = React.useState("");
	const [temp, setTemp] = React.useState(0);
	const [tempTest, setTempTest] = React.useState(undefined);
	const [requestLogger, setRequestLogger] = React.useState(0);

	React.useEffect(() => {
		if (stage !== 0) {
			getWeather(city)
				.then(checkResponse)
				.then((data) => {
					if (data === 404) {
						alert(
							"404: Please make sure the city is spelled correctly!"
						);
					} else {
						setTemp(data.main.temp - 273.3);
						setScore(
							(score) =>
								Number(score) +
								(Number(data.main.temp) - 273.3 - 20)
						);
						setTempTest(Number(data.main.temp));
						setStage((stage) => stage + 1);
					}
				})
				.catch((err) => {
					console.error(err);
				});
		}
	}, [requestLogger]);

	return (
		<>
			{(stage === 0 && <IntroPage setStage={setStage} />) ||
				(stage === 1 && (
					<FirstCity
						city={city}
						score={score}
						setCity={setCity}
						setRequestLogger={setRequestLogger}
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
						setRequestLogger={setRequestLogger}
						stage={stage}
						tempTest={tempTest}
					/>
				)) ||
				(stage === 5 && (
					<FinalCity
						city={city}
						temp={temp}
						setRequestLogger={setRequestLogger}
					/>
				)) ||
				(stage === 6 && (
					<ResultsPage
						score={score}
						setStage={setStage}
						setScore={setScore}
					/>
				))}
		</>
	);
};
export default App;

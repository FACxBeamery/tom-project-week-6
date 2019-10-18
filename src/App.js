import React from "react";
import "./css/App.css";
import getWeather from "./utils/getWeather.js";

import FirstCity from "./components/FirstCity";
import MiddleCity from "./components/MiddleCity";
import IntroPage from "./components/IntroPage";
import FinalCity from "./components/FinalCity";
import ResultsPage from "./components/ResultsPage";
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
	const [requestLogger, setRequestLogger] = React.useState(0);
	const [formValue, setFormValue] = React.useState("");

	React.useEffect(() => {
		if (stage !== 0) {
			getWeather(city)
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
						setFormValue("");
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
						formValue={formValue}
						setFormValue={setFormValue}
					/>
				)) ||
				([2, 3, 4].includes(stage) && (
					<MiddleCity
						score={score}
						temp={temp}
						city={city}
						setCity={setCity}
						setRequestLogger={setRequestLogger}
						stage={stage}
						formValue={formValue}
						setFormValue={setFormValue}
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

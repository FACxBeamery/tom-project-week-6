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
// * score is one behind what it should be.
// * React.useEffect()???
// * Make it pretty - animations!
// * Form validation
// * Accessibility

const App = () => {
	// react state variables
	const [score, setScore] = React.useState(30);
	const [stage, setStage] = React.useState(0);
	const [city, setCity] = React.useState("London");
	const [temp, setTemp] = React.useState(20);
	const [tempTest, setTempTest] = React.useState(undefined);

	const handleTemp = (data) => {
		setTemp(data.main.temp - 273.3); // K -> C
	};

	const handleScore = (temperature) => {
		setScore((sc) => sc + (temperature - 10));
	};

	React.useEffect(() => {
		getWeather(city)
			.then(checkResponse)
			.then((data) => {
				setTemp(data.main.temp - 273.3);
				setScore(
					(score) =>
						Number(score) + (Number(data.main.temp) - 273.3 - 20)
				);
				setTempTest(Number(data.main.temp));
			})
			.catch((err) => {
				console.error(err);
			});
	}, [stage]);
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
						tempTest={tempTest}
					/>
				)) ||
				(stage === 5 && (
					<FinalCity city={city} temp={temp} setStage={setStage} />
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

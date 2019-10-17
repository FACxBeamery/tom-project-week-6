import React from "react";
import CityForm from "./CityForm";
import { getWeather, checkResponse } from "./getWeather";
const SecondCity = ({
	score,
	temp,
	city,
	setTemp,
	setScore,
	setCity,
	setStage,
	stage
}) => {
	const [tempTest, setTempTest] = React.useState(undefined);
	const [validRequest, setValidRequest] = React.useState(true);
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
				console.log(data);
				if (data === 404) {
					setValidRequest(false);
				} else {
					setTemp(data.main.temp - 273.3);
					setScore(
						(score) =>
							Number(score) +
							(Number(data.main.temp) - 273.3 - 20)
					);
					setTempTest(Number(data.main.temp));
				}
			})
			.catch((err) => {
				console.error(err);
			});
	}, [stage]);

	return !validRequest ? (
		<>
			<p>City not found! Please try again!</p>
			<CityForm
				city={city}
				setCity={setCity}
				setStage={setStage}
				badRequest={true}
			/>
		</>
	) : tempTest ? (
		<>
			<h1>Second city page</h1>
			<p>
				Your score is {Number(score).toFixed()}. The temperature of{" "}
				{city} is
				{temp.toFixed(1)} C
			</p>
			<p> What's your next destination? Enter it here:</p>
			<CityForm
				city={city}
				setCity={setCity}
				setStage={setStage}
				badRequest={false}
			/>
		</>
	) : (
		<h3> Loading...</h3>
	);
};

export default SecondCity;

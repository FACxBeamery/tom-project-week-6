import { getWeather, checkResponse } from "./getWeather.js";
import React from "react";

// const cityForm = (callback) => {
// 	const [city, setCity] = React.useState);
// 	const handleSubmit = (event) => {
// 		if (event) {
// 			event.preventDefault();
// 		}
// 		callback();
// 	};
// 	return null;
// };

const FirstCity = () => {
	const [city, setCity] = React.useState("London");
	const [temp, setTemp] = React.useState(0);
	const handleCity = (event) => {
		if (event) {
			event.preventDefault();
		}
		setCity(event.target.value);
	};

	const handleTemp = (city) => {
		getWeather(city)
			.then(checkResponse)
			.then((data) => {
				setTemp(data.main.temp);
			})
			.catch((err) => {
				throw new Error(`Failed to get weather data ${err}`);
			});
	};

	return (
		<>
			<h1>Enter your first city in the form below!</h1>
			<form>
				<input
					type="text"
					placeholder="Enter city here"
					value={city}
					onChange={handleCity}
					required
				></input>
				<button
					type="submit"
					onClick={(e) => {
						e.preventDefault();
						if (city) {
							handleTemp(city);
						}
					}}
				>
					Go!
				</button>
			</form>
			{temp ? (
				<p>
					The temperature of {city} is {(temp - 273).toFixed(1)} C
				</p>
			) : null}
		</>
	);
};

export default FirstCity;

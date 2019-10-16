import API_KEY from "./key";

const checkResponse = (response) => {
	if (response.status !== 200) {
		console.log(
			`Error with the request! The error code is ${response.status}`
		);
		return;
	}
	return response.json();
};

const getWeather = (city) => {
	return fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
	);
};
export { getWeather, checkResponse };

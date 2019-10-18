const checkResponse = (response) => {
	if (response.status !== 200) {
		return response.status;
	}
	return response.json();
};

const getWeather = (city) => {
	const API_KEY = process.env.REACT_APP_API_KEY;
	return fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
	);
};
export { getWeather, checkResponse };

const API_KEY = process.env.API_KEY;
const checkResponse = (response) => {
	if (response.status !== 200) {
		return response.status;
	}
	return response.json();
};

const getWeather = (city) => {
	return fetch(
		`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
	);
};
export { getWeather, checkResponse };

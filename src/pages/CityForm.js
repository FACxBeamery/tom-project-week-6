import React from "react";
import main from "../css/main.module.css";
const CityForm = ({ city, setCity, setRequestLogger }) => {
	const handleSubmission = (event) => {
		if (event) {
			event.preventDefault();
			setRequestLogger((requestLogger) => requestLogger + 1);
		}
	};

	const handleInput = (event) => {
		setCity(event.target.value);
	};
	return (
		<form onSubmit={handleSubmission}>
			<input
				type="text"
				placeholder="Enter city here"
				defaultValue=""
				onChange={handleInput}
				required
			></input>
			<button className={main.button} type="submit">
				Go!
			</button>
		</form>
	);
};

export default CityForm;

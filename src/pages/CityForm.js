import React from "react";
import main from "../css/main.module.css";
const CityForm = ({ city, setCity, setRequestLogger }) => {
	let formValue = "";
	const handleSubmission = (event) => {
		if (event) {
			event.preventDefault();
			formValue = "";
			setRequestLogger((requestLogger) => requestLogger + 1);
		}
	};

	const handleInput = (event) => {
		formValue = event.target.value;
		setCity(formValue);
	};

	return (
		<form onSubmit={handleSubmission}>
			<input
				type="text"
				placeholder="Enter city here"
				defaultValue={formValue}
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

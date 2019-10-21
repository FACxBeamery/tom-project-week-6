import React from "react";
import main from "../css/main.module.css";
const CityForm = ({ setCity, setRequestLogger, formValue, setFormValue }) => {
	const handleFormValue = (event) => {
		if (event.target.value) {
			setFormValue(
				event.target.value[0].toUpperCase() +
					event.target.value.slice(1).toLowerCase()
			);
		} else {
			setFormValue(event.target.value);
		}
	};
	const handleSubmission = (event) => {
		if (event) {
			event.preventDefault();
			setRequestLogger((requestLogger) => requestLogger + 1);
		}
	};

	return (
		<form onSubmit={handleSubmission}>
			<input
				type="text"
				placeholder="Enter city here"
				value={formValue}
				onChange={handleFormValue}
				required
			></input>
			<button className={main.button} type="submit">
				Go!
			</button>
		</form>
	);
};

export default CityForm;

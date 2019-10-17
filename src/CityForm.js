import React from "react";

const CityForm = ({ city, setStage, setCity, badRequest }) => {
	const handleSubmission = (event) => {
		if (event && !badRequest) {
			event.preventDefault();
			setStage((stage) => stage + 1);
		} else if (event) {
			event.preventDefault();
		}
	};

	const handleInput = (event) => {
		setCity(event.target.value);
	};

	if (badRequest) {
		alert(
			"We couldn't find that city. Please ensure your spelling is correct!"
		);
	}

	return (
		<form onSubmit={handleSubmission}>
			<input
				type="text"
				placeholder="Enter city here"
				defaultValue={city}
				onChange={handleInput}
				required
			></input>
			<button type="submit">Go!</button>
		</form>
	);
};

export default CityForm;

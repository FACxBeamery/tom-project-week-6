import React from "react";

const ResubmitForm = () => {
	const handleSubmission = (event) => {
		if (event) {
			event.preventDefault();
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
				defaultValue={city}
				onChange={handleInput}
				required
			></input>
			<button type="submit">Go!</button>
		</form>
	);
};

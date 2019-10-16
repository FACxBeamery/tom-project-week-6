import React from "react";

const CityForm = ({ city, submit, handleCity }) => {
	return (
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
						submit(city);
					}
				}}
			>
				Go!
			</button>
		</form>
	);
};

export default CityForm;

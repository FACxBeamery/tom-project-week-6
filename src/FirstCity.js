import React from "react";

const FirstCity = ({ city, handleCity, submit }) => {
	return (
		<>
			<h1>Enter your first city in the form below</h1>
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
		</>
	);
};

export default FirstCity;

import React from "react";
const ResultsPage = ({ score, city, temp }) => {
	return (
		<>
			<h1> Congratulations, you finished!</h1>
			<p>
				The temperature of {city} is {temp} C.
			</p>
			<p>Your final score is {score}</p>

			{score > 50 ? (
				<p>You got a good tan!</p>
			) : (
				<p>You need some Vitamin D stat :(</p>
			)}
		</>
	);
};

export default ResultsPage;

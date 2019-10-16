import React from "react";
const ResultsPage = ({ score }) => {
	return (
		<>
			<h1> Congratulations, you finished!</h1>
			<p>Your final score is {score}</p>

			{score > 50 ? (
				<p>You got a good tan!</p>
			) : (
				<p>You're even paler than the author of this app :(</p>
			)}
		</>
	);
};

export default ResultsPage;

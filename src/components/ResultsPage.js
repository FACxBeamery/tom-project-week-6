import React from "react";
import main from "../css/main.module.css";

const ResultsPage = ({ score, setStage, setScore }) => {
	return (
		<div className={main.slide}>
			<h1> Congratulations, you finished!</h1>

			<p>Your final score is {Number(score).toFixed()}</p>

			{score > 30 ? (
				score > 50 ? (
					<p>
						You burnt yourself you silly goose!{" "}
						<span role="img" aria-label="despair emoji">
							😫
						</span>
					</p>
				) : (
					<p>
						You got a good tan!{" "}
						<span role="img" aria-label="cool emoji">
							😎
						</span>
					</p>
				)
			) : (
				<p>
					You need some Vitamin D stat
					<span role="img" aria-label="pill emoji">
						💊
					</span>{" "}
				</p>
			)}
			<button
				className={main.button}
				onClick={() => {
					setStage(0);
					setScore(10);
				}}
			>
				Restart Game
			</button>
		</div>
	);
};

export default ResultsPage;

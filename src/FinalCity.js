import React from "react";
import main from "./css/main.module.css";

const FinalCity = ({ city, temp, setStage }) => {
	const handleStage = () => {
		setStage((stage) => stage + 1);
	};

	return (
		<div className={main.slide}>
			<p>
				The temperature of {city} is {Number(temp).toFixed()} C. Click
				the button to see your final score!
			</p>
			<button className={main.button} onClick={handleStage}>
				Go!
			</button>
		</div>
	);
};

export default FinalCity;

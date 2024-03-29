import React from "react";
import main from "../css/main.module.css";

const FinalCity = ({ city, temp, setRequestLogger, setFormValue }) => {
	const handleRequestLogger = () => {
		setFormValue(city);
		setRequestLogger((requestLogger) => requestLogger + 1);
	};

	return (
		<div className={main.slide}>
			<p>
				The temperature of {city} is {Number(temp).toFixed()} &#176;C.
				Click the button to see your final score!
			</p>
			<button className={main.button} onClick={handleRequestLogger}>
				Go!
			</button>
		</div>
	);
};

export default FinalCity;

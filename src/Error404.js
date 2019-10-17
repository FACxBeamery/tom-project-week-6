import React from "react";

const Error404 = ({ setValidReq }) => {
	const toggleValidReq = () => {
		setValidReq((validReq) => !validReq);
	};
	return (
		<>
			<p>Please make sure your city is spelled correctly.</p>
			<button onClick={toggleValidReq}>Go back</button>
		</>
	);
};

export default Error404;

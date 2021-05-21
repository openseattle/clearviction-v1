import React from "react";

/** Button used on the Calculator pages */
const Button = ({text, onClick}) => {
	return (
		<button onClick={onClick}>{text}</button>
	);
}

export default Button;
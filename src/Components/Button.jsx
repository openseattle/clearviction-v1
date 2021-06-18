import React from "react";

/** Button used on the Calculator pages */
const Button = ({ text, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;

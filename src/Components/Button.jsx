import React from "react";

/** Button used on the Calculator pages */
const Button = ({ text, onClick, styles }) => {
  return (
    <button className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

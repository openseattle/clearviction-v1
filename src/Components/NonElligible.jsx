import React from "react";
import Button from "./Button";

const NonElligible = ({ nonElligible }) => {
  const renderItems = () => {
    return nonElligible.map((item) => {
      return <li>* {item}</li>;
    });
  };

  const handleClick = () => {
    // redirect to contact page
    console.log("i was clicked to redirect to contact page");
  };

  return (
    <div>
      <h2>
        As of now, you may NOT be eligible for vacation for these reasons:{" "}
      </h2>
      {nonElligible && renderItems()}
      <h2>
        Help us improve our eligibility calculator by telling us your story:
      </h2>

      <Button text="Contact Us" onClick={handleClick} />
    </div>
  );
};

export default NonElligible;

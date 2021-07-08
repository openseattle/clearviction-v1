import React from "react";
import Button from "./Button";

const ResultNo = ({ noneligible }) => {
  // TODO: Get red 'x' SVG to match figma file
  const renderItems = () => {
    return noneligible.map((item) => {
      /** Skip blank entry */
      if (!item) return;
      return <li>{item}</li>;
    });
  };

  const handleClick = () => {
    // redirect to contact page
    console.log("i was clicked to redirect to contact page");
  };

  return (
    <>
      <p className="calc-col title">
        As of now, it seems that you may NOT be eligible to vacate your
        marijuana misdemeanor conviction because you have not completed the
        terms of your offense.
      </p>

      <ul>{noneligible && renderItems()}</ul>

      <p className="calc-col results">
        Help us improve our eligibility calculator by telling us your story:
      </p>

      <Button className="calc-button" text="Contact Us" onClick={handleClick} />
    </>
  );
};

export default ResultNo;

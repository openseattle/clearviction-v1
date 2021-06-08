import React, { useEffect, useState } from "react";
import NonEligible from "./NonElligible";
import ResultYes from "./ResultYes";

// data import
import calculatorNonEligible from "../data/calculatorNonElligible.json";
//*!this page will carry the logic for determinig which result page to render --> will conditionally render the correct page based off user input

const CalculatorResults = ({ userResponse, setUserResponse }) => {
  const [result, setResult] = useState(null);
  const [nonEligible, setNonEligible] = useState([]);
  useEffect(() => {
    userResponse && handleCalculation();
  }, []);

  const handleCalculation = () => {
    let nonEligibleItems = [];
    for (const id in userResponse) {
      let value = userResponse[id];
      if (value === false) {
        const { text } = calculatorNonEligible.filter((q) => q.id === id)[0];
        nonEligibleItems.push(text);
      }
    }

    console.log(nonEligibleItems);
    if (nonEligibleItems.length > 0) {
      setNonEligible(nonEligibleItems);
      setResult("NonEligible");
    } else {
      setResult("ResultYes");
    }
  };

  return (
    <div>
      <h2>Results</h2>

      {result === "NonEligible" && (
        <NonEligible nonEligible={nonEligible} />
      )}
      {result === "ResultYes" && <ResultYes />}
    </div>
  );
};

export default CalculatorResults;

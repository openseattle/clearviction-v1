import React, { useEffect, useState } from "react";
import ResultNo from "./ResultNo";
import ResultYes from "./ResultYes";

// data import
import calculatorNonEligible from "../data/calculatorNonEligible.json";

/** This component determines which result to render based off user input */
const CalculatorResults = ({ userResponse }) => {
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
        const { text } = calculatorNonEligible.filter((q) => q.id == id)[0];
        nonEligibleItems.push(text);
      }
    }

    if (nonEligibleItems.length > 0) {
      setNonEligible(nonEligibleItems);
      setResult("Noneligible");
    } else {
      setResult("ResultYes");
    }
  };

  return (
    <div className="calc-grid">
      {result === "Noneligible" && <ResultNo noneligible={nonEligible} />}
      {result === "ResultYes" && <ResultYes />}
    </div>
  );
};

export default CalculatorResults;

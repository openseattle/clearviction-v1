import React, { useEffect, useState } from "react";
import ResultNo from "./ResultNo";
import ResultYes from "./ResultYes";
import ResultUnsure from "./ResultUnsure";

// data import
import calculatorNonEligible from "../data/calculatorNonEligible.json";

/** This component determines which result to render based off user input */
const CalculatorResults = ({ userResponse, isCompleted}) => {
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
    //change logic here
    if (nonEligibleItems.length === 0) {
      setResult("ResultYes");
    }else if (isCompleted === true && userResponse[6] === false) {
      setResult("Noneligible");
    }else {
      setNonEligible(nonEligibleItems);
      setResult("CantDetermine");
    }
  };

  return (
    <div className="calc-grid">
      {result === "Noneligible" && <ResultNo noneligible={nonEligible} />}
      {result === "ResultYes" && <ResultYes />}
      {result === "CantDetermine" && <ResultUnsure noneligible={nonEligible} />}
    </div>
  );
};

export default CalculatorResults;

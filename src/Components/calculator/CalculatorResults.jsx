import React, { useContext, useState } from "react";
import ResultNo from "../ResultNo";
import ResultYes from "../ResultYes";
import ResultUnsure from "../ResultUnsure";
import CalcContext from "../../calcContext";

// data import
// import calculatorNonEligible from "../../data/calculatorNonEligible.json";

/** This component determines which result to render based off user input */
const CalculatorResults = () => {
  const calcContext = useContext(CalcContext);

  // const [result, setResult] = useState("CantDetermine");
  // const [nonEligible, setNonEligible] = useState([]);
  // useEffect(() => {
  //   userResponse && handleCalculation();
  // }, []);

  // const handleCalculation = () => {
  //   let nonEligibleItems = [];
  //   for (const id in userResponse) {
  //     let value = userResponse[id];
  //     if (value === false) {
  //       const { text } = calculatorNonEligible.filter((q) => q.id == id)[0];
  //       nonEligibleItems.push(text);
  //     }
  //   }
  // };
  const result = calcContext.eligible;

  return (
    <div className="calc-grid">
      {result === "Noneligible" && (
        <ResultNo branchName={calcContext.currBranch} />
      )}
      {result === "Eligible" && <ResultYes />}
      {result === "CantDetermine" && (
        <ResultUnsure branchName={calcContext.currBranch} />
      )}
    </div>
  );
};

export default CalculatorResults;

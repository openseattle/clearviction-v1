import React, { Component } from "react";
import headQuestions from "./data/calculatorHead.json";
import mjQuestions from "./data/calculatorMJQuestions.json";

const CalcContext = React.createContext();

export default CalcContext;

export class CalcProvider extends Component {
  /*
    Default isCompleted is false to handle some edge cases
    */
  state = {
    currBranch: "",
    currBranchQuestions: [],
    branchTheme: {
      head: {
        visibility: "hidden",
      },
      mj: {
        visibility: "visible",
        width: 0,
      },
    },
    userResponse: [],
    result: "",
    eligible: "CantDetermine",
    setEligibility: () => {},
    setBranch: () => {},
    setUserResponse: () => {},
  };

  setBranch = (branch) => {
    this.setState({ currBranch: branch });
    if (branch === "head")
      this.setState({ currBranchQuestions: headQuestions });
    else if (branch === "mj")
      this.setState({ currBranchQuestions: mjQuestions });
  };

  setUserResponse = (question, answer) => {
    this.setState((prevState) => ({
      userResponse: [...prevState.userResponse, { question: answer }],
    }));
  };

  setEligibility = (response) => {
    this.setState({ eligible: response });
  };

  resetContext = () => {
    this.setState((state) => ({
      ...state,
      currBranch: "head",
      currBranchQuestions: headQuestions,
      eligible: "CantDetermine",
    }));
  };

  render() {
    const value = {
      ...this.state,
      setBranch: this.setBranch,
      setEligibility: this.setEligibility,
      setUserResponse: this.setUserResponse,
      resetContext: this.resetContext,
    };
    return (
      <CalcContext.Provider value={value}>
        {this.props.children}
      </CalcContext.Provider>
    );
  }
}

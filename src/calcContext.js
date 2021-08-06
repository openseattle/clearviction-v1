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
    completed: false,
    result: "",
    setQuestions: () => {},
    setBranch: () => {},
    setCompleted: () => {},
    setUserResponse: () => {},
  };

  setBranch = (branch) => {
    this.setState({ currBranch: branch });
  };

  setCompleted = (isCompleted) => {
    this.setState({ completed: isCompleted });
  };

  setUserResponse = (question, answer) => {
    this.setState((prevState) => ({
      userResponse: [...prevState.userResponse, { question: answer }],
    }));
  };

  setQuestions = (branch) => {
    if (branch === "head")
      this.setState({ currBranchQuestions: headQuestions });
    else if (branch === "mj")
      this.setState({ currBranchQuestions: mjQuestions });
  };

  resetContext = () => {
    this.setState((state) => ({
      ...state,
      currBranch: "head",
      currBranchQuestions: headQuestions,
      completed: false,
    }));
  };

  render() {
    const value = {
      ...this.state,
      setBranch: this.setBranch,
      setQuestions: this.setQuestions,
      setUserResponse: this.setUserResponse,
      setCompleted: this.setCompleted,
      resetContext: this.resetContext,
    };
    return (
      <CalcContext.Provider value={value}>
        {this.props.children}
      </CalcContext.Provider>
    );
  }
}

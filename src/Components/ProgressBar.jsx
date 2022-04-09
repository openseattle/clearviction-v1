import "../CSS/Calculator.css";
import { useState } from "react";

const ProgressBar = ({ currentSectionName, totalSections }) => {
  let currentSection;
  const stepWidth = `${Math.floor(
    100 / totalSections - totalSections * 1.25
  )}%`;
  const stepBackground = "var(--gray90)";
  const stepBackgroundActive = "var(--light-blue)";
  const stepArray = [];

  for (let i = 1; i <= totalSections; i++) {
    stepArray.push(i);
  }

  switch (currentSectionName) {
    case "Your Conviction":
      currentSection = 1;
      break;
    case "Surrounding Circumstances":
      currentSection = 2;
      break;
    case "Terms of Offense":
      currentSection = 3;
      break;
    case "":
      currentSection = 4;
      break;
    default:
      break;
  }

  let barWidthCurrent =
    currentSection > totalSections
      ? `100%`
      : `${currentSection * Math.ceil(100 / totalSections)}%`;
  let barWidthActive = `${
    (currentSection - 1) * Math.ceil(100 / totalSections)
  }%`;

  return (
    <div className="progressBar-Wrapper">
      {currentSectionName && (
        <p className="progress-bar-title">{currentSectionName}</p>
      )}
      <ul className="progressBar">
        <div
          className="progressBar-active"
          style={{ width: barWidthActive }}
        ></div>
        <div
          className="progressBar-current"
          style={{ width: barWidthCurrent }}
        ></div>
        {stepArray.map((num) => (
          <li
            className="steps"
            style={{
              marginRight: stepWidth,
              background:
                num <= currentSection ? stepBackgroundActive : stepBackground,
            }}
            key={`step${num}`}
          >
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;
// import React from "react";
// import PropTypes from "prop-types";
// // @material-ui/core components
// import LinearProgress from "@material-ui/core/LinearProgress";
// import withStyles from "@material-ui/core/styles/withStyles";

// const classNames = () => null;


// const customStepperStyle = {
//   stepper: {
//     display: "flex",
//     flexFlow: "row nowrap",
//     justifyContent: "space-around",
//     padding: 0,
//     width: "100%",
//   },

//   stepper__step: {
//     position: "relative",
//     display: "flex",
//     flexFlow: "row nowrap",
//     justifyContent: "space-around",
//     alignItems: "center",
//     width: "100%",
//   },

//   stepper__step__index: {
//     width: "30px",
//     height: "30px",
//     lineHeight: "30px",
//     borderRadius: "50%",
//     background: "#DCDCDC",
//     color: "#2F3554",
//     textAlign: "center",
//     marginBottom: "5px",
//   },

//   stepper__step__label: {
//     color: "#999",
//     margin: 0,
//   },

//   labelContainer: {
//     display: "flex",
//     flexFlow: "column nowrap",
//     alignItems: "center",
//   },

//   linearProgress: {
//     flex: "1 1 auto",
//     position: "absolute",
//     top: 12,
//     left: "calc(-50% + 20px)",
//     right: "calc(50% + 20px)",
//     backgroundColor: "rgb(78, 108, 153, 0.5)",
//   },

//   bar: {
//     backgroundColor: "#4E6C99",
//   },

//   currentStep: {
//     backgroundColor: "#4E6C99 !important",
//     color: "#fff",
//     fontWeight: "500",
//   },

//   done: {
//     backgroundColor: "#2F3554 !important",
//     color: "#fff",
//     fontWeight: "500",
//   },
// };

// function ProgressBar(props) {
//   const { steps, current, progress, classes } = props;

//   function StepContent({ done, index }) {
//     return done ? "✓" : index + 1;
//   }

//   const ProgressBar = ({ current, step, progress }) => {
//     let value = 0;
//     if (current + 1 === step) {
//       value = progress;
//     } else if (current >= step) {
//       value = 100;
//     }

//     return (
//       <LinearProgress
//         variant="determinate"
//         value={value}
//         classes={{ root: classes.linearProgress, bar: classes.bar }}
//       />
//     );
//   };

//   function renderStep(label, key) {
//     const { current, progress } = this;
//     const done = key < current;
//     const currentStep = key === current;
//     const stepClasses = classNames({
//       [classes.stepper__step__index]: true,
//       [classes.currentStep]: currentStep,
//       [classes.done]: done,
//     });

//     return (
//       <li className={classes.stepper__step} key={key}>
//         <div className={classes.labelContainer}>
//           <span className={stepClasses}>
//             <StepContent done={done} className={classes.done} index={key} />
//           </span>
//         </div>
//         {!!key && (
//           <ProgressBar current={current} step={key} progress={progress} />
//         )}
//       </li>
//     );
//   }

//   return (
//     <ul className={classes.stepper}>
//       {steps.map(renderStep, { current, progress })}
//     </ul>
//   );
// }

// ProgressBar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   steps: PropTypes.array.isRequired,
//   current: PropTypes.number.isRequired,
//   progress: PropTypes.number,
// };

// export default withStyles(customStepperStyle)(ProgressBar);

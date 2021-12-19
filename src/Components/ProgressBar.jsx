import "../CSS/Calculator.css";

const ProgressBar = ({ currentSectionName, totalSections }) => {
  let sectionName;
  let currentSection;
  let stepWidth = `29%`;
  let stepBackground = "#e5e5e5";
  let stepBackgroundActive = "#4E6C99";

  switch (currentSectionName) {
    case "conv":
      sectionName = "Your Conviction";
      currentSection = 1;
      break;
    case "circ":
      sectionName = "Surrounding Circumstances";
      currentSection = 2;
      break;
    case "ter":
      sectionName = "Terms of Offence";
      currentSection = 3;
      break;
    case "conv-1" || "circ-1" || "ter-1":
      currentSection = 4;
      break;
    default:
      break;
  }

  let barWidthCurrent = `${currentSection * 34}%`;
  let barWidthActive = `${(currentSection - 1) * 34}%`;

  console.log(currentSectionName, totalSections);
  return (
    <div className="progressBar-Wrapper">
      {sectionName && <p className="progress-bar-title">{sectionName}</p>}
      <ul className="progressBar">
        <div
          className="progressBar-active"
          style={{ width: barWidthActive }}
        ></div>
        <div
          className="progressBar-current"
          style={{ width: barWidthCurrent }}
        ></div>
        <li
          className="steps"
          style={{ marginRight: stepWidth, background: stepBackgroundActive }}
          key="step1"
        >
          1
        </li>
        <li
          className="steps"
          style={{
            marginRight: stepWidth,
            background:
              currentSection >= 2 ? stepBackgroundActive : stepBackground,
          }}
          key="step2"
        >
          2
        </li>
        <li
          className="steps"
          style={{
            marginRight: stepWidth,
            background:
              currentSection >= 3 ? stepBackgroundActive : stepBackground,
          }}
          key="step3"
        >
          3
        </li>
      </ul>
    </div>
  );
};

export default ProgressBar;

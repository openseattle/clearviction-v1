import "../CSS/Calculator.css";

const ProgressBar = ({ currentSectionName, totalSections }) => {
    let currentSection;
    const stepWidth = `${Math.floor(100 / totalSections - totalSections * 1.25)}%`;
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
        currentSection > totalSections ? `100%` : `${currentSection * Math.ceil(100 / totalSections)}%`;
    let barWidthActive = `${(currentSection - 1) * Math.ceil(100 / totalSections)}%`;

    return (
        <div className="progressBar-Wrapper">
            {currentSectionName && <p className="progress-bar-title">{currentSectionName}</p>}
            <ul className="progressBar">
                <div className="progressBar-active" style={{ width: barWidthActive }}></div>
                <div className="progressBar-current" style={{ width: barWidthCurrent }}></div>
                {stepArray.map(num => (
                    <li
                        className="steps"
                        style={{
                            marginRight: stepWidth,
                            background: num <= currentSection ? stepBackgroundActive : stepBackground,
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

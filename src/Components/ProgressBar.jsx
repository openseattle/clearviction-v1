
const ProgressBar = ({currentSectionName, currentSection, totalSections}) => {
    let sectionName;
    let barWidth = `${Math.floor(
        (currentSection / totalSections) * 100
      )}%`;
    let stepArr = [];
    let stepWidth = `${100/totalSections-5}%`
    switch(currentSectionName) {
        case "conv":
            sectionName = "Your Conviction"
            break;
        case "circ":
            sectionName = "Surrounding Circumstances"
            break;
        case "ter":
            sectionName = "Terms of Offence"
            break;
        default:
            break;
    }
    
    for(let i = 1; i <= totalSections; i++){
        stepArr.push(i)
    }
    console.log(stepWidth)
    return (
        <div>
            { sectionName && <p className="progress-bar-title">{sectionName}</p>}
            <ul className="progressBar">
                <div className="progressBar-active" style={{width: barWidth}}></div>
                {stepArr.map((a)=><li style={{marginRight: stepWidth}} key={a}>{a}</li>)}
            </ul>

        </div>
    );
};

export default ProgressBar;
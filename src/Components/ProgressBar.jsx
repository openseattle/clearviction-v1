import "../CSS/Calculator.css";

const ProgressBar = ({currentSectionName, currentSection, totalSections}) => {
    let sectionName;
    let barWidthCurrent = `${Math.floor(
        (currentSection / totalSections) * 100
      )}%`;
    let barWidthActive = `${Math.floor(
        ((currentSection-1) / totalSections) * 100
      )}%`;;
    let stepArr = [];
    let stepWidth = `${100/totalSections-4.5}%`

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

    return (
        <div>
            { sectionName && <p className="progress-bar-title" >{sectionName}</p> }
            <ul className="progressBar">
                <div className="progressBar-active" style={{width: barWidthActive}}></div>
                <div className="progressBar-current" style={{width: barWidthCurrent}}></div>
                {stepArr.map((a)=>{
                    if(a <= currentSection){
                        return (<li style={{marginRight: stepWidth, background: '#4E6C99'}} key={a}>{a}</li>)
                    }
                    else return (<li style={{marginRight: stepWidth}} key={a}>{a}</li>)
                })}
            </ul>

        </div>
    );
};

export default ProgressBar;
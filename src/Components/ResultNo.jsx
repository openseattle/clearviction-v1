import React from "react";

const ResultNo = () => {
  return (
    <div>
      <h2>
        As of now, we are only able to determine eligibility for marijuana
        possession misdemeanor cases for people who were over 21 years at the
        time of offense. In the future, we hope to help people with other types
        of convictions identify whether they are eligible.
      </h2>
      <h2>
        Help us improve our eligibility calculator by telling us your story:
      </h2>

      <Button text="Contact Us" onClick={handleClick} />
    </div>
  );
};

export default ResultNo;

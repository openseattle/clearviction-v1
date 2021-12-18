import React from "react";
import { shallow } from "enzyme";
import ProgressBar from "../ProgressBar";

describe("<ProgressBar />", () => {
  let progressBar;
  const props = {
    currentSectionName: "conv",
    currentSection: 0,
    totalSections: 7,
  };
  beforeEach(() => {
    progressBar = shallow(<ProgressBar {...props} />);
  });

  it("should be a progressbar", () => {
    expect(progressBar.find(".progressBar-Wrapper")).toHaveLength(1);
  });
  it("renders the li", () => {
    expect(progressBar.exists("li")).toEqual(true);
  });
  it("renders the title", () => {
    expect(progressBar.exists(".progress-bar-title")).toEqual(true);
  });
});

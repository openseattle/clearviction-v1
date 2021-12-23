import React from "react";
import { shallow } from "enzyme";
import ProgressBar from "../ProgressBar";

describe("<ProgressBar />", () => {
  let progressBar;
  const props = {
    currentSectionName: "circ",
    totalSections: 3,
  };
  beforeEach(() => {
    progressBar = shallow(<ProgressBar {...props} />);
  });

  it("should render a progressbar", () => {
    expect(progressBar.exists(".progressBar-Wrapper")).toEqual(true);
  });
  it("renders the li", () => {
    expect(progressBar.exists("li")).toEqual(true);
  });
  it("renders the title", () => {
    expect(progressBar.exists(".progress-bar-title")).toEqual(true);
  });
  it("renders the current bar correctly", () => {
    expect(
      progressBar.find(".progressBar-current").prop("style")
    ).toHaveProperty("width", "68%");
  });
  it("renders the active bar correctly", () => {
    expect(
      progressBar.find(".progressBar-active").prop("style")
    ).toHaveProperty("width", "34%");
  });
});

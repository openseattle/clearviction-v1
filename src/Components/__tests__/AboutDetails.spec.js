import react from "react";
import { mount, shallow } from "enzyme";
import AboutDetails from "../AboutDetails";

describe("<AboutDetails />", () => {
  describe("ui", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AboutDetails />);
    });

    it("should render container", () => {
      expect(wrapper.exists("#about-details")).toEqual(true);
    });
    it("should render an image", () => {
      expect(wrapper.exists("#about-profile-pic")).toEqual(true);
    });
    it("should render a title", () => {
      expect(wrapper.exists("#about-title")).toEqual(true);
    });
    it("should render a h5 for a name", () => {
      expect(wrapper.exists("#about-name")).toEqual(true);
    });
    it("should render a description", () => {
      expect(wrapper.exists("#about-desc")).toEqual(true);
    });

    describe("content", () => {
      let wrapperMounted;
      beforeEach(() => {
        wrapperMounted = mount(
          <AboutDetails
            name={"test"}
            image={[]}
            title={"test title"}
            description={"test desc"}
          />
        );
      });

      it("text should match prop name value", () => {
        expect(wrapperMounted.find("#about-name").text()).toEqual("test");
      });
      it("text should match prop title value", () => {
        expect(wrapperMounted.find("#about-title").text()).toEqual(
          "test title"
        );
      });
      it("text should match prop description value", () => {
        expect(wrapperMounted.find("#about-desc").text()).toEqual("test desc");
      });
    });
  });
});

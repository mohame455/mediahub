import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });
import "@testing-library/jest-dom";
import AtomText from "./AtomText";

describe("AtomText", () => {
  const props = {
    text: "Test Text",
    type: "h1",
    mandatory: true,
    details: true,
  };

  it("should render without crashing", () => {
    shallow(<AtomText {...props} />);
  });

  it("should render text", () => {
    const wrapper = shallow(<AtomText {...props} />);
    expect(wrapper.find("p").text()).toEqual("Test Text* : ");
  });
  
  it('should have details colon when "details" prop is true', () => {
    const wrapper = shallow(<AtomText {...props} />);
    expect(wrapper.find(".pr_5").length).toEqual(1);
  });
});

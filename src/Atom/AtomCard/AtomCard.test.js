import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
import React from "react";
import AtomCard from "./AtomCard";
import "@testing-library/jest-dom";

describe("AtomCard", () => {
  it("should render the card with the given class name", () => {
    const wrapper = shallow(<AtomCard className="test-class" />);
    expect(wrapper.hasClass("test-class")).toBe(true);
  });

  it("should render the card with children", () => {
    const wrapper = shallow(
      <AtomCard>
        <div>Test Children</div>
      </AtomCard>
    );
    expect(wrapper.contains(<div>Test Children</div>)).toBe(true);
  });

  it("should call the onClick prop when clicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(<AtomCard onClick={onClick} />);
    wrapper.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

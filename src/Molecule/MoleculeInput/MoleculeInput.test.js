import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
import "@testing-library/jest-dom";
import MoleculeInput from './MoleculeInput';

it('renders without crashing', () => {
    shallow(<MoleculeInput />);
  });

  it('hides the options menu by default', () => {
    const wrapper = shallow(<MoleculeInput />);
    expect(wrapper.find('.container-option-input-select').exists()).toBe(false);
  });
  
import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });
import IcoMoon from 'react-icomoon';
import iconSet from "../../assets/icons/icomoon/selection.json";
import "@testing-library/jest-dom";
import AtomIcon from './AtomIcon';

describe('AtomIcon', () => {
  it('should render the component without errors', () => {
    const wrapper = shallow(<AtomIcon icon="example-icon" />);
    expect(wrapper.find(IcoMoon)).toHaveLength(1);
  });

  it('should pass props to IcoMoon component', () => {
    const wrapper = shallow(<AtomIcon icon="example-icon" size={24} />);
    const icomoon = wrapper.find(IcoMoon);
    expect(icomoon.prop('iconSet')).toBe(iconSet);
    expect(icomoon.prop('icon')).toBe('example-icon');
    expect(icomoon.prop('size')).toBe(24);
  });
});
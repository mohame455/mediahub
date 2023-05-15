import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";
Enzyme.configure({ adapter: new Adapter() });
import "@testing-library/jest-dom";
import AtomImg from './AtomImg';

describe('AtomImg', () => {
  it('should render the component without errors', () => {
    const wrapper = shallow(<AtomImg src="example.jpg" alt="example image" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should pass props correctly to the img tag', () => {
    const wrapper = shallow(
      <AtomImg src="example.jpg" alt="example image" width="200px" height="200px" onClick={() => {}} />
    );
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe('example.jpg');
    expect(img.prop('alt')).toBe('example image');
    expect(img.prop('width')).toBe('200px');
    expect(img.prop('height')).toBe('200px');
    expect(img.prop('onClick')).toBeDefined();
  });

  it('should have default props', () => {
    const wrapper = shallow(<AtomImg />);
    const img = wrapper.find('img');
    expect(img.prop('src')).toBe('');
    expect(img.prop('alt')).toBe('');
    expect(img.prop('className')).toBe('default-img');
    expect(img.prop('width')).toBe('90px');
    expect(img.prop('height')).toBe('90px');
  });
});
import React from 'react';
import Enzyme, { shallow } from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });
import "@testing-library/jest-dom";
import AtomCheckbox from './AtomCheckbox';

describe('AtomCheckbox', () => {
  it('should render the component without errors', () => {
    const wrapper = shallow(<AtomCheckbox />);
    expect(wrapper.find('.container-check')).toHaveLength(1);
  });

  it('should call the onClick function when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<AtomCheckbox onClick={onClickMock} />);
    wrapper.find('.container-check').simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });

  it('should pass props to Form.Check component', () => {
    const props = {
      disabled: true,
      isInvalid: true,
      isValid: false,
      className: 'test-class',
      bsPrefix: 'test-prefix',
      id: 'test-id',
      checked: false,
      feedback: 'test-feedback',
      feedbackTooltip: 'test-tooltip',
      type: 'radio',
      label: 'test-label'
    };
    const wrapper = shallow(<AtomCheckbox {...props} />);
    const formCheck = wrapper.find('FormCheck');
    expect(formCheck.prop('disabled')).toBe(true);
    expect(formCheck.prop('isInvalid')).toBe(true);
    expect(formCheck.prop('isValid')).toBe(false);
    expect(formCheck.prop('className')).toContain('test-class');
    expect(formCheck.prop('bsPrefix')).toBe('test-prefix');
    expect(formCheck.prop('id')).toBe('test-id');
    expect(formCheck.prop('checked')).toBe(false);
    expect(formCheck.prop('feedback')).toBe('test-feedback');
    expect(formCheck.prop('feedbackTooltip')).toBe('test-tooltip');
    expect(formCheck.prop('type')).toBe('radio');
    expect(formCheck.prop('label')).toBe('test-label');
  });
});

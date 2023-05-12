import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const AtomInput = props => {
  let className = '';
  className = 'default-input ' + props.className;
  if (props.isInvalid === true) {
    className += ' invalid-input';
  }
  if (props.isValid === true) {
    className += ' valid-input';
  }
  if (props.size === 'medium') {
    className += ' default-medium-input ';
  }
  if (props.size === 'large') {
    className += ' default-large-input ';
  }
  if (props.size === 'small') {
    className += ' default-small-input ';
  }
  return (
    <Form.Control
      as={'input'}
      disabled={props.disabled}
      className={className}
      onChange={props.onChange}
      readOnly={props.readOnly}
      value={props.value}
      bsPrefix={props.bsPrefix}
      id={props.id}
      type={props.password === true ? 'password' : null}
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      ref={props.ref}
    />
  );
};
AtomInput.propTypes = {
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.any,
  readOnly: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  bsPrefix: PropTypes.string,
  id: PropTypes.any,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  feedback: PropTypes.any,
  feedbackTooltip: PropTypes.any,
  password: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
};
AtomInput.defaultProps = {
  disabled: false,
  isInvalid: false,
  isValid: false,
  className: '',
  onChange: null,
  readOnly: false,
  value: null,
  bsPrefix: null,
  id: null,
  placeholder: 'Texte',
  defaultValue: null,
  feedback: null,
  feedbackTooltip: null,
  password: false,
  size: 'medium'
};
export default AtomInput;

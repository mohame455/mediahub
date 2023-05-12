import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
AtomCheckbox.propTypes = {
  disabled: PropTypes.bool,
  isInvalid: PropTypes.bool,
  isValid: PropTypes.bool,
  className: PropTypes.string,
  bsPrefix: PropTypes.string,
  id: PropTypes.any,
  onClick: PropTypes.any,
  checked: PropTypes.bool,
  feedback: PropTypes.any,
  feedbackTooltip: PropTypes.any,
  type: PropTypes.string,
  label: PropTypes.string
};
AtomCheckbox.defaultProps = {
  disabled: false,
  isInvalid: false,
  isValid: false,
  className: '',
  bsPrefix: null,
  id: null,
  onClick: null,
  checked: false,
  feedback: null,
  feedbackTooltip: null,
  type: 'checkbox',
  label: ''
};
export default function AtomCheckbox(props) {
  let className = '';
  className = 'default-check ' + props.className;
  return (
    <div className='container-check' onClick={props.onClick}>
      <Form.Check
        isInvalid={props.isInvalid}
        isValid={props.isValid}
        className={className}
        as='input'
        disabled={props.disabled}
        checked={props.checked}
        bsPrefix={props.bsPrefix}
        id={props.id}
        feedback={props.feedback}
        feedbackTooltip={props.feedbackTooltip}
        label={props.label}
        type={props.type}
        custom
        ref={props.ref}
      />
    </div>
  );
}

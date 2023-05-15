import React from 'react';
import PropTypes from 'prop-types';

function AtomText(props) {
  let className = '';
  if (props.type.toUpperCase() === 'H1') {
    className += 'text-h1 ';
  }
  if (props.type.toUpperCase() === 'H2') {
    className += 'text-h2 ';
  }
  function renderText() {
      return (
        <p
          className={className + props.className}
          style={props.style}
          onClick={props.onClick}
        >
          {props.text}
          {props.mandatory && <span className='mondatory-star'>*</span>}
          {props.details && <span className='pr_5'> : </span>}
        </p>
      );
    
  }

  return renderText();
}

AtomText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.any,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'h1',
    'h2',
  ]),
  mandatory: PropTypes.bool,
  details: PropTypes.bool,
};
AtomText.defaultProps = {
  text: 'Text',
  className: null,
  onClick: null,
  style: null,
  type: 'h1',
  mandatory: false,
  details: false,
};
export default AtomText;

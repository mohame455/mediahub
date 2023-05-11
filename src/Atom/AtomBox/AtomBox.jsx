import React from 'react';
import PropTypes from 'prop-types';
AtomBox.PropTypes = {
  className: PropTypes.string,
  onClick: PropTypes.any,
  style: PropTypes.object,
  type: PropTypes.oneOf(['type1', 'type2', 'type3', 'type4', 'type5'])
};
AtomBox.defaultProps = {
  className: "",
  onClick: null,
  style: null,
  type: 'type1'
};
function AtomBox (props) {
  let className = 'default-box ';
  if (props.type.toUpperCase() === 'TYPE1') {
    className += 'box-1 ';
  }
  if (props.type.toUpperCase() === 'TYPE2') {
    className += 'box-2 ';
  }
  if (props.type.toUpperCase() === 'TYPE3') {
    className += 'box-3 ';
  }
  if (props.type.toUpperCase() === 'TYPE4') {
    className += 'box-4 ';
  }
  if (props.type.toUpperCase() === 'TYPE5') {
    className += 'box-5 ';
  }
  return (
    <div
      className={className + props.className}
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default AtomBox;

import React from 'react'
import PropTypes from 'prop-types';
function AtomCard (props) {
  return (
    <div onClick={props.onClick} className={`card-container ${props.className} `}>{props.children}</div>
  );
}

AtomCard.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

AtomCard.defaultProps = {
  className: '',
  onClick:null
};

export default AtomCard;
import React from 'react';
import PropTypes from 'prop-types';

export default function AtomImg(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      onClick={props.onClick}
      className={props.className}
      width={props.width}
      height={props.height}
    />
  );
}

AtomImg.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string
};

AtomImg.defaultProps = {
  src: '',
  alt: '',
  onClick: null,
  className: 'default-img',
  width: '90px',
  height: '90px'
};

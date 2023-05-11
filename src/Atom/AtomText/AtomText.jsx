import React from 'react';
import PropTypes from 'prop-types';
AtomText.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.any,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'h1',
    'h2',
  ]),
  filter: PropTypes.bool,
  filterText: PropTypes.string,
  mandatory: PropTypes.bool,
  details: PropTypes.bool,
};
AtomText.defaultProps = {
  text: 'Text',
  className: null,
  onClick: null,
  style: null,
  type: 'h1',
  filter: false,
  filterText: '',
  mandatory: false,
  details: false,
};
function AtomText(props) {
  let className = '';
  if (props.type.toUpperCase() === 'H1') {
    className += 'text-h1 ';
  }
  if (props.type.toUpperCase() === 'H2') {
    className += 'text-h2 ';
  }
  function renderText() {
    if (props.filter !== true) {
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
    } else {
      const { firstText, lastText } = renderFilter();
      return (
        <p
          className={className + props.className}
          style={props.style}
          onClick={props.onClick}
        >
          <span style={{ fontWeight: '600', marginRight: '-2px' }}>
            {firstText}
          </span>{' '}
          {lastText}
        </p>
      );
    }
  }
  function renderFilter() {
    const index = props.text
      .toUpperCase()
      .indexOf(props.filterText.toUpperCase());
    const firstText = props.text.slice(index, props.filterText.length);
    const lastText = props.text.slice(
      index + firstText.length,
      props.text.length
    );
    return { firstText: firstText, lastText: lastText };
  }

  return renderText();
}
export default AtomText;

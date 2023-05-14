import React from "react";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import './AtomButton.css'

function AtomButton(props) {
  let className = "";
  if (props.type === "primary") {
    className += "default-btn-primary";
  }
  if (props.type === "secondary") {
    className += "default-btn-secondary";
  }
  if (props.className !== null) {
    className = className + " " + props.className;
  }
  return (
    <Button
      bsPrefix={props.bsPrefix}
      className={className}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}
export default AtomButton;

AtomButton.propTypes = {
  text: PropTypes.string,
  bsPrefix: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.any,
  type: PropTypes.oneOf(["primary", "secondary"]),
};
AtomButton.defaultProps = {
  text: "submit",
  bsPrefix: "default-btn",
  className: null,
  disabled: false,
  onClick: null,
  type: "primary",
};

import React from "react";
import { PropTypes } from "prop-types";
import { Text, Button } from "../../Atom";

export default function MoleculeButton(props) {
  return (
    <div>
      <Button
        text={props.btnText}
        type="primary"
        onClick={props.onClick}
        className={props.className}
      />
      <Text type="H6" text={props.text} className={props.textClassName} />
    </div>
  );
}

MoleculeButton.defaultProps = {
  onClick: null,
  className: "btnCoordinateur",
  textClassName: "connectLabelBtn",
};
MoleculeButton.prototypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  textClassName: PropTypes.string,
};

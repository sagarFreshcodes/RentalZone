import React from "react";
import { Button } from "reactstrap";

const Btn = (props) => {
  return <Button {...props.attrBtn}>{props.children}</Button>;
};

export default Btn;

export const CommonButton = (props) => {
  const commonButton = {
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#0085be",
    color: "white",
    width: `fit - content`,
    boxShadow: `0 3px 8px #0000003d !important`,
    // "--hover-backgroundColor": '"#036c99"',
    // "--focus-backgroundColor": "#0085be",
    // "--focus-boxShadow": "none !important",
    // "--focus-padding": "8px",
    // "--focus-border": "2px solid #036c99",

    "&:hover": {
      backgroundColor: "#036c99",
    },

    "&:focus": {
      backgroundColor: "#0085be",
      boxShadow: "none !important",
      padding: "8px",
      border: "2px solid #036c99",
    },
  };

  return (
    <button id="commonButton" {...props.attr}>
      {props.children}
    </button>

    // <button style={commonButton} {...props.attr}>
    //   {props.children}
    // </button>
  );
};

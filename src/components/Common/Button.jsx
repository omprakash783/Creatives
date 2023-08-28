import React from "react";
import PropTypes from "prop-types";

const Button = ({ icon, text }) => (
  <button className="button">
    <span>{icon}</span> {text}
  </button>
);

Button.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string
};

export default React.memo(Button);

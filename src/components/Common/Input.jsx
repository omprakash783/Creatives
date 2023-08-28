import React from "react";
import PropTypes from "prop-types";

import "../../styles/input.scss";

const Input = ({ label, type, onChange, ...rest }) => (
  <div className="input-container">
    <label>{label}</label>
    <input type={type} onChange={onChange} {...rest} />
  </div>
);

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;

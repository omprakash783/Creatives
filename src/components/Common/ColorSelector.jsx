import React from "react";
import PropTypes from "prop-types";

import "../../styles/colorselector.scss";

const ColorSelector = ({ title, colors, setSelectedColor, onClick }) => {
  const handleClick = (e) => {
    if (setSelectedColor) setSelectedColor(e.target.id);
    if (document.getElementsByClassName("color-selected").length > 0) {
      Array.from(document.getElementsByClassName("color-selected")).forEach(
        (el) => el.classList.remove("color-selected")
      );
    }
    e.target.classList.add("color-selected");
    if (onClick) onClick(e.target.id);
  };

  return (
    <div className="color-container">
      <span>{title}</span>
      <div className="color-body">
        {colors.map((color) => (
          <div
            key={color}
            id={color}
            className="color-circle"
            style={{ backgroundColor: color }}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

ColorSelector.propTypes = {
  title: PropTypes.string,
  colors: PropTypes.array,
  setSelectedColor: PropTypes.func,
  onClick: PropTypes.func
};

export default ColorSelector;

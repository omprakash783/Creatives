import React from "react";
import PropTypes from "prop-types";

import "../../styles/creativebox.scss";

const CreativeBox = ({ data }) => (
  <div
    style={{
      backgroundColor: data.backgroundColor
    }}
    className="creative-box"
  >
    <h2>{data.title}</h2>
    <h3>{data.subtitle}</h3>
  </div>
);

CreativeBox.propTypes = {
  data: PropTypes.shape({
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string
  })
};

export default CreativeBox;

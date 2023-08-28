import React from "react";

import "../../styles/colorskeleton.scss";

const ColorSkeleton = () => (
  <div className="color-skeleton">
    <p></p>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default React.memo(ColorSkeleton);

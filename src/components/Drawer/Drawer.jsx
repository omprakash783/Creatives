import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "../Common/Input.jsx";
import ColorSelector from "../Common/ColorSelector.jsx";

import "../../styles/drawer.scss";

const Drawer = ({ setDrawer, colors, drawerData, setDrawerData }) => {
  const [title, setTitle] = useState();
  const [subtitle, setSubtitle] = useState();
  const [selectedColor, setSelectedColor] = useState();

  useEffect(() => {
    document.getElementById("drawer").classList.add("modal-open");
  }, []);

  const handleDone = () => {
    setDrawerData([
      ...drawerData,
      {
        title,
        subtitle,
        backgroundColor: selectedColor
      }
    ]);
    setDrawer(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubtitleChange = (e) => {
    setSubtitle(e.target.value);
  };

  const doneBtnDisabled = !title || !subtitle || !selectedColor;

  return (
    <div className="modal" id="drawer">
      <div className="modal-head">
        <h3 className="modal-title">Creative Creation</h3>
        <div className="modal-close" onClick={() => setDrawer(false)}>
          X
        </div>
      </div>
      <div className="modal-content">
        <Input
          label="title"
          type="text"
          onChange={handleTitleChange}
          autoFocus
        />
        <Input label="subtitle" type="text" onChange={handleSubtitleChange} />
        <ColorSelector
          title="background color"
          colors={colors}
          setSelectedColor={setSelectedColor}
        />
        <button
          className="done-button"
          disabled={doneBtnDisabled}
          onClick={handleDone}
        >
          DONE
        </button>
      </div>
    </div>
  );
};

Drawer.propTypes = {
  setDrawer: PropTypes.func,
  colors: PropTypes.array,
  drawerData: PropTypes.array,
  setDrawerData: PropTypes.func
};

export default React.memo(Drawer);

import React, { useEffect, useState } from "react";
import Drawer from "../Drawer/Drawer";
import ColorSelector from "../Common/ColorSelector";
import Input from "../Common/Input";
import ColorSkeleton from "../Common/ColorSkeleton";
import CreativeBox from "../Common/CreativeBox";
import "../../styles/home.scss";
import useDebounce from "../../hooks/useDebounce";

const TOTAL_CREATIVES = 5;

const Home = () => {
  const [drawer, setDrawer] = useState();
  const [drawerData, setDrawerData] = useState([]);
  const [colors, setColors] = useState();
  const [filteredColor, setFilteredColor] = useState();
  const [filteredTitle, setFilteredTitle] = useState();

  useEffect(() => {
    fetch("https://random-flat-colors.vercel.app/api/random?count=6")
      .then((res) => res.json())
      .then((res) => {
        setColors(res.colors);
      });
  }, []);

  useEffect(() => {
    document.getElementById("baritem").style.width =
      (drawerData.length / TOTAL_CREATIVES) * 100 + "%";
  }, [drawerData]);

  const handleChange = useDebounce(
    (e) => {
      if (!e.target.value) setFilteredTitle();
      else {
        const filterData = drawerData.filter(
          (data) =>
            data.title === e.target.value || data.subtitle === e.target.value
        );

        const filterColorandSearch = !filteredColor
          ? filterData
          : filterData.filter(
              (data) =>
                data.backgroundColor !== filteredColor[0].backgroundColor
            );

        setFilteredTitle(filterColorandSearch);
      }
    },
    5000,
    []
  );

  const handleColor = (color) => {
    let filterData = drawerData.filter(
      (data) => data.backgroundColor === color
    );
    if (filteredTitle && filteredTitle.includes(filterData)) filterData = [];
    setFilteredColor(filterData);
  };

  const showDrawerData = drawerData && !filteredColor && !filteredTitle;

  return (
    <>
      <div className="header">
        <div className="header-circle" />
        <div className="header-circle" />
        <div className="header-circle" />
      </div>
      <div className="content">
        <h3>Filter By</h3>
        <div className="filter-body">
          {colors ? (
            <ColorSelector
              title="color"
              colors={colors}
              onClick={handleColor}
            />
          ) : (
            <ColorSkeleton />
          )}
          <Input
            label="title / subtitle"
            type="text"
            onChange={handleChange}
            style={{ width: "250px" }}
          />
        </div>
        <div className="progress-bar-container">
          <div className="progress-bar">
            <div className="bar-item" id="baritem"></div>
          </div>
          <div>
            {drawerData.length} / {TOTAL_CREATIVES} Creatives
          </div>
        </div>
        {drawer && (
          <Drawer
            setDrawer={setDrawer}
            colors={colors}
            drawerData={drawerData}
            setDrawerData={setDrawerData}
          />
        )}
        <button
          onClick={() => setDrawer(true)}
          disabled={drawer || drawerData.length === TOTAL_CREATIVES}
          className="creative-button"
        >
          + Add Creative
        </button>
        {showDrawerData &&
          drawerData.map((data) => (
            <CreativeBox key={data.backgroundColor} data={data} />
          ))}
        {filteredColor &&
          filteredColor.map((data) => (
            <CreativeBox key={data.backgroundColor} data={data} />
          ))}
        {filteredTitle &&
          filteredTitle.map((data) => (
            <CreativeBox key={data.backgroundColor} data={data} />
          ))}
      </div>
    </>
  );
};

export default Home;

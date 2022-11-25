import React from "react";
import { Slider } from "@mui/material";
import { generateArray } from "../Functions/GenerateArray";

const GenerateSlider = ({
  updateArray,
  setSorted,
  val,
  setVal,
  setisSorting,
  isSorting,
}) => {
  return (
    <div className="Slider_container">
      <div className="slider">
        {val};
        <Slider
          disabled={isSorting}
          value={val}
          onChange={(e, value) => {
            setVal(value);
            generateArray(updateArray, setSorted, val, setisSorting);
          }}
          max={500}
          min={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default GenerateSlider;

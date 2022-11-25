import React, { useState } from "react";
import { Slider } from "@mui/material";

const SpeedSlider = ({ time, setTime, isSorting }) => {
  const [speed, setSpeed] = useState(5);
  return (
    <div className="Slider_container2">
      <p className="slider_title">SPEED</p>
      <div className="slider2">
        <Slider
          disabled={isSorting}
          value={speed}
          max={20}
          min={1}
          onChange={(e, value) => {
            setSpeed(value);
            setTime(20 - speed);
          }}
          aria-label="Default"
          valueLabelDisplay="auto"
          color="secondary"
        />
      </div>
    </div>
  );
};

export default SpeedSlider;

import React, { useState } from "react";
import "./SelectTip.scss";

const SelectTip = ({ selection, activeTip, tip }) => {
  return (
    <div className="tip-section">
      <label>Select Tip % </label>
      <div className="tip-selection-section">
        <div className="section">
          <div
            className="tip-box"
            onClick={() => {
              activeTip(5);
            }}
            style={{ backgroundColor: tip === 5 ? "hsl(185, 41%, 84%)" : "" }}
          >
            5%
          </div>
          <div
            className="tip-box"
            onClick={() => {
              activeTip(10);
            }}
            style={{ backgroundColor: tip === 10 ? "hsl(185, 41%, 84%)" : "" }}
          >
            10%
          </div>
          <div
            className="tip-box"
            onClick={() => {
              activeTip(15);
            }}
            style={{ backgroundColor: tip === 15 ? "hsl(185, 41%, 84%)" : "" }}
          >
            15%
          </div>
        </div>
        {/* <br /> */}
        <div className="section">
          <div
            className="tip-box"
            onClick={() => {
              activeTip(25);
            }}
            style={{ backgroundColor: tip === 25 ? "hsl(185, 41%, 84%)" : "" }}
          >
            25%
          </div>
          <div
            className="tip-box"
            onClick={() => {
              activeTip(50);
            }}
            style={{ backgroundColor: tip === 50 ? "hsl(185, 41%, 84%)" : "" }}
          >
            50%
          </div>
          <div className="tip-box">
            <input
              onClick={() => {
                activeTip("");
              }}
              onChange={e => {
                activeTip(e.target.value);
              }}
              type="number"
              placeholder="Custom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectTip;

{
  /* <div
  className="tip-box"
  onChange={customInput}
  style={{ backgroundColor: custom !== " " ? "" : "blue" }}
></div>; */
}

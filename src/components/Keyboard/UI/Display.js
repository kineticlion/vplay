import React from "react";
import "./display.css";

const Display = ({currentNote}) => {
  return (
    <div className="container">
        <h2>{currentNote}</h2>
    </div>
  );
};
export default Display;

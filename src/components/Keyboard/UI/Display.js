import React, { useContext } from "react";
import "./display.css";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";

const Display = () => {
  const { currentNote } = useContext(KeyboardContext);
  return currentNote ? (
    <div className="container">
      <h1>{currentNote}</h1>
    </div>
  ) : (
    <div className="container">
      <h1>Play any key</h1>
    </div>
  );
};
export default Display;

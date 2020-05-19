import React, { useContext, useEffect } from "react";
import "./display.css";
import { DisplayContext } from "../contexts/DisplayCtxProvider";

const Display = () => {
  const { note } = useContext(DisplayContext);
  return (
    <>
      <div className="container">
        <h2 className="note-container">{note}</h2>
      </div>
    </>
  );
};
export default Display;

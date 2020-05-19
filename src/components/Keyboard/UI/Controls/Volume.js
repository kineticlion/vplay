import React, { useContext } from "react";
import { KeyboardContext } from "../../contexts/KeyboardCtxProvider";

const Volume = () => {
  const { volume, changeVolume } = useContext(KeyboardContext);
  const handleUpdate = (e) => {
    changeVolume(e.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h4>VOLUME : {parseInt(volume * 10)}%</h4>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        onChange={handleUpdate}
      />
    </div>
  );
};

export default Volume;

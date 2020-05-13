import React, { useContext } from "react";
import { KeyboardContext } from "../../contexts/KeyboardCtxProvider";

const Volume = () => {
  const { volume, changeVolume } = useContext(KeyboardContext);
  const handleUpdate = (e) => {
    changeVolume(e.target.value);
  };
  return (
    <div className="volume">
      <h3>Volume : {parseInt(volume * 10)}%</h3>
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

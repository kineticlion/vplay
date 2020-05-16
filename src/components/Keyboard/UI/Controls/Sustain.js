import React, { useContext } from "react";
import { KeyboardContext } from "../../contexts/KeyboardCtxProvider";

const Sustain = () => {
  const { duration, changeDuration } = useContext(KeyboardContext);
  const handleUpdate = (e) => {
    changeDuration(e.target.value);
  };
  return (
    <div>
      <h3>Sustain : {parseFloat(duration * 1).toFixed(1)}s</h3>
      <input
        type="range"
        min="1"
        max="40"
        defaultValue="10"
        onChange={handleUpdate}
      />
    </div>
  );
};

export default Sustain;

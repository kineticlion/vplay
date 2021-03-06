import React, { useContext } from "react";
import { KeyboardContext } from "../../contexts/KeyboardCtxProvider";

const Release = () => {
  const { release, changeRelease } = useContext(KeyboardContext);
  const handleUpdate = (e) => {
    changeRelease(e.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h4>RELEASE: {parseFloat(release * 1).toFixed(1)}s</h4>
      <input
        type="range"
        min="0"
        max="10"
        defaultValue="10"
        onChange={handleUpdate}
      />
    </div>
  );
};

export default Release;

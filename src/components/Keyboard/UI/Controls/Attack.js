import React, { useContext } from "react";
import { KeyboardContext } from "../../contexts/KeyboardCtxProvider";

const Attack = () => {
  const { attack, changeAttack } = useContext(KeyboardContext);
  const handleUpdate = (e) => {
    changeAttack(e.target.value);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h4>ATTACK : {parseFloat(attack * 1).toFixed(1)}s</h4>
      <input
        type="range"
        min="0"
        max="9"
        defaultValue="0"
        onChange={handleUpdate}
      />
    </div>
  );
};

export default Attack;

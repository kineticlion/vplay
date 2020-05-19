import React, { useContext, useEffect } from "react";
import Key from "./Key";
import "./keys.css";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";
const Keys = ({ octaves, startOctave }) => {
  const { keys, instrument, buildKeys } = useContext(KeyboardContext);

  useEffect(() => {
    buildKeys(startOctave, octaves);
  }, [instrument]);

  return (
    <>
      {keys.map((key, index) => (
        <Key key={index} note={key.note} accidental={key.isAccidental} />
      ))}
    </>
  );
};

export default Keys;

import React, { useContext, useEffect, useState } from "react";
import Key from "./Key";
import "./keys.css";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";
import Spinner from "react-bootstrap/Spinner";
const Keys = ({ octaves, startOctave }) => {
  const { keys, instrument, buildKeys, instrumentName } = useContext(
    KeyboardContext
  );
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    setIsLoading(true);
  }, [instrumentName]);

  useEffect(() => {
    buildKeys(startOctave, octaves);
    setIsLoading(false);
  }, [instrument]);

  return isLoading ? (
    <Spinner
      animation="border"
      style={{
        padding: 45,
        fontSize: 10,
        marginLeft: "35.4vw",
        marginTop: "2vh",
      }}
    />
  ) : (
    <>
      {keys.map((key, index) => (
        <Key key={index} note={key.note} accidental={key.isAccidental} />
      ))}
    </>
  );
};

export default Keys;

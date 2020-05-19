import React, { useContext, useEffect, useState } from "react";
import Key from "./Key";
import "./keys.css";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";
import Spinner from "react-bootstrap/Spinner";
const Keys = ({ octaves, startOctave }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { keys, changeKeys, instrument, buildKeys, handleEvent } = useContext(
    KeyboardContext
  );
  // const buildKeys = () => {
  //   const KEYS = [];
  //   for (
  //     let currentOctave = startOctave;
  //     currentOctave < octaves + startOctave;
  //     currentOctave++
  //   ) {
  //     for (let currentKey = 1; currentKey <= OCTAVE_LENGTH; currentKey++) {
  //       switch (currentKey) {
  //         case 1:
  //           KEYS.push(<Key keyType="white" keyName={`C${currentOctave}`} />);
  //           break;
  //         case 2:
  //           KEYS.push(<Key keyType="black" keyName={`C#${currentOctave}`} />);
  //           break;
  //         case 3:
  //           KEYS.push(<Key keyType="white" keyName={`D${currentOctave}`} />);
  //           break;
  //         case 4:
  //           KEYS.push(<Key keyType="black" keyName={`D#${currentOctave}`} />);
  //           break;
  //         case 5:
  //           KEYS.push(<Key keyType="white" keyName={`E${currentOctave}`} />);
  //           break;
  //         case 6:
  //           KEYS.push(<Key keyType="white" keyName={`F${currentOctave}`} />);
  //           break;
  //         case 7:
  //           KEYS.push(<Key keyType="black" keyName={`F#${currentOctave}`} />);
  //           break;
  //         case 8:
  //           KEYS.push(<Key keyType="white" keyName={`G${currentOctave}`} />);
  //           break;
  //         case 9:
  //           KEYS.push(<Key keyType="black" keyName={`G#${currentOctave}`} />);
  //           break;
  //         case 10:
  //           KEYS.push(<Key keyType="white" keyName={`A${currentOctave}`} />);
  //           break;
  //         case 11:
  //           KEYS.push(<Key keyType="black" keyName={`A#${currentOctave}`} />);
  //           break;
  //         case 12:
  //           KEYS.push(<Key keyType="white" keyName={`B${currentOctave}`} />);
  //           break;
  //         default:
  //           return;
  //       }
  //     }
  //     if (currentOctave === octaves + startOctave - 1) {
  //       KEYS.push(
  //         <Key keyType="white" keyName={`C${octaves + startOctave}`} />
  //       ); //Exceptional case
  //     }
  //   }
  //   return KEYS;
  // };

  useEffect(() => {
    buildKeys(startOctave, octaves);
    setIsLoading(false);
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

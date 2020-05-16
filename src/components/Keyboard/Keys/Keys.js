import React, {useContext, useEffect} from "react";
import Key from "./Key";
import "./keys.css";
import {KeyboardContext} from "../contexts/KeyboardCtxProvider";

const Keys = ({ octaves, startOctave}) => {
  const OCTAVE_LENGTH = 12;
  const {keys,changeKeys,handleEvent} = useContext(KeyboardContext);
   const buildKeys = () => {
    const KEYS = [];
     for (
         let currentOctave = startOctave;
         currentOctave < octaves + startOctave;
         currentOctave++
     ) {
       for (let currentKey = 1; currentKey <= OCTAVE_LENGTH; currentKey++) {
         switch (currentKey) {
           case 1:
             KEYS.push(<Key keyType="white" keyName={`C${currentOctave}`}/>);
             break;
           case 2:
             KEYS.push(<Key keyType="black" keyName={`C#${currentOctave}`}/>);
             break;
           case 3:
             KEYS.push(<Key keyType="white" keyName={`D${currentOctave}`}/>);
             break;
           case 4:
             KEYS.push(<Key keyType="black" keyName={`D#${currentOctave}`}/>);
             break;
           case 5:
             KEYS.push(<Key keyType="white" keyName={`E${currentOctave}`}/>);
             break;
           case 6:
             KEYS.push(<Key keyType="white" keyName={`F${currentOctave}`}/>);
             break;
           case 7:
             KEYS.push(<Key keyType="black" keyName={`F#${currentOctave}`}/>);
             break;
           case 8:
             KEYS.push(<Key keyType="white" keyName={`G${currentOctave}`}/>);
             break;
           case 9:
             KEYS.push(<Key keyType="black" keyName={`G#${currentOctave}`}/>);
             break;
           case 10:
             KEYS.push(<Key keyType="white" keyName={`A${currentOctave}`}/>);
             break;
           case 11:
             KEYS.push(<Key keyType="black" keyName={`A#${currentOctave}`}/>);
             break;
           case 12:
             KEYS.push(<Key keyType="white" keyName={`B${currentOctave}`}/>);
             break;
           default:
             return;
         }
       }
       if (currentOctave === octaves + startOctave - 1) {
         KEYS.push(<Key keyType="white" keyName={`C${octaves + startOctave}`}/>); //Exceptional case
       }
     }
     return KEYS;
   }

  useEffect(()=>{
    let KEYS = buildKeys();
    changeKeys(KEYS);
  },[])


  return (
    <div className="keys-container">
      {keys.map((key, index) => (
        <React.Fragment key={index}>{key}</React.Fragment>
      ))}
    </div>
  );
};

export default Keys;

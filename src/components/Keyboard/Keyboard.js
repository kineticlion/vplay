import React from "react";
import "./keyboard.css";
import Display from "./UI/Display";
import Keys from "./Keys/Keys";
import Volume from "./UI/Controls/Volume";
import Instruments from "./UI/Instruments";
import Attack from "./UI/Controls/Attack";
import Duration from "./UI/Controls/Duration";

const Keyboard = () => {
  const OCTAVE_SIZE = 4; //49 keys = 4 octaves
  const STARTING_OCTAVE = 3;
  return (
    <div className="keyboard-container">
      <div className="ui-container">
        <Instruments />
        <Display />
        <div className="controls">
          <Volume />
          <Attack />
          <Duration />
        </div>
      </div>
      <Keys octaves={OCTAVE_SIZE} startOctave={STARTING_OCTAVE} />
    </div>
  );
};

export default Keyboard;

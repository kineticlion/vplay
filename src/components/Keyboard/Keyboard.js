import React, { useCallback, useContext, useEffect, useState } from "react";
import "./keyboard.css";
import Display from "./UI/Display";
import Keys from "./Keys/Keys";
import Volume from "./UI/Controls/Volume";
import Attack from "./UI/Controls/Attack";
import Sustain from "./UI/Controls/Sustain";
import Release from "./UI/Controls/Release";
import Soundfont from "soundfont-player";
import { KeyboardContext } from "./contexts/KeyboardCtxProvider";
import Instruments from "./UI/Instruments";
import Spinner from "react-bootstrap/Spinner";
const Keyboard = () => {
  const [isLoading, setIsloading] = useState(true);
  const OCTAVES = 4; //set Size of keys
  const STARTING_OCTAVE = 3;
  const { audioCtx, instrumentName, changeInstrument } = useContext(
    KeyboardContext
  );
  const hostName = "https://d1pzp51pvbm36p.cloudfront.net";
  const loadInstrument = useCallback(() => {
    Soundfont.instrument(audioCtx, instrumentName, {
      format: "mp3",
      soundfont: "MusyngKite",
      nameToUrl: (instrumentName, soundfont, format) => {
        return `${hostName}/${soundfont}/${instrumentName}-${format}.js`;
      },
    }).then((instrument) => {
      changeInstrument(instrument);
      setIsloading(false);
    });
  }, [instrumentName]);

  useEffect(() => {
    loadInstrument();
  }, [loadInstrument]);

  return isLoading ? (
    <Spinner animation="border" style={{ padding: 100, fontSize: 10 }} />
  ) : (
    <div className="keyboard-container">
      <div className="ui-container">
        <Instruments />
        <Display />
        <div className="controls">
          <div className="audio-controls">
            <Volume />
          </div>
          <div className="adsr-controls">
            <Attack />
            <Release />
            <Sustain />
          </div>
        </div>
      </div>
      <div className="keys-container">
        <Keys octaves={OCTAVES} startOctave={STARTING_OCTAVE} />
      </div>
    </div>
  );
};

export default Keyboard;

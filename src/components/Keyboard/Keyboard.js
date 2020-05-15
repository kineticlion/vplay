import React, {useCallback, useContext, useEffect} from "react";
import "./keyboard.css";
import Display from "./UI/Display";
import Keys from "./Keys/Keys";
import Volume from "./UI/Controls/Volume";
import Instruments from "./UI/Instruments";
import Attack from "./UI/Controls/Attack";
import Duration from "./UI/Controls/Duration";
import Release from "./UI/Controls/Release";
import Soundfont from "soundfont-player";
import {KeyboardContext} from "./contexts/KeyboardCtxProvider";

const Keyboard = () => {
  const OCTAVE_SIZE = 4; //49 keys = 4 octaves
  const STARTING_OCTAVE = 3;
  const {audioCtx,instrumentName,changeInstrument,currentNote} = useContext(KeyboardContext);
  const hostName = 'https://d1pzp51pvbm36p.cloudfront.net';
  const loadInstrument = useCallback(() =>{
    Soundfont.instrument(audioCtx, instrumentName, {
      format: 'mp3',
      soundfont: "MusyngKite",
      nameToUrl:   (instrumentName, soundfont, format) => {
        return `${hostName}/${soundfont}/${instrumentName}-${format}.js`;
      },
    }).then(instrument => {
      changeInstrument(instrument);
    });
  },[instrumentName]);

  useEffect(()=>{
    loadInstrument();
  },[loadInstrument]);

  return (
    <div className="keyboard-container">
      <div className="ui-container">
        <Instruments />
        <Display currentNote={currentNote}/>
        <div className="controls">
          <div className="audio-controls">
            <Volume />
            <Duration />
          </div>
          <div className="adsr-controls">
            <Attack />
            <Release />
          </div>
        </div>
      </div>
      <Keys octaves={OCTAVE_SIZE} startOctave={STARTING_OCTAVE} />
    </div>
  );
};

export default Keyboard;

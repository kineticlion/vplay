import React from 'react';
import Display from './UI/Display/Display.js';
import Keys from './Keys/Keys';
import './keyboard.css';

const Keyboard = () => {
  const OCTAVE_SIZE = 4;  //49 keys = 4 octaves
   const STARTING_OCTAVE = 3;
  return(
    <div className="keyboard-container">
      <div className="ui-container">
        <Display />
      </div>
      <Keys octaves = {OCTAVE_SIZE} startOctave={STARTING_OCTAVE}/>
    </div>
  );
};

export default Keyboard;

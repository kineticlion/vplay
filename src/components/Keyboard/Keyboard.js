import React from 'react';
import Display from './UI/Display/Display.js';
import Keys from './Keys/Keys';
import './keyboard.css';

const Keyboard = () => {
  const OCTAVE_SIZE = 4;  // 25Keys = 2; 49Keys = 4;
  return(
    <div className="keyboard-container">
      <div className="ui-container">
        <Display />
      </div>
      <Keys octaves = {OCTAVE_SIZE}/>
    </div>
  );
};

export default Keyboard;

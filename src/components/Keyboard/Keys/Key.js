import React from 'react';
import './key.css';
import Soundfont from 'soundfont-player';

const Key = ({keyType, keyName}) => {
  const instrumentName = 'acoustic_grand_piano';
  const addHighlight = (e) => {
    e.currentTarget.classList.add('key-hl');
    const note = e.currentTarget.innerHTML;
    Soundfont.instrument(new AudioContext(),instrumentName,{ soundfont: 'MusyngKite' }).then((instrument)=>{
      instrument.play(note);
    });
  };

  const removeHighlight = (e) =>{
    e.currentTarget.classList.remove('key-hl');
  };

  return keyType === 'black' ?
  <div className="black-key-container">
    <div className="key black-key"
      onMouseDown={e=>addHighlight(e)}
      onMouseUp={e=>removeHighlight(e)}
      onMouseLeave={e=>removeHighlight(e)}>{ keyName }</div>
    </div> :
    <div className="key white-key"
      onMouseDown={e=>addHighlight(e)}
      onMouseUp={e=>removeHighlight(e)}
         onMouseLeave={e=>removeHighlight(e)}>{ keyName }
    </div>;
};

export default Key;

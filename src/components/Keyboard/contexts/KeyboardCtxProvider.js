import React, { createContext, useState } from "react";

export const KeyboardContext = createContext();

const KeyboardCtxProvider = (props) => {
    const [currentNote,setCurrentNote] = useState('Play any key');
  const [volume, setVolume] = useState(4.0);
  const [instrumentName, setInstrumentName] = useState("acoustic_grand_piano");
  const [attack, setAttack] = useState(0);
  const [duration, setDuration] = useState(1.0);
  const [release, setRelease] = useState(1.0);
  const [audioCtx, setAudioCtx] = useState(new window.AudioContext());
  const [nodes,setNodes] = useState(null);
  const [instrument,setInstrument] = useState(null);
  const [isDown,setIsDown] = useState(false);
  const [keys,setKeys] = useState([]);
  const changeInstrumentName = (newInstrumentName) => {
    setInstrumentName(newInstrumentName);
  };
  const changeVolume = (newVolume) => {
    setVolume(newVolume * 0.1);
  };
  const changeAttack = (newAttack) => {
    setAttack(newAttack * 0.1);
  };
  const changeDuration = (newDuration) => {
    setDuration(newDuration * 0.1);
  };
  const changeRelease = (newRelease) => {
    setRelease(newRelease * 0.1);
  };
  const changeNodes = (newNode) =>{
      setNodes(newNode);
  }
  const changeInstrument = (newInstrument)=>{
      setInstrument(newInstrument);
  }
  const changeIsDown = (bool) =>{
      setIsDown(bool);
  }
  const changeKeys = (keys) =>{
      setKeys([...keys]);
  }
  const changeCurrentNote = (newNote) =>{
      setCurrentNote(newNote);
  }
    const playKey = (event) => {
        event.currentTarget.classList.add("key-hl");
        const note = event.currentTarget.innerHTML;
        audioCtx.resume().then(()=> {
            instrument.play(note, null, {
                gain: volume,
                attack: attack,
                duration: duration,
                release: release,
            });
        });
    };


    const stopKey = (event) => {
        event.currentTarget.classList.remove("key-hl");
    };

    const handleEvent = (event,keyName) =>{
        if(event.type==='mouseup'){
            changeIsDown(false);
            stopKey(event);

        }
        if(event.type==="mousedown"){
            changeIsDown(true);
            playKey(event);
        }
        if(event.type==='mouseenter'){
            if(!isDown){
                stopKey(event);
            }  else{
                playKey(event);
                changeIsDown(true);
            }
        }
        if(event.type==='mouseleave'){
            stopKey(event);
            if(!isDown){
                changeIsDown(false);
            }
        }
        if(event.type === 'mouseover'){
            if(!isDown){
                stopKey(event);
            } else {
                playKey(event);
            }
        }

    };
  return (
    <KeyboardContext.Provider
      value={{
          currentNote,
          changeCurrentNote,
        volume,
        changeVolume,
        instrumentName,
        changeInstrumentName,
        attack,
        changeAttack,
        duration,
        changeDuration,
        release,
        changeRelease,
          audioCtx,
          setAudioCtx,
          nodes,
          changeNodes,
          instrument,
          changeInstrument,
          isDown,
          changeIsDown,
          handleEvent,
          playKey,
          stopKey,
          keys,
          changeKeys
      }}
    >
      {props.children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardCtxProvider;

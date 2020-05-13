import React, { createContext, useState } from "react";

export const KeyboardContext = createContext();

const KeyboardCtxProvider = (props) => {
  const [currentNote, setCurrentNote] = useState("");
  const [volume, setVolume] = useState(4.0);
  const [instrument, setInstrument] = useState("acoustic_grand_piano");
  const [attack, setAttack] = useState(0);
  const [duration, setDuration] = useState(1.0);
  const [release, setRelease] = useState(1.0);
  const changeInstrument = (newInstrument) => {
    setInstrument(newInstrument);
  };
  const changeNote = (newNote) => {
    setCurrentNote(newNote);
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
  return (
    <KeyboardContext.Provider
      value={{
        currentNote,
        changeNote,
        volume,
        changeVolume,
        instrument,
        changeInstrument,
        attack,
        changeAttack,
        duration,
        changeDuration,
        release,
        changeRelease,
      }}
    >
      {props.children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardCtxProvider;

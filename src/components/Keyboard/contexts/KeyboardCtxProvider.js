import React, { createContext, useState } from "react";

export const KeyboardContext = createContext();

const KeyboardCtxProvider = (props) => {
  const [volume, setVolume] = useState(4.0);
  const [instrumentName, setInstrumentName] = useState("acoustic_grand_piano");
  const [attack, setAttack] = useState(0);
  const [duration, setDuration] = useState(1.0);
  const [release, setRelease] = useState(1.0);
  const [audioCtx, setAudioCtx] = useState(
    new (window.AudioContext || window.webkitAudioContext)()
  );
  const [nodes, setNodes] = useState(null);
  const [instrument, setInstrument] = useState(null);
  const [isDown, setIsDown] = useState(false);
  const [keys, setKeys] = useState([]);
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
  const changeNodes = (newNode) => {
    setNodes(newNode);
  };
  const changeInstrument = (newInstrument) => {
    setInstrument(newInstrument);
  };
  const changeIsDown = (bool) => {
    setIsDown(bool);
  };
  const changeKeys = (keys) => {
    setKeys([...keys]);
  };
  const buildKeys = (startOctave, octaves) => {
    const NOTES = [
      { note: "C", isAccidental: false },
      { note: "C#", isAccidental: true },
      { note: "D", isAccidental: false },
      { note: "D#", isAccidental: true },
      { note: "E", isAccidental: false },
      { note: "F", isAccidental: false },
      { note: "F#", isAccidental: true },
      { note: "G", isAccidental: false },
      { note: "G#", isAccidental: true },
      { note: "A", isAccidental: false },
      { note: "A#", isAccidental: true },
      { note: "B", isAccidental: false },
    ];
    const KEYS = [];
    const OCTAVE_LENGTH = 11;
    for (
      let currentOctave = startOctave;
      currentOctave < octaves + startOctave;
      currentOctave++
    ) {
      for (let currentKey = 0; currentKey <= OCTAVE_LENGTH; currentKey++) {
        KEYS.push({
          note: `${NOTES[currentKey].note}${currentOctave}`,
          isAccidental: NOTES[currentKey].isAccidental,
        });
      }
    }
    KEYS.push({
      note: `${NOTES[0].note}${octaves}`,
      isAccidental: false,
    });
    setKeys([...KEYS]);
  };
  const addEffects = (event) => {
    const randomColor = getRandomColor();
    document.querySelector(
      ".keyboard-container"
    ).style.boxShadow = `0px 40px 60px ${randomColor}`;
    event.target.classList.add("key-hl");
  };

  const removeEffects = (event) => {
    event.target.classList.remove("key-hl");
    document.querySelector(".keyboard-container").style.boxShadow =
      "0px 40px 60px orange";
  };
  const playKey = (event) => {
    addEffects(event);
    const note = event.currentTarget.innerHTML;
    audioCtx.resume().then(() => {
      instrument.play(note, null, {
        gain: volume,
        attack: attack,
        duration: duration,
        release: release,
      });
    });
  };
  const stopKey = (event) => {
    removeEffects(event);
  };
  const getRandomColor = () => {
    return (
      "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  };
  const handleEvent = (event) => {
    switch (event.type) {
      case "mousedown":
        setIsDown(true);
        playKey(event);
        break;
      case "mouseup":
        setIsDown(false);
        stopKey(event);
        break;
      case "mouseenter":
        if (isDown) {
          playKey(event);
        }
        break;
      default:
        stopKey(event);
        break;
    }
  };
  return (
    <KeyboardContext.Provider
      value={{
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
        changeKeys,
        buildKeys,
      }}
    >
      {props.children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardCtxProvider;

import React, { useContext } from "react";
import "./key.css";
import Soundfont from "soundfont-player";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";

const Key = ({ keyType, keyName }) => {
  const {
    instrument,
    changeNote,
    volume,
    attack,
    duration,
    release,
  } = useContext(KeyboardContext);
  const playKey = (event) => {
    event.currentTarget.classList.add("key-hl");
    const note = event.currentTarget.innerHTML;
    const audioContext = new AudioContext();
    changeNote(note);
    Soundfont.instrument(audioContext, instrument, {
      soundfont: "MusyngKite",
      format: "mp3",
    }).then((instrument) => {
      instrument.play(note, null, {
        gain: volume,
        attack: attack,
        duration: duration,
        release: release,
      });
    });
  };

  const stopKey = (event) => {
    changeNote("Play any key");
    event.currentTarget.classList.remove("key-hl");
  };

  return keyType === "black" ? (
    <div className="black-key-container">
      <div
        className="key black-key"
        onMouseDown={(event) => playKey(event)}
        onMouseUp={(event) => stopKey(event)}
        onMouseOut={(event) => stopKey(event)}
      >
        {keyName}
      </div>
    </div>
  ) : (
    <div
      className="key white-key"
      onMouseDown={(event) => playKey(event)}
      onMouseUp={(event) => stopKey(event)}
      onMouseOut={(event) => stopKey(event)}
    >
      {keyName}
    </div>
  );
};
export default Key;

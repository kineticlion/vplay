import React, { useContext } from "react";
import "./key.css";
import Soundfont from "soundfont-player";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";

const Key = ({ keyType, keyName }) => {
  const instrumentName = "acoustic_grand_piano";
  const { changeNote } = useContext(KeyboardContext);

  const playKey = (e) => {
    e.currentTarget.classList.add("key-hl");
    const note = e.currentTarget.innerHTML;
    Soundfont.instrument(new AudioContext(), instrumentName, {
      soundfont: "MusyngKite",
      format: "mp3",
    }).then((instrument) => {
      instrument.play(note);
    });
    changeNote(note);
  };

  const stopKey = (e) => {
    e.currentTarget.classList.remove("key-hl");
  };

  return keyType === "black" ? (
    <div className="black-key-container">
      <div
        className="key black-key"
        onMouseDown={(e) => playKey(e)}
        onMouseUp={(e) => stopKey(e)}
        onMouseLeave={(e) => stopKey(e)}
      >
        {keyName}
      </div>
    </div>
  ) : (
    <div
      className="key white-key"
      onMouseDown={(e) => playKey(e)}
      onMouseUp={(e) => stopKey(e)}
      onMouseLeave={(e) => stopKey(e)}
    >
      {keyName}
    </div>
  );
};

export default Key;

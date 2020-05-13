import React, { createContext, useState } from "react";

export const KeyboardContext = createContext();

const KeyboardCtxProvider = (props) => {
  const [currentNote, setCurrentNote] = useState("");
  const changeNote = (newNote) => {
    setCurrentNote(newNote);
  };
  return (
    <KeyboardContext.Provider value={{ currentNote, changeNote }}>
      {props.children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardCtxProvider;

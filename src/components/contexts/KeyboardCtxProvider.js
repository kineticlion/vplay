import React, { createContext, useState } from "react";

export const KeyboardContext = createContext();

const KeyboardCtxProvider = (props) => {
  const [currentNote, setCurrentNote] = useState("");
  return (
    <KeyboardContext.Provider value={{ currentNote, setCurrentNote }}>
      {props.children}
    </KeyboardContext.Provider>
  );
};

export default KeyboardCtxProvider;

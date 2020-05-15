import React, {useContext} from "react";
import "./key.css";
import {KeyboardContext} from "../contexts/KeyboardCtxProvider";
import {DisplayContext} from "../contexts/DisplayCtxProvider";

const Key = ({ keyType, keyName}) => {
  const { handleEvent } = useContext(KeyboardContext);
  const {changeNote} = useContext(DisplayContext);
  return keyType === "black" ? (
    <div className="black-key-container">
      <div
        className="key black-key"
        onMouseDown={(event) => {handleEvent(event);changeNote(event);}}
        onMouseUp={(event) => {handleEvent(event);changeNote(event);}}
        onMouseLeave={(event) => handleEvent(event)}
        onMouseEnter={(event) => handleEvent(event)}
        onMouseOver={(event) => {handleEvent(event);changeNote(event);}}
      >
        {keyName}
      </div>
    </div>
  ) : (
    <div
      className="key white-key"
      onMouseDown={(event) => {handleEvent(event);changeNote(event);}}
      onMouseUp={(event) => {handleEvent(event);changeNote(event);}}
      onMouseLeave={(event) => handleEvent(event)}
      onMouseEnter={(event) => handleEvent(event)}
      onMouseOver={(event) => {handleEvent(event);changeNote(event);}}
    >
      {keyName}
    </div>
  );
};
export default Key;

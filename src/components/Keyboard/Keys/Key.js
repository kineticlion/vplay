import React, {useContext} from "react";
import "./key.css";
import {KeyboardContext} from "../contexts/KeyboardCtxProvider";

const Key = ({ keyType, keyName}) => {
  const { handleEvent,changeCurrentNote } = useContext(KeyboardContext);
  return keyType === "black" ? (
    <div className="black-key-container">
      <div
        className="key black-key"
        onMouseDown={(event) => {handleEvent(event); changeCurrentNote(keyName);}}
        onMouseUp={(event) => {handleEvent(event); changeCurrentNote(keyName);}}
        onMouseLeave={(event) => handleEvent(event)}
        onMouseEnter={(event) => handleEvent(event)}
        onMouseOver={(event) => handleEvent(event)}
      >
        {keyName}
      </div>
    </div>
  ) : (
    <div
      className="key white-key"
      onMouseDown={(event) => {handleEvent(event); changeCurrentNote(keyName);}}
      onMouseUp={(event) => {handleEvent(event); changeCurrentNote(keyName);}}
      onMouseLeave={(event) => handleEvent(event)}
      onMouseEnter={(event) => handleEvent(event)}
      onMouseOver={(event) => handleEvent(event)}
    >
      {keyName}
    </div>
  );
};
export default Key;

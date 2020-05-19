import React, { useContext } from "react";
import "./key.css";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";
import { DisplayContext } from "../contexts/DisplayCtxProvider";
const Key = ({ note, accidental }) => {
  const { handleEvent } = useContext(KeyboardContext);
  const { changeNote } = useContext(DisplayContext);
  return accidental ? (
    <div className="black-key-container">
      <div
        className="key black-key"
        onMouseDown={(event) => {
          handleEvent(event);
          changeNote(event);
        }}
        onMouseUp={(event) => {
          handleEvent(event);
          changeNote(event);
        }}
        onMouseEnter={(event) => {
          handleEvent(event);
          changeNote(event);
        }}
        onMouseLeave={(event) => {
          handleEvent(event);
          changeNote(event);
        }}
      >
        {note}
      </div>
    </div>
  ) : (
    <div
      className="key white-key"
      onMouseDown={(event) => {
        handleEvent(event);
        changeNote(event);
      }}
      onMouseUp={(event) => {
        handleEvent(event);
        changeNote(event);
      }}
      onMouseEnter={(event) => {
        handleEvent(event);
        changeNote(event);
      }}
      onMouseLeave={(event) => {
        handleEvent(event);
        changeNote(event);
      }}
    >
      {note}
    </div>
  );
};
export default Key;

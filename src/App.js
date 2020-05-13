import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import KeyboardCtxProvider from "./components/Keyboard/contexts/KeyboardCtxProvider";

function App() {
  return (
    <KeyboardCtxProvider>
      <Keyboard />
    </KeyboardCtxProvider>
  );
}

export default App;

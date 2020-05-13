import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import KeyboardCtxProvider from "./components/Keyboard/contexts/KeyboardCtxProvider";

function App() {
  return (
    <div className="App">
      <KeyboardCtxProvider>
        <Keyboard />
      </KeyboardCtxProvider>
    </div>
  );
}

export default App;

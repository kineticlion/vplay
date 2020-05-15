import React from "react";
import "./App.css";
import Keyboard from "./components/Keyboard/Keyboard";
import KeyboardCtxProvider from "./components/Keyboard/contexts/KeyboardCtxProvider";
import DisplayCtxProvider from "./components/Keyboard/contexts/DisplayCtxProvider";


function App() {
  return (
    <div className="App">
      <KeyboardCtxProvider>
          <DisplayCtxProvider>
            <Keyboard />
          </DisplayCtxProvider>
      </KeyboardCtxProvider>
    </div>
  );
}

export default App;

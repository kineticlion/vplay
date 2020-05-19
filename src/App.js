import React from "react";
import "./App.css";
import KeyboardCtxProvider from "./components/Keyboard/contexts/KeyboardCtxProvider";
import DisplayCtxProvider from "./components/Keyboard/contexts/DisplayCtxProvider";
import Keyboard from "./components/Keyboard/Keyboard";
function App() {
  return (
    <div className="App">
      <KeyboardCtxProvider>
        <DisplayCtxProvider>
          <Keyboard tabIndex="0"/>
        </DisplayCtxProvider>
      </KeyboardCtxProvider>
    </div>
  );
}

export default App;

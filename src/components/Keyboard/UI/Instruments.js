import React, { useState, useEffect, useContext } from "react";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";

const Instruments = () => {
  const [instruments, setInstruments] = useState([]);
  const { instrumentName, changeInstrumentName } = useContext(KeyboardContext);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/danigb/soundfont-player/master/names/musyngkite.json"
    )
      .then((response) => response.json())
      .then((data) => setInstruments(data));
  }, []);

  return (
    <div>
      <h3>Instrument</h3>
      <select
        size="6"
        value={instrumentName}
        onChange={(e) => changeInstrumentName(e.target.value)}
      >
        {instruments.map((instrument, index) => (
          <option key={index}>{instrument}</option>
        ))}
      </select>
    </div>
  );
};

export default Instruments;

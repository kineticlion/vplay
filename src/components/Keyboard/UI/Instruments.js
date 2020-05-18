import React, { useState, useEffect, useContext } from "react";
import { KeyboardContext } from "../contexts/KeyboardCtxProvider";
import fetch from "cross-fetch";
import "./instrument.css";
import Spinner from "react-bootstrap/Spinner";
const Instruments = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [instruments, setInstruments] = useState([]);
  const { instrumentName, changeInstrumentName } = useContext(KeyboardContext);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/danigb/soundfont-player/master/names/musyngkite.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setInstruments(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <Spinner
      style={{
        fontSize: 20,
        marginLeft: "8.5vw",
        padding: 25,
        marginRight: "2.5vw",
      }}
      animation="border"
    ></Spinner>
  ) : (
    <div className="instrument">
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

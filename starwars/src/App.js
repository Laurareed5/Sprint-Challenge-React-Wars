import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "../src/components/Character";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => setCharacters(res.data.results))
      .catch((err) => console.log("Wubba Lubba Dub Dub!", err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
};

export default App;

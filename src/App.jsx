import Hobbies from "./components/Hobbies.jsx";
import Goals from "./components/Goals.jsx";
import Buttons from "./Buttons.jsx";
import Paintings from "./components/ChicagoArt";
import frame from "./images/frame.png";
import { useState } from "react";
import "./App.css";

// renders
function App() {
  return (
    <>
      <h1>Sarah Cyphers</h1>
      <h4>Sarah.Cyphers@neudesic.com</h4>
      <div className="grid-container">
        <Buttons />
        <div className="grid-child aboutMe">
          <h2 className="h2">About Me</h2>
          <p>
            I grew up in northern Virginia and moved to Ohio for college. I am
            currently enrolled at The Ohio State University pursuing a degree in
            information systems with a minor in textiles and CIS. .
          </p>
        </div>
        <Goals />
        <Hobbies />
      </div>
      <div className="grid-container">
        <Paintings />
        <div className="grid-child frame">
          <img src={frame} width={400} height={295} alt="frame" />
        </div>
      </div>
    </>
  );
}

export default App;

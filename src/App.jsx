import Buttons from "./Buttons.jsx";
import { useState } from "react";
import "./App.css";

// renders
function App() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-child contact"></div>
        <div className="grid-child aboutMe">
          <h2 className="h2">About Me</h2>
          <p>
            I grew up in northern Virginia and moved to Ohio for college. I am
            currently enrolled at The Ohio State University pursuing a degree in
            information systems with a minor in textiles and CIS. .
          </p>
        </div>
      </div>
    </>
  );
}

export default App;

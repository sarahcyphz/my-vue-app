import memeP from './images/memeP.jpeg';
import Hobbies from './components/Hobbies.jsx';
import Goals from './components/Goals.jsx';
import Buttons  from './Buttons.jsx';
import Inspos from "./components/Inspo.tsx";
import Kanyes from "./components/Kanye.tsx";
import fish from './images/fish.jpeg';
import { useState } from 'react';
import './App.css';

// renders
function App() {

  const [fesh, setFesh] = useState(false);

  function handleCLick() {
    setFesh(!fesh);
  
  }
  return (
    <>
    <h1>Sarah Cyphers</h1>
    <h4>Sarah.Cyphers@neudesic.com</h4>
    <div className="grid-container">
        <Buttons />
        <Inspos />
      <div className="grid-child aboutMe">
        <h2 className="h2">About Me</h2>
        <p> 
          I grew up in northern Virginia and moved to Ohio for college.
          I am currently enrolled at The Ohio State University pursuing a degree
          in information systems with a minor in textiles and CIS. Previously, I 
          was employed at Starbucks where I worked over the course of 2 years.
        </p>
      </div>
        <Goals/>
        <Hobbies/>
      <div className="grid-child meme">
        <img src={memeP} alt="meme" />
      </div>
      <div className="grid-child specialBtn">
        <button className="specialBtn" onClick={handleCLick}>{(fesh) ? <img src={fish} width = {500} height = {400} /> : "click me" }</button>
      </div>
      </div>

    </>
  );
}

export default App


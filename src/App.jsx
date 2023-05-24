import { useState } from 'react';
import profile from './images/profile.png';
import memeP from './images/memeP.jpeg';
import github from './images/github.png';
import linkedIn from './images/linkedIn.png';
import Hobbies from './components/Hobbies.jsx';
import Goals from './components/Goals.jsx';
// import { buttons } from './buttons.js';
import './App.css';

// renders
function App() {
  return (
    <>
    <h1>Sarah Cyphers</h1>
    <h4>Sarah.Cyphers@neudesic.com</h4>
    <div className="grid-container">
      <div className="grid-child linkBtn">
        <h4>Links:</h4>
        <a href="https://www.linkedin.com/in/sarah-cyphers" target="_blank">
          <img src={linkedIn} width = {50} height = {50} className="logo" alt="Linkedin logo" />
        </a>
        <a href="https://github.com/sarahcyphz" target="_blank">
          <img src={github} width = {45} height = {45} className="logo" alt="Linkedin logo" />
        </a>
        <div>
        </div>
      </div>
      <div className="grid-child profilePic">
        <img src={profile} alt="Profile Pic"/>
      </div>
      <div className="grid-child specialBtn">
        <button className="specialBtn" >Click Me</button>
      </div>
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
      </div>
    </>
  );
}

export default App


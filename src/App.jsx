import profile from './images/profile-pic.png';
import memeP from './images/memeP.jpeg';
import fish from './images/fish.jpeg';
import linkedIn from './images/linkedIn.png';
import { Hobbies } from './components/hobbiesComp';
import { Goals } from './components/goalsComp';
import { useState } from "react";
import './App.css'

export default function App() {

  const listHobbies = Hobbies.map(hobby => 
    (<div key={hobby.id}> {hobby.description}</div>));

  const listGoals = Goals.map(goal =>
    (<li key={goal.id}> {goal.description}</li>));

  return (
    <>
    <h1> Sarah Cyphers </h1>
    <h4> Sarah.Cyphers@neudesic.com</h4>

    <div className="grid-container">

    <div className="grid-child btn">
      <h4>Links:</h4>
      <a href="https://www.linkedin.com/in/sarah-cyphers" target="_blank">
          <img src={linkedIn} width = {50} height = {50} className="logo" alt="Linkedin logo" />
        </a>
      <button>^_^</button>
      <button>click me</button>
    </div>

    <div className="grid-child profilePic">
      <img src={profile} width = {200} height = {200} alt="my profile pic" />
    </div>

    <div className="grid-child aboutMe">
        <h2 className="h2"> About Me </h2>
        <p> 
          I grew up in northern Virginia and moved to Ohio for college.
          I am currently enrolled at The Ohio State University pursuing a degree
          in information systems with a minor in textiles and CIS. Previously, I was employed at Starbucks where I worked over the course of 2 years.
        </p>
      </div>

      <div className="grid-child goals">
        <h2 className="h2"> Internship Goals </h2>
        {listGoals}
      </div>

      <div className="grid-child hobbies">
        <h2 className="h2"> My Hobbies </h2>
        {listHobbies}
      </div>

      <div className="grid-child meme">
        <img src={memeP} width = {200} height = {200} alt="meme" />
      </div>

    </div>
    </>
  );
}


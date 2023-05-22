import profile from './images/profile-pic.jpeg';
import { Hobbies } from './components/hobbiesComp';
import { Goals } from './components/goalsComp';
import './App.css'
import { useState } from 'React';

export default function App() {

  const listGoals = Goals.map(goal =>
    (<li key={goal.id}> {goal.description}</li>));

  const listHobbies = Hobbies.map(hobby => 
    (<li key={hobby.id}> {hobby.description}</li>));
    
  return (
    <>
    <h1> Sarah Cyphers </h1>

    <div className="grid-container">

    <div className="profilePic">
      <img src={profile} width = {175} height = {200} alt="" />
    </div>

    <div className="grid-child aboutMe">
        <h2 className="h2"> About Me </h2>
        <p> 
          I grew up in northern Virginia and moved to Ohio for college. 
          I am currently enrolled at OSU pursuing a degree in information systems with a
          minor in textiles and CIS. Previously, I was employed at Starbucks where I worked over 
          the course of 2 years.
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

    </div>
    </>
  );
}


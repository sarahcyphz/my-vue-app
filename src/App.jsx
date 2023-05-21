import profile from './images/profile-pic.jpeg';

import './App.css'

export default function App() {

  return (
    <>
    <h1> Sarah Cyphers </h1>
     <div className="profilePic">
      <img src={profile} width = {175} height = {200} alt="" />
    </div>

    <div className="grid-container">

      <div className="grid-child aboutMe">
        About Me
        <p> 
          I am currently enrolled at OSU pursuing a degree in information systems with a minor in textiles and CIS.
        </p>
      </div>

      <div className="grid-child goals">
        Internship Goals
        <ul>
          <li>Experience an office environment</li>
          <li>Meet people and make connections</li>
          <li>Obtain a better understanding of how programming languages work/interact with eachother</li>
        </ul>
      </div>

      <div className="grid-child hobbies">
        Hobbies
        <ul>
          <li>Crocheting</li>
          <li>Cooking</li>
          <li>Reading</li>
          <li>Hiking</li>
          <li>Painting & Drawing</li>
          <li>Traveling</li>
        </ul>
      </div>

    </div>
    </>
  );
}


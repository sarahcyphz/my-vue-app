import profile from "./images/profile.png";
import email from "./images/email.svg";
import github from "./images/github.svg";
import linkedin from "./images/linkedin.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-child contact">
          <div className="grid-child profilePic">
            <img src={profile} alt="Profile Pic" />
          </div>
          <h1>Sarah Cyphers</h1>
          <h2>Software Developer</h2>
          <div className="grid-child contactInfo">
            <div className="info-container">
              <img src={email} alt="email logo" />
              <p>Sarah.Cyphers@Nuedesic.com</p>
            </div>
            <div className="info-container">
              <img src={github} alt="github logo" />
              <p>/sarahcyphz</p>
            </div>
            <div className="info-container">
              <img src={linkedin} alt="linkedin logo" />
              <p>Sarah-Cyphers</p>
            </div>
          </div>
        </div>
        <div className="grid-child aboutMe">
          <h2 className="h2">About Me</h2>
          <hr />
          <p>
            Hello! I am an aspiring software developer, I have minimal
            experience in the field but am eager to expand my knowledge and
            skills. I enjoy using my technical skills to tackle business
            challenges and my creative abilities to craft visually appealing
            solutions
          </p>
          <div className="grid-small-container">
            <div className="grid-child experience">
              <h3 className="h3">My Experience</h3>
              <p>
                I am a management information systems major at The Ohio State
                University with a minor in computer information science and
                fashion and retail studies. I currently work as a software
                developer intern at Neudesic. I also have my AZ-900
                certification
              </p>
            </div>
            <div className="grid-child skills">
              <h3 className="h3">My Skills</h3>
              <ul>
                <li>Python</li>
                <li>CSS</li>
                <li>JavaScript & Typescript</li>
                <li>React</li>
                <li>C#</li>
                <li>SQL</li>
                <li>COBOL</li>
                <li>Java</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

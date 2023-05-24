import github from './images/github.png';

export function buttons() {
    return (
      <>
      <a href="https://github.com/sarahcyphz" target="_blank">
        <img src={github} width = {45} height = {45} className="logo" alt="Linkedin logo" />
      </a>
      </>
    );
}
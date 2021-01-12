import './styles/styles.scss';
import me from './img/alsome.png';
import githubIcon from './img/github.svg';
import linkedInIcon from './img/linkedin.svg';

function App() {
  return (
    <div className="wrapper">
      <div className="header">
        <img id="me" src={me} alt="It's me" />
        <h1>Richard Wang</h1>
        <p>richardmxwang [at] gmail.com</p>
        <a href="https://github.com/retagaine/"><img className="icons" src={githubIcon} alt="Github icon"/></a>
		    <a href="https://www.linkedin.com/in/richardmwang/"><img className="icons" src={linkedInIcon} alt="LinkedIn icon"/></a>
      </div>
      <hr/>
      <h2>About</h2>
      <p>Until January 2021, I was a machine learning engineer at <a href="https://www.robustintelligence.com/" target="_blank" rel="noreferrer">Robust Intelligence</a>. As part of my job, I did a mix of machine learning research and engineering, infrastructure work, and front-end development.</p>

      <p>Before that, I graduated from Harvard University, where I received an AB in Computer Science and Mathematics, and an SM in Applied Mathematics.</p>
    </div>
  );
}

export default App;

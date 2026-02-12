import './App.css';

function App() {
  const skills = ['Python', 'Java', 'JavaScript', 'HTML/CSS', 'ReactJS', 'Node.js', 'SQL', 'AWS'];

  return (
    <div className="App">
      <div className="left-section">
        <div className="intro">
          <p className="greeting">Hi, I'm</p>
          <h1 className="name">Shakir</h1>
          <p className="title">a Software Engineer</p>
        </div>
      </div>

      <div className="right-section">
        <div className="content">
          <section className="skills">
            <h2>Tech Stack</h2>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </section>

          <div className="buttons">
            <a 
              href="https://www.linkedin.com/in/dev-shak" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Connect on LinkedIn
            </a>
            <a 
              href="https://drive.google.com/file/d/1xu7WScDJq5MdfpA3H9sSgGnSBQiElwx0/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Resume
            </a>
            <a 
              href="https://github.com/shakirahmed3317" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

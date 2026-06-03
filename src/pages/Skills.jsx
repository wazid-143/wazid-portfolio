import "./Skills.css";
function Skills() {
  return (
     <section id="skills" className="skills" data-aos="fade-up">

      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Frontend</h3>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React.js</span>
          <span>Responsive Design</span>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <span>Python</span>
          <span>Flask</span>
          <span>SQLite</span>
          <span>Jinja2</span>
          <span>REST API</span>
        </div>

        <div className="skill-category">
          <h3>Programming</h3>
          <span>OOP</span>
          <span>Classes & Objects</span>
          <span>Functions</span>
          <span>Data Structures</span>
        </div>

        <div className="skill-category">
          <h3>Tools</h3>
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Vercel</span>
          <span>NPM</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;
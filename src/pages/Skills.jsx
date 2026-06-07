import "./Skills.css";
import {
  FaCss3Alt,
  FaGithub,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiFlask, SiSqlite } from "react-icons/si";

function Skills() {
  return (
     <section id="skills" className="skills" data-aos="fade-up">

      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-category">
          <h3>Frontend</h3>
          <span className="skill-with-icon">
            <FaHtml5 className="skill-icon html-icon" /> HTML
          </span>
          <span className="skill-with-icon">
            <FaCss3Alt className="skill-icon css-icon" /> CSS
          </span>
          <span className="skill-with-icon">
            <FaJs className="skill-icon js-icon" /> JavaScript
          </span>
          <span className="skill-with-icon">
            <FaReact className="skill-icon react-icon" /> React.js
          </span>
          <span>Responsive Design</span>
        </div>

        <div className="skill-category">
          <h3>Backend</h3>
          <span className="skill-with-icon">
            <FaPython className="skill-icon python-icon" /> Python
          </span>
          <span className="skill-with-icon">
            <SiFlask className="skill-icon flask-icon" /> Flask
          </span>
          <span className="skill-with-icon">
            <SiSqlite className="skill-icon sqlite-icon" /> SQLite
          </span>
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
          <span className="skill-with-icon">
            <FaGitAlt className="skill-icon git-icon" /> Git
          </span>
          <span className="skill-with-icon">
            <FaGithub className="skill-icon github-icon" /> GitHub
          </span>
          <span>VS Code</span>
          <span>Vercel</span>
          <span>NPM</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;

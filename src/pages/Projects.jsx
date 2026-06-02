import studentERP from "../assets/images/student-erp.png";
import netflixClone from "../assets/images/netflix-clone.png";
import nextalk from "../assets/images/nextalk.png";
function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <img src={studentERP} alt="Student ERP System" />
          <h3>Student ERP System</h3>

          <p>
            Web-based student management system built using
            Python, Flask and SQLite.
          </p>

          <div className="project-buttons">
            <a
              href="https://student-erp-system-ko6q.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>

            <a
              href="https://github.com/wazid-143/student-erp-system"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={netflixClone} alt="Netflix Clone" />
          <h3>Netflix Clone</h3>

          <p>
            Responsive Netflix-inspired web application built
            using React.js.
          </p>

          <div className="project-buttons">
            <a
              href="https://netflix-clone-liart-eta.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>

            <a
              href="https://github.com/wazid-143/netflix-clone"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>

        <div className="project-card">
            <img src={nextalk} alt="NexTalk Chat App" />
          <h3>NexTalk Chat App</h3>

          <p>
            Modern chat application with clean UI and responsive design.
          </p>

          <div className="project-buttons">
            <a
              href="https://nex-talk-alpha.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button>Live Demo</button>
            </a>

            <a
              href="https://github.com/wazid-143/NexTalk"
              target="_blank"
              rel="noreferrer"
            >
              <button>GitHub</button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
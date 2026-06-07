import "./Projects.css";
import studentERP from "../assets/images/student-erp.png";
import netflixClone from "../assets/images/netflix-clone.png";
import nextalk from "../assets/images/nextalk.png";

const projects = [
  {
    title: "Student ERP System",
    image: studentERP,
    alt: "Student ERP System dashboard",
    description:
      "A full-stack student management system for handling student records, academic details and admin workflows using a Flask backend with SQLite storage.",
    stack: ["Python", "Flask", "SQLite", "Jinja2", "HTML", "CSS"],
    liveUrl: "https://student-erp-system-ko6q.onrender.com",
    githubUrl: "https://github.com/wazid-143/student-erp-system",
    featured: true,
    aos: "flip-left",
  },
  {
    title: "Netflix Clone",
    image: netflixClone,
    alt: "Netflix Clone interface",
    description:
      "A responsive React-based streaming interface focused on reusable UI sections, clean layout structure and polished frontend presentation.",
    stack: ["React.js", "JavaScript", "CSS3", "Vercel"],
    liveUrl: "https://netflix-clone-liart-eta.vercel.app",
    githubUrl: "https://github.com/wazid-143/netflix-clone",
    featured: false,
    aos: "flip-up",
  },
  {
    title: "NexTalk Chat App",
    image: nextalk,
    alt: "NexTalk Chat App interface",
    description:
      "A modern chat application UI with responsive screens, clean visual hierarchy and user-focused messaging layouts.",
    stack: ["React.js", "JavaScript", "CSS3", "Responsive UI"],
    liveUrl: "https://nex-talk-alpha.vercel.app",
    githubUrl: "https://github.com/wazid-143/NexTalk",
    featured: false,
    aos: "flip-right",
  },
];

function Projects() {
  return (
     <section id="projects" className="projects" data-aos="zoom-in">
      <h2>My Projects</h2>
      <p className="projects-intro">
        Selected work showing frontend development, backend practice and deployed project delivery.
      </p>

        <div className="projects-container">
        {projects.map((project) => (
          <div
            className={project.featured ? "project-card featured-project" : "project-card"}
            data-aos={project.aos}
            key={project.title}
          >
            {project.featured && <span className="featured-badge">Featured Project</span>}
            <img src={project.image} alt={project.alt} />

            <div className="project-card-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-buttons">
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>

                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Projects;

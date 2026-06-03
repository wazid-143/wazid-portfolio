import "./Resume.css";
function Resume() {
  return (
     <section id="resume" className="resume" data-aos="fade-up">
      <h2>My Resume</h2>

      <p>
        Download my latest resume to explore my education,
        technical skills and project experience.
      </p>

      <div className="resume-buttons">
        <a href="/resume.pdf" target="_blank">
        <button>View Resume</button>
       </a>

       <a href="/resume.pdf" download>
       <button>Download Resume</button>
       </a>
     </div>
    </section>
  );
}

export default Resume;
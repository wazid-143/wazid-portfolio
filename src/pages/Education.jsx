import "./Education.css";
function Education() {
  return (
      <section id="education" className="education" data-aos="fade-right">
      <h2>Education & Journey</h2>

      <div className="timeline">

        <div className="timeline-card">
          <h3>B.Tech Graduation</h3>
          <p>
            Completed Bachelor of Technology and developed strong programming fundamentals.
          </p>
        </div>

        <div className="timeline-card">
          <h3>Python Development</h3>
          <p>
            Learned Python, OOP, Flask and built backend projects with SQLite.
          </p>
        </div>

        <div className="timeline-card">
          <h3>Frontend Development</h3>
          <p>
            Learned HTML, CSS, JavaScript and React.js to build modern, responsive and interactive web applications.
          </p>
        </div>

        <div className="timeline-card">
          <h3>Real Projects</h3>
          <p>
            Built real-world projects including Student ERP System, Netflix Clone, NexTalk Chat App and Personal Portfolio.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Education;
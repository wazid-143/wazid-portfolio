import "./Home.css";
import profile from "../assets/images/profile.jpg";
function Home() {
  return (
  <div>
     <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Wazid Ansari </h1>

        <h2>Frontend Developer | Python & Flask Developer</h2>

        <p>
          Passionate about building modern, responsive and user-friendly web
          applications.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() =>
            document.getElementById("projects").scrollIntoView({
            behavior: "smooth",
           })
          }
          >
          View Projects
          </button>
           <button
             className="secondary-btn"
             onClick={() =>
             document.getElementById("resume").scrollIntoView({
             behavior: "smooth",
            })
          }
         >
          View Resume
         </button>
        </div>
      </div>

      <div className="hero-image">
        <img src={profile} alt="Wazid Ansari" />
      </div>
     </section>

     <section className="stats">
      <div className="stat-card">
        <h3>4+</h3>
        <p>Projects Completed</p>
      </div>

      <div className="stat-card">
        <h3>B.Tech</h3>
        <p>Graduate</p>
      </div>

      <div className="stat-card">
        <h3>Frontend</h3>
        <p>Developer</p>
      </div>

      <div className="stat-card">
        <h3>Python</h3>
        <p>Flask Developer</p>
      </div>
     </section>
 </div>
  
 );
}

export default Home;
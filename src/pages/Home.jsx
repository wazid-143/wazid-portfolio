import "./Home.css";
import profile from "../assets/images/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
 }, []);
  return (
  <div>
     <section id="home" className="hero">
       <div className="hero-content" data-aos="fade-right">
        <h1>Hi, I'm Wazid Ansari </h1>

        <h2>
         <Typewriter
         words={[
           "Frontend Developer",
           "React Developer",
           "Python Developer",
           "Flask Developer"
         ]}
         loop={0}
         cursor
         cursorStyle="|"
         typeSpeed={80}
         deleteSpeed={50}
          delaySpeed={1500}
        />
        </h2>

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

      <div className="hero-image" data-aos="fade-left">
        <img src={profile} alt="Wazid Ansari" />
      </div>
     </section>

      <section className="stats" data-aos="zoom-in">
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
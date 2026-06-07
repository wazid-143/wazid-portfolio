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
        <span className="hero-eyebrow">Frontend Developer • React.js • Flask • Python</span>
        <h1>Hi, I'm Wazid Ansari</h1>

        <h2>
         <Typewriter
         words={[
           "I build responsive React interfaces",
           "I create practical Python and Flask apps",
           "I turn project ideas into polished web experiences"
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
          B.Tech graduate and Frontend Developer passionate about building responsive,
           web applications using React.js, JavaScript, Python and Flask.
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
        <h3>3+</h3>
        <p>Deployed Projects</p>
      </div>

      <div className="stat-card">
        <h3>B.Tech</h3>
        <p>Engineering Graduate</p>
      </div>

      <div className="stat-card">
        <h3>React</h3>
        <p>Frontend Focus</p>
      </div>

      <div className="stat-card">
        <h3>Flask</h3>
        <p>Backend Practice</p>
      </div>
     </section>
 </div>
  
 );
}

export default Home;

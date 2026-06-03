import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
  const sections = document.querySelectorAll("section");

  const handleScroll = () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;

      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
 }, []);

  return (
    <nav>
       <h2>MY PORTFOLIO</h2>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            href="#home"
            className={activeSection === "home" ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
          Home
          </a>
       </li>

        <li>
         <a
            href="#about"
           className={activeSection === "about" ? "active-link" : ""}
           onClick={() => setMenuOpen(false)}
          >
         About
           </a>
       </li>

        <li>
        <a
         href="#skills"
         className={activeSection === "skills" ? "active-link" : ""}
          onClick={() => setMenuOpen(false)}
        >
         Skills
       </a>
       </li>

       <li>
        <a
          href="#projects"
          className={activeSection === "projects" ? "active-link" : ""}
         onClick={() => setMenuOpen(false)}
        >
        Projects
       </a>
       </li>

        <li>
         <a
        href="#education"
        className={activeSection === "education" ? "active-link" : ""}
         onClick={() => setMenuOpen(false)}
        >
        Education
       </a>
      </li>

      <li>
       <a
       href="#resume"
       className={activeSection === "resume" ? "active-link" : ""}
       onClick={() => setMenuOpen(false)}
      >
       Resume
      </a>
      </li>

     <li>
       <a
       href="#contact"
       className={activeSection === "contact" ? "active-link" : ""}
        onClick={() => setMenuOpen(false)}
       >
        Contact
      </a>
       </li>
    </ul>
    </nav>
  );
}

export default Navbar;
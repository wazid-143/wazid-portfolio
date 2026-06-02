import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Let's Work Together </h2>
       <div className="contact-card">
        <p>
         <FaEnvelope /> Email: vajid5934@gmail.com
       </p>

       <p>
         <FaPhone />    Phone: +91 8874556389
       </p>

       <p>
         <FaMapMarkerAlt /> Location: Deoria, Uttar Pradesh
      </p>
      <div className="contact-links">
        <a
         href="https://github.com/wazid-143"
         target="_blank"
         rel="noreferrer"
        >
       <FaGithub /> GitHub
       </a>

       <a
         href="https://www.linkedin.com/in/wazid-ansari-4a71a0282/"
         target="_blank"
         rel="noreferrer"
        >
        <FaLinkedin /> LinkedIn
       </a>
        </div>
     </div>
    </section>
  );
}

export default Contact;
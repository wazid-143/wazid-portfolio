import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b82irs9",
        "template_aiyfkdc",
        form.current,
        "-CHGcS_l2rIgfduyd"
      )
      .then(
        () => {
          alert("Message Sent Successfully 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2>Let's Work Together</h2>

      <div className="contact-card">
        <p>
          <FaEnvelope /> Email: vajid5934@gmail.com
        </p>

        <p>
          <FaPhone /> Phone: +91 8874556389
        </p>

        <p>
          <FaMapMarkerAlt /> Location: Deoria, Uttar Pradesh
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

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
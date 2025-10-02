import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-full">
      <div className="contact-left">
        <h2 className="contact-heading">Don’t be a stranger</h2>
        <p className="contact-sub">Let’s build something wonderful together!</p>

        <div className="contact-email">
          <FaEnvelope /> 
          <a href="mailto:vkorepu.cs@gmail.com">vkorepu.cs@gmail.com</a>
        </div>
      </div>

      <div className="contact-right">
        <p className="availability">🟣 Available November 2025</p>
        <h3>What would you like to do next?</h3>

        <a href="mailto:vkorepu.cs@gmail.com" className="contact-btn">
          ✉️ Send me a message
        </a>
        <a href="https://cal.com/vkorepu.cs" target="_blank" rel="noopener noreferrer" className="contact-btn alt">
          📅 Book a call
        </a>

        <div className="contact-icons">
          <a href="https://linkedin.com/in/vanikorepu" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/vanikorepu" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
}

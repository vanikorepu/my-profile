import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Vani Korepu. Handcoded with 💜 and caffeine ☕.</p>
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/vanikorepu" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vanikorepu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:vkorepu.cs@gmail.com">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
}

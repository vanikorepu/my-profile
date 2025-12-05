import { Linkedin, Github, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-tagline">
          © 2025 Vani Korepu - Hand-coded with ❤️ and caffeine ☕.
        </p>

        <div className="footer-icons">
          <a
            href="https://www.linkedin.com/in/vanikorepu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/vanikorepu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a href="mailto:vkorepu.cs@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
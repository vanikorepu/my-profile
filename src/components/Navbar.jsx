import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  // Detect which section is visible
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = { threshold: 0.6 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="navbar">
      {/* Left side - Name/Logo */}
      <div className="navbar-left">
        <h1>Vani Korepu</h1>
      </div>

      {/* Center Nav Links */}
      <div className="navbar-center">
        <a href="#hero" className={active === "hero" ? "active" : ""}>Home</a>
        <a href="#about" className={active === "about" ? "active" : ""}>About</a>
        <a href="#work" className={active === "work" ? "active" : ""}>Work</a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
      </div>

      {/* Right Socials */}
      <div className="navbar-right">
        <a href="https://www.linkedin.com/in/vanikorepu" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/vanikorepu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:vanikorepu@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      {/* Hamburger (mobile only) */}
      <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay">
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>
            ✕
          </button>
          <div className="mobile-links">
            <a href="#hero" onClick={() => setIsMobileMenuOpen(false)} className={active === "hero" ? "active" : ""}>
              <span>1</span> HOME
            </a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className={active === "about" ? "active" : ""}>
              <span>2</span> ABOUT
            </a>
            <a href="#work" onClick={() => setIsMobileMenuOpen(false)} className={active === "work" ? "active" : ""}>
              <span>3</span> WORK
            </a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className={active === "contact" ? "active" : ""}>
              <span>4</span> CONTACT
            </a>
          </div>
        </div>
      )}

    </nav>
  );
}

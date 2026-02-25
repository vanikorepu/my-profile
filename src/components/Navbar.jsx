import { useState, useEffect } from "react";
import { Linkedin, Github, Mail, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const updateActive = () => {
      const sections = [...document.querySelectorAll("section[id]")];
      let current = "hero";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 80) {
          current = section.id;
        }
      }
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (hash) => {
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => {
      location.hash = hash;
    });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <h2>Vani Korepu</h2>
      </div>

      <div className="navbar-center">
        <a href="#hero" className={active === "hero" ? "active" : ""}>Home</a>
        <a href="#about" className={active === "about" ? "active" : ""}>About</a>
        <a href="#experience" className={active === "experience" ? "active" : ""}>Experience</a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
      </div>

      <div className="navbar-right">
        <a href="https://www.linkedin.com/in/vanikorepu" target="_blank" rel="noopener noreferrer">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/vanikorepu" target="_blank" rel="noopener noreferrer">
          <Github size={20} />
        </a>
        <a href="mailto:vanikorepu@gmail.com">
          <Mail size={20} />
        </a>
        <div className="hamburger" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay">
          <div className="mobile-overlay-top">
            <h2 className="mobile-logo">Vani Korepu</h2>
            <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          </div>
          <div className="mobile-links">
            <a className={active === "hero" ? "active" : ""} onClick={() => go("#hero")}>Home</a>
            <a className={active === "about" ? "active" : ""} onClick={() => go("#about")}>About</a>
            <a className={active === "experience" ? "active" : ""} onClick={() => go("#experience")}>Experience</a>
            <a className={active === "projects" ? "active" : ""} onClick={() => go("#projects")}>Projects</a>
            <a className={active === "contact" ? "active" : ""} onClick={() => go("#contact")}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}
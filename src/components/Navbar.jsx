import { useState, useEffect } from "react";
import { Linkedin, Github, Mail, Menu, X } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

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

  // Close mobile menu on scroll or click outside
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const close = () => setIsMobileMenuOpen(false);
    window.addEventListener("scroll", close, { passive: true, once: true });
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) setIsMobileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", close);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const go = (hash) => {
    setIsMobileMenuOpen(false);
    requestAnimationFrame(() => { location.hash = hash; });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <a href="#hero" className="navbar-name">Vani Korepu</a>
      </div>

      <div className="navbar-center">
        <a href="#hero" className={active === "hero" ? "active" : ""}>Home</a>
        <a href="#about" className={active === "about" ? "active" : ""}>About</a>
        <a href="#experience" className={active === "experience" ? "active" : ""}>Experience</a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>Projects</a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>Contact</a>
      </div>

      <div className="navbar-right">
        <a href="https://www.linkedin.com/in/vanikorepu" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/vanikorepu" target="_blank" rel="noopener noreferrer" className="nav-icon">
          <Github size={20} />
        </a>
        <a href="mailto:vanikorepu@gmail.com" className="nav-icon">
          <Mail size={20} />
        </a>
        <button
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      {/* Mobile slide-down dropdown */}
      <div className={`mobile-dropdown ${isMobileMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-links">
          <a className={active === "hero" ? "active" : ""} onClick={() => go("#hero")}>Home</a>
          <a className={active === "about" ? "active" : ""} onClick={() => go("#about")}>About</a>
          <a className={active === "experience" ? "active" : ""} onClick={() => go("#experience")}>Experience</a>
          <a className={active === "projects" ? "active" : ""} onClick={() => go("#projects")}>Projects</a>
          <a className={active === "contact" ? "active" : ""} onClick={() => go("#contact")}>Contact</a>
        </nav>
      </div>
    </nav>
  );
}

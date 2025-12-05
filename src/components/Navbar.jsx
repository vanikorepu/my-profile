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
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        root: null,
        rootMargin: "-60px 0px -40% 0px",
        threshold: [0.5, 0.75],
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => sections.forEach((s) => observer.unobserve(s));
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
        <h1>Vani Korepu</h1>
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
          <button className="close-btn" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
          <div className="mobile-links">
            <a className={active === "hero" ? "active" : ""} onClick={() => go("#hero")}><span>1</span> HOME</a>
            <a className={active === "about" ? "active" : ""} onClick={() => go("#about")}><span>2</span> ABOUT</a>
            <a className={active === "experience" ? "active" : ""} onClick={() => go("#experience")}><span>3</span> EXPERIENCE</a>
            <a className={active === "projects" ? "active" : ""} onClick={() => go("#projects")}><span>4</span> PROJECTS</a>
            <a className={active === "contact" ? "active" : ""} onClick={() => go("#contact")}><span>5</span> CONTACT</a>
          </div>
        </div>
      )}
    </nav>
  );
}
import { Linkedin, Github, Mail, CalendarDays } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  const links = [
    { icon: <Linkedin size={18} />, label: "LinkedIn", href: "https://www.linkedin.com/in/vanikorepu" },
    { icon: <Github size={18} />, label: "GitHub", href: "https://github.com/vanikorepu" },
    { icon: <Mail size={18} />, label: "Email", href: "mailto:vkorepu.cs@gmail.com" },
    { icon: <CalendarDays size={18} />, label: "Book a call", href: "https://calendly.com/vanikorepu" },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-tagline">
          © 2025 Vani Korepu - Made with <span aria-hidden="true">❤️</span> and caffeine{" "}
          <span aria-hidden="true">☕</span>
        </p>

        <nav className="footer-links" aria-label="Footer links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

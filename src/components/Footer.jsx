import "./Footer.css";

export default function Footer() {
  const links = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vanikorepu" },
    { label: "Email", href: "mailto:vkorepu.cs@gmail.com" },
    { label: "GitHub", href: "https://github.com/vanikorepu" },
  ];

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-inner">
        <p className="footer-tagline">
          © 2025 Vani Korepu — Made with <span aria-hidden="true">❤️</span> and caffeine{" "}
          <span aria-hidden="true">☕</span>
        </p>

        <nav className="footer-links" aria-label="Footer links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

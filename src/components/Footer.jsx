import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Vani Korepu. All rights reserved.</p>
      <div className="footer-links">
        <a 
          href="https://www.linkedin.com/in/vanikorepu" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/vanikorepu" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:vanikorepu@gmail.com">Email</a>
      </div>
    </footer>
  )
}

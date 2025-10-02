import './Hero.css'
import profilePic from '../assets/vani.png'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <h1>
            Hiya, I’m <span className="highlight">Vani!</span>
          </h1>
          <p className="tagline">
            A coffee-fueled frontend engineer. <br />
            Research Engineer @ Gen AI Global. <br />
            CS Grad @ UMass Amherst.
          </p>

          <p className="location">📍 Based in Massachusetts, USA</p>

          {/* Social Icons */}
          <div className="hero-icons">
            <a
              href="https://www.linkedin.com/in/vanikorepu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/vanikorepu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a href="mailto:vanikorepu@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hero-image">
          <img src={profilePic} alt="Vani Korepu" />
        </div>
      </div>
    </section>
  );
}
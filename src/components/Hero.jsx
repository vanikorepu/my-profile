import './Hero.css'
import profilePic from '../assets/vani.png'
import { Linkedin, Github, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1>
            Hey, I'm <span className="highlight">Vani! Check out what I'm working on!</span>
          </h1>
          <p className="tagline">
            A coffee-fueled frontend engineer. <br />
            Research Engineer @ Gen AI Global. <br />
            CS Grad @ UMass Amherst.
          </p>
          <p className="location">📍 Based in Massachusetts, USA</p>
          <div className="hero-icons">
            <a
              href="https://www.linkedin.com/in/vanikorepu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/vanikorepu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={22} />
            </a>
            <a href="mailto:vanikorepu@gmail.com">
              <Mail size={22} />
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Vani Korepu" />
        </div>
      </div>
    </section>
  );
}